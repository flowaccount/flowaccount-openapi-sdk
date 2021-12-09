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
 * UpdateExpenseDocument
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-06-19T11:31:57.605116+07:00[Asia/Bangkok]")

public class UpdateExpenseDocument {
  public static final String SERIALIZED_NAME_COMPANY_NAME = "companyName";
  @SerializedName(SERIALIZED_NAME_COMPANY_NAME)
  private String companyName;

  public static final String SERIALIZED_NAME_COMPANY_NAME_EN = "companyNameEn";
  @SerializedName(SERIALIZED_NAME_COMPANY_NAME_EN)
  private String companyNameEn;

  public static final String SERIALIZED_NAME_COMPANY_ADDRESS = "companyAddress";
  @SerializedName(SERIALIZED_NAME_COMPANY_ADDRESS)
  private String companyAddress;

  public static final String SERIALIZED_NAME_COMPANY_ADDRESS_EN = "companyAddressEn";
  @SerializedName(SERIALIZED_NAME_COMPANY_ADDRESS_EN)
  private String companyAddressEn;

  public static final String SERIALIZED_NAME_COMPANY_TAX_ID = "companyTaxId";
  @SerializedName(SERIALIZED_NAME_COMPANY_TAX_ID)
  private String companyTaxId;

  public static final String SERIALIZED_NAME_COMPANY_BRANCH = "companyBranch";
  @SerializedName(SERIALIZED_NAME_COMPANY_BRANCH)
  private String companyBranch;

  public static final String SERIALIZED_NAME_COMPANY_BRANCH_EN = "companyBranchEn";
  @SerializedName(SERIALIZED_NAME_COMPANY_BRANCH_EN)
  private String companyBranchEn;

  public static final String SERIALIZED_NAME_COMPANY_PHONE = "companyPhone";
  @SerializedName(SERIALIZED_NAME_COMPANY_PHONE)
  private String companyPhone;

  public static final String SERIALIZED_NAME_COMPANY_MOBILE = "companyMobile";
  @SerializedName(SERIALIZED_NAME_COMPANY_MOBILE)
  private String companyMobile;

  public static final String SERIALIZED_NAME_COMPANY_FAX = "companyFax";
  @SerializedName(SERIALIZED_NAME_COMPANY_FAX)
  private String companyFax;

  public static final String SERIALIZED_NAME_COMPANY_WEBSITE = "companyWebsite";
  @SerializedName(SERIALIZED_NAME_COMPANY_WEBSITE)
  private String companyWebsite;

  public static final String SERIALIZED_NAME_CONTACT_CODE = "contactCode";
  @SerializedName(SERIALIZED_NAME_CONTACT_CODE)
  private String contactCode;

  public static final String SERIALIZED_NAME_CONTACT_NAME = "contactName";
  @SerializedName(SERIALIZED_NAME_CONTACT_NAME)
  private String contactName;

  public static final String SERIALIZED_NAME_CONTACT_ADDRESS = "contactAddress";
  @SerializedName(SERIALIZED_NAME_CONTACT_ADDRESS)
  private String contactAddress;

  public static final String SERIALIZED_NAME_CONTACT_TAX_ID = "contactTaxId";
  @SerializedName(SERIALIZED_NAME_CONTACT_TAX_ID)
  private String contactTaxId;

  public static final String SERIALIZED_NAME_CONTACT_BRANCH = "contactBranch";
  @SerializedName(SERIALIZED_NAME_CONTACT_BRANCH)
  private String contactBranch;

  public static final String SERIALIZED_NAME_CONTACT_PERSON = "contactPerson";
  @SerializedName(SERIALIZED_NAME_CONTACT_PERSON)
  private String contactPerson;

  public static final String SERIALIZED_NAME_CONTACT_EMAIL = "contactEmail";
  @SerializedName(SERIALIZED_NAME_CONTACT_EMAIL)
  private String contactEmail;

  public static final String SERIALIZED_NAME_CONTACT_NUMBER = "contactNumber";
  @SerializedName(SERIALIZED_NAME_CONTACT_NUMBER)
  private String contactNumber;

  public static final String SERIALIZED_NAME_CONTACT_ZIP_CODE = "contactZipCode";
  @SerializedName(SERIALIZED_NAME_CONTACT_ZIP_CODE)
  private String contactZipCode;

