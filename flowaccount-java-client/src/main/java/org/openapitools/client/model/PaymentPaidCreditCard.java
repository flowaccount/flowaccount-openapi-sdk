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
 * PaymentPaidCreditCard
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-06-19T11:31:57.605116+07:00[Asia/Bangkok]")

public class PaymentPaidCreditCard {
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

  public static final String SERIALIZED_NAME_CREDIT_CARD_BANK_ACCOUNT_ID = "creditCardBankAccountId";
  @SerializedName(SERIALIZED_NAME_CREDIT_CARD_BANK_ACCOUNT_ID)
  private Long creditCardBankAccountId = 0l;

  public static final String SERIALIZED_NAME_PAYMENT_REMARKS = "paymentRemarks";
  @SerializedName(SERIALIZED_NAME_PAYMENT_REMARKS)
  private String paymentRemarks;

  public static final String SERIALIZED_NAME_REMAINING_COLLECTED_TYPE = "remainingCollectedType";
  @SerializedName(SERIALIZED_NAME_REMAINING_COLLECTED_TYPE)
  private Long remainingCollectedType = 0l;

  public static final String SERIALIZED_NAME_REMAINING_COLLECTED = "remainingCollected";
  @SerializedName(SERIALIZED_NAME_REMAINING_COLLECTED)
  private BigDecimal remainingCollected = 0d;

  public PaymentPaidCreditCard() {
    this.paymentStructureType = this.getClass().getSimpleName();
  }

  public PaymentPaidCreditCard paymentStructureType(String paymentStructureType) {
    
    this.paymentStructureType = paymentStructureType;
    return this;
  }

   /**
   * ชำระเงิน ด้วยบัตรเครดิต
   * @return paymentStructureType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "ชำระเงิน ด้วยบัตรเครดิต")

  public String getPaymentStructureType() {
    return paymentStructureType;
  }


  public void setPaymentStructureType(String paymentStructureType) {
    this.paymentStructureType = paymentStructureType;
  }


  public PaymentPaidCreditCard documentId(Long documentId) {
    
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


  public PaymentPaidCreditCard paymentMethod(Long paymentMethod) {
    
    this.paymentMethod = paymentMethod;
    return this;
  }

   /**
   * ประเภทการชำระเงิน &lt;br&gt; 7 &#x3D; บัตรเครดิต
   * @return paymentMethod
  **/
  @ApiModelProperty(required = true, value = "ประเภทการชำระเงิน <br> 7 = บัตรเครดิต")

  public Long getPaymentMethod() {
    return paymentMethod;
  }


  public void setPaymentMethod(Long paymentMethod) {
    this.paymentMethod = paymentMethod;
  }


