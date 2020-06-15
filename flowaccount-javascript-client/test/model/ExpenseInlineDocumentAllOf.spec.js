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
    instance = new FlowAccountOpenApi.ExpenseInlineDocumentAllOf();
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

  describe('ExpenseInlineDocumentAllOf', function() {
    it('should create an instance of ExpenseInlineDocumentAllOf', function() {
      // uncomment below and update the code to test ExpenseInlineDocumentAllOf
      //var instane = new FlowAccountOpenApi.ExpenseInlineDocumentAllOf();
      //expect(instance).to.be.a(FlowAccountOpenApi.ExpenseInlineDocumentAllOf);
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new FlowAccountOpenApi.ExpenseInlineDocumentAllOf();
      //expect(instance).to.be();
    });

    it('should have the property discountType (base name: "discountType")', function() {
      // uncomment below and update the code to test the property discountType
      //var instane = new FlowAccountOpenApi.ExpenseInlineDocumentAllOf();
      //expect(instance).to.be();
    });

    it('should have the property useInlineDiscount (base name: "useInlineDiscount")', function() {
      // uncomment below and update the code to test the property useInlineDiscount
      //var instane = new FlowAccountOpenApi.ExpenseInlineDocumentAllOf();
      //expect(instance).to.be();
    });

    it('should have the property useInlineVat (base name: "useInlineVat")', function() {
      // uncomment below and update the code to test the property useInlineVat
      //var instane = new FlowAccountOpenApi.ExpenseInlineDocumentAllOf();
      //expect(instance).to.be();
    });

    it('should have the property exemptAmount (base name: "exemptAmount")', function() {
      // uncomment below and update the code to test the property exemptAmount
      //var instane = new FlowAccountOpenApi.ExpenseInlineDocumentAllOf();
      //expect(instance).to.be();
    });

    it('should have the property vatableAmount (base name: "vatableAmount")', function() {
      // uncomment below and update the code to test the property vatableAmount
      //var instane = new FlowAccountOpenApi.ExpenseInlineDocumentAllOf();
      //expect(instance).to.be();
    });

  });

}));
