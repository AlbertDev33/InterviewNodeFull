import { IRepository } from "src/shared/repository/protocol/IRepository";

export class FindOneResources {
    constructor(private respository: IRepository) {}

    public async execute(id: any) {
        console.log(id)
        const resources = await this.respository.findOne(id);
        return resources;
    }
}