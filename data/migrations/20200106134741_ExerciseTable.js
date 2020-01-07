exports.up = function(knex) {
    return knex.schema.createTable("exercise", function(table) {
        table.increments();

        table.string("name", 128)
             .notNullable()   

        table.string("amount", 128);

        table.string("time", 128);

        table.string("region", 128);

        table.boolean("completed")
             .defaultTo(false);

        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("workout");
};