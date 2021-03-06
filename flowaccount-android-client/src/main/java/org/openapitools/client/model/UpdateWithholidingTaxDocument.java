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
import java.util.*;
import java.util.Date;
import org.openapitools.client.model.WithholidingTaxItem;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class UpdateWithholidingTaxDocument {
  
  @SerializedName("companyName")
  private String companyName = null;
  @SerializedName("companyNameEn")
  private String companyNameEn = null;
  @SerializedName("companyAddress")
  private String companyAddress = null;
  @SerializedName("companyAddressEn")
  private String companyAddressEn = null;
  @SerializedName("companyTaxId")
  private String companyTaxId = null;
  @SerializedName("companyBranch")
  private String companyBranch = null;
  @SerializedName("companyBranchEn")
  private String companyBranchEn = null;
  @SerializedName("companyPhone")
  private String companyPhone = null;
  @SerializedName("companyMobile")
  private String companyMobile = null;
  @SerializedName("companyFax")
  private String companyFax = null;
  @SerializedName("companyWebsite")
  private String companyWebsite = null;
  @SerializedName("contactCode")
  private String contactCode = null;
  @SerializedName("contactName")
  private String contactName = null;
  @SerializedName("contactAddress")
  private String contactAddress = null;
  @SerializedName("contactTaxId")
  private String contactTaxId = null;
  @SerializedName("contactBranch")
  private String contactBranch = null;
  @SerializedName("contactPerson")
  private String contactPerson = null;
  @SerializedName("contactEmail")
  private String contactEmail = null;
  @SerializedName("contactNumber")
  private String contactNumber = null;
  @SerializedName("contactZipCode")
  private String contactZipCode = null;
  @SerializedName("contactGroup")
  private Integer contactGroup = 1;
  @SerializedName("publishedOn")
  private Date publishedOn = null;
  @SerializedName("entity")
  private Integer entity = 1;
  @SerializedName("textOther")
  private String textOther = null;
  @SerializedName("withholdingTaxItems")
  private List<WithholidingTaxItem> withholdingTaxItems = null;
  @SerializedName("total")
  private BigDecimal total = null;
  @SerializedName("totalTaxWithheld")
  private BigDecimal totalTaxWithheld = null;
  @SerializedName("taxPayment")
  private Integer taxPayment = 1;
  @SerializedName("taxPaymentOthers")
  private String taxPaymentOthers = null;
  @SerializedName("providentFundNumber")
  private String providentFundNumber = null;
  @SerializedName("providentFundAmount")
  private String providentFundAmount = null;
  @SerializedName("socialSecurityAmount")
  private String socialSecurityAmount = null;
  @SerializedName("remarks")
  private String remarks = null;
  @SerializedName("internalNotes")
  private String internalNotes = null;
  @SerializedName("showSignatureOrStamp")
  private Boolean showSignatureOrStamp = true;

  /**
   * ชื่อบริษัท
   **/
  @ApiModelProperty(required = true, value = "ชื่อบริษัท")
  public String getCompanyName() {
    return companyName;
  }
  public void setCompanyName(String companyName) {
    this.companyName = companyName;
  }

  /**
   * ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
   **/
  @ApiModelProperty(value = "ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)")
  public String getCompanyNameEn() {
    return companyNameEn;
  }
  public void setCompanyNameEn(String companyNameEn) {
    this.companyNameEn = companyNameEn;
  }

  /**
   * ที่อยู่บริษัท
   **/
  @ApiModelProperty(required = true, value = "ที่อยู่บริษัท")
  public String getCompanyAddress() {
    return companyAddress;
  }
  public void setCompanyAddress(String companyAddress) {
    this.companyAddress = companyAddress;
  }

  /**
   * ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
   **/
  @ApiModelProperty(value = "ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)")
  public String getCompanyAddressEn() {
    return companyAddressEn;
  }
  public void setCompanyAddressEn(String companyAddressEn) {
    this.companyAddressEn = companyAddressEn;
  }

  /**
   * เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>
   **/
  @ApiModelProperty(value = "เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>")
  public String getCompanyTaxId() {
    return companyTaxId;
  }
  public void setCompanyTaxId(String companyTaxId) {
    this.companyTaxId = companyTaxId;
  }

  /**
   * ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex>
   **/
  @ApiModelProperty(required = true, value = "ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex>")
  public String getCompanyBranch() {
    return companyBranch;
  }
  public void setCompanyBranch(String companyBranch) {
    this.companyBranch = companyBranch;
  }

  /**
   * ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) <br><ex>Example: Head Office 00000</ex>
   **/
  @ApiModelProperty(value = "ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) <br><ex>Example: Head Office 00000</ex>")
  public String getCompanyBranchEn() {
    return companyBranchEn;
  }
  public void setCompanyBranchEn(String companyBranchEn) {
    this.companyBranchEn = companyBranchEn;
  }

  /**
   * เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>
   **/
  @ApiModelProperty(value = "เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>")
  public String getCompanyPhone() {
    return companyPhone;
  }
  public void setCompanyPhone(String companyPhone) {
    this.companyPhone = companyPhone;
  }

  /**
   * เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>
   **/
  @ApiModelProperty(value = "เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>")
  public String getCompanyMobile() {
    return companyMobile;
  }
  public void setCompanyMobile(String companyMobile) {
    this.companyMobile = companyMobile;
  }

  /**
   * เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>
   **/
  @ApiModelProperty(value = "เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>")
  public String getCompanyFax() {
    return companyFax;
  }
  public void setCompanyFax(String companyFax) {
    this.companyFax = companyFax;
  }

  /**
   * เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>
   **/
  @ApiModelProperty(value = "เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>")
  public String getCompanyWebsite() {
    return companyWebsite;
  }
  public void setCompanyWebsite(String companyWebsite) {
    this.companyWebsite = companyWebsite;
  }

  /**
   * รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
   **/
  @ApiModelProperty(value = "รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า")
  public String getContactCode() {
    return contactCode;
  }
  public void setContactCode(String contactCode) {
    this.contactCode = contactCode;
  }

  /**
   * ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
   **/
  @ApiModelProperty(required = true, value = "ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า")
  public String getContactName() {
    return contactName;
  }
  public void setContactName(String contactName) {
    this.contactName = contactName;
  }

  /**
   * ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
   **/
  @ApiModelProperty(value = "ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า")
  public String getContactAddress() {
    return contactAddress;
  }
  public void setContactAddress(String contactAddress) {
    this.contactAddress = contactAddress;
  }

  /**
   * เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
   **/
  @ApiModelProperty(value = "เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>")
  public String getContactTaxId() {
    return contactTaxId;
  }
  public void setContactTaxId(String contactTaxId) {
    this.contactTaxId = contactTaxId;
  }

  /**
   * สำนักงาน/สาขา
   **/
  @ApiModelProperty(value = "สำนักงาน/สาขา")
  public String getContactBranch() {
    return contactBranch;
  }
  public void setContactBranch(String contactBranch) {
    this.contactBranch = contactBranch;
  }

  /**
   * ชื่อผู้ติดต่อ
   **/
  @ApiModelProperty(value = "ชื่อผู้ติดต่อ")
  public String getContactPerson() {
    return contactPerson;
  }
  public void setContactPerson(String contactPerson) {
    this.contactPerson = contactPerson;
  }

  /**
   * อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>
   **/
  @ApiModelProperty(value = "อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>")
  public String getContactEmail() {
    return contactEmail;
  }
  public void setContactEmail(String contactEmail) {
    this.contactEmail = contactEmail;
  }

  /**
   * เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
   **/
  @ApiModelProperty(value = "เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>")
  public String getContactNumber() {
    return contactNumber;
  }
  public void setContactNumber(String contactNumber) {
    this.contactNumber = contactNumber;
  }

  /**
   * รหัสไปรษณีย์ติดต่อ
   **/
  @ApiModelProperty(value = "รหัสไปรษณีย์ติดต่อ")
  public String getContactZipCode() {
    return contactZipCode;
  }
  public void setContactZipCode(String contactZipCode) {
    this.contactZipCode = contactZipCode;
  }

  /**
   * ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
   **/
  @ApiModelProperty(value = "ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล")
  public Integer getContactGroup() {
    return contactGroup;
  }
  public void setContactGroup(Integer contactGroup) {
    this.contactGroup = contactGroup;
  }

  /**
   * วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
   **/
  @ApiModelProperty(required = true, value = "วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>")
  public Date getPublishedOn() {
    return publishedOn;
  }
  public void setPublishedOn(Date publishedOn) {
    this.publishedOn = publishedOn;
  }

  /**
   * แบบฟอร์มเอกสารหัก ณ ที่จ่าย <br> ภงด 3 = 1 <br> ภงด 53 = 3 <br> ภงด 1ก = 1 <br> ภงด 1ก (พิเศษ) = 7 <br> ภงด 2 = 9 <br> ภงด 2ก = 11 <br> ภงด 3ก = 13
   **/
  @ApiModelProperty(required = true, value = "แบบฟอร์มเอกสารหัก ณ ที่จ่าย <br> ภงด 3 = 1 <br> ภงด 53 = 3 <br> ภงด 1ก = 1 <br> ภงด 1ก (พิเศษ) = 7 <br> ภงด 2 = 9 <br> ภงด 2ก = 11 <br> ภงด 3ก = 13")
  public Integer getEntity() {
    return entity;
  }
  public void setEntity(Integer entity) {
    this.entity = entity;
  }

  /**
   * ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) <br>Example: 2020</ex>
   **/
  @ApiModelProperty(value = "ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) <br>Example: 2020</ex>")
  public String getTextOther() {
    return textOther;
  }
  public void setTextOther(String textOther) {
    this.textOther = textOther;
  }

  /**
   * รายการหัก ของเอกสารหัก ณ ที่จ่าย
   **/
  @ApiModelProperty(required = true, value = "รายการหัก ของเอกสารหัก ณ ที่จ่าย")
  public List<WithholidingTaxItem> getWithholdingTaxItems() {
    return withholdingTaxItems;
  }
  public void setWithholdingTaxItems(List<WithholidingTaxItem> withholdingTaxItems) {
    this.withholdingTaxItems = withholdingTaxItems;
  }

  /**
   * จำนวนเงิน (ไม่รวมภาษี)
   **/
  @ApiModelProperty(required = true, value = "จำนวนเงิน (ไม่รวมภาษี)")
  public BigDecimal getTotal() {
    return total;
  }
  public void setTotal(BigDecimal total) {
    this.total = total;
  }

  /**
   * ภาษีที่หัก
   **/
  @ApiModelProperty(required = true, value = "ภาษีที่หัก")
  public BigDecimal getTotalTaxWithheld() {
    return totalTaxWithheld;
  }
  public void setTotalTaxWithheld(BigDecimal totalTaxWithheld) {
    this.totalTaxWithheld = totalTaxWithheld;
  }

  /**
   * ผู้จ่ายเงิน <br> 1 = ภาษีหัก ณ ที่จ่าย <br> 3 = ออกภาษีให้ตลอดไป <br> 5 = ออกภาษีให้ครั้งเดียว <br> 7 = อื่น ๆ
   **/
  @ApiModelProperty(value = "ผู้จ่ายเงิน <br> 1 = ภาษีหัก ณ ที่จ่าย <br> 3 = ออกภาษีให้ตลอดไป <br> 5 = ออกภาษีให้ครั้งเดียว <br> 7 = อื่น ๆ")
  public Integer getTaxPayment() {
    return taxPayment;
  }
  public void setTaxPayment(Integer taxPayment) {
    this.taxPayment = taxPayment;
  }

  /**
   * ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ 
   **/
  @ApiModelProperty(value = "ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ ")
  public String getTaxPaymentOthers() {
    return taxPaymentOthers;
  }
  public void setTaxPaymentOthers(String taxPaymentOthers) {
    this.taxPaymentOthers = taxPaymentOthers;
  }

  /**
   * ใบอนุญาตเลขที่
   **/
  @ApiModelProperty(value = "ใบอนุญาตเลขที่")
  public String getProvidentFundNumber() {
    return providentFundNumber;
  }
  public void setProvidentFundNumber(String providentFundNumber) {
    this.providentFundNumber = providentFundNumber;
  }

  /**
   * จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ
   **/
  @ApiModelProperty(value = "จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ")
  public String getProvidentFundAmount() {
    return providentFundAmount;
  }
  public void setProvidentFundAmount(String providentFundAmount) {
    this.providentFundAmount = providentFundAmount;
  }

  /**
   * จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม
   **/
  @ApiModelProperty(value = "จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม")
  public String getSocialSecurityAmount() {
    return socialSecurityAmount;
  }
  public void setSocialSecurityAmount(String socialSecurityAmount) {
    this.socialSecurityAmount = socialSecurityAmount;
  }

  /**
   * หมายเหตุเอกสาร
   **/
  @ApiModelProperty(value = "หมายเหตุเอกสาร")
  public String getRemarks() {
    return remarks;
  }
  public void setRemarks(String remarks) {
    this.remarks = remarks;
  }

  /**
   * โน๊ตภายในบริษัท
   **/
  @ApiModelProperty(value = "โน๊ตภายในบริษัท")
  public String getInternalNotes() {
    return internalNotes;
  }
  public void setInternalNotes(String internalNotes) {
    this.internalNotes = internalNotes;
  }

  /**
   * ลายเซ็นอิเล็กทรอนิกส์และตรายาง
   **/
  @ApiModelProperty(value = "ลายเซ็นอิเล็กทรอนิกส์และตรายาง")
  public Boolean getShowSignatureOrStamp() {
    return showSignatureOrStamp;
  }
  public void setShowSignatureOrStamp(Boolean showSignatureOrStamp) {
    this.showSignatureOrStamp = showSignatureOrStamp;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateWithholidingTaxDocument updateWithholidingTaxDocument = (UpdateWithholidingTaxDocument) o;
    return (this.companyName == null ? updateWithholidingTaxDocument.companyName == null : this.companyName.equals(updateWithholidingTaxDocument.companyName)) &&
        (this.companyNameEn == null ? updateWithholidingTaxDocument.companyNameEn == null : this.companyNameEn.equals(updateWithholidingTaxDocument.companyNameEn)) &&
        (this.companyAddress == null ? updateWithholidingTaxDocument.companyAddress == null : this.companyAddress.equals(updateWithholidingTaxDocument.companyAddress)) &&
        (this.companyAddressEn == null ? updateWithholidingTaxDocument.companyAddressEn == null : this.companyAddressEn.equals(updateWithholidingTaxDocument.companyAddressEn)) &&
        (this.companyTaxId == null ? updateWithholidingTaxDocument.companyTaxId == null : this.companyTaxId.equals(updateWithholidingTaxDocument.companyTaxId)) &&
        (this.companyBranch == null ? updateWithholidingTaxDocument.companyBranch == null : this.companyBranch.equals(updateWithholidingTaxDocument.companyBranch)) &&
        (this.companyBranchEn == null ? updateWithholidingTaxDocument.companyBranchEn == null : this.companyBranchEn.equals(updateWithholidingTaxDocument.companyBranchEn)) &&
        (this.companyPhone == null ? updateWithholidingTaxDocument.companyPhone == null : this.companyPhone.equals(updateWithholidingTaxDocument.companyPhone)) &&
        (this.companyMobile == null ? updateWithholidingTaxDocument.companyMobile == null : this.companyMobile.equals(updateWithholidingTaxDocument.companyMobile)) &&
        (this.companyFax == null ? updateWithholidingTaxDocument.companyFax == null : this.companyFax.equals(updateWithholidingTaxDocument.companyFax)) &&
        (this.companyWebsite == null ? updateWithholidingTaxDocument.companyWebsite == null : this.companyWebsite.equals(updateWithholidingTaxDocument.companyWebsite)) &&
        (this.contactCode == null ? updateWithholidingTaxDocument.contactCode == null : this.contactCode.equals(updateWithholidingTaxDocument.contactCode)) &&
        (this.contactName == null ? updateWithholidingTaxDocument.contactName == null : this.contactName.equals(updateWithholidingTaxDocument.contactName)) &&
        (this.contactAddress == null ? updateWithholidingTaxDocument.contactAddress == null : this.contactAddress.equals(updateWithholidingTaxDocument.contactAddress)) &&
        (this.contactTaxId == null ? updateWithholidingTaxDocument.contactTaxId == null : this.contactTaxId.equals(updateWithholidingTaxDocument.contactTaxId)) &&
        (this.contactBranch == null ? updateWithholidingTaxDocument.contactBranch == null : this.contactBranch.equals(updateWithholidingTaxDocument.contactBranch)) &&
        (this.contactPerson == null ? updateWithholidingTaxDocument.contactPerson == null : this.contactPerson.equals(updateWithholidingTaxDocument.contactPerson)) &&
        (this.contactEmail == null ? updateWithholidingTaxDocument.contactEmail == null : this.contactEmail.equals(updateWithholidingTaxDocument.contactEmail)) &&
        (this.contactNumber == null ? updateWithholidingTaxDocument.contactNumber == null : this.contactNumber.equals(updateWithholidingTaxDocument.contactNumber)) &&
        (this.contactZipCode == null ? updateWithholidingTaxDocument.contactZipCode == null : this.contactZipCode.equals(updateWithholidingTaxDocument.contactZipCode)) &&
        (this.contactGroup == null ? updateWithholidingTaxDocument.contactGroup == null : this.contactGroup.equals(updateWithholidingTaxDocument.contactGroup)) &&
        (this.publishedOn == null ? updateWithholidingTaxDocument.publishedOn == null : this.publishedOn.equals(updateWithholidingTaxDocument.publishedOn)) &&
        (this.entity == null ? updateWithholidingTaxDocument.entity == null : this.entity.equals(updateWithholidingTaxDocument.entity)) &&
        (this.textOther == null ? updateWithholidingTaxDocument.textOther == null : this.textOther.equals(updateWithholidingTaxDocument.textOther)) &&
        (this.withholdingTaxItems == null ? updateWithholidingTaxDocument.withholdingTaxItems == null : this.withholdingTaxItems.equals(updateWithholidingTaxDocument.withholdingTaxItems)) &&
        (this.total == null ? updateWithholidingTaxDocument.total == null : this.total.equals(updateWithholidingTaxDocument.total)) &&
        (this.totalTaxWithheld == null ? updateWithholidingTaxDocument.totalTaxWithheld == null : this.totalTaxWithheld.equals(updateWithholidingTaxDocument.totalTaxWithheld)) &&
        (this.taxPayment == null ? updateWithholidingTaxDocument.taxPayment == null : this.taxPayment.equals(updateWithholidingTaxDocument.taxPayment)) &&
        (this.taxPaymentOthers == null ? updateWithholidingTaxDocument.taxPaymentOthers == null : this.taxPaymentOthers.equals(updateWithholidingTaxDocument.taxPaymentOthers)) &&
        (this.providentFundNumber == null ? updateWithholidingTaxDocument.providentFundNumber == null : this.providentFundNumber.equals(updateWithholidingTaxDocument.providentFundNumber)) &&
        (this.providentFundAmount == null ? updateWithholidingTaxDocument.providentFundAmount == null : this.providentFundAmount.equals(updateWithholidingTaxDocument.providentFundAmount)) &&
        (this.socialSecurityAmount == null ? updateWithholidingTaxDocument.socialSecurityAmount == null : this.socialSecurityAmount.equals(updateWithholidingTaxDocument.socialSecurityAmount)) &&
        (this.remarks == null ? updateWithholidingTaxDocument.remarks == null : this.remarks.equals(updateWithholidingTaxDocument.remarks)) &&
        (this.internalNotes == null ? updateWithholidingTaxDocument.internalNotes == null : this.internalNotes.equals(updateWithholidingTaxDocument.internalNotes)) &&
        (this.showSignatureOrStamp == null ? updateWithholidingTaxDocument.showSignatureOrStamp == null : this.showSignatureOrStamp.equals(updateWithholidingTaxDocument.showSignatureOrStamp));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.companyName == null ? 0: this.companyName.hashCode());
    result = 31 * result + (this.companyNameEn == null ? 0: this.companyNameEn.hashCode());
    result = 31 * result + (this.companyAddress == null ? 0: this.companyAddress.hashCode());
    result = 31 * result + (this.companyAddressEn == null ? 0: this.companyAddressEn.hashCode());
    result = 31 * result + (this.companyTaxId == null ? 0: this.companyTaxId.hashCode());
    result = 31 * result + (this.companyBranch == null ? 0: this.companyBranch.hashCode());
    result = 31 * result + (this.companyBranchEn == null ? 0: this.companyBranchEn.hashCode());
    result = 31 * result + (this.companyPhone == null ? 0: this.companyPhone.hashCode());
    result = 31 * result + (this.companyMobile == null ? 0: this.companyMobile.hashCode());
    result = 31 * result + (this.companyFax == null ? 0: this.companyFax.hashCode());
    result = 31 * result + (this.companyWebsite == null ? 0: this.companyWebsite.hashCode());
    result = 31 * result + (this.contactCode == null ? 0: this.contactCode.hashCode());
    result = 31 * result + (this.contactName == null ? 0: this.contactName.hashCode());
    result = 31 * result + (this.contactAddress == null ? 0: this.contactAddress.hashCode());
    result = 31 * result + (this.contactTaxId == null ? 0: this.contactTaxId.hashCode());
    result = 31 * result + (this.contactBranch == null ? 0: this.contactBranch.hashCode());
    result = 31 * result + (this.contactPerson == null ? 0: this.contactPerson.hashCode());
    result = 31 * result + (this.contactEmail == null ? 0: this.contactEmail.hashCode());
    result = 31 * result + (this.contactNumber == null ? 0: this.contactNumber.hashCode());
    result = 31 * result + (this.contactZipCode == null ? 0: this.contactZipCode.hashCode());
    result = 31 * result + (this.contactGroup == null ? 0: this.contactGroup.hashCode());
    result = 31 * result + (this.publishedOn == null ? 0: this.publishedOn.hashCode());
    result = 31 * result + (this.entity == null ? 0: this.entity.hashCode());
    result = 31 * result + (this.textOther == null ? 0: this.textOther.hashCode());
    result = 31 * result + (this.withholdingTaxItems == null ? 0: this.withholdingTaxItems.hashCode());
    result = 31 * result + (this.total == null ? 0: this.total.hashCode());
    result = 31 * result + (this.totalTaxWithheld == null ? 0: this.totalTaxWithheld.hashCode());
    result = 31 * result + (this.taxPayment == null ? 0: this.taxPayment.hashCode());
    result = 31 * result + (this.taxPaymentOthers == null ? 0: this.taxPaymentOthers.hashCode());
    result = 31 * result + (this.providentFundNumber == null ? 0: this.providentFundNumber.hashCode());
    result = 31 * result + (this.providentFundAmount == null ? 0: this.providentFundAmount.hashCode());
    result = 31 * result + (this.socialSecurityAmount == null ? 0: this.socialSecurityAmount.hashCode());
    result = 31 * result + (this.remarks == null ? 0: this.remarks.hashCode());
    result = 31 * result + (this.internalNotes == null ? 0: this.internalNotes.hashCode());
    result = 31 * result + (this.showSignatureOrStamp == null ? 0: this.showSignatureOrStamp.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateWithholidingTaxDocument {\n");
    
    sb.append("  companyName: ").append(companyName).append("\n");
    sb.append("  companyNameEn: ").append(companyNameEn).append("\n");
    sb.append("  companyAddress: ").append(companyAddress).append("\n");
    sb.append("  companyAddressEn: ").append(companyAddressEn).append("\n");
    sb.append("  companyTaxId: ").append(companyTaxId).append("\n");
    sb.append("  companyBranch: ").append(companyBranch).append("\n");
    sb.append("  companyBranchEn: ").append(companyBranchEn).append("\n");
    sb.append("  companyPhone: ").append(companyPhone).append("\n");
    sb.append("  companyMobile: ").append(companyMobile).append("\n");
    sb.append("  companyFax: ").append(companyFax).append("\n");
    sb.append("  companyWebsite: ").append(companyWebsite).append("\n");
    sb.append("  contactCode: ").append(contactCode).append("\n");
    sb.append("  contactName: ").append(contactName).append("\n");
    sb.append("  contactAddress: ").append(contactAddress).append("\n");
    sb.append("  contactTaxId: ").append(contactTaxId).append("\n");
    sb.append("  contactBranch: ").append(contactBranch).append("\n");
    sb.append("  contactPerson: ").append(contactPerson).append("\n");
    sb.append("  contactEmail: ").append(contactEmail).append("\n");
    sb.append("  contactNumber: ").append(contactNumber).append("\n");
    sb.append("  contactZipCode: ").append(contactZipCode).append("\n");
    sb.append("  contactGroup: ").append(contactGroup).append("\n");
    sb.append("  publishedOn: ").append(publishedOn).append("\n");
    sb.append("  entity: ").append(entity).append("\n");
    sb.append("  textOther: ").append(textOther).append("\n");
    sb.append("  withholdingTaxItems: ").append(withholdingTaxItems).append("\n");
    sb.append("  total: ").append(total).append("\n");
    sb.append("  totalTaxWithheld: ").append(totalTaxWithheld).append("\n");
    sb.append("  taxPayment: ").append(taxPayment).append("\n");
    sb.append("  taxPaymentOthers: ").append(taxPaymentOthers).append("\n");
    sb.append("  providentFundNumber: ").append(providentFundNumber).append("\n");
    sb.append("  providentFundAmount: ").append(providentFundAmount).append("\n");
    sb.append("  socialSecurityAmount: ").append(socialSecurityAmount).append("\n");
    sb.append("  remarks: ").append(remarks).append("\n");
    sb.append("  internalNotes: ").append(internalNotes).append("\n");
    sb.append("  showSignatureOrStamp: ").append(showSignatureOrStamp).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
