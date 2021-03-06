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
    /// CompanyInfo
    /// </summary>
    [DataContract]
    public partial class CompanyInfo :  IEquatable<CompanyInfo>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CompanyInfo" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CompanyInfo() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CompanyInfo" /> class.
        /// </summary>
        /// <param name="companyType">ประเภทธุรกิจ &lt;br&gt; 10 &#x3D; บริษัท - จดภาษีมูลค่าเพิ่มแล้ว &lt;br&gt; 20 &#x3D; บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 30 &#x3D; บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 40 &#x3D; บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 50 &#x3D; ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว &lt;br&gt; 60 &#x3D; ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม (default to &quot;10&quot;).</param>
        /// <param name="compnayName">ชื่อบริษัท (required).</param>
        /// <param name="companyNameEn">ชื่อบริษัท ภาษาอังกฤษ.</param>
        /// <param name="companyAddress">ที่อยู่บริษัท.</param>
        /// <param name="companyAddressEn">ที่อยู่บริษัท ภาษาอังกฤษ.</param>
        /// <param name="companyZipCode">รหัสไปรษณีย์ บริษัท &lt;br&gt;&lt;ex&gt;Example: 10150&lt;/ex&gt;.</param>
        /// <param name="companyTaxId">เลขประจำตัวผู้เสียภาษี บริษัท &lt;br&gt;&lt;ex&gt;Example: 0105558096348&lt;/ex&gt;.</param>
        /// <param name="companyBranch">ชื่อ และ รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: สำนักงานใหญ่&lt;/ex&gt; (default to &quot;สำนักงานใหญ่&quot;).</param>
        /// <param name="companyBranchEn">ชื่อ และ รหัสสาขา ภาษาอังกฤษ &lt;br&gt;&lt;ex&gt;Example: Head Office&lt;/ex&gt;.</param>
        /// <param name="companyBranchCode">รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: 00000&lt;/ex&gt;.</param>
        /// <param name="companyPhone">เบอร์โทรสำนักงาน &lt;br&gt;&lt;ex&gt;Example: 02-999-9999&lt;/ex&gt;.</param>
        /// <param name="companyMobile">เบอร์โทรศัพท์มือถือ &lt;br&gt;&lt;ex&gt;Example: 099-999-9999&lt;/ex&gt;.</param>
        /// <param name="companyFax">เบอร์โทรสาร &lt;br&gt;&lt;ex&gt;Example: 02-999-9999 ต่อ 1&lt;/ex&gt;.</param>
        /// <param name="companyWebsite">เว็บไซต์ &lt;br&gt;&lt;ex&gt;Example: www.flowaccount.com&lt;/ex&gt;.</param>
        public CompanyInfo(string companyType = "10", string compnayName = default(string), string companyNameEn = default(string), string companyAddress = default(string), string companyAddressEn = default(string), string companyZipCode = default(string), string companyTaxId = default(string), string companyBranch = "สำนักงานใหญ่", string companyBranchEn = default(string), string companyBranchCode = default(string), string companyPhone = default(string), string companyMobile = default(string), string companyFax = default(string), string companyWebsite = default(string))
        {
            // to ensure "compnayName" is required (not null)
            if (compnayName == null)
            {
                throw new InvalidDataException("compnayName is a required property for CompanyInfo and cannot be null");
            }
            else
            {
                this.CompnayName = compnayName;
            }
            
            // use default value if no "companyType" provided
            if (companyType == null)
            {
                this.CompanyType = "10";
            }
            else
            {
                this.CompanyType = companyType;
            }
            this.CompanyNameEn = companyNameEn;
            this.CompanyAddress = companyAddress;
            this.CompanyAddressEn = companyAddressEn;
            this.CompanyZipCode = companyZipCode;
            this.CompanyTaxId = companyTaxId;
            // use default value if no "companyBranch" provided
            if (companyBranch == null)
            {
                this.CompanyBranch = "สำนักงานใหญ่";
            }
            else
            {
                this.CompanyBranch = companyBranch;
            }
            this.CompanyBranchEn = companyBranchEn;
            this.CompanyBranchCode = companyBranchCode;
            this.CompanyPhone = companyPhone;
            this.CompanyMobile = companyMobile;
            this.CompanyFax = companyFax;
            this.CompanyWebsite = companyWebsite;
        }
        
        /// <summary>
        /// ประเภทธุรกิจ &lt;br&gt; 10 &#x3D; บริษัท - จดภาษีมูลค่าเพิ่มแล้ว &lt;br&gt; 20 &#x3D; บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 30 &#x3D; บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 40 &#x3D; บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 50 &#x3D; ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว &lt;br&gt; 60 &#x3D; ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม
        /// </summary>
        /// <value>ประเภทธุรกิจ &lt;br&gt; 10 &#x3D; บริษัท - จดภาษีมูลค่าเพิ่มแล้ว &lt;br&gt; 20 &#x3D; บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 30 &#x3D; บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 40 &#x3D; บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 50 &#x3D; ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว &lt;br&gt; 60 &#x3D; ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม</value>
        [DataMember(Name="companyType", EmitDefaultValue=true)]
        public string CompanyType { get; set; }

        /// <summary>
        /// ชื่อบริษัท
        /// </summary>
        /// <value>ชื่อบริษัท</value>
        [DataMember(Name="compnayName", EmitDefaultValue=true)]
        public string CompnayName { get; set; }

        /// <summary>
        /// ชื่อบริษัท ภาษาอังกฤษ
        /// </summary>
        /// <value>ชื่อบริษัท ภาษาอังกฤษ</value>
        [DataMember(Name="companyNameEn", EmitDefaultValue=true)]
        public string CompanyNameEn { get; set; }

        /// <summary>
        /// ที่อยู่บริษัท
        /// </summary>
        /// <value>ที่อยู่บริษัท</value>
        [DataMember(Name="companyAddress", EmitDefaultValue=true)]
        public string CompanyAddress { get; set; }

        /// <summary>
        /// ที่อยู่บริษัท ภาษาอังกฤษ
        /// </summary>
        /// <value>ที่อยู่บริษัท ภาษาอังกฤษ</value>
        [DataMember(Name="companyAddressEn", EmitDefaultValue=true)]
        public string CompanyAddressEn { get; set; }

        /// <summary>
        /// รหัสไปรษณีย์ บริษัท &lt;br&gt;&lt;ex&gt;Example: 10150&lt;/ex&gt;
        /// </summary>
        /// <value>รหัสไปรษณีย์ บริษัท &lt;br&gt;&lt;ex&gt;Example: 10150&lt;/ex&gt;</value>
        [DataMember(Name="companyZipCode", EmitDefaultValue=true)]
        public string CompanyZipCode { get; set; }

        /// <summary>
        /// เลขประจำตัวผู้เสียภาษี บริษัท &lt;br&gt;&lt;ex&gt;Example: 0105558096348&lt;/ex&gt;
        /// </summary>
        /// <value>เลขประจำตัวผู้เสียภาษี บริษัท &lt;br&gt;&lt;ex&gt;Example: 0105558096348&lt;/ex&gt;</value>
        [DataMember(Name="companyTaxId", EmitDefaultValue=true)]
        public string CompanyTaxId { get; set; }

        /// <summary>
        /// ชื่อ และ รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: สำนักงานใหญ่&lt;/ex&gt;
        /// </summary>
        /// <value>ชื่อ และ รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: สำนักงานใหญ่&lt;/ex&gt;</value>
        [DataMember(Name="companyBranch", EmitDefaultValue=true)]
        public string CompanyBranch { get; set; }

        /// <summary>
        /// ชื่อ และ รหัสสาขา ภาษาอังกฤษ &lt;br&gt;&lt;ex&gt;Example: Head Office&lt;/ex&gt;
        /// </summary>
        /// <value>ชื่อ และ รหัสสาขา ภาษาอังกฤษ &lt;br&gt;&lt;ex&gt;Example: Head Office&lt;/ex&gt;</value>
        [DataMember(Name="companyBranchEn", EmitDefaultValue=true)]
        public string CompanyBranchEn { get; set; }

        /// <summary>
        /// รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: 00000&lt;/ex&gt;
        /// </summary>
        /// <value>รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: 00000&lt;/ex&gt;</value>
        [DataMember(Name="companyBranchCode", EmitDefaultValue=true)]
        public string CompanyBranchCode { get; set; }

        /// <summary>
        /// เบอร์โทรสำนักงาน &lt;br&gt;&lt;ex&gt;Example: 02-999-9999&lt;/ex&gt;
        /// </summary>
        /// <value>เบอร์โทรสำนักงาน &lt;br&gt;&lt;ex&gt;Example: 02-999-9999&lt;/ex&gt;</value>
        [DataMember(Name="companyPhone", EmitDefaultValue=true)]
        public string CompanyPhone { get; set; }

        /// <summary>
        /// เบอร์โทรศัพท์มือถือ &lt;br&gt;&lt;ex&gt;Example: 099-999-9999&lt;/ex&gt;
        /// </summary>
        /// <value>เบอร์โทรศัพท์มือถือ &lt;br&gt;&lt;ex&gt;Example: 099-999-9999&lt;/ex&gt;</value>
        [DataMember(Name="companyMobile", EmitDefaultValue=true)]
        public string CompanyMobile { get; set; }

        /// <summary>
        /// เบอร์โทรสาร &lt;br&gt;&lt;ex&gt;Example: 02-999-9999 ต่อ 1&lt;/ex&gt;
        /// </summary>
        /// <value>เบอร์โทรสาร &lt;br&gt;&lt;ex&gt;Example: 02-999-9999 ต่อ 1&lt;/ex&gt;</value>
        [DataMember(Name="companyFax", EmitDefaultValue=true)]
        public string CompanyFax { get; set; }

        /// <summary>
        /// เว็บไซต์ &lt;br&gt;&lt;ex&gt;Example: www.flowaccount.com&lt;/ex&gt;
        /// </summary>
        /// <value>เว็บไซต์ &lt;br&gt;&lt;ex&gt;Example: www.flowaccount.com&lt;/ex&gt;</value>
        [DataMember(Name="companyWebsite", EmitDefaultValue=true)]
        public string CompanyWebsite { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CompanyInfo {\n");
            sb.Append("  CompanyType: ").Append(CompanyType).Append("\n");
            sb.Append("  CompnayName: ").Append(CompnayName).Append("\n");
            sb.Append("  CompanyNameEn: ").Append(CompanyNameEn).Append("\n");
            sb.Append("  CompanyAddress: ").Append(CompanyAddress).Append("\n");
            sb.Append("  CompanyAddressEn: ").Append(CompanyAddressEn).Append("\n");
            sb.Append("  CompanyZipCode: ").Append(CompanyZipCode).Append("\n");
            sb.Append("  CompanyTaxId: ").Append(CompanyTaxId).Append("\n");
            sb.Append("  CompanyBranch: ").Append(CompanyBranch).Append("\n");
            sb.Append("  CompanyBranchEn: ").Append(CompanyBranchEn).Append("\n");
            sb.Append("  CompanyBranchCode: ").Append(CompanyBranchCode).Append("\n");
            sb.Append("  CompanyPhone: ").Append(CompanyPhone).Append("\n");
            sb.Append("  CompanyMobile: ").Append(CompanyMobile).Append("\n");
            sb.Append("  CompanyFax: ").Append(CompanyFax).Append("\n");
            sb.Append("  CompanyWebsite: ").Append(CompanyWebsite).Append("\n");
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
            return this.Equals(input as CompanyInfo);
        }

        /// <summary>
        /// Returns true if CompanyInfo instances are equal
        /// </summary>
        /// <param name="input">Instance of CompanyInfo to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CompanyInfo input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CompanyType == input.CompanyType ||
                    (this.CompanyType != null &&
                    this.CompanyType.Equals(input.CompanyType))
                ) && 
                (
                    this.CompnayName == input.CompnayName ||
                    (this.CompnayName != null &&
                    this.CompnayName.Equals(input.CompnayName))
                ) && 
                (
                    this.CompanyNameEn == input.CompanyNameEn ||
                    (this.CompanyNameEn != null &&
                    this.CompanyNameEn.Equals(input.CompanyNameEn))
                ) && 
                (
                    this.CompanyAddress == input.CompanyAddress ||
                    (this.CompanyAddress != null &&
                    this.CompanyAddress.Equals(input.CompanyAddress))
                ) && 
                (
                    this.CompanyAddressEn == input.CompanyAddressEn ||
                    (this.CompanyAddressEn != null &&
                    this.CompanyAddressEn.Equals(input.CompanyAddressEn))
                ) && 
                (
                    this.CompanyZipCode == input.CompanyZipCode ||
                    (this.CompanyZipCode != null &&
                    this.CompanyZipCode.Equals(input.CompanyZipCode))
                ) && 
                (
                    this.CompanyTaxId == input.CompanyTaxId ||
                    (this.CompanyTaxId != null &&
                    this.CompanyTaxId.Equals(input.CompanyTaxId))
                ) && 
                (
                    this.CompanyBranch == input.CompanyBranch ||
                    (this.CompanyBranch != null &&
                    this.CompanyBranch.Equals(input.CompanyBranch))
                ) && 
                (
                    this.CompanyBranchEn == input.CompanyBranchEn ||
                    (this.CompanyBranchEn != null &&
                    this.CompanyBranchEn.Equals(input.CompanyBranchEn))
                ) && 
                (
                    this.CompanyBranchCode == input.CompanyBranchCode ||
                    (this.CompanyBranchCode != null &&
                    this.CompanyBranchCode.Equals(input.CompanyBranchCode))
                ) && 
                (
                    this.CompanyPhone == input.CompanyPhone ||
                    (this.CompanyPhone != null &&
                    this.CompanyPhone.Equals(input.CompanyPhone))
                ) && 
                (
                    this.CompanyMobile == input.CompanyMobile ||
                    (this.CompanyMobile != null &&
                    this.CompanyMobile.Equals(input.CompanyMobile))
                ) && 
                (
                    this.CompanyFax == input.CompanyFax ||
                    (this.CompanyFax != null &&
                    this.CompanyFax.Equals(input.CompanyFax))
                ) && 
                (
                    this.CompanyWebsite == input.CompanyWebsite ||
                    (this.CompanyWebsite != null &&
                    this.CompanyWebsite.Equals(input.CompanyWebsite))
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
                if (this.CompanyType != null)
                    hashCode = hashCode * 59 + this.CompanyType.GetHashCode();
                if (this.CompnayName != null)
                    hashCode = hashCode * 59 + this.CompnayName.GetHashCode();
                if (this.CompanyNameEn != null)
                    hashCode = hashCode * 59 + this.CompanyNameEn.GetHashCode();
                if (this.CompanyAddress != null)
                    hashCode = hashCode * 59 + this.CompanyAddress.GetHashCode();
                if (this.CompanyAddressEn != null)
                    hashCode = hashCode * 59 + this.CompanyAddressEn.GetHashCode();
                if (this.CompanyZipCode != null)
                    hashCode = hashCode * 59 + this.CompanyZipCode.GetHashCode();
                if (this.CompanyTaxId != null)
                    hashCode = hashCode * 59 + this.CompanyTaxId.GetHashCode();
                if (this.CompanyBranch != null)
                    hashCode = hashCode * 59 + this.CompanyBranch.GetHashCode();
                if (this.CompanyBranchEn != null)
                    hashCode = hashCode * 59 + this.CompanyBranchEn.GetHashCode();
                if (this.CompanyBranchCode != null)
                    hashCode = hashCode * 59 + this.CompanyBranchCode.GetHashCode();
                if (this.CompanyPhone != null)
                    hashCode = hashCode * 59 + this.CompanyPhone.GetHashCode();
                if (this.CompanyMobile != null)
                    hashCode = hashCode * 59 + this.CompanyMobile.GetHashCode();
                if (this.CompanyFax != null)
                    hashCode = hashCode * 59 + this.CompanyFax.GetHashCode();
                if (this.CompanyWebsite != null)
                    hashCode = hashCode * 59 + this.CompanyWebsite.GetHashCode();
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
