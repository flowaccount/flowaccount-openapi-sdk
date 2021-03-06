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

import org.openapitools.client.models.ProductItem

import com.squareup.moshi.Json
/**
 * 
 * @param name ชื่อสินค้า
 * @param quantity จำนวนสินค้า
 * @param pricePerUnit ราคาสินค้าต่อหน่วย
 * @param total ราคารวมสินค้า
 * @param type ประเภทสินค้า <br> 1 = บริการ (service) <br> 3 = สินค้าไม่นับสต๊อก (non inventory) <br> 5 = สินค้านับสต๊อก (inventory)
 * @param description รายละเอียดสินค้า
 * @param unitName หน่วยสินค้า
 * @param sellChartOfAccountCode เลือกลงบันทึกบัญชีรายได้ สำหรับเอกสารฝั่งขาย <br> <ex>Example: 41111</ex>
 * @param buyChartOfAccountCode เลือกลงบันทึกบัญชีค่าใช้จ่าย สำหรับเอกสารฝั่งซื้อ <br> <ex>Example: 51111.02</ex>
 */

data class SimpleProductItem (
    /* ชื่อสินค้า */
    @Json(name = "name")
    override val name: kotlin.String,
    /* จำนวนสินค้า */
    @Json(name = "quantity")
    override val quantity: java.math.BigDecimal,
    /* ราคาสินค้าต่อหน่วย */
    @Json(name = "pricePerUnit")
    override val pricePerUnit: java.math.BigDecimal,
    /* ราคารวมสินค้า */
    @Json(name = "total")
    override val total: java.math.BigDecimal,
    /* ประเภทสินค้า <br> 1 = บริการ (service) <br> 3 = สินค้าไม่นับสต๊อก (non inventory) <br> 5 = สินค้านับสต๊อก (inventory) */
    @Json(name = "type")
    override val type: kotlin.Int? = null,
    /* รายละเอียดสินค้า */
    @Json(name = "description")
    override val description: kotlin.String? = null,
    /* หน่วยสินค้า */
    @Json(name = "unitName")
    override val unitName: kotlin.String? = null,
    /* เลือกลงบันทึกบัญชีรายได้ สำหรับเอกสารฝั่งขาย <br> <ex>Example: 41111</ex> */
    @Json(name = "sellChartOfAccountCode")
    override val sellChartOfAccountCode: kotlin.String? = null,
    /* เลือกลงบันทึกบัญชีค่าใช้จ่าย สำหรับเอกสารฝั่งซื้อ <br> <ex>Example: 51111.02</ex> */
    @Json(name = "buyChartOfAccountCode")
    override val buyChartOfAccountCode: kotlin.String? = null
) : ProductItem

