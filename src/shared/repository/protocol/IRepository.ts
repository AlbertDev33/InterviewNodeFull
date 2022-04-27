import { Resource } from "../../Entity/Resource";
import { IResourceShape, IResourceUpdate } from "../../interfaces/user";

export interface IRepository {
    create(resource: IResourceShape): Promise<Resource>;
    update(id: string, resource: IResourceUpdate): Promise<any>;
    list(): Promise<Resource[]>;
    findOne(id: string): Promise<Resource>;
    delete(id: string): Promise<Resource>;
}