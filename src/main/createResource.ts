import { CreateResource } from "../create/service/CreateResource";
import { MongoConnection } from "../shared/database/mongoConnection";
import { DatabaseRepository } from "../shared/repository/DatabaseRepository";

export function createResourceFactory() {
    const databaseConnection = new MongoConnection();
    const repository = new DatabaseRepository(databaseConnection)
    const createResource = new CreateResource(repository);

    return createResource;
}