  public static final String SERIALIZED_NAME_CONTACT_GROUP = "contactGroup";
  @SerializedName(SERIALIZED_NAME_CONTACT_GROUP)
  private Integer contactGroup = 1;

  public static final String SERIALIZED_NAME_PUBLISHED_ON = "publishedOn";
  @SerializedName(SERIALIZED_NAME_PUBLISHED_ON)
  private LocalDate publishedOn;

  public static final String SERIALIZED_NAME_CREDIT_TYPE = "creditType";
  @SerializedName(SERIALIZED_NAME_CREDIT_TYPE)
  private Integer creditType = 1;

  public static final String SERIALIZED_NAME_CREDIT_DAYS = "creditDays";
  @SerializedName(SERIALIZED_NAME_CREDIT_DAYS)
  private Integer creditDays = 0;

  public static final String SERIALIZED_NAME_DUE_DATE = "dueDate";
  @SerializedName(SERIALIZED_NAME_DUE_DATE)
  private LocalDate dueDate;

  public static final String SERIALIZED_NAME_SALES_NAME = "salesName";
  @SerializedName(SERIALIZED_NAME_SALES_NAME)
  private String salesName = "อีเมล หรือ ชื่อผู้สร้างเอกสาร";

  public static final String SERIALIZED_NAME_PROJECT_NAME = "projectName";
  @SerializedName(SERIALIZED_NAME_PROJECT_NAME)
  private String projectName;

  public static final String SERIALIZED_NAME_REFERENCE = "reference";
  @SerializedName(SERIALIZED_NAME_REFERENCE)
  private String reference;

  public static final String SERIALIZED_NAME_IS_VAT_INCLUSIVE = "isVatInclusive";
  @SerializedName(SERIALIZED_NAME_IS_VAT_INCLUSIVE)
  private Boolean isVatInclusive = false;

  public static final String SERIALIZED_NAME_SUB_TOTAL = "subTotal";
  @SerializedName(SERIALIZED_NAME_SUB_TOTAL)
  private BigDecimal subTotal = 0d;

  public static final String SERIALIZED_NAME_DISCOUNT_PERCENTAGE = "discountPercentage";
  @SerializedName(SERIALIZED_NAME_DISCOUNT_PERCENTAGE)
  private Integer discountPercentage = 0;

  public static final String SERIALIZED_NAME_DISCOUNT_AMOUNT = "discountAmount";
  @SerializedName(SERIALIZED_NAME_DISCOUNT_AMOUNT)
  private BigDecimal discountAmount = 0d;

  public static final String SERIALIZED_NAME_TOTAL_AFTER_DISCOUNT = "totalAfterDiscount";
  @SerializedName(SERIALIZED_NAME_TOTAL_AFTER_DISCOUNT)
  private BigDecimal totalAfterDiscount;

  public static final String SERIALIZED_NAME_IS_VAT = "isVat";
  @SerializedName(SERIALIZED_NAME_IS_VAT)
  private Boolean isVat = false;

  public static final String SERIALIZED_NAME_VAT_AMOUNT = "vatAmount";
  @SerializedName(SERIALIZED_NAME_VAT_AMOUNT)
  private BigDecimal vatAmount;

  public static final String SERIALIZED_NAME_GRAND_TOTAL = "grandTotal";
  @SerializedName(SERIALIZED_NAME_GRAND_TOTAL)
  private BigDecimal grandTotal;

  public static final String SERIALIZED_NAME_REMARKS = "remarks";
  @SerializedName(SERIALIZED_NAME_REMARKS)
  private String remarks;

  public static final String SERIALIZED_NAME_INTERNAL_NOTES = "internalNotes";
  @SerializedName(SERIALIZED_NAME_INTERNAL_NOTES)
  private String internalNotes;

  public static final String SERIALIZED_NAME_SHOW_SIGNATURE_OR_STAMP = "showSignatureOrStamp";
  @SerializedName(SERIALIZED_NAME_SHOW_SIGNATURE_OR_STAMP)
  private Boolean showSignatureOrStamp = true;

  public static final String SERIALIZED_NAME_EXPENSE_STRUCTURE_TYPE = "expenseStructureType";
  @SerializedName(SERIALIZED_NAME_EXPENSE_STRUCTURE_TYPE)
  protected String expenseStructureType;

