
const simpleDate = require("../handler")

let date = new Date();

// mmm dd, yyyy date tests
test("mmm dd, yyyy date should be Oct 13, 2020, no left padding, default language (english)", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mmm dd, yyyy" ) ).toBe("Oct 13, 2020");
})

test("mmm dd, yyyy date should be Oct 09, 2020, with left padding, default language (english)", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mmm dd, yyyy" ) ).toBe("Oct 09, 2020");
})

test("mmm dd, yyyy date should be Oct 13, 2020, no left padding, english as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mmm dd, yyyy", "en" ) ).toBe("Oct 13, 2020");
})

test("mmm dd, yyyy date should be Oct 09, 2020, with left padding, english as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mmm dd, yyyy", "en" ) ).toBe("Oct 09, 2020");
})

test("mmm dd, yyyy date should be Oct 13, 2020, no left padding, spanish as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mmm dd, yyyy", "es" ) ).toBe("Oct 13, 2020");
})

test("mmm dd, yyyy date should be Oct 09, 2020, with left padding, spanish as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mmm dd, yyyy", "es" ) ).toBe("Oct 09, 2020");
})

// WITHOUT COMMA
// mmm dd yyyy date tests
test("mmm dd yyyy date should be Oct 13 2020, no left padding, default language (english)", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mmm dd yyyy" ) ).toBe("Oct 13 2020");
})

test("mmm dd yyyy date should be Oct 09 2020, with left padding, default language (english)", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mmm dd yyyy" ) ).toBe("Oct 09 2020");
})

test("mmm dd yyyy date should be Oct 13 2020, no left padding, english as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mmm dd yyyy", "en" ) ).toBe("Oct 13 2020");
})

test("mmm dd yyyy date should be Oct 09 2020, with left padding, english as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mmm dd yyyy", "en" ) ).toBe("Oct 09 2020");
})

test("mmm dd yyyy date should be Oct 13 2020, no left padding, spanish as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mmm dd yyyy", "es" ) ).toBe("Oct 13 2020");
})

test("mmm dd yyyy date should be Oct 09 2020, with left padding, spanish as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	date.setYear(2020)
	expect( simpleDate.manageDate( date, "mmm dd yyyy", "es" ) ).toBe("Oct 09 2020");
})

// mmm dd date tests
test("mmm dd date should be Oct 13, no left padding, default language (english)", () => {
	date.setDate(13)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "mmm dd" ) ).toBe("Oct 13");
})

test("mmm dd date should be Oct 09, with left padding, default language (english)", () => {
	date.setDate(9)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "mmm dd" ) ).toBe("Oct 09");
})

test("mmm dd date should be Oct 13, no left padding, english as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "mmm dd", "en" ) ).toBe("Oct 13");
})

test("mmm dd date should be Oct 09, with left padding, english as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "mmm dd", "en" ) ).toBe("Oct 09");
})

test("mmm dd date should be Oct 13, no left padding, spanish as argument", () => {
	date.setDate(13)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "mmm dd", "es" ) ).toBe("Oct 13");
})

test("mmm dd date should be Oct 09, with left padding, spanish as argument", () => {
	date.setDate(9)
	date.setMonth(9)
	expect( simpleDate.manageDate( date, "mmm dd", "es" ) ).toBe("Oct 09");
})
