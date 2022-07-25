const messages = {
  400: "missing required name field",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

const createError = (status, message = messages[status]) => {
  const error = new Error(`${message}`);
  error.status = status;
  throw error;
};

module.exports = createError;
