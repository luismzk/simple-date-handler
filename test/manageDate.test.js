
const simpleDate = require("../handler")

let date = new Date();

// mm/dd/yyyy date tests
test("date should be 03/13/2020 (default)", () => {
	date.setDate(13)
	date.setMonth(2)
	date.setYear(2020)
	expect( simpleDate.manageDate( date ) ).toBe("03/13/2020");
})

test("date should be 03/13/2020 (argument)", () => {
	date.setDate(13)
	date.setMonth(2)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mm/dd/yyyy" ) ).toBe("03/13/2020");
})

// invalid date sent
test("Invalid date was sent", () => {
	expect( simpleDate.manageDate("b") ).toBe("INVALID DATE");
})

// invalid date sent
test("Invalid format sent", () => {
	expect( simpleDate.manageDate(date, "bb/FFF") ).toBe("INVALID FORMAT");
})