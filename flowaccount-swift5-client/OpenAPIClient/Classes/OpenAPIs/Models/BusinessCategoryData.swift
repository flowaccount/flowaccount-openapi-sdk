//
// BusinessCategoryData.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct BusinessCategoryData: Codable { 


    /** id ของหมวดหมู่ค่าใช้จ่าย */
    public var id: Int?
    /** เลขที่ system code หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) */
    public var systemCode: Int?
    /** เลขที่ id หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) */
    public var categoryId: Int?
    /** ชื่อหมวดหมู่ค่าใช้จ่าย */
    public var categoryNameLocal: String?
    /** ชื่อหมวดหมู่ค่าใช้จ่าย (ภาษาอังกฤษ) */
    public var categoryNameForeign: String?
    /** เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต */
    public var debitId: Int?
    /** เลขหมวดหมู่ ฝั่งเดบิต ของ หมวดหมู่ค่าใช้จ่าย */
    public var debitCategory: Int?
    /** เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต */
    public var debitCode: String?
    /** ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต */
    public var debitNameLocal: String?
    /** ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต (ภาษาอังกฤษ) */
    public var debitNameForeign: String?
    /** เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิิต */
    public var creditId: Int?
    /** เลขหมวดหมู่ ฝั่งเครดิต ของ หมวดหมู่ค่าใช้จ่าย */
    public var creditCategory: Int?
    /** เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต */
    public var creditCode: String?
    /** ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต  */
    public var creditNameLocal: String?
    /** ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต (ภาษาอังกฤษ) */
    public var creditNameForeign: String?
    /** keyword */
    public var keywords: String?

    public init(id: Int?, systemCode: Int?, categoryId: Int?, categoryNameLocal: String?, categoryNameForeign: String?, debitId: Int?, debitCategory: Int?, debitCode: String?, debitNameLocal: String?, debitNameForeign: String?, creditId: Int?, creditCategory: Int?, creditCode: String?, creditNameLocal: String?, creditNameForeign: String?, keywords: String?) {
        self.id = id
        self.systemCode = systemCode
        self.categoryId = categoryId
        self.categoryNameLocal = categoryNameLocal
        self.categoryNameForeign = categoryNameForeign
        self.debitId = debitId
        self.debitCategory = debitCategory
        self.debitCode = debitCode
        self.debitNameLocal = debitNameLocal
        self.debitNameForeign = debitNameForeign
        self.creditId = creditId
        self.creditCategory = creditCategory
        self.creditCode = creditCode
        self.creditNameLocal = creditNameLocal
        self.creditNameForeign = creditNameForeign
        self.keywords = keywords
    }

}