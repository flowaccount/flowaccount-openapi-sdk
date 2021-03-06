//
// ContactResponseData.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct ContactResponseData: Codable { 


    /** จำนวนรายชื่อติดต่อทั้งหมด */
    public var total: Int?
    /** หน้าที่แสดงรายชื่อผู้ติดต่อ */
    public var currentPage: Int?
    /** ข้อมูลรายชื่อผู้ติดต่อ */
    public var list: [Contact]?
    /** database */
    public var isDB: Bool?

    public init(total: Int?, currentPage: Int?, list: [Contact]?, isDB: Bool?) {
        self.total = total
        self.currentPage = currentPage
        self.list = list
        self.isDB = isDB
    }

}
