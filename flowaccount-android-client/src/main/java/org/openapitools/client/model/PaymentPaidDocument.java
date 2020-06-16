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
import org.openapitools.client.model.PaymentPaidCash;
import org.openapitools.client.model.PaymentPaidCheque;
import org.openapitools.client.model.PaymentPaidCreditCard;
import org.openapitools.client.model.PaymentPaidTransfer;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class PaymentPaidDocument {
  
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
  @SerializedName("paymentRemarks")
  private String paymentRemarks = null;
  @SerializedName("remainingCollectedType")
  private Long remainingCollectedType = 0;
  @SerializedName("remainingCollected")
  private BigDecimal remainingCollected = 0;
  @SerializedName("transferBankAccountId")
  private Long transferBankAccountId = 0;
  @SerializedName("bankAccountId")
  private Long bankAccountId = 0;
  @SerializedName("paymentCharge")
  private BigDecimal paymentCharge = 0;
  @SerializedName("chequeDate")
  private Date chequeDate = null;
  @SerializedName("chequeNumber")
  private String chequeNumber = null;
  @SerializedName("chequeBankAccountId")
  private Long chequeBankAccountId = 0;
  @SerializedName("creditCardBankAccountId")
  private Long creditCardBankAccountId = 0;

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

  /**
   * ธนาคารที่ใช้รับชำระเงิน ธนาคารที่ชำระเงิน <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
   **/
  @ApiModelProperty(value = "ธนาคารที่ใช้รับชำระเงิน ธนาคารที่ชำระเงิน <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย ")
  public Long getTransferBankAccountId() {
    return transferBankAccountId;
  }
  public void setTransferBankAccountId(Long transferBankAccountId) {
    this.transferBankAccountId = transferBankAccountId;
  }

  /**
   * เลข id บัญชีธนาคารที่ใช้ชำระเงิน <br><red>สามารถ GET มาได้จาก My Company > Bank Account </red><br> <ex>Example: 12345</ex>
   **/
  @ApiModelProperty(value = "เลข id บัญชีธนาคารที่ใช้ชำระเงิน <br><red>สามารถ GET มาได้จาก My Company > Bank Account </red><br> <ex>Example: 12345</ex>")
  public Long getBankAccountId() {
    return bankAccountId;
  }
  public void setBankAccountId(Long bankAccountId) {
    this.bankAccountId = bankAccountId;
  }

  /**
   * ค่าธรรมเนียม ที่ชำระโดยเช็ค <br> <ex> Example : 100.00 </ex>
   **/
  @ApiModelProperty(value = "ค่าธรรมเนียม ที่ชำระโดยเช็ค <br> <ex> Example : 100.00 </ex>")
  public BigDecimal getPaymentCharge() {
    return paymentCharge;
  }
  public void setPaymentCharge(BigDecimal paymentCharge) {
    this.paymentCharge = paymentCharge;
  }

  /**
   * วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
   **/
  @ApiModelProperty(value = "วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>")
  public Date getChequeDate() {
    return chequeDate;
  }
  public void setChequeDate(Date chequeDate) {
    this.chequeDate = chequeDate;
  }

  /**
   * เลขที่เช็คธนาคาร <br> <ex>Example: 122-122-122</ex>
   **/
  @ApiModelProperty(value = "เลขที่เช็คธนาคาร <br> <ex>Example: 122-122-122</ex>")
  public String getChequeNumber() {
    return chequeNumber;
  }
  public void setChequeNumber(String chequeNumber) {
    this.chequeNumber = chequeNumber;
  }

  /**
   * ธนาคารที่ระบุหน้าเช็ค <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
   **/
  @ApiModelProperty(value = "ธนาคารที่ระบุหน้าเช็ค <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย ")
  public Long getChequeBankAccountId() {
    return chequeBankAccountId;
  }
  public void setChequeBankAccountId(Long chequeBankAccountId) {
    this.chequeBankAccountId = chequeBankAccountId;
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


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PaymentPaidDocument paymentPaidDocument = (PaymentPaidDocument) o;
    return (this.paymentStructureType == null ? paymentPaidDocument.paymentStructureType == null : this.paymentStructureType.equals(paymentPaidDocument.paymentStructureType)) &&
        (this.documentId == null ? paymentPaidDocument.documentId == null : this.documentId.equals(paymentPaidDocument.documentId)) &&
        (this.paymentMethod == null ? paymentPaidDocument.paymentMethod == null : this.paymentMethod.equals(paymentPaidDocument.paymentMethod)) &&
        (this.paymentDate == null ? paymentPaidDocument.paymentDate == null : this.paymentDate.equals(paymentPaidDocument.paymentDate)) &&
        (this.collected == null ? paymentPaidDocument.collected == null : this.collected.equals(paymentPaidDocument.collected)) &&
        (this.withheldPercentage == null ? paymentPaidDocument.withheldPercentage == null : this.withheldPercentage.equals(paymentPaidDocument.withheldPercentage)) &&
        (this.withheldAmount == null ? paymentPaidDocument.withheldAmount == null : this.withheldAmount.equals(paymentPaidDocument.withheldAmount)) &&
        (this.paymentRemarks == null ? paymentPaidDocument.paymentRemarks == null : this.paymentRemarks.equals(paymentPaidDocument.paymentRemarks)) &&
        (this.remainingCollectedType == null ? paymentPaidDocument.remainingCollectedType == null : this.remainingCollectedType.equals(paymentPaidDocument.remainingCollectedType)) &&
        (this.remainingCollected == null ? paymentPaidDocument.remainingCollected == null : this.remainingCollected.equals(paymentPaidDocument.remainingCollected)) &&
        (this.transferBankAccountId == null ? paymentPaidDocument.transferBankAccountId == null : this.transferBankAccountId.equals(paymentPaidDocument.transferBankAccountId)) &&
        (this.bankAccountId == null ? paymentPaidDocument.bankAccountId == null : this.bankAccountId.equals(paymentPaidDocument.bankAccountId)) &&
        (this.paymentCharge == null ? paymentPaidDocument.paymentCharge == null : this.paymentCharge.equals(paymentPaidDocument.paymentCharge)) &&
        (this.chequeDate == null ? paymentPaidDocument.chequeDate == null : this.chequeDate.equals(paymentPaidDocument.chequeDate)) &&
        (this.chequeNumber == null ? paymentPaidDocument.chequeNumber == null : this.chequeNumber.equals(paymentPaidDocument.chequeNumber)) &&
        (this.chequeBankAccountId == null ? paymentPaidDocument.chequeBankAccountId == null : this.chequeBankAccountId.equals(paymentPaidDocument.chequeBankAccountId)) &&
        (this.creditCardBankAccountId == null ? paymentPaidDocument.creditCardBankAccountId == null : this.creditCardBankAccountId.equals(paymentPaidDocument.creditCardBankAccountId));
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
    result = 31 * result + (this.paymentRemarks == null ? 0: this.paymentRemarks.hashCode());
    result = 31 * result + (this.remainingCollectedType == null ? 0: this.remainingCollectedType.hashCode());
    result = 31 * result + (this.remainingCollected == null ? 0: this.remainingCollected.hashCode());
    result = 31 * result + (this.transferBankAccountId == null ? 0: this.transferBankAccountId.hashCode());
    result = 31 * result + (this.bankAccountId == null ? 0: this.bankAccountId.hashCode());
    result = 31 * result + (this.paymentCharge == null ? 0: this.paymentCharge.hashCode());
    result = 31 * result + (this.chequeDate == null ? 0: this.chequeDate.hashCode());
    result = 31 * result + (this.chequeNumber == null ? 0: this.chequeNumber.hashCode());
    result = 31 * result + (this.chequeBankAccountId == null ? 0: this.chequeBankAccountId.hashCode());
    result = 31 * result + (this.creditCardBankAccountId == null ? 0: this.creditCardBankAccountId.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaymentPaidDocument {\n");
    
    sb.append("  paymentStructureType: ").append(paymentStructureType).append("\n");
    sb.append("  documentId: ").append(documentId).append("\n");
    sb.append("  paymentMethod: ").append(paymentMethod).append("\n");
    sb.append("  paymentDate: ").append(paymentDate).append("\n");
    sb.append("  collected: ").append(collected).append("\n");
    sb.append("  withheldPercentage: ").append(withheldPercentage).append("\n");
    sb.append("  withheldAmount: ").append(withheldAmount).append("\n");
    sb.append("  paymentRemarks: ").append(paymentRemarks).append("\n");
    sb.append("  remainingCollectedType: ").append(remainingCollectedType).append("\n");
    sb.append("  remainingCollected: ").append(remainingCollected).append("\n");
    sb.append("  transferBankAccountId: ").append(transferBankAccountId).append("\n");
    sb.append("  bankAccountId: ").append(bankAccountId).append("\n");
    sb.append("  paymentCharge: ").append(paymentCharge).append("\n");
    sb.append("  chequeDate: ").append(chequeDate).append("\n");
    sb.append("  chequeNumber: ").append(chequeNumber).append("\n");
    sb.append("  chequeBankAccountId: ").append(chequeBankAccountId).append("\n");
    sb.append("  creditCardBankAccountId: ").append(creditCardBankAccountId).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
