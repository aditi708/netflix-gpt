

export const checkValidData = (email, password) => {
  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\S{6,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid)
    return "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and be at least 6 characters long.";

  return null;
};
