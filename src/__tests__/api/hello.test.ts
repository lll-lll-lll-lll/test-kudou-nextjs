import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';
import helloHandler from "@/pages/api/hello";


describe('/api/test', () => {
    test('hello world, method GET', async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: "GET",
        })
        await helloHandler(req, res)
        expect(res._getStatusCode()).toBe(200)
    })
    test("hello world: POST method", async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: "POST",
            body: { message: "hello world" }
        })
        await helloHandler(req, res)
        expect(res._getStatusCode()).toBe(200)
    })
    test("hello world: DELETE method", async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: "DELETE",
            body: { message: "hello world" }
        })
        await helloHandler(req, res)
        expect(res._getStatusCode()).toBe(405)
    })
    test("hello world: error content", async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: "DELETE",
            body: { message: "hello world" }
        })
        await helloHandler(req, res)
        expect(res._getJSONData().message).toBe("not implemented method")
        expect(res._getStatusCode()).toBe(405)
    })
})
