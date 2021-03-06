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
package org.openapitools.client.models

import org.openapitools.client.models.SimpleDocumentAllOf
import org.openapitools.client.models.SimpleProductItem
import org.openapitools.client.models.UpdateDocument
import org.openapitools.client.models.UpgradeDocument

import com.squareup.moshi.Json
/**
 * 
 * @param companyName ชื่อบริษัท
 * @param companyBranch ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex>
 * @param contactName ชื่อ ลูกค้า/ผู้จำหน่าย <br> <ex>Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ</ex>
 * @param publishedOn วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @param dueDate วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @param totalAfterDiscount มูลค่าหลังหักส่วนลด
 * @param grandTotal จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
 * @param documentStructureType 
 * @param recordId id ของเอกสาร
 * @param companyNameEn ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
 * @param companyAddress ที่อยู่บริษัท
 * @param companyAddressEn ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
 * @param companyTaxId เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>
 * @param companyBranchEn ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) <br><ex>Example: Head Office 00000</ex>
 * @param companyPhone เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>
 * @param companyMobile เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>
 * @param companyFax เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>
 * @param companyWebsite เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>
 * @param contactCode รหัส ลูกค้า/ผู้จำหน่าย
 * @param contactAddress ที่อยู่ ลูกค้า/ผู้จำหน่าย
 * @param contactTaxId เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
 * @param contactBranch สำนักงาน/สาขา
 * @param contactPerson ชื่อผู้ติดต่อ
 * @param contactEmail อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>
 * @param contactNumber เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
 * @param contactZipCode รหัสไปรษณีย์
 * @param contactGroup ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
 * @param creditType รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด)
 * @param creditDays จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex>
 * @param salesName ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex>
 * @param projectName ชื่อโปรเจค
 * @param reference เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex>
 * @param isVatInclusive มูลค่าเอกสารรวมภาษีแล้วหรือไม่
 * @param useReceiptDeduction เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร <br> (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน)
 * @param subTotal มูลค่ารวมเป็นเงิน
 * @param discountPercentage มูลค่าส่วนลดเป็นเปอร์เซ็นต์
 * @param discountAmount มูลค่าส่วนลดเป็นจำนวน (บาท)
 * @param isVat มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7%
 * @param vatAmount ภาษีมูลค่าเพิ่ม
 * @param documentShowWithholdingTax แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร
 * @param documentWithholdingTaxPercentage ภาษี ณ ที่จ่าย (%)
 * @param documentWithholdingTaxAmount มูลค่าภาษีหัก ณ ที่จ่าย
 * @param documentDeductionType ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
 * @param documentDeductionAmount จำนวนเงินยอดรายการปรับลด <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
 * @param remarks หมายเหตุเอกสาร
 * @param internalNotes โน๊ตภายในบริษัท
 * @param showSignatureOrStamp ลายเซ็นอิเล็กทรอนิกส์และตรายาง
 * @param items รายการสินค้าใช้งานสำหรับเอกสาร Simple
 * @param documentReference สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)
 */

