const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, 'config', '.env'),
});
require('colors');

const { PORT = 3000 } = process.env;
const app = require('./app');
const connectDb = require('./config/db');

(async () => {
  await connectDb();
})();

const server = app.listen(PORT, () => {
  console.log(
    `Server is running. Use this API on port: ${
      server.address().port
    }`.green.italic
  );
});
