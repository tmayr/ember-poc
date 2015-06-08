import DS from 'ember-data';

export default DS.Model.extend({
  created: DS.attr('date', {defaultValue: new Date()}),
  text: DS.attr('string'),

  sender: DS.belongsTo('user', {async: true}),
  recipient: DS.belongsTo('user', {async: true}),
  chat: DS.belongsTo('chat', {async: true})
});
