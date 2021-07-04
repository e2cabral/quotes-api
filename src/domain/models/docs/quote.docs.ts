import {
  Column, Entity, ObjectID, ObjectIdColumn,
} from 'typeorm';

@Entity({ name: 'quotes' })
export default class Quote {
  @ObjectIdColumn()
  _id!: ObjectID;

  @Column()
  quoteText!: string;

  @Column()
  quoteAuthor!: string;
}
