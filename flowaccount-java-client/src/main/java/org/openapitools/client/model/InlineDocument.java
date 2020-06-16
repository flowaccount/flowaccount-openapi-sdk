/*
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

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.Document;
import org.openapitools.client.model.InlineDocumentAllOf;
import org.openapitools.client.model.InlineProductItem;
import org.openapitools.client.model.UpgradeDocument;
import org.threeten.bp.LocalDate;

/**
 * InlineDocument
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-06-17T00:38:54.499089+07:00[Asia/Bangkok]")
public class InlineDocument extends Document {
  public static final String SERIALIZED_NAME_DISCOUNT_TYPE = "discountType";
  @SerializedName(SERIALIZED_NAME_DISCOUNT_TYPE)
  private Integer discountType = 1;

  public static final String SERIALIZED_NAME_USE_INLINE_DISCOUNT = "useInlineDiscount";
  @SerializedName(SERIALIZED_NAME_USE_INLINE_DISCOUNT)
  private Boolean useInlineDiscount = true;

  public static final String SERIALIZED_NAME_USE_INLINE_VAT = "useInlineVat";
  @SerializedName(SERIALIZED_NAME_USE_INLINE_VAT)
  private Boolean useInlineVat;

  public static final String SERIALIZED_NAME_EXEMPT_AMOUNT = "exemptAmount";
  @SerializedName(SERIALIZED_NAME_EXEMPT_AMOUNT)
  private BigDecimal exemptAmount = 0d;

  public static final String SERIALIZED_NAME_VATABLE_AMOUNT = "vatableAmount";
  @SerializedName(SERIALIZED_NAME_VATABLE_AMOUNT)
  private BigDecimal vatableAmount = 0d;

  public static final String SERIALIZED_NAME_ITEMS = "items";
  @SerializedName(SERIALIZED_NAME_ITEMS)
  private List<InlineProductItem> items = null;

  public static final String SERIALIZED_NAME_DOCUMENT_REFERENCE = "documentReference";
  @SerializedName(SERIALIZED_NAME_DOCUMENT_REFERENCE)
  private List<UpgradeDocument> documentReference = null;


  public InlineDocument discountType(Integer discountType) {
    
    this.discountType = discountType;
    return this;
  }

   /**
   * รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท)
   * @return discountType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า <br> สามารถเลือกรูปแบบส่วนลดได้ <br> 1 =  เปอร์เซ็นต์ <br> 3 = จำนวน (บาท)")

  public Integer getDiscountType() {
    return discountType;
  }


  public void setDiscountType(Integer discountType) {
    this.discountType = discountType;
  }


  public InlineDocument useInlineDiscount(Boolean useInlineDiscount) {
    
    this.useInlineDiscount = useInlineDiscount;
    return this;
  }

   /**
   * inline discount ใช้งานส่วนลด แยกตามรายการสินค้า
   * @return useInlineDiscount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "inline discount ใช้งานส่วนลด แยกตามรายการสินค้า")

  public Boolean getUseInlineDiscount() {
    return useInlineDiscount;
  }


  public void setUseInlineDiscount(Boolean useInlineDiscount) {
    this.useInlineDiscount = useInlineDiscount;
  }


  public InlineDocument useInlineVat(Boolean useInlineVat) {
    
    this.useInlineVat = useInlineVat;
    return this;
  }

   /**
   * inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า
   * @return useInlineVat
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า")

  public Boolean getUseInlineVat() {
    return useInlineVat;
  }


  public void setUseInlineVat(Boolean useInlineVat) {
    this.useInlineVat = useInlineVat;
  }


  public InlineDocument exemptAmount(BigDecimal exemptAmount) {
    
    this.exemptAmount = exemptAmount;
    return this;
  }

   /**
   * ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม
   * @return exemptAmount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม")

  public BigDecimal getExemptAmount() {
    return exemptAmount;
  }


  public void setExemptAmount(BigDecimal exemptAmount) {
    this.exemptAmount = exemptAmount;
  }


  public InlineDocument vatableAmount(BigDecimal vatableAmount) {
    
    this.vatableAmount = vatableAmount;
    return this;
  }

   /**
   * ยอดขายที่คิดภาษีมูลค่าเพิ่ม
   * @return vatableAmount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ยอดขายที่คิดภาษีมูลค่าเพิ่ม")

  public BigDecimal getVatableAmount() {
    return vatableAmount;
  }


  public void setVatableAmount(BigDecimal vatableAmount) {
    this.vatableAmount = vatableAmount;
  }


  public InlineDocument items(List<InlineProductItem> items) {
    
    this.items = items;
    return this;
  }

  public InlineDocument addItemsItem(InlineProductItem itemsItem) {
    if (this.items == null) {
      this.items = new ArrayList<InlineProductItem>();
    }
    this.items.add(itemsItem);
    return this;
  }

   /**
   * รายการสินค้าใช้งานสำหรับเอกสาร Inline
   * @return items
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "รายการสินค้าใช้งานสำหรับเอกสาร Inline")

  public List<InlineProductItem> getItems() {
    return items;
  }


  public void setItems(List<InlineProductItem> items) {
    this.items = items;
  }


  public InlineDocument documentReference(List<UpgradeDocument> documentReference) {
    
    this.documentReference = documentReference;
    return this;
  }

  public InlineDocument addDocumentReferenceItem(UpgradeDocument documentReferenceItem) {
    if (this.documentReference == null) {
      this.documentReference = new ArrayList<UpgradeDocument>();
    }
    this.documentReference.add(documentReferenceItem);
    return this;
  }

   /**
   * สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)
   * @return documentReference
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)")

  public List<UpgradeDocument> getDocumentReference() {
    return documentReference;
  }


  public void setDocumentReference(List<UpgradeDocument> documentReference) {
    this.documentReference = documentReference;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineDocument inlineDocument = (InlineDocument) o;
    return Objects.equals(this.discountType, inlineDocument.discountType) &&
        Objects.equals(this.useInlineDiscount, inlineDocument.useInlineDiscount) &&
        Objects.equals(this.useInlineVat, inlineDocument.useInlineVat) &&
        Objects.equals(this.exemptAmount, inlineDocument.exemptAmount) &&
        Objects.equals(this.vatableAmount, inlineDocument.vatableAmount) &&
        Objects.equals(this.items, inlineDocument.items) &&
        Objects.equals(this.documentReference, inlineDocument.documentReference) &&
        super.equals(o);
  }

  @Override
  public int hashCode() {
    return Objects.hash(discountType, useInlineDiscount, useInlineVat, exemptAmount, vatableAmount, items, documentReference, super.hashCode());
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineDocument {\n");
    sb.append("    ").append(toIndentedString(super.toString())).append("\n");
    sb.append("    discountType: ").append(toIndentedString(discountType)).append("\n");
    sb.append("    useInlineDiscount: ").append(toIndentedString(useInlineDiscount)).append("\n");
    sb.append("    useInlineVat: ").append(toIndentedString(useInlineVat)).append("\n");
    sb.append("    exemptAmount: ").append(toIndentedString(exemptAmount)).append("\n");
    sb.append("    vatableAmount: ").append(toIndentedString(vatableAmount)).append("\n");
    sb.append("    items: ").append(toIndentedString(items)).append("\n");
    sb.append("    documentReference: ").append(toIndentedString(documentReference)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

