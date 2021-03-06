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
public class ExpenseInlineProductItem {
  
  @SerializedName("systemCode")
  private Integer systemCode = null;
  @SerializedName("categoryId")
  private Integer categoryId = null;
  @SerializedName("description")
  private String description = null;
  @SerializedName("nameLocal")
  private String nameLocal = null;
  @SerializedName("nameForeign")
  private String nameForeign = null;
  @SerializedName("creditCategory")
  private Integer creditCategory = null;
  @SerializedName("creditId")
  private Integer creditId = null;
  @SerializedName("creditCode")
  private String creditCode = null;
  @SerializedName("creditNameLocal")
  private String creditNameLocal = null;
  @SerializedName("creditNameForeign")
  private String creditNameForeign = null;
  @SerializedName("debitCategory")
  private Integer debitCategory = null;
  @SerializedName("debitId")
  private Integer debitId = null;
  @SerializedName("debitCode")
  private String debitCode = null;
  @SerializedName("debitNameLocal")
  private String debitNameLocal = null;
  @SerializedName("debitNameForeign")
  private String debitNameForeign = null;
  @SerializedName("quantity")
  private BigDecimal quantity = null;
  @SerializedName("unitName")
  private String unitName = null;
  @SerializedName("pricePerUnit")
  private BigDecimal pricePerUnit = null;
  @SerializedName("discountAmount")
  private Integer discountAmount = 0;
  @SerializedName("vatRate")
  private Integer vatRate = 7;
  @SerializedName("total")
  private BigDecimal total = null;

  /**
   * เลขที่ system code หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ)
   **/
  @ApiModelProperty(required = true, value = "เลขที่ system code หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ)")
  public Integer getSystemCode() {
    return systemCode;
  }
  public void setSystemCode(Integer systemCode) {
    this.systemCode = systemCode;
  }

  /**
   * เลขที่ id หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) <br> <ex>Example: 40238</ex>
   **/
  @ApiModelProperty(required = true, value = "เลขที่ id หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) <br> <ex>Example: 40238</ex>")
  public Integer getCategoryId() {
    return categoryId;
  }
  public void setCategoryId(Integer categoryId) {
    this.categoryId = categoryId;
  }

  /**
   * รายละเอียดค่าใช้จ่าย
   **/
  @ApiModelProperty(required = true, value = "รายละเอียดค่าใช้จ่าย")
  public String getDescription() {
    return description;
  }
  public void setDescription(String description) {
    this.description = description;
  }

  /**
   * ชื่อหมวดหมู่ค่าใช้จ่าย <br> <ex>Example: การตลาดและโฆษณา</ex>
   **/
  @ApiModelProperty(required = true, value = "ชื่อหมวดหมู่ค่าใช้จ่าย <br> <ex>Example: การตลาดและโฆษณา</ex>")
  public String getNameLocal() {
    return nameLocal;
  }
  public void setNameLocal(String nameLocal) {
    this.nameLocal = nameLocal;
  }

  /**
   * ชื่อหมวดหมู่ค่าใช้จ่าย (ภาษาอังกฤษ) <br> <ex>Example: Marketing & Advertising</ex>
   **/
  @ApiModelProperty(required = true, value = "ชื่อหมวดหมู่ค่าใช้จ่าย (ภาษาอังกฤษ) <br> <ex>Example: Marketing & Advertising</ex>")
  public String getNameForeign() {
    return nameForeign;
  }
  public void setNameForeign(String nameForeign) {
    this.nameForeign = nameForeign;
  }

  /**
   * เลขหมวดหมู่ ฝั่งเครดิต ของ หมวดหมู่ค่าใช้จ่าย <br> <ex>Example: 2</ex>
   **/
  @ApiModelProperty(required = true, value = "เลขหมวดหมู่ ฝั่งเครดิต ของ หมวดหมู่ค่าใช้จ่าย <br> <ex>Example: 2</ex>")
  public Integer getCreditCategory() {
    return creditCategory;
  }
  public void setCreditCategory(Integer creditCategory) {
    this.creditCategory = creditCategory;
  }

