import { APIGatewayProxyEvent } from "aws-lambda";
import { findOneResourceFactory } from "src/main/findOneResource";

function bodyParse(event: APIGatewayProxyEvent) {
    return JSON.parse(event.body)
}

export async function findOneResource(event: APIGatewayProxyEvent) {
    const findOneResource = await findOneResourceFactory().execute(event.pathParameters);
    return findOneResource;
}