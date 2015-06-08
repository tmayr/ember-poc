import DS from 'ember-data';

export default DS.Model.extend({
  created: DS.attr('string', {defaultValue: 'deafult'}),
  messages: DS.hasMany('message', {async: true})
})
