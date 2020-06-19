/*
 * FlowAccount Open API
 *
 * # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * API version: 2-oas3
 * Contact: developer_support@flowaccount.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi
// CompanyInfoResponseData ข้อมูลบริษัทเรา
type CompanyInfoResponseData struct {
	// รหัสบริษัท
	CompanyId int64 `json:"companyId,omitempty"`
	// ประเภทธุรกิจ <br> 10 = บริษัท - จดภาษีมูลค่าเพิ่มแล้ว <br> 20 = บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 30 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 40 = บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม <br> 50 = ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว <br> 60 = ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม
	CompanyType string `json:"companyType,omitempty"`
	// ชื่อบริษัท
	CompnayName string `json:"compnayName,omitempty"`
	// ชื่อบริษัท ภาษาอังกฤษ
	CompanyNameEn string `json:"companyNameEn,omitempty"`
	// ที่อยู่บริษัท
	CompanyAddress string `json:"companyAddress,omitempty"`
	// ที่อยู่บริษัท ภาษาอังกฤษ
	CompanyAddressEn string `json:"companyAddressEn,omitempty"`
	// รหัสไปรษณีย์ บริษัท <br><ex>Example: 10150</ex>
	CompanyZipCode string `json:"companyZipCode,omitempty"`
	// เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>
	CompanyTaxId string `json:"companyTaxId,omitempty"`
	// ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่</ex>
	CompanyBranch string `json:"companyBranch,omitempty"`
	// ชื่อ และ รหัสสาขา ภาษาอังกฤษ <br><ex>Example: Head Office</ex>
	CompanyBranchEn string `json:"companyBranchEn,omitempty"`
	// รหัสสาขา <br><ex>Example: 00000</ex>
	CompanyBranchCode string `json:"companyBranchCode,omitempty"`
	// เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>
	CompanyPhone string `json:"companyPhone,omitempty"`
	// เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>
	CompanyMobile string `json:"companyMobile,omitempty"`
	// เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>
	CompanyFax string `json:"companyFax,omitempty"`
	// เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>
	CompanyWebsite string `json:"companyWebsite,omitempty"`
}
