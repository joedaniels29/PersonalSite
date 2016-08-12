require 'JSON'
require 'ERB'
require 'mini_magick'
require 'fileutils'

install = true
json = JSON.parse(File.open('app/payload.json', 'rb').read)
projects = json.reject { |x, v| x == 'skills' }.values.flatten

DEFAULT_CARD_HEIGHT=215
DEFAULT_CARD_WIDTH=400
IMAGE_ASSET_LOCATION = '/Users/Joe/Projects/Mine/ImgAssets'
IMAGE_ASSET_OUTPUT_LOCATION = File.join(IMAGE_ASSET_LOCATION, 'output')
IMAGES_LOCATION = './public/assets/images'

def base(src)
  File.basename(src, File.extname(src))
end

def asset_relative(string, src)
  File.join('images', string, base(src))
end

def render(img, output_dir, type, width, height, dpi=1, fit="^")
  img['src'] ||= img['id']
  img["src"] = File.basename(Dir[File.join(IMAGE_ASSET_LOCATION, type, "*")].select { |f| f[/#{img['src']}/] }.first) if File.extname(img['src']).empty?

  image = MiniMagick::Image.open(File.join(IMAGE_ASSET_LOCATION, type, img['src']))
  image.path
  size_string = "#{(img['card-size']||1)*dpi*width}x#{dpi*height}"+fit
  if File.extname(img['src']) != ".svg"
    image.scale size_string
  else
    # image.density 300
  end
  image.format 'png'
  image.background 'none'
  image.gravity 'center'
  if offset = img['offset']
    image.crop "+#{dpi*offset['width']}+#{dpi*offset['height']}"
  end
  image.extent size_string if fit == "^"
  image.format "png"
  image.write File.join(output_dir, "#{base img['src']}#{dpi == 1 ? ".png" : "_#{dpi}x.png"}")
end

# images
projects.each do |p|
  %w(background logo icon screenshot).each do |type|
    if img = p[type]
      if img.kind_of?(Hash) && img['src']
        output_dir = File.join(IMAGE_ASSET_OUTPUT_LOCATION, type)
        `mkdir -p #{output_dir}`
        render(img, output_dir, type, DEFAULT_CARD_WIDTH, DEFAULT_CARD_HEIGHT)
        render(img, output_dir, type,  DEFAULT_CARD_WIDTH, DEFAULT_CARD_HEIGHT,2)
      end
    end
  end
end

output_dir = File.join(IMAGE_ASSET_OUTPUT_LOCATION, "skills")
icons_dir = File.join(output_dir, "icons")
logos_dir = File.join(output_dir, "logos")
FileUtils::mkdir_p [icons_dir, logos_dir]
json["skills"].each do |skill|
  if skill["icon"]
    render(skill, icons_dir, 'skills/icon', 200, 200,1,"")
  elsif skill['logo']
    render(skill, logos_dir, 'skills/logo', 400, 200, 1,"")
  end
end


if install
  FileUtils::mkdir_p IMAGES_LOCATION
  FileUtils::cp_r "#{IMAGE_ASSET_OUTPUT_LOCATION}/.", IMAGES_LOCATION
end


# scss
@grid_item_img = projects.map { |project| src = (project.dig('background', 'src') rescue nil); src && !src.strip.empty? ? "'#{asset_relative("background", src)}'" : 'none' }.join(', ')
@grid_item_colors = projects.map { |project| color = (project.dig('color', 'primary') rescue project.dig('color')); color && !color.strip.empty? ? color : '$default' }.join(', ')
b = binding
File.open('app/styles/dynamic_content.scss', 'w') do |f|
  f.write(ERB.new(File.read('app/styles/dynamic_content.scss.erb')).result(b))
end
