exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('keeperDB').del()
        .then(function() {
            // Inserts seed entries
            return knex('keeperDB').insert([
                { id: 0, title: "Welcome", content: "This is a welcome content, Hello!!" },
                { id: 1, title: "Welcome", content: "This is a welcome content, Hello!!" },
                { id: 2, title: "Welcome", content: "This is a welcome content, Hello!!" }
            ]);
        });
};