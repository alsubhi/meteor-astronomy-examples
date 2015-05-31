Router.route('/', {
  name: 'users',
  template: 'Users',
  waitOn: function() {
    return Meteor.subscribe('users');
  }
});

Router.route('/edit/:_id', {
  name: 'edit',
  template: 'Edit',
  waitOn: function() {
    return Meteor.subscribe('user', this.params._id);
  }
});

Router.route('/add', {
  name: 'add',
  template: 'Add'
});
