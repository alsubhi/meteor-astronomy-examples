Users = new Mongo.Collection('users');

User = Astro.Class({
  name: 'User',
  collection: Users,
  fields: {
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    age: 'number',
    address: {
      type: 'object',
      default: {
        city: null,
        state: null
      }
    }
  },
  methods: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  validators: {
    // firstName: [
    //   Validators.required(),
    //   Validators.minlen(3)
    // ],
    // lastName: [
    //   Validators.required(),
    //   Validators.minlen(3)
    // ],
    // email: [
    //   Validators.required(),
    //   Validators.unique(),
    //   Validators.email(3)
    // ],
    // age: [
    //   Validators.required(),
    //   Validators.gte(18),
    //   Validators.lte(100)
    // ],
    address: [
      Validators.object(),
      Validators.has('city'),
      Validators.has('state')
    ],
    'address.city': [
      Validators.string(),
      Validators.minlen(2)
    ],
    'address.state': [
      Validators.string(),
      Validators.length(2)
    ]
  },
  behaviors: ['timestamp']
});
