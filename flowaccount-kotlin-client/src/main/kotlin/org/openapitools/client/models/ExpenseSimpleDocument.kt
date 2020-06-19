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

import org.openapitools.client.models.ExpenseDocument
import org.openapitools.client.models.ExpenseSimpleDocumentAllOf
import org.openapitools.client.models.ExpenseSimpleProductItem

import com.squareup.moshi.Json
/**
 * 
 * @param contactName ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @param publishedOn วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @param subTotal มูลค่ารวมเป็นเงิน
 * @param totalAfterDiscount มูลค่าหลังหักส่วนลด
 * @param grandTotal จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
 * @param contactCode รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @param contactAddress ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @param contactTaxId เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
 * @param contactBranch สำนักงาน/สาขา
 * @param contactPerson ชื่อผู้ติดต่อ
 * @param contactEmail อีเมลผู้ติดต่อ <br> <ex>Example: supplier@email.com</ex>
 * @param contactNumber เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
 * @param contactZipCode รหัสไปรษณีย์ติดต่อ
 * @param contactGroup ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
 * @param creditType รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด)
 * @param creditDays จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex>
 * @param dueDate วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @param salesName ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex>
 * @param projectName ชื่อโปรเจค
 * @param reference เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex>
 * @param isVatInclusive มูลค่าเอกสารรวมภาษีแล้วหรือไม่
 * @param discountPercentage มูลค่าส่วนลดเป็นเปอร์เซ็นต์
 * @param discountAmount มูลค่าส่วนลดเป็นจำนวน (บาท)
 * @param isVat มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7%
 * @param vatAmount ภาษีมูลค่าเพิ่ม
 * @param remarks หมายเหตุเอกสาร
 * @param internalNotes โน๊ตภายในบริษัท
 * @param showSignatureOrStamp ลายเซ็นอิเล็กทรอนิกส์และตรายาง
 * @param expenseStructureType 
 * @param items รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense
 */

data class ExpenseSimpleDocument (
    /* ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า */
    @Json(name = "contactName")
    override val contactName: kotlin.String,
    /* วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex> */
    @Json(name = "publishedOn")
    override val publishedOn: java.time.LocalDate,
    /* มูลค่ารวมเป็นเงิน */
    @Json(name = "subTotal")
    override val subTotal: java.math.BigDecimal,
    /* มูลค่าหลังหักส่วนลด */
    @Json(name = "totalAfterDiscount")
    override val totalAfterDiscount: java.math.BigDecimal,
    /* จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) */
    @Json(name = "grandTotal")
    override val grandTotal: java.math.BigDecimal,
    /* รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า */
    @Json(name = "contactCode")
    override val contactCode: kotlin.String? = null,
    /* ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า */
    @Json(name = "contactAddress")
    override val contactAddress: kotlin.String? = null,
    /* เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex> */
    @Json(name = "contactTaxId")
    override val contactTaxId: kotlin.String? = null,
    /* สำนักงาน/สาขา */
    @Json(name = "contactBranch")
    override val contactBranch: kotlin.String? = null,
    /* ชื่อผู้ติดต่อ */
    @Json(name = "contactPerson")
    override val contactPerson: kotlin.String? = null,
    /* อีเมลผู้ติดต่อ <br> <ex>Example: supplier@email.com</ex> */
    @Json(name = "contactEmail")
    override val contactEmail: kotlin.String? = null,
    /* เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex> */
    @Json(name = "contactNumber")
    override val contactNumber: kotlin.String? = null,
    /* รหัสไปรษณีย์ติดต่อ */
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
    /* วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex> */
    @Json(name = "dueDate")
    override val dueDate: java.time.LocalDate? = null,
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
    /* มูลค่าส่วนลดเป็นเปอร์เซ็นต์ */
    @Json(name = "discountPercentage")
    override val discountPercentage: kotlin.Int? = null,
    /* มูลค่าส่วนลดเป็นจำนวน (บาท) */
    @Json(name = "discountAmount")
    override val discountAmount: java.math.BigDecimal? = null,
    /* มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7% */
    @Json(name = "isVat")
    override val isVat: kotlin.Boolean? = null,
    /* ภาษีมูลค่าเพิ่ม */
    @Json(name = "vatAmount")
    override val vatAmount: java.math.BigDecimal? = null,
    /* หมายเหตุเอกสาร */
    @Json(name = "remarks")
    override val remarks: kotlin.String? = null,
    /* โน๊ตภายในบริษัท */
    @Json(name = "internalNotes")
    override val internalNotes: kotlin.String? = null,
    /* ลายเซ็นอิเล็กทรอนิกส์และตรายาง */
    @Json(name = "showSignatureOrStamp")
    override val showSignatureOrStamp: kotlin.Boolean? = null,
    @Json(name = "expenseStructureType")
    override val expenseStructureType: kotlin.String? = null,
    /* รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense */
    @Json(name = "items")
    val items: kotlin.Array<ExpenseSimpleProductItem>? = null
) : ExpenseDocument

