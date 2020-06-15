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
    instance = new FlowAccountOpenApi.BusinessCategory();
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

  describe('BusinessCategory', function() {
    it('should create an instance of BusinessCategory', function() {
      // uncomment below and update the code to test BusinessCategory
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be.a(FlowAccountOpenApi.BusinessCategory);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property systemCode (base name: "systemCode")', function() {
      // uncomment below and update the code to test the property systemCode
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "categoryId")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property categoryNameLocal (base name: "categoryNameLocal")', function() {
      // uncomment below and update the code to test the property categoryNameLocal
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property categoryNameForeign (base name: "categoryNameForeign")', function() {
      // uncomment below and update the code to test the property categoryNameForeign
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property debitId (base name: "debitId")', function() {
      // uncomment below and update the code to test the property debitId
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property debitCategory (base name: "debitCategory")', function() {
      // uncomment below and update the code to test the property debitCategory
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property debitCode (base name: "debitCode")', function() {
      // uncomment below and update the code to test the property debitCode
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property debitNameLocal (base name: "debitNameLocal")', function() {
      // uncomment below and update the code to test the property debitNameLocal
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property debitNameForeign (base name: "debitNameForeign")', function() {
      // uncomment below and update the code to test the property debitNameForeign
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property creditId (base name: "creditId")', function() {
      // uncomment below and update the code to test the property creditId
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property creditCategory (base name: "creditCategory")', function() {
      // uncomment below and update the code to test the property creditCategory
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property creditCode (base name: "creditCode")', function() {
      // uncomment below and update the code to test the property creditCode
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property creditNameLocal (base name: "creditNameLocal")', function() {
      // uncomment below and update the code to test the property creditNameLocal
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property creditNameForeign (base name: "creditNameForeign")', function() {
      // uncomment below and update the code to test the property creditNameForeign
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

    it('should have the property keywords (base name: "keywords")', function() {
      // uncomment below and update the code to test the property keywords
      //var instane = new FlowAccountOpenApi.BusinessCategory();
      //expect(instance).to.be();
    });

  });

}));
