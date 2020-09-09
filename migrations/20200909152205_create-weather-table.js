
exports.up = function(knex) {
  return knex.schema.createTable('weather', table => {
    table.string('temperature')
    table.string('city')
    table.string('country')
    table.string('humidity')
    table.string('description')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists()
};
