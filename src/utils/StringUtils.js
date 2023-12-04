export const isValidUrl = (urlString) => {
  try {
    new URL(urlString);
    return true;
  } catch (err) {
    return false;
  }
};

export const isValidEmail = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  console.log("email is : " + email + " isvalid : " + emailRegex.test(email));
  return emailRegex.test(email);
};

export const isEmpty = (text) => {
  return text.length <= 0;
};

export const isNameValid = (name) => {
  return name.length >= 3;
};

export const isPasswordValid = (password) => {
  return password.length >= 6;
};

export const log = (message) => {
  console.log(message);
};
