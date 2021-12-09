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
 * @param type ประเภทสินค้า: <br>1 = บริการ <br> 3 = ไม่นับสต๊อก <br> 5 = นับสต๊อก
 * @param name ชื่อสินค้า <br> <ex>Example: Product</ex>
 * @param productStructureType สร้างสินค้าประเภท บริการ
 * @param code รหัสสินค้า / SKU <br> <ex>Example: P001</ex>
 * @param sellDescription รายละเอียดสินค้า ฝั่งขาย
 * @param sellPrice ราคาขายสินค้า
 * @param sellVatType ภาษีขาย: <br> 1 = ราคาขายรวมภาษี <br> 3 = ราคาขายไม่รวมภาษี <br> 5 = ราคาขายภาษี 0% <br> 7 = ราคาขายสินค้าได้รับการยกเว้นภาษี
 * @param unitName หน่วยสินค้า
 * @param categoryName หมวดสินค้า
 * @param barcode บาร์โค้ด
 */

interface ProductService {

    /* ประเภทสินค้า: <br>1 = บริการ <br> 3 = ไม่นับสต๊อก <br> 5 = นับสต๊อก */
    @Json(name = "type")
    val type: kotlin.Long
    /* ชื่อสินค้า <br> <ex>Example: Product</ex> */
    @Json(name = "name")
    val name: kotlin.String
    /* สร้างสินค้าประเภท บริการ */
    @Json(name = "productStructureType")
    val productStructureType: kotlin.String?
    /* รหัสสินค้า / SKU <br> <ex>Example: P001</ex> */
    @Json(name = "code")
    val code: kotlin.String?
    /* รายละเอียดสินค้า ฝั่งขาย */
    @Json(name = "sellDescription")
    val sellDescription: kotlin.String?
    /* ราคาขายสินค้า */
    @Json(name = "sellPrice")
    val sellPrice: java.math.BigDecimal?
    /* ภาษีขาย: <br> 1 = ราคาขายรวมภาษี <br> 3 = ราคาขายไม่รวมภาษี <br> 5 = ราคาขายภาษี 0% <br> 7 = ราคาขายสินค้าได้รับการยกเว้นภาษี */
    @Json(name = "sellVatType")
    val sellVatType: kotlin.Long?
    /* หน่วยสินค้า */
    @Json(name = "unitName")
    val unitName: kotlin.String?
    /* หมวดสินค้า */
    @Json(name = "categoryName")
    val categoryName: kotlin.String?
    /* บาร์โค้ด */
    @Json(name = "barcode")
    val barcode: kotlin.String?
}
