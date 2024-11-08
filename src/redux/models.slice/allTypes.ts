import { IComments } from "../../models/IComments";
import { IPosts } from "../../models/IPosts";

export type AllSliceType = {
    posts: IPosts[];
    comments: IComments[];
};