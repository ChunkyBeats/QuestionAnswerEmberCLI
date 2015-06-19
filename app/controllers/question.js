import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,
  isAnswering: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.get('model').save();
      this.set('isEditing', false);
    },
    delete: function() {
      if(confirm('Are You Sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    },

    addAnswer: function() {
      this.set('isAnswering', true);
    },
    deleteanswer: function() {
      if(confirm('Are You Sure?')) {
        this.get('answer').destroyRecord();
      }
    }
  }
});
