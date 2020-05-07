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
using JsonSubTypes;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Flowaccount.OpenAPITools.Client.OpenAPIDateConverter;

namespace Flowaccount.OpenAPITools.Model
{
    /// <summary>
    /// PaymentPaidCreditCard
    /// </summary>
    [DataContract]
    [JsonConverter(typeof(JsonSubtypes), "PaymentStructureType")]
    public partial class PaymentPaidCreditCard :  IEquatable<PaymentPaidCreditCard>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PaymentPaidCreditCard" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PaymentPaidCreditCard() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PaymentPaidCreditCard" /> class.
        /// </summary>
        /// <param name="paymentStructureType">ชำระเงิน ด้วยบัตรเครดิต (required).</param>
        /// <param name="documentId">id เอกสาร (required).</param>
        /// <param name="paymentMethod">ประเภทการชำระเงิน &lt;br&gt; 7 &#x3D; บัตรเครดิต (required) (default to 1).</param>
        /// <param name="paymentDate">วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; (required).</param>
        /// <param name="collected">จำนวนเงินยอดจ่ายสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; (required) (default to 0M).</param>
        /// <param name="withheldPercentage">เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt; (default to 0).</param>
        /// <param name="withheldAmount">จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; (default to 0M).</param>
        /// <param name="creditCardBankAccountId">ธนาคารที่ชำระด้วยบัตรเครดิต &lt;br&gt; 1 &#x3D; ธนาคารกรุงเทพ &lt;br&gt; 2 &#x3D; ธนาคารกสิกรไทย &lt;br&gt; 3 &#x3D; ธนาคารกรุงไทย &lt;br&gt; 4 &#x3D; ธนาคารทหารไทย &lt;br&gt; 5 &#x3D; ธนาคารไทยพาณิชย์ &lt;br&gt; 6 &#x3D; ธนาคารสแตนดาร์ดชาร์เตอร์ด &lt;br&gt; 7 &#x3D; ธนาคารซีไอเอ็มบี ไทย &lt;br&gt; 8 &#x3D; ธนาคารยูโอบี &lt;br&gt; 10 &#x3D; ธนาคารกรุงศรีอยุธยา &lt;br&gt; 11 &#x3D; ธนาคารออมสิน &lt;br&gt; 12 &#x3D; ธนาคารธนชาต &lt;br&gt; 13 &#x3D; ธนาคารแลนด์ แอนด์ เฮ้าส์ &lt;br&gt; 14 &#x3D; ธนาคารเกียรตินาคิน &lt;br&gt; 15 &#x3D; ธนาคารซิตี้แบงก์ &lt;br&gt; 16 &#x3D; ธนาคารทิสโก้ &lt;br&gt; 53 &#x3D; ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร &lt;br&gt; 54 &#x3D; ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย &lt;br&gt; 55 &#x3D; ธนาคารอาคารสงเคราะห์ &lt;br&gt; 56 &#x3D; ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย &lt;br&gt; 57 &#x3D; ธนาคารอิสลามแห่งประเทศไทย &lt;br&gt; 58 &#x3D; ธนาคารแห่งประเทศจีน (ไทย) &lt;br&gt; 59 &#x3D; ธนาคารไอซีบีซี (ไทย) &lt;br&gt; 60 &#x3D; ธนาคารเมกะ สากลพาณิชย์ &lt;br&gt; 61 &#x3D; ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น &lt;br&gt; 62 &#x3D; ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) &lt;br&gt; 63 &#x3D; ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น &lt;br&gt; 64 &#x3D; ธนาคารไทยเครดิต เพื่อรายย่อย  (default to 0).</param>
        /// <param name="paymentRemarks">หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน.</param>
        /// <param name="remainingCollectedType">สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร  (default to 0).</param>
        /// <param name="remainingCollected">จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; (default to 0M).</param>
        public PaymentPaidCreditCard(string paymentStructureType = default(string), long documentId = default(long), long paymentMethod = 1, DateTime paymentDate = default(DateTime), decimal collected = 0M, long withheldPercentage = 0, decimal withheldAmount = 0M, long creditCardBankAccountId = 0, string paymentRemarks = default(string), long remainingCollectedType = 0, decimal remainingCollected = 0M)
        {
            // to ensure "paymentStructureType" is required (not null)
            if (paymentStructureType == null)
            {
                throw new InvalidDataException("paymentStructureType is a required property for PaymentPaidCreditCard and cannot be null");
            }
            else
            {
                this.PaymentStructureType = paymentStructureType;
            }
            
            this.PaymentStructureType = paymentStructureType;
            // to ensure "documentId" is required (not null)
            if (documentId == null)
            {
                throw new InvalidDataException("documentId is a required property for PaymentPaidCreditCard and cannot be null");
            }
            else
            {
                this.DocumentId = documentId;
            }
            
            // to ensure "paymentMethod" is required (not null)
            if (paymentMethod == null)
            {
                throw new InvalidDataException("paymentMethod is a required property for PaymentPaidCreditCard and cannot be null");
            }
            else
            {
                this.PaymentMethod = paymentMethod;
            }
            
            // to ensure "paymentDate" is required (not null)
            if (paymentDate == null)
            {
                throw new InvalidDataException("paymentDate is a required property for PaymentPaidCreditCard and cannot be null");
            }
            else
            {
                this.PaymentDate = paymentDate;
            }
            
            // to ensure "collected" is required (not null)
            if (collected == null)
            {
                throw new InvalidDataException("collected is a required property for PaymentPaidCreditCard and cannot be null");
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
            // use default value if no "creditCardBankAccountId" provided
            if (creditCardBankAccountId == null)
            {
                this.CreditCardBankAccountId = 0;
            }
            else
            {
                this.CreditCardBankAccountId = creditCardBankAccountId;
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
        /// ชำระเงิน ด้วยบัตรเครดิต
        /// </summary>
        /// <value>ชำระเงิน ด้วยบัตรเครดิต</value>
        [DataMember(Name="paymentStructureType", EmitDefaultValue=true)]
        public string PaymentStructureType { get; set; }

        /// <summary>
        /// id เอกสาร
        /// </summary>
        /// <value>id เอกสาร</value>
        [DataMember(Name="documentId", EmitDefaultValue=true)]
        public long DocumentId { get; set; }

        /// <summary>
        /// ประเภทการชำระเงิน &lt;br&gt; 7 &#x3D; บัตรเครดิต
        /// </summary>
        /// <value>ประเภทการชำระเงิน &lt;br&gt; 7 &#x3D; บัตรเครดิต</value>
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
        /// ธนาคารที่ชำระด้วยบัตรเครดิต &lt;br&gt; 1 &#x3D; ธนาคารกรุงเทพ &lt;br&gt; 2 &#x3D; ธนาคารกสิกรไทย &lt;br&gt; 3 &#x3D; ธนาคารกรุงไทย &lt;br&gt; 4 &#x3D; ธนาคารทหารไทย &lt;br&gt; 5 &#x3D; ธนาคารไทยพาณิชย์ &lt;br&gt; 6 &#x3D; ธนาคารสแตนดาร์ดชาร์เตอร์ด &lt;br&gt; 7 &#x3D; ธนาคารซีไอเอ็มบี ไทย &lt;br&gt; 8 &#x3D; ธนาคารยูโอบี &lt;br&gt; 10 &#x3D; ธนาคารกรุงศรีอยุธยา &lt;br&gt; 11 &#x3D; ธนาคารออมสิน &lt;br&gt; 12 &#x3D; ธนาคารธนชาต &lt;br&gt; 13 &#x3D; ธนาคารแลนด์ แอนด์ เฮ้าส์ &lt;br&gt; 14 &#x3D; ธนาคารเกียรตินาคิน &lt;br&gt; 15 &#x3D; ธนาคารซิตี้แบงก์ &lt;br&gt; 16 &#x3D; ธนาคารทิสโก้ &lt;br&gt; 53 &#x3D; ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร &lt;br&gt; 54 &#x3D; ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย &lt;br&gt; 55 &#x3D; ธนาคารอาคารสงเคราะห์ &lt;br&gt; 56 &#x3D; ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย &lt;br&gt; 57 &#x3D; ธนาคารอิสลามแห่งประเทศไทย &lt;br&gt; 58 &#x3D; ธนาคารแห่งประเทศจีน (ไทย) &lt;br&gt; 59 &#x3D; ธนาคารไอซีบีซี (ไทย) &lt;br&gt; 60 &#x3D; ธนาคารเมกะ สากลพาณิชย์ &lt;br&gt; 61 &#x3D; ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น &lt;br&gt; 62 &#x3D; ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) &lt;br&gt; 63 &#x3D; ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น &lt;br&gt; 64 &#x3D; ธนาคารไทยเครดิต เพื่อรายย่อย 
        /// </summary>
        /// <value>ธนาคารที่ชำระด้วยบัตรเครดิต &lt;br&gt; 1 &#x3D; ธนาคารกรุงเทพ &lt;br&gt; 2 &#x3D; ธนาคารกสิกรไทย &lt;br&gt; 3 &#x3D; ธนาคารกรุงไทย &lt;br&gt; 4 &#x3D; ธนาคารทหารไทย &lt;br&gt; 5 &#x3D; ธนาคารไทยพาณิชย์ &lt;br&gt; 6 &#x3D; ธนาคารสแตนดาร์ดชาร์เตอร์ด &lt;br&gt; 7 &#x3D; ธนาคารซีไอเอ็มบี ไทย &lt;br&gt; 8 &#x3D; ธนาคารยูโอบี &lt;br&gt; 10 &#x3D; ธนาคารกรุงศรีอยุธยา &lt;br&gt; 11 &#x3D; ธนาคารออมสิน &lt;br&gt; 12 &#x3D; ธนาคารธนชาต &lt;br&gt; 13 &#x3D; ธนาคารแลนด์ แอนด์ เฮ้าส์ &lt;br&gt; 14 &#x3D; ธนาคารเกียรตินาคิน &lt;br&gt; 15 &#x3D; ธนาคารซิตี้แบงก์ &lt;br&gt; 16 &#x3D; ธนาคารทิสโก้ &lt;br&gt; 53 &#x3D; ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร &lt;br&gt; 54 &#x3D; ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย &lt;br&gt; 55 &#x3D; ธนาคารอาคารสงเคราะห์ &lt;br&gt; 56 &#x3D; ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย &lt;br&gt; 57 &#x3D; ธนาคารอิสลามแห่งประเทศไทย &lt;br&gt; 58 &#x3D; ธนาคารแห่งประเทศจีน (ไทย) &lt;br&gt; 59 &#x3D; ธนาคารไอซีบีซี (ไทย) &lt;br&gt; 60 &#x3D; ธนาคารเมกะ สากลพาณิชย์ &lt;br&gt; 61 &#x3D; ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น &lt;br&gt; 62 &#x3D; ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) &lt;br&gt; 63 &#x3D; ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น &lt;br&gt; 64 &#x3D; ธนาคารไทยเครดิต เพื่อรายย่อย </value>
        [DataMember(Name="creditCardBankAccountId", EmitDefaultValue=true)]
        public long CreditCardBankAccountId { get; set; }

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
            sb.Append("class PaymentPaidCreditCard {\n");
            sb.Append("  PaymentStructureType: ").Append(PaymentStructureType).Append("\n");
            sb.Append("  DocumentId: ").Append(DocumentId).Append("\n");
            sb.Append("  PaymentMethod: ").Append(PaymentMethod).Append("\n");
            sb.Append("  PaymentDate: ").Append(PaymentDate).Append("\n");
            sb.Append("  Collected: ").Append(Collected).Append("\n");
            sb.Append("  WithheldPercentage: ").Append(WithheldPercentage).Append("\n");
            sb.Append("  WithheldAmount: ").Append(WithheldAmount).Append("\n");
            sb.Append("  CreditCardBankAccountId: ").Append(CreditCardBankAccountId).Append("\n");
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
            return this.Equals(input as PaymentPaidCreditCard);
        }

        /// <summary>
        /// Returns true if PaymentPaidCreditCard instances are equal
        /// </summary>
        /// <param name="input">Instance of PaymentPaidCreditCard to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PaymentPaidCreditCard input)
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
                    this.CreditCardBankAccountId == input.CreditCardBankAccountId ||
                    (this.CreditCardBankAccountId != null &&
                    this.CreditCardBankAccountId.Equals(input.CreditCardBankAccountId))
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
                if (this.CreditCardBankAccountId != null)
                    hashCode = hashCode * 59 + this.CreditCardBankAccountId.GetHashCode();
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