  public UpdateExpenseDocument() {
    this.expenseStructureType = this.getClass().getSimpleName();
  }

  public UpdateExpenseDocument companyName(String companyName) {
    
    this.companyName = companyName;
    return this;
  }

   /**
   * ชื่อบริษัท
   * @return companyName
  **/
  @ApiModelProperty(required = true, value = "ชื่อบริษัท")

  public String getCompanyName() {
    return companyName;
  }


  public void setCompanyName(String companyName) {
    this.companyName = companyName;
  }


  public UpdateExpenseDocument companyNameEn(String companyNameEn) {
    
    this.companyNameEn = companyNameEn;
    return this;
  }

   /**
   * ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
   * @return companyNameEn
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)")

  public String getCompanyNameEn() {
    return companyNameEn;
  }


  public void setCompanyNameEn(String companyNameEn) {
    this.companyNameEn = companyNameEn;
  }


  public UpdateExpenseDocument companyAddress(String companyAddress) {
    
    this.companyAddress = companyAddress;
    return this;
  }

   /**
   * ที่อยู่บริษัท
   * @return companyAddress
  **/
  @ApiModelProperty(required = true, value = "ที่อยู่บริษัท")

  public String getCompanyAddress() {
    return companyAddress;
  }


  public void setCompanyAddress(String companyAddress) {
    this.companyAddress = companyAddress;
  }


  public UpdateExpenseDocument companyAddressEn(String companyAddressEn) {
    
    this.companyAddressEn = companyAddressEn;
    return this;
  }

   /**
   * ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
   * @return companyAddressEn
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)")

  public String getCompanyAddressEn() {
    return companyAddressEn;
  }


  public void setCompanyAddressEn(String companyAddressEn) {
    this.companyAddressEn = companyAddressEn;
  }


  public UpdateExpenseDocument companyTaxId(String companyTaxId) {
    
    this.companyTaxId = companyTaxId;
    return this;
  }

   /**
   * เลขประจำตัวผู้เสียภาษี บริษัท &lt;br&gt;&lt;ex&gt;Example: 0105558096348&lt;/ex&gt;
   * @return companyTaxId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>")

  public String getCompanyTaxId() {
    return companyTaxId;
  }


  public void setCompanyTaxId(String companyTaxId) {
    this.companyTaxId = companyTaxId;
  }


  public UpdateExpenseDocument companyBranch(String companyBranch) {
    
    this.companyBranch = companyBranch;
    return this;
  }

   /**
   * ชื่อ และ รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: สำนักงานใหญ่ 00000&lt;/ex&gt;
   * @return companyBranch
  **/
  @ApiModelProperty(required = true, value = "ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex>")

  public String getCompanyBranch() {
    return companyBranch;
  }


  public void setCompanyBranch(String companyBranch) {
    this.companyBranch = companyBranch;
  }


  public UpdateExpenseDocument companyBranchEn(String companyBranchEn) {
    
    this.companyBranchEn = companyBranchEn;
    return this;
  }

