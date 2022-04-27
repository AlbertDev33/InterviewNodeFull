import { APIGatewayProxyEvent } from "aws-lambda";
import { updateResourceFactory } from "../main/updateResource";

function bodyParse(event: APIGatewayProxyEvent) {
    return JSON.parse(event.body)
}

export async function updateResource(event: APIGatewayProxyEvent) {
    const resource = bodyParse(event);
    console.log(event.pathParameters.id)
    const createdResource = await updateResourceFactory().execute(event.pathParameters.id, resource)
    return createdResource;
}