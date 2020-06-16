
# Flowaccount.OpenAPITools.Model.ProductType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProductStructureType** | **string** | สร้างสินค้าประเภท นับสต๊อก พร้อมตั้งค่ายอดเริ่มต้น | [optional] 
**Type** | **long** | ประเภทสินค้า: &lt;br&gt;1 &#x3D; บริการ &lt;br&gt; 3 &#x3D; ไม่นับสต๊อก &lt;br&gt; 5 &#x3D; นับสต๊อก | [default to 1]
**Code** | **string** | รหัสสินค้า / SKU &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; | [optional] 
**Name** | **string** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; | 
**SellDescription** | **string** | รายละเอียดสินค้า ฝั่งขาย | [optional] 
**SellPrice** | **decimal** | ราคาขายสินค้า | [optional] 
**SellVatType** | **long** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**UnitName** | **string** | หน่วยสินค้า | 
**CategoryName** | **string** | หมวดสินค้า | [optional] 
**Barcode** | **string** | บาร์โค้ด | [optional] 
**BuyDescription** | **string** | รายละเอียดสินค้า ฝั่งซื้อ | [optional] 
**BuyPrice** | **decimal** | ราคาซื้อสินค้า | [optional] 
**BuyVatType** | **long** | ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**InventoryPublishedOn** | **string** | วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [default to "2020-01-01"]
**InventoryQuantity** | **decimal** | จำนวนยอดตั้งต้นสินค้า | [default to 0M]
**InventoryPrice** | **decimal** | ราคาซื้อสินค้า | [default to 0M]

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

