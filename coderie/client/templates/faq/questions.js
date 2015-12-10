Template.homeQuestions.events({
    'submit form': function(event) {
        event.preventDefault();
        var data = SimpleForm.processForm(event.target);
    }
});
