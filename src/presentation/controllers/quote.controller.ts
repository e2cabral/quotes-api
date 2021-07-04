import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from 'tsyringe';
import QuoteService from '../../domain/usecases/quote.service';

class QuoteController {
  async loadByAuthor(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { author } = request.query as { author: string };
      reply.send(await QuoteService.loadByAuthor(author));
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async loadByWord(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { word } = request.query as { word: string };
      reply.send(await QuoteService.loadByWord(word));
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async loadQuoteById(request: FastifyRequest, reply: FastifyReply): Promise<void> {
    try {
      const { id } = request.params as { id: string };
      reply.send(await QuoteService.loadQuoteById(id));
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default container.resolve(QuoteController);
