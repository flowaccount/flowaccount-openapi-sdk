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
    /// ProductInventory
    /// </summary>
    [DataContract]
    [JsonConverter(typeof(JsonSubtypes), "ProductStructureType")]
    public partial class ProductInventory :  IEquatable<ProductInventory>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ProductInventory" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ProductInventory() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ProductInventory" /> class.
        /// </summary>
        /// <param name="productStructureType">สร้างสินค้าประเภท นับสต๊อก.</param>
        /// <param name="type">ระเภทสินค้า: &lt;br&gt;1 &#x3D; บริการ &lt;br&gt; 3 &#x3D; ไม่นับสต๊อก &lt;br&gt; 5 &#x3D; นับสต๊อก (required) (default to 1).</param>
        /// <param name="code">รหัสสินค้า / SKU &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt;.</param>
        /// <param name="name">ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; (required).</param>
        /// <param name="sellDescription">รายละเอียดสินค้า ฝั่งขาย.</param>
        /// <param name="sellPrice">ราคาขายสินค้า.</param>
        /// <param name="sellVatType">ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี (default to 3).</param>
        /// <param name="unitName">หน่วยสินค้า (required).</param>
        /// <param name="categoryName">หมวดสินค้า.</param>
        /// <param name="barcode">บาร์โค้ด.</param>
        /// <param name="buyDescription">รายละเอียดสินค้า ฝั่งซื้อ.</param>
        /// <param name="buyPrice">ราคาซื้อสินค้า.</param>
        /// <param name="buyVatType">ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี (default to 3).</param>
        public ProductInventory(string productStructureType = default(string), long type = 1, string code = default(string), string name = default(string), string sellDescription = default(string), decimal sellPrice = default(decimal), long sellVatType = 3, string unitName = default(string), string categoryName = default(string), string barcode = default(string), string buyDescription = default(string), decimal buyPrice = default(decimal), long buyVatType = 3)
        {
            this.ProductStructureType = productStructureType;
            // to ensure "type" is required (not null)
            if (type == null)
            {
                throw new InvalidDataException("type is a required property for ProductInventory and cannot be null");
            }
            else
            {
                this.Type = type;
            }
            
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for ProductInventory and cannot be null");
            }
            else
            {
                this.Name = name;
            }
            
            // to ensure "unitName" is required (not null)
            if (unitName == null)
            {
                throw new InvalidDataException("unitName is a required property for ProductInventory and cannot be null");
            }
            else
            {
                this.UnitName = unitName;
            }
            
            this.ProductStructureType = productStructureType;
            this.Code = code;
            this.SellDescription = sellDescription;
            this.SellPrice = sellPrice;
            // use default value if no "sellVatType" provided
            if (sellVatType == null)
            {
                this.SellVatType = 3;
            }
            else
            {
                this.SellVatType = sellVatType;
            }
            this.CategoryName = categoryName;
            this.Barcode = barcode;
            this.BuyDescription = buyDescription;
            this.BuyPrice = buyPrice;
            // use default value if no "buyVatType" provided
            if (buyVatType == null)
            {
                this.BuyVatType = 3;
            }
            else
            {
                this.BuyVatType = buyVatType;
            }
        }
        
        /// <summary>
        /// สร้างสินค้าประเภท นับสต๊อก
        /// </summary>
        /// <value>สร้างสินค้าประเภท นับสต๊อก</value>
        [DataMember(Name="productStructureType", EmitDefaultValue=true)]
        public string ProductStructureType { get; set; }

        /// <summary>
        /// ระเภทสินค้า: &lt;br&gt;1 &#x3D; บริการ &lt;br&gt; 3 &#x3D; ไม่นับสต๊อก &lt;br&gt; 5 &#x3D; นับสต๊อก
        /// </summary>
        /// <value>ระเภทสินค้า: &lt;br&gt;1 &#x3D; บริการ &lt;br&gt; 3 &#x3D; ไม่นับสต๊อก &lt;br&gt; 5 &#x3D; นับสต๊อก</value>
        [DataMember(Name="type", EmitDefaultValue=true)]
        public long Type { get; set; }

        /// <summary>
        /// รหัสสินค้า / SKU &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt;
        /// </summary>
        /// <value>รหัสสินค้า / SKU &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt;</value>
        [DataMember(Name="code", EmitDefaultValue=true)]
        public string Code { get; set; }

        /// <summary>
        /// ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt;
        /// </summary>
        /// <value>ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt;</value>
        [DataMember(Name="name", EmitDefaultValue=true)]
        public string Name { get; set; }

        /// <summary>
        /// รายละเอียดสินค้า ฝั่งขาย
        /// </summary>
        /// <value>รายละเอียดสินค้า ฝั่งขาย</value>
        [DataMember(Name="sellDescription", EmitDefaultValue=true)]
        public string SellDescription { get; set; }

        /// <summary>
        /// ราคาขายสินค้า
        /// </summary>
        /// <value>ราคาขายสินค้า</value>
        [DataMember(Name="sellPrice", EmitDefaultValue=true)]
        public decimal SellPrice { get; set; }

        /// <summary>
        /// ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี
        /// </summary>
        /// <value>ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี</value>
        [DataMember(Name="sellVatType", EmitDefaultValue=true)]
        public long SellVatType { get; set; }

        /// <summary>
        /// หน่วยสินค้า
        /// </summary>
        /// <value>หน่วยสินค้า</value>
        [DataMember(Name="unitName", EmitDefaultValue=true)]
        public string UnitName { get; set; }

        /// <summary>
        /// หมวดสินค้า
        /// </summary>
        /// <value>หมวดสินค้า</value>
        [DataMember(Name="categoryName", EmitDefaultValue=true)]
        public string CategoryName { get; set; }

        /// <summary>
        /// บาร์โค้ด
        /// </summary>
        /// <value>บาร์โค้ด</value>
        [DataMember(Name="barcode", EmitDefaultValue=true)]
        public string Barcode { get; set; }

        /// <summary>
        /// รายละเอียดสินค้า ฝั่งซื้อ
        /// </summary>
        /// <value>รายละเอียดสินค้า ฝั่งซื้อ</value>
        [DataMember(Name="buyDescription", EmitDefaultValue=true)]
        public string BuyDescription { get; set; }

        /// <summary>
        /// ราคาซื้อสินค้า
        /// </summary>
        /// <value>ราคาซื้อสินค้า</value>
        [DataMember(Name="buyPrice", EmitDefaultValue=true)]
        public decimal BuyPrice { get; set; }

        /// <summary>
        /// ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี
        /// </summary>
        /// <value>ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี</value>
        [DataMember(Name="buyVatType", EmitDefaultValue=true)]
        public long BuyVatType { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ProductInventory {\n");
            sb.Append("  ProductStructureType: ").Append(ProductStructureType).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Code: ").Append(Code).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  SellDescription: ").Append(SellDescription).Append("\n");
            sb.Append("  SellPrice: ").Append(SellPrice).Append("\n");
            sb.Append("  SellVatType: ").Append(SellVatType).Append("\n");
            sb.Append("  UnitName: ").Append(UnitName).Append("\n");
            sb.Append("  CategoryName: ").Append(CategoryName).Append("\n");
            sb.Append("  Barcode: ").Append(Barcode).Append("\n");
            sb.Append("  BuyDescription: ").Append(BuyDescription).Append("\n");
            sb.Append("  BuyPrice: ").Append(BuyPrice).Append("\n");
            sb.Append("  BuyVatType: ").Append(BuyVatType).Append("\n");
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
            return this.Equals(input as ProductInventory);
        }

        /// <summary>
        /// Returns true if ProductInventory instances are equal
        /// </summary>
        /// <param name="input">Instance of ProductInventory to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ProductInventory input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ProductStructureType == input.ProductStructureType ||
                    (this.ProductStructureType != null &&
                    this.ProductStructureType.Equals(input.ProductStructureType))
                ) && 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
                ) && 
                (
                    this.Code == input.Code ||
                    (this.Code != null &&
                    this.Code.Equals(input.Code))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.SellDescription == input.SellDescription ||
                    (this.SellDescription != null &&
                    this.SellDescription.Equals(input.SellDescription))
                ) && 
                (
                    this.SellPrice == input.SellPrice ||
                    (this.SellPrice != null &&
                    this.SellPrice.Equals(input.SellPrice))
                ) && 
                (
                    this.SellVatType == input.SellVatType ||
                    (this.SellVatType != null &&
                    this.SellVatType.Equals(input.SellVatType))
                ) && 
                (
                    this.UnitName == input.UnitName ||
                    (this.UnitName != null &&
                    this.UnitName.Equals(input.UnitName))
                ) && 
                (
                    this.CategoryName == input.CategoryName ||
                    (this.CategoryName != null &&
                    this.CategoryName.Equals(input.CategoryName))
                ) && 
                (
                    this.Barcode == input.Barcode ||
                    (this.Barcode != null &&
                    this.Barcode.Equals(input.Barcode))
                ) && 
                (
                    this.BuyDescription == input.BuyDescription ||
                    (this.BuyDescription != null &&
                    this.BuyDescription.Equals(input.BuyDescription))
                ) && 
                (
                    this.BuyPrice == input.BuyPrice ||
                    (this.BuyPrice != null &&
                    this.BuyPrice.Equals(input.BuyPrice))
                ) && 
                (
                    this.BuyVatType == input.BuyVatType ||
                    (this.BuyVatType != null &&
                    this.BuyVatType.Equals(input.BuyVatType))
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
                if (this.ProductStructureType != null)
                    hashCode = hashCode * 59 + this.ProductStructureType.GetHashCode();
                if (this.Type != null)
                    hashCode = hashCode * 59 + this.Type.GetHashCode();
                if (this.Code != null)
                    hashCode = hashCode * 59 + this.Code.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.SellDescription != null)
                    hashCode = hashCode * 59 + this.SellDescription.GetHashCode();
                if (this.SellPrice != null)
                    hashCode = hashCode * 59 + this.SellPrice.GetHashCode();
                if (this.SellVatType != null)
                    hashCode = hashCode * 59 + this.SellVatType.GetHashCode();
                if (this.UnitName != null)
                    hashCode = hashCode * 59 + this.UnitName.GetHashCode();
                if (this.CategoryName != null)
                    hashCode = hashCode * 59 + this.CategoryName.GetHashCode();
                if (this.Barcode != null)
                    hashCode = hashCode * 59 + this.Barcode.GetHashCode();
                if (this.BuyDescription != null)
                    hashCode = hashCode * 59 + this.BuyDescription.GetHashCode();
                if (this.BuyPrice != null)
                    hashCode = hashCode * 59 + this.BuyPrice.GetHashCode();
                if (this.BuyVatType != null)
                    hashCode = hashCode * 59 + this.BuyVatType.GetHashCode();
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
