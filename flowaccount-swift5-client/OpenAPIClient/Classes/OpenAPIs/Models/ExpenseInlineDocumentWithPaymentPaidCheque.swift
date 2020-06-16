//
// ExpenseInlineDocumentWithPaymentPaidCheque.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct ExpenseInlineDocumentWithPaymentPaidCheque: Codable { 


    /** รหัส ลูกค้า/ผู้จำหน่าย */
    public var contactCode: String?
    /** ชื่อ ลูกค้า/ผู้จำหน่าย &lt;br&gt; &lt;ex&gt;Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ&lt;/ex&gt; */
    public var contactName: String
    /** ที่อยู่ ลูกค้า/ผู้จำหน่าย */
    public var contactAddress: String?
    /** เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; */
    public var contactTaxId: String?
    /** สำนักงาน/สาขา */
    public var contactBranch: String?
    /** ชื่อผู้ติดต่อ */
    public var contactPerson: String?
    /** อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; */
    public var contactEmail: String?
    /** เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; */
    public var contactNumber: String?
    /** รหัสไปรษณีย์ติดต่อ */
    public var contactZipCode: String?
    /** ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล */
    public var contactGroup: Int? = 1
    /** วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; */
    public var publishedOn: Date
    /** รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) */
    public var creditType: Int? = 1
    /** จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; */
    public var creditDays: Int? = 0
    /** วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; */
    public var dueDate: Date
    /** ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; */
    public var salesName: String? = "อีเมล หรือ ชื่อผู้สร้างเอกสาร"
    /** ชื่อโปรเจค */
    public var projectName: String?
    /** เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; */
    public var reference: String?
    /** มูลค่าเอกสารรวมภาษีแล้วหรือไม่ */
    public var isVatInclusive: Bool? = false
    /** รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense */
    public var items: [ExpenseInlineProductItem]?
    /** มูลค่ารวมเป็นเงิน */
    public var subTotal: Double? = 0
    /** มูลค่าส่วนลดเป็นเปอร์เซ็นต์ */
    public var discountPercentage: Int? = 0
    /** มูลค่าส่วนลดเป็นจำนวน (บาท) */
    public var discountAmount: Double? = 0
    /** มูลค่าหลังหักส่วนลด */
    public var totalAfterDiscount: Double
    /** มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7% */
    public var isVat: Bool? = false
    /** ภาษีมูลค่าเพิ่ม */
    public var vatAmount: Double?
    /** จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) */
    public var grandTotal: Double
    /** รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท) */
    public var discountType: Int? = 1
    /** inline discount ใช้งานส่วนลด แยกตามรายการสินค้า */
    public var useInlineDiscount: Bool? = true
    /** inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า */
    public var useInlineVat: Bool?
    /** ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม */
    public var exemptAmount: Double? = 0
    /** หมายเหตุเอกสาร */
    public var remarks: String?
    /** โน๊ตภายในบริษัท */
    public var internalNotes: String?
    /** ลายเซ็นอิเล็กทรอนิกส์และตรายาง */
    public var showSignatureOrStamp: Bool? = true
    /** สร้างเอกสารแบบ Simple พร้อมชำระเงิน ด้วยเช็ค */
    public var expensePaymentStructureType: String?
    /** ประเภทการชำระเงิน &lt;br&gt; 3 &#x3D; เช็ค */
    public var paymentMethod: Int64 = 1
    /** วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; */
    public var paymentDate: Date
    /** จำนวนเงินยอดจ่ายสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; */
    public var collected: Double = 0
    /** เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt; */
    public var withheldPercentage: Int64? = 0
    /** จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; */
    public var withheldAmount: Double? = 0
    /** วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; */
    public var chequeDate: Date?
    /** เลขที่เช็คธนาคาร &lt;br&gt; &lt;ex&gt;Example: 122-122-122&lt;/ex&gt; */
    public var chequeNumber: String?
    /** ธนาคารที่ระบุหน้าเช็ค &lt;br&gt; 1 &#x3D; ธนาคารกรุงเทพ &lt;br&gt; 2 &#x3D; ธนาคารกสิกรไทย &lt;br&gt; 3 &#x3D; ธนาคารกรุงไทย &lt;br&gt; 4 &#x3D; ธนาคารทหารไทย &lt;br&gt; 5 &#x3D; ธนาคารไทยพาณิชย์ &lt;br&gt; 6 &#x3D; ธนาคารสแตนดาร์ดชาร์เตอร์ด &lt;br&gt; 7 &#x3D; ธนาคารซีไอเอ็มบี ไทย &lt;br&gt; 8 &#x3D; ธนาคารยูโอบี &lt;br&gt; 10 &#x3D; ธนาคารกรุงศรีอยุธยา &lt;br&gt; 11 &#x3D; ธนาคารออมสิน &lt;br&gt; 12 &#x3D; ธนาคารธนชาต &lt;br&gt; 13 &#x3D; ธนาคารแลนด์ แอนด์ เฮ้าส์ &lt;br&gt; 14 &#x3D; ธนาคารเกียรตินาคิน &lt;br&gt; 15 &#x3D; ธนาคารซิตี้แบงก์ &lt;br&gt; 16 &#x3D; ธนาคารทิสโก้ &lt;br&gt; 53 &#x3D; ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร &lt;br&gt; 54 &#x3D; ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย &lt;br&gt; 55 &#x3D; ธนาคารอาคารสงเคราะห์ &lt;br&gt; 56 &#x3D; ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย &lt;br&gt; 57 &#x3D; ธนาคารอิสลามแห่งประเทศไทย &lt;br&gt; 58 &#x3D; ธนาคารแห่งประเทศจีน (ไทย) &lt;br&gt; 59 &#x3D; ธนาคารไอซีบีซี (ไทย) &lt;br&gt; 60 &#x3D; ธนาคารเมกะ สากลพาณิชย์ &lt;br&gt; 61 &#x3D; ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น &lt;br&gt; 62 &#x3D; ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) &lt;br&gt; 63 &#x3D; ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น &lt;br&gt; 64 &#x3D; ธนาคารไทยเครดิต เพื่อรายย่อย  */
    public var chequeBankAccountId: Int64? = 0
    /** เลข id บัญชีธนาคารที่ใช้ชำระเงิน &lt;br&gt;&lt;red&gt;สามารถ GET มาได้จาก My Company &gt; Bank Account &lt;/red&gt;&lt;br&gt; &lt;ex&gt;Example: 12345&lt;/ex&gt; */
    public var bankAccountId: Int64? = 0
    /** ค่าธรรมเนียม ที่ชำระโดยเช็ค &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; */
    public var paymentCharge: Double? = 0
    /** หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน */
    public var paymentRemarks: String?
    /** สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร  */
    public var remainingCollectedType: Int64? = 0
    /** จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; */
    public var remainingCollected: Double? = 0

    public init(contactCode: String?, contactName: String, contactAddress: String?, contactTaxId: String?, contactBranch: String?, contactPerson: String?, contactEmail: String?, contactNumber: String?, contactZipCode: String?, contactGroup: Int?, publishedOn: Date, creditType: Int?, creditDays: Int?, dueDate: Date, salesName: String?, projectName: String?, reference: String?, isVatInclusive: Bool?, items: [ExpenseInlineProductItem]?, subTotal: Double?, discountPercentage: Int?, discountAmount: Double?, totalAfterDiscount: Double, isVat: Bool?, vatAmount: Double?, grandTotal: Double, discountType: Int?, useInlineDiscount: Bool?, useInlineVat: Bool?, exemptAmount: Double?, remarks: String?, internalNotes: String?, showSignatureOrStamp: Bool?, expensePaymentStructureType: String?, paymentMethod: Int64, paymentDate: Date, collected: Double, withheldPercentage: Int64?, withheldAmount: Double?, chequeDate: Date?, chequeNumber: String?, chequeBankAccountId: Int64?, bankAccountId: Int64?, paymentCharge: Double?, paymentRemarks: String?, remainingCollectedType: Int64?, remainingCollected: Double?) {
        self.contactCode = contactCode
        self.contactName = contactName
        self.contactAddress = contactAddress
        self.contactTaxId = contactTaxId
        self.contactBranch = contactBranch
        self.contactPerson = contactPerson
        self.contactEmail = contactEmail
        self.contactNumber = contactNumber
        self.contactZipCode = contactZipCode
        self.contactGroup = contactGroup
        self.publishedOn = publishedOn
        self.creditType = creditType
        self.creditDays = creditDays
        self.dueDate = dueDate
        self.salesName = salesName
        self.projectName = projectName
        self.reference = reference
        self.isVatInclusive = isVatInclusive
        self.items = items
        self.subTotal = subTotal
        self.discountPercentage = discountPercentage
        self.discountAmount = discountAmount
        self.totalAfterDiscount = totalAfterDiscount
        self.isVat = isVat
        self.vatAmount = vatAmount
        self.grandTotal = grandTotal
        self.discountType = discountType
        self.useInlineDiscount = useInlineDiscount
        self.useInlineVat = useInlineVat
        self.exemptAmount = exemptAmount
        self.remarks = remarks
        self.internalNotes = internalNotes
        self.showSignatureOrStamp = showSignatureOrStamp
        self.expensePaymentStructureType = expensePaymentStructureType
        self.paymentMethod = paymentMethod
        self.paymentDate = paymentDate
        self.collected = collected
        self.withheldPercentage = withheldPercentage
        self.withheldAmount = withheldAmount
        self.chequeDate = chequeDate
        self.chequeNumber = chequeNumber
        self.chequeBankAccountId = chequeBankAccountId
        self.bankAccountId = bankAccountId
        self.paymentCharge = paymentCharge
        self.paymentRemarks = paymentRemarks
        self.remainingCollectedType = remainingCollectedType
        self.remainingCollected = remainingCollected
    }

}
