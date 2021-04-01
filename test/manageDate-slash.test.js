
const simpleDate = require("../handler")

let date = new Date();

// mm/dd/yyyy date tests
test("mm/dd/yyyy date should be 10/13/2020, no left padding(default)", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date ) ).toBe("10/13/2020");
})

test("mm/dd/yyyy date should be 10/13/2020, no left padding(argument)", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mm/dd/yyyy" ) ).toBe("10/13/2020");
})

test("mm/dd/yyyy date should be 03/13/2020, with month left padded (default)", () => {
	date.setDate(13)
	date.setMonth(2)
	date.setYear(2020)
	expect( simpleDate.manageDate( date ) ).toBe("03/13/2020");
})

test("mm/dd/yyyy date should be 03/13/2020, with month left padded (argument)", () => {
	date.setDate(13)
	date.setMonth(2)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mm/dd/yyyy" ) ).toBe("03/13/2020");
})

test("mm/dd/yyyy date should be 10/02/2020, with day left padded (default)", () => {
	date.setDate(2)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date ) ).toBe("10/02/2020");
})

test("mm/dd/yyyy date should be 10/02/2020, with day left padded (argument)", () => {
	date.setDate(2)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mm/dd/yyyy" ) ).toBe("10/02/2020");
})

test("mm/dd/yyyy date should be 03/02/2020, with day and month left padded (default)", () => {
	date.setDate(2)
	date.setMonth(2)
	date.setYear(2020)
	expect( simpleDate.manageDate( date ) ).toBe("03/02/2020");
})

test("mm/dd/yyyy date should be 03/02/2020, with day and month left padded (argument)", () => {
	date.setDate(2)
	date.setMonth(2)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mm/dd/yyyy" ) ).toBe("03/02/2020");
})

// dd/mm/yyyy date tests
test("date should be 15/11/2022", () => {
	date.setDate(15)
	date.setMonth(10)
	date.setYear(2022)
	expect( simpleDate.manageDate( date, "dd/mm/yyyy" ) ).toBe("15/11/2022");
})

test("date should be 03/11/2022, with day left padded", () => {
	date.setDate(3)
	date.setMonth(10)
	date.setYear(2022)
	expect( simpleDate.manageDate( date, "dd/mm/yyyy" ) ).toBe("03/11/2022");
})

test("date should be 15/08/2022, with month left padded", () => {
	date.setDate(15)
	date.setMonth(7)
	date.setYear(2022)
	expect( simpleDate.manageDate( date, "dd/mm/yyyy" ) ).toBe("15/08/2022");
})

test("date should be 03/08/2022, with day and month left padded", () => {
	date.setDate(3)
	date.setMonth(7)
	date.setYear(2022)
	expect( simpleDate.manageDate( date, "dd/mm/yyyy" ) ).toBe("03/08/2022");
})

// mm/dd/yy date tests
test("date should be 11/15/15", () => {
	date.setDate(15)
	date.setMonth(10)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mm/dd/yy" ) ).toBe("11/15/15");
})

test("date should be 11/03/15, with day left padded", () => {
	date.setDate(3)
	date.setMonth(10)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mm/dd/yy" ) ).toBe("11/03/15");
})

test("date should be 08/15/15, with month left padded", () => {
	date.setDate(15)
	date.setMonth(7)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mm/dd/yy" ) ).toBe("08/15/15");
})

test("date should be 08/03/15, with day and month left padded", () => {
	date.setDate(3)
	date.setMonth(7)
	date.setYear(2015)
	expect( simpleDate.manageDate( date, "mm/dd/yy" ) ).toBe("08/03/15");
})

// dd/mm/yy date tests
test("date should be 15/11/19", () => {
	date.setDate(15)
	date.setMonth(10)
	date.setYear(2019)
	expect( simpleDate.manageDate( date, "dd/mm/yy" ) ).toBe("15/11/19");
})

test("date should be 03/11/19, with day left padded", () => {
	date.setDate(3)
	date.setMonth(10)
	date.setYear(2019)
	expect( simpleDate.manageDate( date, "dd/mm/yy" ) ).toBe("03/11/19");
})

test("date should be 15/08/19, with month left padded", () => {
	date.setDate(15)
	date.setMonth(7)
	date.setYear(2019)
	expect( simpleDate.manageDate( date, "dd/mm/yy" ) ).toBe("15/08/19");
})

test("date should be 03/08/19, with day and month left padded", () => {
	date.setDate(3)
	date.setMonth(7)
	date.setYear(2019)
	expect( simpleDate.manageDate( date, "dd/mm/yy" ) ).toBe("03/08/19");
})