import 'reflect-metadata';
import fastify from 'fastify';
import setupRoutes from './routes.config';
import setupSwagger from './swagger.config';

const app = fastify({ logger: true });

setupRoutes(app);
setupSwagger(app);

export default app;
