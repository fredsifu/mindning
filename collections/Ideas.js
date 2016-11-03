/* global SimpleSchema */

Ideas = new Mongo.Collection('ideas');

Ideas.allow({
  insert: function (userId, doc) {
    return !!userId;
  },
  update: function (userId, doc) {
    return !!userId;
  }
});

var IdeaSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function () {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function () {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({

});

Ideas.attachSchema(IdeaSchema);