import { IResourceUpdate } from "src/shared/interfaces/user";
import { IRepository } from "src/shared/repository/protocol/IRepository";

export class UpdateResource {
    constructor(private repository: IRepository) {}

    public async execute(id: string, resource: IResourceUpdate) {
        return this.repository.update(id, resource);
    }
}