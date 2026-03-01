const API_BASE_URL = "https://annette-nondesignate-cryptically.ngrok-free.dev";
// const API_BASE_URL = "http://localhost:3000";

const request = async (endpoint, options = {}) => {
  const { headers: extraHeaders, ...restOptions } = options;

  try {
    console.log("🚀 API Request:", { endpoint, options });
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "69420",
        ...extraHeaders,
      },
      ...restOptions,
    });

    const result = await response.json();
    console.log("✅ API Response:", { endpoint, result });

    if (!response.ok || result.success === false) {
      const error = new Error(result.message || "Something went wrong");

      error.code = result.errorCode || "UNKNOWN_ERROR";
      error.validationErrors = result.errors || null;
      error.status = response.status;

      throw error;
    }

    return {
      data: result.data,
      meta: result.meta || null,
      message: result.message,
    };
  } catch (err) {
    if (!(err instanceof Error)) {
      const networkError = new Error("Network error. Please try again.");
      networkError.code = "NETWORK_ERROR";
      networkError.validationErrors = null;
      networkError.status = 500;
      throw networkError;
    }

    throw err;
  }
};

export default {
  get: (endpoint, headers = {}) =>
    request(endpoint, { method: "GET", ...headers }),

  post: (endpoint, body, headers = {}) =>
    request(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      headers,
    }),

  put: (endpoint, body, headers = {}) =>
    request(endpoint, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers,
    }),

  delete: (endpoint, headers = {}) =>
    request(endpoint, { method: "DELETE", ...headers }),
};
