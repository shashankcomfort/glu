/*
|-----------------------------------------------------------------------------------------|
|                     Changes history table                                               |
|-----------------------------------------------------------------------------------------|
|   Date         |      Changes By       |   Changes Description                          |
|-----------------------------------------------------------------------------------------|
|   06-SEP-2020  |      Raushan Ranjan   |  Newly created file.                           |
|-----------------------------------------------------------------------------------------|
*/

export function emptyValidation(strValue) {
  if (strValue === "" || strValue === undefined || strValue === null) {
    return false;
  } else {
    return true;
  }
}

export function emailValidation(emailField) {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(emailField) == false) {
    return false;
  }
  return true;
}

export function mobileValidation(val) {
  if (/^\d{10}$/.test(val)) {
    return true;
  } else {
    return false;
  }
}

export function charactersValidation(val) {
  if (val == "") {
    return true;
  } else {
    if (!/^[a-zA-Z ]*$/g.test(val)) {
      return false;
    } else {
      return true;
    }
  }
}

export function lengthValidation(val) {
  if (val == "") {
    return true;
  } else {
    if (val.length > 25) {
      return false;
    } else {
      return true;
    }
  }
}

export function objectValidation(formObject) {
  let errorValue = {};
  let errorMessage = "";
  for (let key in formObject) {
    let errorList = {
      isRequired: false,
      isCharOnly: false,
      isLength: false,
      isMobile: false,
      isEmail: false,
    };
    if (formObject.hasOwnProperty(key)) {
      let val = formObject[key];
      console.log(key);

      console.log(val);
      if (val.isRequired && !emptyValidation(val.value)) {
        errorList.isRequired = true;
        errorMessage += key + ": is Empty.\n";
      }
      if (val.isCharOnly && !charactersValidation(val.value)) {
        errorList.isCharOnly = true;
        errorMessage += key + ": Only character allowed.\n";
      }
      if (val.isLength && !lengthValidation(val.value)) {
        errorList.isLength = true;
        errorMessage += key + ": Only 25 characters allowed.\n";
      }
      if (val.isMobile && !mobileValidation(val.value)) {
        errorList.isMobile = true;
        errorMessage += key + ": Mobile number is not valid.\n";
      }
      if (key == "email" && val.value !== "") {
        if (val.isEmail && !emailValidation(val.value)) {
          errorList.isEmail = true;
          errorMessage += key + ": Email is not valid.\n";
        }
      }
    }
    //errorValue.push({[key] : errorList});
    Object.assign(errorValue, { [key]: errorList });
  }
  console.log(errorMessage);
  if (errorMessage !== "") {
    console.log(errorValue);
    //alert(errorMessage);
    return errorValue;
  } else {
    //alert('validation successful');
    return true;
  }
}
