
const simpleDate = require("../handler")

let date = new Date();

test("month is equal to 01", () => {
	date.setMonth(0)
	expect( simpleDate.getCurrentMonth( date.getMonth() ) ).toBe("01");
})

test("month is equal to 12", () => {
	date.setMonth(11)
	expect( simpleDate.getCurrentMonth( date.getMonth() ) ).toBe("12");
})

test("month is undefined (array out of bounds)", () => {
	expect( simpleDate.getCurrentMonth(12) ).toBeUndefined();
})