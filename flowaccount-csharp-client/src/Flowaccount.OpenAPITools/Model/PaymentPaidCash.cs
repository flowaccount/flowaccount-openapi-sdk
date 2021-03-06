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
using JsonSubTypes;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Flowaccount.OpenAPITools.Client.OpenAPIDateConverter;

namespace Flowaccount.OpenAPITools.Model
{
    /// <summary>
    /// PaymentPaidCash
    /// </summary>
    [DataContract]
    [JsonConverter(typeof(JsonSubtypes), "paymentStructureType")]
    public partial class PaymentPaidCash :  IEquatable<PaymentPaidCash>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PaymentPaidCash" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PaymentPaidCash() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PaymentPaidCash" /> class.
        /// </summary>
        /// <param name="paymentStructureType">ชำระเงิน ด้วยเงินสด (required).</param>
        /// <param name="documentId">id เอกสาร (required).</param>
        /// <param name="paymentMethod">ประเภทการชำระเงิน &lt;br&gt; 1 &#x3D; เงินสด (required) (default to 1).</param>
        /// <param name="paymentDate">วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; (required).</param>
        /// <param name="collected">จำนวนเงินยอดจ่ายสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; (required) (default to 0M).</param>
        /// <param name="withheldPercentage">เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt; (default to 0).</param>
        /// <param name="withheldAmount">จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; (default to 0M).</param>
        /// <param name="paymentRemarks">หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน.</param>
        /// <param name="remainingCollectedType">สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร  (default to 0).</param>
        /// <param name="remainingCollected">จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; (default to 0M).</param>
        public PaymentPaidCash(string paymentStructureType = default(string), long documentId = default(long), long paymentMethod = 1, DateTime paymentDate = default(DateTime), decimal collected = 0M, long withheldPercentage = 0, decimal withheldAmount = 0M, string paymentRemarks = default(string), long remainingCollectedType = 0, decimal remainingCollected = 0M)
        {
            // to ensure "paymentStructureType" is required (not null)
            if (paymentStructureType == null)
            {
                throw new InvalidDataException("paymentStructureType is a required property for PaymentPaidCash and cannot be null");
            }
            else
            {
                this.PaymentStructureType = paymentStructureType;
            }
            
            this.PaymentStructureType = paymentStructureType;
            // to ensure "documentId" is required (not null)
            if (documentId == null)
            {
                throw new InvalidDataException("documentId is a required property for PaymentPaidCash and cannot be null");
            }
            else
            {
                this.DocumentId = documentId;
            }
            
            // to ensure "paymentMethod" is required (not null)
            if (paymentMethod == null)
            {
                throw new InvalidDataException("paymentMethod is a required property for PaymentPaidCash and cannot be null");
            }
            else
            {
                this.PaymentMethod = paymentMethod;
            }
            
            // to ensure "paymentDate" is required (not null)
            if (paymentDate == null)
            {
                throw new InvalidDataException("paymentDate is a required property for PaymentPaidCash and cannot be null");
            }
            else
            {
                this.PaymentDate = paymentDate;
            }
            
            // to ensure "collected" is required (not null)
            if (collected == null)
            {
                throw new InvalidDataException("collected is a required property for PaymentPaidCash and cannot be null");
            }
            else
            {
                this.Collected = collected;
            }
            
            // use default value if no "withheldPercentage" provided
            if (withheldPercentage == null)
            {
                this.WithheldPercentage = 0;
            }
            else
            {
                this.WithheldPercentage = withheldPercentage;
            }
            // use default value if no "withheldAmount" provided
            if (withheldAmount == null)
            {
                this.WithheldAmount = 0M;
            }
            else
            {
                this.WithheldAmount = withheldAmount;
            }
            this.PaymentRemarks = paymentRemarks;
            // use default value if no "remainingCollectedType" provided
            if (remainingCollectedType == null)
            {
                this.RemainingCollectedType = 0;
            }
            else
            {
                this.RemainingCollectedType = remainingCollectedType;
            }
            // use default value if no "remainingCollected" provided
            if (remainingCollected == null)
            {
                this.RemainingCollected = 0M;
            }
            else
            {
                this.RemainingCollected = remainingCollected;
            }
        }
        
        /// <summary>
        /// ชำระเงิน ด้วยเงินสด
        /// </summary>
        /// <value>ชำระเงิน ด้วยเงินสด</value>
        [DataMember(Name="paymentStructureType", EmitDefaultValue=true)]
        public string PaymentStructureType { get; set; }

        /// <summary>
        /// id เอกสาร
        /// </summary>
        /// <value>id เอกสาร</value>
        [DataMember(Name="documentId", EmitDefaultValue=true)]
        public long DocumentId { get; set; }

        /// <summary>
        /// ประเภทการชำระเงิน &lt;br&gt; 1 &#x3D; เงินสด
        /// </summary>
        /// <value>ประเภทการชำระเงิน &lt;br&gt; 1 &#x3D; เงินสด</value>
        [DataMember(Name="paymentMethod", EmitDefaultValue=true)]
        public long PaymentMethod { get; set; }

