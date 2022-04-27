import { ListResources } from "../get/service/listResource";
import { MongoConnection } from "../shared/database/mongoConnection";
import { DatabaseRepository } from "../shared/repository/DatabaseRepository";

export function listResourceFactory() {
    const databaseConnection = new MongoConnection();
    const repository = new DatabaseRepository(databaseConnection)
    const listResource = new ListResources(repository);

    return listResource;
}