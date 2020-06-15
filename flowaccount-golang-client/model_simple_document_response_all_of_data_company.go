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
// SimpleDocumentResponseAllOfDataCompany ข้อมูลบริษัทของคุณในเอกสาร
type SimpleDocumentResponseAllOfDataCompany struct {
	// ชื่อบริษัท
	CompanyName string `json:"companyName,omitempty"`
	// ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
	CompanyNameEn string `json:"companyNameEn,omitempty"`
	// ที่อยู่บริษัท
	CompanyAddress string `json:"companyAddress,omitempty"`
	// ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
	CompanyAddressEn string `json:"companyAddressEn,omitempty"`
	// เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>
	CompanyTaxId string `json:"companyTaxId,omitempty"`
	// ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex>
	CompanyBranch string `json:"companyBranch,omitempty"`
	// ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) <br><ex>Example: Head Office 00000</ex>
	CompanyBranchEn string `json:"companyBranchEn,omitempty"`
	// เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>
	CompanyPhone string `json:"companyPhone,omitempty"`
	// เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>
	CompanyMobile string `json:"companyMobile,omitempty"`
	// เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>
	CompanyFax string `json:"companyFax,omitempty"`
	// เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>
	CompanyWebsite string `json:"companyWebsite,omitempty"`
}