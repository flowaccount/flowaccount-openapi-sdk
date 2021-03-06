/* 
 * FlowAccount Open API
 *
 * # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer_support@flowaccount.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Model;

namespace Flowaccount.OpenAPITools.Test
{
    /// <summary>
    ///  Class for testing ReceiptApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class ReceiptApiTests
    {
        private ReceiptApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new ReceiptApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of ReceiptApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' ReceiptApi
            //Assert.IsInstanceOf(typeof(ReceiptApi), instance);
        }

        
        /// <summary>
        /// Test ReceiptsEmailDocumentPost
        /// </summary>
        [Test]
        public void ReceiptsEmailDocumentPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string authorization = null;
            //SendEmailCoppies sendEmailCoppies = null;
            //var response = instance.ReceiptsEmailDocumentPost(authorization, sendEmailCoppies);
            //Assert.IsInstanceOf(typeof(SendEmailResponse), response, "response is SendEmailResponse");
        }
        
        /// <summary>
        /// Test ReceiptsGet
        /// </summary>
        [Test]
        public void ReceiptsGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //int currentPage = null;
            //int pageSize = null;
            //string authorization = null;
            //string sortBy = null;
            //string filter = null;
            //var response = instance.ReceiptsGet(currentPage, pageSize, authorization, sortBy, filter);
            //Assert.IsInstanceOf(typeof(AllDocumentResponse), response, "response is AllDocumentResponse");
        }
        
        /// <summary>
        /// Test ReceiptsIdAttachmentPost
        /// </summary>
        [Test]
        public void ReceiptsIdAttachmentPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string authorization = null;
            //string id = null;
            //System.IO.Stream file = null;
            //var response = instance.ReceiptsIdAttachmentPost(authorization, id, file);
            //Assert.IsInstanceOf(typeof(AttachmentResponse), response, "response is AttachmentResponse");
        }
        
        /// <summary>
        /// Test ReceiptsIdDelete
        /// </summary>
        [Test]
        public void ReceiptsIdDeleteTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string authorization = null;
            //string id = null;
            //var response = instance.ReceiptsIdDelete(authorization, id);
            //Assert.IsInstanceOf(typeof(DeleteResponse), response, "response is DeleteResponse");
        }
        
        /// <summary>
        /// Test ReceiptsIdGet
        /// </summary>
        [Test]
        public void ReceiptsIdGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string authorization = null;
            //string id = null;
            //var response = instance.ReceiptsIdGet(authorization, id);
            //Assert.IsInstanceOf(typeof(InlineDocumentResponse), response, "response is InlineDocumentResponse");
        }
        
        /// <summary>
        /// Test ReceiptsIdPaymentPost
        /// </summary>
        [Test]
        public void ReceiptsIdPaymentPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string authorization = null;
            //string id = null;
            //PaymentReceivingDocument paymentReceivingDocument = null;
            //var response = instance.ReceiptsIdPaymentPost(authorization, id, paymentReceivingDocument);
            //Assert.IsInstanceOf(typeof(InlineDocumentResponse), response, "response is InlineDocumentResponse");
        }
        
        /// <summary>
        /// Test ReceiptsIdPut
        /// </summary>
        [Test]
        public void ReceiptsIdPutTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string authorization = null;
            //string id = null;
            //UpdateInlineDocument updateInlineDocument = null;
            //var response = instance.ReceiptsIdPut(authorization, id, updateInlineDocument);
            //Assert.IsInstanceOf(typeof(InlineDocumentResponse), response, "response is InlineDocumentResponse");
        }
        
        /// <summary>
        /// Test ReceiptsIdStatusStatusIdPost
        /// </summary>
        [Test]
        public void ReceiptsIdStatusStatusIdPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string authorization = null;
            //string id = null;
            //string statusId = null;
            //var response = instance.ReceiptsIdStatusStatusIdPost(authorization, id, statusId);
            //Assert.IsInstanceOf(typeof(InlineDocumentResponse), response, "response is InlineDocumentResponse");
        }
        
        /// <summary>
        /// Test ReceiptsInlinePost
        /// </summary>
        [Test]
        public void ReceiptsInlinePostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string authorization = null;
            //InlineDocument inlineDocument = null;
            //var response = instance.ReceiptsInlinePost(authorization, inlineDocument);
            //Assert.IsInstanceOf(typeof(InlineDocumentResponse), response, "response is InlineDocumentResponse");
        }
        
        /// <summary>
        /// Test ReceiptsInlineWithPaymentPost
        /// </summary>
        [Test]
        public void ReceiptsInlineWithPaymentPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string authorization = null;
            //InlineDocumentWithPaymentReceiving inlineDocumentWithPaymentReceiving = null;
            //var response = instance.ReceiptsInlineWithPaymentPost(authorization, inlineDocumentWithPaymentReceiving);
            //Assert.IsInstanceOf(typeof(InlineDocumentResponse), response, "response is InlineDocumentResponse");
        }
        
        /// <summary>
        /// Test ReceiptsPost
        /// </summary>
        [Test]
        public void ReceiptsPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string authorization = null;
            //SimpleDocument simpleDocument = null;
            //var response = instance.ReceiptsPost(authorization, simpleDocument);
            //Assert.IsInstanceOf(typeof(SimpleDocumentResponse), response, "response is SimpleDocumentResponse");
        }
        
        /// <summary>
        /// Test ReceiptsSharedocumentPost
        /// </summary>
        [Test]
        public void ReceiptsSharedocumentPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string authorization = null;
            //ShareDocument shareDocument = null;
            //var response = instance.ReceiptsSharedocumentPost(authorization, shareDocument);
            //Assert.IsInstanceOf(typeof(ShareDocumentResponse), response, "response is ShareDocumentResponse");
        }
        
        /// <summary>
        /// Test ReceiptsWithPaymentPost
        /// </summary>
        [Test]
        public void ReceiptsWithPaymentPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string authorization = null;
            //SimpleDocumentWithPaymentReceiving simpleDocumentWithPaymentReceiving = null;
            //var response = instance.ReceiptsWithPaymentPost(authorization, simpleDocumentWithPaymentReceiving);
            //Assert.IsInstanceOf(typeof(SimpleDocumentResponse), response, "response is SimpleDocumentResponse");
        }
        
    }

}
