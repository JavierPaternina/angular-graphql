import gql from 'graphql-tag';
import { Book } from './types';

export const BooksQuery = gql`
    query BooksQuery{
      books{
        title
        author
      }
    }
 `;
export interface BooksResponse {
  books: Book[];
  Loading: boolean;
 }

