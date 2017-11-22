'use strict';

const DATABASE_URL = process.env.DATABASE_URL || 'postgressql://localhost/dev-blog-app';

exports.DATABASE = {
  clients: 'pg',
  connection: DATABASE_URL,
  debug: true 
};

exports.PORT = process.env.PORT || 8080; 