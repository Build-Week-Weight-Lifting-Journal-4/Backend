exports.up = function(knex) {
    return knex.schema.createTable("workout", function(table) {
        table.increments();

        table.string("name", 128)
             .notNullable()
             .unique();
  
        // 🔑 Foreign Key 🔑
        table.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete("RESTRICT");     

        // 🔑 Foreign Key 🔑
        table.integer('exercise_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('exercise')
        .onUpdate('CASCADE')
        .onDelete("RESTRICT"); 

        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("workout");
};