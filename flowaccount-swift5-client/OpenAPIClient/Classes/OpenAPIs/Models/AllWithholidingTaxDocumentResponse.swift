//
// AllWithholidingTaxDocumentResponse.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct AllWithholidingTaxDocumentResponse: Codable { 


    /** action success */
    public var status: Bool?
    /** error message */
    public var message: String?
    /** error code */
    public var code: Int?
    public var data: AllWithholidingTaxDocumentResponseData?

    public init(status: Bool?, message: String?, code: Int?, data: AllWithholidingTaxDocumentResponseData?) {
        self.status = status
        self.message = message
        self.code = code
        self.data = data
    }

}
