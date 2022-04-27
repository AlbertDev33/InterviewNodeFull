import { MongoClient } from 'mongodb'

const { MONGO_CONNECTION, DB_NAME } = process.env;

export class MongoConnection {
    private mongoConnection: MongoClient | undefined;

    public async connection() {
        if (!this.mongoConnection) {
            this.mongoConnection = await MongoClient.connect(MONGO_CONNECTION as string);

        }
        return this.mongoConnection.db(DB_NAME);
    }
}