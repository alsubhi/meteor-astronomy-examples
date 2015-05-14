Addresses = new Mongo.Collection('addresses');

Address = Astro.Class({
  name: 'Address',
  collection: Addresses,
  fields: {
    city: 'string',
    state: 'string'
  }
});

Members = new Mongo.Collection('members');

Member = Astro.Class({
  name: 'Member',
  collection: Members,
  fields: {
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    age: 'number'
  },
  validators: {
    firstName: Validators.and([
      Validators.str(),
      Validators.minlen(3)
    ]),
    lastName: Validators.and([
      Validators.str(),
      Validators.minlen(3)
    ]),
    email: Validators.and([
      Validators.str(),
      Validators.email(3)
    ]),
    age: Validators.and([
      Validators.num(),
      Validators.gte(18),
      Validators.lte(100)
    ])
  },
  relations: {
    friends: {
      type: 'many',
      class: 'Member'
    },
    address: {
      type: 'one',
      class: 'Address'
    }
  }
});
