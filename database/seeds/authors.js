exports.seed = (knex) => {
	return knex("authors").del()
		.then(() => knex("authors").insert([
      {
        name: "Yago test",
        picture: "http://site.com",
      },
      {
        name: "Yago test II",
        picture: "http://site.com",
      },
      {
        name: "Teste da Silva III",
        picture: "http://site.com",
      },
    ])
  );
};
