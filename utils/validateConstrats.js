import { validate } from "validate.js";

// Validate String
export const validateString = async (id, value) => {
  const constraints = { presence: { allowEmpty: false } };
  if (value !== "") {
    constraints.format = {
      pattern: "[a-z]+",
      flags: "i",
      message: "value can only contain letters",
    };
  }
  const validationResult = await validate.async(
    { [id]: value },
    { [id]: constraints }
  );
  return validationResult && validationResult[id];
};

// Validate Email
export const validateEmail = async (id, value) => {
  const constraints = { presence: { allowEmpty: false } };
  if (value !== "") {
    constraints.email = true;
  }
  const validationResult = await validate.async(
    { [id]: value },
    { [id]: constraints }
  );
  return validationResult && validationResult[id];
};

// Validate Pasword
export const validatePassword = async (id, value) => {
  const constraints = { presence: { allowEmpty: false } };
  if (value !== "") {
    constraints.length = {
      minmum: 6,
      message: "must be at least 6 character",
    };
  }
  const validationResult = await validate.async(
    { [id]: value },
    { [id]: constraints }
  );
  return validationResult && validationResult[id];
};
