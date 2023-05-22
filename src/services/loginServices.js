const validPasswordLength = 7;
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

function validateLogin(email, password) {
  const isPasswordValid = password.length >= validPasswordLength;
  const isEmailValid = emailRegex.test(email);

  return !(isEmailValid && isPasswordValid);
}

export default validateLogin;
