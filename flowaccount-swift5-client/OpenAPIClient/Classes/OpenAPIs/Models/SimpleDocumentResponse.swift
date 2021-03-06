//
// SimpleDocumentResponse.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct SimpleDocumentResponse: Codable { 


    /** action success */
    public var status: Bool?
    /** error message */
    public var message: String?
    /** error code */
    public var code: Int?
    public var documentStructureType: String?
    public var data: SimpleDocumentResponseAllOfData?

    public init(status: Bool?, message: String?, code: Int?, documentStructureType: String?, data: SimpleDocumentResponseAllOfData?) {
        self.status = status
        self.message = message
        self.code = code
        self.documentStructureType = documentStructureType
        self.data = data
    }

}
