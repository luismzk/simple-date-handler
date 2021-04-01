
const simpleDate = require("../handler")

let date = new Date();

// mmddyyyy date tests
test("date should be 11152015", () => {
	date.setDate(15)
	date.setMonth(10)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mmddyyyy" ) ).toBe("11152015");
})

test("date should be 11032015, with day left padded", () => {
	date.setDate(3)
	date.setMonth(10)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mmddyyyy" ) ).toBe("11032015");
})

test("date should be 08152015, with month left padded", () => {
	date.setDate(15)
	date.setMonth(7)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mmddyyyy" ) ).toBe("08152015");
})

test("date should be 08032015, with day and month left padded", () => {
	date.setDate(3)
	date.setMonth(7)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mmddyyyy" ) ).toBe("08032015");
})

// ddmmyyyy date tests
test("date should be 15112022", () => {
	date.setDate(15)
	date.setMonth(10)
	date.setYear(2022)
	expect( simpleDate.manageDate( date, "ddmmyyyy" ) ).toBe("15112022");
})

test("date should be 03112022, with day left padded", () => {
	date.setDate(3)
	date.setMonth(10)
	date.setYear(2022)
	expect( simpleDate.manageDate( date, "ddmmyyyy" ) ).toBe("03112022");
})

test("date should be 15082022, with month left padded", () => {
	date.setDate(15)
	date.setMonth(7)
	date.setYear(2022)
	expect( simpleDate.manageDate( date, "ddmmyyyy" ) ).toBe("15082022");
})

test("date should be 03082022, with day and month left padded", () => {
	date.setDate(3)
	date.setMonth(7)
	date.setYear(2022)
	expect( simpleDate.manageDate( date, "ddmmyyyy" ) ).toBe("03082022");
})

// mmddyy date tests
test("date should be 111515", () => {
	date.setDate(15)
	date.setMonth(10)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mmddyy" ) ).toBe("111515");
})

test("date should be 110315, with day left padded", () => {
	date.setDate(3)
	date.setMonth(10)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mmddyy" ) ).toBe("110315");
})

test("date should be 081515, with month left padded", () => {
	date.setDate(15)
	date.setMonth(7)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mmddyy" ) ).toBe("081515");
})

test("date should be 080315, with day and month left padded", () => {
	date.setDate(3)
	date.setMonth(7)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mmddyy" ) ).toBe("080315");
})

// ddmmyy date tests
test("date should be 151119", () => {
	date.setDate(15)
	date.setMonth(10)
	date.setYear(2019)
	expect( simpleDate.manageDate( date, "ddmmyy" ) ).toBe("151119");
})

test("date should be 031119, with day left padded", () => {
	date.setDate(3)
	date.setMonth(10)
	date.setYear(2019)
	expect( simpleDate.manageDate( date, "ddmmyy" ) ).toBe("031119");
})

test("date should be 150819, with month left padded", () => {
	date.setDate(15)
	date.setMonth(7)
	date.setYear(2019)
	expect( simpleDate.manageDate( date, "ddmmyy" ) ).toBe("150819");
})

test("date should be 030819, with day and month left padded", () => {
	date.setDate(3)
	date.setMonth(7)
	date.setYear(2019)
	expect( simpleDate.manageDate( date, "ddmmyy" ) ).toBe("030819");
})