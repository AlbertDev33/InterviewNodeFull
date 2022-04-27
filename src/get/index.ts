import { listResourceFactory } from "src/main/listResource";

export async function listResource() {
    const createdResource = await listResourceFactory().execute()
    return createdResource;
}