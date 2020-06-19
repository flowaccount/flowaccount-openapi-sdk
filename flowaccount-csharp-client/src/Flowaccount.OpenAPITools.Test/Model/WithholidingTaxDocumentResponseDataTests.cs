/* 
 * FlowAccount Open API
 *
 * # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer_support@flowaccount.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using NUnit.Framework;

using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using Flowaccount.OpenAPITools.Api;
using Flowaccount.OpenAPITools.Model;
using Flowaccount.OpenAPITools.Client;
using System.Reflection;
using Newtonsoft.Json;

namespace Flowaccount.OpenAPITools.Test
{
    /// <summary>
    ///  Class for testing WithholidingTaxDocumentResponseData
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the model.
    /// </remarks>
    public class WithholidingTaxDocumentResponseDataTests
    {
        // TODO uncomment below to declare an instance variable for WithholidingTaxDocumentResponseData
        //private WithholidingTaxDocumentResponseData instance;

        /// <summary>
        /// Setup before each test
        /// </summary>
        [SetUp]
        public void Init()
        {
            // TODO uncomment below to create an instance of WithholidingTaxDocumentResponseData
            //instance = new WithholidingTaxDocumentResponseData();
        }

        /// <summary>
        /// Clean up after each test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of WithholidingTaxDocumentResponseData
        /// </summary>
        [Test]
        public void WithholidingTaxDocumentResponseDataInstanceTest()
        {
            // TODO uncomment below to test "IsInstanceOf" WithholidingTaxDocumentResponseData
            //Assert.IsInstanceOf(typeof(WithholidingTaxDocumentResponseData), instance);
        }


        /// <summary>
        /// Test the property 'RecordId'
        /// </summary>
        [Test]
        public void RecordIdTest()
        {
            // TODO unit test for the property 'RecordId'
        }
        /// <summary>
        /// Test the property 'DocumentId'
        /// </summary>
        [Test]
        public void DocumentIdTest()
        {
            // TODO unit test for the property 'DocumentId'
        }
        /// <summary>
        /// Test the property 'DocumentSerial'
        /// </summary>
        [Test]
        public void DocumentSerialTest()
        {
            // TODO unit test for the property 'DocumentSerial'
        }
        /// <summary>
        /// Test the property 'ContactCode'
        /// </summary>
        [Test]
        public void ContactCodeTest()
        {
            // TODO unit test for the property 'ContactCode'
        }
        /// <summary>
        /// Test the property 'ContactName'
        /// </summary>
        [Test]
        public void ContactNameTest()
        {
            // TODO unit test for the property 'ContactName'
        }
        /// <summary>
        /// Test the property 'ContactAddress'
        /// </summary>
        [Test]
        public void ContactAddressTest()
        {
            // TODO unit test for the property 'ContactAddress'
        }
        /// <summary>
        /// Test the property 'ContactTaxId'
        /// </summary>
        [Test]
        public void ContactTaxIdTest()
        {
            // TODO unit test for the property 'ContactTaxId'
        }
        /// <summary>
        /// Test the property 'ContactBranch'
        /// </summary>
        [Test]
        public void ContactBranchTest()
        {
            // TODO unit test for the property 'ContactBranch'
        }
        /// <summary>
        /// Test the property 'ContactPerson'
        /// </summary>
        [Test]
        public void ContactPersonTest()
        {
            // TODO unit test for the property 'ContactPerson'
        }
        /// <summary>
        /// Test the property 'ContactEmail'
        /// </summary>
        [Test]
        public void ContactEmailTest()
        {
            // TODO unit test for the property 'ContactEmail'
        }
        /// <summary>
        /// Test the property 'ContactNumber'
        /// </summary>
        [Test]
        public void ContactNumberTest()
        {
            // TODO unit test for the property 'ContactNumber'
        }
        /// <summary>
        /// Test the property 'ContactZipCode'
        /// </summary>
        [Test]
        public void ContactZipCodeTest()
        {
            // TODO unit test for the property 'ContactZipCode'
        }
        /// <summary>
        /// Test the property 'ContactGroup'
        /// </summary>
        [Test]
        public void ContactGroupTest()
        {
            // TODO unit test for the property 'ContactGroup'
        }
        /// <summary>
        /// Test the property 'PublishedOn'
        /// </summary>
        [Test]
        public void PublishedOnTest()
        {
            // TODO unit test for the property 'PublishedOn'
        }
        /// <summary>
        /// Test the property 'Entity'
        /// </summary>
        [Test]
        public void EntityTest()
        {
            // TODO unit test for the property 'Entity'
        }
        /// <summary>
        /// Test the property 'TextOther'
        /// </summary>
        [Test]
        public void TextOtherTest()
        {
            // TODO unit test for the property 'TextOther'
        }
        /// <summary>
        /// Test the property 'WithholdingTaxItems'
        /// </summary>
        [Test]
        public void WithholdingTaxItemsTest()
        {
            // TODO unit test for the property 'WithholdingTaxItems'
        }
        /// <summary>
        /// Test the property 'Total'
        /// </summary>
        [Test]
        public void TotalTest()
        {
            // TODO unit test for the property 'Total'
        }
        /// <summary>
        /// Test the property 'TotalTaxWithheld'
        /// </summary>
        [Test]
        public void TotalTaxWithheldTest()
        {
            // TODO unit test for the property 'TotalTaxWithheld'
        }
        /// <summary>
        /// Test the property 'TaxPayment'
        /// </summary>
        [Test]
        public void TaxPaymentTest()
        {
            // TODO unit test for the property 'TaxPayment'
        }
        /// <summary>
        /// Test the property 'TaxPaymentOthers'
        /// </summary>
        [Test]
        public void TaxPaymentOthersTest()
        {
            // TODO unit test for the property 'TaxPaymentOthers'
        }
        /// <summary>
        /// Test the property 'ProvidentFundNumber'
        /// </summary>
        [Test]
        public void ProvidentFundNumberTest()
        {
            // TODO unit test for the property 'ProvidentFundNumber'
        }
        /// <summary>
        /// Test the property 'ProvidentFundAmount'
        /// </summary>
        [Test]
        public void ProvidentFundAmountTest()
        {
            // TODO unit test for the property 'ProvidentFundAmount'
        }
        /// <summary>
        /// Test the property 'SocialSecurityAmount'
        /// </summary>
        [Test]
        public void SocialSecurityAmountTest()
        {
            // TODO unit test for the property 'SocialSecurityAmount'
        }
        /// <summary>
        /// Test the property 'Remarks'
        /// </summary>
        [Test]
        public void RemarksTest()
        {
            // TODO unit test for the property 'Remarks'
        }
        /// <summary>
        /// Test the property 'InternalNotes'
        /// </summary>
        [Test]
        public void InternalNotesTest()
        {
            // TODO unit test for the property 'InternalNotes'
        }
        /// <summary>
        /// Test the property 'ShowSignatureOrStamp'
        /// </summary>
        [Test]
        public void ShowSignatureOrStampTest()
        {
            // TODO unit test for the property 'ShowSignatureOrStamp'
        }
        /// <summary>
        /// Test the property 'Company'
        /// </summary>
        [Test]
        public void CompanyTest()
        {
            // TODO unit test for the property 'Company'
        }
        /// <summary>
        /// Test the property 'Status'
        /// </summary>
        [Test]
        public void StatusTest()
        {
            // TODO unit test for the property 'Status'
        }
        /// <summary>
        /// Test the property 'StatusString'
        /// </summary>
        [Test]
        public void StatusStringTest()
        {
            // TODO unit test for the property 'StatusString'
        }
        /// <summary>
        /// Test the property 'DocumentType'
        /// </summary>
        [Test]
        public void DocumentTypeTest()
        {
            // TODO unit test for the property 'DocumentType'
        }
        /// <summary>
        /// Test the property 'AllowDelete'
        /// </summary>
        [Test]
        public void AllowDeleteTest()
        {
            // TODO unit test for the property 'AllowDelete'
        }

    }

}
