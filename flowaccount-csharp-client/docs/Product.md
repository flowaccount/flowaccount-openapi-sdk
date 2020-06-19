
# Flowaccount.OpenAPITools.Model.Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | เลข id Product | [optional] 
**Type** | **long** | ประเภทสินค้า: 1 &#x3D; บริการ / 3 &#x3D; ไม่นับสต๊อก / 5 &#x3D; นับสต๊อก | [optional] [default to 1]
**Code** | **string** | รหัสสินค้า &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; | [optional] 
**Name** | **string** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; | [optional] 
**SellDescription** | **string** | รายละเอียดสินค้า ฝั่งขาย | [optional] 
**SellPrice** | **decimal** | ราคาขายสินค้า | [optional] 
**SellPriceWithVat** | **decimal** | ราคาขายสินค้า รวมภาษี | [optional] 
**SellVatType** | **long** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**UnitName** | **string** | หน่วยสินค้า | [optional] 
**CategoryId** | **long** | id หมวดสินค้า | [optional] 
**CategoryName** | **string** | หมวดสินค้า | [optional] 
**Barcode** | **string** | บาร์โค้ด | [optional] 
**BuyDescription** | **string** | รายละเอียดสินค้า ฝั่งซื้อ | [optional] 
**BuyPrice** | **decimal** | ราคาซื้อสินค้า | [optional] 
**BuyVatType** | **long** | ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**BuyVatTypeWithVat** | **decimal** | ราคาซื้อสินค้า รวมภาษี | [optional] 
**InventoryPublishedOn** | **DateTime** | วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**InventoryQuantity** | **decimal** | จำนวนยอดตั้งต้นสินค้า | [optional] 
**InventoryPrice** | **decimal** | ต้นทุนสินค้าต่อหน่วย | [optional] [default to 0M]
**InventoryTotal** | **decimal** | มูลค่ารวมยอดตั้งต้นสินค้า | [optional] [default to 0M]
**AverageBuyPrice** | **decimal** | ราคาสินค้าซื้อเฉลี่ย | [optional] 
**AverageSellPrice** | **decimal** | ราคาขายสินค้าเฉลี่ย | [optional] 
**RemainingStock** | **decimal** | จำนวนสินค้าคงเหลือในสต๊อก | [optional] 
**TotalValueInHand** | **decimal** | มูลค่าสินค้าคงเหลือในสต๊อก | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

