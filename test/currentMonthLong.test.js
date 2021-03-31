
const simpleDate = require("../handler")

let date = new Date();

// set month 0 english
test("month is equal January, english (default)", () => {
	date.setMonth(0)
	expect( simpleDate.getCurrentMonthLong( date.getMonth() ) ).toBe("January");
})

test("month is equal January, english (parameter, lowercase)", () => {
	date.setMonth(0)
	expect( simpleDate.getCurrentMonthLong( date.getMonth(), "en" ) ).toBe("January");
})

test("month is equal January, english (parameter, uppercase)", () => {
	date.setMonth(0)
	expect( simpleDate.getCurrentMonthLong( date.getMonth(), "EN" ) ).toBe("January");
})

test("month is equal January, english (parameter, random case)", () => {
	date.setMonth(0)
	expect( simpleDate.getCurrentMonthLong( date.getMonth(), "eN" ) ).toBe("January");
})

// set month 0 spanish
test("month is equal Enero, english (parameter, lowercase)", () => {
	date.setMonth(0)
	expect( simpleDate.getCurrentMonthLong( date.getMonth(), "es" ) ).toBe("Enero");
})

test("month is equal Enero, english (parameter, uppercase)", () => {
	date.setMonth(0)
	expect( simpleDate.getCurrentMonthLong( date.getMonth(), "ES" ) ).toBe("Enero");
})

test("month is equal Enero, english (parameter, random case)", () => {
	date.setMonth(0)
	expect( simpleDate.getCurrentMonthLong( date.getMonth(), "eS" ) ).toBe("Enero");
})

// set month 11 english
test("month is equal December, english (default)", () => {
	date.setMonth(11)
	expect( simpleDate.getCurrentMonthLong( date.getMonth() ) ).toBe("December");
})

test("month is equal December, english (parameter, lowercase)", () => {
	date.setMonth(11)
	expect( simpleDate.getCurrentMonthLong( date.getMonth(), "en" ) ).toBe("December");
})

test("month is equal December, english (parameter, uppercase)", () => {
	date.setMonth(11)
	expect( simpleDate.getCurrentMonthLong( date.getMonth(), "EN" ) ).toBe("December");
})

test("month is equal December, english (parameter, random case)", () => {
	date.setMonth(11)
	expect( simpleDate.getCurrentMonthLong( date.getMonth(), "eN" ) ).toBe("December");
})

// set month 11 spanish
test("month is equal Diciembre, english (parameter, lowercase)", () => {
	date.setMonth(11)
	expect( simpleDate.getCurrentMonthLong( date.getMonth(), "es" ) ).toBe("Diciembre");
})

test("month is equal Diciembre, english (parameter, uppercase)", () => {
	date.setMonth(11)
	expect( simpleDate.getCurrentMonthLong( date.getMonth(), "ES" ) ).toBe("Diciembre");
})

test("month is equal Diciembre, english (parameter, random case)", () => {
	date.setMonth(11)
	expect( simpleDate.getCurrentMonthLong( date.getMonth(), "eS" ) ).toBe("Diciembre");
})

test("month is undefined (array out of bounds)", () => {
	expect( simpleDate.getCurrentMonthLong(12) ).toBeUndefined();
})