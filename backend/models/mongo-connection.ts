import config from '../config'
import { connect } from 'mongoose';


export function connectToMongo() {
    let connection = connect(config.DbConnectionString,
        {
            poolSize: 5,
            reconnectInterval: 20000,
            reconnectTries: 100,
            keepAlive: 1,
            connectTimeoutMS: 30000
        }).then(() =>
            console.log('connected to mongo ' + config.DbConnectionString)
        ).catch((error) =>
            console.log(error)
        );

    return connection;
}

