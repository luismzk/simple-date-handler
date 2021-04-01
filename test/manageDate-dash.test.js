
const simpleDate = require("../handler")

let date = new Date();

// mm-dd-yyyy date tests
test("date should be 11-15-2015", () => {
	date.setDate(15)
	date.setMonth(10)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mm-dd-yyyy" ) ).toBe("11-15-2015");
})

test("date should be 11-03-2015, with day left padded", () => {
	date.setDate(3)
	date.setMonth(10)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mm-dd-yyyy" ) ).toBe("11-03-2015");
})

test("date should be 08-15-2015, with month left padded", () => {
	date.setDate(15)
	date.setMonth(7)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mm-dd-yyyy" ) ).toBe("08-15-2015");
})

test("date should be 08-03-2015, with day and month left padded", () => {
	date.setDate(3)
	date.setMonth(7)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mm-dd-yyyy" ) ).toBe("08-03-2015");
})

// dd-mm-yyyy date tests
test("date should be 15-11-2022", () => {
	date.setDate(15)
	date.setMonth(10)
	date.setYear(2022)
	expect( simpleDate.manageDate( date, "dd-mm-yyyy" ) ).toBe("15-11-2022");
})

test("date should be 03-11-2022, with day left padded", () => {
	date.setDate(3)
	date.setMonth(10)
	date.setYear(2022)
	expect( simpleDate.manageDate( date, "dd-mm-yyyy" ) ).toBe("03-11-2022");
})

test("date should be 15-08-2022, with month left padded", () => {
	date.setDate(15)
	date.setMonth(7)
	date.setYear(2022)
	expect( simpleDate.manageDate( date, "dd-mm-yyyy" ) ).toBe("15-08-2022");
})

test("date should be 03-08-2022, with day and month left padded", () => {
	date.setDate(3)
	date.setMonth(7)
	date.setYear(2022)
	expect( simpleDate.manageDate( date, "dd-mm-yyyy" ) ).toBe("03-08-2022");
})

// mm-dd-yy date tests
test("date should be 11-15-15", () => {
	date.setDate(15)
	date.setMonth(10)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mm-dd-yy" ) ).toBe("11-15-15");
})

test("date should be 11-03-15, with day left padded", () => {
	date.setDate(3)
	date.setMonth(10)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mm-dd-yy" ) ).toBe("11-03-15");
})

test("date should be 08-15-15, with month left padded", () => {
	date.setDate(15)
	date.setMonth(7)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mm-dd-yy" ) ).toBe("08-15-15");
})

test("date should be 08-03-15, with day and month left padded", () => {
	date.setDate(3)
	date.setMonth(7)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mm-dd-yy" ) ).toBe("08-03-15");
})

// dd-mm-yy date tests
test("date should be 15-11-19", () => {
	date.setDate(15)
	date.setMonth(10)
	date.setYear(2019)
	expect( simpleDate.manageDate( date, "dd-mm-yy" ) ).toBe("15-11-19");
})

test("date should be 03-11-19, with day left padded", () => {
	date.setDate(3)
	date.setMonth(10)
	date.setYear(2019)
	expect( simpleDate.manageDate( date, "dd-mm-yy" ) ).toBe("03-11-19");
})

test("date should be 15-08-19, with month left padded", () => {
	date.setDate(15)
	date.setMonth(7)
	date.setYear(2019)
	expect( simpleDate.manageDate( date, "dd-mm-yy" ) ).toBe("15-08-19");
})

test("date should be 03-08-19, with day and month left padded", () => {
	date.setDate(3)
	date.setMonth(7)
	date.setYear(2019)
	expect( simpleDate.manageDate( date, "dd-mm-yy" ) ).toBe("03-08-19");
})
