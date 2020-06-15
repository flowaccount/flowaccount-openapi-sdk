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
// UpdateDocument struct for UpdateDocument
type UpdateDocument struct {
	// id ของเอกสาร
	RecordId int64 `json:"recordId,omitempty"`
	// ชื่อบริษัท
	CompanyName string `json:"companyName"`
	// ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
	CompanyNameEn string `json:"companyNameEn,omitempty"`
	// ที่อยู่บริษัท
	CompanyAddress string `json:"companyAddress,omitempty"`
	// ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
	CompanyAddressEn string `json:"companyAddressEn,omitempty"`
	// เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>
	CompanyTaxId string `json:"companyTaxId,omitempty"`
	// ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex>
	CompanyBranch string `json:"companyBranch"`
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
	// รหัส ลูกค้า/ผู้จำหน่าย
	ContactCode string `json:"contactCode,omitempty"`
	// ชื่อ ลูกค้า/ผู้จำหน่าย <br> <ex>Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ</ex>
	ContactName string `json:"contactName"`
	// ที่อยู่ ลูกค้า/ผู้จำหน่าย
	ContactAddress string `json:"contactAddress,omitempty"`
	// เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
	ContactTaxId string `json:"contactTaxId,omitempty"`
	// สำนักงาน/สาขา
	ContactBranch string `json:"contactBranch,omitempty"`
	// ชื่อผู้ติดต่อ
	ContactPerson string `json:"contactPerson,omitempty"`
	// อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>
	ContactEmail string `json:"contactEmail,omitempty"`
	// เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
	ContactNumber string `json:"contactNumber,omitempty"`
	// รหัสไปรษณีย์
	ContactZipCode string `json:"contactZipCode,omitempty"`
	// ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
	ContactGroup int32 `json:"contactGroup,omitempty"`
	// วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
	PublishedOn string `json:"publishedOn"`
	// รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด)
	CreditType int32 `json:"creditType,omitempty"`
	// จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex>
	CreditDays int32 `json:"creditDays,omitempty"`
	// วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
	DueDate string `json:"dueDate"`
	// ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex>
	SalesName string `json:"salesName,omitempty"`
	// ชื่อโปรเจค
	ProjectName string `json:"projectName,omitempty"`
	// เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex>
	Reference string `json:"reference,omitempty"`
	// มูลค่าเอกสารรวมภาษีแล้วหรือไม่
	IsVatInclusive bool `json:"isVatInclusive,omitempty"`
	// เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร <br> (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน)
	UseReceiptDeduction bool `json:"useReceiptDeduction,omitempty"`
	// มูลค่ารวมเป็นเงิน
	SubTotal float32 `json:"subTotal,omitempty"`
	// มูลค่าส่วนลดเป็นเปอร์เซ็นต์
	DiscountPercentage int32 `json:"discountPercentage,omitempty"`
	// มูลค่าส่วนลดเป็นจำนวน (บาท)
	DiscountAmount float32 `json:"discountAmount,omitempty"`
	// มูลค่าหลังหักส่วนลด
	TotalAfterDiscount float32 `json:"totalAfterDiscount"`
	// มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7%
	IsVat bool `json:"isVat,omitempty"`
	// ภาษีมูลค่าเพิ่ม
	VatAmount float32 `json:"vatAmount,omitempty"`
	// จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
	GrandTotal float32 `json:"grandTotal"`
	// แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร
	DocumentShowWithholdingTax bool `json:"documentShowWithholdingTax,omitempty"`
	// ภาษี ณ ที่จ่าย (%)
	DocumentWithholdingTaxPercentage int32 `json:"documentWithholdingTaxPercentage,omitempty"`
	// มูลค่าภาษีหัก ณ ที่จ่าย
	DocumentWithholdingTaxAmount float32 `json:"documentWithholdingTaxAmount,omitempty"`
	// ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
	DocumentDeductionType int32 `json:"documentDeductionType,omitempty"`
	// จำนวนเงินยอดรายการปรับลด <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
	DocumentDeductionAmount float32 `json:"documentDeductionAmount,omitempty"`
	// หมายเหตุเอกสาร
	Remarks string `json:"remarks,omitempty"`
	// โน๊ตภายในบริษัท
	InternalNotes string `json:"internalNotes,omitempty"`
	// ลายเซ็นอิเล็กทรอนิกส์และตรายาง
	ShowSignatureOrStamp bool `json:"showSignatureOrStamp,omitempty"`
	DocumentStructureType *string `json:"documentStructureType"`
}
