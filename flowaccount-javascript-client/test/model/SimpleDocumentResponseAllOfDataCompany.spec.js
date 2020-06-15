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
    instance = new FlowAccountOpenApi.SimpleDocumentResponseAllOfDataCompany();
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

  describe('SimpleDocumentResponseAllOfDataCompany', function() {
    it('should create an instance of SimpleDocumentResponseAllOfDataCompany', function() {
      // uncomment below and update the code to test SimpleDocumentResponseAllOfDataCompany
      //var instane = new FlowAccountOpenApi.SimpleDocumentResponseAllOfDataCompany();
      //expect(instance).to.be.a(FlowAccountOpenApi.SimpleDocumentResponseAllOfDataCompany);
    });

    it('should have the property companyName (base name: "companyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instane = new FlowAccountOpenApi.SimpleDocumentResponseAllOfDataCompany();
      //expect(instance).to.be();
    });

    it('should have the property companyNameEn (base name: "companyNameEn")', function() {
      // uncomment below and update the code to test the property companyNameEn
      //var instane = new FlowAccountOpenApi.SimpleDocumentResponseAllOfDataCompany();
      //expect(instance).to.be();
    });

    it('should have the property companyAddress (base name: "companyAddress")', function() {
      // uncomment below and update the code to test the property companyAddress
      //var instane = new FlowAccountOpenApi.SimpleDocumentResponseAllOfDataCompany();
      //expect(instance).to.be();
    });

    it('should have the property companyAddressEn (base name: "companyAddressEn")', function() {
      // uncomment below and update the code to test the property companyAddressEn
      //var instane = new FlowAccountOpenApi.SimpleDocumentResponseAllOfDataCompany();
      //expect(instance).to.be();
    });

    it('should have the property companyTaxId (base name: "companyTaxId")', function() {
      // uncomment below and update the code to test the property companyTaxId
      //var instane = new FlowAccountOpenApi.SimpleDocumentResponseAllOfDataCompany();
      //expect(instance).to.be();
    });

    it('should have the property companyBranch (base name: "companyBranch")', function() {
      // uncomment below and update the code to test the property companyBranch
      //var instane = new FlowAccountOpenApi.SimpleDocumentResponseAllOfDataCompany();
      //expect(instance).to.be();
    });

    it('should have the property companyBranchEn (base name: "companyBranchEn")', function() {
      // uncomment below and update the code to test the property companyBranchEn
      //var instane = new FlowAccountOpenApi.SimpleDocumentResponseAllOfDataCompany();
      //expect(instance).to.be();
    });

    it('should have the property companyPhone (base name: "companyPhone")', function() {
      // uncomment below and update the code to test the property companyPhone
      //var instane = new FlowAccountOpenApi.SimpleDocumentResponseAllOfDataCompany();
      //expect(instance).to.be();
    });

    it('should have the property companyMobile (base name: "companyMobile")', function() {
      // uncomment below and update the code to test the property companyMobile
      //var instane = new FlowAccountOpenApi.SimpleDocumentResponseAllOfDataCompany();
      //expect(instance).to.be();
    });

    it('should have the property companyFax (base name: "companyFax")', function() {
      // uncomment below and update the code to test the property companyFax
      //var instane = new FlowAccountOpenApi.SimpleDocumentResponseAllOfDataCompany();
      //expect(instance).to.be();
    });

    it('should have the property companyWebsite (base name: "companyWebsite")', function() {
      // uncomment below and update the code to test the property companyWebsite
      //var instane = new FlowAccountOpenApi.SimpleDocumentResponseAllOfDataCompany();
      //expect(instance).to.be();
    });

  });

}));
