//
// ExpenseSimpleProductItem.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct ExpenseSimpleProductItem: Codable { 


    /** เลขที่ system code หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) */
    public var systemCode: Int
    /** เลขที่ id หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ) &lt;br&gt; &lt;ex&gt;Example: 40238&lt;/ex&gt; */
    public var categoryId: Int
    /** รายละเอียดค่าใช้จ่าย */
    public var description: String
    /** ชื่อหมวดหมู่ค่าใช้จ่าย &lt;br&gt; &lt;ex&gt;Example: การตลาดและโฆษณา&lt;/ex&gt; */
    public var nameLocal: String
    /** ชื่อหมวดหมู่ค่าใช้จ่าย (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: Marketing &amp; Advertising&lt;/ex&gt; */
    public var nameForeign: String
    /** เลขหมวดหมู่ ฝั่งเครดิต ของ หมวดหมู่ค่าใช้จ่าย &lt;br&gt; &lt;ex&gt;Example: 2&lt;/ex&gt; */
    public var creditCategory: Int
    /** เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิิต &lt;br&gt; &lt;ex&gt;Example: 1081994&lt;/ex&gt; */
    public var creditId: Int
    /** เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต &lt;br&gt; &lt;ex&gt;Example: 21399&lt;/ex&gt; */
    public var creditCode: String
    /** ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต &lt;br&gt; &lt;ex&gt;Example: 21399 / เจ้าหนี้อื่นๆ&lt;/ex&gt; */
    public var creditNameLocal: String
    /** ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: 21399 / Other Payables&lt;/ex&gt; */
    public var creditNameForeign: String
    /** เลขหมวดหมู่ ฝั่งเดบิต ของ หมวดหมู่ค่าใช้จ่าย */
    public var debitCategory: Int
    /** เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 1082099&lt;/ex&gt; */
    public var debitId: Int
    /** เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 53029&lt;/ex&gt; */
    public var debitCode: String
    /** ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต &lt;br&gt; &lt;ex&gt;Example: 53029 / ค่าใช้จ่ายด้านโฆษณาและการตลาดอื่นๆ&lt;/ex&gt; */
    public var debitNameLocal: String
    /** ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต (ภาษาอังกฤษ) &lt;br&gt; &lt;ex&gt;Example: 53029 / Other advertising and marketing expenses&lt;/ex&gt; */
    public var debitNameForeign: String
    /** จำนวนรายการค่าใช้จ่าย */
    public var quantity: Double
    /** หน่วยรายการค่าใช้จ่าย */
    public var unitName: String?
    /** ราคาต่อหน่วยค่าใช้จ่าย */
    public var pricePerUnit: Double
    /** ราคารวมค่าใช้จ่าย */
    public var total: Double

    public init(systemCode: Int, categoryId: Int, description: String, nameLocal: String, nameForeign: String, creditCategory: Int, creditId: Int, creditCode: String, creditNameLocal: String, creditNameForeign: String, debitCategory: Int, debitId: Int, debitCode: String, debitNameLocal: String, debitNameForeign: String, quantity: Double, unitName: String?, pricePerUnit: Double, total: Double) {
        self.systemCode = systemCode
        self.categoryId = categoryId
        self.description = description
        self.nameLocal = nameLocal
        self.nameForeign = nameForeign
        self.creditCategory = creditCategory
        self.creditId = creditId
        self.creditCode = creditCode
        self.creditNameLocal = creditNameLocal
        self.creditNameForeign = creditNameForeign
        self.debitCategory = debitCategory
        self.debitId = debitId
        self.debitCode = debitCode
        self.debitNameLocal = debitNameLocal
        self.debitNameForeign = debitNameForeign
        self.quantity = quantity
        self.unitName = unitName
        self.pricePerUnit = pricePerUnit
        self.total = total
    }

}