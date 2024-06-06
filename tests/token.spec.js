// @ts-check
const { test, expect } = require('@playwright/test')

var tokenReceived

test('Partial update booking', async ({ request }) => {

    const response = await request.post('/auth', {
        data: {
            "username": "admin",
            "password": "password123"
        }
    })

    const responseBody = await response.json()
    tokenReceived = responseBody.token
    console.log(tokenReceived)

    const partialUpdateRequest = await request.patch('/booking/1535', {
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
            "Cookie" : `token=${tokenReceived}`
        },
        data: {
            "firstname" : "James",
            "lastname" : "Brown"
        }
    })
    console.log(await partialUpdateRequest.json())
})