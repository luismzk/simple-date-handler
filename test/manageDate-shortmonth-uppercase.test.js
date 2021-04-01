
const simpleDate = require("../handler")

let date = new Date();

// MMM dd, yyyy date tests
test("MMM dd, yyyy date should be OCT 13, 2020, no left padding, default language (english)", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MMM dd, yyyy" ) ).toBe("OCT 13, 2020");
})

test("MMM dd, yyyy date should be OCT 09, 2020, with left padding, default language (english)", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MMM dd, yyyy" ) ).toBe("OCT 09, 2020");
})

test("MMM dd, yyyy date should be OCT 13, 2020, no left padding, english as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MMM dd, yyyy", "en" ) ).toBe("OCT 13, 2020");
})

test("MMM dd, yyyy date should be OCT 09, 2020, with left padding, english as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MMM dd, yyyy", "en" ) ).toBe("OCT 09, 2020");
})

test("MMM dd, yyyy date should be OCT 13, 2020, no left padding, spanish as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MMM dd, yyyy", "es" ) ).toBe("OCT 13, 2020");
})

test("MMM dd, yyyy date should be OCT 09, 2020, with left padding, spanish as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MMM dd, yyyy", "es" ) ).toBe("OCT 09, 2020");
})

// WITHOUT COMMA
// MMM dd yyyy date tests
test("MMM dd yyyy date should be OCT 13 2020, no left padding, default language (english)", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MMM dd yyyy" ) ).toBe("OCT 13 2020");
})

test("MMM dd yyyy date should be OCT 09 2020, with left padding, default language (english)", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MMM dd yyyy" ) ).toBe("OCT 09 2020");
})

test("MMM dd yyyy date should be OCT 13 2020, no left padding, english as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MMM dd yyyy", "en" ) ).toBe("OCT 13 2020");
})

test("MMM dd yyyy date should be OCT 09 2020, with left padding, english as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MMM dd yyyy", "en" ) ).toBe("OCT 09 2020");
})

test("MMM dd yyyy date should be OCT 13 2020, no left padding, spanish as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MMM dd yyyy", "es" ) ).toBe("OCT 13 2020");
})

test("MMM dd yyyy date should be OCT 09 2020, with left padding, spanish as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "MMM dd yyyy", "es" ) ).toBe("OCT 09 2020");
})

// MMM dd date tests
test("MMM dd date should be OCT 13, no left padding, default language (english)", () => {
	date.setDate(13)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "MMM dd" ) ).toBe("OCT 13");
})

test("MMM dd date should be OCT 09, with left padding, default language (english)", () => {
	date.setDate(9)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "MMM dd" ) ).toBe("OCT 09");
})

test("MMM dd date should be OCT 13, no left padding, english as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "MMM dd", "en" ) ).toBe("OCT 13");
})

test("MMM dd date should be OCT 09, with left padding, english as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "MMM dd", "en" ) ).toBe("OCT 09");
})

test("MMM dd date should be OCT 13, no left padding, spanish as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "MMM dd", "es" ) ).toBe("OCT 13");
})

test("MMM dd date should be OCT 09, with left padding, spanish as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "MMM dd", "es" ) ).toBe("OCT 09");
})
