import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import { createResource } from './create';
import { deleteResource } from './delete';
import { findOneResource } from './findOne';
import { listResource } from './get';
import { updateResource } from './update';

const callFunction = {
    POST: async (event: APIGatewayProxyEvent) => createResource(event),
    PUT: async (event: APIGatewayProxyEvent) => updateResource(event),
    GET: async () => listResource(),
    DELETE: async (event: APIGatewayProxyEvent) => deleteResource(event),
}

export async function handler(event: APIGatewayProxyEvent, context: Context) {
    let response;

    try {
        const resource = await callFunction[event.requestContext.httpMethod](event);
        console.log(resource)
        response = {
            statusCode: 200,
            body: JSON.stringify(resource)
        }
    } catch (err) {
        response = {
            statusCode: 400,
            body: JSON.stringify(err)
        }
    }

    return response;
}