  /**
   * เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิิต <br> <ex>Example: 1081994</ex>
   **/
  @ApiModelProperty(required = true, value = "เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิิต <br> <ex>Example: 1081994</ex>")
  public Integer getCreditId() {
    return creditId;
  }
  public void setCreditId(Integer creditId) {
    this.creditId = creditId;
  }

  /**
   * เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต <br> <ex>Example: 21399</ex>
   **/
  @ApiModelProperty(required = true, value = "เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต <br> <ex>Example: 21399</ex>")
  public String getCreditCode() {
    return creditCode;
  }
  public void setCreditCode(String creditCode) {
    this.creditCode = creditCode;
  }

  /**
   * ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต <br> <ex>Example: 21399 / เจ้าหนี้อื่นๆ</ex>
   **/
  @ApiModelProperty(required = true, value = "ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต <br> <ex>Example: 21399 / เจ้าหนี้อื่นๆ</ex>")
  public String getCreditNameLocal() {
    return creditNameLocal;
  }
  public void setCreditNameLocal(String creditNameLocal) {
    this.creditNameLocal = creditNameLocal;
  }

  /**
   * ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต (ภาษาอังกฤษ) <br> <ex>Example: 21399 / Other Payables</ex>
   **/
  @ApiModelProperty(required = true, value = "ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต (ภาษาอังกฤษ) <br> <ex>Example: 21399 / Other Payables</ex>")
  public String getCreditNameForeign() {
    return creditNameForeign;
  }
  public void setCreditNameForeign(String creditNameForeign) {
    this.creditNameForeign = creditNameForeign;
  }

  /**
   * เลขหมวดหมู่ ฝั่งเดบิต ของ หมวดหมู่ค่าใช้จ่าย
   **/
  @ApiModelProperty(required = true, value = "เลขหมวดหมู่ ฝั่งเดบิต ของ หมวดหมู่ค่าใช้จ่าย")
  public Integer getDebitCategory() {
    return debitCategory;
  }
  public void setDebitCategory(Integer debitCategory) {
    this.debitCategory = debitCategory;
  }

  /**
   * เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต <br> <ex>Example: 1082099</ex>
   **/
  @ApiModelProperty(required = true, value = "เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต <br> <ex>Example: 1082099</ex>")
  public Integer getDebitId() {
    return debitId;
  }
  public void setDebitId(Integer debitId) {
    this.debitId = debitId;
  }

  /**
   * เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต <br> <ex>Example: 53029</ex>
   **/
  @ApiModelProperty(required = true, value = "เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต <br> <ex>Example: 53029</ex>")
  public String getDebitCode() {
    return debitCode;
  }
  public void setDebitCode(String debitCode) {
    this.debitCode = debitCode;
  }

  /**
   * ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต <br> <ex>Example: 53029 / ค่าใช้จ่ายด้านโฆษณาและการตลาดอื่นๆ</ex>
   **/
  @ApiModelProperty(required = true, value = "ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต <br> <ex>Example: 53029 / ค่าใช้จ่ายด้านโฆษณาและการตลาดอื่นๆ</ex>")
  public String getDebitNameLocal() {
    return debitNameLocal;
  }
  public void setDebitNameLocal(String debitNameLocal) {
    this.debitNameLocal = debitNameLocal;
  }

  /**
   * ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต (ภาษาอังกฤษ) <br> <ex>Example: 53029 / Other advertising and marketing expenses</ex>
   **/
  @ApiModelProperty(required = true, value = "ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต (ภาษาอังกฤษ) <br> <ex>Example: 53029 / Other advertising and marketing expenses</ex>")
  public String getDebitNameForeign() {
    return debitNameForeign;
  }
  public void setDebitNameForeign(String debitNameForeign) {
    this.debitNameForeign = debitNameForeign;
  }

  /**
   * จำนวนรายการค่าใช้จ่าย
   **/
  @ApiModelProperty(required = true, value = "จำนวนรายการค่าใช้จ่าย")
  public BigDecimal getQuantity() {
    return quantity;
  }
  public void setQuantity(BigDecimal quantity) {
    this.quantity = quantity;
  }

  /**
   * หน่วยรายการค่าใช้จ่าย
   **/
  @ApiModelProperty(value = "หน่วยรายการค่าใช้จ่าย")
  public String getUnitName() {
    return unitName;
  }
  public void setUnitName(String unitName) {
    this.unitName = unitName;
  }

