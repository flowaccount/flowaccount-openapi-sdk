//
// UpgradeDocument.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation

/** ข้อมูลเอกสารต้นทาง ที่ต้องการอัพเกรดเป็นเอกสารที่ต้องการ */
public struct UpgradeDocument: Codable { 


    /** id ของเอกสารต้นทาง */
    public var recordId: Int64
    /** เลขที่เอกสารต้นทาง &lt;br&gt; &lt;ex&gt;Example: QT20200101&lt;/ex&gt; */
    public var referenceDocumentSerial: String
    /** เลขประเภทของเอกสารต้นทาง &lt;br&gt; Quotaions &#x3D; 3 &lt;br&gt; Billing Notes &#x3D; 5 &lt;br&gt; Tax Invoices &#x3D; 7 &lt;br&gt; &lt;ex&gt;Example: 3&lt;/ex&gt; */
    public var referenceDocumentType: Int64

    public init(recordId: Int64, referenceDocumentSerial: String, referenceDocumentType: Int64) {
        self.recordId = recordId
        self.referenceDocumentSerial = referenceDocumentSerial
        self.referenceDocumentType = referenceDocumentType
    }

}
