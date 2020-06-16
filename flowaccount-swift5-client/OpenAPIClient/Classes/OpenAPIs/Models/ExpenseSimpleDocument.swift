//
// ExpenseSimpleDocument.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct ExpenseSimpleDocument: Codable { 


    /** รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า */
    public var contactCode: String?
    /** ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า */
    public var contactName: String
    /** ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า */
    public var contactAddress: String?
    /** เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; */
    public var contactTaxId: String?
    /** สำนักงาน/สาขา */
    public var contactBranch: String?
    /** ชื่อผู้ติดต่อ */
    public var contactPerson: String?
    /** อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: supplier@email.com&lt;/ex&gt; */
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
    public var dueDate: Date?
    /** ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; */
    public var salesName: String? = "อีเมล หรือ ชื่อผู้สร้างเอกสาร"
    /** ชื่อโปรเจค */
    public var projectName: String?
    /** เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; */
    public var reference: String?
    /** มูลค่าเอกสารรวมภาษีแล้วหรือไม่ */
    public var isVatInclusive: Bool? = false
    /** มูลค่ารวมเป็นเงิน */
    public var subTotal: Double = 0
    /** มูลค่าส่วนลดเป็นเปอร์เซ็นต์ */
    public var discountPercentage: Int? = 0
    /** มูลค่าส่วนลดเป็นจำนวน (บาท) */
    public var discountAmount: Double? = 0
    /** มูลค่าหลังหักส่วนลด */
    public var totalAfterDiscount: Double
    /** มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7% */
    public var isVat: Bool? = false
    /** ภาษีมูลค่าเพิ่ม */
    public var vatAmount: Double?
    /** จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) */
    public var grandTotal: Double
    /** หมายเหตุเอกสาร */
    public var remarks: String?
    /** โน๊ตภายในบริษัท */
    public var internalNotes: String?
    /** ลายเซ็นอิเล็กทรอนิกส์และตรายาง */
    public var showSignatureOrStamp: Bool? = true
    public var expenseStructureType: String?
    /** รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense */
    public var items: [ExpenseSimpleProductItem]?

    public init(contactCode: String?, contactName: String, contactAddress: String?, contactTaxId: String?, contactBranch: String?, contactPerson: String?, contactEmail: String?, contactNumber: String?, contactZipCode: String?, contactGroup: Int?, publishedOn: Date, creditType: Int?, creditDays: Int?, dueDate: Date?, salesName: String?, projectName: String?, reference: String?, isVatInclusive: Bool?, subTotal: Double, discountPercentage: Int?, discountAmount: Double?, totalAfterDiscount: Double, isVat: Bool?, vatAmount: Double?, grandTotal: Double, remarks: String?, internalNotes: String?, showSignatureOrStamp: Bool?, expenseStructureType: String?, items: [ExpenseSimpleProductItem]?) {
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
        self.subTotal = subTotal
        self.discountPercentage = discountPercentage
        self.discountAmount = discountAmount
        self.totalAfterDiscount = totalAfterDiscount
        self.isVat = isVat
        self.vatAmount = vatAmount
        self.grandTotal = grandTotal
        self.remarks = remarks
        self.internalNotes = internalNotes
        self.showSignatureOrStamp = showSignatureOrStamp
        self.expenseStructureType = expenseStructureType
        self.items = items
    }

}
