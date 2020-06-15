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
    instance = new FlowAccountOpenApi.ReceivingInventoryApi();
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

  describe('ReceivingInventoryApi', function() {
    describe('purchasesEmailDocumentPost', function() {
      it('should call purchasesEmailDocumentPost successfully', function(done) {
        //uncomment below and update the code to test purchasesEmailDocumentPost
        //instance.purchasesEmailDocumentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('purchasesGet', function() {
      it('should call purchasesGet successfully', function(done) {
        //uncomment below and update the code to test purchasesGet
        //instance.purchasesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('purchasesIdAttachmentPost', function() {
      it('should call purchasesIdAttachmentPost successfully', function(done) {
        //uncomment below and update the code to test purchasesIdAttachmentPost
        //instance.purchasesIdAttachmentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('purchasesIdDelete', function() {
      it('should call purchasesIdDelete successfully', function(done) {
        //uncomment below and update the code to test purchasesIdDelete
        //instance.purchasesIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('purchasesIdGet', function() {
      it('should call purchasesIdGet successfully', function(done) {
        //uncomment below and update the code to test purchasesIdGet
        //instance.purchasesIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('purchasesIdPaymentPost', function() {
      it('should call purchasesIdPaymentPost successfully', function(done) {
        //uncomment below and update the code to test purchasesIdPaymentPost
        //instance.purchasesIdPaymentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('purchasesIdPut', function() {
      it('should call purchasesIdPut successfully', function(done) {
        //uncomment below and update the code to test purchasesIdPut
        //instance.purchasesIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('purchasesIdStatusStatusIdPost', function() {
      it('should call purchasesIdStatusStatusIdPost successfully', function(done) {
        //uncomment below and update the code to test purchasesIdStatusStatusIdPost
        //instance.purchasesIdStatusStatusIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('purchasesInlinePost', function() {
      it('should call purchasesInlinePost successfully', function(done) {
        //uncomment below and update the code to test purchasesInlinePost
        //instance.purchasesInlinePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('purchasesInlineWithPaymentPost', function() {
      it('should call purchasesInlineWithPaymentPost successfully', function(done) {
        //uncomment below and update the code to test purchasesInlineWithPaymentPost
        //instance.purchasesInlineWithPaymentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('purchasesPost', function() {
      it('should call purchasesPost successfully', function(done) {
        //uncomment below and update the code to test purchasesPost
        //instance.purchasesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('purchasesSharedocumentPost', function() {
      it('should call purchasesSharedocumentPost successfully', function(done) {
        //uncomment below and update the code to test purchasesSharedocumentPost
        //instance.purchasesSharedocumentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('purchasesWithPaymentPost', function() {
      it('should call purchasesWithPaymentPost successfully', function(done) {
        //uncomment below and update the code to test purchasesWithPaymentPost
        //instance.purchasesWithPaymentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));