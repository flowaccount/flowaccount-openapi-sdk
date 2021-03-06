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
 * @param id เลข id Product
 * @param type ประเภทสินค้า: 1 = บริการ / 3 = ไม่นับสต๊อก / 5 = นับสต๊อก
 * @param code รหัสสินค้า <br> <ex>Example: P001</ex>
 * @param name ชื่อสินค้า <br> <ex>Example: Product</ex>
 * @param sellDescription รายละเอียดสินค้า ฝั่งขาย
 * @param sellPrice ราคาขายสินค้า
 * @param sellPriceWithVat ราคาขายสินค้า รวมภาษี
 * @param sellVatType ภาษีขาย: <br> 1 = ราคาขายรวมภาษี <br> 3 = ราคาขายไม่รวมภาษี <br> 5 = ราคาขายภาษี 0% <br> 7 = ราคาขายสินค้าได้รับการยกเว้นภาษี
 * @param unitName หน่วยสินค้า
 * @param categoryId id หมวดสินค้า
 * @param categoryName หมวดสินค้า
 * @param barcode บาร์โค้ด
 * @param buyDescription รายละเอียดสินค้า ฝั่งซื้อ
 * @param buyPrice ราคาซื้อสินค้า
 * @param buyVatType ภาษีซื้อ: <br> 1 = ราคาซื้อรวมภาษี <br> 3 = ราคาซื้อไม่รวมภาษี <br> 5 = ราคาซื้อภาษี 0% <br> 7 = ราคาซื้อสินค้าได้รับการยกเว้นภาษี
 * @param buyVatTypeWithVat ราคาซื้อสินค้า รวมภาษี
 * @param inventoryPublishedOn วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @param inventoryQuantity จำนวนยอดตั้งต้นสินค้า
 * @param inventoryPrice ต้นทุนสินค้าต่อหน่วย
 * @param inventoryTotal มูลค่ารวมยอดตั้งต้นสินค้า
 * @param averageBuyPrice ราคาสินค้าซื้อเฉลี่ย
 * @param averageSellPrice ราคาขายสินค้าเฉลี่ย
 * @param remainingStock จำนวนสินค้าคงเหลือในสต๊อก
 * @param totalValueInHand มูลค่าสินค้าคงเหลือในสต๊อก
 */

data class Product (
    /* เลข id Product */
    @Json(name = "id")
    val id: kotlin.String? = null,
    /* ประเภทสินค้า: 1 = บริการ / 3 = ไม่นับสต๊อก / 5 = นับสต๊อก */
    @Json(name = "type")
    val type: kotlin.Long? = null,
    /* รหัสสินค้า <br> <ex>Example: P001</ex> */
    @Json(name = "code")
    val code: kotlin.String? = null,
    /* ชื่อสินค้า <br> <ex>Example: Product</ex> */
    @Json(name = "name")
    val name: kotlin.String? = null,
    /* รายละเอียดสินค้า ฝั่งขาย */
    @Json(name = "sellDescription")
    val sellDescription: kotlin.String? = null,
    /* ราคาขายสินค้า */
    @Json(name = "sellPrice")
    val sellPrice: java.math.BigDecimal? = null,
    /* ราคาขายสินค้า รวมภาษี */
    @Json(name = "sellPriceWithVat")
    val sellPriceWithVat: java.math.BigDecimal? = null,
    /* ภาษีขาย: <br> 1 = ราคาขายรวมภาษี <br> 3 = ราคาขายไม่รวมภาษี <br> 5 = ราคาขายภาษี 0% <br> 7 = ราคาขายสินค้าได้รับการยกเว้นภาษี */
    @Json(name = "sellVatType")
    val sellVatType: kotlin.Long? = null,
    /* หน่วยสินค้า */
    @Json(name = "unitName")
    val unitName: kotlin.String? = null,
    /* id หมวดสินค้า */
    @Json(name = "categoryId")
    val categoryId: kotlin.Long? = null,
    /* หมวดสินค้า */
    @Json(name = "categoryName")
    val categoryName: kotlin.String? = null,
    /* บาร์โค้ด */
    @Json(name = "barcode")
    val barcode: kotlin.String? = null,
    /* รายละเอียดสินค้า ฝั่งซื้อ */
    @Json(name = "buyDescription")
    val buyDescription: kotlin.String? = null,
    /* ราคาซื้อสินค้า */
    @Json(name = "buyPrice")
    val buyPrice: java.math.BigDecimal? = null,
    /* ภาษีซื้อ: <br> 1 = ราคาซื้อรวมภาษี <br> 3 = ราคาซื้อไม่รวมภาษี <br> 5 = ราคาซื้อภาษี 0% <br> 7 = ราคาซื้อสินค้าได้รับการยกเว้นภาษี */
    @Json(name = "buyVatType")
    val buyVatType: kotlin.Long? = null,
    /* ราคาซื้อสินค้า รวมภาษี */
    @Json(name = "buyVatTypeWithVat")
    val buyVatTypeWithVat: java.math.BigDecimal? = null,
    /* วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex> */
    @Json(name = "inventoryPublishedOn")
    val inventoryPublishedOn: java.time.LocalDate? = null,
    /* จำนวนยอดตั้งต้นสินค้า */
    @Json(name = "inventoryQuantity")
    val inventoryQuantity: java.math.BigDecimal? = null,
    /* ต้นทุนสินค้าต่อหน่วย */
    @Json(name = "inventoryPrice")
    val inventoryPrice: java.math.BigDecimal? = null,
    /* มูลค่ารวมยอดตั้งต้นสินค้า */
    @Json(name = "inventoryTotal")
    val inventoryTotal: java.math.BigDecimal? = null,
    /* ราคาสินค้าซื้อเฉลี่ย */
    @Json(name = "averageBuyPrice")
    val averageBuyPrice: java.math.BigDecimal? = null,
    /* ราคาขายสินค้าเฉลี่ย */
    @Json(name = "averageSellPrice")
    val averageSellPrice: java.math.BigDecimal? = null,
    /* จำนวนสินค้าคงเหลือในสต๊อก */
    @Json(name = "remainingStock")
    val remainingStock: java.math.BigDecimal? = null,
    /* มูลค่าสินค้าคงเหลือในสต๊อก */
    @Json(name = "totalValueInHand")
    val totalValueInHand: java.math.BigDecimal? = null
)

