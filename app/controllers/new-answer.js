import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    submit: function() {
      var newAnswer = this.store.createRecord('answer', {
        author: this.get('answerAuthor'),
        answer: this.get('response'),
        date: new Date()
      });
      newAnswer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(newAnswer);
      question.save();

      this.transitionToRoute('question');
    }
  }
});
