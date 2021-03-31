
// formats the date in a given format
// date should be a date-able argument for it to work, otherwise it will return INVALID DATE
// format is mm/dd/yyyy by default, which is month in numbers / days / 4 digit year. Eg 05/23/2021

// dd - day, left padded with 0
// DD - full day in words

// mm - month in number, left padded with 0
// MM - full month in words
// mmm - short month (3 letters) in words, lowercase
// MMM - short month (3 letters) in words, uppercase 

// yyyy - year, 4 digits
// yy - year, 2 digits

// 12h - returns the time, in 12 hour format with AM or PM
// 24h - returns the time, in 24 hour format (00-23)
function manageDate(date = new Date(), format = "mm/dd/yyyy", lang = "en"){

  date = new Date(date)

  if (date == "Invalid Date")
    return "INVALID DATE"

  switch (format.toLowerCase()){
    case "mm/dd/yyyy":
      return getCurrentMonth( date.getMonth() ) + "/" + date.getDate() + "/" + date.getFullYear();
    /*case "dd/mm/yyyy":
      return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    case "mmm":
      return getDateField( date, "monthshort" );
    case "dd mmm":
      return date.getDate() + " " + getDateField( date, "monthshort" );
    case "mmm dd, yyyy":
      return getDateField( date, "monthshort" ) + " " + date.getDate() + ", " + date.getFullYear();
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
      return date.getHours() + ":" + date.getMinutes();*/
    default:
      return "INVALID FORMAT"
  }

}

// Returns the months number. Date().getMonth() returns it from 0-11 which is wonky imo
function getCurrentMonth(month){
  
  var months = [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ]

  return months[month]
}

// Returns the months full name
// By default it will be in english (second parameter) but I can add more languages in the future
// Languages should be in ISO 2 letter language codes, upper or lowercase is irrelevant
function getCurrentMonthLong(month, lang = "en"){
  
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


let simpleDate = {
  manageDate,
  getCurrentMonth,
  getCurrentMonthLong,
};

module.exports = simpleDate;