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
// ExpenseSimpleDocumentWithPaymentPaidTransfer struct for ExpenseSimpleDocumentWithPaymentPaidTransfer
type ExpenseSimpleDocumentWithPaymentPaidTransfer struct {
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
	// รหัสไปรษณีย์ติดต่อ
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
	// รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense
	Items []ExpenseSimpleProductItem `json:"items,omitempty"`
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
	// หมายเหตุเอกสาร
	Remarks string `json:"remarks,omitempty"`
	// โน๊ตภายในบริษัท
	InternalNotes string `json:"internalNotes,omitempty"`
	// ลายเซ็นอิเล็กทรอนิกส์และตรายาง
	ShowSignatureOrStamp bool `json:"showSignatureOrStamp,omitempty"`
	// สร้างเอกสารแบบ Simple พร้อมชำระเงิน ด้วยการโอนเงิน
	ExpensePaymentStructureType *string `json:"expensePaymentStructureType"`
	// ประเภทการชำระเงิน <br> 5 = โอนเงิน 
	PaymentMethod int64 `json:"paymentMethod"`
	// วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
	PaymentDate string `json:"paymentDate"`
	// จำนวนเงินยอดจ่ายสุทธิ <br> <ex> Example : 100.00 </ex>
	Collected float32 `json:"collected"`
	// เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>
	WithheldPercentage int64 `json:"withheldPercentage,omitempty"`
	// จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>
	WithheldAmount float32 `json:"withheldAmount,omitempty"`
	// ธนาคารที่ใช้รับชำระเงิน ธนาคารที่ชำระเงิน <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
	TransferBankAccountId int64 `json:"transferBankAccountId,omitempty"`
	// เลข id บัญชีธนาคารที่ใช้ชำระเงิน <br><red>สามารถ GET มาได้จาก My Company > Bank Account </red><br> <ex>Example: 12345</ex>
	BankAccountId int64 `json:"bankAccountId,omitempty"`
	// ค่าธรรมเนียม ที่ชำระโดยการโอนเงิน <ex> Example : 100.00 </ex>
	PaymentCharge float32 `json:"paymentCharge,omitempty"`
	// หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน
	PaymentRemarks string `json:"paymentRemarks,omitempty"`
	// สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร 
	RemainingCollectedType int64 `json:"remainingCollectedType,omitempty"`
	// จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex>
	RemainingCollected float32 `json:"remainingCollected,omitempty"`
}
