import { Ijournal } from './journalclass';

export class journalModal implements Ijournal {
    Id : number;
    EntryNo :number;
    Account :any;
    Description : string;
    Amount : number;
    Currency : any;
}