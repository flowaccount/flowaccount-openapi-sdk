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

import org.openapitools.client.models.ExpenseInlineProductItem
import org.openapitools.client.models.SimpleDocumentResponseAllOfDataCompany
import org.openapitools.client.models.SimpleDocumentResponseAllOfDataPayments

import com.squareup.moshi.Json
/**
 * 
 * @param recordId id ของเอกสาร
 * @param documentId id ของเอกสาร
 * @param documentSerial เลขที่เอกสาร
 * @param contactCode รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @param contactName ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @param contactAddress ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @param contactTaxId เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
 * @param contactBranch สำนักงาน/สาขา
 * @param contactPerson ชื่อผู้ติดต่อ
 * @param contactEmail อีเมลผู้ติดต่อ <br> <ex>Example: supplier@email.com</ex>
 * @param contactNumber เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
 * @param contactZipCode รหัสไปรษณีย์ติดต่อ
 * @param contactGroup ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
 * @param publishedOn วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @param creditType รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด)
 * @param creditDays จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex>
 * @param dueDate วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @param salesName ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex>
 * @param projectName ชื่อโปรเจค
 * @param reference เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex>
 * @param isVatInclusive มูลค่าเอกสารรวมภาษีแล้วหรือไม่
 * @param items รายการสินค้าใช้งานสำหรับเอกสาร Inline Expense
 * @param subTotal มูลค่ารวมเป็นเงิน
 * @param discountPercentage มูลค่าส่วนลดเป็นเปอร์เซ็นต์
 * @param discountAmount มูลค่าส่วนลดเป็นจำนวน (บาท)
 * @param totalAfterDiscount มูลค่าหลังหักส่วนลด
 * @param isVat มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7%
 * @param vatAmount ภาษีมูลค่าเพิ่ม
 * @param grandTotal จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
 * @param remarks หมายเหตุเอกสาร
 * @param internalNotes โน๊ตภายในบริษัท
 * @param showSignatureOrStamp ลายเซ็นอิเล็กทรอนิกส์และตรายาง
 * @param discountType รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า <br> สามารถเลือกรูปแบบส่วนลดได้ <br> 1 =  เปอร์เซ็นต์ <br> 3 = จำนวน (บาท)
 * @param useInlineDiscount inline discount ใช้งานส่วนลด แยกตามรายการสินค้า
 * @param useInlineVat inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า
 * @param exemptAmount ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม
 * @param vatableAmount ยอดขายที่คิดภาษีมูลค่าเพิ่ม
 * @param payments 
 * @param company 
 * @param status เลขสถานะเอกสารฉบับนี้
 * @param statusString ชื่อสถานะเอกสารฉบับนี้
 * @param documentType เลขประเภทเอกสารฉบับนี้
 * @param allowDelete สามารถลบเอกสาร :<br> true = ลบได้ <br> false = ลบไม่ได้
 */

