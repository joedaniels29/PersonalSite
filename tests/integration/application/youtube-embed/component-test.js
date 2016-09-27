import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('application/youtube-embed', 'Integration | Component | application/youtube embed', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{application/youtube-embed}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#application/youtube-embed}}
      template block text
    {{/application/youtube-embed}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
