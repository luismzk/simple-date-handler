
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

  switch (format){
    case "mm/dd/yyyy":
      return getMonth( date.getMonth() ) + "/" + (date.getDate() < 10 ? '0' : '') + date.getDate() + "/" + date.getFullYear();
    case "dd/mm/yyyy":
      return (date.getDate() < 10 ? '0' : '') + date.getDate() + "/" + getMonth( date.getMonth() ) + "/" + date.getFullYear();
    case "mm/dd/yy":
      return getMonth( date.getMonth() ) + "/" + (date.getDate() < 10 ? '0' : '') + date.getDate() + "/" + date.getFullYear() % 100;
    case "dd/mm/yy":
      return (date.getDate() < 10 ? '0' : '') + date.getDate() + "/" + getMonth( date.getMonth() ) + "/" + date.getFullYear() % 100;
    case "mm-dd-yyyy":
      return getMonth( date.getMonth() ) + "-" + (date.getDate() < 10 ? '0' : '') + date.getDate() + "-" + date.getFullYear();
    case "dd-mm-yyyy":
      return (date.getDate() < 10 ? '0' : '') + date.getDate() + "-" + getMonth( date.getMonth() ) + "-" + date.getFullYear();
    case "mm-dd-yy":
      return getMonth( date.getMonth() ) + "-" + (date.getDate() < 10 ? '0' : '') + date.getDate() + "-" + date.getFullYear() % 100;
    case "dd-mm-yy":
      return (date.getDate() < 10 ? '0' : '') + date.getDate() + "-" + getMonth( date.getMonth() ) + "-" + date.getFullYear() % 100;
    case "mmddyyyy":
      return getMonth( date.getMonth() ) + String( (date.getDate() < 10 ? '0' : '') + date.getDate() ) + String( date.getFullYear() );
    case "ddmmyyyy":
      return String( (date.getDate() < 10 ? '0' : '') + date.getDate() ) + getMonth( date.getMonth() ) + String (date.getFullYear() );
    case "mmddyy":
      return getMonth( date.getMonth() ) + String( (date.getDate() < 10 ? '0' : '') + date.getDate() ) + String( date.getFullYear() % 100 );
    case "ddmmyy":
      return String( (date.getDate() < 10 ? '0' : '') + date.getDate() ) + getMonth( date.getMonth() ) + String( date.getFullYear() % 100 );
    case "mmm dd, yyyy":
      return getMonthShort( date.getMonth(), lang ) + " " + (date.getDate() < 10 ? '0' : '') + date.getDate() + ", " + date.getFullYear();
    case "mmm dd yyyy":
      return getMonthShort( date.getMonth(), lang ) + " " + (date.getDate() < 10 ? '0' : '') + date.getDate() + " " + date.getFullYear();
    case "mmm dd":
      return getMonthShort( date.getMonth(), lang ) + " " + (date.getDate() < 10 ? '0' : '') + date.getDate();
    case "MMM dd, yyyy":
      return getMonthShort( date.getMonth(), lang ).toUpperCase() + " " + (date.getDate() < 10 ? '0' : '') + date.getDate() + ", " + date.getFullYear();
    case "MMM dd yyyy":
      return getMonthShort( date.getMonth(), lang ).toUpperCase() + " " + (date.getDate() < 10 ? '0' : '') + date.getDate() + " " + date.getFullYear();
    case "MMM dd":
      return getMonthShort( date.getMonth(), lang ).toUpperCase() + " " + (date.getDate() < 10 ? '0' : '') + date.getDate();
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