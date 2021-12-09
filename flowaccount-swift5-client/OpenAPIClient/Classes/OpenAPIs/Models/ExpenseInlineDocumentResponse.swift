//
// ExpenseInlineDocumentResponse.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct ExpenseInlineDocumentResponse: Codable { 


    /** action success */
    public var status: Bool?
    /** error message */
    public var message: String?
    /** error code */
    public var code: Int?
    public var expenseStructureType: String?
    public var data: ExpenseInlineDocumentResponseAllOfData?

    public init(status: Bool?, message: String?, code: Int?, expenseStructureType: String?, data: ExpenseInlineDocumentResponseAllOfData?) {
        self.status = status
        self.message = message
        self.code = code
        self.expenseStructureType = expenseStructureType
        self.data = data
    }

}