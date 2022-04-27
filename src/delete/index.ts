import { APIGatewayProxyEvent } from "aws-lambda";
import { deleteResourceFactory } from "../main/deleteResource";

export async function deleteResource(event: APIGatewayProxyEvent) {
    const createdResource = await deleteResourceFactory().execute(event.pathParameters.id)
    return createdResource;
}