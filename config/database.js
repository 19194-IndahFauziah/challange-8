const {
<<<<<<< HEAD
  DB_USER = '',
  DB_PASSWORD = '',
  DB_NAME = 'bcr',
  DB_HOST = '127.0.0.1',
  DB_PORT = '5432',
=======
  DB_USER = "",
  DB_PASSWORD = "",
  DB_NAME = "bcr",
  DB_HOST = "127.0.0.1",
  DB_PORT = "5432",
>>>>>>> 5aba1e2839d996bfeb98e339bc405bc64b38d4a7
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
<<<<<<< HEAD
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
=======
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
>>>>>>> 5aba1e2839d996bfeb98e339bc405bc64b38d4a7
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
<<<<<<< HEAD
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
=======
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
>>>>>>> 5aba1e2839d996bfeb98e339bc405bc64b38d4a7
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
<<<<<<< HEAD
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },

};
=======
    database: `${DB_NAME}_production`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  }
}
>>>>>>> 5aba1e2839d996bfeb98e339bc405bc64b38d4a7
