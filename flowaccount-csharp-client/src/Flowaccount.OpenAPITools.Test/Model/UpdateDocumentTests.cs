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
    ///  Class for testing UpdateDocument
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the model.
    /// </remarks>
    public class UpdateDocumentTests
    {
        // TODO uncomment below to declare an instance variable for UpdateDocument
        //private UpdateDocument instance;

        /// <summary>
        /// Setup before each test
        /// </summary>
        [SetUp]
        public void Init()
        {
            // TODO uncomment below to create an instance of UpdateDocument
            //instance = new UpdateDocument();
        }

        /// <summary>
        /// Clean up after each test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of UpdateDocument
        /// </summary>
        [Test]
        public void UpdateDocumentInstanceTest()
        {
            // TODO uncomment below to test "IsInstanceOf" UpdateDocument
            //Assert.IsInstanceOf(typeof(UpdateDocument), instance);
        }

        /// <summary>
        /// Test deserialize a UpdateInlineDocument from type UpdateDocument
        /// </summary>
        [Test]
        public void UpdateInlineDocumentDeserializeFromUpdateDocumentTest()
        {
            // TODO uncomment below to test deserialize a UpdateInlineDocument from type UpdateDocument
            //Assert.IsInstanceOf(typeof(UpdateDocument), JsonConvert.DeserializeObject<UpdateDocument>(new UpdateInlineDocument().ToJson()));
        }
        /// <summary>
        /// Test deserialize a UpdateSimpleDocument from type UpdateDocument
        /// </summary>
        [Test]
        public void UpdateSimpleDocumentDeserializeFromUpdateDocumentTest()
        {
            // TODO uncomment below to test deserialize a UpdateSimpleDocument from type UpdateDocument
            //Assert.IsInstanceOf(typeof(UpdateDocument), JsonConvert.DeserializeObject<UpdateDocument>(new UpdateSimpleDocument().ToJson()));
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
        /// Test the property 'CompanyName'
        /// </summary>
        [Test]
        public void CompanyNameTest()
        {
            // TODO unit test for the property 'CompanyName'
        }
        /// <summary>
        /// Test the property 'CompanyNameEn'
        /// </summary>
        [Test]
        public void CompanyNameEnTest()
        {
            // TODO unit test for the property 'CompanyNameEn'
        }
        /// <summary>
        /// Test the property 'CompanyAddress'
        /// </summary>
        [Test]
        public void CompanyAddressTest()
        {
            // TODO unit test for the property 'CompanyAddress'
        }
        /// <summary>
        /// Test the property 'CompanyAddressEn'
        /// </summary>
        [Test]
        public void CompanyAddressEnTest()
        {
            // TODO unit test for the property 'CompanyAddressEn'
        }
        /// <summary>
        /// Test the property 'CompanyTaxId'
        /// </summary>
        [Test]
        public void CompanyTaxIdTest()
        {
            // TODO unit test for the property 'CompanyTaxId'
        }
        /// <summary>
        /// Test the property 'CompanyBranch'
        /// </summary>
        [Test]
        public void CompanyBranchTest()
        {
            // TODO unit test for the property 'CompanyBranch'
        }
        /// <summary>
        /// Test the property 'CompanyBranchEn'
        /// </summary>
        [Test]
        public void CompanyBranchEnTest()
        {
            // TODO unit test for the property 'CompanyBranchEn'
        }
        /// <summary>
        /// Test the property 'CompanyPhone'
        /// </summary>
        [Test]
        public void CompanyPhoneTest()
        {
            // TODO unit test for the property 'CompanyPhone'
        }
        /// <summary>
        /// Test the property 'CompanyMobile'
        /// </summary>
        [Test]
        public void CompanyMobileTest()
        {
            // TODO unit test for the property 'CompanyMobile'
        }
        /// <summary>
        /// Test the property 'CompanyFax'
        /// </summary>
        [Test]
        public void CompanyFaxTest()
        {
            // TODO unit test for the property 'CompanyFax'
        }
        /// <summary>
        /// Test the property 'CompanyWebsite'
        /// </summary>
        [Test]
        public void CompanyWebsiteTest()
        {
            // TODO unit test for the property 'CompanyWebsite'
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
        /// Test the property 'CreditType'
        /// </summary>
        [Test]
        public void CreditTypeTest()
        {
            // TODO unit test for the property 'CreditType'
        }
        /// <summary>
        /// Test the property 'CreditDays'
        /// </summary>
        [Test]
        public void CreditDaysTest()
        {
            // TODO unit test for the property 'CreditDays'
        }
        /// <summary>
        /// Test the property 'DueDate'
        /// </summary>
        [Test]
        public void DueDateTest()
        {
            // TODO unit test for the property 'DueDate'
        }
        /// <summary>
        /// Test the property 'SalesName'
        /// </summary>
        [Test]
        public void SalesNameTest()
        {
            // TODO unit test for the property 'SalesName'
        }
        /// <summary>
        /// Test the property 'ProjectName'
        /// </summary>
        [Test]
        public void ProjectNameTest()
        {
            // TODO unit test for the property 'ProjectName'
        }
        /// <summary>
        /// Test the property 'Reference'
        /// </summary>
        [Test]
        public void ReferenceTest()
        {
            // TODO unit test for the property 'Reference'
        }
        /// <summary>
        /// Test the property 'IsVatInclusive'
        /// </summary>
        [Test]
        public void IsVatInclusiveTest()
        {
            // TODO unit test for the property 'IsVatInclusive'
        }
        /// <summary>
        /// Test the property 'UseReceiptDeduction'
        /// </summary>
        [Test]
        public void UseReceiptDeductionTest()
        {
            // TODO unit test for the property 'UseReceiptDeduction'
        }
        /// <summary>
        /// Test the property 'SubTotal'
        /// </summary>
        [Test]
        public void SubTotalTest()
        {
            // TODO unit test for the property 'SubTotal'
        }
        /// <summary>
        /// Test the property 'DiscountPercentage'
        /// </summary>
        [Test]
        public void DiscountPercentageTest()
        {
            // TODO unit test for the property 'DiscountPercentage'
        }
        /// <summary>
        /// Test the property 'DiscountAmount'
        /// </summary>
        [Test]
        public void DiscountAmountTest()
        {
            // TODO unit test for the property 'DiscountAmount'
        }
        /// <summary>
        /// Test the property 'TotalAfterDiscount'
        /// </summary>
        [Test]
        public void TotalAfterDiscountTest()
        {
            // TODO unit test for the property 'TotalAfterDiscount'
        }
        /// <summary>
        /// Test the property 'IsVat'
        /// </summary>
        [Test]
        public void IsVatTest()
        {
            // TODO unit test for the property 'IsVat'
        }
        /// <summary>
        /// Test the property 'VatAmount'
        /// </summary>
        [Test]
        public void VatAmountTest()
        {
            // TODO unit test for the property 'VatAmount'
        }
        /// <summary>
        /// Test the property 'GrandTotal'
        /// </summary>
        [Test]
        public void GrandTotalTest()
        {
            // TODO unit test for the property 'GrandTotal'
        }
        /// <summary>
        /// Test the property 'DocumentShowWithholdingTax'
        /// </summary>
        [Test]
        public void DocumentShowWithholdingTaxTest()
        {
            // TODO unit test for the property 'DocumentShowWithholdingTax'
        }
        /// <summary>
        /// Test the property 'DocumentWithholdingTaxPercentage'
        /// </summary>
        [Test]
        public void DocumentWithholdingTaxPercentageTest()
        {
            // TODO unit test for the property 'DocumentWithholdingTaxPercentage'
        }
        /// <summary>
        /// Test the property 'DocumentWithholdingTaxAmount'
        /// </summary>
        [Test]
        public void DocumentWithholdingTaxAmountTest()
        {
            // TODO unit test for the property 'DocumentWithholdingTaxAmount'
        }
        /// <summary>
        /// Test the property 'DocumentDeductionType'
        /// </summary>
        [Test]
        public void DocumentDeductionTypeTest()
        {
            // TODO unit test for the property 'DocumentDeductionType'
        }
        /// <summary>
        /// Test the property 'DocumentDeductionAmount'
        /// </summary>
        [Test]
        public void DocumentDeductionAmountTest()
        {
            // TODO unit test for the property 'DocumentDeductionAmount'
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
        /// Test the property 'DocumentStructureType'
        /// </summary>
        [Test]
        public void DocumentStructureTypeTest()
        {
            // TODO unit test for the property 'DocumentStructureType'
        }

    }

}
