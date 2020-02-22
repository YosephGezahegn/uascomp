const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    database: "prouas",
    user: "postgres",
    password: "almialmi"
    //if we have a password and a username we add it here like user:'', password:''
  }
});

module.exports = knex;
