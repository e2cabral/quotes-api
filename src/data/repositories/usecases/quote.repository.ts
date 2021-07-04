import { getMongoRepository } from 'typeorm';
import IQuoteRepository from '../protocols/i-quote.repository';
import Quote from '../../../domain/models/docs/quote.docs';

export default class QuoteRepository implements IQuoteRepository {
  loadByAuthor(author: string): Promise<Array<Quote>> {
    try {
      const handler = getMongoRepository(Quote);
      return handler
        .find({
          where: {
            quoteAuthor: new RegExp(`^${author}`),
          },
          take: 100,
          order: {
            quoteAuthor: 'ASC',
          },
        });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadByWord(word: string): Promise<Array<Quote>> {
    try {
      const handler = getMongoRepository(Quote);
      return handler
        .find({
          where: {
            quoteText: new RegExp(`${word}`),
          },
          take: 100,
          order: {
            quoteText: 'ASC',
          },
        });
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadQuoteById(id: string): Promise<Quote> {
    try {
      const handler = getMongoRepository(Quote);
      return handler.findOneOrFail(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
