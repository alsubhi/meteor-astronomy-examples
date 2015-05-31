Template.Users.helpers({
  users: function() {
    return Users.find({}, {
      sort: {
        age: -1
      }
    });
  }
});

Template.Edit.helpers({
  user: function() {
    var route = Router.current();
    return Users.findOne(route.params._id);
  }
});

Template.Add.helpers({
  user: function() {
    return new User();
  }
});
