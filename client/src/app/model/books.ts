export interface IBook {
    _id: string;
    bookTitle: string;
    topic: string;
    author: string;
    cost: number;
    description:string;
    rating:number;
    count:number;
    issued: boolean;
}