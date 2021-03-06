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

import org.openapitools.client.models.Product

import com.squareup.moshi.Json
/**
 * 
 * @param total จำนวนสินค้าทั้งหมด
 * @param currentPage หน้าที่แสดงรายการสินค้า
 * @param list ข้อมูลรายการสินค้า
 * @param isDB database
 */

data class ProductResponseData (
    /* จำนวนสินค้าทั้งหมด */
    @Json(name = "total")
    val total: kotlin.Int? = null,
    /* หน้าที่แสดงรายการสินค้า */
    @Json(name = "currentPage")
    val currentPage: kotlin.Int? = null,
    /* ข้อมูลรายการสินค้า */
    @Json(name = "list")
    val list: kotlin.Array<Product>? = null,
    /* database */
    @Json(name = "isDB")
    val isDB: kotlin.Boolean? = null
)

