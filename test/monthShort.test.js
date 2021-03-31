
const simpleDate = require("../handler")

let date = new Date();

// set month 0 english
test("month is equal Jan, english (default)", () => {
	date.setMonth(0)
	expect( simpleDate.getMonthShort( date.getMonth() ) ).toBe("Jan");
})

test("month is equal Jan, english (parameter, lowercase)", () => {
	date.setMonth(0)
	expect( simpleDate.getMonthShort( date.getMonth(), "en" ) ).toBe("Jan");
})

test("month is equal Jan, english (parameter, uppercase)", () => {
	date.setMonth(0)
	expect( simpleDate.getMonthShort( date.getMonth(), "EN" ) ).toBe("Jan");
})

test("month is equal Jan, english (parameter, random case)", () => {
	date.setMonth(0)
	expect( simpleDate.getMonthShort( date.getMonth(), "eN" ) ).toBe("Jan");
})

// set month 11 english
test("month is equal Dec, english (default)", () => {
	date.setMonth(11)
	expect( simpleDate.getMonthShort( date.getMonth() ) ).toBe("Dec");
})

test("month is equal Dec, english (parameter, lowercase)", () => {
	date.setMonth(11)
	expect( simpleDate.getMonthShort( date.getMonth(), "en" ) ).toBe("Dec");
})

test("month is equal Dec, english (parameter, uppercase)", () => {
	date.setMonth(11)
	expect( simpleDate.getMonthShort( date.getMonth(), "EN" ) ).toBe("Dec");
})

test("month is equal Dec, english (parameter, random case)", () => {
	date.setMonth(11)
	expect( simpleDate.getMonthShort( date.getMonth(), "eN" ) ).toBe("Dec");
})

// set month 0 spanish
test("month is equal Ene, spanish (parameter, lowercase)", () => {
	date.setMonth(0)
	expect( simpleDate.getMonthShort( date.getMonth(), "es" ) ).toBe("Ene");
})

test("month is equal Ene, spanish (parameter, uppercase)", () => {
	date.setMonth(0)
	expect( simpleDate.getMonthShort( date.getMonth(), "ES" ) ).toBe("Ene");
})

test("month is equal Ene, spanish (parameter, random case)", () => {
	date.setMonth(0)
	expect( simpleDate.getMonthShort( date.getMonth(), "eS" ) ).toBe("Ene");
})

// set month 11 spanish
test("month is equal Dic, spanish (parameter, lowercase)", () => {
	date.setMonth(11)
	expect( simpleDate.getMonthShort( date.getMonth(), "es" ) ).toBe("Dic");
})

test("month is equal Dic, spanish (parameter, uppercase)", () => {
	date.setMonth(11)
	expect( simpleDate.getMonthShort( date.getMonth(), "ES" ) ).toBe("Dic");
})

test("month is equal Dic, spanish (parameter, random case)", () => {
	date.setMonth(11)
	expect( simpleDate.getMonthShort( date.getMonth(), "eS" ) ).toBe("Dic");
})

// invalid month sent
test("month is undefined (array out of bounds)", () => {
	expect( simpleDate.getMonthShort(12) ).toBeUndefined();
})