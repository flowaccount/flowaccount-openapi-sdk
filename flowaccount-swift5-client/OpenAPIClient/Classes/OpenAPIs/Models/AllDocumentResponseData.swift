//
// AllDocumentResponseData.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct AllDocumentResponseData: Codable { 


    /** ข้อมูลรายการสินค้า */
    public var list: [InlineDocumentResponseAllOfData]?

    public init(list: [InlineDocumentResponseAllOfData]?) {
        self.list = list
    }

}
