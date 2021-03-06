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

import org.openapitools.client.models.SendEmail
import org.openapitools.client.models.SendEmailCoppiesAllOf

import com.squareup.moshi.Json
/**
 * 
 * @param documentId documentId หรือ recordId ของเอกสารที่ต้องการส่งอีเมล
 * @param fromemail ใส่อีเมลผู้ส่ง <br> <ex>Example: myemail@email.com</ex>
 * @param toemail ใส่อีเมลผู้รับ <br> <ex>Example: contact@email.com</ex>
 * @param subject หัวข้อ / ชื่อเรื่อง 
 * @param cCMyself ส่งสำเนาหาตนเอง
 * @param ccEmail สำเนา (CC) <br> <ex>Example: cc@email.com</ex>
 * @param bccEmail สำเนาลับ (BCC) <br> <ex>Example: bcc@email.com</ex>
 * @param message ข้อความ เนื้อหาของ email
 * @param doCopy ส่งต้นฉบับ พร้อม สำเนา
 */

data class SendEmailCoppies (
    /* documentId หรือ recordId ของเอกสารที่ต้องการส่งอีเมล */
    @Json(name = "documentId")
    override val documentId: kotlin.Long,
    /* ใส่อีเมลผู้ส่ง <br> <ex>Example: myemail@email.com</ex> */
    @Json(name = "fromemail")
    override val fromemail: kotlin.String,
    /* ใส่อีเมลผู้รับ <br> <ex>Example: contact@email.com</ex> */
    @Json(name = "toemail")
    override val toemail: kotlin.String,
    /* หัวข้อ / ชื่อเรื่อง  */
    @Json(name = "subject")
    override val subject: kotlin.String,
    /* ส่งสำเนาหาตนเอง */
    @Json(name = "cCMyself")
    override val cCMyself: kotlin.Boolean? = null,
    /* สำเนา (CC) <br> <ex>Example: cc@email.com</ex> */
    @Json(name = "ccEmail")
    override val ccEmail: kotlin.String? = null,
    /* สำเนาลับ (BCC) <br> <ex>Example: bcc@email.com</ex> */
    @Json(name = "bccEmail")
    override val bccEmail: kotlin.String? = null,
    /* ข้อความ เนื้อหาของ email */
    @Json(name = "message")
    override val message: kotlin.String? = null,
    /* ส่งต้นฉบับ พร้อม สำเนา */
    @Json(name = "doCopy")
    val doCopy: kotlin.Boolean? = null
) : SendEmail

