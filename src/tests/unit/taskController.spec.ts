// in the last class we were testing the services (functions), but we should also be testing the controllers.
// install mock express. It's mocking libraries for req and res.
// // yarn add -D @jest-mock/express

// here we are mocking the html server/responses. You can also mock call-back functions (you might need to if they have other dependencies that are not available)

import { getAllTasks } from "../../controllers/taskController";
import {getMockReq, getMockRes} from '@jest-mock/express'

describe('getAllTasks', () => {
    test('should send a res through res.send once', () => {
        // Arrange
        const reqMock = getMockReq() // this is mocking the request that usually requires a live html server
        const { res } = getMockRes() // this is mocking the response that usually requires a live html server

        // Act
        getAllTasks(reqMock, res)

        // Assert
        expect(res.send).toBeCalledTimes(1)
    })
})

/*
describe('getOneTask', () => {
    test('should send 404 if not exists ', () => {
        // Arrange
        const reqMock = getMockReq({ param: {id: '22'} as any}) // this is mocking the request that usually requires a live html server
        const { res } = getMockRes() // this is mocking the response that usually requires a live html server

        // Act
        getAllTasks(reqMock, res)

        // Assert
        expect(res.statusCode).toBe(404)
    })
})
*/