  /**
   * ราคาต่อหน่วยค่าใช้จ่าย
   **/
  @ApiModelProperty(required = true, value = "ราคาต่อหน่วยค่าใช้จ่าย")
  public BigDecimal getPricePerUnit() {
    return pricePerUnit;
  }
  public void setPricePerUnit(BigDecimal pricePerUnit) {
    this.pricePerUnit = pricePerUnit;
  }

  /**
   * จำนวนส่วนลดรายการค่าใช้จ่าย
   **/
  @ApiModelProperty(required = true, value = "จำนวนส่วนลดรายการค่าใช้จ่าย")
  public Integer getDiscountAmount() {
    return discountAmount;
  }
  public void setDiscountAmount(Integer discountAmount) {
    this.discountAmount = discountAmount;
  }

  /**
   * รูปแบบภาษี <br> 7 = ภาษี 7% <br> 0 = ภาษี 0% <br> -1 = ยกเว้นภาษี
   **/
  @ApiModelProperty(required = true, value = "รูปแบบภาษี <br> 7 = ภาษี 7% <br> 0 = ภาษี 0% <br> -1 = ยกเว้นภาษี")
  public Integer getVatRate() {
    return vatRate;
  }
  public void setVatRate(Integer vatRate) {
    this.vatRate = vatRate;
  }

