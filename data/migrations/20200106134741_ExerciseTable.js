exports.up = function(knex) {
    return knex.schema.createTable("exercise", function(table) {
        table.increments();

        table.string("name", 128)
             .notNullable()   

        table.string("sets", 128);

        table.string("time", 128);
        
        table.string("reps", 128);

        table.string("region", 128);

        table.boolean("completed")
             .defaultTo(false);

        // 🔑 Foreign Key 🔑
        table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');      

        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("workout");
};