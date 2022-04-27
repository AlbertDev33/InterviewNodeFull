import { IRepository } from "src/shared/repository/protocol/IRepository";

export class ListResources {
    constructor(private respository: IRepository) {}

    public async execute() {
        const resources = await this.respository.list();
        return resources;
    }
}