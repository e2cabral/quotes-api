export default class Postgres {
  static getConnection(): {
    name: string,
    type: string,
    url: string,
    synchronize: boolean,
    entities: Array<unknown>,
    } {
    return {
      name: 'pg',
      type: 'postgres',
      url: 'postgres://postgres:mypassword@localhost:5432/verbs',
      synchronize: true,
      entities: ['src/domain/entities/*.ts'],
    };
  }
}
