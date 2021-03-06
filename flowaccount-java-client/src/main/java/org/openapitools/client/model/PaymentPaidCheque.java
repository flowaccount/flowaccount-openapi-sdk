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
 * PaymentPaidCheque
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-06-19T11:31:57.605116+07:00[Asia/Bangkok]")

public class PaymentPaidCheque {
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

  public static final String SERIALIZED_NAME_CHEQUE_DATE = "chequeDate";
  @SerializedName(SERIALIZED_NAME_CHEQUE_DATE)
  private LocalDate chequeDate;

  public static final String SERIALIZED_NAME_CHEQUE_NUMBER = "chequeNumber";
  @SerializedName(SERIALIZED_NAME_CHEQUE_NUMBER)
  private String chequeNumber;

  public static final String SERIALIZED_NAME_CHEQUE_BANK_ACCOUNT_ID = "chequeBankAccountId";
  @SerializedName(SERIALIZED_NAME_CHEQUE_BANK_ACCOUNT_ID)
  private Long chequeBankAccountId = 0l;

  public static final String SERIALIZED_NAME_BANK_ACCOUNT_ID = "bankAccountId";
  @SerializedName(SERIALIZED_NAME_BANK_ACCOUNT_ID)
  private Long bankAccountId = 0l;

  public static final String SERIALIZED_NAME_PAYMENT_CHARGE = "paymentCharge";
  @SerializedName(SERIALIZED_NAME_PAYMENT_CHARGE)
  private BigDecimal paymentCharge = 0d;

  public static final String SERIALIZED_NAME_PAYMENT_REMARKS = "paymentRemarks";
  @SerializedName(SERIALIZED_NAME_PAYMENT_REMARKS)
  private String paymentRemarks;

  public static final String SERIALIZED_NAME_REMAINING_COLLECTED_TYPE = "remainingCollectedType";
  @SerializedName(SERIALIZED_NAME_REMAINING_COLLECTED_TYPE)
  private Long remainingCollectedType = 0l;

  public static final String SERIALIZED_NAME_REMAINING_COLLECTED = "remainingCollected";
  @SerializedName(SERIALIZED_NAME_REMAINING_COLLECTED)
  private BigDecimal remainingCollected = 0d;

  public PaymentPaidCheque() {
    this.paymentStructureType = this.getClass().getSimpleName();
  }

  public PaymentPaidCheque paymentStructureType(String paymentStructureType) {
    
    this.paymentStructureType = paymentStructureType;
    return this;
  }

   /**
   * ชำระเงิน ด้วยเช็ค
   * @return paymentStructureType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(required = true, value = "ชำระเงิน ด้วยเช็ค")

  public String getPaymentStructureType() {
    return paymentStructureType;
  }


  public void setPaymentStructureType(String paymentStructureType) {
    this.paymentStructureType = paymentStructureType;
  }


  public PaymentPaidCheque documentId(Long documentId) {
    
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


  public PaymentPaidCheque paymentMethod(Long paymentMethod) {
    
    this.paymentMethod = paymentMethod;
    return this;
  }

   /**
   * ประเภทการชำระเงิน &lt;br&gt; 3 &#x3D; เช็ค
   * @return paymentMethod
  **/
  @ApiModelProperty(required = true, value = "ประเภทการชำระเงิน <br> 3 = เช็ค")

  public Long getPaymentMethod() {
    return paymentMethod;
  }


  public void setPaymentMethod(Long paymentMethod) {
    this.paymentMethod = paymentMethod;
  }


