import mongoose from 'mongoose';
import { env } from './environment/env.js';

//mongoose intially has it's own implementation for promises now it is a partt of JS runtime so we want to use the ones that are built into node that's why 
mongoose.Promise = global.Promise;

export const mongoUri =
    `mongodb://${env.dbName}:${env.key}@${env.dbName}.mongo.cosmos.azure.com:${env.cosmosPort}/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@react-demo-cosmos-db@`


export const connect = () => {
    return mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
}