  public PaymentPaidCreditCard paymentDate(LocalDate paymentDate) {
    
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


  public PaymentPaidCreditCard collected(BigDecimal collected) {
    
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


  public PaymentPaidCreditCard withheldPercentage(Long withheldPercentage) {
    
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


  public PaymentPaidCreditCard withheldAmount(BigDecimal withheldAmount) {
    
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


  public PaymentPaidCreditCard creditCardBankAccountId(Long creditCardBankAccountId) {
    
    this.creditCardBankAccountId = creditCardBankAccountId;
    return this;
  }

   /**
   * ธนาคารที่ชำระด้วยบัตรเครดิต &lt;br&gt; 1 &#x3D; ธนาคารกรุงเทพ &lt;br&gt; 2 &#x3D; ธนาคารกสิกรไทย &lt;br&gt; 3 &#x3D; ธนาคารกรุงไทย &lt;br&gt; 4 &#x3D; ธนาคารทหารไทย &lt;br&gt; 5 &#x3D; ธนาคารไทยพาณิชย์ &lt;br&gt; 6 &#x3D; ธนาคารสแตนดาร์ดชาร์เตอร์ด &lt;br&gt; 7 &#x3D; ธนาคารซีไอเอ็มบี ไทย &lt;br&gt; 8 &#x3D; ธนาคารยูโอบี &lt;br&gt; 10 &#x3D; ธนาคารกรุงศรีอยุธยา &lt;br&gt; 11 &#x3D; ธนาคารออมสิน &lt;br&gt; 12 &#x3D; ธนาคารธนชาต &lt;br&gt; 13 &#x3D; ธนาคารแลนด์ แอนด์ เฮ้าส์ &lt;br&gt; 14 &#x3D; ธนาคารเกียรตินาคิน &lt;br&gt; 15 &#x3D; ธนาคารซิตี้แบงก์ &lt;br&gt; 16 &#x3D; ธนาคารทิสโก้ &lt;br&gt; 53 &#x3D; ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร &lt;br&gt; 54 &#x3D; ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย &lt;br&gt; 55 &#x3D; ธนาคารอาคารสงเคราะห์ &lt;br&gt; 56 &#x3D; ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย &lt;br&gt; 57 &#x3D; ธนาคารอิสลามแห่งประเทศไทย &lt;br&gt; 58 &#x3D; ธนาคารแห่งประเทศจีน (ไทย) &lt;br&gt; 59 &#x3D; ธนาคารไอซีบีซี (ไทย) &lt;br&gt; 60 &#x3D; ธนาคารเมกะ สากลพาณิชย์ &lt;br&gt; 61 &#x3D; ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น &lt;br&gt; 62 &#x3D; ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) &lt;br&gt; 63 &#x3D; ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น &lt;br&gt; 64 &#x3D; ธนาคารไทยเครดิต เพื่อรายย่อย 
   * @return creditCardBankAccountId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ธนาคารที่ชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย ")

  public Long getCreditCardBankAccountId() {
    return creditCardBankAccountId;
  }


  public void setCreditCardBankAccountId(Long creditCardBankAccountId) {
    this.creditCardBankAccountId = creditCardBankAccountId;
  }


  public PaymentPaidCreditCard paymentRemarks(String paymentRemarks) {
    
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


  public PaymentPaidCreditCard remainingCollectedType(Long remainingCollectedType) {
    
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


  public PaymentPaidCreditCard remainingCollected(BigDecimal remainingCollected) {
    
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
    PaymentPaidCreditCard paymentPaidCreditCard = (PaymentPaidCreditCard) o;
    return Objects.equals(this.paymentStructureType, paymentPaidCreditCard.paymentStructureType) &&
        Objects.equals(this.documentId, paymentPaidCreditCard.documentId) &&
        Objects.equals(this.paymentMethod, paymentPaidCreditCard.paymentMethod) &&
        Objects.equals(this.paymentDate, paymentPaidCreditCard.paymentDate) &&
        Objects.equals(this.collected, paymentPaidCreditCard.collected) &&
        Objects.equals(this.withheldPercentage, paymentPaidCreditCard.withheldPercentage) &&
        Objects.equals(this.withheldAmount, paymentPaidCreditCard.withheldAmount) &&
        Objects.equals(this.creditCardBankAccountId, paymentPaidCreditCard.creditCardBankAccountId) &&
        Objects.equals(this.paymentRemarks, paymentPaidCreditCard.paymentRemarks) &&
        Objects.equals(this.remainingCollectedType, paymentPaidCreditCard.remainingCollectedType) &&
        Objects.equals(this.remainingCollected, paymentPaidCreditCard.remainingCollected);
  }

  @Override
  public int hashCode() {
    return Objects.hash(paymentStructureType, documentId, paymentMethod, paymentDate, collected, withheldPercentage, withheldAmount, creditCardBankAccountId, paymentRemarks, remainingCollectedType, remainingCollected);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaymentPaidCreditCard {\n");
    sb.append("    paymentStructureType: ").append(toIndentedString(paymentStructureType)).append("\n");
    sb.append("    documentId: ").append(toIndentedString(documentId)).append("\n");
    sb.append("    paymentMethod: ").append(toIndentedString(paymentMethod)).append("\n");
    sb.append("    paymentDate: ").append(toIndentedString(paymentDate)).append("\n");
    sb.append("    collected: ").append(toIndentedString(collected)).append("\n");
    sb.append("    withheldPercentage: ").append(toIndentedString(withheldPercentage)).append("\n");
    sb.append("    withheldAmount: ").append(toIndentedString(withheldAmount)).append("\n");
    sb.append("    creditCardBankAccountId: ").append(toIndentedString(creditCardBankAccountId)).append("\n");
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
