import { IResourceUpdate } from "src/shared/interfaces/user";
import { IRepository } from "src/shared/repository/protocol/IRepository";

export class DeleteResource {
    constructor(private repository: IRepository) {}

    public async execute(id: string) {
        return this.repository.delete(id);
    }
}