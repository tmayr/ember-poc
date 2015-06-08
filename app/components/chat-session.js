import Ember from 'ember';

export default Ember.Component.extend({
  messages: nil,
  
  resetMessages: function() {
    this.set('messages', []);
  }.on('init'),

  didInsertElement: function(){
    this.set('chatKey', 'chat-'+this.get('ids'));
  },

  getMessages: function(){
    this.get('chat.messages').then((messages) => {
      this.get('messages').pushObjects(messages.slice(0,10));
    });
  }.observes('chat'),

  getChat: function(){
    var store = this.container.lookup('store:main');

    store.find('chat', {
      equalTo: this.get('chatKey')
    }).then((chat) => {
      this.set('chat', chat.get('content')[0]);
    });
  }.observes('chatKey'),
});