  public PaymentPaidCheque paymentDate(LocalDate paymentDate) {
    
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


  public PaymentPaidCheque collected(BigDecimal collected) {
    
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


  public PaymentPaidCheque withheldPercentage(Long withheldPercentage) {
    
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


  public PaymentPaidCheque withheldAmount(BigDecimal withheldAmount) {
    
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


  public PaymentPaidCheque chequeDate(LocalDate chequeDate) {
    
    this.chequeDate = chequeDate;
    return this;
  }

   /**
   * วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt;
   * @return chequeDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Wed Jan 01 07:00:00 ICT 2020", value = "วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>")

  public LocalDate getChequeDate() {
    return chequeDate;
  }


  public void setChequeDate(LocalDate chequeDate) {
    this.chequeDate = chequeDate;
  }


  public PaymentPaidCheque chequeNumber(String chequeNumber) {
    
    this.chequeNumber = chequeNumber;
    return this;
  }

   /**
   * เลขที่เช็คธนาคาร &lt;br&gt; &lt;ex&gt;Example: 122-122-122&lt;/ex&gt;
   * @return chequeNumber
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "122-122-122", value = "เลขที่เช็คธนาคาร <br> <ex>Example: 122-122-122</ex>")

  public String getChequeNumber() {
    return chequeNumber;
  }


  public void setChequeNumber(String chequeNumber) {
    this.chequeNumber = chequeNumber;
  }


  public PaymentPaidCheque chequeBankAccountId(Long chequeBankAccountId) {
    
    this.chequeBankAccountId = chequeBankAccountId;
    return this;
  }

   /**
   * ธนาคารที่ระบุหน้าเช็ค &lt;br&gt; 1 &#x3D; ธนาคารกรุงเทพ &lt;br&gt; 2 &#x3D; ธนาคารกสิกรไทย &lt;br&gt; 3 &#x3D; ธนาคารกรุงไทย &lt;br&gt; 4 &#x3D; ธนาคารทหารไทย &lt;br&gt; 5 &#x3D; ธนาคารไทยพาณิชย์ &lt;br&gt; 6 &#x3D; ธนาคารสแตนดาร์ดชาร์เตอร์ด &lt;br&gt; 7 &#x3D; ธนาคารซีไอเอ็มบี ไทย &lt;br&gt; 8 &#x3D; ธนาคารยูโอบี &lt;br&gt; 10 &#x3D; ธนาคารกรุงศรีอยุธยา &lt;br&gt; 11 &#x3D; ธนาคารออมสิน &lt;br&gt; 12 &#x3D; ธนาคารธนชาต &lt;br&gt; 13 &#x3D; ธนาคารแลนด์ แอนด์ เฮ้าส์ &lt;br&gt; 14 &#x3D; ธนาคารเกียรตินาคิน &lt;br&gt; 15 &#x3D; ธนาคารซิตี้แบงก์ &lt;br&gt; 16 &#x3D; ธนาคารทิสโก้ &lt;br&gt; 53 &#x3D; ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร &lt;br&gt; 54 &#x3D; ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย &lt;br&gt; 55 &#x3D; ธนาคารอาคารสงเคราะห์ &lt;br&gt; 56 &#x3D; ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย &lt;br&gt; 57 &#x3D; ธนาคารอิสลามแห่งประเทศไทย &lt;br&gt; 58 &#x3D; ธนาคารแห่งประเทศจีน (ไทย) &lt;br&gt; 59 &#x3D; ธนาคารไอซีบีซี (ไทย) &lt;br&gt; 60 &#x3D; ธนาคารเมกะ สากลพาณิชย์ &lt;br&gt; 61 &#x3D; ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น &lt;br&gt; 62 &#x3D; ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) &lt;br&gt; 63 &#x3D; ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น &lt;br&gt; 64 &#x3D; ธนาคารไทยเครดิต เพื่อรายย่อย 
   * @return chequeBankAccountId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ธนาคารที่ระบุหน้าเช็ค <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย ")

  public Long getChequeBankAccountId() {
    return chequeBankAccountId;
  }


  public void setChequeBankAccountId(Long chequeBankAccountId) {
    this.chequeBankAccountId = chequeBankAccountId;
  }


  public PaymentPaidCheque bankAccountId(Long bankAccountId) {
    
    this.bankAccountId = bankAccountId;
    return this;
  }

   /**
   * เลข id บัญชีธนาคารที่ใช้ชำระเงิน &lt;br&gt;&lt;red&gt;สามารถ GET มาได้จาก My Company &gt; Bank Account &lt;/red&gt;&lt;br&gt; &lt;ex&gt;Example: 12345&lt;/ex&gt;
   * @return bankAccountId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "12345", value = "เลข id บัญชีธนาคารที่ใช้ชำระเงิน <br><red>สามารถ GET มาได้จาก My Company > Bank Account </red><br> <ex>Example: 12345</ex>")

  public Long getBankAccountId() {
    return bankAccountId;
  }


  public void setBankAccountId(Long bankAccountId) {
    this.bankAccountId = bankAccountId;
  }


  public PaymentPaidCheque paymentCharge(BigDecimal paymentCharge) {
    
    this.paymentCharge = paymentCharge;
    return this;
  }

   /**
   * ค่าธรรมเนียม ที่ชำระโดยเช็ค &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt;
   * @return paymentCharge
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ค่าธรรมเนียม ที่ชำระโดยเช็ค <br> <ex> Example : 100.00 </ex>")

  public BigDecimal getPaymentCharge() {
    return paymentCharge;
  }


  public void setPaymentCharge(BigDecimal paymentCharge) {
    this.paymentCharge = paymentCharge;
  }


  public PaymentPaidCheque paymentRemarks(String paymentRemarks) {
    
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


  public PaymentPaidCheque remainingCollectedType(Long remainingCollectedType) {
    
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


  public PaymentPaidCheque remainingCollected(BigDecimal remainingCollected) {
    
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
    PaymentPaidCheque paymentPaidCheque = (PaymentPaidCheque) o;
    return Objects.equals(this.paymentStructureType, paymentPaidCheque.paymentStructureType) &&
        Objects.equals(this.documentId, paymentPaidCheque.documentId) &&
        Objects.equals(this.paymentMethod, paymentPaidCheque.paymentMethod) &&
        Objects.equals(this.paymentDate, paymentPaidCheque.paymentDate) &&
        Objects.equals(this.collected, paymentPaidCheque.collected) &&
        Objects.equals(this.withheldPercentage, paymentPaidCheque.withheldPercentage) &&
        Objects.equals(this.withheldAmount, paymentPaidCheque.withheldAmount) &&
        Objects.equals(this.chequeDate, paymentPaidCheque.chequeDate) &&
        Objects.equals(this.chequeNumber, paymentPaidCheque.chequeNumber) &&
        Objects.equals(this.chequeBankAccountId, paymentPaidCheque.chequeBankAccountId) &&
        Objects.equals(this.bankAccountId, paymentPaidCheque.bankAccountId) &&
        Objects.equals(this.paymentCharge, paymentPaidCheque.paymentCharge) &&
        Objects.equals(this.paymentRemarks, paymentPaidCheque.paymentRemarks) &&
        Objects.equals(this.remainingCollectedType, paymentPaidCheque.remainingCollectedType) &&
        Objects.equals(this.remainingCollected, paymentPaidCheque.remainingCollected);
  }

  @Override
  public int hashCode() {
    return Objects.hash(paymentStructureType, documentId, paymentMethod, paymentDate, collected, withheldPercentage, withheldAmount, chequeDate, chequeNumber, chequeBankAccountId, bankAccountId, paymentCharge, paymentRemarks, remainingCollectedType, remainingCollected);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaymentPaidCheque {\n");
    sb.append("    paymentStructureType: ").append(toIndentedString(paymentStructureType)).append("\n");
    sb.append("    documentId: ").append(toIndentedString(documentId)).append("\n");
    sb.append("    paymentMethod: ").append(toIndentedString(paymentMethod)).append("\n");
    sb.append("    paymentDate: ").append(toIndentedString(paymentDate)).append("\n");
    sb.append("    collected: ").append(toIndentedString(collected)).append("\n");
    sb.append("    withheldPercentage: ").append(toIndentedString(withheldPercentage)).append("\n");
    sb.append("    withheldAmount: ").append(toIndentedString(withheldAmount)).append("\n");
    sb.append("    chequeDate: ").append(toIndentedString(chequeDate)).append("\n");
    sb.append("    chequeNumber: ").append(toIndentedString(chequeNumber)).append("\n");
    sb.append("    chequeBankAccountId: ").append(toIndentedString(chequeBankAccountId)).append("\n");
    sb.append("    bankAccountId: ").append(toIndentedString(bankAccountId)).append("\n");
    sb.append("    paymentCharge: ").append(toIndentedString(paymentCharge)).append("\n");
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

