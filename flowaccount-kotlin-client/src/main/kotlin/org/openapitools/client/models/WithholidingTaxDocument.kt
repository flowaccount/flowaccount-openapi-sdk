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

import org.openapitools.client.models.WithholidingTaxItem

import com.squareup.moshi.Json
/**
 * 
 * @param contactName ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @param publishedOn วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @param entity แบบฟอร์มเอกสารหัก ณ ที่จ่าย <br> ภงด 3 = 1 <br> ภงด 53 = 3 <br> ภงด 1ก = 1 <br> ภงด 1ก (พิเศษ) = 7 <br> ภงด 2 = 9 <br> ภงด 2ก = 11 <br> ภงด 3ก = 13
 * @param withholdingTaxItems รายการหัก ของเอกสารหัก ณ ที่จ่าย
 * @param total จำนวนเงิน (ไม่รวมภาษี)
 * @param totalTaxWithheld ภาษีที่หัก
 * @param contactCode รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @param contactAddress ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @param contactTaxId เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
 * @param contactBranch สำนักงาน/สาขา
 * @param contactPerson ชื่อผู้ติดต่อ
 * @param contactEmail อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>
 * @param contactNumber เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
 * @param contactZipCode รหัสไปรษณีย์ติดต่อ
 * @param contactGroup ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
 * @param textOther ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) <br>Example: 2020</ex>
 * @param taxPayment ผู้จ่ายเงิน <br> 1 = ภาษีหัก ณ ที่จ่าย <br> 3 = ออกภาษีให้ตลอดไป <br> 5 = ออกภาษีให้ครั้งเดียว <br> 7 = อื่น ๆ
 * @param taxPaymentOthers ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ 
 * @param providentFundNumber ใบอนุญาตเลขที่
 * @param providentFundAmount จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ
 * @param socialSecurityAmount จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม
 * @param remarks หมายเหตุเอกสาร
 * @param internalNotes โน๊ตภายในบริษัท
 * @param showSignatureOrStamp ลายเซ็นอิเล็กทรอนิกส์และตรายาง
 */

data class WithholidingTaxDocument (
    /* ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า */
    @Json(name = "contactName")
    val contactName: kotlin.String,
    /* วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex> */
    @Json(name = "publishedOn")
    val publishedOn: java.time.LocalDate,
    /* แบบฟอร์มเอกสารหัก ณ ที่จ่าย <br> ภงด 3 = 1 <br> ภงด 53 = 3 <br> ภงด 1ก = 1 <br> ภงด 1ก (พิเศษ) = 7 <br> ภงด 2 = 9 <br> ภงด 2ก = 11 <br> ภงด 3ก = 13 */
    @Json(name = "entity")
    val entity: kotlin.Int,
    /* รายการหัก ของเอกสารหัก ณ ที่จ่าย */
    @Json(name = "withholdingTaxItems")
    val withholdingTaxItems: kotlin.Array<WithholidingTaxItem>,
    /* จำนวนเงิน (ไม่รวมภาษี) */
    @Json(name = "total")
    val total: java.math.BigDecimal,
    /* ภาษีที่หัก */
    @Json(name = "totalTaxWithheld")
    val totalTaxWithheld: java.math.BigDecimal,
    /* รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า */
    @Json(name = "contactCode")
    val contactCode: kotlin.String? = null,
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
    /* อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex> */
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
    /* ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) <br>Example: 2020</ex> */
    @Json(name = "textOther")
    val textOther: kotlin.String? = null,
    /* ผู้จ่ายเงิน <br> 1 = ภาษีหัก ณ ที่จ่าย <br> 3 = ออกภาษีให้ตลอดไป <br> 5 = ออกภาษีให้ครั้งเดียว <br> 7 = อื่น ๆ */
    @Json(name = "taxPayment")
    val taxPayment: kotlin.Int? = null,
    /* ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ  */
    @Json(name = "taxPaymentOthers")
    val taxPaymentOthers: kotlin.String? = null,
    /* ใบอนุญาตเลขที่ */
    @Json(name = "providentFundNumber")
    val providentFundNumber: kotlin.String? = null,
    /* จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ */
    @Json(name = "providentFundAmount")
    val providentFundAmount: kotlin.String? = null,
    /* จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม */
    @Json(name = "socialSecurityAmount")
    val socialSecurityAmount: kotlin.String? = null,
    /* หมายเหตุเอกสาร */
    @Json(name = "remarks")
    val remarks: kotlin.String? = null,
    /* โน๊ตภายในบริษัท */
    @Json(name = "internalNotes")
    val internalNotes: kotlin.String? = null,
    /* ลายเซ็นอิเล็กทรอนิกส์และตรายาง */
    @Json(name = "showSignatureOrStamp")
    val showSignatureOrStamp: kotlin.Boolean? = null
)

