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
    /// ข้อมูลการเก็บเงินและจ่ายเงินของเอกสาร &lt;br&gt; ข้อมูลการเก็บเงิน: &lt;br&gt;1. ใบกำกับภาษี/ใบเสร็จรับเงิน (Tax Invoice) &lt;br&gt; 2. ใบเสร็จรับเงิน (Receipt) &lt;br&gt; 3. ใบกำกับภาษี/ใบเสร็จรับเงิน (Cash Invoice) &lt;br&gt; ข้อมูลการจ่ายเงิน: &lt;br&gt;1. เอกสารใบรับสินค้า (Receiving Inventory)
    /// </summary>
    [DataContract]
    public partial class SimpleDocumentResponseAllOfDataPayments :  IEquatable<SimpleDocumentResponseAllOfDataPayments>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SimpleDocumentResponseAllOfDataPayments" /> class.
        /// </summary>
        /// <param name="paymentDate">วันที่รับชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt;.</param>
        /// <param name="collected">จำนวนเงินยอดรับสุทธิ (default to 0M).</param>
        /// <param name="paymentDeductionType">ประเภทรายการปรับลด: &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) (default to 0).</param>
        /// <param name="paymentDeductionAmount">จำนวนเงินยอดรายการปรับลด &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) (default to 0M).</param>
        /// <param name="withheldPercentage">เปอร์เซ็น หัก ณ ที่จ่าย (default to 0).</param>
        /// <param name="withheldAmount">จำนวน ยอดหัก ณ ที่จ่าย (default to 0M).</param>
        /// <param name="paymentCharge">ค่าธรรมเนียม ที่ชำระโดยการโอนเงิน หรือ เช็ค &lt;br&gt; (เฉพาะเอกสารค่าใช้จ่าย) (default to 0M).</param>
        /// <param name="paymentMethod">วิธีการชำระ: &lt;br&gt; 1 &#x3D; เงินสด &lt;br&gt; 3 &#x3D; เช็ค &lt;br&gt; 5 &#x3D; โอนเงิน &lt;br&gt; 7 &#x3D; เครดิต (default to 0).</param>
        /// <param name="paymentChannel">ช่องทางการชำระเงิน: &lt;br&gt; - เงินสด (Cash) &lt;br&gt; - โอนเงิน (Transfer) - ชื่อธนาคาร (Bank Name) &lt;br&gt; - เช็ค (Cheque) &lt;br&gt; - บัตรเครดิต (Credit card).</param>
        /// <param name="bankAccountType">ประเภทบัญชีธนาคาร: &lt;br&gt; 1 &#x3D; ออมทรัพย์ &lt;br&gt; 3 &#x3D; กระแสรายวัน &lt;br&gt; 7 &#x3D; ฝากประจำ.</param>
        /// <param name="bankAccountName">ชื่อธนาคาร.</param>
        /// <param name="bankAccountNumber">เลขที่ธนาคาร / บัตรเคดิต.</param>
        /// <param name="chequeDate">วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt;.</param>
        /// <param name="chequeNumber">เลขที่เช็คธนาคาร.</param>
        /// <param name="creditCardBankAccountId">ธนาคารที่ชำระด้วยบัตรเครดิต &lt;br&gt; 1 &#x3D; ธนาคารกรุงเทพ &lt;br&gt; 2 &#x3D; ธนาคารกสิกรไทย &lt;br&gt; 3 &#x3D; ธนาคารกรุงไทย &lt;br&gt; 4 &#x3D; ธนาคารทหารไทย &lt;br&gt; 5 &#x3D; ธนาคารไทยพาณิชย์ &lt;br&gt; 6 &#x3D; ธนาคารสแตนดาร์ดชาร์เตอร์ด &lt;br&gt; 7 &#x3D; ธนาคารซีไอเอ็มบี ไทย &lt;br&gt; 8 &#x3D; ธนาคารยูโอบี &lt;br&gt; 10 &#x3D; ธนาคารกรุงศรีอยุธยา &lt;br&gt; 11 &#x3D; ธนาคารออมสิน &lt;br&gt; 12 &#x3D; ธนาคารธนชาต &lt;br&gt; 13 &#x3D; ธนาคารแลนด์ แอนด์ เฮ้าส์ &lt;br&gt; 14 &#x3D; ธนาคารเกียรตินาคิน &lt;br&gt; 15 &#x3D; ธนาคารซิตี้แบงก์ &lt;br&gt; 16 &#x3D; ธนาคารทิสโก้ &lt;br&gt; 53 &#x3D; ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร &lt;br&gt; 54 &#x3D; ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย &lt;br&gt; 55 &#x3D; ธนาคารอาคารสงเคราะห์ &lt;br&gt; 56 &#x3D; ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย &lt;br&gt; 57 &#x3D; ธนาคารอิสลามแห่งประเทศไทย &lt;br&gt; 58 &#x3D; ธนาคารแห่งประเทศจีน (ไทย) &lt;br&gt; 59 &#x3D; ธนาคารไอซีบีซี (ไทย) &lt;br&gt; 60 &#x3D; ธนาคารเมกะ สากลพาณิชย์ &lt;br&gt; 61 &#x3D; ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น &lt;br&gt; 62 &#x3D; ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) &lt;br&gt; 63 &#x3D; ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น &lt;br&gt; 64 &#x3D; ธนาคารไทยเครดิต เพื่อรายย่อย  (default to 0).</param>
        /// <param name="paymentRemarks">หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน.</param>
        /// <param name="remainingCollectedType">สาเหตุเงินขาดเงินเกิน: &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร  (default to 0).</param>
        /// <param name="remainingCollected">จำนวน ยอดเงินขาด หรือ เงินเกิน (default to 0M).</param>
        public SimpleDocumentResponseAllOfDataPayments(DateTime paymentDate = default(DateTime), decimal collected = 0M, long paymentDeductionType = 0, decimal paymentDeductionAmount = 0M, long withheldPercentage = 0, decimal withheldAmount = 0M, decimal paymentCharge = 0M, int paymentMethod = 0, string paymentChannel = default(string), int bankAccountType = default(int), string bankAccountName = default(string), string bankAccountNumber = default(string), DateTime chequeDate = default(DateTime), string chequeNumber = default(string), long creditCardBankAccountId = 0, string paymentRemarks = default(string), long remainingCollectedType = 0, decimal remainingCollected = 0M)
        {
            this.PaymentDate = paymentDate;
            // use default value if no "collected" provided
            if (collected == null)
            {
                this.Collected = 0M;
            }
            else
            {
                this.Collected = collected;
            }
            // use default value if no "paymentDeductionType" provided
            if (paymentDeductionType == null)
            {
                this.PaymentDeductionType = 0;
            }
            else
            {
                this.PaymentDeductionType = paymentDeductionType;
            }
            // use default value if no "paymentDeductionAmount" provided
            if (paymentDeductionAmount == null)
            {
                this.PaymentDeductionAmount = 0M;
            }
            else
            {
                this.PaymentDeductionAmount = paymentDeductionAmount;
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
            // use default value if no "paymentCharge" provided
            if (paymentCharge == null)
            {
                this.PaymentCharge = 0M;
            }
            else
            {
                this.PaymentCharge = paymentCharge;
            }
            // use default value if no "paymentMethod" provided
            if (paymentMethod == null)
            {
                this.PaymentMethod = 0;
            }
            else
            {
                this.PaymentMethod = paymentMethod;
            }
            this.PaymentChannel = paymentChannel;
            this.BankAccountType = bankAccountType;
            this.BankAccountName = bankAccountName;
            this.BankAccountNumber = bankAccountNumber;
            this.ChequeDate = chequeDate;
            this.ChequeNumber = chequeNumber;
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
        /// วันที่รับชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt;
        /// </summary>
        /// <value>วันที่รับชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt;</value>
        [DataMember(Name="paymentDate", EmitDefaultValue=true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime PaymentDate { get; set; }

        /// <summary>
        /// จำนวนเงินยอดรับสุทธิ
        /// </summary>
        /// <value>จำนวนเงินยอดรับสุทธิ</value>
        [DataMember(Name="collected", EmitDefaultValue=true)]
        public decimal Collected { get; set; }

        /// <summary>
        /// ประเภทรายการปรับลด: &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
        /// </summary>
        /// <value>ประเภทรายการปรับลด: &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)</value>
        [DataMember(Name="paymentDeductionType", EmitDefaultValue=true)]
        public long PaymentDeductionType { get; set; }

        /// <summary>
        /// จำนวนเงินยอดรายการปรับลด &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
        /// </summary>
        /// <value>จำนวนเงินยอดรายการปรับลด &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)</value>
        [DataMember(Name="paymentDeductionAmount", EmitDefaultValue=true)]
        public decimal PaymentDeductionAmount { get; set; }

        /// <summary>
        /// เปอร์เซ็น หัก ณ ที่จ่าย
        /// </summary>
        /// <value>เปอร์เซ็น หัก ณ ที่จ่าย</value>
        [DataMember(Name="withheldPercentage", EmitDefaultValue=true)]
        public long WithheldPercentage { get; set; }

        /// <summary>
        /// จำนวน ยอดหัก ณ ที่จ่าย
        /// </summary>
        /// <value>จำนวน ยอดหัก ณ ที่จ่าย</value>
        [DataMember(Name="withheldAmount", EmitDefaultValue=true)]
        public decimal WithheldAmount { get; set; }

        /// <summary>
        /// ค่าธรรมเนียม ที่ชำระโดยการโอนเงิน หรือ เช็ค &lt;br&gt; (เฉพาะเอกสารค่าใช้จ่าย)
        /// </summary>
        /// <value>ค่าธรรมเนียม ที่ชำระโดยการโอนเงิน หรือ เช็ค &lt;br&gt; (เฉพาะเอกสารค่าใช้จ่าย)</value>
        [DataMember(Name="paymentCharge", EmitDefaultValue=true)]
        public decimal PaymentCharge { get; set; }

        /// <summary>
        /// วิธีการชำระ: &lt;br&gt; 1 &#x3D; เงินสด &lt;br&gt; 3 &#x3D; เช็ค &lt;br&gt; 5 &#x3D; โอนเงิน &lt;br&gt; 7 &#x3D; เครดิต
        /// </summary>
        /// <value>วิธีการชำระ: &lt;br&gt; 1 &#x3D; เงินสด &lt;br&gt; 3 &#x3D; เช็ค &lt;br&gt; 5 &#x3D; โอนเงิน &lt;br&gt; 7 &#x3D; เครดิต</value>
        [DataMember(Name="paymentMethod", EmitDefaultValue=true)]
        public int PaymentMethod { get; set; }

        /// <summary>
        /// ช่องทางการชำระเงิน: &lt;br&gt; - เงินสด (Cash) &lt;br&gt; - โอนเงิน (Transfer) - ชื่อธนาคาร (Bank Name) &lt;br&gt; - เช็ค (Cheque) &lt;br&gt; - บัตรเครดิต (Credit card)
        /// </summary>
        /// <value>ช่องทางการชำระเงิน: &lt;br&gt; - เงินสด (Cash) &lt;br&gt; - โอนเงิน (Transfer) - ชื่อธนาคาร (Bank Name) &lt;br&gt; - เช็ค (Cheque) &lt;br&gt; - บัตรเครดิต (Credit card)</value>
        [DataMember(Name="paymentChannel", EmitDefaultValue=true)]
        public string PaymentChannel { get; set; }

        /// <summary>
        /// ประเภทบัญชีธนาคาร: &lt;br&gt; 1 &#x3D; ออมทรัพย์ &lt;br&gt; 3 &#x3D; กระแสรายวัน &lt;br&gt; 7 &#x3D; ฝากประจำ
        /// </summary>
        /// <value>ประเภทบัญชีธนาคาร: &lt;br&gt; 1 &#x3D; ออมทรัพย์ &lt;br&gt; 3 &#x3D; กระแสรายวัน &lt;br&gt; 7 &#x3D; ฝากประจำ</value>
        [DataMember(Name="bankAccountType", EmitDefaultValue=true)]
        public int BankAccountType { get; set; }

        /// <summary>
        /// ชื่อธนาคาร
        /// </summary>
        /// <value>ชื่อธนาคาร</value>
        [DataMember(Name="bankAccountName", EmitDefaultValue=true)]
        public string BankAccountName { get; set; }

        /// <summary>
        /// เลขที่ธนาคาร / บัตรเคดิต
        /// </summary>
        /// <value>เลขที่ธนาคาร / บัตรเคดิต</value>
        [DataMember(Name="bankAccountNumber", EmitDefaultValue=true)]
        public string BankAccountNumber { get; set; }

        /// <summary>
        /// วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt;
        /// </summary>
        /// <value>วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt;</value>
        [DataMember(Name="chequeDate", EmitDefaultValue=true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime ChequeDate { get; set; }

        /// <summary>
        /// เลขที่เช็คธนาคาร
        /// </summary>
        /// <value>เลขที่เช็คธนาคาร</value>
        [DataMember(Name="chequeNumber", EmitDefaultValue=true)]
        public string ChequeNumber { get; set; }

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
        /// สาเหตุเงินขาดเงินเกิน: &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร 
        /// </summary>
        /// <value>สาเหตุเงินขาดเงินเกิน: &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร </value>
        [DataMember(Name="remainingCollectedType", EmitDefaultValue=true)]
        public long RemainingCollectedType { get; set; }

        /// <summary>
        /// จำนวน ยอดเงินขาด หรือ เงินเกิน
        /// </summary>
        /// <value>จำนวน ยอดเงินขาด หรือ เงินเกิน</value>
        [DataMember(Name="remainingCollected", EmitDefaultValue=true)]
        public decimal RemainingCollected { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SimpleDocumentResponseAllOfDataPayments {\n");
            sb.Append("  PaymentDate: ").Append(PaymentDate).Append("\n");
            sb.Append("  Collected: ").Append(Collected).Append("\n");
            sb.Append("  PaymentDeductionType: ").Append(PaymentDeductionType).Append("\n");
            sb.Append("  PaymentDeductionAmount: ").Append(PaymentDeductionAmount).Append("\n");
            sb.Append("  WithheldPercentage: ").Append(WithheldPercentage).Append("\n");
            sb.Append("  WithheldAmount: ").Append(WithheldAmount).Append("\n");
            sb.Append("  PaymentCharge: ").Append(PaymentCharge).Append("\n");
            sb.Append("  PaymentMethod: ").Append(PaymentMethod).Append("\n");
            sb.Append("  PaymentChannel: ").Append(PaymentChannel).Append("\n");
            sb.Append("  BankAccountType: ").Append(BankAccountType).Append("\n");
            sb.Append("  BankAccountName: ").Append(BankAccountName).Append("\n");
            sb.Append("  BankAccountNumber: ").Append(BankAccountNumber).Append("\n");
            sb.Append("  ChequeDate: ").Append(ChequeDate).Append("\n");
            sb.Append("  ChequeNumber: ").Append(ChequeNumber).Append("\n");
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
            return this.Equals(input as SimpleDocumentResponseAllOfDataPayments);
        }

        /// <summary>
        /// Returns true if SimpleDocumentResponseAllOfDataPayments instances are equal
        /// </summary>
        /// <param name="input">Instance of SimpleDocumentResponseAllOfDataPayments to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SimpleDocumentResponseAllOfDataPayments input)
        {
            if (input == null)
                return false;

            return 
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
                    this.PaymentDeductionType == input.PaymentDeductionType ||
                    (this.PaymentDeductionType != null &&
                    this.PaymentDeductionType.Equals(input.PaymentDeductionType))
                ) && 
                (
                    this.PaymentDeductionAmount == input.PaymentDeductionAmount ||
                    (this.PaymentDeductionAmount != null &&
                    this.PaymentDeductionAmount.Equals(input.PaymentDeductionAmount))
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
                    this.PaymentCharge == input.PaymentCharge ||
                    (this.PaymentCharge != null &&
                    this.PaymentCharge.Equals(input.PaymentCharge))
                ) && 
                (
                    this.PaymentMethod == input.PaymentMethod ||
                    (this.PaymentMethod != null &&
                    this.PaymentMethod.Equals(input.PaymentMethod))
                ) && 
                (
                    this.PaymentChannel == input.PaymentChannel ||
                    (this.PaymentChannel != null &&
                    this.PaymentChannel.Equals(input.PaymentChannel))
                ) && 
                (
                    this.BankAccountType == input.BankAccountType ||
                    (this.BankAccountType != null &&
                    this.BankAccountType.Equals(input.BankAccountType))
                ) && 
                (
                    this.BankAccountName == input.BankAccountName ||
                    (this.BankAccountName != null &&
                    this.BankAccountName.Equals(input.BankAccountName))
                ) && 
                (
                    this.BankAccountNumber == input.BankAccountNumber ||
                    (this.BankAccountNumber != null &&
                    this.BankAccountNumber.Equals(input.BankAccountNumber))
                ) && 
                (
                    this.ChequeDate == input.ChequeDate ||
                    (this.ChequeDate != null &&
                    this.ChequeDate.Equals(input.ChequeDate))
                ) && 
                (
                    this.ChequeNumber == input.ChequeNumber ||
                    (this.ChequeNumber != null &&
                    this.ChequeNumber.Equals(input.ChequeNumber))
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
                if (this.PaymentDate != null)
                    hashCode = hashCode * 59 + this.PaymentDate.GetHashCode();
                if (this.Collected != null)
                    hashCode = hashCode * 59 + this.Collected.GetHashCode();
                if (this.PaymentDeductionType != null)
                    hashCode = hashCode * 59 + this.PaymentDeductionType.GetHashCode();
                if (this.PaymentDeductionAmount != null)
                    hashCode = hashCode * 59 + this.PaymentDeductionAmount.GetHashCode();
                if (this.WithheldPercentage != null)
                    hashCode = hashCode * 59 + this.WithheldPercentage.GetHashCode();
                if (this.WithheldAmount != null)
                    hashCode = hashCode * 59 + this.WithheldAmount.GetHashCode();
                if (this.PaymentCharge != null)
                    hashCode = hashCode * 59 + this.PaymentCharge.GetHashCode();
                if (this.PaymentMethod != null)
                    hashCode = hashCode * 59 + this.PaymentMethod.GetHashCode();
                if (this.PaymentChannel != null)
                    hashCode = hashCode * 59 + this.PaymentChannel.GetHashCode();
                if (this.BankAccountType != null)
                    hashCode = hashCode * 59 + this.BankAccountType.GetHashCode();
                if (this.BankAccountName != null)
                    hashCode = hashCode * 59 + this.BankAccountName.GetHashCode();
                if (this.BankAccountNumber != null)
                    hashCode = hashCode * 59 + this.BankAccountNumber.GetHashCode();
                if (this.ChequeDate != null)
                    hashCode = hashCode * 59 + this.ChequeDate.GetHashCode();
                if (this.ChequeNumber != null)
                    hashCode = hashCode * 59 + this.ChequeNumber.GetHashCode();
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
