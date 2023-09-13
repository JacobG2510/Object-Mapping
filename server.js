const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();

const sequelize = new Sequelize(
    process.env.ecommerce_db,
    process.env.JacobG2510,
    process.env.win,
    {
        host:process.env.JacobG2510,
        dialect: 'mysql',
    }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(PORT, () => {
    console.log(`server is running oon port ${PORT}`)
})