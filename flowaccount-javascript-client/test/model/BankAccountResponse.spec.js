/**
 * FlowAccount Open API
 * # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer_support@flowaccount.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FlowAccountOpenApi);
  }
}(this, function(expect, FlowAccountOpenApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FlowAccountOpenApi.BankAccountResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BankAccountResponse', function() {
    it('should create an instance of BankAccountResponse', function() {
      // uncomment below and update the code to test BankAccountResponse
      //var instane = new FlowAccountOpenApi.BankAccountResponse();
      //expect(instance).to.be.a(FlowAccountOpenApi.BankAccountResponse);
    });

    it('should have the property bankAccountId (base name: "bankAccountId")', function() {
      // uncomment below and update the code to test the property bankAccountId
      //var instane = new FlowAccountOpenApi.BankAccountResponse();
      //expect(instance).to.be();
    });

    it('should have the property bankAccountNumber (base name: "bankAccountNumber")', function() {
      // uncomment below and update the code to test the property bankAccountNumber
      //var instane = new FlowAccountOpenApi.BankAccountResponse();
      //expect(instance).to.be();
    });

    it('should have the property bankAccountName (base name: "bankAccountName")', function() {
      // uncomment below and update the code to test the property bankAccountName
      //var instane = new FlowAccountOpenApi.BankAccountResponse();
      //expect(instance).to.be();
    });

    it('should have the property bankAccountType (base name: "bankAccountType")', function() {
      // uncomment below and update the code to test the property bankAccountType
      //var instane = new FlowAccountOpenApi.BankAccountResponse();
      //expect(instance).to.be();
    });

    it('should have the property bankBranch (base name: "bankBranch")', function() {
      // uncomment below and update the code to test the property bankBranch
      //var instane = new FlowAccountOpenApi.BankAccountResponse();
      //expect(instance).to.be();
    });

    it('should have the property bankId (base name: "bankId")', function() {
      // uncomment below and update the code to test the property bankId
      //var instane = new FlowAccountOpenApi.BankAccountResponse();
      //expect(instance).to.be();
    });

    it('should have the property bankName (base name: "bankName")', function() {
      // uncomment below and update the code to test the property bankName
      //var instane = new FlowAccountOpenApi.BankAccountResponse();
      //expect(instance).to.be();
    });

  });

}));