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

import com.squareup.moshi.Json
/**
 * 
 * @param contactName ชื่อ ลูกค้า/ผู้จำหน่าย <br> <ex>Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ</ex>
 * @param publishedOn วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @param dueDate วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @param totalAfterDiscount มูลค่าหลังหักส่วนลด
 * @param grandTotal จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
 * @param expensePaymentStructureType สร้างเอกสารแบบ Simple พร้อมชำระเงิน ด้วยบัตรเครดิต
 * @param paymentMethod ประเภทการชำระเงิน <br> 7 = บัตรเครดิต
 * @param paymentDate วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @param collected จำนวนเงินยอดจ่ายสุทธิ <br> <ex> Example : 100.00 </ex>
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
 * @param items รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense
 * @param subTotal มูลค่ารวมเป็นเงิน
 * @param discountPercentage มูลค่าส่วนลดเป็นเปอร์เซ็นต์
 * @param discountAmount มูลค่าส่วนลดเป็นจำนวน (บาท)
 * @param isVat มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7%
 * @param vatAmount ภาษีมูลค่าเพิ่ม
 * @param discountType รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า <br> สามารถเลือกรูปแบบส่วนลดได้ <br> 1 =  เปอร์เซ็นต์ <br> 3 = จำนวน (บาท)
 * @param useInlineDiscount inline discount ใช้งานส่วนลด แยกตามรายการสินค้า
 * @param useInlineVat inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า
 * @param exemptAmount ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม
 * @param remarks หมายเหตุเอกสาร
 * @param internalNotes โน๊ตภายในบริษัท
 * @param showSignatureOrStamp ลายเซ็นอิเล็กทรอนิกส์และตรายาง
 * @param withheldPercentage เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>
 * @param withheldAmount จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>
 * @param creditCardBankAccountId ธนาคารที่ชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
 * @param paymentRemarks หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน
 * @param remainingCollectedType สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร 
 * @param remainingCollected จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex>
 */

interface ExpenseInlineDocumentWithPaymentPaidCreditCard {

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
    /* สร้างเอกสารแบบ Simple พร้อมชำระเงิน ด้วยบัตรเครดิต */
    @Json(name = "expensePaymentStructureType")
    val expensePaymentStructureType: kotlin.String?
    /* ประเภทการชำระเงิน <br> 7 = บัตรเครดิต */
    @Json(name = "paymentMethod")
    val paymentMethod: kotlin.Long
    /* วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex> */
    @Json(name = "paymentDate")
    val paymentDate: java.time.LocalDate
    /* จำนวนเงินยอดจ่ายสุทธิ <br> <ex> Example : 100.00 </ex> */
    @Json(name = "collected")
    val collected: java.math.BigDecimal
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
    /* รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense */
    @Json(name = "items")
    val items: kotlin.Array<ExpenseInlineProductItem>?
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
    /* รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า <br> สามารถเลือกรูปแบบส่วนลดได้ <br> 1 =  เปอร์เซ็นต์ <br> 3 = จำนวน (บาท) */
    @Json(name = "discountType")
    val discountType: kotlin.Int?
    /* inline discount ใช้งานส่วนลด แยกตามรายการสินค้า */
    @Json(name = "useInlineDiscount")
    val useInlineDiscount: kotlin.Boolean?
    /* inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า */
    @Json(name = "useInlineVat")
    val useInlineVat: kotlin.Boolean?
    /* ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม */
    @Json(name = "exemptAmount")
    val exemptAmount: java.math.BigDecimal?
    /* หมายเหตุเอกสาร */
    @Json(name = "remarks")
    val remarks: kotlin.String?
    /* โน๊ตภายในบริษัท */
    @Json(name = "internalNotes")
    val internalNotes: kotlin.String?
    /* ลายเซ็นอิเล็กทรอนิกส์และตรายาง */
    @Json(name = "showSignatureOrStamp")
    val showSignatureOrStamp: kotlin.Boolean?
    /* เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red> */
    @Json(name = "withheldPercentage")
    val withheldPercentage: kotlin.Long?
    /* จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex> */
    @Json(name = "withheldAmount")
    val withheldAmount: java.math.BigDecimal?
    /* ธนาคารที่ชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย  */
    @Json(name = "creditCardBankAccountId")
    val creditCardBankAccountId: kotlin.Long?
    /* หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน */
    @Json(name = "paymentRemarks")
    val paymentRemarks: kotlin.String?
    /* สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร  */
    @Json(name = "remainingCollectedType")
    val remainingCollectedType: kotlin.Long?
    /* จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex> */
    @Json(name = "remainingCollected")
    val remainingCollected: java.math.BigDecimal?
}

