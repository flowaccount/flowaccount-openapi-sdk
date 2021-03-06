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
    ///  Class for testing ExpenseDocument
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the model.
    /// </remarks>
    public class ExpenseDocumentTests
    {
        // TODO uncomment below to declare an instance variable for ExpenseDocument
        //private ExpenseDocument instance;

        /// <summary>
        /// Setup before each test
        /// </summary>
        [SetUp]
        public void Init()
        {
            // TODO uncomment below to create an instance of ExpenseDocument
            //instance = new ExpenseDocument();
        }

        /// <summary>
        /// Clean up after each test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of ExpenseDocument
        /// </summary>
        [Test]
        public void ExpenseDocumentInstanceTest()
        {
            // TODO uncomment below to test "IsInstanceOf" ExpenseDocument
            //Assert.IsInstanceOf(typeof(ExpenseDocument), instance);
        }

        /// <summary>
        /// Test deserialize a ExpenseInlineDocument from type ExpenseDocument
        /// </summary>
        [Test]
        public void ExpenseInlineDocumentDeserializeFromExpenseDocumentTest()
        {
            // TODO uncomment below to test deserialize a ExpenseInlineDocument from type ExpenseDocument
            //Assert.IsInstanceOf(typeof(ExpenseDocument), JsonConvert.DeserializeObject<ExpenseDocument>(new ExpenseInlineDocument().ToJson()));
        }
        /// <summary>
        /// Test deserialize a ExpenseSimpleDocument from type ExpenseDocument
        /// </summary>
        [Test]
        public void ExpenseSimpleDocumentDeserializeFromExpenseDocumentTest()
        {
            // TODO uncomment below to test deserialize a ExpenseSimpleDocument from type ExpenseDocument
            //Assert.IsInstanceOf(typeof(ExpenseDocument), JsonConvert.DeserializeObject<ExpenseDocument>(new ExpenseSimpleDocument().ToJson()));
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
        /// Test the property 'ExpenseStructureType'
        /// </summary>
        [Test]
        public void ExpenseStructureTypeTest()
        {
            // TODO unit test for the property 'ExpenseStructureType'
        }

    }

}
