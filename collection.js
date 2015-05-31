Users = new Mongo.Collection('users');

User = Astro.Class({
  name: 'User',
  collection: Users,
  fields: {
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    age: 'number',
    addresses: {
      type: 'array',
      default: []
    }
  },
  methods: {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  validators: {
    firstName: [
      Validators.required(),
      Validators.string(),
      Validators.minLength(3)
    ],
    lastName: [
      Validators.required(),
      Validators.string(),
      Validators.minLength(3)
    ],
    email: [
      Validators.required(),
      Validators.string(),
      Validators.unique(),
      Validators.email(3)
    ],
    age: [
      Validators.required(),
      Validators.number(),
      Validators.gte(18),
      Validators.lte(100)
    ],
    addresses: [
      Validators.required(),
      Validators.array(),
      Validators.minLength(1, 'Provide at least one address')
    ],
    'addresses.$': [
      Validators.object(),
      Validators.has('city'),
      Validators.has('state')
    ],
    'addresses.$.city': [
      Validators.required(),
      Validators.string(),
      Validators.minLength(2)
    ],
    'addresses.$.state': [
      Validators.required(),
      Validators.string(),
      Validators.length(2)
    ]
  },
  behaviors: ['timestamp']
});