   /**
   * ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) &lt;br&gt;&lt;ex&gt;Example: Head Office 00000&lt;/ex&gt;
   * @return companyBranchEn
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) <br><ex>Example: Head Office 00000</ex>")

  public String getCompanyBranchEn() {
    return companyBranchEn;
  }


  public void setCompanyBranchEn(String companyBranchEn) {
    this.companyBranchEn = companyBranchEn;
  }


  public UpdateExpenseDocument companyPhone(String companyPhone) {
    
    this.companyPhone = companyPhone;
    return this;
  }

   /**
   * เบอร์โทรสำนักงาน &lt;br&gt;&lt;ex&gt;Example: 02-999-9999&lt;/ex&gt;
   * @return companyPhone
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>")

  public String getCompanyPhone() {
    return companyPhone;
  }


  public void setCompanyPhone(String companyPhone) {
    this.companyPhone = companyPhone;
  }


  public UpdateExpenseDocument companyMobile(String companyMobile) {
    
    this.companyMobile = companyMobile;
    return this;
  }

   /**
   * เบอร์โทรศัพท์มือถือ &lt;br&gt;&lt;ex&gt;Example: 099-999-9999&lt;/ex&gt;
   * @return companyMobile
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>")

  public String getCompanyMobile() {
    return companyMobile;
  }


  public void setCompanyMobile(String companyMobile) {
    this.companyMobile = companyMobile;
  }


  public UpdateExpenseDocument companyFax(String companyFax) {
    
    this.companyFax = companyFax;
    return this;
  }

   /**
   * เบอร์โทรสาร &lt;br&gt;&lt;ex&gt;Example: 02-999-9999 ต่อ 1&lt;/ex&gt;
   * @return companyFax
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>")

  public String getCompanyFax() {
    return companyFax;
  }


  public void setCompanyFax(String companyFax) {
    this.companyFax = companyFax;
  }


  public UpdateExpenseDocument companyWebsite(String companyWebsite) {
    
    this.companyWebsite = companyWebsite;
    return this;
  }

   /**
   * เว็บไซต์ &lt;br&gt;&lt;ex&gt;Example: www.flowaccount.com&lt;/ex&gt;
   * @return companyWebsite
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>")

  public String getCompanyWebsite() {
    return companyWebsite;
  }


  public void setCompanyWebsite(String companyWebsite) {
    this.companyWebsite = companyWebsite;
  }


  public UpdateExpenseDocument contactCode(String contactCode) {
    
    this.contactCode = contactCode;
    return this;
  }

   /**
   * รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
   * @return contactCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า")

  public String getContactCode() {
    return contactCode;
  }


  public void setContactCode(String contactCode) {
    this.contactCode = contactCode;
  }


  public UpdateExpenseDocument contactName(String contactName) {
    
    this.contactName = contactName;
    return this;
  }

   /**
   * ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
   * @return contactName
  **/
  @ApiModelProperty(required = true, value = "ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า")

  public String getContactName() {
    return contactName;
  }


  public void setContactName(String contactName) {
    this.contactName = contactName;
  }


  public UpdateExpenseDocument contactAddress(String contactAddress) {
    
    this.contactAddress = contactAddress;
    return this;
  }

   /**
   * ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
   * @return contactAddress
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า")

  public String getContactAddress() {
    return contactAddress;
  }


  public void setContactAddress(String contactAddress) {
    this.contactAddress = contactAddress;
  }


  public UpdateExpenseDocument contactTaxId(String contactTaxId) {
    
    this.contactTaxId = contactTaxId;
    return this;
  }

   /**
   * เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt;
   * @return contactTaxId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1234567890123", value = "เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>")

  public String getContactTaxId() {
    return contactTaxId;
  }


  public void setContactTaxId(String contactTaxId) {
    this.contactTaxId = contactTaxId;
  }


  public UpdateExpenseDocument contactBranch(String contactBranch) {
    
    this.contactBranch = contactBranch;
    return this;
  }

   /**
   * สำนักงาน/สาขา
   * @return contactBranch
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "สำนักงาน/สาขา")

  public String getContactBranch() {
    return contactBranch;
  }


  public void setContactBranch(String contactBranch) {
    this.contactBranch = contactBranch;
  }


  public UpdateExpenseDocument contactPerson(String contactPerson) {
    
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


  public UpdateExpenseDocument contactEmail(String contactEmail) {
    
    this.contactEmail = contactEmail;
    return this;
  }

   /**
   * อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: supplier@email.com&lt;/ex&gt;
   * @return contactEmail
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "supplier@email.com", value = "อีเมลผู้ติดต่อ <br> <ex>Example: supplier@email.com</ex>")

  public String getContactEmail() {
    return contactEmail;
  }


  public void setContactEmail(String contactEmail) {
    this.contactEmail = contactEmail;
  }


  public UpdateExpenseDocument contactNumber(String contactNumber) {
    
    this.contactNumber = contactNumber;
    return this;
  }

   /**
   * เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt;
   * @return contactNumber
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "099-999-9999", value = "เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>")

  public String getContactNumber() {
    return contactNumber;
  }


  public void setContactNumber(String contactNumber) {
    this.contactNumber = contactNumber;
  }


  public UpdateExpenseDocument contactZipCode(String contactZipCode) {
    
    this.contactZipCode = contactZipCode;
    return this;
  }

   /**
   * รหัสไปรษณีย์ติดต่อ
   * @return contactZipCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "รหัสไปรษณีย์ติดต่อ")

  public String getContactZipCode() {
    return contactZipCode;
  }


  public void setContactZipCode(String contactZipCode) {
    this.contactZipCode = contactZipCode;
  }


  public UpdateExpenseDocument contactGroup(Integer contactGroup) {
    
    this.contactGroup = contactGroup;
    return this;
  }

   /**
   * ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล
   * @return contactGroup
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล")

  public Integer getContactGroup() {
    return contactGroup;
  }


  public void setContactGroup(Integer contactGroup) {
    this.contactGroup = contactGroup;
  }


  public UpdateExpenseDocument publishedOn(LocalDate publishedOn) {
    
    this.publishedOn = publishedOn;
    return this;
  }

   /**
   * วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt;
   * @return publishedOn
  **/
  @ApiModelProperty(example = "Wed Jan 01 07:00:00 ICT 2020", required = true, value = "วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>")

