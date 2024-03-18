
import express from 'express';
// import { Sequelize } from 'sequelize';
import { sequelizeConfig } from './sequelize-config';

const app = express();
const port = 3001;

app.get('/', (req: any, res: any) => {
  sequelizeConfig.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err: any) => {
      console.error('Unable to connect to the database:', err);
    });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});