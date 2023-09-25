export const validateEmail = (email: string) => {
  if (email.length == 0) return false;
  var re = /\S+@\S+\.\S+/;
  return !re.test(email);
}

export const validatePassword = (password: string) => {
  if(password.length == 0) return false;
  if(password.length < 6) return true;
  return false;
}