//
// AllWithholidingTaxDocumentResponseData.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct AllWithholidingTaxDocumentResponseData: Codable { 


    /** ข้อมูลรายการสินค้า */
    public var list: [WithholidingTaxDocumentResponseData]?

    public init(list: [WithholidingTaxDocumentResponseData]?) {
        self.list = list
    }

}
