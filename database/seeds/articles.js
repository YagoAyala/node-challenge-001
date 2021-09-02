exports.seed = (knex) => {
	return knex("articles").del()
		.then(() => knex("articles").insert([
      {
        title: "Yago",
        category: "JungleDevs",
        summary: "YeahIloveJungleDevs",
        firstParagraph: "HowitstoworkonJungleDevs",
        body: "itsjustatest",
        authorId: 1,
      },
      {
        title: "Yagooo",
        category: "ahhhh",
        summary: "itsjustatest",
        firstParagraph: "WelcometoJungleDevs",
        body: "letmeinnn",
        authorId: 1,
      },
      {
        title: "test",
        category: "test",
        summary: "test",
        firstParagraph: "test",
        body: "testt",
        authorId: 3,
      },
    ])
  );
};
