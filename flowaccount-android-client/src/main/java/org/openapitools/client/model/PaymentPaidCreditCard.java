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
import java.util.Date;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class PaymentPaidCreditCard {
  
  @SerializedName("paymentStructureType")
  private String paymentStructureType = null;
  @SerializedName("documentId")
  private Long documentId = null;
  @SerializedName("paymentMethod")
  private Long paymentMethod = 1;
  @SerializedName("paymentDate")
  private Date paymentDate = null;
  @SerializedName("collected")
  private BigDecimal collected = 0;
  @SerializedName("withheldPercentage")
  private Long withheldPercentage = 0;
  @SerializedName("withheldAmount")
  private BigDecimal withheldAmount = 0;
  @SerializedName("creditCardBankAccountId")
  private Long creditCardBankAccountId = 0;
  @SerializedName("paymentRemarks")
  private String paymentRemarks = null;
  @SerializedName("remainingCollectedType")
  private Long remainingCollectedType = 0;
  @SerializedName("remainingCollected")
  private BigDecimal remainingCollected = 0;

  /**
   * ชำระเงิน ด้วยบัตรเครดิต
   **/
  @ApiModelProperty(required = true, value = "ชำระเงิน ด้วยบัตรเครดิต")
  public String getPaymentStructureType() {
    return paymentStructureType;
  }
  public void setPaymentStructureType(String paymentStructureType) {
    this.paymentStructureType = paymentStructureType;
  }

  /**
   * id เอกสาร
   **/
  @ApiModelProperty(required = true, value = "id เอกสาร")
  public Long getDocumentId() {
    return documentId;
  }
  public void setDocumentId(Long documentId) {
    this.documentId = documentId;
  }

  /**
   * ประเภทการชำระเงิน <br> 7 = บัตรเครดิต
   **/
  @ApiModelProperty(required = true, value = "ประเภทการชำระเงิน <br> 7 = บัตรเครดิต")
  public Long getPaymentMethod() {
    return paymentMethod;
  }
  public void setPaymentMethod(Long paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  /**
   * วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
   **/
  @ApiModelProperty(required = true, value = "วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>")
  public Date getPaymentDate() {
    return paymentDate;
  }
  public void setPaymentDate(Date paymentDate) {
    this.paymentDate = paymentDate;
  }

  /**
   * จำนวนเงินยอดจ่ายสุทธิ <br> <ex> Example : 100.00 </ex>
   **/
  @ApiModelProperty(required = true, value = "จำนวนเงินยอดจ่ายสุทธิ <br> <ex> Example : 100.00 </ex>")
  public BigDecimal getCollected() {
    return collected;
  }
  public void setCollected(BigDecimal collected) {
    this.collected = collected;
  }

  /**
   * เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>
   **/
  @ApiModelProperty(value = "เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>")
  public Long getWithheldPercentage() {
    return withheldPercentage;
  }
  public void setWithheldPercentage(Long withheldPercentage) {
    this.withheldPercentage = withheldPercentage;
  }

  /**
   * จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>
   **/
  @ApiModelProperty(value = "จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>")
  public BigDecimal getWithheldAmount() {
    return withheldAmount;
  }
  public void setWithheldAmount(BigDecimal withheldAmount) {
    this.withheldAmount = withheldAmount;
  }

  /**
   * ธนาคารที่ชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
   **/
  @ApiModelProperty(value = "ธนาคารที่ชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย ")
  public Long getCreditCardBankAccountId() {
    return creditCardBankAccountId;
  }
  public void setCreditCardBankAccountId(Long creditCardBankAccountId) {
    this.creditCardBankAccountId = creditCardBankAccountId;
  }

  /**
   * หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน
   **/
  @ApiModelProperty(value = "หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน")
  public String getPaymentRemarks() {
    return paymentRemarks;
  }
  public void setPaymentRemarks(String paymentRemarks) {
    this.paymentRemarks = paymentRemarks;
  }

  /**
   * สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร 
   **/
  @ApiModelProperty(value = "สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร ")
  public Long getRemainingCollectedType() {
    return remainingCollectedType;
  }
  public void setRemainingCollectedType(Long remainingCollectedType) {
    this.remainingCollectedType = remainingCollectedType;
  }

  /**
   * จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex>
   **/
  @ApiModelProperty(value = "จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex>")
  public BigDecimal getRemainingCollected() {
    return remainingCollected;
  }
  public void setRemainingCollected(BigDecimal remainingCollected) {
    this.remainingCollected = remainingCollected;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PaymentPaidCreditCard paymentPaidCreditCard = (PaymentPaidCreditCard) o;
    return (this.paymentStructureType == null ? paymentPaidCreditCard.paymentStructureType == null : this.paymentStructureType.equals(paymentPaidCreditCard.paymentStructureType)) &&
        (this.documentId == null ? paymentPaidCreditCard.documentId == null : this.documentId.equals(paymentPaidCreditCard.documentId)) &&
        (this.paymentMethod == null ? paymentPaidCreditCard.paymentMethod == null : this.paymentMethod.equals(paymentPaidCreditCard.paymentMethod)) &&
        (this.paymentDate == null ? paymentPaidCreditCard.paymentDate == null : this.paymentDate.equals(paymentPaidCreditCard.paymentDate)) &&
        (this.collected == null ? paymentPaidCreditCard.collected == null : this.collected.equals(paymentPaidCreditCard.collected)) &&
        (this.withheldPercentage == null ? paymentPaidCreditCard.withheldPercentage == null : this.withheldPercentage.equals(paymentPaidCreditCard.withheldPercentage)) &&
        (this.withheldAmount == null ? paymentPaidCreditCard.withheldAmount == null : this.withheldAmount.equals(paymentPaidCreditCard.withheldAmount)) &&
        (this.creditCardBankAccountId == null ? paymentPaidCreditCard.creditCardBankAccountId == null : this.creditCardBankAccountId.equals(paymentPaidCreditCard.creditCardBankAccountId)) &&
        (this.paymentRemarks == null ? paymentPaidCreditCard.paymentRemarks == null : this.paymentRemarks.equals(paymentPaidCreditCard.paymentRemarks)) &&
        (this.remainingCollectedType == null ? paymentPaidCreditCard.remainingCollectedType == null : this.remainingCollectedType.equals(paymentPaidCreditCard.remainingCollectedType)) &&
        (this.remainingCollected == null ? paymentPaidCreditCard.remainingCollected == null : this.remainingCollected.equals(paymentPaidCreditCard.remainingCollected));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.paymentStructureType == null ? 0: this.paymentStructureType.hashCode());
    result = 31 * result + (this.documentId == null ? 0: this.documentId.hashCode());
    result = 31 * result + (this.paymentMethod == null ? 0: this.paymentMethod.hashCode());
    result = 31 * result + (this.paymentDate == null ? 0: this.paymentDate.hashCode());
    result = 31 * result + (this.collected == null ? 0: this.collected.hashCode());
    result = 31 * result + (this.withheldPercentage == null ? 0: this.withheldPercentage.hashCode());
    result = 31 * result + (this.withheldAmount == null ? 0: this.withheldAmount.hashCode());
    result = 31 * result + (this.creditCardBankAccountId == null ? 0: this.creditCardBankAccountId.hashCode());
    result = 31 * result + (this.paymentRemarks == null ? 0: this.paymentRemarks.hashCode());
    result = 31 * result + (this.remainingCollectedType == null ? 0: this.remainingCollectedType.hashCode());
    result = 31 * result + (this.remainingCollected == null ? 0: this.remainingCollected.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaymentPaidCreditCard {\n");
    
    sb.append("  paymentStructureType: ").append(paymentStructureType).append("\n");
    sb.append("  documentId: ").append(documentId).append("\n");
    sb.append("  paymentMethod: ").append(paymentMethod).append("\n");
    sb.append("  paymentDate: ").append(paymentDate).append("\n");
    sb.append("  collected: ").append(collected).append("\n");
    sb.append("  withheldPercentage: ").append(withheldPercentage).append("\n");
    sb.append("  withheldAmount: ").append(withheldAmount).append("\n");
    sb.append("  creditCardBankAccountId: ").append(creditCardBankAccountId).append("\n");
    sb.append("  paymentRemarks: ").append(paymentRemarks).append("\n");
    sb.append("  remainingCollectedType: ").append(remainingCollectedType).append("\n");
    sb.append("  remainingCollected: ").append(remainingCollected).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
