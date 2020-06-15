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
    instance = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
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

  describe('InlineDocumentWithPaymentReceivingCreditCard', function() {
    it('should create an instance of InlineDocumentWithPaymentReceivingCreditCard', function() {
      // uncomment below and update the code to test InlineDocumentWithPaymentReceivingCreditCard
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be.a(FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard);
    });

    it('should have the property contactCode (base name: "contactCode")', function() {
      // uncomment below and update the code to test the property contactCode
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property contactName (base name: "contactName")', function() {
      // uncomment below and update the code to test the property contactName
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property contactAddress (base name: "contactAddress")', function() {
      // uncomment below and update the code to test the property contactAddress
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property contactTaxId (base name: "contactTaxId")', function() {
      // uncomment below and update the code to test the property contactTaxId
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property contactBranch (base name: "contactBranch")', function() {
      // uncomment below and update the code to test the property contactBranch
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property contactPerson (base name: "contactPerson")', function() {
      // uncomment below and update the code to test the property contactPerson
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property contactEmail (base name: "contactEmail")', function() {
      // uncomment below and update the code to test the property contactEmail
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property contactNumber (base name: "contactNumber")', function() {
      // uncomment below and update the code to test the property contactNumber
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property contactZipCode (base name: "contactZipCode")', function() {
      // uncomment below and update the code to test the property contactZipCode
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property contactGroup (base name: "contactGroup")', function() {
      // uncomment below and update the code to test the property contactGroup
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property publishedOn (base name: "publishedOn")', function() {
      // uncomment below and update the code to test the property publishedOn
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property creditType (base name: "creditType")', function() {
      // uncomment below and update the code to test the property creditType
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property creditDays (base name: "creditDays")', function() {
      // uncomment below and update the code to test the property creditDays
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "dueDate")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property salesName (base name: "salesName")', function() {
      // uncomment below and update the code to test the property salesName
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property projectName (base name: "projectName")', function() {
      // uncomment below and update the code to test the property projectName
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property isVatInclusive (base name: "isVatInclusive")', function() {
      // uncomment below and update the code to test the property isVatInclusive
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property useReceiptDeduction (base name: "useReceiptDeduction")', function() {
      // uncomment below and update the code to test the property useReceiptDeduction
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property subTotal (base name: "subTotal")', function() {
      // uncomment below and update the code to test the property subTotal
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property discountPercentage (base name: "discountPercentage")', function() {
      // uncomment below and update the code to test the property discountPercentage
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property discountAmount (base name: "discountAmount")', function() {
      // uncomment below and update the code to test the property discountAmount
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property totalAfterDiscount (base name: "totalAfterDiscount")', function() {
      // uncomment below and update the code to test the property totalAfterDiscount
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property isVat (base name: "isVat")', function() {
      // uncomment below and update the code to test the property isVat
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property vatAmount (base name: "vatAmount")', function() {
      // uncomment below and update the code to test the property vatAmount
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property grandTotal (base name: "grandTotal")', function() {
      // uncomment below and update the code to test the property grandTotal
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property discountType (base name: "discountType")', function() {
      // uncomment below and update the code to test the property discountType
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property useInlineDiscount (base name: "useInlineDiscount")', function() {
      // uncomment below and update the code to test the property useInlineDiscount
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property useInlineVat (base name: "useInlineVat")', function() {
      // uncomment below and update the code to test the property useInlineVat
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property exemptAmount (base name: "exemptAmount")', function() {
      // uncomment below and update the code to test the property exemptAmount
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property vatableAmount (base name: "vatableAmount")', function() {
      // uncomment below and update the code to test the property vatableAmount
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property documentShowWithholdingTax (base name: "documentShowWithholdingTax")', function() {
      // uncomment below and update the code to test the property documentShowWithholdingTax
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property documentWithholdingTaxPercentage (base name: "documentWithholdingTaxPercentage")', function() {
      // uncomment below and update the code to test the property documentWithholdingTaxPercentage
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property documentWithholdingTaxAmount (base name: "documentWithholdingTaxAmount")', function() {
      // uncomment below and update the code to test the property documentWithholdingTaxAmount
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property documentDeductionType (base name: "documentDeductionType")', function() {
      // uncomment below and update the code to test the property documentDeductionType
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property documentDeductionAmount (base name: "documentDeductionAmount")', function() {
      // uncomment below and update the code to test the property documentDeductionAmount
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property remarks (base name: "remarks")', function() {
      // uncomment below and update the code to test the property remarks
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property internalNotes (base name: "internalNotes")', function() {
      // uncomment below and update the code to test the property internalNotes
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property showSignatureOrStamp (base name: "showSignatureOrStamp")', function() {
      // uncomment below and update the code to test the property showSignatureOrStamp
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property documentReference (base name: "documentReference")', function() {
      // uncomment below and update the code to test the property documentReference
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property documentPaymentStructureType (base name: "documentPaymentStructureType")', function() {
      // uncomment below and update the code to test the property documentPaymentStructureType
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethod (base name: "paymentMethod")', function() {
      // uncomment below and update the code to test the property paymentMethod
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property paymentDate (base name: "paymentDate")', function() {
      // uncomment below and update the code to test the property paymentDate
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property collected (base name: "collected")', function() {
      // uncomment below and update the code to test the property collected
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property paymentDeductionType (base name: "paymentDeductionType")', function() {
      // uncomment below and update the code to test the property paymentDeductionType
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property paymentDeductionAmount (base name: "paymentDeductionAmount")', function() {
      // uncomment below and update the code to test the property paymentDeductionAmount
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property withheldPercentage (base name: "withheldPercentage")', function() {
      // uncomment below and update the code to test the property withheldPercentage
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property withheldAmount (base name: "withheldAmount")', function() {
      // uncomment below and update the code to test the property withheldAmount
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property creditCardBankAccountId (base name: "creditCardBankAccountId")', function() {
      // uncomment below and update the code to test the property creditCardBankAccountId
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property paymentRemarks (base name: "paymentRemarks")', function() {
      // uncomment below and update the code to test the property paymentRemarks
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property remainingCollectedType (base name: "remainingCollectedType")', function() {
      // uncomment below and update the code to test the property remainingCollectedType
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property remainingCollected (base name: "remainingCollected")', function() {
      // uncomment below and update the code to test the property remainingCollected
      //var instane = new FlowAccountOpenApi.InlineDocumentWithPaymentReceivingCreditCard();
      //expect(instance).to.be();
    });

  });

}));
