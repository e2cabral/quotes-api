import { createConnections } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import Postgres from '../postgres.database';
import Mongodb from '../mongodb.database';

export default class DatabaseConnectionFacade {
  static async multipleConnections(): Promise<void> {
    const pg = Postgres.getConnection();
    const mongo = Mongodb.getConnection();

    await createConnections([
      pg as PostgresConnectionOptions,
      mongo as MongoConnectionOptions,
    ]);
  }
}
