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

/**
 * Contact
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-06-17T00:38:54.499089+07:00[Asia/Bangkok]")
public class Contact {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private Long id;

  public static final String SERIALIZED_NAME_CONTACT_GROUP = "contactGroup";
  @SerializedName(SERIALIZED_NAME_CONTACT_GROUP)
  private Long contactGroup = 3l;

  public static final String SERIALIZED_NAME_CONTACT_TYPE = "contactType";
  @SerializedName(SERIALIZED_NAME_CONTACT_TYPE)
  private Long contactType = 3l;

  public static final String SERIALIZED_NAME_CONTACT_NAME = "contactName";
  @SerializedName(SERIALIZED_NAME_CONTACT_NAME)
  private String contactName;

  public static final String SERIALIZED_NAME_CONTACT_ADDRESS = "contactAddress";
  @SerializedName(SERIALIZED_NAME_CONTACT_ADDRESS)
  private String contactAddress;

  public static final String SERIALIZED_NAME_CONTACT_ZIP_CODE = "contactZipCode";
  @SerializedName(SERIALIZED_NAME_CONTACT_ZIP_CODE)
  private String contactZipCode;

  public static final String SERIALIZED_NAME_CONTACT_TAX_ID = "contactTaxId";
  @SerializedName(SERIALIZED_NAME_CONTACT_TAX_ID)
  private Long contactTaxId;

  public static final String SERIALIZED_NAME_CONTACT_BRANCH_CODE = "contactBranchCode";
  @SerializedName(SERIALIZED_NAME_CONTACT_BRANCH_CODE)
  private String contactBranchCode;

  public static final String SERIALIZED_NAME_CONTACT_BRANCH = "contactBranch";
  @SerializedName(SERIALIZED_NAME_CONTACT_BRANCH)
  private String contactBranch = "สำนักงานใหญ่";

  public static final String SERIALIZED_NAME_CONTACT_PERSON = "contactPerson";
  @SerializedName(SERIALIZED_NAME_CONTACT_PERSON)
  private String contactPerson;

  public static final String SERIALIZED_NAME_CONTACT_EMAIL = "contactEmail";
  @SerializedName(SERIALIZED_NAME_CONTACT_EMAIL)
  private String contactEmail;

  public static final String SERIALIZED_NAME_CONTACT_MOBILE = "contactMobile";
  @SerializedName(SERIALIZED_NAME_CONTACT_MOBILE)
  private String contactMobile;

  public static final String SERIALIZED_NAME_CONTACT_BANK_ID = "contactBankId";
  @SerializedName(SERIALIZED_NAME_CONTACT_BANK_ID)
  private Long contactBankId = 0l;

  public static final String SERIALIZED_NAME_CONTACT_BANK_ACCOUNT_NUMBER = "contactBankAccountNumber";
  @SerializedName(SERIALIZED_NAME_CONTACT_BANK_ACCOUNT_NUMBER)
  private Long contactBankAccountNumber;

  public static final String SERIALIZED_NAME_CONTACT_BANK_BRANCH = "contactBankBranch";
  @SerializedName(SERIALIZED_NAME_CONTACT_BANK_BRANCH)
  private String contactBankBranch;

  public static final String SERIALIZED_NAME_CONTACT_BANK_ACCOUNT_TYPE = "contactBankAccountType";
  @SerializedName(SERIALIZED_NAME_CONTACT_BANK_ACCOUNT_TYPE)
  private Long contactBankAccountType = 1l;

  public static final String SERIALIZED_NAME_CONTACT_CREDIT_DAYS = "contactCreditDays";
  @SerializedName(SERIALIZED_NAME_CONTACT_CREDIT_DAYS)
  private Long contactCreditDays = 0l;

  public static final String SERIALIZED_NAME_CONTACT_OFFICE = "contactOffice";
  @SerializedName(SERIALIZED_NAME_CONTACT_OFFICE)
  private String contactOffice;

  public static final String SERIALIZED_NAME_CONTACT_FAX = "contactFax";
  @SerializedName(SERIALIZED_NAME_CONTACT_FAX)
  private String contactFax;

  public static final String SERIALIZED_NAME_CONTACT_WEBSITE = "contactWebsite";
  @SerializedName(SERIALIZED_NAME_CONTACT_WEBSITE)
  private String contactWebsite;

  public static final String SERIALIZED_NAME_CONATACT_SHIPPING_ADDRESS = "conatactShippingAddress";
  @SerializedName(SERIALIZED_NAME_CONATACT_SHIPPING_ADDRESS)
  private String conatactShippingAddress;

  public static final String SERIALIZED_NAME_CONTACT_NOTE = "contactNote";
  @SerializedName(SERIALIZED_NAME_CONTACT_NOTE)
  private String contactNote;


  public Contact id(Long id) {
    
    this.id = id;
    return this;
  }

   /**
   * เลข id Contact
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เลข id Contact")

  public Long getId() {
    return id;
  }


  public void setId(Long id) {
    this.id = id;
  }


  public Contact contactGroup(Long contactGroup) {
    
    this.contactGroup = contactGroup;
    return this;
  }

   /**
   * ประเภทผู้ติดต่อ: 1 &#x3D; บุคคลธรรมดา / 3 &#x3D; นิติบุคคล
   * @return contactGroup
  **/
  @ApiModelProperty(required = true, value = "ประเภทผู้ติดต่อ: 1 = บุคคลธรรมดา / 3 = นิติบุคคล")

  public Long getContactGroup() {
    return contactGroup;
  }


  public void setContactGroup(Long contactGroup) {
    this.contactGroup = contactGroup;
  }


  public Contact contactType(Long contactType) {
    
    this.contactType = contactType;
    return this;
  }

   /**
   * ประเภท: 3 &#x3D; ลูกค้า / 5 &#x3D; ผู้จำหน่าย / 7 &#x3D; ผู้จำหน่ายและลูกค้า
   * @return contactType
  **/
  @ApiModelProperty(required = true, value = "ประเภท: 3 = ลูกค้า / 5 = ผู้จำหน่าย / 7 = ผู้จำหน่ายและลูกค้า")

  public Long getContactType() {
    return contactType;
  }


  public void setContactType(Long contactType) {
    this.contactType = contactType;
  }


  public Contact contactName(String contactName) {
    
    this.contactName = contactName;
    return this;
  }

   /**
   * ชื่อผู้ธุรกิจ หรือ ชื่อลูกค้า หรือ ชื่อผู้จำหน่าย
   * @return contactName
  **/
  @ApiModelProperty(required = true, value = "ชื่อผู้ธุรกิจ หรือ ชื่อลูกค้า หรือ ชื่อผู้จำหน่าย")

  public String getContactName() {
    return contactName;
  }


  public void setContactName(String contactName) {
    this.contactName = contactName;
  }


  public Contact contactAddress(String contactAddress) {
    
    this.contactAddress = contactAddress;
    return this;
  }

   /**
   * ที่อยู่ผู้ติดต่อ
   * @return contactAddress
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ที่อยู่ผู้ติดต่อ")

  public String getContactAddress() {
    return contactAddress;
  }


  public void setContactAddress(String contactAddress) {
    this.contactAddress = contactAddress;
  }


  public Contact contactZipCode(String contactZipCode) {
    
    this.contactZipCode = contactZipCode;
    return this;
  }

   /**
   * รหัสไปรษณีย์ติดต่อ &lt;ex&gt;Example: 10140 &lt;/ex&gt;
   * @return contactZipCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "รหัสไปรษณีย์ติดต่อ <ex>Example: 10140 </ex>")

  public String getContactZipCode() {
    return contactZipCode;
  }


  public void setContactZipCode(String contactZipCode) {
    this.contactZipCode = contactZipCode;
  }


  public Contact contactTaxId(Long contactTaxId) {
    
    this.contactTaxId = contactTaxId;
    return this;
  }

   /**
   * เลขประจำตัวผู้เสียภาษี 13 หลัก ​&lt;br&gt;&lt;ex&gt;Example: 1234567890123&lt;/ex&gt;
   * @return contactTaxId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1234567890123", value = "เลขประจำตัวผู้เสียภาษี 13 หลัก ​<br><ex>Example: 1234567890123</ex>")

  public Long getContactTaxId() {
    return contactTaxId;
  }


  public void setContactTaxId(Long contactTaxId) {
    this.contactTaxId = contactTaxId;
  }


  public Contact contactBranchCode(String contactBranchCode) {
    
    this.contactBranchCode = contactBranchCode;
    return this;
  }

   /**
   * รหัสสาขา
   * @return contactBranchCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "รหัสสาขา")

  public String getContactBranchCode() {
    return contactBranchCode;
  }


  public void setContactBranchCode(String contactBranchCode) {
    this.contactBranchCode = contactBranchCode;
  }


  public Contact contactBranch(String contactBranch) {
    
    this.contactBranch = contactBranch;
    return this;
  }

   /**
   * ชื่อสาขา
   * @return contactBranch
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ชื่อสาขา")

  public String getContactBranch() {
    return contactBranch;
  }


  public void setContactBranch(String contactBranch) {
    this.contactBranch = contactBranch;
  }


  public Contact contactPerson(String contactPerson) {
    
    this.contactPerson = contactPerson;
    return this;
  }

   /**
   * ชื่อผู้ติดต่อ
   * @return contactPerson
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ชื่อผู้ติดต่อ")

  public String getContactPerson() {
    return contactPerson;
  }


  public void setContactPerson(String contactPerson) {
    this.contactPerson = contactPerson;
  }


  public Contact contactEmail(String contactEmail) {
    
    this.contactEmail = contactEmail;
    return this;
  }

   /**
   * อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt;
   * @return contactEmail
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "contact@email.com", value = "อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>")

  public String getContactEmail() {
    return contactEmail;
  }


  public void setContactEmail(String contactEmail) {
    this.contactEmail = contactEmail;
  }


  public Contact contactMobile(String contactMobile) {
    
    this.contactMobile = contactMobile;
    return this;
  }

   /**
   * เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt;
   * @return contactMobile
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "099-999-9999", value = "เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>")

  public String getContactMobile() {
    return contactMobile;
  }


  public void setContactMobile(String contactMobile) {
    this.contactMobile = contactMobile;
  }


  public Contact contactBankId(Long contactBankId) {
    
    this.contactBankId = contactBankId;
    return this;
  }

   /**
   * รหัสธนาคาร &lt;br&gt; 1 &#x3D; ธนาคารกรุงเทพ &lt;br&gt; 2 &#x3D; ธนาคารกสิกรไทย &lt;br&gt; 3 &#x3D; ธนาคารกรุงไทย &lt;br&gt; 4 &#x3D; ธนาคารทหารไทย &lt;br&gt; 5 &#x3D; ธนาคารไทยพาณิชย์ &lt;br&gt; 6 &#x3D; ธนาคารสแตนดาร์ดชาร์เตอร์ด &lt;br&gt; 7 &#x3D; ธนาคารซีไอเอ็มบี ไทย &lt;br&gt; 8 &#x3D; ธนาคารยูโอบี &lt;br&gt; 10 &#x3D; ธนาคารกรุงศรีอยุธยา &lt;br&gt; 11 &#x3D; ธนาคารออมสิน &lt;br&gt; 12 &#x3D; ธนาคารธนชาต &lt;br&gt; 13 &#x3D; ธนาคารแลนด์ แอนด์ เฮ้าส์ &lt;br&gt; 14 &#x3D; ธนาคารเกียรตินาคิน &lt;br&gt; 15 &#x3D; ธนาคารซิตี้แบงก์ &lt;br&gt; 16 &#x3D; ธนาคารทิสโก้ &lt;br&gt; 53 &#x3D; ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร &lt;br&gt; 54 &#x3D; ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย &lt;br&gt; 55 &#x3D; ธนาคารอาคารสงเคราะห์ &lt;br&gt; 56 &#x3D; ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย &lt;br&gt; 57 &#x3D; ธนาคารอิสลามแห่งประเทศไทย &lt;br&gt; 58 &#x3D; ธนาคารแห่งประเทศจีน (ไทย) &lt;br&gt; 59 &#x3D; ธนาคารไอซีบีซี (ไทย) &lt;br&gt; 60 &#x3D; ธนาคารเมกะ สากลพาณิชย์ &lt;br&gt; 61 &#x3D; ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น &lt;br&gt; 62 &#x3D; ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) &lt;br&gt; 63 &#x3D; ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น &lt;br&gt; 64 &#x3D; ธนาคารไทยเครดิต เพื่อรายย่อย 
   * @return contactBankId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "รหัสธนาคาร <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย ")

  public Long getContactBankId() {
    return contactBankId;
  }


  public void setContactBankId(Long contactBankId) {
    this.contactBankId = contactBankId;
  }


  public Contact contactBankAccountNumber(Long contactBankAccountNumber) {
    
    this.contactBankAccountNumber = contactBankAccountNumber;
    return this;
  }

   /**
   * เลขที่บัญชีธนาคาร &lt;br&gt; &lt;ex&gt;Example: 1111111111&lt;/ex&gt;
   * @return contactBankAccountNumber
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1111111111", value = "เลขที่บัญชีธนาคาร <br> <ex>Example: 1111111111</ex>")

  public Long getContactBankAccountNumber() {
    return contactBankAccountNumber;
  }


  public void setContactBankAccountNumber(Long contactBankAccountNumber) {
    this.contactBankAccountNumber = contactBankAccountNumber;
  }


  public Contact contactBankBranch(String contactBankBranch) {
    
    this.contactBankBranch = contactBankBranch;
    return this;
  }

   /**
   * สาขาธนาคาร &lt;br&gt; &lt;ex&gt;Example: บางรัก&lt;/ex&gt;
   * @return contactBankBranch
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "บางรัก", value = "สาขาธนาคาร <br> <ex>Example: บางรัก</ex>")

  public String getContactBankBranch() {
    return contactBankBranch;
  }


  public void setContactBankBranch(String contactBankBranch) {
    this.contactBankBranch = contactBankBranch;
  }


  public Contact contactBankAccountType(Long contactBankAccountType) {
    
    this.contactBankAccountType = contactBankAccountType;
    return this;
  }

   /**
   * ประเภทบัญชีธนาคาร: &lt;br&gt; 1 &#x3D; บัญชีออมทรัพย์ &lt;br&gt; 3 &#x3D; บัญชีกระแสรายวัน
   * @return contactBankAccountType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "ประเภทบัญชีธนาคาร: <br> 1 = บัญชีออมทรัพย์ <br> 3 = บัญชีกระแสรายวัน")

  public Long getContactBankAccountType() {
    return contactBankAccountType;
  }


  public void setContactBankAccountType(Long contactBankAccountType) {
    this.contactBankAccountType = contactBankAccountType;
  }


  public Contact contactCreditDays(Long contactCreditDays) {
    
    this.contactCreditDays = contactCreditDays;
    return this;
  }

   /**
   * เครดิต (วัน) &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt;
   * @return contactCreditDays
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เครดิต (วัน) <br> <ex>Example: 30</ex>")

  public Long getContactCreditDays() {
    return contactCreditDays;
  }


  public void setContactCreditDays(Long contactCreditDays) {
    this.contactCreditDays = contactCreditDays;
  }


  public Contact contactOffice(String contactOffice) {
    
    this.contactOffice = contactOffice;
    return this;
  }

   /**
   * เบอร์โทรศัพท์สำนักงาน &lt;br&gt; &lt;ex&gt;Example: 02-999-9999&lt;/ex&gt;
   * @return contactOffice
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "02-999-9999", value = "เบอร์โทรศัพท์สำนักงาน <br> <ex>Example: 02-999-9999</ex>")

  public String getContactOffice() {
    return contactOffice;
  }


  public void setContactOffice(String contactOffice) {
    this.contactOffice = contactOffice;
  }


  public Contact contactFax(String contactFax) {
    
    this.contactFax = contactFax;
    return this;
  }

   /**
   * เบอร์โทรสาร &lt;br&gt; &lt;ex&gt;Example: 02-888-8888&lt;/ex&gt;
   * @return contactFax
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "02-888-8888", value = "เบอร์โทรสาร <br> <ex>Example: 02-888-8888</ex>")

  public String getContactFax() {
    return contactFax;
  }


  public void setContactFax(String contactFax) {
    this.contactFax = contactFax;
  }


  public Contact contactWebsite(String contactWebsite) {
    
    this.contactWebsite = contactWebsite;
    return this;
  }

   /**
   * เว็บไซต์ ผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Eample: www.flowaccount.com&lt;/ex&gt;
   * @return contactWebsite
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "www.flowaccount.com", value = "เว็บไซต์ ผู้ติดต่อ <br> <ex>Eample: www.flowaccount.com</ex>")

  public String getContactWebsite() {
    return contactWebsite;
  }


  public void setContactWebsite(String contactWebsite) {
    this.contactWebsite = contactWebsite;
  }


  public Contact conatactShippingAddress(String conatactShippingAddress) {
    
    this.conatactShippingAddress = conatactShippingAddress;
    return this;
  }

   /**
   * ที่อยู่สำหรับจัดส่ง
   * @return conatactShippingAddress
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ที่อยู่สำหรับจัดส่ง")

  public String getConatactShippingAddress() {
    return conatactShippingAddress;
  }


  public void setConatactShippingAddress(String conatactShippingAddress) {
    this.conatactShippingAddress = conatactShippingAddress;
  }


  public Contact contactNote(String contactNote) {
    
    this.contactNote = contactNote;
    return this;
  }

   /**
   * โน๊ต
   * @return contactNote
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "โน๊ต")

  public String getContactNote() {
    return contactNote;
  }


  public void setContactNote(String contactNote) {
    this.contactNote = contactNote;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Contact contact = (Contact) o;
    return Objects.equals(this.id, contact.id) &&
        Objects.equals(this.contactGroup, contact.contactGroup) &&
        Objects.equals(this.contactType, contact.contactType) &&
        Objects.equals(this.contactName, contact.contactName) &&
        Objects.equals(this.contactAddress, contact.contactAddress) &&
        Objects.equals(this.contactZipCode, contact.contactZipCode) &&
        Objects.equals(this.contactTaxId, contact.contactTaxId) &&
        Objects.equals(this.contactBranchCode, contact.contactBranchCode) &&
        Objects.equals(this.contactBranch, contact.contactBranch) &&
        Objects.equals(this.contactPerson, contact.contactPerson) &&
        Objects.equals(this.contactEmail, contact.contactEmail) &&
        Objects.equals(this.contactMobile, contact.contactMobile) &&
        Objects.equals(this.contactBankId, contact.contactBankId) &&
        Objects.equals(this.contactBankAccountNumber, contact.contactBankAccountNumber) &&
        Objects.equals(this.contactBankBranch, contact.contactBankBranch) &&
        Objects.equals(this.contactBankAccountType, contact.contactBankAccountType) &&
        Objects.equals(this.contactCreditDays, contact.contactCreditDays) &&
        Objects.equals(this.contactOffice, contact.contactOffice) &&
        Objects.equals(this.contactFax, contact.contactFax) &&
        Objects.equals(this.contactWebsite, contact.contactWebsite) &&
        Objects.equals(this.conatactShippingAddress, contact.conatactShippingAddress) &&
        Objects.equals(this.contactNote, contact.contactNote);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, contactGroup, contactType, contactName, contactAddress, contactZipCode, contactTaxId, contactBranchCode, contactBranch, contactPerson, contactEmail, contactMobile, contactBankId, contactBankAccountNumber, contactBankBranch, contactBankAccountType, contactCreditDays, contactOffice, contactFax, contactWebsite, conatactShippingAddress, contactNote);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Contact {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    contactGroup: ").append(toIndentedString(contactGroup)).append("\n");
    sb.append("    contactType: ").append(toIndentedString(contactType)).append("\n");
    sb.append("    contactName: ").append(toIndentedString(contactName)).append("\n");
    sb.append("    contactAddress: ").append(toIndentedString(contactAddress)).append("\n");
    sb.append("    contactZipCode: ").append(toIndentedString(contactZipCode)).append("\n");
    sb.append("    contactTaxId: ").append(toIndentedString(contactTaxId)).append("\n");
    sb.append("    contactBranchCode: ").append(toIndentedString(contactBranchCode)).append("\n");
    sb.append("    contactBranch: ").append(toIndentedString(contactBranch)).append("\n");
    sb.append("    contactPerson: ").append(toIndentedString(contactPerson)).append("\n");
    sb.append("    contactEmail: ").append(toIndentedString(contactEmail)).append("\n");
    sb.append("    contactMobile: ").append(toIndentedString(contactMobile)).append("\n");
    sb.append("    contactBankId: ").append(toIndentedString(contactBankId)).append("\n");
    sb.append("    contactBankAccountNumber: ").append(toIndentedString(contactBankAccountNumber)).append("\n");
    sb.append("    contactBankBranch: ").append(toIndentedString(contactBankBranch)).append("\n");
    sb.append("    contactBankAccountType: ").append(toIndentedString(contactBankAccountType)).append("\n");
    sb.append("    contactCreditDays: ").append(toIndentedString(contactCreditDays)).append("\n");
    sb.append("    contactOffice: ").append(toIndentedString(contactOffice)).append("\n");
    sb.append("    contactFax: ").append(toIndentedString(contactFax)).append("\n");
    sb.append("    contactWebsite: ").append(toIndentedString(contactWebsite)).append("\n");
    sb.append("    conatactShippingAddress: ").append(toIndentedString(conatactShippingAddress)).append("\n");
    sb.append("    contactNote: ").append(toIndentedString(contactNote)).append("\n");
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

