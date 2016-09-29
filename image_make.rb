require 'JSON'
require 'ERB'
require 'mini_magick'
require 'fileutils'

install = true
projects = JSON.parse(File.open('app/payload.json', 'rb').read).values.flatten.reject{|x| x["hidden"]}
other_types = JSON.parse(File.open('app/skills/skills.json', 'rb').read)
other_types['company'] = JSON.parse(File.open('app/skills/company.json', 'rb').read)['company']

DEFAULT_CARD_HEIGHT=215
DEFAULT_CARD_WIDTH=400
ICON_WIDTH = 125
LOGO_WIDTH = ICON_WIDTH * 2
IMAGE_ASSET_LOCATION = '/Users/Joe/Projects/Mine/ImgAssets'
IMAGE_ASSET_OUTPUT_LOCATION = File.join(IMAGE_ASSET_LOCATION, 'output')
IMAGES_LOCATION = './public/assets/images'

@written = 0

def base(src)
  File.basename(src, File.extname(src))
end

def asset_relative(string, src)
  File.join('images', string, base(src))
end


def render(img:, type:, width:, height:, dpi: 1, fit:)
  out = File.join(IMAGE_ASSET_OUTPUT_LOCATION, type)
  FileUtils::mkdir_p  out
  img['src'] ||= img['id']
  img['src'] =
      File.basename(Dir[File.join(IMAGE_ASSET_LOCATION, type, '*')]
                        .select { |f| f[/#{img['src']}/] }.first) if File.extname(img['src']).empty? rescue throw "OMG the file for #{img['src']} is missing!"

  image = MiniMagick::Image.open(File.join(IMAGE_ASSET_LOCATION, type, img['src']))
  size_string = "#{(img['card-size']||1)*dpi*width}x#{dpi*height}"

  image.format('png') do |cmd|
    cmd.background 'none'
    cmd.channel 'rgba'
    cmd.alpha 'Set'
    cmd.scale(size_string+fit)
    cmd.gravity 'center'
    cmd.density 300
    if (options = img['options'])
      options.each do |k, v|
        cmd.send k, v
      end
    end
    if (offset = img['offset'])
      cmd.crop "+#{dpi*offset['width']}+#{dpi*offset['height']}"
    end
    cmd.extent size_string
  end

  image.write File.join(out, "#{base img['src']}#{dpi == 1 ? '.png' : "_#{dpi}x.png"}")
  @written += 1
end
def sq(x)
  {width: x, height: x}
  end
def both(x)
  {logo: x, icon:x}
end
def scale(w, h)
  {width: w/2, height: h/2}
end

def device(w, h)
  {portrait: scale(w, h), landscape: scale(h, w)}
end

SIZES = {
    projects: {
        background: {width: DEFAULT_CARD_WIDTH, height: DEFAULT_CARD_HEIGHT, fit: '^'},
        screenshot: {width: DEFAULT_CARD_WIDTH, height: DEFAULT_CARD_HEIGHT},
        logo: {width: LOGO_WIDTH, height: ICON_WIDTH},
        icon: {width: ICON_WIDTH, height: ICON_WIDTH},
    },
    skill: {
        logo: {width: LOGO_WIDTH, height: ICON_WIDTH},
        icon: {width: ICON_WIDTH, height: ICON_WIDTH},
    },

    company: {
        logo: {width: 200, height: 75},
        icon: {width: 75, height: 75},
    },
    platform: both(sq((125))),
    screenshot: {
        iPad: device(768, 1024),
        iPhone: device(375, 667),
        watch: device(272, 340),
        web: scale(1000, 800),
    }
}

projects.each do |project|
  SIZES[:projects].keys.each do |imageNameKey|
    if (image_config = project[imageNameKey.to_s]) && image_config.kind_of?(Hash) && image_config['src']
      output_dir = File.join(IMAGE_ASSET_OUTPUT_LOCATION, imageNameKey.to_s)
      [1, 2].each do |i|
        size = SIZES[:projects][imageNameKey]
        render(img: image_config,
               type: imageNameKey.to_s,
               width: size[:width],
               height: size[:height],
               dpi: i,
               fit: size[:fit] || '')
      end
    end
  end
end

other_types.each do |k, v|
  v.each do |e|
    if (type = e['icon'] && 'icon'|| e['logo'] && 'logo')
      [1, 2].each do |i|
        size = SIZES[k.to_sym][type.to_sym]
        render(img: e,
               type: "#{k.to_s}/#{type.to_sym}",
               width: size[:width],
               height: size[:height],
               dpi: i,
               fit: '')
      end
    end
  end
end


if install
  FileUtils::mkdir_p IMAGES_LOCATION
  FileUtils::cp_r "#{IMAGE_ASSET_OUTPUT_LOCATION}/.", IMAGES_LOCATION
end


# scss
@grid_item_img = projects.map { |project| src = (project.dig('background', 'src') rescue nil); src && !src.strip.empty? ? "'#{asset_relative('background', src)}'" : 'none' }.join(', ')
@grid_item_colors = projects.map { |project| color = (project.dig('color', 'primary') rescue project.dig('color')); color && !color.strip.empty? ? color : '$default' }.join(', ')
b = binding
File.open('app/styles/dynamic_content.scss', 'w') do |f|
  f.write(ERB.new(File.read('app/styles/dynamic_content.scss.erb')).result(b))
end
puts "wrote #{@written} images."