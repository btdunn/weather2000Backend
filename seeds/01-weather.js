
exports.seed = knex => {
  return knex('weather').del()
    .then(() => {
      return knex('weather').insert([{
        temperature: 60,
        city: 'Denver',
        country: 'USA',
        humidity: '60%',
        description: 'Mild',
      },{
        temperature: 90,
        city: 'Houston',
        country: 'USA',
        humidity: '80%',
        description: 'Hot',
      },{
        temperature: 35,
        city: 'Chicago',
        country: 'USA',
        humidity: '100%',
        description: 'Too Hot',
      }]);
    });
};
