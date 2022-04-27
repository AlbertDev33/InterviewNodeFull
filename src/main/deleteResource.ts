import { DeleteResource } from "../delete/service/DeleteResource";
import { MongoConnection } from "../shared/database/mongoConnection";
import { DatabaseRepository } from "../shared/repository/DatabaseRepository";

export function deleteResourceFactory() {
    const databaseConnection = new MongoConnection();
    const repository = new DatabaseRepository(databaseConnection)
    const createResource = new DeleteResource(repository);

    return createResource;
}