//
// AttachmentResponse.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct AttachmentResponse: Codable { 


    /** action success */
    public var status: Bool?
    /** error message */
    public var message: String?
    /** error code */
    public var code: Int?
    /** ข้อมูลไฟล์แนบเอกสาร */
    public var data: [AttachmentResponseData]?

    public init(status: Bool?, message: String?, code: Int?, data: [AttachmentResponseData]?) {
        self.status = status
        self.message = message
        self.code = code
        self.data = data
    }

}
