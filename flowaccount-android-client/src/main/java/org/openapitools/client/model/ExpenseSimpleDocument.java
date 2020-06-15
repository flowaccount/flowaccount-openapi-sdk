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
import org.openapitools.client.model.ExpenseDocument;
import org.openapitools.client.model.ExpenseSimpleDocumentAllOf;
import org.openapitools.client.model.ExpenseSimpleProductItem;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class ExpenseSimpleDocument extends ExpenseDocument {
  
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
  @SerializedName("creditType")
  private Integer creditType = 1;
  @SerializedName("creditDays")
  private Integer creditDays = 0;
  @SerializedName("dueDate")
  private Date dueDate = null;
  @SerializedName("salesName")
  private String salesName = อีเมล หรือ ชื่อผู้สร้างเอกสาร;
  @SerializedName("projectName")
  private String projectName = null;
  @SerializedName("reference")
  private String reference = null;
  @SerializedName("isVatInclusive")
  private Boolean isVatInclusive = false;
  @SerializedName("subTotal")
  private BigDecimal subTotal = 0;
  @SerializedName("discountPercentage")
  private Integer discountPercentage = 0;
  @SerializedName("discountAmount")
  private BigDecimal discountAmount = 0;
  @SerializedName("totalAfterDiscount")
  private BigDecimal totalAfterDiscount = null;
  @SerializedName("isVat")
  private Boolean isVat = false;
  @SerializedName("vatAmount")
  private BigDecimal vatAmount = null;
  @SerializedName("grandTotal")
  private BigDecimal grandTotal = null;
  @SerializedName("remarks")
  private String remarks = null;
  @SerializedName("internalNotes")
  private String internalNotes = null;
  @SerializedName("showSignatureOrStamp")
  private Boolean showSignatureOrStamp = true;
  @SerializedName("expenseStructureType")
  private String expenseStructureType = null;
  @SerializedName("items")
  private List<ExpenseSimpleProductItem> items = null;

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
   * อีเมลผู้ติดต่อ <br> <ex>Example: supplier@email.com</ex>
   **/
  @ApiModelProperty(value = "อีเมลผู้ติดต่อ <br> <ex>Example: supplier@email.com</ex>")
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
   * รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด)
   **/
  @ApiModelProperty(value = "รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด)")
  public Integer getCreditType() {
    return creditType;
  }
  public void setCreditType(Integer creditType) {
    this.creditType = creditType;
  }

  /**
   * จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex>
   **/
  @ApiModelProperty(value = "จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex>")
  public Integer getCreditDays() {
    return creditDays;
  }
  public void setCreditDays(Integer creditDays) {
    this.creditDays = creditDays;
  }

  /**
   * วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
   **/
  @ApiModelProperty(value = "วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>")
  public Date getDueDate() {
    return dueDate;
  }
  public void setDueDate(Date dueDate) {
    this.dueDate = dueDate;
  }

  /**
   * ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex>
   **/
  @ApiModelProperty(value = "ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex>")
  public String getSalesName() {
    return salesName;
  }
  public void setSalesName(String salesName) {
    this.salesName = salesName;
  }

  /**
   * ชื่อโปรเจค
   **/
  @ApiModelProperty(value = "ชื่อโปรเจค")
  public String getProjectName() {
    return projectName;
  }
  public void setProjectName(String projectName) {
    this.projectName = projectName;
  }

  /**
   * เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex>
   **/
  @ApiModelProperty(value = "เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex>")
  public String getReference() {
    return reference;
  }
  public void setReference(String reference) {
    this.reference = reference;
  }

  /**
   * มูลค่าเอกสารรวมภาษีแล้วหรือไม่
   **/
  @ApiModelProperty(value = "มูลค่าเอกสารรวมภาษีแล้วหรือไม่")
  public Boolean getIsVatInclusive() {
    return isVatInclusive;
  }
  public void setIsVatInclusive(Boolean isVatInclusive) {
    this.isVatInclusive = isVatInclusive;
  }

  /**
   * มูลค่ารวมเป็นเงิน
   **/
  @ApiModelProperty(required = true, value = "มูลค่ารวมเป็นเงิน")
  public BigDecimal getSubTotal() {
    return subTotal;
  }
  public void setSubTotal(BigDecimal subTotal) {
    this.subTotal = subTotal;
  }

  /**
   * มูลค่าส่วนลดเป็นเปอร์เซ็นต์
   **/
  @ApiModelProperty(value = "มูลค่าส่วนลดเป็นเปอร์เซ็นต์")
  public Integer getDiscountPercentage() {
    return discountPercentage;
  }
  public void setDiscountPercentage(Integer discountPercentage) {
    this.discountPercentage = discountPercentage;
  }

  /**
   * มูลค่าส่วนลดเป็นจำนวน (บาท)
   **/
  @ApiModelProperty(value = "มูลค่าส่วนลดเป็นจำนวน (บาท)")
  public BigDecimal getDiscountAmount() {
    return discountAmount;
  }
  public void setDiscountAmount(BigDecimal discountAmount) {
    this.discountAmount = discountAmount;
  }

  /**
   * มูลค่าหลังหักส่วนลด
   **/
  @ApiModelProperty(required = true, value = "มูลค่าหลังหักส่วนลด")
  public BigDecimal getTotalAfterDiscount() {
    return totalAfterDiscount;
  }
  public void setTotalAfterDiscount(BigDecimal totalAfterDiscount) {
    this.totalAfterDiscount = totalAfterDiscount;
  }

  /**
   * มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7%
   **/
  @ApiModelProperty(value = "มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7%")
  public Boolean getIsVat() {
    return isVat;
  }
  public void setIsVat(Boolean isVat) {
    this.isVat = isVat;
  }

  /**
   * ภาษีมูลค่าเพิ่ม
   **/
  @ApiModelProperty(value = "ภาษีมูลค่าเพิ่ม")
  public BigDecimal getVatAmount() {
    return vatAmount;
  }
  public void setVatAmount(BigDecimal vatAmount) {
    this.vatAmount = vatAmount;
  }

  /**
   * จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
   **/
  @ApiModelProperty(required = true, value = "จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)")
  public BigDecimal getGrandTotal() {
    return grandTotal;
  }
  public void setGrandTotal(BigDecimal grandTotal) {
    this.grandTotal = grandTotal;
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

  /**
   **/
  @ApiModelProperty(value = "")
  public String getExpenseStructureType() {
    return expenseStructureType;
  }
  public void setExpenseStructureType(String expenseStructureType) {
    this.expenseStructureType = expenseStructureType;
  }

  /**
   * รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense
   **/
  @ApiModelProperty(value = "รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense")
  public List<ExpenseSimpleProductItem> getItems() {
    return items;
  }
  public void setItems(List<ExpenseSimpleProductItem> items) {
    this.items = items;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ExpenseSimpleDocument expenseSimpleDocument = (ExpenseSimpleDocument) o;
    return (this.contactCode == null ? expenseSimpleDocument.contactCode == null : this.contactCode.equals(expenseSimpleDocument.contactCode)) &&
        (this.contactName == null ? expenseSimpleDocument.contactName == null : this.contactName.equals(expenseSimpleDocument.contactName)) &&
        (this.contactAddress == null ? expenseSimpleDocument.contactAddress == null : this.contactAddress.equals(expenseSimpleDocument.contactAddress)) &&
        (this.contactTaxId == null ? expenseSimpleDocument.contactTaxId == null : this.contactTaxId.equals(expenseSimpleDocument.contactTaxId)) &&
        (this.contactBranch == null ? expenseSimpleDocument.contactBranch == null : this.contactBranch.equals(expenseSimpleDocument.contactBranch)) &&
        (this.contactPerson == null ? expenseSimpleDocument.contactPerson == null : this.contactPerson.equals(expenseSimpleDocument.contactPerson)) &&
        (this.contactEmail == null ? expenseSimpleDocument.contactEmail == null : this.contactEmail.equals(expenseSimpleDocument.contactEmail)) &&
        (this.contactNumber == null ? expenseSimpleDocument.contactNumber == null : this.contactNumber.equals(expenseSimpleDocument.contactNumber)) &&
        (this.contactZipCode == null ? expenseSimpleDocument.contactZipCode == null : this.contactZipCode.equals(expenseSimpleDocument.contactZipCode)) &&
        (this.contactGroup == null ? expenseSimpleDocument.contactGroup == null : this.contactGroup.equals(expenseSimpleDocument.contactGroup)) &&
        (this.publishedOn == null ? expenseSimpleDocument.publishedOn == null : this.publishedOn.equals(expenseSimpleDocument.publishedOn)) &&
        (this.creditType == null ? expenseSimpleDocument.creditType == null : this.creditType.equals(expenseSimpleDocument.creditType)) &&
        (this.creditDays == null ? expenseSimpleDocument.creditDays == null : this.creditDays.equals(expenseSimpleDocument.creditDays)) &&
        (this.dueDate == null ? expenseSimpleDocument.dueDate == null : this.dueDate.equals(expenseSimpleDocument.dueDate)) &&
        (this.salesName == null ? expenseSimpleDocument.salesName == null : this.salesName.equals(expenseSimpleDocument.salesName)) &&
        (this.projectName == null ? expenseSimpleDocument.projectName == null : this.projectName.equals(expenseSimpleDocument.projectName)) &&
        (this.reference == null ? expenseSimpleDocument.reference == null : this.reference.equals(expenseSimpleDocument.reference)) &&
        (this.isVatInclusive == null ? expenseSimpleDocument.isVatInclusive == null : this.isVatInclusive.equals(expenseSimpleDocument.isVatInclusive)) &&
        (this.subTotal == null ? expenseSimpleDocument.subTotal == null : this.subTotal.equals(expenseSimpleDocument.subTotal)) &&
        (this.discountPercentage == null ? expenseSimpleDocument.discountPercentage == null : this.discountPercentage.equals(expenseSimpleDocument.discountPercentage)) &&
        (this.discountAmount == null ? expenseSimpleDocument.discountAmount == null : this.discountAmount.equals(expenseSimpleDocument.discountAmount)) &&
        (this.totalAfterDiscount == null ? expenseSimpleDocument.totalAfterDiscount == null : this.totalAfterDiscount.equals(expenseSimpleDocument.totalAfterDiscount)) &&
        (this.isVat == null ? expenseSimpleDocument.isVat == null : this.isVat.equals(expenseSimpleDocument.isVat)) &&
        (this.vatAmount == null ? expenseSimpleDocument.vatAmount == null : this.vatAmount.equals(expenseSimpleDocument.vatAmount)) &&
        (this.grandTotal == null ? expenseSimpleDocument.grandTotal == null : this.grandTotal.equals(expenseSimpleDocument.grandTotal)) &&
        (this.remarks == null ? expenseSimpleDocument.remarks == null : this.remarks.equals(expenseSimpleDocument.remarks)) &&
        (this.internalNotes == null ? expenseSimpleDocument.internalNotes == null : this.internalNotes.equals(expenseSimpleDocument.internalNotes)) &&
        (this.showSignatureOrStamp == null ? expenseSimpleDocument.showSignatureOrStamp == null : this.showSignatureOrStamp.equals(expenseSimpleDocument.showSignatureOrStamp)) &&
        (this.expenseStructureType == null ? expenseSimpleDocument.expenseStructureType == null : this.expenseStructureType.equals(expenseSimpleDocument.expenseStructureType)) &&
        (this.items == null ? expenseSimpleDocument.items == null : this.items.equals(expenseSimpleDocument.items));
  }

  @Override
  public int hashCode() {
    int result = 17;
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
    result = 31 * result + (this.creditType == null ? 0: this.creditType.hashCode());
    result = 31 * result + (this.creditDays == null ? 0: this.creditDays.hashCode());
    result = 31 * result + (this.dueDate == null ? 0: this.dueDate.hashCode());
    result = 31 * result + (this.salesName == null ? 0: this.salesName.hashCode());
    result = 31 * result + (this.projectName == null ? 0: this.projectName.hashCode());
    result = 31 * result + (this.reference == null ? 0: this.reference.hashCode());
    result = 31 * result + (this.isVatInclusive == null ? 0: this.isVatInclusive.hashCode());
    result = 31 * result + (this.subTotal == null ? 0: this.subTotal.hashCode());
    result = 31 * result + (this.discountPercentage == null ? 0: this.discountPercentage.hashCode());
    result = 31 * result + (this.discountAmount == null ? 0: this.discountAmount.hashCode());
    result = 31 * result + (this.totalAfterDiscount == null ? 0: this.totalAfterDiscount.hashCode());
    result = 31 * result + (this.isVat == null ? 0: this.isVat.hashCode());
    result = 31 * result + (this.vatAmount == null ? 0: this.vatAmount.hashCode());
    result = 31 * result + (this.grandTotal == null ? 0: this.grandTotal.hashCode());
    result = 31 * result + (this.remarks == null ? 0: this.remarks.hashCode());
    result = 31 * result + (this.internalNotes == null ? 0: this.internalNotes.hashCode());
    result = 31 * result + (this.showSignatureOrStamp == null ? 0: this.showSignatureOrStamp.hashCode());
    result = 31 * result + (this.expenseStructureType == null ? 0: this.expenseStructureType.hashCode());
    result = 31 * result + (this.items == null ? 0: this.items.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class ExpenseSimpleDocument {\n");
    sb.append("  " + super.toString()).append("\n");
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
    sb.append("  creditType: ").append(creditType).append("\n");
    sb.append("  creditDays: ").append(creditDays).append("\n");
    sb.append("  dueDate: ").append(dueDate).append("\n");
    sb.append("  salesName: ").append(salesName).append("\n");
    sb.append("  projectName: ").append(projectName).append("\n");
    sb.append("  reference: ").append(reference).append("\n");
    sb.append("  isVatInclusive: ").append(isVatInclusive).append("\n");
    sb.append("  subTotal: ").append(subTotal).append("\n");
    sb.append("  discountPercentage: ").append(discountPercentage).append("\n");
    sb.append("  discountAmount: ").append(discountAmount).append("\n");
    sb.append("  totalAfterDiscount: ").append(totalAfterDiscount).append("\n");
    sb.append("  isVat: ").append(isVat).append("\n");
    sb.append("  vatAmount: ").append(vatAmount).append("\n");
    sb.append("  grandTotal: ").append(grandTotal).append("\n");
    sb.append("  remarks: ").append(remarks).append("\n");
    sb.append("  internalNotes: ").append(internalNotes).append("\n");
    sb.append("  showSignatureOrStamp: ").append(showSignatureOrStamp).append("\n");
    sb.append("  expenseStructureType: ").append(expenseStructureType).append("\n");
    sb.append("  items: ").append(items).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}