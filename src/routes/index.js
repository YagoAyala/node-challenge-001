module.exports = (app) => {
	app.use("/api", [
		require("./migrate.route"),
		require("./authenticate.route"),
		require("./articles.route"),
		require("./authors.route"),
	]);
};