data class UpdateSimpleDocument (
    /* ชื่อบริษัท */
    @Json(name = "companyName")
    override val companyName: kotlin.String,
    /* ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex> */
    @Json(name = "companyBranch")
    override val companyBranch: kotlin.String,
    /* ชื่อ ลูกค้า/ผู้จำหน่าย <br> <ex>Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ</ex> */
    @Json(name = "contactName")
    override val contactName: kotlin.String,
    /* วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex> */
    @Json(name = "publishedOn")
    override val publishedOn: java.time.LocalDate,
    /* วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex> */
    @Json(name = "dueDate")
    override val dueDate: java.time.LocalDate,
    /* มูลค่าหลังหักส่วนลด */
    @Json(name = "totalAfterDiscount")
    override val totalAfterDiscount: java.math.BigDecimal,
    /* จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) */
    @Json(name = "grandTotal")
    override val grandTotal: java.math.BigDecimal,
    @Json(name = "documentStructureType")
    override val documentStructureType: kotlin.String?,
    /* id ของเอกสาร */
    @Json(name = "recordId")
    override val recordId: kotlin.Long? = null,
    /* ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) */
    @Json(name = "companyNameEn")
    override val companyNameEn: kotlin.String? = null,
    /* ที่อยู่บริษัท */
    @Json(name = "companyAddress")
    override val companyAddress: kotlin.String? = null,
    /* ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) */
    @Json(name = "companyAddressEn")
    override val companyAddressEn: kotlin.String? = null,
    /* เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex> */
    @Json(name = "companyTaxId")
    override val companyTaxId: kotlin.String? = null,
    /* ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) <br><ex>Example: Head Office 00000</ex> */
    @Json(name = "companyBranchEn")
    override val companyBranchEn: kotlin.String? = null,
    /* เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex> */
    @Json(name = "companyPhone")
    override val companyPhone: kotlin.String? = null,
    /* เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex> */
    @Json(name = "companyMobile")
    override val companyMobile: kotlin.String? = null,
    /* เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex> */
    @Json(name = "companyFax")
    override val companyFax: kotlin.String? = null,
    /* เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex> */
    @Json(name = "companyWebsite")
    override val companyWebsite: kotlin.String? = null,
    /* รหัส ลูกค้า/ผู้จำหน่าย */
    @Json(name = "contactCode")
    override val contactCode: kotlin.String? = null,
    /* ที่อยู่ ลูกค้า/ผู้จำหน่าย */
    @Json(name = "contactAddress")
    override val contactAddress: kotlin.String? = null,
    /* เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex> */
    @Json(name = "contactTaxId")
    override val contactTaxId: kotlin.String? = null,
    /* สำนักงาน/สาขา */
    @Json(name = "contactBranch")
    override val contactBranch: kotlin.String? = null,
    /* ชื่อผู้ติดต่อ */
    @Json(name = "contactPerson")
    override val contactPerson: kotlin.String? = null,
    /* อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex> */
    @Json(name = "contactEmail")
    override val contactEmail: kotlin.String? = null,
    /* เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex> */
    @Json(name = "contactNumber")
    override val contactNumber: kotlin.String? = null,
    /* รหัสไปรษณีย์ */
    @Json(name = "contactZipCode")
    override val contactZipCode: kotlin.String? = null,
    /* ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล */
    @Json(name = "contactGroup")
    override val contactGroup: kotlin.Int? = null,
    /* รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด) */
    @Json(name = "creditType")
    override val creditType: kotlin.Int? = null,
    /* จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex> */
    @Json(name = "creditDays")
    override val creditDays: kotlin.Int? = null,
    /* ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex> */
    @Json(name = "salesName")
    override val salesName: kotlin.String? = null,
    /* ชื่อโปรเจค */
    @Json(name = "projectName")
    override val projectName: kotlin.String? = null,
    /* เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex> */
    @Json(name = "reference")
    override val reference: kotlin.String? = null,
    /* มูลค่าเอกสารรวมภาษีแล้วหรือไม่ */
    @Json(name = "isVatInclusive")
    override val isVatInclusive: kotlin.Boolean? = null,
    /* เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร <br> (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน) */
    @Json(name = "useReceiptDeduction")
    override val useReceiptDeduction: kotlin.Boolean? = null,
    /* มูลค่ารวมเป็นเงิน */
    @Json(name = "subTotal")
    override val subTotal: java.math.BigDecimal? = null,
    /* มูลค่าส่วนลดเป็นเปอร์เซ็นต์ */
    @Json(name = "discountPercentage")
    override val discountPercentage: kotlin.Int? = null,
    /* มูลค่าส่วนลดเป็นจำนวน (บาท) */
    @Json(name = "discountAmount")
    override val discountAmount: java.math.BigDecimal? = null,
    /* มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7% */
    @Json(name = "isVat")
    override val isVat: kotlin.Boolean? = null,
    /* ภาษีมูลค่าเพิ่ม */
    @Json(name = "vatAmount")
    override val vatAmount: java.math.BigDecimal? = null,
    /* แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร */
    @Json(name = "documentShowWithholdingTax")
    override val documentShowWithholdingTax: kotlin.Boolean? = null,
    /* ภาษี ณ ที่จ่าย (%) */
    @Json(name = "documentWithholdingTaxPercentage")
    override val documentWithholdingTaxPercentage: kotlin.Int? = null,
    /* มูลค่าภาษีหัก ณ ที่จ่าย */
    @Json(name = "documentWithholdingTaxAmount")
    override val documentWithholdingTaxAmount: java.math.BigDecimal? = null,
    /* ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) */
    @Json(name = "documentDeductionType")
    override val documentDeductionType: kotlin.Int? = null,
    /* จำนวนเงินยอดรายการปรับลด <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) */
    @Json(name = "documentDeductionAmount")
    override val documentDeductionAmount: java.math.BigDecimal? = null,
    /* หมายเหตุเอกสาร */
    @Json(name = "remarks")
    override val remarks: kotlin.String? = null,
    /* โน๊ตภายในบริษัท */
    @Json(name = "internalNotes")
    override val internalNotes: kotlin.String? = null,
    /* ลายเซ็นอิเล็กทรอนิกส์และตรายาง */
    @Json(name = "showSignatureOrStamp")
    override val showSignatureOrStamp: kotlin.Boolean? = null,
    /* รายการสินค้าใช้งานสำหรับเอกสาร Simple */
    @Json(name = "items")
    val items: kotlin.Array<SimpleProductItem>? = null,
    /* สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา) */
    @Json(name = "documentReference")
    val documentReference: kotlin.Array<UpgradeDocument>? = null
) : UpdateDocument

