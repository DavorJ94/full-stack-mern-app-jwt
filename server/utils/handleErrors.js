module.exports.handleErrors = (err) => {
  let error = { email: "", password: "" };
  if (err.code === 11000) {
    error.email = "That e-mail is already in use.";
    return error;
  }
  if (err.message === "Incorrect email.") {
    error.email = err.message;
    return error;
  }
  if (err.message === "Incorrect password.") {
    error.password = err.message;
    return error;
  }
  if (err.message.includes("user validation failed"))
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  return error;
};
