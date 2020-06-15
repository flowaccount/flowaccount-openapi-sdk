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
    instance = new FlowAccountOpenApi.ProductInventory();
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

  describe('ProductInventory', function() {
    it('should create an instance of ProductInventory', function() {
      // uncomment below and update the code to test ProductInventory
      //var instane = new FlowAccountOpenApi.ProductInventory();
      //expect(instance).to.be.a(FlowAccountOpenApi.ProductInventory);
    });

    it('should have the property productStructureType (base name: "productStructureType")', function() {
      // uncomment below and update the code to test the property productStructureType
      //var instane = new FlowAccountOpenApi.ProductInventory();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new FlowAccountOpenApi.ProductInventory();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new FlowAccountOpenApi.ProductInventory();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new FlowAccountOpenApi.ProductInventory();
      //expect(instance).to.be();
    });

    it('should have the property sellDescription (base name: "sellDescription")', function() {
      // uncomment below and update the code to test the property sellDescription
      //var instane = new FlowAccountOpenApi.ProductInventory();
      //expect(instance).to.be();
    });

    it('should have the property sellPrice (base name: "sellPrice")', function() {
      // uncomment below and update the code to test the property sellPrice
      //var instane = new FlowAccountOpenApi.ProductInventory();
      //expect(instance).to.be();
    });

    it('should have the property sellVatType (base name: "sellVatType")', function() {
      // uncomment below and update the code to test the property sellVatType
      //var instane = new FlowAccountOpenApi.ProductInventory();
      //expect(instance).to.be();
    });

    it('should have the property unitName (base name: "unitName")', function() {
      // uncomment below and update the code to test the property unitName
      //var instane = new FlowAccountOpenApi.ProductInventory();
      //expect(instance).to.be();
    });

    it('should have the property categoryName (base name: "categoryName")', function() {
      // uncomment below and update the code to test the property categoryName
      //var instane = new FlowAccountOpenApi.ProductInventory();
      //expect(instance).to.be();
    });

    it('should have the property barcode (base name: "barcode")', function() {
      // uncomment below and update the code to test the property barcode
      //var instane = new FlowAccountOpenApi.ProductInventory();
      //expect(instance).to.be();
    });

    it('should have the property buyDescription (base name: "buyDescription")', function() {
      // uncomment below and update the code to test the property buyDescription
      //var instane = new FlowAccountOpenApi.ProductInventory();
      //expect(instance).to.be();
    });

    it('should have the property buyPrice (base name: "buyPrice")', function() {
      // uncomment below and update the code to test the property buyPrice
      //var instane = new FlowAccountOpenApi.ProductInventory();
      //expect(instance).to.be();
    });

    it('should have the property buyVatType (base name: "buyVatType")', function() {
      // uncomment below and update the code to test the property buyVatType
      //var instane = new FlowAccountOpenApi.ProductInventory();
      //expect(instance).to.be();
    });

  });

}));
