//Meteor.subscribe("ideas");

Template.Brain.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('ideas');
  });
});

Template.Brain.helpers({
  ideas: function () {
    // accessing database
    // Can add through the console with command : db.resolutions.insert({ title: "My title here", createdAt: new Date() });
    return Ideas.find();
  }
});

/*
Template.Brain.events({
'submit .new-idea': function (event) {
  var idea = event.target.idea.value;
  
  //Meteor.call("addIdea", idea);
  
  event.target.idea.value = '';
  
  return false;
}
});*/