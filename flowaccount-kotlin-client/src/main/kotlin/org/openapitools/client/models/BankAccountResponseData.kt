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
 * @param bankAccountId เลข id บัญชีธนาคาร
 * @param bankAccountNumber เลขบัญชี <br> <ex>Example: 0048620000 </ex>
 * @param bankAccountName ชื่อบัญชี <br> <ex>Example: บัญชีใช้รับเงิน</ex>
 * @param bankAccountType ประเภทบัญชีธนาคาร <br> 1 = บัญชีออมทรัพย์  <br> 3 = บัญชีกระรายวัน <br> 7  = บัญชีฝากประจำ
 * @param bankBranch ชื่อสาขาธนาคาร
 * @param bankId เลข id ธนาคาร
 * @param bankName ชื่อธนาคาร
 */

data class BankAccountResponseData (
    /* เลข id บัญชีธนาคาร */
    @Json(name = "bankAccountId")
    val bankAccountId: kotlin.Long? = null,
    /* เลขบัญชี <br> <ex>Example: 0048620000 </ex> */
    @Json(name = "bankAccountNumber")
    val bankAccountNumber: kotlin.String? = null,
    /* ชื่อบัญชี <br> <ex>Example: บัญชีใช้รับเงิน</ex> */
    @Json(name = "bankAccountName")
    val bankAccountName: kotlin.String? = null,
    /* ประเภทบัญชีธนาคาร <br> 1 = บัญชีออมทรัพย์  <br> 3 = บัญชีกระรายวัน <br> 7  = บัญชีฝากประจำ */
    @Json(name = "bankAccountType")
    val bankAccountType: kotlin.Long? = null,
    /* ชื่อสาขาธนาคาร */
    @Json(name = "bankBranch")
    val bankBranch: kotlin.String? = null,
    /* เลข id ธนาคาร */
    @Json(name = "bankId")
    val bankId: kotlin.Long? = null,
    /* ชื่อธนาคาร */
    @Json(name = "bankName")
    val bankName: kotlin.String? = null
)