  public LocalDate getPublishedOn() {
    return publishedOn;
  }


  public void setPublishedOn(LocalDate publishedOn) {
    this.publishedOn = publishedOn;
  }


  public UpdateExpenseDocument creditType(Integer creditType) {
    
    this.creditType = creditType;
    return this;
  }

   /**
   * รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด)
   * @return creditType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด)")

  public Integer getCreditType() {
    return creditType;
  }


  public void setCreditType(Integer creditType) {
    this.creditType = creditType;
  }


  public UpdateExpenseDocument creditDays(Integer creditDays) {
    
    this.creditDays = creditDays;
    return this;
  }

   /**
   * จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt;
   * @return creditDays
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "30", value = "จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex>")

  public Integer getCreditDays() {
    return creditDays;
  }


  public void setCreditDays(Integer creditDays) {
    this.creditDays = creditDays;
  }


  public UpdateExpenseDocument dueDate(LocalDate dueDate) {
    
    this.dueDate = dueDate;
    return this;
  }

   /**
   * วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt;
   * @return dueDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Wed Jan 01 07:00:00 ICT 2020", value = "วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>")

  public LocalDate getDueDate() {
    return dueDate;
  }


  public void setDueDate(LocalDate dueDate) {
    this.dueDate = dueDate;
  }


  public UpdateExpenseDocument salesName(String salesName) {
    
    this.salesName = salesName;
    return this;
  }

   /**
   * ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt;
   * @return salesName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "พนักงาน ขายหน้าร้าน", value = "ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex>")

  public String getSalesName() {
    return salesName;
  }


  public void setSalesName(String salesName) {
    this.salesName = salesName;
  }


  public UpdateExpenseDocument projectName(String projectName) {
    
    this.projectName = projectName;
    return this;
  }

   /**
   * ชื่อโปรเจค
   * @return projectName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ชื่อโปรเจค")

  public String getProjectName() {
    return projectName;
  }


  public void setProjectName(String projectName) {
    this.projectName = projectName;
  }


  public UpdateExpenseDocument reference(String reference) {
    
    this.reference = reference;
    return this;
  }

   /**
   * เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt;
   * @return reference
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "INV2020010001", value = "เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex>")

  public String getReference() {
    return reference;
  }


  public void setReference(String reference) {
    this.reference = reference;
  }


  public UpdateExpenseDocument isVatInclusive(Boolean isVatInclusive) {
    
    this.isVatInclusive = isVatInclusive;
    return this;
  }

   /**
   * มูลค่าเอกสารรวมภาษีแล้วหรือไม่
   * @return isVatInclusive
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "มูลค่าเอกสารรวมภาษีแล้วหรือไม่")

  public Boolean getIsVatInclusive() {
    return isVatInclusive;
  }


  public void setIsVatInclusive(Boolean isVatInclusive) {
    this.isVatInclusive = isVatInclusive;
  }


  public UpdateExpenseDocument subTotal(BigDecimal subTotal) {
    
    this.subTotal = subTotal;
    return this;
  }

   /**
   * มูลค่ารวมเป็นเงิน
   * @return subTotal
  **/
  @ApiModelProperty(required = true, value = "มูลค่ารวมเป็นเงิน")

  public BigDecimal getSubTotal() {
    return subTotal;
  }


  public void setSubTotal(BigDecimal subTotal) {
    this.subTotal = subTotal;
  }


