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
import org.openapitools.client.model.SimpleProductItem;
import org.openapitools.client.model.UpgradeDocument;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class SimpleDocumentWithPaymentPaidCash {
  
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
  @SerializedName("useReceiptDeduction")
  private Boolean useReceiptDeduction = false;
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
  @SerializedName("documentShowWithholdingTax")
  private Boolean documentShowWithholdingTax = false;
  @SerializedName("documentWithholdingTaxPercentage")
  private Integer documentWithholdingTaxPercentage = 0;
  @SerializedName("documentWithholdingTaxAmount")
  private BigDecimal documentWithholdingTaxAmount = 0;
  @SerializedName("documentDeductionType")
  private Integer documentDeductionType = 0;
  @SerializedName("documentDeductionAmount")
  private BigDecimal documentDeductionAmount = 0;
  @SerializedName("remarks")
  private String remarks = null;
  @SerializedName("internalNotes")
  private String internalNotes = null;
  @SerializedName("showSignatureOrStamp")
  private Boolean showSignatureOrStamp = true;
  @SerializedName("items")
  private List<SimpleProductItem> items = null;
  @SerializedName("documentReference")
  private List<UpgradeDocument> documentReference = null;
  @SerializedName("documentPaymentStructureType")
  private String documentPaymentStructureType = null;
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

  /**
   * รหัส ลูกค้า/ผู้จำหน่าย
   **/
  @ApiModelProperty(value = "รหัส ลูกค้า/ผู้จำหน่าย")
  public String getContactCode() {
    return contactCode;
  }
  public void setContactCode(String contactCode) {
    this.contactCode = contactCode;
  }

  /**
   * ชื่อ ลูกค้า/ผู้จำหน่าย <br> <ex>Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ</ex>
   **/
  @ApiModelProperty(required = true, value = "ชื่อ ลูกค้า/ผู้จำหน่าย <br> <ex>Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ</ex>")
  public String getContactName() {
    return contactName;
  }
  public void setContactName(String contactName) {
    this.contactName = contactName;
  }

  /**
   * ที่อยู่ ลูกค้า/ผู้จำหน่าย
   **/
  @ApiModelProperty(value = "ที่อยู่ ลูกค้า/ผู้จำหน่าย")
  public String getContactAddress() {
    return contactAddress;
  }
  public void setContactAddress(String contactAddress) {
    this.contactAddress = contactAddress;
  }

  /**
   * เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
   **/
  @ApiModelProperty(value = "เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>")
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
  @ApiModelProperty(required = true, value = "วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>")
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
   * เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร <br> (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน)
   **/
  @ApiModelProperty(value = "เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร <br> (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน)")
  public Boolean getUseReceiptDeduction() {
    return useReceiptDeduction;
  }
  public void setUseReceiptDeduction(Boolean useReceiptDeduction) {
    this.useReceiptDeduction = useReceiptDeduction;
  }

  /**
   * มูลค่ารวมเป็นเงิน
   **/
  @ApiModelProperty(value = "มูลค่ารวมเป็นเงิน")
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
   * มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7%
   **/
  @ApiModelProperty(value = "มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7%")
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
   * แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร
   **/
  @ApiModelProperty(value = "แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร")
  public Boolean getDocumentShowWithholdingTax() {
    return documentShowWithholdingTax;
  }
  public void setDocumentShowWithholdingTax(Boolean documentShowWithholdingTax) {
    this.documentShowWithholdingTax = documentShowWithholdingTax;
  }

  /**
   * ภาษี ณ ที่จ่าย (%)
   **/
  @ApiModelProperty(value = "ภาษี ณ ที่จ่าย (%)")
  public Integer getDocumentWithholdingTaxPercentage() {
    return documentWithholdingTaxPercentage;
  }
  public void setDocumentWithholdingTaxPercentage(Integer documentWithholdingTaxPercentage) {
    this.documentWithholdingTaxPercentage = documentWithholdingTaxPercentage;
  }

  /**
   * มูลค่าภาษีหัก ณ ที่จ่าย
   **/
  @ApiModelProperty(value = "มูลค่าภาษีหัก ณ ที่จ่าย")
  public BigDecimal getDocumentWithholdingTaxAmount() {
    return documentWithholdingTaxAmount;
  }
  public void setDocumentWithholdingTaxAmount(BigDecimal documentWithholdingTaxAmount) {
    this.documentWithholdingTaxAmount = documentWithholdingTaxAmount;
  }

  /**
   * ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
   **/
  @ApiModelProperty(value = "ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)")
  public Integer getDocumentDeductionType() {
    return documentDeductionType;
  }
  public void setDocumentDeductionType(Integer documentDeductionType) {
    this.documentDeductionType = documentDeductionType;
  }

  /**
   * จำนวนเงินยอดรายการปรับลด <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
   **/
  @ApiModelProperty(value = "จำนวนเงินยอดรายการปรับลด <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)")
  public BigDecimal getDocumentDeductionAmount() {
    return documentDeductionAmount;
  }
  public void setDocumentDeductionAmount(BigDecimal documentDeductionAmount) {
    this.documentDeductionAmount = documentDeductionAmount;
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
   * รายการสินค้าใช้งานสำหรับเอกสาร Simple
   **/
  @ApiModelProperty(value = "รายการสินค้าใช้งานสำหรับเอกสาร Simple")
  public List<SimpleProductItem> getItems() {
    return items;
  }
  public void setItems(List<SimpleProductItem> items) {
    this.items = items;
  }

  /**
   * สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)
   **/
  @ApiModelProperty(value = "สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)")
  public List<UpgradeDocument> getDocumentReference() {
    return documentReference;
  }
  public void setDocumentReference(List<UpgradeDocument> documentReference) {
    this.documentReference = documentReference;
  }

  /**
   * สร้างเอกสารแบบ Simple พร้อมชำระเงิน ด้วยเงินสด
   **/
  @ApiModelProperty(required = true, value = "สร้างเอกสารแบบ Simple พร้อมชำระเงิน ด้วยเงินสด")
  public String getDocumentPaymentStructureType() {
    return documentPaymentStructureType;
  }
  public void setDocumentPaymentStructureType(String documentPaymentStructureType) {
    this.documentPaymentStructureType = documentPaymentStructureType;
  }

  /**
   * ประเภทการชำระเงิน <br> 1 = เงินสด
   **/
  @ApiModelProperty(required = true, value = "ประเภทการชำระเงิน <br> 1 = เงินสด")
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


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SimpleDocumentWithPaymentPaidCash simpleDocumentWithPaymentPaidCash = (SimpleDocumentWithPaymentPaidCash) o;
    return (this.contactCode == null ? simpleDocumentWithPaymentPaidCash.contactCode == null : this.contactCode.equals(simpleDocumentWithPaymentPaidCash.contactCode)) &&
        (this.contactName == null ? simpleDocumentWithPaymentPaidCash.contactName == null : this.contactName.equals(simpleDocumentWithPaymentPaidCash.contactName)) &&
        (this.contactAddress == null ? simpleDocumentWithPaymentPaidCash.contactAddress == null : this.contactAddress.equals(simpleDocumentWithPaymentPaidCash.contactAddress)) &&
        (this.contactTaxId == null ? simpleDocumentWithPaymentPaidCash.contactTaxId == null : this.contactTaxId.equals(simpleDocumentWithPaymentPaidCash.contactTaxId)) &&
        (this.contactBranch == null ? simpleDocumentWithPaymentPaidCash.contactBranch == null : this.contactBranch.equals(simpleDocumentWithPaymentPaidCash.contactBranch)) &&
        (this.contactPerson == null ? simpleDocumentWithPaymentPaidCash.contactPerson == null : this.contactPerson.equals(simpleDocumentWithPaymentPaidCash.contactPerson)) &&
        (this.contactEmail == null ? simpleDocumentWithPaymentPaidCash.contactEmail == null : this.contactEmail.equals(simpleDocumentWithPaymentPaidCash.contactEmail)) &&
        (this.contactNumber == null ? simpleDocumentWithPaymentPaidCash.contactNumber == null : this.contactNumber.equals(simpleDocumentWithPaymentPaidCash.contactNumber)) &&
        (this.contactZipCode == null ? simpleDocumentWithPaymentPaidCash.contactZipCode == null : this.contactZipCode.equals(simpleDocumentWithPaymentPaidCash.contactZipCode)) &&
        (this.contactGroup == null ? simpleDocumentWithPaymentPaidCash.contactGroup == null : this.contactGroup.equals(simpleDocumentWithPaymentPaidCash.contactGroup)) &&
        (this.publishedOn == null ? simpleDocumentWithPaymentPaidCash.publishedOn == null : this.publishedOn.equals(simpleDocumentWithPaymentPaidCash.publishedOn)) &&
        (this.creditType == null ? simpleDocumentWithPaymentPaidCash.creditType == null : this.creditType.equals(simpleDocumentWithPaymentPaidCash.creditType)) &&
        (this.creditDays == null ? simpleDocumentWithPaymentPaidCash.creditDays == null : this.creditDays.equals(simpleDocumentWithPaymentPaidCash.creditDays)) &&
        (this.dueDate == null ? simpleDocumentWithPaymentPaidCash.dueDate == null : this.dueDate.equals(simpleDocumentWithPaymentPaidCash.dueDate)) &&
        (this.salesName == null ? simpleDocumentWithPaymentPaidCash.salesName == null : this.salesName.equals(simpleDocumentWithPaymentPaidCash.salesName)) &&
        (this.projectName == null ? simpleDocumentWithPaymentPaidCash.projectName == null : this.projectName.equals(simpleDocumentWithPaymentPaidCash.projectName)) &&
        (this.reference == null ? simpleDocumentWithPaymentPaidCash.reference == null : this.reference.equals(simpleDocumentWithPaymentPaidCash.reference)) &&
        (this.isVatInclusive == null ? simpleDocumentWithPaymentPaidCash.isVatInclusive == null : this.isVatInclusive.equals(simpleDocumentWithPaymentPaidCash.isVatInclusive)) &&
        (this.useReceiptDeduction == null ? simpleDocumentWithPaymentPaidCash.useReceiptDeduction == null : this.useReceiptDeduction.equals(simpleDocumentWithPaymentPaidCash.useReceiptDeduction)) &&
        (this.subTotal == null ? simpleDocumentWithPaymentPaidCash.subTotal == null : this.subTotal.equals(simpleDocumentWithPaymentPaidCash.subTotal)) &&
        (this.discountPercentage == null ? simpleDocumentWithPaymentPaidCash.discountPercentage == null : this.discountPercentage.equals(simpleDocumentWithPaymentPaidCash.discountPercentage)) &&
        (this.discountAmount == null ? simpleDocumentWithPaymentPaidCash.discountAmount == null : this.discountAmount.equals(simpleDocumentWithPaymentPaidCash.discountAmount)) &&
        (this.totalAfterDiscount == null ? simpleDocumentWithPaymentPaidCash.totalAfterDiscount == null : this.totalAfterDiscount.equals(simpleDocumentWithPaymentPaidCash.totalAfterDiscount)) &&
        (this.isVat == null ? simpleDocumentWithPaymentPaidCash.isVat == null : this.isVat.equals(simpleDocumentWithPaymentPaidCash.isVat)) &&
        (this.vatAmount == null ? simpleDocumentWithPaymentPaidCash.vatAmount == null : this.vatAmount.equals(simpleDocumentWithPaymentPaidCash.vatAmount)) &&
        (this.grandTotal == null ? simpleDocumentWithPaymentPaidCash.grandTotal == null : this.grandTotal.equals(simpleDocumentWithPaymentPaidCash.grandTotal)) &&
        (this.documentShowWithholdingTax == null ? simpleDocumentWithPaymentPaidCash.documentShowWithholdingTax == null : this.documentShowWithholdingTax.equals(simpleDocumentWithPaymentPaidCash.documentShowWithholdingTax)) &&
        (this.documentWithholdingTaxPercentage == null ? simpleDocumentWithPaymentPaidCash.documentWithholdingTaxPercentage == null : this.documentWithholdingTaxPercentage.equals(simpleDocumentWithPaymentPaidCash.documentWithholdingTaxPercentage)) &&
        (this.documentWithholdingTaxAmount == null ? simpleDocumentWithPaymentPaidCash.documentWithholdingTaxAmount == null : this.documentWithholdingTaxAmount.equals(simpleDocumentWithPaymentPaidCash.documentWithholdingTaxAmount)) &&
        (this.documentDeductionType == null ? simpleDocumentWithPaymentPaidCash.documentDeductionType == null : this.documentDeductionType.equals(simpleDocumentWithPaymentPaidCash.documentDeductionType)) &&
        (this.documentDeductionAmount == null ? simpleDocumentWithPaymentPaidCash.documentDeductionAmount == null : this.documentDeductionAmount.equals(simpleDocumentWithPaymentPaidCash.documentDeductionAmount)) &&
        (this.remarks == null ? simpleDocumentWithPaymentPaidCash.remarks == null : this.remarks.equals(simpleDocumentWithPaymentPaidCash.remarks)) &&
        (this.internalNotes == null ? simpleDocumentWithPaymentPaidCash.internalNotes == null : this.internalNotes.equals(simpleDocumentWithPaymentPaidCash.internalNotes)) &&
        (this.showSignatureOrStamp == null ? simpleDocumentWithPaymentPaidCash.showSignatureOrStamp == null : this.showSignatureOrStamp.equals(simpleDocumentWithPaymentPaidCash.showSignatureOrStamp)) &&
        (this.items == null ? simpleDocumentWithPaymentPaidCash.items == null : this.items.equals(simpleDocumentWithPaymentPaidCash.items)) &&
        (this.documentReference == null ? simpleDocumentWithPaymentPaidCash.documentReference == null : this.documentReference.equals(simpleDocumentWithPaymentPaidCash.documentReference)) &&
        (this.documentPaymentStructureType == null ? simpleDocumentWithPaymentPaidCash.documentPaymentStructureType == null : this.documentPaymentStructureType.equals(simpleDocumentWithPaymentPaidCash.documentPaymentStructureType)) &&
        (this.paymentMethod == null ? simpleDocumentWithPaymentPaidCash.paymentMethod == null : this.paymentMethod.equals(simpleDocumentWithPaymentPaidCash.paymentMethod)) &&
        (this.paymentDate == null ? simpleDocumentWithPaymentPaidCash.paymentDate == null : this.paymentDate.equals(simpleDocumentWithPaymentPaidCash.paymentDate)) &&
        (this.collected == null ? simpleDocumentWithPaymentPaidCash.collected == null : this.collected.equals(simpleDocumentWithPaymentPaidCash.collected)) &&
        (this.withheldPercentage == null ? simpleDocumentWithPaymentPaidCash.withheldPercentage == null : this.withheldPercentage.equals(simpleDocumentWithPaymentPaidCash.withheldPercentage)) &&
        (this.withheldAmount == null ? simpleDocumentWithPaymentPaidCash.withheldAmount == null : this.withheldAmount.equals(simpleDocumentWithPaymentPaidCash.withheldAmount)) &&
        (this.paymentRemarks == null ? simpleDocumentWithPaymentPaidCash.paymentRemarks == null : this.paymentRemarks.equals(simpleDocumentWithPaymentPaidCash.paymentRemarks)) &&
        (this.remainingCollectedType == null ? simpleDocumentWithPaymentPaidCash.remainingCollectedType == null : this.remainingCollectedType.equals(simpleDocumentWithPaymentPaidCash.remainingCollectedType)) &&
        (this.remainingCollected == null ? simpleDocumentWithPaymentPaidCash.remainingCollected == null : this.remainingCollected.equals(simpleDocumentWithPaymentPaidCash.remainingCollected));
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
    result = 31 * result + (this.useReceiptDeduction == null ? 0: this.useReceiptDeduction.hashCode());
    result = 31 * result + (this.subTotal == null ? 0: this.subTotal.hashCode());
    result = 31 * result + (this.discountPercentage == null ? 0: this.discountPercentage.hashCode());
    result = 31 * result + (this.discountAmount == null ? 0: this.discountAmount.hashCode());
    result = 31 * result + (this.totalAfterDiscount == null ? 0: this.totalAfterDiscount.hashCode());
    result = 31 * result + (this.isVat == null ? 0: this.isVat.hashCode());
    result = 31 * result + (this.vatAmount == null ? 0: this.vatAmount.hashCode());
    result = 31 * result + (this.grandTotal == null ? 0: this.grandTotal.hashCode());
    result = 31 * result + (this.documentShowWithholdingTax == null ? 0: this.documentShowWithholdingTax.hashCode());
    result = 31 * result + (this.documentWithholdingTaxPercentage == null ? 0: this.documentWithholdingTaxPercentage.hashCode());
    result = 31 * result + (this.documentWithholdingTaxAmount == null ? 0: this.documentWithholdingTaxAmount.hashCode());
    result = 31 * result + (this.documentDeductionType == null ? 0: this.documentDeductionType.hashCode());
    result = 31 * result + (this.documentDeductionAmount == null ? 0: this.documentDeductionAmount.hashCode());
    result = 31 * result + (this.remarks == null ? 0: this.remarks.hashCode());
    result = 31 * result + (this.internalNotes == null ? 0: this.internalNotes.hashCode());
    result = 31 * result + (this.showSignatureOrStamp == null ? 0: this.showSignatureOrStamp.hashCode());
    result = 31 * result + (this.items == null ? 0: this.items.hashCode());
    result = 31 * result + (this.documentReference == null ? 0: this.documentReference.hashCode());
    result = 31 * result + (this.documentPaymentStructureType == null ? 0: this.documentPaymentStructureType.hashCode());
    result = 31 * result + (this.paymentMethod == null ? 0: this.paymentMethod.hashCode());
    result = 31 * result + (this.paymentDate == null ? 0: this.paymentDate.hashCode());
    result = 31 * result + (this.collected == null ? 0: this.collected.hashCode());
    result = 31 * result + (this.withheldPercentage == null ? 0: this.withheldPercentage.hashCode());
    result = 31 * result + (this.withheldAmount == null ? 0: this.withheldAmount.hashCode());
    result = 31 * result + (this.paymentRemarks == null ? 0: this.paymentRemarks.hashCode());
    result = 31 * result + (this.remainingCollectedType == null ? 0: this.remainingCollectedType.hashCode());
    result = 31 * result + (this.remainingCollected == null ? 0: this.remainingCollected.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class SimpleDocumentWithPaymentPaidCash {\n");
    
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
    sb.append("  useReceiptDeduction: ").append(useReceiptDeduction).append("\n");
    sb.append("  subTotal: ").append(subTotal).append("\n");
    sb.append("  discountPercentage: ").append(discountPercentage).append("\n");
    sb.append("  discountAmount: ").append(discountAmount).append("\n");
    sb.append("  totalAfterDiscount: ").append(totalAfterDiscount).append("\n");
    sb.append("  isVat: ").append(isVat).append("\n");
    sb.append("  vatAmount: ").append(vatAmount).append("\n");
    sb.append("  grandTotal: ").append(grandTotal).append("\n");
    sb.append("  documentShowWithholdingTax: ").append(documentShowWithholdingTax).append("\n");
    sb.append("  documentWithholdingTaxPercentage: ").append(documentWithholdingTaxPercentage).append("\n");
    sb.append("  documentWithholdingTaxAmount: ").append(documentWithholdingTaxAmount).append("\n");
    sb.append("  documentDeductionType: ").append(documentDeductionType).append("\n");
    sb.append("  documentDeductionAmount: ").append(documentDeductionAmount).append("\n");
    sb.append("  remarks: ").append(remarks).append("\n");
    sb.append("  internalNotes: ").append(internalNotes).append("\n");
    sb.append("  showSignatureOrStamp: ").append(showSignatureOrStamp).append("\n");
    sb.append("  items: ").append(items).append("\n");
    sb.append("  documentReference: ").append(documentReference).append("\n");
    sb.append("  documentPaymentStructureType: ").append(documentPaymentStructureType).append("\n");
    sb.append("  paymentMethod: ").append(paymentMethod).append("\n");
    sb.append("  paymentDate: ").append(paymentDate).append("\n");
    sb.append("  collected: ").append(collected).append("\n");
    sb.append("  withheldPercentage: ").append(withheldPercentage).append("\n");
    sb.append("  withheldAmount: ").append(withheldAmount).append("\n");
    sb.append("  paymentRemarks: ").append(paymentRemarks).append("\n");
    sb.append("  remainingCollectedType: ").append(remainingCollectedType).append("\n");
    sb.append("  remainingCollected: ").append(remainingCollected).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
