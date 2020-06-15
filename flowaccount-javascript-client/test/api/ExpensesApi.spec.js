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
    instance = new FlowAccountOpenApi.ExpensesApi();
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

  describe('ExpensesApi', function() {
    describe('expensesCategoriesAccountingGet', function() {
      it('should call expensesCategoriesAccountingGet successfully', function(done) {
        //uncomment below and update the code to test expensesCategoriesAccountingGet
        //instance.expensesCategoriesAccountingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('expensesCategoriesBusinessGet', function() {
      it('should call expensesCategoriesBusinessGet successfully', function(done) {
        //uncomment below and update the code to test expensesCategoriesBusinessGet
        //instance.expensesCategoriesBusinessGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('expensesEmailDocumentPost', function() {
      it('should call expensesEmailDocumentPost successfully', function(done) {
        //uncomment below and update the code to test expensesEmailDocumentPost
        //instance.expensesEmailDocumentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('expensesGet', function() {
      it('should call expensesGet successfully', function(done) {
        //uncomment below and update the code to test expensesGet
        //instance.expensesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('expensesIdAttachmentPost', function() {
      it('should call expensesIdAttachmentPost successfully', function(done) {
        //uncomment below and update the code to test expensesIdAttachmentPost
        //instance.expensesIdAttachmentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('expensesIdDelete', function() {
      it('should call expensesIdDelete successfully', function(done) {
        //uncomment below and update the code to test expensesIdDelete
        //instance.expensesIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('expensesIdGet', function() {
      it('should call expensesIdGet successfully', function(done) {
        //uncomment below and update the code to test expensesIdGet
        //instance.expensesIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('expensesIdPaymentPost', function() {
      it('should call expensesIdPaymentPost successfully', function(done) {
        //uncomment below and update the code to test expensesIdPaymentPost
        //instance.expensesIdPaymentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('expensesIdPut', function() {
      it('should call expensesIdPut successfully', function(done) {
        //uncomment below and update the code to test expensesIdPut
        //instance.expensesIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('expensesIdStatusStatusIdPost', function() {
      it('should call expensesIdStatusStatusIdPost successfully', function(done) {
        //uncomment below and update the code to test expensesIdStatusStatusIdPost
        //instance.expensesIdStatusStatusIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('expensesInlinePost', function() {
      it('should call expensesInlinePost successfully', function(done) {
        //uncomment below and update the code to test expensesInlinePost
        //instance.expensesInlinePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('expensesInlineWithPaymentPost', function() {
      it('should call expensesInlineWithPaymentPost successfully', function(done) {
        //uncomment below and update the code to test expensesInlineWithPaymentPost
        //instance.expensesInlineWithPaymentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('expensesPost', function() {
      it('should call expensesPost successfully', function(done) {
        //uncomment below and update the code to test expensesPost
        //instance.expensesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('expensesSharedocumentPost', function() {
      it('should call expensesSharedocumentPost successfully', function(done) {
        //uncomment below and update the code to test expensesSharedocumentPost
        //instance.expensesSharedocumentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('expensesWithPaymentPost', function() {
      it('should call expensesWithPaymentPost successfully', function(done) {
        //uncomment below and update the code to test expensesWithPaymentPost
        //instance.expensesWithPaymentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));