  public UpdateExpenseDocument discountPercentage(Integer discountPercentage) {
    
    this.discountPercentage = discountPercentage;
    return this;
  }

   /**
   * มูลค่าส่วนลดเป็นเปอร์เซ็นต์
   * @return discountPercentage
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "มูลค่าส่วนลดเป็นเปอร์เซ็นต์")

  public Integer getDiscountPercentage() {
    return discountPercentage;
  }


  public void setDiscountPercentage(Integer discountPercentage) {
    this.discountPercentage = discountPercentage;
  }


  public UpdateExpenseDocument discountAmount(BigDecimal discountAmount) {
    
    this.discountAmount = discountAmount;
    return this;
  }

   /**
   * มูลค่าส่วนลดเป็นจำนวน (บาท)
   * @return discountAmount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "มูลค่าส่วนลดเป็นจำนวน (บาท)")

  public BigDecimal getDiscountAmount() {
    return discountAmount;
  }


  public void setDiscountAmount(BigDecimal discountAmount) {
    this.discountAmount = discountAmount;
  }


  public UpdateExpenseDocument totalAfterDiscount(BigDecimal totalAfterDiscount) {
    
    this.totalAfterDiscount = totalAfterDiscount;
    return this;
  }

   /**
   * มูลค่าหลังหักส่วนลด
   * @return totalAfterDiscount
  **/
  @ApiModelProperty(required = true, value = "มูลค่าหลังหักส่วนลด")

  public BigDecimal getTotalAfterDiscount() {
    return totalAfterDiscount;
  }


  public void setTotalAfterDiscount(BigDecimal totalAfterDiscount) {
    this.totalAfterDiscount = totalAfterDiscount;
  }


  public UpdateExpenseDocument isVat(Boolean isVat) {
    
    this.isVat = isVat;
    return this;
  }

   /**
   * มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7%
   * @return isVat
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7%")

  public Boolean getIsVat() {
    return isVat;
  }


  public void setIsVat(Boolean isVat) {
    this.isVat = isVat;
  }


  public UpdateExpenseDocument vatAmount(BigDecimal vatAmount) {
    
    this.vatAmount = vatAmount;
    return this;
  }

   /**
   * ภาษีมูลค่าเพิ่ม
   * @return vatAmount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ภาษีมูลค่าเพิ่ม")

  public BigDecimal getVatAmount() {
    return vatAmount;
  }


  public void setVatAmount(BigDecimal vatAmount) {
    this.vatAmount = vatAmount;
  }


  public UpdateExpenseDocument grandTotal(BigDecimal grandTotal) {
    
    this.grandTotal = grandTotal;
    return this;
  }

   /**
   * จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
   * @return grandTotal
  **/
  @ApiModelProperty(required = true, value = "จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)")

  public BigDecimal getGrandTotal() {
    return grandTotal;
  }


  public void setGrandTotal(BigDecimal grandTotal) {
    this.grandTotal = grandTotal;
  }


  public UpdateExpenseDocument remarks(String remarks) {
    
    this.remarks = remarks;
    return this;
  }

