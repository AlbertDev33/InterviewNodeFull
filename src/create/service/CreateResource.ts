import { ObjectId } from 'mongodb';
import { Resource } from '../../shared/Entity/Resource';
import { IResourceShape } from '../../shared/interfaces/user';
import { IRepository } from '../../shared/repository/protocol/IRepository';
import { ICreateResource } from './protocol/ICreateResource';

export class CreateResource implements ICreateResource {
    constructor(private repository: IRepository) {}
    
    
    public async execute(resource: IResourceShape): Promise<Resource> {
        resource.crator_id = new ObjectId();
        resource.created_at = new Date();
        resource.done = false;

        const createdResource = await this.repository.create(resource);
        return createdResource;
    }

   
}