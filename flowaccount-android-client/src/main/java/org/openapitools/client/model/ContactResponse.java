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

import org.openapitools.client.model.Contact;
import org.openapitools.client.model.ContactResponseAllOf;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class ContactResponse {
  
  @SerializedName("id")
  private Long id = null;
  @SerializedName("contactGroup")
  private Long contactGroup = 3;
  @SerializedName("contactType")
  private Long contactType = 3;
  @SerializedName("contactName")
  private String contactName = null;
  @SerializedName("contactAddress")
  private String contactAddress = null;
  @SerializedName("contactZipCode")
  private String contactZipCode = null;
  @SerializedName("contactTaxId")
  private Long contactTaxId = null;
  @SerializedName("contactBranchCode")
  private String contactBranchCode = null;
  @SerializedName("contactBranch")
  private String contactBranch = สำนักงานใหญ่;
  @SerializedName("contactPerson")
  private String contactPerson = null;
  @SerializedName("contactEmail")
  private String contactEmail = null;
  @SerializedName("contactMobile")
  private String contactMobile = null;
  @SerializedName("contactBankId")
  private Long contactBankId = 0;
  @SerializedName("contactBankAccountNumber")
  private Long contactBankAccountNumber = null;
  @SerializedName("contactBankBranch")
  private String contactBankBranch = null;
  @SerializedName("contactBankAccountType")
  private Long contactBankAccountType = 1;
  @SerializedName("contactCreditDays")
  private Long contactCreditDays = 0;
  @SerializedName("contactOffice")
  private String contactOffice = null;
  @SerializedName("contactFax")
  private String contactFax = null;
  @SerializedName("contactWebsite")
  private String contactWebsite = null;
  @SerializedName("conatactShippingAddress")
  private String conatactShippingAddress = null;
  @SerializedName("contactNote")
  private String contactNote = null;

  /**
   * เลข id Contact
   **/
  @ApiModelProperty(value = "เลข id Contact")
  public Long getId() {
    return id;
  }
  public void setId(Long id) {
    this.id = id;
  }

  /**
   * ประเภทผู้ติดต่อ: 1 = บุคคลธรรมดา / 3 = นิติบุคคล
   **/
  @ApiModelProperty(required = true, value = "ประเภทผู้ติดต่อ: 1 = บุคคลธรรมดา / 3 = นิติบุคคล")
  public Long getContactGroup() {
    return contactGroup;
  }
  public void setContactGroup(Long contactGroup) {
    this.contactGroup = contactGroup;
  }

  /**
   * ประเภท: 3 = ลูกค้า / 5 = ผู้จำหน่าย / 7 = ผู้จำหน่ายและลูกค้า
   **/
  @ApiModelProperty(required = true, value = "ประเภท: 3 = ลูกค้า / 5 = ผู้จำหน่าย / 7 = ผู้จำหน่ายและลูกค้า")
  public Long getContactType() {
    return contactType;
  }
  public void setContactType(Long contactType) {
    this.contactType = contactType;
  }

  /**
   * ชื่อผู้ธุรกิจ หรือ ชื่อลูกค้า หรือ ชื่อผู้จำหน่าย
   **/
  @ApiModelProperty(required = true, value = "ชื่อผู้ธุรกิจ หรือ ชื่อลูกค้า หรือ ชื่อผู้จำหน่าย")
  public String getContactName() {
    return contactName;
  }
  public void setContactName(String contactName) {
    this.contactName = contactName;
  }

  /**
   * ที่อยู่ผู้ติดต่อ
   **/
  @ApiModelProperty(value = "ที่อยู่ผู้ติดต่อ")
  public String getContactAddress() {
    return contactAddress;
  }
  public void setContactAddress(String contactAddress) {
    this.contactAddress = contactAddress;
  }

  /**
   * รหัสไปรษณีย์ติดต่อ <ex>Example: 10140 </ex>
   **/
  @ApiModelProperty(value = "รหัสไปรษณีย์ติดต่อ <ex>Example: 10140 </ex>")
  public String getContactZipCode() {
    return contactZipCode;
  }
  public void setContactZipCode(String contactZipCode) {
    this.contactZipCode = contactZipCode;
  }

  /**
   * เลขประจำตัวผู้เสียภาษี 13 หลัก ​<br><ex>Example: 1234567890123</ex>
   **/
  @ApiModelProperty(value = "เลขประจำตัวผู้เสียภาษี 13 หลัก ​<br><ex>Example: 1234567890123</ex>")
  public Long getContactTaxId() {
    return contactTaxId;
  }
  public void setContactTaxId(Long contactTaxId) {
    this.contactTaxId = contactTaxId;
  }

  /**
   * รหัสสาขา
   **/
  @ApiModelProperty(value = "รหัสสาขา")
  public String getContactBranchCode() {
    return contactBranchCode;
  }
  public void setContactBranchCode(String contactBranchCode) {
    this.contactBranchCode = contactBranchCode;
  }

  /**
   * ชื่อสาขา
   **/
  @ApiModelProperty(value = "ชื่อสาขา")
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
  public String getContactMobile() {
    return contactMobile;
  }
  public void setContactMobile(String contactMobile) {
    this.contactMobile = contactMobile;
  }

  /**
   * รหัสธนาคาร <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
   **/
  @ApiModelProperty(value = "รหัสธนาคาร <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย ")
  public Long getContactBankId() {
    return contactBankId;
  }
  public void setContactBankId(Long contactBankId) {
    this.contactBankId = contactBankId;
  }

  /**
   * เลขที่บัญชีธนาคาร <br> <ex>Example: 1111111111</ex>
   **/
  @ApiModelProperty(value = "เลขที่บัญชีธนาคาร <br> <ex>Example: 1111111111</ex>")
  public Long getContactBankAccountNumber() {
    return contactBankAccountNumber;
  }
  public void setContactBankAccountNumber(Long contactBankAccountNumber) {
    this.contactBankAccountNumber = contactBankAccountNumber;
  }

  /**
   * สาขาธนาคาร <br> <ex>Example: บางรัก</ex>
   **/
  @ApiModelProperty(value = "สาขาธนาคาร <br> <ex>Example: บางรัก</ex>")
  public String getContactBankBranch() {
    return contactBankBranch;
  }
  public void setContactBankBranch(String contactBankBranch) {
    this.contactBankBranch = contactBankBranch;
  }

  /**
   * ประเภทบัญชีธนาคาร: <br> 1 = บัญชีออมทรัพย์ <br> 3 = บัญชีกระแสรายวัน
   **/
  @ApiModelProperty(value = "ประเภทบัญชีธนาคาร: <br> 1 = บัญชีออมทรัพย์ <br> 3 = บัญชีกระแสรายวัน")
  public Long getContactBankAccountType() {
    return contactBankAccountType;
  }
  public void setContactBankAccountType(Long contactBankAccountType) {
    this.contactBankAccountType = contactBankAccountType;
  }

  /**
   * เครดิต (วัน) <br> <ex>Example: 30</ex>
   **/
  @ApiModelProperty(value = "เครดิต (วัน) <br> <ex>Example: 30</ex>")
  public Long getContactCreditDays() {
    return contactCreditDays;
  }
  public void setContactCreditDays(Long contactCreditDays) {
    this.contactCreditDays = contactCreditDays;
  }

  /**
   * เบอร์โทรศัพท์สำนักงาน <br> <ex>Example: 02-999-9999</ex>
   **/
  @ApiModelProperty(value = "เบอร์โทรศัพท์สำนักงาน <br> <ex>Example: 02-999-9999</ex>")
  public String getContactOffice() {
    return contactOffice;
  }
  public void setContactOffice(String contactOffice) {
    this.contactOffice = contactOffice;
  }

  /**
   * เบอร์โทรสาร <br> <ex>Example: 02-888-8888</ex>
   **/
  @ApiModelProperty(value = "เบอร์โทรสาร <br> <ex>Example: 02-888-8888</ex>")
  public String getContactFax() {
    return contactFax;
  }
  public void setContactFax(String contactFax) {
    this.contactFax = contactFax;
  }

  /**
   * เว็บไซต์ ผู้ติดต่อ <br> <ex>Eample: www.flowaccount.com</ex>
   **/
  @ApiModelProperty(value = "เว็บไซต์ ผู้ติดต่อ <br> <ex>Eample: www.flowaccount.com</ex>")
  public String getContactWebsite() {
    return contactWebsite;
  }
  public void setContactWebsite(String contactWebsite) {
    this.contactWebsite = contactWebsite;
  }

  /**
   * ที่อยู่สำหรับจัดส่ง
   **/
  @ApiModelProperty(value = "ที่อยู่สำหรับจัดส่ง")
  public String getConatactShippingAddress() {
    return conatactShippingAddress;
  }
  public void setConatactShippingAddress(String conatactShippingAddress) {
    this.conatactShippingAddress = conatactShippingAddress;
  }

  /**
   * โน๊ต
   **/
  @ApiModelProperty(value = "โน๊ต")
  public String getContactNote() {
    return contactNote;
  }
  public void setContactNote(String contactNote) {
    this.contactNote = contactNote;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ContactResponse contactResponse = (ContactResponse) o;
    return (this.id == null ? contactResponse.id == null : this.id.equals(contactResponse.id)) &&
        (this.contactGroup == null ? contactResponse.contactGroup == null : this.contactGroup.equals(contactResponse.contactGroup)) &&
        (this.contactType == null ? contactResponse.contactType == null : this.contactType.equals(contactResponse.contactType)) &&
        (this.contactName == null ? contactResponse.contactName == null : this.contactName.equals(contactResponse.contactName)) &&
        (this.contactAddress == null ? contactResponse.contactAddress == null : this.contactAddress.equals(contactResponse.contactAddress)) &&
        (this.contactZipCode == null ? contactResponse.contactZipCode == null : this.contactZipCode.equals(contactResponse.contactZipCode)) &&
        (this.contactTaxId == null ? contactResponse.contactTaxId == null : this.contactTaxId.equals(contactResponse.contactTaxId)) &&
        (this.contactBranchCode == null ? contactResponse.contactBranchCode == null : this.contactBranchCode.equals(contactResponse.contactBranchCode)) &&
        (this.contactBranch == null ? contactResponse.contactBranch == null : this.contactBranch.equals(contactResponse.contactBranch)) &&
        (this.contactPerson == null ? contactResponse.contactPerson == null : this.contactPerson.equals(contactResponse.contactPerson)) &&
        (this.contactEmail == null ? contactResponse.contactEmail == null : this.contactEmail.equals(contactResponse.contactEmail)) &&
        (this.contactMobile == null ? contactResponse.contactMobile == null : this.contactMobile.equals(contactResponse.contactMobile)) &&
        (this.contactBankId == null ? contactResponse.contactBankId == null : this.contactBankId.equals(contactResponse.contactBankId)) &&
        (this.contactBankAccountNumber == null ? contactResponse.contactBankAccountNumber == null : this.contactBankAccountNumber.equals(contactResponse.contactBankAccountNumber)) &&
        (this.contactBankBranch == null ? contactResponse.contactBankBranch == null : this.contactBankBranch.equals(contactResponse.contactBankBranch)) &&
        (this.contactBankAccountType == null ? contactResponse.contactBankAccountType == null : this.contactBankAccountType.equals(contactResponse.contactBankAccountType)) &&
        (this.contactCreditDays == null ? contactResponse.contactCreditDays == null : this.contactCreditDays.equals(contactResponse.contactCreditDays)) &&
        (this.contactOffice == null ? contactResponse.contactOffice == null : this.contactOffice.equals(contactResponse.contactOffice)) &&
        (this.contactFax == null ? contactResponse.contactFax == null : this.contactFax.equals(contactResponse.contactFax)) &&
        (this.contactWebsite == null ? contactResponse.contactWebsite == null : this.contactWebsite.equals(contactResponse.contactWebsite)) &&
        (this.conatactShippingAddress == null ? contactResponse.conatactShippingAddress == null : this.conatactShippingAddress.equals(contactResponse.conatactShippingAddress)) &&
        (this.contactNote == null ? contactResponse.contactNote == null : this.contactNote.equals(contactResponse.contactNote));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.id == null ? 0: this.id.hashCode());
    result = 31 * result + (this.contactGroup == null ? 0: this.contactGroup.hashCode());
    result = 31 * result + (this.contactType == null ? 0: this.contactType.hashCode());
    result = 31 * result + (this.contactName == null ? 0: this.contactName.hashCode());
    result = 31 * result + (this.contactAddress == null ? 0: this.contactAddress.hashCode());
    result = 31 * result + (this.contactZipCode == null ? 0: this.contactZipCode.hashCode());
    result = 31 * result + (this.contactTaxId == null ? 0: this.contactTaxId.hashCode());
    result = 31 * result + (this.contactBranchCode == null ? 0: this.contactBranchCode.hashCode());
    result = 31 * result + (this.contactBranch == null ? 0: this.contactBranch.hashCode());
    result = 31 * result + (this.contactPerson == null ? 0: this.contactPerson.hashCode());
    result = 31 * result + (this.contactEmail == null ? 0: this.contactEmail.hashCode());
    result = 31 * result + (this.contactMobile == null ? 0: this.contactMobile.hashCode());
    result = 31 * result + (this.contactBankId == null ? 0: this.contactBankId.hashCode());
    result = 31 * result + (this.contactBankAccountNumber == null ? 0: this.contactBankAccountNumber.hashCode());
    result = 31 * result + (this.contactBankBranch == null ? 0: this.contactBankBranch.hashCode());
    result = 31 * result + (this.contactBankAccountType == null ? 0: this.contactBankAccountType.hashCode());
    result = 31 * result + (this.contactCreditDays == null ? 0: this.contactCreditDays.hashCode());
    result = 31 * result + (this.contactOffice == null ? 0: this.contactOffice.hashCode());
    result = 31 * result + (this.contactFax == null ? 0: this.contactFax.hashCode());
    result = 31 * result + (this.contactWebsite == null ? 0: this.contactWebsite.hashCode());
    result = 31 * result + (this.conatactShippingAddress == null ? 0: this.conatactShippingAddress.hashCode());
    result = 31 * result + (this.contactNote == null ? 0: this.contactNote.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class ContactResponse {\n");
    
    sb.append("  id: ").append(id).append("\n");
    sb.append("  contactGroup: ").append(contactGroup).append("\n");
    sb.append("  contactType: ").append(contactType).append("\n");
    sb.append("  contactName: ").append(contactName).append("\n");
    sb.append("  contactAddress: ").append(contactAddress).append("\n");
    sb.append("  contactZipCode: ").append(contactZipCode).append("\n");
    sb.append("  contactTaxId: ").append(contactTaxId).append("\n");
    sb.append("  contactBranchCode: ").append(contactBranchCode).append("\n");
    sb.append("  contactBranch: ").append(contactBranch).append("\n");
    sb.append("  contactPerson: ").append(contactPerson).append("\n");
    sb.append("  contactEmail: ").append(contactEmail).append("\n");
    sb.append("  contactMobile: ").append(contactMobile).append("\n");
    sb.append("  contactBankId: ").append(contactBankId).append("\n");
    sb.append("  contactBankAccountNumber: ").append(contactBankAccountNumber).append("\n");
    sb.append("  contactBankBranch: ").append(contactBankBranch).append("\n");
    sb.append("  contactBankAccountType: ").append(contactBankAccountType).append("\n");
    sb.append("  contactCreditDays: ").append(contactCreditDays).append("\n");
    sb.append("  contactOffice: ").append(contactOffice).append("\n");
    sb.append("  contactFax: ").append(contactFax).append("\n");
    sb.append("  contactWebsite: ").append(contactWebsite).append("\n");
    sb.append("  conatactShippingAddress: ").append(conatactShippingAddress).append("\n");
    sb.append("  contactNote: ").append(contactNote).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
