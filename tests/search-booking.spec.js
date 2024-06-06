// @ts-check
const { test, expect } = require('@playwright/test')

test('Search bookings', async ({ request }) => {  
    const response = await request.get('/booking')
    console.log(await response.json())
    expect(response.ok()).toBeTruthy()
    expect(response.status)
})

test('Search bookings by ID', async ({ request }) => {  
    const response = await request.get('/booking/260')
    const jsonBody = await response.json()
    console.log(jsonBody)
    expect(response.ok()).toBeTruthy()
    expect(response.status)
    expect(jsonBody.firstname).toBe('Josh')
    expect(jsonBody.lastname).toBe('Allen')
    expect(jsonBody.totalprice).toBe(111)
})