data class ExpenseInlineDocumentResponseAllOfData (
    /* id ของเอกสาร */
    @Json(name = "recordId")
    val recordId: kotlin.Long? = null,
    /* id ของเอกสาร */
    @Json(name = "documentId")
    val documentId: kotlin.Long? = null,
    /* เลขที่เอกสาร */
    @Json(name = "documentSerial")
    val documentSerial: kotlin.String? = null,
    /* รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า */
    @Json(name = "contactCode")
    val contactCode: kotlin.String? = null,
    /* ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า */
    @Json(name = "contactName")
    val contactName: kotlin.String? = null,
    /* ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า */
    @Json(name = "contactAddress")
    val contactAddress: kotlin.String? = null,
    /* เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex> */
    @Json(name = "contactTaxId")
    val contactTaxId: kotlin.String? = null,
    /* สำนักงาน/สาขา */
    @Json(name = "contactBranch")
    val contactBranch: kotlin.String? = null,
    /* ชื่อผู้ติดต่อ */
    @Json(name = "contactPerson")
    val contactPerson: kotlin.String? = null,
    /* อีเมลผู้ติดต่อ <br> <ex>Example: supplier@email.com</ex> */
    @Json(name = "contactEmail")
    val contactEmail: kotlin.String? = null,
    /* เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex> */
    @Json(name = "contactNumber")
    val contactNumber: kotlin.String? = null,
    /* รหัสไปรษณีย์ติดต่อ */
    @Json(name = "contactZipCode")
    val contactZipCode: kotlin.String? = null,
    /* ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล */
    @Json(name = "contactGroup")
    val contactGroup: kotlin.Int? = null,
    /* วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex> */
    @Json(name = "publishedOn")
    val publishedOn: java.time.LocalDate? = null,
    /* รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด) */
    @Json(name = "creditType")
    val creditType: kotlin.Int? = null,
    /* จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex> */
    @Json(name = "creditDays")
    val creditDays: kotlin.Int? = null,
    /* วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex> */
    @Json(name = "dueDate")
    val dueDate: java.time.LocalDate? = null,
    /* ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex> */
    @Json(name = "salesName")
    val salesName: kotlin.String? = null,
    /* ชื่อโปรเจค */
    @Json(name = "projectName")
    val projectName: kotlin.String? = null,
    /* เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex> */
    @Json(name = "reference")
    val reference: kotlin.String? = null,
    /* มูลค่าเอกสารรวมภาษีแล้วหรือไม่ */
    @Json(name = "isVatInclusive")
    val isVatInclusive: kotlin.Boolean? = null,
    /* รายการสินค้าใช้งานสำหรับเอกสาร Inline Expense */
    @Json(name = "items")
    val items: kotlin.Array<ExpenseInlineProductItem>? = null,
    /* มูลค่ารวมเป็นเงิน */
    @Json(name = "subTotal")
    val subTotal: java.math.BigDecimal? = null,
    /* มูลค่าส่วนลดเป็นเปอร์เซ็นต์ */
    @Json(name = "discountPercentage")
    val discountPercentage: kotlin.Int? = null,
    /* มูลค่าส่วนลดเป็นจำนวน (บาท) */
    @Json(name = "discountAmount")
    val discountAmount: java.math.BigDecimal? = null,
    /* มูลค่าหลังหักส่วนลด */
    @Json(name = "totalAfterDiscount")
    val totalAfterDiscount: java.math.BigDecimal? = null,
    /* มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7% */
    @Json(name = "isVat")
    val isVat: kotlin.Boolean? = null,
    /* ภาษีมูลค่าเพิ่ม */
    @Json(name = "vatAmount")
    val vatAmount: java.math.BigDecimal? = null,
    /* จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) */
    @Json(name = "grandTotal")
    val grandTotal: java.math.BigDecimal? = null,
    /* หมายเหตุเอกสาร */
    @Json(name = "remarks")
    val remarks: kotlin.String? = null,
    /* โน๊ตภายในบริษัท */
    @Json(name = "internalNotes")
    val internalNotes: kotlin.String? = null,
    /* ลายเซ็นอิเล็กทรอนิกส์และตรายาง */
    @Json(name = "showSignatureOrStamp")
    val showSignatureOrStamp: kotlin.Boolean? = null,
    /* รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า <br> สามารถเลือกรูปแบบส่วนลดได้ <br> 1 =  เปอร์เซ็นต์ <br> 3 = จำนวน (บาท) */
    @Json(name = "discountType")
    val discountType: kotlin.Int? = null,
    /* inline discount ใช้งานส่วนลด แยกตามรายการสินค้า */
    @Json(name = "useInlineDiscount")
    val useInlineDiscount: kotlin.Boolean? = null,
    /* inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า */
    @Json(name = "useInlineVat")
    val useInlineVat: kotlin.Boolean? = null,
    /* ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม */
    @Json(name = "exemptAmount")
    val exemptAmount: java.math.BigDecimal? = null,
    /* ยอดขายที่คิดภาษีมูลค่าเพิ่ม */
    @Json(name = "vatableAmount")
    val vatableAmount: java.math.BigDecimal? = null,
    @Json(name = "payments")
    val payments: SimpleDocumentResponseAllOfDataPayments? = null,
    @Json(name = "company")
    val company: SimpleDocumentResponseAllOfDataCompany? = null,
    /* เลขสถานะเอกสารฉบับนี้ */
    @Json(name = "status")
    val status: kotlin.Int? = null,
    /* ชื่อสถานะเอกสารฉบับนี้ */
    @Json(name = "statusString")
    val statusString: kotlin.Int? = null,
    /* เลขประเภทเอกสารฉบับนี้ */
    @Json(name = "documentType")
    val documentType: kotlin.Int? = null,
    /* สามารถลบเอกสาร :<br> true = ลบได้ <br> false = ลบไม่ได้ */
    @Json(name = "allowDelete")
    val allowDelete: kotlin.Boolean? = null
)

