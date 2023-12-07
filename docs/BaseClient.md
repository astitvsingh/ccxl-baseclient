# BaseClient

## Overview

- **Class Definition**: `BaseClient` is defined as a class intended to provide a template for all exchange-specific classes in cryptocurrency exchange interactions.

## Constructor

- **Purpose**: Initializes a new instance of the `BaseClient` class.
- **Parameters**:
  - `apiKey`: A string representing the API key for the exchange.
  - `secret`: A string representing the secret key for the exchange.
- **Implementation**:
  - Checks if `BaseClient` is being instantiated directly and throws an error if so, enforcing that `BaseClient` is an abstract class.

## Abstract Methods

These methods are declared but not implemented in `BaseClient`. They must be implemented in any subclass extending `BaseClient`.

1. **`handleRateLimiting(response)`**:

   - **Parameter**: `response`, an object from the API request.
   - **Purpose**: Intended to handle rate limiting specific to the exchange.
   - Throws an error indicating that it must be implemented in derived classes.

2. **`handleError(error)`**:

   - **Parameter**: `error`, an object from the API request.
   - **Purpose**: Designed to handle errors from the API response.
   - Throws an error if not implemented in derived classes.

3. **`signRequest(params)`**:

   - **Parameter**: `params`, the parameters of the request that need to be signed.
   - **Returns**: A string representing the signed parameters.
   - **Purpose**: To handle exchange-specific request signing.
   - Throws an error if not implemented in derived classes.

4. **`apiRequest(endpoint, method, parameters, headers)`**:
   - **Parameters**:
     - `endpoint`: The API endpoint.
     - `method`: The HTTP method (e.g., GET, POST).
     - `parameters`: The parameters for the request.
     - `headers`: The headers for the request.
   - **Returns**: A promise that resolves to the response from the exchange API.
   - **Purpose**: To make an API request.
   - Throws an error if not implemented in derived classes.

## Exporting

- The `BaseClient` class is exported for use in other modules.

## Summary

`BaseClient` class is well-structured for its intended purpose as an abstract base class.