   /**
   * หมายเหตุเอกสาร
   * @return remarks
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "หมายเหตุเอกสาร")

  public String getRemarks() {
    return remarks;
  }


  public void setRemarks(String remarks) {
    this.remarks = remarks;
  }


  public UpdateExpenseDocument internalNotes(String internalNotes) {
    
    this.internalNotes = internalNotes;
    return this;
  }

   /**
   * โน๊ตภายในบริษัท
   * @return internalNotes
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "โน๊ตภายในบริษัท")

  public String getInternalNotes() {
    return internalNotes;
  }


  public void setInternalNotes(String internalNotes) {
    this.internalNotes = internalNotes;
  }


  public UpdateExpenseDocument showSignatureOrStamp(Boolean showSignatureOrStamp) {
    
    this.showSignatureOrStamp = showSignatureOrStamp;
    return this;
  }

   /**
   * ลายเซ็นอิเล็กทรอนิกส์และตรายาง
   * @return showSignatureOrStamp
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ลายเซ็นอิเล็กทรอนิกส์และตรายาง")

  public Boolean getShowSignatureOrStamp() {
    return showSignatureOrStamp;
  }


  public void setShowSignatureOrStamp(Boolean showSignatureOrStamp) {
    this.showSignatureOrStamp = showSignatureOrStamp;
  }


  public UpdateExpenseDocument expenseStructureType(String expenseStructureType) {
    
    this.expenseStructureType = expenseStructureType;
    return this;
  }

   /**
   * Get expenseStructureType
   * @return expenseStructureType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getExpenseStructureType() {
    return expenseStructureType;
  }


  public void setExpenseStructureType(String expenseStructureType) {
    this.expenseStructureType = expenseStructureType;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateExpenseDocument updateExpenseDocument = (UpdateExpenseDocument) o;
    return Objects.equals(this.companyName, updateExpenseDocument.companyName) &&
        Objects.equals(this.companyNameEn, updateExpenseDocument.companyNameEn) &&
        Objects.equals(this.companyAddress, updateExpenseDocument.companyAddress) &&
        Objects.equals(this.companyAddressEn, updateExpenseDocument.companyAddressEn) &&
        Objects.equals(this.companyTaxId, updateExpenseDocument.companyTaxId) &&
        Objects.equals(this.companyBranch, updateExpenseDocument.companyBranch) &&
        Objects.equals(this.companyBranchEn, updateExpenseDocument.companyBranchEn) &&
        Objects.equals(this.companyPhone, updateExpenseDocument.companyPhone) &&
        Objects.equals(this.companyMobile, updateExpenseDocument.companyMobile) &&
        Objects.equals(this.companyFax, updateExpenseDocument.companyFax) &&
        Objects.equals(this.companyWebsite, updateExpenseDocument.companyWebsite) &&
        Objects.equals(this.contactCode, updateExpenseDocument.contactCode) &&
        Objects.equals(this.contactName, updateExpenseDocument.contactName) &&
        Objects.equals(this.contactAddress, updateExpenseDocument.contactAddress) &&
        Objects.equals(this.contactTaxId, updateExpenseDocument.contactTaxId) &&
        Objects.equals(this.contactBranch, updateExpenseDocument.contactBranch) &&
        Objects.equals(this.contactPerson, updateExpenseDocument.contactPerson) &&
        Objects.equals(this.contactEmail, updateExpenseDocument.contactEmail) &&
        Objects.equals(this.contactNumber, updateExpenseDocument.contactNumber) &&
        Objects.equals(this.contactZipCode, updateExpenseDocument.contactZipCode) &&
        Objects.equals(this.contactGroup, updateExpenseDocument.contactGroup) &&
        Objects.equals(this.publishedOn, updateExpenseDocument.publishedOn) &&
        Objects.equals(this.creditType, updateExpenseDocument.creditType) &&
        Objects.equals(this.creditDays, updateExpenseDocument.creditDays) &&
        Objects.equals(this.dueDate, updateExpenseDocument.dueDate) &&
        Objects.equals(this.salesName, updateExpenseDocument.salesName) &&
        Objects.equals(this.projectName, updateExpenseDocument.projectName) &&
        Objects.equals(this.reference, updateExpenseDocument.reference) &&
        Objects.equals(this.isVatInclusive, updateExpenseDocument.isVatInclusive) &&
        Objects.equals(this.subTotal, updateExpenseDocument.subTotal) &&
        Objects.equals(this.discountPercentage, updateExpenseDocument.discountPercentage) &&
        Objects.equals(this.discountAmount, updateExpenseDocument.discountAmount) &&
        Objects.equals(this.totalAfterDiscount, updateExpenseDocument.totalAfterDiscount) &&
        Objects.equals(this.isVat, updateExpenseDocument.isVat) &&
        Objects.equals(this.vatAmount, updateExpenseDocument.vatAmount) &&
        Objects.equals(this.grandTotal, updateExpenseDocument.grandTotal) &&
        Objects.equals(this.remarks, updateExpenseDocument.remarks) &&
        Objects.equals(this.internalNotes, updateExpenseDocument.internalNotes) &&
        Objects.equals(this.showSignatureOrStamp, updateExpenseDocument.showSignatureOrStamp) &&
        Objects.equals(this.expenseStructureType, updateExpenseDocument.expenseStructureType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(companyName, companyNameEn, companyAddress, companyAddressEn, companyTaxId, companyBranch, companyBranchEn, companyPhone, companyMobile, companyFax, companyWebsite, contactCode, contactName, contactAddress, contactTaxId, contactBranch, contactPerson, contactEmail, contactNumber, contactZipCode, contactGroup, publishedOn, creditType, creditDays, dueDate, salesName, projectName, reference, isVatInclusive, subTotal, discountPercentage, discountAmount, totalAfterDiscount, isVat, vatAmount, grandTotal, remarks, internalNotes, showSignatureOrStamp, expenseStructureType);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateExpenseDocument {\n");
    sb.append("    companyName: ").append(toIndentedString(companyName)).append("\n");
    sb.append("    companyNameEn: ").append(toIndentedString(companyNameEn)).append("\n");
    sb.append("    companyAddress: ").append(toIndentedString(companyAddress)).append("\n");
    sb.append("    companyAddressEn: ").append(toIndentedString(companyAddressEn)).append("\n");
    sb.append("    companyTaxId: ").append(toIndentedString(companyTaxId)).append("\n");
    sb.append("    companyBranch: ").append(toIndentedString(companyBranch)).append("\n");
    sb.append("    companyBranchEn: ").append(toIndentedString(companyBranchEn)).append("\n");
    sb.append("    companyPhone: ").append(toIndentedString(companyPhone)).append("\n");
    sb.append("    companyMobile: ").append(toIndentedString(companyMobile)).append("\n");
    sb.append("    companyFax: ").append(toIndentedString(companyFax)).append("\n");
    sb.append("    companyWebsite: ").append(toIndentedString(companyWebsite)).append("\n");
    sb.append("    contactCode: ").append(toIndentedString(contactCode)).append("\n");
    sb.append("    contactName: ").append(toIndentedString(contactName)).append("\n");
    sb.append("    contactAddress: ").append(toIndentedString(contactAddress)).append("\n");
    sb.append("    contactTaxId: ").append(toIndentedString(contactTaxId)).append("\n");
    sb.append("    contactBranch: ").append(toIndentedString(contactBranch)).append("\n");
    sb.append("    contactPerson: ").append(toIndentedString(contactPerson)).append("\n");
    sb.append("    contactEmail: ").append(toIndentedString(contactEmail)).append("\n");
    sb.append("    contactNumber: ").append(toIndentedString(contactNumber)).append("\n");
    sb.append("    contactZipCode: ").append(toIndentedString(contactZipCode)).append("\n");
    sb.append("    contactGroup: ").append(toIndentedString(contactGroup)).append("\n");
    sb.append("    publishedOn: ").append(toIndentedString(publishedOn)).append("\n");
    sb.append("    creditType: ").append(toIndentedString(creditType)).append("\n");
    sb.append("    creditDays: ").append(toIndentedString(creditDays)).append("\n");
    sb.append("    dueDate: ").append(toIndentedString(dueDate)).append("\n");
    sb.append("    salesName: ").append(toIndentedString(salesName)).append("\n");
    sb.append("    projectName: ").append(toIndentedString(projectName)).append("\n");
    sb.append("    reference: ").append(toIndentedString(reference)).append("\n");
    sb.append("    isVatInclusive: ").append(toIndentedString(isVatInclusive)).append("\n");
    sb.append("    subTotal: ").append(toIndentedString(subTotal)).append("\n");
    sb.append("    discountPercentage: ").append(toIndentedString(discountPercentage)).append("\n");
    sb.append("    discountAmount: ").append(toIndentedString(discountAmount)).append("\n");
    sb.append("    totalAfterDiscount: ").append(toIndentedString(totalAfterDiscount)).append("\n");
    sb.append("    isVat: ").append(toIndentedString(isVat)).append("\n");
    sb.append("    vatAmount: ").append(toIndentedString(vatAmount)).append("\n");
    sb.append("    grandTotal: ").append(toIndentedString(grandTotal)).append("\n");
    sb.append("    remarks: ").append(toIndentedString(remarks)).append("\n");
    sb.append("    internalNotes: ").append(toIndentedString(internalNotes)).append("\n");
    sb.append("    showSignatureOrStamp: ").append(toIndentedString(showSignatureOrStamp)).append("\n");
    sb.append("    expenseStructureType: ").append(toIndentedString(expenseStructureType)).append("\n");
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
