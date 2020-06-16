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
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Flowaccount.OpenAPITools.Client.OpenAPIDateConverter;

namespace Flowaccount.OpenAPITools.Model
{
    /// <summary>
    /// UpdateSimpleDocument
    /// </summary>
    [DataContract]
    public partial class UpdateSimpleDocument : UpdateDocument,  IEquatable<UpdateSimpleDocument>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateSimpleDocument" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UpdateSimpleDocument() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateSimpleDocument" /> class.
        /// </summary>
        /// <param name="items">รายการสินค้าใช้งานสำหรับเอกสาร Simple.</param>
        /// <param name="documentReference">สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา).</param>
        public UpdateSimpleDocument(List<SimpleProductItem> items = default(List<SimpleProductItem>), List<UpgradeDocument> documentReference = default(List<UpgradeDocument>), long recordId = 0, string companyName = default(string), string companyNameEn = default(string), string companyAddress = default(string), string companyAddressEn = default(string), string companyTaxId = default(string), string companyBranch = default(string), string companyBranchEn = default(string), string companyPhone = default(string), string companyMobile = default(string), string companyFax = default(string), string companyWebsite = default(string), string contactCode = default(string), string contactName = default(string), string contactAddress = default(string), string contactTaxId = default(string), string contactBranch = default(string), string contactPerson = default(string), string contactEmail = default(string), string contactNumber = default(string), string contactZipCode = default(string), int contactGroup = 1, DateTime publishedOn = default(DateTime), int creditType = 1, int creditDays = 0, DateTime dueDate = default(DateTime), string salesName = "อีเมล หรือ ชื่อผู้สร้างเอกสาร", string projectName = default(string), string reference = default(string), bool isVatInclusive = false, bool useReceiptDeduction = false, decimal subTotal = 0M, int discountPercentage = 0, decimal discountAmount = 0M, decimal totalAfterDiscount = default(decimal), bool isVat = false, decimal vatAmount = default(decimal), decimal grandTotal = default(decimal), bool documentShowWithholdingTax = false, int documentWithholdingTaxPercentage = 0, decimal documentWithholdingTaxAmount = 0M, int documentDeductionType = 0, decimal documentDeductionAmount = 0M, string remarks = default(string), string internalNotes = default(string), bool showSignatureOrStamp = true, string documentStructureType = default(string)) : base(recordId, companyName, companyNameEn, companyAddress, companyAddressEn, companyTaxId, companyBranch, companyBranchEn, companyPhone, companyMobile, companyFax, companyWebsite, contactCode, contactName, contactAddress, contactTaxId, contactBranch, contactPerson, contactEmail, contactNumber, contactZipCode, contactGroup, publishedOn, creditType, creditDays, dueDate, salesName, projectName, reference, isVatInclusive, useReceiptDeduction, subTotal, discountPercentage, discountAmount, totalAfterDiscount, isVat, vatAmount, grandTotal, documentShowWithholdingTax, documentWithholdingTaxPercentage, documentWithholdingTaxAmount, documentDeductionType, documentDeductionAmount, remarks, internalNotes, showSignatureOrStamp, documentStructureType)
        {
            this.Items = items;
            this.DocumentReference = documentReference;
        }
        
        /// <summary>
        /// รายการสินค้าใช้งานสำหรับเอกสาร Simple
        /// </summary>
        /// <value>รายการสินค้าใช้งานสำหรับเอกสาร Simple</value>
        [DataMember(Name="items", EmitDefaultValue=true)]
        public List<SimpleProductItem> Items { get; set; }

        /// <summary>
        /// สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)
        /// </summary>
        /// <value>สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)</value>
        [DataMember(Name="documentReference", EmitDefaultValue=true)]
        public List<UpgradeDocument> DocumentReference { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateSimpleDocument {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("  Items: ").Append(Items).Append("\n");
            sb.Append("  DocumentReference: ").Append(DocumentReference).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public override string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as UpdateSimpleDocument);
        }

        /// <summary>
        /// Returns true if UpdateSimpleDocument instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateSimpleDocument to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateSimpleDocument input)
        {
            if (input == null)
                return false;

            return base.Equals(input) && 
                (
                    this.Items == input.Items ||
                    this.Items != null &&
                    input.Items != null &&
                    this.Items.SequenceEqual(input.Items)
                ) && base.Equals(input) && 
                (
                    this.DocumentReference == input.DocumentReference ||
                    this.DocumentReference != null &&
                    input.DocumentReference != null &&
                    this.DocumentReference.SequenceEqual(input.DocumentReference)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = base.GetHashCode();
                if (this.Items != null)
                    hashCode = hashCode * 59 + this.Items.GetHashCode();
                if (this.DocumentReference != null)
                    hashCode = hashCode * 59 + this.DocumentReference.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            foreach(var x in base.BaseValidate(validationContext)) yield return x;
            yield break;
        }
    }

}
