import app from './main/config/app.config';
import DatabaseConnectionFacade from './infra/database/facades/database-connection.facade';

DatabaseConnectionFacade
  .multipleConnections()
  .then(() => {
    app.log.info('Databases are running.');
  });

app.listen(3002, (err: Error, address: string) => {
  if (err) {
    app.log.error(err.message);
    process.exit(1);
  }

  app.swagger();
  app.log.info(`The server is running on ${address}`);
});
