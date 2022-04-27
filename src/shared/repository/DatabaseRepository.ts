import { Db, ObjectId } from "mongodb";
import { Resource } from "../Entity/Resource";
import { IResourceShape, IResourceUpdate } from "../interfaces/user";
import { IDatabaseConnection } from "./protocol/IDatabaseConnection";
import { IRepository } from "./protocol/IRepository";

const COLLECTION_NAME = 'resource';

export class DatabaseRepository implements IRepository {
    connection: Promise<Db>;

    constructor(connect: IDatabaseConnection) {
        this.connection = connect.connection();
    }
    public async create(resource: IResourceShape): Promise<Resource> {
        const { insertedId } = await (await this.connection)
            .collection<Resource>(COLLECTION_NAME)
            .insertOne(resource);
        console.log(insertedId)
        resource.id = insertedId;
        console.log(resource)
        return resource;
    }

    public async update(id: string, resource: IResourceUpdate): Promise<any> {
        const { value } = await (await this.connection)
            .collection(COLLECTION_NAME)
            .findOneAndUpdate({
            _id: new ObjectId(id)
        }, {
            $set: resource
        }, {
            returnDocument: 'after'
        })
        return value;
    }
    
    public async list(): Promise<any[]> {
        const resources = await (await this.connection)
            .collection(COLLECTION_NAME)
            .find({
                isValid: true
            }).toArray();
        return resources;
    }

    public async findOne(id: string): Promise<Resource> {
        const resource = await (await this.connection)
            .collection<Resource>(COLLECTION_NAME)
            .findOne({
                _id: new ObjectId(id),
                isVaild: true
        });

        return resource;
    }

    public async delete(id: string): Promise<Resource> {
        const { value } = await (await this.connection)
            .collection<Resource>(COLLECTION_NAME)
            .findOneAndUpdate({
            _id: new ObjectId(id),
        }, {
            $set: {
                isValid: false
            }
        }, {
            returnDocument: 'after'
        });

        return value;
    }
}