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
 * @param compnayName ชื่อบริษัท
 * @param companyType ประเภทธุรกิจ <br> 10 = บริษัท - จดภาษีมูลค่าเพิ่มแล้ว <br> 20 = บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 30 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 40 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 50 = ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว <br> 60 = ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม
 * @param companyNameEn ชื่อบริษัท ภาษาอังกฤษ
 * @param companyAddress ที่อยู่บริษัท
 * @param companyAddressEn ที่อยู่บริษัท ภาษาอังกฤษ
 * @param companyZipCode รหัสไปรษณีย์ บริษัท <br><ex>Example: 10150</ex>
 * @param companyTaxId เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>
 * @param companyBranch ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่</ex>
 * @param companyBranchEn ชื่อ และ รหัสสาขา ภาษาอังกฤษ <br><ex>Example: Head Office</ex>
 * @param companyBranchCode รหัสสาขา <br><ex>Example: 00000</ex>
 * @param companyPhone เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>
 * @param companyMobile เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>
 * @param companyFax เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>
 * @param companyWebsite เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>
 */

data class CompanyInfo (
    /* ชื่อบริษัท */
    @Json(name = "compnayName")
    val compnayName: kotlin.String,
    /* ประเภทธุรกิจ <br> 10 = บริษัท - จดภาษีมูลค่าเพิ่มแล้ว <br> 20 = บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 30 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 40 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 50 = ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว <br> 60 = ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม */
    @Json(name = "companyType")
    val companyType: kotlin.String? = null,
    /* ชื่อบริษัท ภาษาอังกฤษ */
    @Json(name = "companyNameEn")
    val companyNameEn: kotlin.String? = null,
    /* ที่อยู่บริษัท */
    @Json(name = "companyAddress")
    val companyAddress: kotlin.String? = null,
    /* ที่อยู่บริษัท ภาษาอังกฤษ */
    @Json(name = "companyAddressEn")
    val companyAddressEn: kotlin.String? = null,
    /* รหัสไปรษณีย์ บริษัท <br><ex>Example: 10150</ex> */
    @Json(name = "companyZipCode")
    val companyZipCode: kotlin.String? = null,
    /* เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex> */
    @Json(name = "companyTaxId")
    val companyTaxId: kotlin.String? = null,
    /* ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่</ex> */
    @Json(name = "companyBranch")
    val companyBranch: kotlin.String? = null,
    /* ชื่อ และ รหัสสาขา ภาษาอังกฤษ <br><ex>Example: Head Office</ex> */
    @Json(name = "companyBranchEn")
    val companyBranchEn: kotlin.String? = null,
    /* รหัสสาขา <br><ex>Example: 00000</ex> */
    @Json(name = "companyBranchCode")
    val companyBranchCode: kotlin.String? = null,
    /* เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex> */
    @Json(name = "companyPhone")
    val companyPhone: kotlin.String? = null,
    /* เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex> */
    @Json(name = "companyMobile")
    val companyMobile: kotlin.String? = null,
    /* เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex> */
    @Json(name = "companyFax")
    val companyFax: kotlin.String? = null,
    /* เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex> */
    @Json(name = "companyWebsite")
    val companyWebsite: kotlin.String? = null
)

