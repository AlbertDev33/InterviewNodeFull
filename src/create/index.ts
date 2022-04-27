import { APIGatewayProxyEvent } from "aws-lambda";
import { createResourceFactory } from "../main/createResource";

function bodyParse(event: APIGatewayProxyEvent) {
    return JSON.parse(event.body)
}

export async function createResource(event: APIGatewayProxyEvent) {
    const resource = bodyParse(event);
    const createdResource = await createResourceFactory().execute(resource)
    return createdResource;
}