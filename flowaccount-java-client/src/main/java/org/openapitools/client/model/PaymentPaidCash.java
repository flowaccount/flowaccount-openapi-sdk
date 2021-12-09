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
import org.threeten.bp.LocalDate;

/**
 * PaymentPaidCash
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-06-19T11:31:57.605116+07:00[Asia/Bangkok]")

public class PaymentPaidCash {
  public static final String SERIALIZED_NAME_PAYMENT_STRUCTURE_TYPE = "paymentStructureType";
  @SerializedName(SERIALIZED_NAME_PAYMENT_STRUCTURE_TYPE)
  protected String paymentStructureType;

  public static final String SERIALIZED_NAME_DOCUMENT_ID = "documentId";
  @SerializedName(SERIALIZED_NAME_DOCUMENT_ID)
  private Long documentId;

  public static final String SERIALIZED_NAME_PAYMENT_METHOD = "paymentMethod";
  @SerializedName(SERIALIZED_NAME_PAYMENT_METHOD)
  private Long paymentMethod = 1l;

  public static final String SERIALIZED_NAME_PAYMENT_DATE = "paymentDate";
  @SerializedName(SERIALIZED_NAME_PAYMENT_DATE)
  private LocalDate paymentDate;

  public static final String SERIALIZED_NAME_COLLECTED = "collected";
  @SerializedName(SERIALIZED_NAME_COLLECTED)
  private BigDecimal collected = 0d;

  public static final String SERIALIZED_NAME_WITHHELD_PERCENTAGE = "withheldPercentage";
  @SerializedName(SERIALIZED_NAME_WITHHELD_PERCENTAGE)
  private Long withheldPercentage = 0l;

  public static final String SERIALIZED_NAME_WITHHELD_AMOUNT = "withheldAmount";
  @SerializedName(SERIALIZED_NAME_WITHHELD_AMOUNT)
  private BigDecimal withheldAmount = 0d;

  public static final String SERIALIZED_NAME_PAYMENT_REMARKS = "paymentRemarks";
  @SerializedName(SERIALIZED_NAME_PAYMENT_REMARKS)
  private String paymentRemarks;

  public static final String SERIALIZED_NAME_REMAINING_COLLECTED_TYPE = "remainingCollectedType";
  @SerializedName(SERIALIZED_NAME_REMAINING_COLLECTED_TYPE)
  private Long remainingCollectedType = 0l;

  public static final String SERIALIZED_NAME_REMAINING_COLLECTED = "remainingCollected";
  @SerializedName(SERIALIZED_NAME_REMAINING_COLLECTED)
  private BigDecimal remainingCollected = 0d;

  public PaymentPaidCash() {
    this.paymentStructureType = this.getClass().getSimpleName();
  }

  public PaymentPaidCash paymentStructureType(String paymentStructureType) {
    
    this.paymentStructureType = paymentStructureType;
    return this;
  }

   /**
   * ชำระเงิน ด้วยเงินสด
   * @return paymentStructureType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "ชำระเงิน ด้วยเงินสด")

  public String getPaymentStructureType() {
    return paymentStructureType;
  }


  public void setPaymentStructureType(String paymentStructureType) {
    this.paymentStructureType = paymentStructureType;
  }


  public PaymentPaidCash documentId(Long documentId) {
    
    this.documentId = documentId;
    return this;
  }

   /**
   * id เอกสาร
   * @return documentId
  **/
  @ApiModelProperty(required = true, value = "id เอกสาร")

  public Long getDocumentId() {
    return documentId;
  }


  public void setDocumentId(Long documentId) {
    this.documentId = documentId;
  }


  public PaymentPaidCash paymentMethod(Long paymentMethod) {
    
    this.paymentMethod = paymentMethod;
    return this;
  }

   /**
   * ประเภทการชำระเงิน &lt;br&gt; 1 &#x3D; เงินสด
   * @return paymentMethod
  **/
  @ApiModelProperty(required = true, value = "ประเภทการชำระเงิน <br> 1 = เงินสด")

  public Long getPaymentMethod() {
    return paymentMethod;
  }


  public void setPaymentMethod(Long paymentMethod) {
    this.paymentMethod = paymentMethod;
  }


  public PaymentPaidCash paymentDate(LocalDate paymentDate) {
    
    this.paymentDate = paymentDate;
    return this;
  }

   /**
   * วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt;
   * @return paymentDate
  **/
  @ApiModelProperty(example = "Wed Jan 01 07:00:00 ICT 2020", required = true, value = "วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>")

  public LocalDate getPaymentDate() {
    return paymentDate;
  }


  public void setPaymentDate(LocalDate paymentDate) {
    this.paymentDate = paymentDate;
  }


  public PaymentPaidCash collected(BigDecimal collected) {
    
    this.collected = collected;
    return this;
  }

   /**
   * จำนวนเงินยอดจ่ายสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt;
   * @return collected
  **/
  @ApiModelProperty(required = true, value = "จำนวนเงินยอดจ่ายสุทธิ <br> <ex> Example : 100.00 </ex>")

  public BigDecimal getCollected() {
    return collected;
  }


  public void setCollected(BigDecimal collected) {
    this.collected = collected;
  }


  public PaymentPaidCash withheldPercentage(Long withheldPercentage) {
    
    this.withheldPercentage = withheldPercentage;
    return this;
  }

   /**
   * เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt;
   * @return withheldPercentage
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>")

  public Long getWithheldPercentage() {
    return withheldPercentage;
  }


  public void setWithheldPercentage(Long withheldPercentage) {
    this.withheldPercentage = withheldPercentage;
  }


  public PaymentPaidCash withheldAmount(BigDecimal withheldAmount) {
    
    this.withheldAmount = withheldAmount;
    return this;
  }

   /**
   * จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt;
   * @return withheldAmount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>")

  public BigDecimal getWithheldAmount() {
    return withheldAmount;
  }


  public void setWithheldAmount(BigDecimal withheldAmount) {
    this.withheldAmount = withheldAmount;
  }


  public PaymentPaidCash paymentRemarks(String paymentRemarks) {
    
    this.paymentRemarks = paymentRemarks;
    return this;
  }

   /**
   * หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน
   * @return paymentRemarks
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน")

  public String getPaymentRemarks() {
    return paymentRemarks;
  }


  public void setPaymentRemarks(String paymentRemarks) {
    this.paymentRemarks = paymentRemarks;
  }


  public PaymentPaidCash remainingCollectedType(Long remainingCollectedType) {
    
    this.remainingCollectedType = remainingCollectedType;
    return this;
  }

   /**
   * สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร 
   * @return remainingCollectedType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร ")

  public Long getRemainingCollectedType() {
    return remainingCollectedType;
  }


  public void setRemainingCollectedType(Long remainingCollectedType) {
    this.remainingCollectedType = remainingCollectedType;
  }


  public PaymentPaidCash remainingCollected(BigDecimal remainingCollected) {
    
    this.remainingCollected = remainingCollected;
    return this;
  }

   /**
   * จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt;
   * @return remainingCollected
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex>")

  public BigDecimal getRemainingCollected() {
    return remainingCollected;
  }


  public void setRemainingCollected(BigDecimal remainingCollected) {
    this.remainingCollected = remainingCollected;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PaymentPaidCash paymentPaidCash = (PaymentPaidCash) o;
    return Objects.equals(this.paymentStructureType, paymentPaidCash.paymentStructureType) &&
        Objects.equals(this.documentId, paymentPaidCash.documentId) &&
        Objects.equals(this.paymentMethod, paymentPaidCash.paymentMethod) &&
        Objects.equals(this.paymentDate, paymentPaidCash.paymentDate) &&
        Objects.equals(this.collected, paymentPaidCash.collected) &&
        Objects.equals(this.withheldPercentage, paymentPaidCash.withheldPercentage) &&
        Objects.equals(this.withheldAmount, paymentPaidCash.withheldAmount) &&
        Objects.equals(this.paymentRemarks, paymentPaidCash.paymentRemarks) &&
        Objects.equals(this.remainingCollectedType, paymentPaidCash.remainingCollectedType) &&
        Objects.equals(this.remainingCollected, paymentPaidCash.remainingCollected);
  }

  @Override
  public int hashCode() {
    return Objects.hash(paymentStructureType, documentId, paymentMethod, paymentDate, collected, withheldPercentage, withheldAmount, paymentRemarks, remainingCollectedType, remainingCollected);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaymentPaidCash {\n");
    sb.append("    paymentStructureType: ").append(toIndentedString(paymentStructureType)).append("\n");
    sb.append("    documentId: ").append(toIndentedString(documentId)).append("\n");
    sb.append("    paymentMethod: ").append(toIndentedString(paymentMethod)).append("\n");
    sb.append("    paymentDate: ").append(toIndentedString(paymentDate)).append("\n");
    sb.append("    collected: ").append(toIndentedString(collected)).append("\n");
    sb.append("    withheldPercentage: ").append(toIndentedString(withheldPercentage)).append("\n");
    sb.append("    withheldAmount: ").append(toIndentedString(withheldAmount)).append("\n");
    sb.append("    paymentRemarks: ").append(toIndentedString(paymentRemarks)).append("\n");
    sb.append("    remainingCollectedType: ").append(toIndentedString(remainingCollectedType)).append("\n");
    sb.append("    remainingCollected: ").append(toIndentedString(remainingCollected)).append("\n");
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
