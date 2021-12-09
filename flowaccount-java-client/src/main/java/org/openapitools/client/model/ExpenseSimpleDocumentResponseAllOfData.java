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
import org.openapitools.client.model.ExpenseSimpleProductItem;
import org.openapitools.client.model.SimpleDocumentResponseAllOfDataCompany;
import org.openapitools.client.model.SimpleDocumentResponseAllOfDataPayments;
import org.threeten.bp.LocalDate;

/**
 * ExpenseSimpleDocumentResponseAllOfData
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-06-19T11:31:57.605116+07:00[Asia/Bangkok]")
public class ExpenseSimpleDocumentResponseAllOfData {
  public static final String SERIALIZED_NAME_RECORD_ID = "recordId";
  @SerializedName(SERIALIZED_NAME_RECORD_ID)
  private Long recordId = 0l;

  public static final String SERIALIZED_NAME_DOCUMENT_ID = "documentId";
  @SerializedName(SERIALIZED_NAME_DOCUMENT_ID)
  private Long documentId = 0l;

  public static final String SERIALIZED_NAME_DOCUMENT_SERIAL = "documentSerial";
  @SerializedName(SERIALIZED_NAME_DOCUMENT_SERIAL)
  private String documentSerial;

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

  public static final String SERIALIZED_NAME_ITEMS = "items";
  @SerializedName(SERIALIZED_NAME_ITEMS)
  private List<ExpenseSimpleProductItem> items = null;

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

  public static final String SERIALIZED_NAME_PAYMENTS = "payments";
  @SerializedName(SERIALIZED_NAME_PAYMENTS)
  private SimpleDocumentResponseAllOfDataPayments payments;

  public static final String SERIALIZED_NAME_COMPANY = "company";
  @SerializedName(SERIALIZED_NAME_COMPANY)
  private SimpleDocumentResponseAllOfDataCompany company;

  public static final String SERIALIZED_NAME_STATUS = "status";
  @SerializedName(SERIALIZED_NAME_STATUS)
  private Integer status;

  public static final String SERIALIZED_NAME_STATUS_STRING = "statusString";
  @SerializedName(SERIALIZED_NAME_STATUS_STRING)
  private Integer statusString;

  public static final String SERIALIZED_NAME_DOCUMENT_TYPE = "documentType";
  @SerializedName(SERIALIZED_NAME_DOCUMENT_TYPE)
  private Integer documentType;

  public static final String SERIALIZED_NAME_ALLOW_DELETE = "allowDelete";
  @SerializedName(SERIALIZED_NAME_ALLOW_DELETE)
  private Boolean allowDelete;


  public ExpenseSimpleDocumentResponseAllOfData recordId(Long recordId) {
    
    this.recordId = recordId;
    return this;
  }

   /**
   * id ของเอกสาร
   * @return recordId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "id ของเอกสาร")

  public Long getRecordId() {
    return recordId;
  }


  public void setRecordId(Long recordId) {
    this.recordId = recordId;
  }


  public ExpenseSimpleDocumentResponseAllOfData documentId(Long documentId) {
    
    this.documentId = documentId;
    return this;
  }

   /**
   * id ของเอกสาร
   * @return documentId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "id ของเอกสาร")

  public Long getDocumentId() {
    return documentId;
  }


  public void setDocumentId(Long documentId) {
    this.documentId = documentId;
  }


  public ExpenseSimpleDocumentResponseAllOfData documentSerial(String documentSerial) {
    
    this.documentSerial = documentSerial;
    return this;
  }

   /**
   * เลขที่เอกสาร
   * @return documentSerial
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เลขที่เอกสาร")

  public String getDocumentSerial() {
    return documentSerial;
  }


  public void setDocumentSerial(String documentSerial) {
    this.documentSerial = documentSerial;
  }


  public ExpenseSimpleDocumentResponseAllOfData contactCode(String contactCode) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData contactName(String contactName) {
    
    this.contactName = contactName;
    return this;
  }

   /**
   * ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
   * @return contactName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า")

  public String getContactName() {
    return contactName;
  }


  public void setContactName(String contactName) {
    this.contactName = contactName;
  }


  public ExpenseSimpleDocumentResponseAllOfData contactAddress(String contactAddress) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData contactTaxId(String contactTaxId) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData contactBranch(String contactBranch) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData contactPerson(String contactPerson) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData contactEmail(String contactEmail) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData contactNumber(String contactNumber) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData contactZipCode(String contactZipCode) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData contactGroup(Integer contactGroup) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData publishedOn(LocalDate publishedOn) {
    
    this.publishedOn = publishedOn;
    return this;
  }

   /**
   * วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt;
   * @return publishedOn
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Wed Jan 01 07:00:00 ICT 2020", value = "วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>")

  public LocalDate getPublishedOn() {
    return publishedOn;
  }


  public void setPublishedOn(LocalDate publishedOn) {
    this.publishedOn = publishedOn;
  }


  public ExpenseSimpleDocumentResponseAllOfData creditType(Integer creditType) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData creditDays(Integer creditDays) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData dueDate(LocalDate dueDate) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData salesName(String salesName) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData projectName(String projectName) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData reference(String reference) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData isVatInclusive(Boolean isVatInclusive) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData items(List<ExpenseSimpleProductItem> items) {
    
    this.items = items;
    return this;
  }

  public ExpenseSimpleDocumentResponseAllOfData addItemsItem(ExpenseSimpleProductItem itemsItem) {
    if (this.items == null) {
      this.items = new ArrayList<ExpenseSimpleProductItem>();
    }
    this.items.add(itemsItem);
    return this;
  }

   /**
   * รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense
   * @return items
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense")

  public List<ExpenseSimpleProductItem> getItems() {
    return items;
  }


  public void setItems(List<ExpenseSimpleProductItem> items) {
    this.items = items;
  }


  public ExpenseSimpleDocumentResponseAllOfData subTotal(BigDecimal subTotal) {
    
    this.subTotal = subTotal;
    return this;
  }

   /**
   * มูลค่ารวมเป็นเงิน
   * @return subTotal
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "มูลค่ารวมเป็นเงิน")

  public BigDecimal getSubTotal() {
    return subTotal;
  }


  public void setSubTotal(BigDecimal subTotal) {
    this.subTotal = subTotal;
  }


  public ExpenseSimpleDocumentResponseAllOfData discountPercentage(Integer discountPercentage) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData discountAmount(BigDecimal discountAmount) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData totalAfterDiscount(BigDecimal totalAfterDiscount) {
    
    this.totalAfterDiscount = totalAfterDiscount;
    return this;
  }

   /**
   * มูลค่าหลังหักส่วนลด
   * @return totalAfterDiscount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "มูลค่าหลังหักส่วนลด")

  public BigDecimal getTotalAfterDiscount() {
    return totalAfterDiscount;
  }


  public void setTotalAfterDiscount(BigDecimal totalAfterDiscount) {
    this.totalAfterDiscount = totalAfterDiscount;
  }


  public ExpenseSimpleDocumentResponseAllOfData isVat(Boolean isVat) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData vatAmount(BigDecimal vatAmount) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData grandTotal(BigDecimal grandTotal) {
    
    this.grandTotal = grandTotal;
    return this;
  }

   /**
   * จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
   * @return grandTotal
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)")

  public BigDecimal getGrandTotal() {
    return grandTotal;
  }


  public void setGrandTotal(BigDecimal grandTotal) {
    this.grandTotal = grandTotal;
  }


  public ExpenseSimpleDocumentResponseAllOfData remarks(String remarks) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData internalNotes(String internalNotes) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData showSignatureOrStamp(Boolean showSignatureOrStamp) {
    
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


  public ExpenseSimpleDocumentResponseAllOfData payments(SimpleDocumentResponseAllOfDataPayments payments) {
    
    this.payments = payments;
    return this;
  }

   /**
   * Get payments
   * @return payments
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public SimpleDocumentResponseAllOfDataPayments getPayments() {
    return payments;
  }


  public void setPayments(SimpleDocumentResponseAllOfDataPayments payments) {
    this.payments = payments;
  }


  public ExpenseSimpleDocumentResponseAllOfData company(SimpleDocumentResponseAllOfDataCompany company) {
    
    this.company = company;
    return this;
  }

   /**
   * Get company
   * @return company
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public SimpleDocumentResponseAllOfDataCompany getCompany() {
    return company;
  }


  public void setCompany(SimpleDocumentResponseAllOfDataCompany company) {
    this.company = company;
  }


  public ExpenseSimpleDocumentResponseAllOfData status(Integer status) {
    
    this.status = status;
    return this;
  }

   /**
   * เลขสถานะเอกสารฉบับนี้
   * @return status
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เลขสถานะเอกสารฉบับนี้")

  public Integer getStatus() {
    return status;
  }


  public void setStatus(Integer status) {
    this.status = status;
  }


  public ExpenseSimpleDocumentResponseAllOfData statusString(Integer statusString) {
    
    this.statusString = statusString;
    return this;
  }

   /**
   * ชื่อสถานะเอกสารฉบับนี้
   * @return statusString
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ชื่อสถานะเอกสารฉบับนี้")

  public Integer getStatusString() {
    return statusString;
  }


  public void setStatusString(Integer statusString) {
    this.statusString = statusString;
  }


  public ExpenseSimpleDocumentResponseAllOfData documentType(Integer documentType) {
    
    this.documentType = documentType;
    return this;
  }

   /**
   * เลขประเภทเอกสารฉบับนี้
   * @return documentType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "เลขประเภทเอกสารฉบับนี้")

  public Integer getDocumentType() {
    return documentType;
  }


  public void setDocumentType(Integer documentType) {
    this.documentType = documentType;
  }


  public ExpenseSimpleDocumentResponseAllOfData allowDelete(Boolean allowDelete) {
    
    this.allowDelete = allowDelete;
    return this;
  }

   /**
   * สามารถลบเอกสาร :&lt;br&gt; true &#x3D; ลบได้ &lt;br&gt; false &#x3D; ลบไม่ได้
   * @return allowDelete
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "สามารถลบเอกสาร :<br> true = ลบได้ <br> false = ลบไม่ได้")

  public Boolean getAllowDelete() {
    return allowDelete;
  }


  public void setAllowDelete(Boolean allowDelete) {
    this.allowDelete = allowDelete;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ExpenseSimpleDocumentResponseAllOfData expenseSimpleDocumentResponseAllOfData = (ExpenseSimpleDocumentResponseAllOfData) o;
    return Objects.equals(this.recordId, expenseSimpleDocumentResponseAllOfData.recordId) &&
        Objects.equals(this.documentId, expenseSimpleDocumentResponseAllOfData.documentId) &&
        Objects.equals(this.documentSerial, expenseSimpleDocumentResponseAllOfData.documentSerial) &&
        Objects.equals(this.contactCode, expenseSimpleDocumentResponseAllOfData.contactCode) &&
        Objects.equals(this.contactName, expenseSimpleDocumentResponseAllOfData.contactName) &&
        Objects.equals(this.contactAddress, expenseSimpleDocumentResponseAllOfData.contactAddress) &&
        Objects.equals(this.contactTaxId, expenseSimpleDocumentResponseAllOfData.contactTaxId) &&
        Objects.equals(this.contactBranch, expenseSimpleDocumentResponseAllOfData.contactBranch) &&
        Objects.equals(this.contactPerson, expenseSimpleDocumentResponseAllOfData.contactPerson) &&
        Objects.equals(this.contactEmail, expenseSimpleDocumentResponseAllOfData.contactEmail) &&
        Objects.equals(this.contactNumber, expenseSimpleDocumentResponseAllOfData.contactNumber) &&
        Objects.equals(this.contactZipCode, expenseSimpleDocumentResponseAllOfData.contactZipCode) &&
        Objects.equals(this.contactGroup, expenseSimpleDocumentResponseAllOfData.contactGroup) &&
        Objects.equals(this.publishedOn, expenseSimpleDocumentResponseAllOfData.publishedOn) &&
        Objects.equals(this.creditType, expenseSimpleDocumentResponseAllOfData.creditType) &&
        Objects.equals(this.creditDays, expenseSimpleDocumentResponseAllOfData.creditDays) &&
        Objects.equals(this.dueDate, expenseSimpleDocumentResponseAllOfData.dueDate) &&
        Objects.equals(this.salesName, expenseSimpleDocumentResponseAllOfData.salesName) &&
        Objects.equals(this.projectName, expenseSimpleDocumentResponseAllOfData.projectName) &&
        Objects.equals(this.reference, expenseSimpleDocumentResponseAllOfData.reference) &&
        Objects.equals(this.isVatInclusive, expenseSimpleDocumentResponseAllOfData.isVatInclusive) &&
        Objects.equals(this.items, expenseSimpleDocumentResponseAllOfData.items) &&
        Objects.equals(this.subTotal, expenseSimpleDocumentResponseAllOfData.subTotal) &&
        Objects.equals(this.discountPercentage, expenseSimpleDocumentResponseAllOfData.discountPercentage) &&
        Objects.equals(this.discountAmount, expenseSimpleDocumentResponseAllOfData.discountAmount) &&
        Objects.equals(this.totalAfterDiscount, expenseSimpleDocumentResponseAllOfData.totalAfterDiscount) &&
        Objects.equals(this.isVat, expenseSimpleDocumentResponseAllOfData.isVat) &&
        Objects.equals(this.vatAmount, expenseSimpleDocumentResponseAllOfData.vatAmount) &&
        Objects.equals(this.grandTotal, expenseSimpleDocumentResponseAllOfData.grandTotal) &&
        Objects.equals(this.remarks, expenseSimpleDocumentResponseAllOfData.remarks) &&
        Objects.equals(this.internalNotes, expenseSimpleDocumentResponseAllOfData.internalNotes) &&
        Objects.equals(this.showSignatureOrStamp, expenseSimpleDocumentResponseAllOfData.showSignatureOrStamp) &&
        Objects.equals(this.payments, expenseSimpleDocumentResponseAllOfData.payments) &&
        Objects.equals(this.company, expenseSimpleDocumentResponseAllOfData.company) &&
        Objects.equals(this.status, expenseSimpleDocumentResponseAllOfData.status) &&
        Objects.equals(this.statusString, expenseSimpleDocumentResponseAllOfData.statusString) &&
        Objects.equals(this.documentType, expenseSimpleDocumentResponseAllOfData.documentType) &&
        Objects.equals(this.allowDelete, expenseSimpleDocumentResponseAllOfData.allowDelete);
  }

  @Override
  public int hashCode() {
    return Objects.hash(recordId, documentId, documentSerial, contactCode, contactName, contactAddress, contactTaxId, contactBranch, contactPerson, contactEmail, contactNumber, contactZipCode, contactGroup, publishedOn, creditType, creditDays, dueDate, salesName, projectName, reference, isVatInclusive, items, subTotal, discountPercentage, discountAmount, totalAfterDiscount, isVat, vatAmount, grandTotal, remarks, internalNotes, showSignatureOrStamp, payments, company, status, statusString, documentType, allowDelete);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ExpenseSimpleDocumentResponseAllOfData {\n");
    sb.append("    recordId: ").append(toIndentedString(recordId)).append("\n");
    sb.append("    documentId: ").append(toIndentedString(documentId)).append("\n");
    sb.append("    documentSerial: ").append(toIndentedString(documentSerial)).append("\n");
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
    sb.append("    items: ").append(toIndentedString(items)).append("\n");
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
    sb.append("    payments: ").append(toIndentedString(payments)).append("\n");
    sb.append("    company: ").append(toIndentedString(company)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    statusString: ").append(toIndentedString(statusString)).append("\n");
    sb.append("    documentType: ").append(toIndentedString(documentType)).append("\n");
    sb.append("    allowDelete: ").append(toIndentedString(allowDelete)).append("\n");
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
