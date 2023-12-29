import { connect } from "mongoose"
import { URL } from "url";
import dotenv from "dotenv";

dotenv.config()
const mongoURL = process.env.MONGO_URL?process.env.MONGO_URL:"mongodb://localhost:27017/test";
const url = new URL(mongoURL);
const connectToMongo = () => { connect(mongoURL).then((db) => { console.log(`Database has been connected @ name=${db.connection.name}, address=${url.hostname}`) }) }
export default connectToMongo;