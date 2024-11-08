import { IComments } from "./IComments";
import { IPosts } from "./IPosts";

export interface IAll {
    posts: IPosts[];
    comments: IComments[];
}