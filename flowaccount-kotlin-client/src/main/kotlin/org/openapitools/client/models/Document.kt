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


import com.squareup.moshi.Json
/**
 * 
 * @param contactName ชื่อ ลูกค้า/ผู้จำหน่าย <br> <ex>Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ</ex>
 * @param publishedOn วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @param dueDate วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @param totalAfterDiscount มูลค่าหลังหักส่วนลด
 * @param grandTotal จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
 * @param documentStructureType 
 * @param recordId id ของเอกสาร
 * @param contactCode รหัส ลูกค้า/ผู้จำหน่าย
 * @param contactAddress ที่อยู่ ลูกค้า/ผู้จำหน่าย
 * @param contactTaxId เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
 * @param contactBranch สำนักงาน/สาขา
 * @param contactPerson ชื่อผู้ติดต่อ
 * @param contactEmail อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>
 * @param contactNumber เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
 * @param contactZipCode รหัสไปรษณีย์ติดต่อ
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
 */

interface Document {

    /* ชื่อ ลูกค้า/ผู้จำหน่าย <br> <ex>Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ</ex> */
    @Json(name = "contactName")
    val contactName: kotlin.String
    /* วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex> */
    @Json(name = "publishedOn")
    val publishedOn: java.time.LocalDate
    /* วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex> */
    @Json(name = "dueDate")
    val dueDate: java.time.LocalDate
    /* มูลค่าหลังหักส่วนลด */
    @Json(name = "totalAfterDiscount")
    val totalAfterDiscount: java.math.BigDecimal
    /* จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) */
    @Json(name = "grandTotal")
    val grandTotal: java.math.BigDecimal
    @Json(name = "documentStructureType")
    val documentStructureType: kotlin.String?
    /* id ของเอกสาร */
    @Json(name = "recordId")
    val recordId: kotlin.Long?
    /* รหัส ลูกค้า/ผู้จำหน่าย */
    @Json(name = "contactCode")
    val contactCode: kotlin.String?
    /* ที่อยู่ ลูกค้า/ผู้จำหน่าย */
    @Json(name = "contactAddress")
    val contactAddress: kotlin.String?
    /* เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex> */
    @Json(name = "contactTaxId")
    val contactTaxId: kotlin.String?
    /* สำนักงาน/สาขา */
    @Json(name = "contactBranch")
    val contactBranch: kotlin.String?
    /* ชื่อผู้ติดต่อ */
    @Json(name = "contactPerson")
    val contactPerson: kotlin.String?
    /* อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex> */
    @Json(name = "contactEmail")
    val contactEmail: kotlin.String?
    /* เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex> */
    @Json(name = "contactNumber")
    val contactNumber: kotlin.String?
    /* รหัสไปรษณีย์ติดต่อ */
    @Json(name = "contactZipCode")
    val contactZipCode: kotlin.String?
    /* ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล */
    @Json(name = "contactGroup")
    val contactGroup: kotlin.Int?
    /* รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด) */
    @Json(name = "creditType")
    val creditType: kotlin.Int?
    /* จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex> */
    @Json(name = "creditDays")
    val creditDays: kotlin.Int?
    /* ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex> */
    @Json(name = "salesName")
    val salesName: kotlin.String?
    /* ชื่อโปรเจค */
    @Json(name = "projectName")
    val projectName: kotlin.String?
    /* เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex> */
    @Json(name = "reference")
    val reference: kotlin.String?
    /* มูลค่าเอกสารรวมภาษีแล้วหรือไม่ */
    @Json(name = "isVatInclusive")
    val isVatInclusive: kotlin.Boolean?
    /* เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร <br> (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน) */
    @Json(name = "useReceiptDeduction")
    val useReceiptDeduction: kotlin.Boolean?
    /* มูลค่ารวมเป็นเงิน */
    @Json(name = "subTotal")
    val subTotal: java.math.BigDecimal?
    /* มูลค่าส่วนลดเป็นเปอร์เซ็นต์ */
    @Json(name = "discountPercentage")
    val discountPercentage: kotlin.Int?
    /* มูลค่าส่วนลดเป็นจำนวน (บาท) */
    @Json(name = "discountAmount")
    val discountAmount: java.math.BigDecimal?
    /* มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7% */
    @Json(name = "isVat")
    val isVat: kotlin.Boolean?
    /* ภาษีมูลค่าเพิ่ม */
    @Json(name = "vatAmount")
    val vatAmount: java.math.BigDecimal?
    /* แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร */
    @Json(name = "documentShowWithholdingTax")
    val documentShowWithholdingTax: kotlin.Boolean?
    /* ภาษี ณ ที่จ่าย (%) */
    @Json(name = "documentWithholdingTaxPercentage")
    val documentWithholdingTaxPercentage: kotlin.Int?
    /* มูลค่าภาษีหัก ณ ที่จ่าย */
    @Json(name = "documentWithholdingTaxAmount")
    val documentWithholdingTaxAmount: java.math.BigDecimal?
    /* ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) */
    @Json(name = "documentDeductionType")
    val documentDeductionType: kotlin.Int?
    /* จำนวนเงินยอดรายการปรับลด <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) */
    @Json(name = "documentDeductionAmount")
    val documentDeductionAmount: java.math.BigDecimal?
    /* หมายเหตุเอกสาร */
    @Json(name = "remarks")
    val remarks: kotlin.String?
    /* โน๊ตภายในบริษัท */
    @Json(name = "internalNotes")
    val internalNotes: kotlin.String?
    /* ลายเซ็นอิเล็กทรอนิกส์และตรายาง */
    @Json(name = "showSignatureOrStamp")
    val showSignatureOrStamp: kotlin.Boolean?
}

