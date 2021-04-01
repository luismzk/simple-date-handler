
const simpleDate = require("../handler")

let date = new Date();

// invalid date sent
test("Invalid date was sent", () => {
	expect( simpleDate.manageDate("b") ).toBe("INVALID DATE");
})

// invalid format sent
test("Invalid format sent", () => {
	expect( simpleDate.manageDate(date, "bb/FFF") ).toBe("INVALID FORMAT");
})
