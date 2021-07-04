import Quote from '../models/docs/quote.docs';

export default interface IQuoteService {
  // eslint-disable-next-line no-unused-vars
  loadByWord(word: string): Promise<Array<Quote>>;
  // eslint-disable-next-line no-unused-vars
  loadByAuthor(author: string): Promise<Array<Quote>>;
  // eslint-disable-next-line no-unused-vars
  loadQuoteById(id: string): Promise<Quote>;
}
