/**
 * @title BaseClient
 * @type {Class}
 * @description Provides a template for all exchange-specific classes.
 */
class BaseClient {
  /**
   * Constructor for the BaseClient class.
   * @param {string} apiKey - The API key for the exchange.
   * @param {string} secret - The secret key for the exchange.
   */
  constructor(apiKey, secret) {
    if (this.constructor === BaseClient) {
      throw new Error(
        "BaseClient is an abstract class and cannot be instantiated directly."
      );
    }
    this.apiKey = apiKey;
    this.secret = secret;
    // Initialize other properties and rate limit handling mechanisms
  }

  // Abstract methods to be implemented by derived classes

  /**
   * Abstract method for handling rate limiting specific to the exchange.
   * This method should be implemented in derived classes to handle
   * the exchange's API rate limits effectively.
   *
   * @param {object} response - The response object from the API request.
   */
  handleRateLimiting(response) {
    throw new Error("Method 'handleRateLimiting' must be implemented.");
  }

  /**
   * Abstract method to handle errors from the API response.
   * This method should be implemented by derived classes to handle exchange-specific errors.
   *
   * @param {object} error - The error object from the API request.
   */
  handleError(error) {
    throw new Error("Method 'handleError' must be implemented.");
  }

  /**
   * Abstract method to sign a request. This method should be implemented in derived classes
   * to handle the exchange-specific request signing mechanism.
   *
   * @param {object} params - The parameters of the request that need to be signed.
   * @returns {string} - The signed parameters.
   */
  signRequest(params) {
    throw new Error("Method 'signRequest' must be implemented.");
  }

  /**
   * Abstract method to make an API request. This method should be implemented by derived classes.
   * @param {string} endpoint - The API endpoint.
   * @param {string} method - The HTTP method (GET, POST, PUT, DELETE, etc.).
   * @param {object} parameters - The parameters for the request.
   * @param {object} headers - The headers for the request.
   * @returns {Promise<object>} - The response from the exchange API.
   */
  async apiRequest(endpoint, method, parameters, headers) {
    throw new Error("Method 'apiRequest' must be implemented.");
  }
}

// Exporting the BaseClient class
module.exports = BaseClient;