  /**
   * มูลค่ารวม
   **/
  @ApiModelProperty(required = true, value = "มูลค่ารวม")
  public BigDecimal getTotal() {
    return total;
  }
  public void setTotal(BigDecimal total) {
    this.total = total;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ExpenseInlineProductItem expenseInlineProductItem = (ExpenseInlineProductItem) o;
    return (this.systemCode == null ? expenseInlineProductItem.systemCode == null : this.systemCode.equals(expenseInlineProductItem.systemCode)) &&
        (this.categoryId == null ? expenseInlineProductItem.categoryId == null : this.categoryId.equals(expenseInlineProductItem.categoryId)) &&
        (this.description == null ? expenseInlineProductItem.description == null : this.description.equals(expenseInlineProductItem.description)) &&
        (this.nameLocal == null ? expenseInlineProductItem.nameLocal == null : this.nameLocal.equals(expenseInlineProductItem.nameLocal)) &&
        (this.nameForeign == null ? expenseInlineProductItem.nameForeign == null : this.nameForeign.equals(expenseInlineProductItem.nameForeign)) &&
        (this.creditCategory == null ? expenseInlineProductItem.creditCategory == null : this.creditCategory.equals(expenseInlineProductItem.creditCategory)) &&
        (this.creditId == null ? expenseInlineProductItem.creditId == null : this.creditId.equals(expenseInlineProductItem.creditId)) &&
        (this.creditCode == null ? expenseInlineProductItem.creditCode == null : this.creditCode.equals(expenseInlineProductItem.creditCode)) &&
        (this.creditNameLocal == null ? expenseInlineProductItem.creditNameLocal == null : this.creditNameLocal.equals(expenseInlineProductItem.creditNameLocal)) &&
        (this.creditNameForeign == null ? expenseInlineProductItem.creditNameForeign == null : this.creditNameForeign.equals(expenseInlineProductItem.creditNameForeign)) &&
        (this.debitCategory == null ? expenseInlineProductItem.debitCategory == null : this.debitCategory.equals(expenseInlineProductItem.debitCategory)) &&
        (this.debitId == null ? expenseInlineProductItem.debitId == null : this.debitId.equals(expenseInlineProductItem.debitId)) &&
        (this.debitCode == null ? expenseInlineProductItem.debitCode == null : this.debitCode.equals(expenseInlineProductItem.debitCode)) &&
        (this.debitNameLocal == null ? expenseInlineProductItem.debitNameLocal == null : this.debitNameLocal.equals(expenseInlineProductItem.debitNameLocal)) &&
        (this.debitNameForeign == null ? expenseInlineProductItem.debitNameForeign == null : this.debitNameForeign.equals(expenseInlineProductItem.debitNameForeign)) &&
        (this.quantity == null ? expenseInlineProductItem.quantity == null : this.quantity.equals(expenseInlineProductItem.quantity)) &&
        (this.unitName == null ? expenseInlineProductItem.unitName == null : this.unitName.equals(expenseInlineProductItem.unitName)) &&
        (this.pricePerUnit == null ? expenseInlineProductItem.pricePerUnit == null : this.pricePerUnit.equals(expenseInlineProductItem.pricePerUnit)) &&
        (this.discountAmount == null ? expenseInlineProductItem.discountAmount == null : this.discountAmount.equals(expenseInlineProductItem.discountAmount)) &&
        (this.vatRate == null ? expenseInlineProductItem.vatRate == null : this.vatRate.equals(expenseInlineProductItem.vatRate)) &&
        (this.total == null ? expenseInlineProductItem.total == null : this.total.equals(expenseInlineProductItem.total));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.systemCode == null ? 0: this.systemCode.hashCode());
    result = 31 * result + (this.categoryId == null ? 0: this.categoryId.hashCode());
    result = 31 * result + (this.description == null ? 0: this.description.hashCode());
    result = 31 * result + (this.nameLocal == null ? 0: this.nameLocal.hashCode());
    result = 31 * result + (this.nameForeign == null ? 0: this.nameForeign.hashCode());
    result = 31 * result + (this.creditCategory == null ? 0: this.creditCategory.hashCode());
    result = 31 * result + (this.creditId == null ? 0: this.creditId.hashCode());
    result = 31 * result + (this.creditCode == null ? 0: this.creditCode.hashCode());
    result = 31 * result + (this.creditNameLocal == null ? 0: this.creditNameLocal.hashCode());
    result = 31 * result + (this.creditNameForeign == null ? 0: this.creditNameForeign.hashCode());
    result = 31 * result + (this.debitCategory == null ? 0: this.debitCategory.hashCode());
    result = 31 * result + (this.debitId == null ? 0: this.debitId.hashCode());
    result = 31 * result + (this.debitCode == null ? 0: this.debitCode.hashCode());
    result = 31 * result + (this.debitNameLocal == null ? 0: this.debitNameLocal.hashCode());
    result = 31 * result + (this.debitNameForeign == null ? 0: this.debitNameForeign.hashCode());
    result = 31 * result + (this.quantity == null ? 0: this.quantity.hashCode());
    result = 31 * result + (this.unitName == null ? 0: this.unitName.hashCode());
    result = 31 * result + (this.pricePerUnit == null ? 0: this.pricePerUnit.hashCode());
    result = 31 * result + (this.discountAmount == null ? 0: this.discountAmount.hashCode());
    result = 31 * result + (this.vatRate == null ? 0: this.vatRate.hashCode());
    result = 31 * result + (this.total == null ? 0: this.total.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class ExpenseInlineProductItem {\n");
    
    sb.append("  systemCode: ").append(systemCode).append("\n");
    sb.append("  categoryId: ").append(categoryId).append("\n");
    sb.append("  description: ").append(description).append("\n");
    sb.append("  nameLocal: ").append(nameLocal).append("\n");
    sb.append("  nameForeign: ").append(nameForeign).append("\n");
    sb.append("  creditCategory: ").append(creditCategory).append("\n");
    sb.append("  creditId: ").append(creditId).append("\n");
    sb.append("  creditCode: ").append(creditCode).append("\n");
    sb.append("  creditNameLocal: ").append(creditNameLocal).append("\n");
    sb.append("  creditNameForeign: ").append(creditNameForeign).append("\n");
    sb.append("  debitCategory: ").append(debitCategory).append("\n");
    sb.append("  debitId: ").append(debitId).append("\n");
    sb.append("  debitCode: ").append(debitCode).append("\n");
    sb.append("  debitNameLocal: ").append(debitNameLocal).append("\n");
    sb.append("  debitNameForeign: ").append(debitNameForeign).append("\n");
    sb.append("  quantity: ").append(quantity).append("\n");
    sb.append("  unitName: ").append(unitName).append("\n");
    sb.append("  pricePerUnit: ").append(pricePerUnit).append("\n");
    sb.append("  discountAmount: ").append(discountAmount).append("\n");
    sb.append("  vatRate: ").append(vatRate).append("\n");
    sb.append("  total: ").append(total).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
