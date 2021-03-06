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
 * @param paymentStructureType รับชำระเงิน ด้วยเงินสด
 * @param documentId id เอกสาร
 * @param paymentMethod ประเภทการเก็บเงิน <br> 1 = เงินสด
 * @param paymentDate วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @param collected จำนวนเงินยอดรับสุทธิ <br> <ex> Example : 100.00 </ex>
 * @param paymentDeductionType ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br>
 * @param paymentDeductionAmount จำนวนเงินยอดรายการปรับลด <br> <ex> Example : 100.00 </ex>
 * @param withheldPercentage เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>
 * @param withheldAmount จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>
 * @param paymentRemarks หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน
 * @param remainingCollectedType สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร 
 * @param remainingCollected จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex>
 */

interface PaymentReceivingCash {

    /* รับชำระเงิน ด้วยเงินสด */
    @Json(name = "paymentStructureType")
    val paymentStructureType: kotlin.String?
    /* id เอกสาร */
    @Json(name = "documentId")
    val documentId: kotlin.Long
    /* ประเภทการเก็บเงิน <br> 1 = เงินสด */
    @Json(name = "paymentMethod")
    val paymentMethod: kotlin.Long
    /* วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex> */
    @Json(name = "paymentDate")
    val paymentDate: java.time.LocalDate
    /* จำนวนเงินยอดรับสุทธิ <br> <ex> Example : 100.00 </ex> */
    @Json(name = "collected")
    val collected: java.math.BigDecimal
    /* ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br> */
    @Json(name = "paymentDeductionType")
    val paymentDeductionType: kotlin.Long?
    /* จำนวนเงินยอดรายการปรับลด <br> <ex> Example : 100.00 </ex> */
    @Json(name = "paymentDeductionAmount")
    val paymentDeductionAmount: java.math.BigDecimal?
    /* เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red> */
    @Json(name = "withheldPercentage")
    val withheldPercentage: kotlin.Long?
    /* จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex> */
    @Json(name = "withheldAmount")
    val withheldAmount: java.math.BigDecimal?
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

