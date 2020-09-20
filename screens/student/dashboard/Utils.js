const getDay = () => {
  let day = "";
  if (new Date().getDay() === 0) {
    day += "Sun ";
  } else if (new Date().getDay() === 1) {
    day += "Mon ";
  } else if (new Date().getDay() === 2) {
    day += "Tue ";
  } else if (new Date().getDay() === 3) {
    day += "Weds ";
  } else if (new Date().getDay() === 4) {
    day += "Thurs ";
  } else if (new Date().getDay() === 5) {
    day += "Fri ";
  } else if (new Date().getDay() === 6) {
    day += "Sat ";
  }
  return day;
};
const getMonth = () => {
  let month = "";
  if (new Date().getMonth() === 0) {
    month += "January ";
  } else if (new Date().getMonth() === 1) {
    month += "February ";
  } else if (new Date().getMonth() === 2) {
    month += "March ";
  } else if (new Date().getMonth() === 3) {
    month += "April ";
  } else if (new Date().getMonth() === 4) {
    month += "May ";
  } else if (new Date().getMonth() === 5) {
    month += "June ";
  } else if (new Date().getMonth() === 6) {
    month += "July ";
  } else if (new Date().getMonth() === 7) {
    month += "August ";
  } else if (new Date().getMonth() === 8) {
    month += "September ";
  } else if (new Date().getMonth() === 9) {
    month += "October ";
  } else if (new Date().getMonth() === 10) {
    month += "November ";
  } else if (new Date().getMonth() === 11) {
    month += "December ";
  }
  return month;
};

const getDatePostFix = (date) => {
  let postFix = "";
  let charArr = date.split("");

  if (date !== "11" && charArr[charArr.length - 1] === "1") {
    postFix += "st";
  } else if (charArr[charArr.length - 1] === "2") {
    postFix += "nd";
  } else if (charArr[charArr.length - 1] === "3") {
    postFix += "rd";
  } else {
    postFix += "th";
  }
  return postFix;
};

const getCurrentTime = () => {
  let time = "";
  let currentTime = new Date();
  time +=
    currentTime.getHours() > 12
      ? currentTime.getHours() - 12
      : currentTime.getHours();
  time += currentTime.getMinutes() > 0 ? "." + currentTime.getMinutes() : "";
  time += currentTime.getHours() > 12 ? "pm" : "am";

  return time;
};

export {getDay, getMonth, getDatePostFix, getCurrentTime};
