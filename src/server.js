import express from "express";
import cors from "cors";
import bodyParser,{ urlencoded, json } from "body-parser";
import { connect } from "../utils/db";
import { router } from "../routes/router";
import {checkUser} from '../auth/basicAuth';
import morgan from 'morgan'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(urlencoded({ extended: true }))
app.use('/api',checkUser,router)

app.use('/api/*',()=>{console.log(404, 'Not found')})



export const start = async () => {
  try {
    await connect();
    app.listen(2000,'0.0.0.0', () => {
      console.log(`REST API on http://localhost:2000/api`);
    });
  } catch (err) {
    console.error(err);
  }
}




