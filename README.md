# BaseClient Class

## Introduction

The `BaseClient` class serves as an abstract base for building exchange-specific client classes. It defines a common interface and a set of functionalities that are essential for interacting with various cryptocurrency exchange APIs.

## Table of Contents

1. [Constructor](#constructor)
2. [Abstract Methods](#abstract-methods)
   - [handleRateLimiting](./BaseClient.handleRateLimiting.md)
   - [handleError](./BaseClient.handleError.md)
   - [signRequest](./BaseClient.signRequest.md)
   - [apiRequest](./BaseClient.apiRequest.md)

## Constructor

The constructor initializes the `BaseClient` with necessary credentials like `apiKey` API key and `secret`. It throws an error if an attempt is made to instantiate `BaseClient` directly, as it is designed to be an abstract class.

```javascript

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

```

## Abstract Methods

`BaseClient` includes several abstract methods that must be implemented by any derived class. These methods cover a wide range of functionalities, from rate limiting and error handling to specific API interactions like fetching tickers, creating orders, and more.

For detailed information on each method, refer to the respective documentation linked in the Table of Contents.
