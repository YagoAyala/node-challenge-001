const env = process.env.NODE_ENV || "development";
const config = require("./knex-file")[env];

module.exports = require("knex")(config);
