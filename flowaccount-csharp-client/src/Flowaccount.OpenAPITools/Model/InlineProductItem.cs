/* 
 * FlowAccount Open API
 *
 * FlowAccount.com โปรแกรมบัญชีออนไลน์ใช้งานง่าย สำหรับธุรกิจที่พึ่งเริ่มต้น   # Introduction **Servers Production**    site: https://www.flowaccount.com    api url: https://openapi.flowaccount.com/v1    **Beta test**   site: http://sandbox-new.flowaccount.com/    api url: https://openapi.flowaccount.com/test    **PostMan Collection**   site: https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer@flowaccount.com
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
    /// InlineProductItem
    /// </summary>
    [DataContract]
    public partial class InlineProductItem : ProductItem,  IEquatable<InlineProductItem>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineProductItem" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InlineProductItem() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineProductItem" /> class.
        /// </summary>
        /// <param name="discountAmount">จำนวนส่วนลดสินค้า (default to 0M).</param>
        /// <param name="vatRate">รูปแบบภาษี &lt;br&gt; 7 &#x3D; ภาษี 7% &lt;br&gt; 0 &#x3D; ภาษี 0% &lt;br&gt; -1 &#x3D; ยกเว้นภาษี (default to 7).</param>
        public InlineProductItem(decimal discountAmount = 0M, int vatRate = 7, string documentStructureType = default(string), int type = 1, string name = default(string), string description = default(string), decimal quantity = default(decimal), string unitName = default(string), decimal pricePerUnit = default(decimal), decimal total = default(decimal)) : base(documentStructureType, type, name, description, quantity, unitName, pricePerUnit, total)
        {
            // use default value if no "discountAmount" provided
            if (discountAmount == null)
            {
                this.DiscountAmount = 0M;
            }
            else
            {
                this.DiscountAmount = discountAmount;
            }
            // use default value if no "vatRate" provided
            if (vatRate == null)
            {
                this.VatRate = 7;
            }
            else
            {
                this.VatRate = vatRate;
            }
        }
        
        /// <summary>
        /// จำนวนส่วนลดสินค้า
        /// </summary>
        /// <value>จำนวนส่วนลดสินค้า</value>
        [DataMember(Name="discountAmount", EmitDefaultValue=true)]
        public decimal DiscountAmount { get; set; }

        /// <summary>
        /// รูปแบบภาษี &lt;br&gt; 7 &#x3D; ภาษี 7% &lt;br&gt; 0 &#x3D; ภาษี 0% &lt;br&gt; -1 &#x3D; ยกเว้นภาษี
        /// </summary>
        /// <value>รูปแบบภาษี &lt;br&gt; 7 &#x3D; ภาษี 7% &lt;br&gt; 0 &#x3D; ภาษี 0% &lt;br&gt; -1 &#x3D; ยกเว้นภาษี</value>
        [DataMember(Name="vatRate", EmitDefaultValue=true)]
        public int VatRate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineProductItem {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("  DiscountAmount: ").Append(DiscountAmount).Append("\n");
            sb.Append("  VatRate: ").Append(VatRate).Append("\n");
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
            return this.Equals(input as InlineProductItem);
        }

        /// <summary>
        /// Returns true if InlineProductItem instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineProductItem to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineProductItem input)
        {
            if (input == null)
                return false;

            return base.Equals(input) && 
                (
                    this.DiscountAmount == input.DiscountAmount ||
                    (this.DiscountAmount != null &&
                    this.DiscountAmount.Equals(input.DiscountAmount))
                ) && base.Equals(input) && 
                (
                    this.VatRate == input.VatRate ||
                    (this.VatRate != null &&
                    this.VatRate.Equals(input.VatRate))
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
                if (this.DiscountAmount != null)
                    hashCode = hashCode * 59 + this.DiscountAmount.GetHashCode();
                if (this.VatRate != null)
                    hashCode = hashCode * 59 + this.VatRate.GetHashCode();
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
