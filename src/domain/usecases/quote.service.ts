import IQuoteService from '../protocols/i-quote.service';
import QuoteRepository from '../../data/repositories/usecases/quote.repository';
import Quote from '../models/docs/quote.docs';

class QuoteService implements IQuoteService {
  private repository: QuoteRepository;

  constructor(repository: QuoteRepository) {
    this.repository = repository;
  }

  loadByAuthor(author: string): Promise<Array<Quote>> {
    try {
      return this.repository.loadByAuthor(author);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadByWord(word: string): Promise<Array<Quote>> {
    try {
      return this.repository.loadByWord(word);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  loadQuoteById(id: string): Promise<Quote> {
    try {
      return this.repository.loadQuoteById(id);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new QuoteService(new QuoteRepository());
