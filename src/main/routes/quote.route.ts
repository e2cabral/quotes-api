import { FastifyInstance } from 'fastify';
import QuoteController from '../../presentation/controllers/quote.controller';

export default (app: FastifyInstance) => {
  app.register((instance: FastifyInstance, opts, done) => {
    instance
      .get('/quotes', {
        handler: QuoteController.loadByWord,
        schema: {
          querystring: {
            type: 'object',
            properties: {
              word: { type: 'string' },
            },
          },
        },
      })
      .get('/quotes/:id', {
        handler: QuoteController.loadQuoteById,
        schema: {
          params: {
            type: 'object',
            properties: {
              id: { type: 'string' },
            },
          },
        },
      })
      .get('/quotes/author', {
        handler: QuoteController.loadByAuthor,
        schema: {
          querystring: {
            type: 'object',
            properties: {
              name: { type: 'string' },
            },
          },
        },
      });
    done();
  }, { prefix: 'v1/api' });
};
