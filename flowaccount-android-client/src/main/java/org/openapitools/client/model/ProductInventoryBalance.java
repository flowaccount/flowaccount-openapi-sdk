/**
 * FlowAccount Open API
 * # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer_support@flowaccount.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package org.openapitools.client.model;

import java.math.BigDecimal;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class ProductInventoryBalance {
  
  @SerializedName("productStructureType")
  private String productStructureType = null;
  @SerializedName("type")
  private Long type = 1;
  @SerializedName("code")
  private String code = null;
  @SerializedName("name")
  private String name = null;
  @SerializedName("sellDescription")
  private String sellDescription = null;
  @SerializedName("sellPrice")
  private BigDecimal sellPrice = null;
  @SerializedName("sellVatType")
  private Long sellVatType = 3;
  @SerializedName("unitName")
  private String unitName = null;
  @SerializedName("categoryName")
  private String categoryName = null;
  @SerializedName("barcode")
  private String barcode = null;
  @SerializedName("buyDescription")
  private String buyDescription = null;
  @SerializedName("buyPrice")
  private BigDecimal buyPrice = null;
  @SerializedName("buyVatType")
  private Long buyVatType = 3;
  @SerializedName("inventoryPublishedOn")
  private String inventoryPublishedOn = 2020-01-01;
  @SerializedName("inventoryQuantity")
  private BigDecimal inventoryQuantity = 0;
  @SerializedName("inventoryPrice")
  private BigDecimal inventoryPrice = 0;

  /**
   * สร้างสินค้าประเภท นับสต๊อก พร้อมตั้งค่ายอดเริ่มต้น
   **/
  @ApiModelProperty(value = "สร้างสินค้าประเภท นับสต๊อก พร้อมตั้งค่ายอดเริ่มต้น")
  public String getProductStructureType() {
    return productStructureType;
  }
  public void setProductStructureType(String productStructureType) {
    this.productStructureType = productStructureType;
  }

  /**
   * ประเภทสินค้า: <br>1 = บริการ <br> 3 = ไม่นับสต๊อก <br> 5 = นับสต๊อก
   **/
  @ApiModelProperty(required = true, value = "ประเภทสินค้า: <br>1 = บริการ <br> 3 = ไม่นับสต๊อก <br> 5 = นับสต๊อก")
  public Long getType() {
    return type;
  }
  public void setType(Long type) {
    this.type = type;
  }

  /**
   * รหัสสินค้า / SKU <br> <ex>Example: P001</ex>
   **/
  @ApiModelProperty(value = "รหัสสินค้า / SKU <br> <ex>Example: P001</ex>")
  public String getCode() {
    return code;
  }
  public void setCode(String code) {
    this.code = code;
  }

  /**
   * ชื่อสินค้า <br> <ex>Example: Product</ex>
   **/
  @ApiModelProperty(required = true, value = "ชื่อสินค้า <br> <ex>Example: Product</ex>")
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  /**
   * รายละเอียดสินค้า ฝั่งขาย
   **/
  @ApiModelProperty(value = "รายละเอียดสินค้า ฝั่งขาย")
  public String getSellDescription() {
    return sellDescription;
  }
  public void setSellDescription(String sellDescription) {
    this.sellDescription = sellDescription;
  }

  /**
   * ราคาขายสินค้า
   **/
  @ApiModelProperty(value = "ราคาขายสินค้า")
  public BigDecimal getSellPrice() {
    return sellPrice;
  }
  public void setSellPrice(BigDecimal sellPrice) {
    this.sellPrice = sellPrice;
  }

  /**
   * ภาษีขาย: <br> 1 = ราคาขายรวมภาษี <br> 3 = ราคาขายไม่รวมภาษี <br> 5 = ราคาขายภาษี 0% <br> 7 = ราคาขายสินค้าได้รับการยกเว้นภาษี
   **/
  @ApiModelProperty(value = "ภาษีขาย: <br> 1 = ราคาขายรวมภาษี <br> 3 = ราคาขายไม่รวมภาษี <br> 5 = ราคาขายภาษี 0% <br> 7 = ราคาขายสินค้าได้รับการยกเว้นภาษี")
  public Long getSellVatType() {
    return sellVatType;
  }
  public void setSellVatType(Long sellVatType) {
    this.sellVatType = sellVatType;
  }

  /**
   * หน่วยสินค้า
   **/
  @ApiModelProperty(required = true, value = "หน่วยสินค้า")
  public String getUnitName() {
    return unitName;
  }
  public void setUnitName(String unitName) {
    this.unitName = unitName;
  }

  /**
   * หมวดสินค้า
   **/
  @ApiModelProperty(value = "หมวดสินค้า")
  public String getCategoryName() {
    return categoryName;
  }
  public void setCategoryName(String categoryName) {
    this.categoryName = categoryName;
  }

  /**
   * บาร์โค้ด
   **/
  @ApiModelProperty(value = "บาร์โค้ด")
  public String getBarcode() {
    return barcode;
  }
  public void setBarcode(String barcode) {
    this.barcode = barcode;
  }

  /**
   * รายละเอียดสินค้า ฝั่งซื้อ
   **/
  @ApiModelProperty(value = "รายละเอียดสินค้า ฝั่งซื้อ")
  public String getBuyDescription() {
    return buyDescription;
  }
  public void setBuyDescription(String buyDescription) {
    this.buyDescription = buyDescription;
  }

  /**
   * ราคาซื้อสินค้า
   **/
  @ApiModelProperty(value = "ราคาซื้อสินค้า")
  public BigDecimal getBuyPrice() {
    return buyPrice;
  }
  public void setBuyPrice(BigDecimal buyPrice) {
    this.buyPrice = buyPrice;
  }

  /**
   * ภาษีซื้อ: <br> 1 = ราคาซื้อรวมภาษี <br> 3 = ราคาซื้อไม่รวมภาษี <br> 5 = ราคาซื้อภาษี 0% <br> 7 = ราคาซื้อสินค้าได้รับการยกเว้นภาษี
   **/
  @ApiModelProperty(value = "ภาษีซื้อ: <br> 1 = ราคาซื้อรวมภาษี <br> 3 = ราคาซื้อไม่รวมภาษี <br> 5 = ราคาซื้อภาษี 0% <br> 7 = ราคาซื้อสินค้าได้รับการยกเว้นภาษี")
  public Long getBuyVatType() {
    return buyVatType;
  }
  public void setBuyVatType(Long buyVatType) {
    this.buyVatType = buyVatType;
  }

  /**
   * วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
   **/
  @ApiModelProperty(required = true, value = "วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>")
  public String getInventoryPublishedOn() {
    return inventoryPublishedOn;
  }
  public void setInventoryPublishedOn(String inventoryPublishedOn) {
    this.inventoryPublishedOn = inventoryPublishedOn;
  }

  /**
   * จำนวนยอดตั้งต้นสินค้า
   **/
  @ApiModelProperty(required = true, value = "จำนวนยอดตั้งต้นสินค้า")
  public BigDecimal getInventoryQuantity() {
    return inventoryQuantity;
  }
  public void setInventoryQuantity(BigDecimal inventoryQuantity) {
    this.inventoryQuantity = inventoryQuantity;
  }

  /**
   * ราคาซื้อสินค้า
   **/
  @ApiModelProperty(required = true, value = "ราคาซื้อสินค้า")
  public BigDecimal getInventoryPrice() {
    return inventoryPrice;
  }
  public void setInventoryPrice(BigDecimal inventoryPrice) {
    this.inventoryPrice = inventoryPrice;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductInventoryBalance productInventoryBalance = (ProductInventoryBalance) o;
    return (this.productStructureType == null ? productInventoryBalance.productStructureType == null : this.productStructureType.equals(productInventoryBalance.productStructureType)) &&
        (this.type == null ? productInventoryBalance.type == null : this.type.equals(productInventoryBalance.type)) &&
        (this.code == null ? productInventoryBalance.code == null : this.code.equals(productInventoryBalance.code)) &&
        (this.name == null ? productInventoryBalance.name == null : this.name.equals(productInventoryBalance.name)) &&
        (this.sellDescription == null ? productInventoryBalance.sellDescription == null : this.sellDescription.equals(productInventoryBalance.sellDescription)) &&
        (this.sellPrice == null ? productInventoryBalance.sellPrice == null : this.sellPrice.equals(productInventoryBalance.sellPrice)) &&
        (this.sellVatType == null ? productInventoryBalance.sellVatType == null : this.sellVatType.equals(productInventoryBalance.sellVatType)) &&
        (this.unitName == null ? productInventoryBalance.unitName == null : this.unitName.equals(productInventoryBalance.unitName)) &&
        (this.categoryName == null ? productInventoryBalance.categoryName == null : this.categoryName.equals(productInventoryBalance.categoryName)) &&
        (this.barcode == null ? productInventoryBalance.barcode == null : this.barcode.equals(productInventoryBalance.barcode)) &&
        (this.buyDescription == null ? productInventoryBalance.buyDescription == null : this.buyDescription.equals(productInventoryBalance.buyDescription)) &&
        (this.buyPrice == null ? productInventoryBalance.buyPrice == null : this.buyPrice.equals(productInventoryBalance.buyPrice)) &&
        (this.buyVatType == null ? productInventoryBalance.buyVatType == null : this.buyVatType.equals(productInventoryBalance.buyVatType)) &&
        (this.inventoryPublishedOn == null ? productInventoryBalance.inventoryPublishedOn == null : this.inventoryPublishedOn.equals(productInventoryBalance.inventoryPublishedOn)) &&
        (this.inventoryQuantity == null ? productInventoryBalance.inventoryQuantity == null : this.inventoryQuantity.equals(productInventoryBalance.inventoryQuantity)) &&
        (this.inventoryPrice == null ? productInventoryBalance.inventoryPrice == null : this.inventoryPrice.equals(productInventoryBalance.inventoryPrice));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.productStructureType == null ? 0: this.productStructureType.hashCode());
    result = 31 * result + (this.type == null ? 0: this.type.hashCode());
    result = 31 * result + (this.code == null ? 0: this.code.hashCode());
    result = 31 * result + (this.name == null ? 0: this.name.hashCode());
    result = 31 * result + (this.sellDescription == null ? 0: this.sellDescription.hashCode());
    result = 31 * result + (this.sellPrice == null ? 0: this.sellPrice.hashCode());
    result = 31 * result + (this.sellVatType == null ? 0: this.sellVatType.hashCode());
    result = 31 * result + (this.unitName == null ? 0: this.unitName.hashCode());
    result = 31 * result + (this.categoryName == null ? 0: this.categoryName.hashCode());
    result = 31 * result + (this.barcode == null ? 0: this.barcode.hashCode());
    result = 31 * result + (this.buyDescription == null ? 0: this.buyDescription.hashCode());
    result = 31 * result + (this.buyPrice == null ? 0: this.buyPrice.hashCode());
    result = 31 * result + (this.buyVatType == null ? 0: this.buyVatType.hashCode());
    result = 31 * result + (this.inventoryPublishedOn == null ? 0: this.inventoryPublishedOn.hashCode());
    result = 31 * result + (this.inventoryQuantity == null ? 0: this.inventoryQuantity.hashCode());
    result = 31 * result + (this.inventoryPrice == null ? 0: this.inventoryPrice.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductInventoryBalance {\n");
    
    sb.append("  productStructureType: ").append(productStructureType).append("\n");
    sb.append("  type: ").append(type).append("\n");
    sb.append("  code: ").append(code).append("\n");
    sb.append("  name: ").append(name).append("\n");
    sb.append("  sellDescription: ").append(sellDescription).append("\n");
    sb.append("  sellPrice: ").append(sellPrice).append("\n");
    sb.append("  sellVatType: ").append(sellVatType).append("\n");
    sb.append("  unitName: ").append(unitName).append("\n");
    sb.append("  categoryName: ").append(categoryName).append("\n");
    sb.append("  barcode: ").append(barcode).append("\n");
    sb.append("  buyDescription: ").append(buyDescription).append("\n");
    sb.append("  buyPrice: ").append(buyPrice).append("\n");
    sb.append("  buyVatType: ").append(buyVatType).append("\n");
    sb.append("  inventoryPublishedOn: ").append(inventoryPublishedOn).append("\n");
    sb.append("  inventoryQuantity: ").append(inventoryQuantity).append("\n");
    sb.append("  inventoryPrice: ").append(inventoryPrice).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}