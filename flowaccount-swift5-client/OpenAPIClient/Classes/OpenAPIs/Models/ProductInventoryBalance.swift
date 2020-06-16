//
// ProductInventoryBalance.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation


public struct ProductInventoryBalance: Codable { 


    /** สร้างสินค้าประเภท นับสต๊อก พร้อมตั้งค่ายอดเริ่มต้น */
    public var productStructureType: String?
    /** ประเภทสินค้า: &lt;br&gt;1 &#x3D; บริการ &lt;br&gt; 3 &#x3D; ไม่นับสต๊อก &lt;br&gt; 5 &#x3D; นับสต๊อก */
    public var type: Int64 = 1
    /** รหัสสินค้า / SKU &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; */
    public var code: String?
    /** ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; */
    public var name: String
    /** รายละเอียดสินค้า ฝั่งขาย */
    public var sellDescription: String?
    /** ราคาขายสินค้า */
    public var sellPrice: Double?
    /** ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี */
    public var sellVatType: Int64? = 3
    /** หน่วยสินค้า */
    public var unitName: String
    /** หมวดสินค้า */
    public var categoryName: String?
    /** บาร์โค้ด */
    public var barcode: String?
    /** รายละเอียดสินค้า ฝั่งซื้อ */
    public var buyDescription: String?
    /** ราคาซื้อสินค้า */
    public var buyPrice: Double?
    /** ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี */
    public var buyVatType: Int64? = 3
    /** วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; */
    public var inventoryPublishedOn: String = "2020-01-01"
    /** จำนวนยอดตั้งต้นสินค้า */
    public var inventoryQuantity: Double = 0
    /** ราคาซื้อสินค้า */
    public var inventoryPrice: Double = 0

    public init(productStructureType: String?, type: Int64, code: String?, name: String, sellDescription: String?, sellPrice: Double?, sellVatType: Int64?, unitName: String, categoryName: String?, barcode: String?, buyDescription: String?, buyPrice: Double?, buyVatType: Int64?, inventoryPublishedOn: String, inventoryQuantity: Double, inventoryPrice: Double) {
        self.productStructureType = productStructureType
        self.type = type
        self.code = code
        self.name = name
        self.sellDescription = sellDescription
        self.sellPrice = sellPrice
        self.sellVatType = sellVatType
        self.unitName = unitName
        self.categoryName = categoryName
        self.barcode = barcode
        self.buyDescription = buyDescription
        self.buyPrice = buyPrice
        self.buyVatType = buyVatType
        self.inventoryPublishedOn = inventoryPublishedOn
        self.inventoryQuantity = inventoryQuantity
        self.inventoryPrice = inventoryPrice
    }

}
