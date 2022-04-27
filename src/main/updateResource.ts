import { MongoConnection } from "src/shared/database/mongoConnection";
import { DatabaseRepository } from "src/shared/repository/DatabaseRepository";
import { UpdateResource } from "src/update/service/UpdateResource";

export function updateResourceFactory() {
    const databaseConnection = new MongoConnection();
    const repository = new DatabaseRepository(databaseConnection);
    const updateResource = new UpdateResource(repository);

    return updateResource;
}