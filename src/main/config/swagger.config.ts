import swagger from 'fastify-swagger';
import { FastifyInstance } from 'fastify';

export const Options = {
  routePrefix: '/v1/api/docs/verbs',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Verb Search API',
      description: 'An API to search verbs',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
};

export default (app: FastifyInstance): void => {
  app.register(swagger, Options);
};
