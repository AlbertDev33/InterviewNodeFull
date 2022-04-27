import { ObjectId } from "mongodb";

export interface IResourceShape {
    id?: ObjectId;
    description: string;
    done?: boolean;
    crator_id?: string | ObjectId;
    created_at?: Date;
    isValid?: boolean;
}

export interface IResourceUpdate {
    id: string | ObjectId;
    description: string;
    done?: boolean;
}