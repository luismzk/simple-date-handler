
// formats the date in a given format
// date should be a date-able argument for it to work, otherwise it will return INVALID DATE
// format is mm/dd/yyyy by default, which is month in numbers / days / 4 digit year. Eg 05/23/2021

// dd - day, left padded with 0
// DD - full day in words
// ddd - short day in words (3 letters)

// mm - month in number, left padded with 0
// MM - full month in words
// mmm - short month (3 letters) in words, first letter capitalized
// MMM - short month (3 letters) in words, all uppercase 

// yyyy - year, 4 digits
// yy - year, 2 digits

// 12h - returns the time, in 12 hour format with AM or PM
// 24h - returns the time, in 24 hour format (00-23)
function manageDate(date = new Date(), format = "mm/dd/yyyy", lang = "en"){

  date = new Date(date)

  if (date == "Invalid Date")
    return "INVALID DATE"

  // example date: October 15, 2021
  switch (format){
    case "mm":
      return getMonth( date.getMonth() );
    case "MM":
      return getMonthFull( date.getMonth(), lang );
    case "mmm":
      return getMonthShort( date.getMonth(), lang );
    case "MMM":
      return getMonthShort( date.getMonth(), lang ).toUpperCase();
    case "dd":
      return (date.getDate() < 10 ? '0' : '') + date.getDate();
    case "yyyy":
      return date.getFullYear();
    case "yy":
      return date.getFullYear() % 100;
    case "mm/dd/yyyy":     // 10/15/2021 - TESTED
      return manageDate( date, "mm" ) + "/" + manageDate( date, "dd" ) + "/" + manageDate( date, "yyyy" );
    case "dd/mm/yyyy":    // 15/10/2021 - TESTED
      return manageDate( date, "dd" ) + "/" + manageDate( date, "mm" ) + "/" + manageDate( date, "yyyy" );
    case "mm/dd/yy":      // 10/15/21 - TESTED
      return manageDate( date, "mm" ) + "/" + manageDate( date, "dd" ) + "/" + manageDate( date, "yy" );
    case "dd/mm/yy":      // 15/10/2021 - TESTED -- here
      return manageDate( date, "dd" ) + "/" + manageDate( date, "mm" ) + "/" + manageDate( date, "yy" );
    case "mm-dd-yyyy":     // 10-15-2021 - TESTED
      return manageDate( date, "mm" ) + "-" + manageDate( date, "dd" ) + "-" + manageDate( date, "yyyy" );
    case "dd-mm-yyyy":    // 15-10-2021 - TESTED
      return manageDate( date, "dd" ) + "-" + manageDate( date, "mm" ) + "-" + manageDate( date, "yyyy" );
    case "mm-dd-yy":      // 10-15-21 - TESTED
      return manageDate( date, "mm" ) + "-" + manageDate( date, "dd" ) + "-" + manageDate( date, "yy" );
    case "dd-mm-yy":      // 15-10-2021 - TESTED -- here
      return manageDate( date, "dd" ) + "-" + manageDate( date, "mm" ) + "-" + manageDate( date, "yy" );
    case "mmddyyyy":      // 10152021 - TESTED
      return manageDate( date, "mm" ) + String( manageDate( date, "dd" ) ) + String( manageDate( date, "yyyy" ) );
    case "ddmmyyyy":      // 10152021 - TESTED
      return manageDate( date, "dd" ) + String( manageDate( date, "mm" ) ) + String( manageDate( date, "yyyy" ) );
    case "mmddyy":      // 101521 - 
      return manageDate( date, "mm" ) + String( manageDate( date, "dd" ) ) + String( manageDate( date, "yy" ) );
    case "ddmmyy":      // 101521 - 
      return manageDate( date, "dd" ) + String( manageDate( date, "mm" ) ) + String( manageDate( date, "yy" ) );
    case "mmm dd, yyyy":  // Oct 15, 2021 - 
      return manageDate( date, "mmm", lang ) + " " + manageDate( date, "dd" ) + ", " + manageDate( date, "yyyy" );
    case "mmm dd yyyy":   // Oct 15 2021 - 
      return manageDate( date, "mmm", lang ) + " " + manageDate( date, "dd" ) + " " + manageDate( date, "yyyy" );
    case "mmm dd":        // Oct 15 - 
      return manageDate( date, "mmm", lang ) + " " + manageDate( date, "dd" );
    case "MMM dd, yyyy":  // OCT 15 2021 - 
      return manageDate( date, "MMM", lang ) + " " + manageDate( date, "dd" ) + ", " + manageDate( date, "yyyy" );
    case "MMM dd yyyy":   // OCT 15 2021 - 
      return manageDate( date, "MMM", lang ) + " " + manageDate( date, "dd" ) + " " + manageDate( date, "yyyy" );
    case "MMM dd":        // OCT 15 2021 - 
      return manageDate( date, "MMM", lang ) + " " + manageDate( date, "dd" );
    case "MM dd, yyyy":  // October 15 2021 - 
      return manageDate( date, "MM", lang ) + " " + manageDate( date, "dd" ) + ", " + manageDate( date, "yyyy" );
    case "MM dd yyyy":   // October 15 2021 - 
      return manageDate( date, "MM", lang ) + " " + manageDate( date, "dd" ) + " " + manageDate( date, "yyyy" );
    case "MM dd":        // October 15 2021 - 
      return manageDate( date, "MM", lang ) + " " + manageDate( date, "dd" );

    /*case "MMM dd, yyyy":  // OCT 15 2021 - 
      return getMonthShort( date.getMonth(), lang ).toUpperCase() + " " + (date.getDate() < 10 ? '0' : '') + date.getDate() + ", " + date.getFullYear();
    case "MMM dd yyyy":   // OCT 15 2021 - 
      return getMonthShort( date.getMonth(), lang ).toUpperCase() + " " + (date.getDate() < 10 ? '0' : '') + date.getDate() + " " + date.getFullYear();
    case "MMM dd":        // OCT 15 2021 - 
      return getMonthShort( date.getMonth(), lang ).toUpperCase() + " " + (date.getDate() < 10 ? '0' : '') + date.getDate();*/
    /*
    case "12h":
      let hours = date.getHours() - 12

      if (hours <= 0) 
        hours += 12; // avoiding negatives
      let meridian; // AM or PM;

      if (date.getHours() < 12) 
        meridian = "AM"
      else
        meridian = "PM"

      return hours + ":" + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + " " + meridian;
    case "24h":
      return date.getHours() + ":" + date.getMinutes();
      */
    default:
      return "INVALID FORMAT"
  }

}

// Returns the months number. Date().getMonth() returns it from 0-11 which is wonky imo
function getMonth(month){
  
  var months = [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ]

  return months[month]
}

// Returns the months full name
// By default it will be in english (second parameter) but I can add more languages in the future
// Languages should be in ISO 2 letter language codes, upper or lowercase is irrelevant
function getMonthFull(month, lang = "en"){
  
  let months;
  switch (lang.toLowerCase()){
    case "en":
      months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      break;
    case "es":
      months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]
      break;
  }

  return months[month]
}

// Returns the months short name (first 3 letters or recognizable variant)
// By default it will be in english (second parameter) but I can add more languages in the future
// Languages should be in ISO 2 letter language codes, upper or lowercase is irrelevant
function getMonthShort(month, lang = "en"){
  
  let months;
  switch (lang.toLowerCase()){
    case "en":
      months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
      break;
    case "es":
      months = [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ]
      break;
  }

  return months[month]
}


let simpleDate = {
  manageDate,
  getMonth,
  getMonthFull,
  getMonthShort
};

module.exports = simpleDate;