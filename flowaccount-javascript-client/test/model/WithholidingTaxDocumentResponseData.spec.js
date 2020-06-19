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
    instance = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
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

  describe('WithholidingTaxDocumentResponseData', function() {
    it('should create an instance of WithholidingTaxDocumentResponseData', function() {
      // uncomment below and update the code to test WithholidingTaxDocumentResponseData
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be.a(FlowAccountOpenApi.WithholidingTaxDocumentResponseData);
    });

    it('should have the property recordId (base name: "recordId")', function() {
      // uncomment below and update the code to test the property recordId
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property documentId (base name: "documentId")', function() {
      // uncomment below and update the code to test the property documentId
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property documentSerial (base name: "documentSerial")', function() {
      // uncomment below and update the code to test the property documentSerial
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property contactCode (base name: "contactCode")', function() {
      // uncomment below and update the code to test the property contactCode
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property contactName (base name: "contactName")', function() {
      // uncomment below and update the code to test the property contactName
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property contactAddress (base name: "contactAddress")', function() {
      // uncomment below and update the code to test the property contactAddress
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property contactTaxId (base name: "contactTaxId")', function() {
      // uncomment below and update the code to test the property contactTaxId
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property contactBranch (base name: "contactBranch")', function() {
      // uncomment below and update the code to test the property contactBranch
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property contactPerson (base name: "contactPerson")', function() {
      // uncomment below and update the code to test the property contactPerson
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property contactEmail (base name: "contactEmail")', function() {
      // uncomment below and update the code to test the property contactEmail
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property contactNumber (base name: "contactNumber")', function() {
      // uncomment below and update the code to test the property contactNumber
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property contactZipCode (base name: "contactZipCode")', function() {
      // uncomment below and update the code to test the property contactZipCode
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property contactGroup (base name: "contactGroup")', function() {
      // uncomment below and update the code to test the property contactGroup
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property publishedOn (base name: "publishedOn")', function() {
      // uncomment below and update the code to test the property publishedOn
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property entity (base name: "entity")', function() {
      // uncomment below and update the code to test the property entity
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property textOther (base name: "textOther")', function() {
      // uncomment below and update the code to test the property textOther
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property withholdingTaxItems (base name: "withholdingTaxItems")', function() {
      // uncomment below and update the code to test the property withholdingTaxItems
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property totalTaxWithheld (base name: "totalTaxWithheld")', function() {
      // uncomment below and update the code to test the property totalTaxWithheld
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property taxPayment (base name: "taxPayment")', function() {
      // uncomment below and update the code to test the property taxPayment
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property taxPaymentOthers (base name: "taxPaymentOthers")', function() {
      // uncomment below and update the code to test the property taxPaymentOthers
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property providentFundNumber (base name: "providentFundNumber")', function() {
      // uncomment below and update the code to test the property providentFundNumber
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property providentFundAmount (base name: "providentFundAmount")', function() {
      // uncomment below and update the code to test the property providentFundAmount
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property socialSecurityAmount (base name: "socialSecurityAmount")', function() {
      // uncomment below and update the code to test the property socialSecurityAmount
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property remarks (base name: "remarks")', function() {
      // uncomment below and update the code to test the property remarks
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property internalNotes (base name: "internalNotes")', function() {
      // uncomment below and update the code to test the property internalNotes
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property showSignatureOrStamp (base name: "showSignatureOrStamp")', function() {
      // uncomment below and update the code to test the property showSignatureOrStamp
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property statusString (base name: "statusString")', function() {
      // uncomment below and update the code to test the property statusString
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property documentType (base name: "documentType")', function() {
      // uncomment below and update the code to test the property documentType
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

    it('should have the property allowDelete (base name: "allowDelete")', function() {
      // uncomment below and update the code to test the property allowDelete
      //var instane = new FlowAccountOpenApi.WithholidingTaxDocumentResponseData();
      //expect(instance).to.be();
    });

  });

}));
