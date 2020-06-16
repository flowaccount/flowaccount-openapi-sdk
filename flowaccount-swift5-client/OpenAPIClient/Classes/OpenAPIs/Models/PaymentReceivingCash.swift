//
// PaymentReceivingCash.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct PaymentReceivingCash: Codable { 


    /** รับชำระเงิน ด้วยเงินสด */
    public var paymentStructureType: String?
    /** id เอกสาร */
    public var documentId: Int64
    /** ประเภทการเก็บเงิน &lt;br&gt; 1 &#x3D; เงินสด */
    public var paymentMethod: Int64 = 1
    /** วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; */
    public var paymentDate: Date
    /** จำนวนเงินยอดรับสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; */
    public var collected: Double = 0
    /** ประเภทรายการปรับลด &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; */
    public var paymentDeductionType: Int64? = 0
    /** จำนวนเงินยอดรายการปรับลด &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; */
    public var paymentDeductionAmount: Double? = 0
    /** เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt; */
    public var withheldPercentage: Int64? = 0
    /** จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; */
    public var withheldAmount: Double? = 0
    /** หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน */
    public var paymentRemarks: String?
    /** สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร  */
    public var remainingCollectedType: Int64? = 0
    /** จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; */
    public var remainingCollected: Double? = 0

    public init(paymentStructureType: String?, documentId: Int64, paymentMethod: Int64, paymentDate: Date, collected: Double, paymentDeductionType: Int64?, paymentDeductionAmount: Double?, withheldPercentage: Int64?, withheldAmount: Double?, paymentRemarks: String?, remainingCollectedType: Int64?, remainingCollected: Double?) {
        self.paymentStructureType = paymentStructureType
        self.documentId = documentId
        self.paymentMethod = paymentMethod
        self.paymentDate = paymentDate
        self.collected = collected
        self.paymentDeductionType = paymentDeductionType
        self.paymentDeductionAmount = paymentDeductionAmount
        self.withheldPercentage = withheldPercentage
        self.withheldAmount = withheldAmount
        self.paymentRemarks = paymentRemarks
        self.remainingCollectedType = remainingCollectedType
        self.remainingCollected = remainingCollected
    }

}
