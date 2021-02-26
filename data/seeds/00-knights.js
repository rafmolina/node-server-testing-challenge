
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('knights')
    .truncate()
    .then(function() {
      return knex('knights').insert([
        { name: 'brienne' },
        { name: 'jaime' },
        { name: 'loras' },
        { name: 'sir arthur dayne of the morning star' },
      ]);
    });
};

