
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
        temperature: 95,
        city: 'Chicago',
        country: 'USA',
        humidity: '100%',
        description: 'Too Hot',
      },{
        temperature: 20,
        city: 'Seattle',
        country: 'USA',
        humidity: '20%',
        description: 'cold',
      },{
        temperature: 100,
        city: 'Scottsdale',
        country: 'USA',
        humidity: '10%',
        description: 'dry',
      },{
        temperature: 80,
        city: 'Detroit',
        country: 'USA',
        humidity: '70%',
        description: 'muggy',
      },{
        temperature: 55,
        city: 'St. Louis',
        country: 'USA',
        humidity: '70%',
        description: 'nice',
      },{
        temperature: 85,
        city: 'New York',
        country: 'USA',
        humidity: '85%',
        description: 'Too hot',
      },{
        temperature: 96,
        city: 'Miami',
        country: 'USA',
        humidity: '90%',
        description: 'ow',
      },{
        temperature: 75,
        city: 'Los Angeles',
        country: 'USA',
        humidity: '60%',
        description: 'pretty good',
      },{
        temperature: 65,
        city: 'San Francisco',
        country: 'USA',
        humidity: '40%',
        description: 'light jacket weather',
      }]);
    });
};
