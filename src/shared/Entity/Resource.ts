import { ObjectId } from "mongodb";

export type Resource = {
    id?: ObjectId;
    description?: string;
    done?: boolean;
    creator_id?: Date;
    created_at?: Date;
}