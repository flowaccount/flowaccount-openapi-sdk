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

import org.openapitools.client.models.SendEmailResponseData

import com.squareup.moshi.Json
/**
 * 
 * @param status action success
 * @param message error message
 * @param code error code
 * @param data 
 */

data class SendEmailResponse (
    /* action success */
    @Json(name = "status")
    val status: kotlin.Boolean? = null,
    /* error message */
    @Json(name = "message")
    val message: kotlin.String? = null,
    /* error code */
    @Json(name = "code")
    val code: kotlin.Int? = null,
    @Json(name = "data")
    val data: SendEmailResponseData? = null
)

