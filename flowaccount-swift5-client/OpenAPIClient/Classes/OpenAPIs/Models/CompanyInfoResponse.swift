//
// CompanyInfoResponse.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct CompanyInfoResponse: Codable { 


    /** action success */
    public var status: Bool?
    /** error message */
    public var message: String?
    /** error code */
    public var code: Int?
    public var data: CompanyInfoResponseData?

    public init(status: Bool?, message: String?, code: Int?, data: CompanyInfoResponseData?) {
        self.status = status
        self.message = message
        self.code = code
        self.data = data
    }

}
