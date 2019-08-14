import 'reflect-metadata';

/* eslint-disable no-undef */

// Global mocks
console.debug = jest.fn();
console.error = jest.fn();
console.warn = jest.fn();
Date.now = jest.fn(() => 1514739600000); // Mon Jan 01 2018 00:00:00 GMT+0700
