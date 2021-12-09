//
// ReferencedByMe.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct ReferencedByMe: Codable { 


    /** ID เอกสารฉบับนี้ */
    public var referenceId: Int?
    /** ประเภทของเอกสารฉบับนี้ */
    public var referenceDocumentType: Int?
    /** เลขที่เอกสารฉบับนี้ */
    public var referenceDocumentSerial: String?
    /** ID เอกสารต้นทางที่อ้างอิง ถึง เอกสารฉบับนี้ */
    public var documentId: Int?
    /** เลขที่เอกสารต้นทางที่อ้างอิง ถึง เอกสารฉบับนี้ */
    public var documentSerial: Int?
    public var type: Int? = 1

    public init(referenceId: Int?, referenceDocumentType: Int?, referenceDocumentSerial: String?, documentId: Int?, documentSerial: Int?, type: Int?) {
        self.referenceId = referenceId
        self.referenceDocumentType = referenceDocumentType
        self.referenceDocumentSerial = referenceDocumentSerial
        self.documentId = documentId
        self.documentSerial = documentSerial
        self.type = type
    }

}