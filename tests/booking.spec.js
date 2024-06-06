// @ts-check
const { test, expect } = require('@playwright/test')

test('Booking', async ({ request }) => {  
    const response = await request.post('/booking', {
        data: {
            "firstname" : "Jessika",
            "lastname" : "Silva",
            "totalprice" : 201,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2024-01-01",
                "checkout" : "2024-01-01"
            },
            "additionalneeds" : "All inclusive"
        }
    })
    console.log(await response.json())
    const responseBody = await response.json()

    expect(responseBody.booking).toHaveProperty("firstname" , "Jessika")
    expect(responseBody.booking).toHaveProperty("depositpaid" , true)

})