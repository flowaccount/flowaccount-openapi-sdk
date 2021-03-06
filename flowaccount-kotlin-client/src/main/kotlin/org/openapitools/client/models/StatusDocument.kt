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
 * @param status เลขสถานะเอกสารฉบับนี้
 * @param statusString ชื่อสถานะเอกสารฉบับนี้
 * @param documentType เลขประเภทเอกสารฉบับนี้
 * @param allowDelete สามารถลบเอกสาร :<br> true = ลบได้ <br> false = ลบไม่ได้
 */

data class StatusDocument (
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