        /// <summary>
        /// วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt;
        /// </summary>
        /// <value>วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt;</value>
        [DataMember(Name="paymentDate", EmitDefaultValue=true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime PaymentDate { get; set; }

        /// <summary>
        /// จำนวนเงินยอดจ่ายสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt;
        /// </summary>
        /// <value>จำนวนเงินยอดจ่ายสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt;</value>
        [DataMember(Name="collected", EmitDefaultValue=true)]
        public decimal Collected { get; set; }

        /// <summary>
        /// เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt;
        /// </summary>
        /// <value>เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt;</value>
        [DataMember(Name="withheldPercentage", EmitDefaultValue=true)]
        public long WithheldPercentage { get; set; }

        /// <summary>
        /// จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt;
        /// </summary>
        /// <value>จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt;</value>
        [DataMember(Name="withheldAmount", EmitDefaultValue=true)]
        public decimal WithheldAmount { get; set; }

        /// <summary>
        /// หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน
        /// </summary>
        /// <value>หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน</value>
        [DataMember(Name="paymentRemarks", EmitDefaultValue=true)]
        public string PaymentRemarks { get; set; }

        /// <summary>
        /// สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร 
        /// </summary>
        /// <value>สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร </value>
        [DataMember(Name="remainingCollectedType", EmitDefaultValue=true)]
        public long RemainingCollectedType { get; set; }

        /// <summary>
        /// จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt;
        /// </summary>
        /// <value>จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt;</value>
        [DataMember(Name="remainingCollected", EmitDefaultValue=true)]
        public decimal RemainingCollected { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PaymentPaidCash {\n");
            sb.Append("  PaymentStructureType: ").Append(PaymentStructureType).Append("\n");
            sb.Append("  DocumentId: ").Append(DocumentId).Append("\n");
            sb.Append("  PaymentMethod: ").Append(PaymentMethod).Append("\n");
            sb.Append("  PaymentDate: ").Append(PaymentDate).Append("\n");
            sb.Append("  Collected: ").Append(Collected).Append("\n");
            sb.Append("  WithheldPercentage: ").Append(WithheldPercentage).Append("\n");
            sb.Append("  WithheldAmount: ").Append(WithheldAmount).Append("\n");
            sb.Append("  PaymentRemarks: ").Append(PaymentRemarks).Append("\n");
            sb.Append("  RemainingCollectedType: ").Append(RemainingCollectedType).Append("\n");
            sb.Append("  RemainingCollected: ").Append(RemainingCollected).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
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
            return this.Equals(input as PaymentPaidCash);
        }

        /// <summary>
        /// Returns true if PaymentPaidCash instances are equal
        /// </summary>
        /// <param name="input">Instance of PaymentPaidCash to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PaymentPaidCash input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.PaymentStructureType == input.PaymentStructureType ||
                    (this.PaymentStructureType != null &&
                    this.PaymentStructureType.Equals(input.PaymentStructureType))
                ) && 
                (
                    this.DocumentId == input.DocumentId ||
                    (this.DocumentId != null &&
                    this.DocumentId.Equals(input.DocumentId))
                ) && 
                (
                    this.PaymentMethod == input.PaymentMethod ||
                    (this.PaymentMethod != null &&
                    this.PaymentMethod.Equals(input.PaymentMethod))
                ) && 
                (
                    this.PaymentDate == input.PaymentDate ||
                    (this.PaymentDate != null &&
                    this.PaymentDate.Equals(input.PaymentDate))
                ) && 
                (
                    this.Collected == input.Collected ||
                    (this.Collected != null &&
                    this.Collected.Equals(input.Collected))
                ) && 
                (
                    this.WithheldPercentage == input.WithheldPercentage ||
                    (this.WithheldPercentage != null &&
                    this.WithheldPercentage.Equals(input.WithheldPercentage))
                ) && 
                (
                    this.WithheldAmount == input.WithheldAmount ||
                    (this.WithheldAmount != null &&
                    this.WithheldAmount.Equals(input.WithheldAmount))
                ) && 
                (
                    this.PaymentRemarks == input.PaymentRemarks ||
                    (this.PaymentRemarks != null &&
                    this.PaymentRemarks.Equals(input.PaymentRemarks))
                ) && 
                (
                    this.RemainingCollectedType == input.RemainingCollectedType ||
                    (this.RemainingCollectedType != null &&
                    this.RemainingCollectedType.Equals(input.RemainingCollectedType))
                ) && 
                (
                    this.RemainingCollected == input.RemainingCollected ||
                    (this.RemainingCollected != null &&
                    this.RemainingCollected.Equals(input.RemainingCollected))
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
                int hashCode = 41;
                if (this.PaymentStructureType != null)
                    hashCode = hashCode * 59 + this.PaymentStructureType.GetHashCode();
                if (this.DocumentId != null)
                    hashCode = hashCode * 59 + this.DocumentId.GetHashCode();
                if (this.PaymentMethod != null)
                    hashCode = hashCode * 59 + this.PaymentMethod.GetHashCode();
                if (this.PaymentDate != null)
                    hashCode = hashCode * 59 + this.PaymentDate.GetHashCode();
                if (this.Collected != null)
                    hashCode = hashCode * 59 + this.Collected.GetHashCode();
                if (this.WithheldPercentage != null)
                    hashCode = hashCode * 59 + this.WithheldPercentage.GetHashCode();
                if (this.WithheldAmount != null)
                    hashCode = hashCode * 59 + this.WithheldAmount.GetHashCode();
                if (this.PaymentRemarks != null)
                    hashCode = hashCode * 59 + this.PaymentRemarks.GetHashCode();
                if (this.RemainingCollectedType != null)
                    hashCode = hashCode * 59 + this.RemainingCollectedType.GetHashCode();
                if (this.RemainingCollected != null)
                    hashCode = hashCode * 59 + this.RemainingCollected.GetHashCode();
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
            yield break;
        }
    }

}
