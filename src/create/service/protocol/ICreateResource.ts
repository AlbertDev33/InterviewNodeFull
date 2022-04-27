import { Resource } from "../../../shared/Entity/Resource";
import { IResourceShape } from "../../../shared/interfaces/user";

export interface ICreateResource {
    execute(user: IResourceShape): Promise<Resource>;
}