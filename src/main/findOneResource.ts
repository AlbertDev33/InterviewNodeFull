import { FindOneResources } from "src/findOne/service/listResource";
import { MongoConnection } from "src/shared/database/mongoConnection";
import { DatabaseRepository } from "src/shared/repository/DatabaseRepository";

export function findOneResourceFactory() {
    const databaseConnection = new MongoConnection();
    const repository = new DatabaseRepository(databaseConnection);
    const updateResource = new FindOneResources(repository);

    return updateResource;
}