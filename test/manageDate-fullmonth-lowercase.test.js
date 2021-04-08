
const simpleDate = require("../handler")

let date = new Date();

// MM dd, yyyy date tests
test("MM dd, yyyy date should be October 13, 2020, no left padding, default language (english)", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MM dd, yyyy" ) ).toBe("October 13, 2020");
})

test("MM dd, yyyy date should be October 09, 2020, with left padding, default language (english)", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MM dd, yyyy" ) ).toBe("October 09, 2020");
})

test("MM dd, yyyy date should be October 13, 2020, no left padding, english as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MM dd, yyyy", "en" ) ).toBe("October 13, 2020");
})

test("MM dd, yyyy date should be October 09, 2020, with left padding, english as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MM dd, yyyy", "en" ) ).toBe("October 09, 2020");
})

test("MM dd, yyyy date should be Octubre 13, 2020, no left padding, spanish as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MM dd, yyyy", "es" ) ).toBe("Octubre 13, 2020");
})

test("MM dd, yyyy date should be Octubre 09, 2020, with left padding, spanish as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MM dd, yyyy", "es" ) ).toBe("Octubre 09, 2020");
})


// WITHOUT COMMA
// MM dd yyyy date tests
test("MM dd yyyy date should be October 13 2020, no left padding, default language (english)", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MM dd yyyy" ) ).toBe("October 13 2020");
})

test("MM dd yyyy date should be October 09 2020, with left padding, default language (english)", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MM dd yyyy" ) ).toBe("October 09 2020");
})

test("MM dd yyyy date should be October 13 2020, no left padding, english as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MM dd yyyy", "en" ) ).toBe("October 13 2020");
})

test("MM dd yyyy date should be October 09 2020, with left padding, english as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MM dd yyyy", "en" ) ).toBe("October 09 2020");
})

test("MM dd yyyy date should be Octubre 13 2020, no left padding, spanish as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MM dd yyyy", "es" ) ).toBe("Octubre 13 2020");
})

test("MM dd yyyy date should be Octubre 09 2020, with left padding, spanish as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MM dd yyyy", "es" ) ).toBe("Octubre 09 2020");
})

// MM dd date tests
test("MM dd date should be October 13, no left padding, default language (english)", () => {
	date.setDate(13)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "MM dd" ) ).toBe("October 13");
})

test("MM dd date should be October 09, with left padding, default language (english)", () => {
	date.setDate(9)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "MM dd" ) ).toBe("October 09");
})

test("MM dd date should be October 13, no left padding, english as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "MM dd", "en" ) ).toBe("October 13");
})

test("MM dd date should be October 09, with left padding, english as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "MM dd", "en" ) ).toBe("October 09");
})

test("MM dd date should be Octubre 13, no left padding, spanish as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "MM dd", "es" ) ).toBe("Octubre 13");
})

test("MM dd date should be Octubre 09, with left padding, spanish as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "MM dd", "es" ) ).toBe("Octubre 09");
})
