exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('keeperDB', function(table) {
        table.integer("id")
        table.string('title')
        table.string('content')

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('keeperDB')
};