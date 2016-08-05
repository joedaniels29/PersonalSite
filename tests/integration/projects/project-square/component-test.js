import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('projects/project-square', 'Integration | Component | projects/project square', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{projects/project-square}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#projects/project-square}}
      template block text
    {{/projects/project-square}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
