# ProductResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | เลข id Product | [optional] 
**Type** | **int64** | ประเภทสินค้า: 1 &#x3D; บริการ / 3 &#x3D; ไม่นับสต๊อก / 5 &#x3D; นับสต๊อก | [optional] [default to 1]
**Code** | **string** | รหัสสินค้า &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; | [optional] 
**Name** | **string** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; | [optional] 
**SellDescription** | **string** | รายละเอียดสินค้า ฝั่งขาย | [optional] 
**SellPrice** | **float32** | ราคาขายสินค้า | [optional] 
**SellVatType** | **int64** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**UnitName** | **string** | หน่วยสินค้า | [optional] 
**CategoryId** | **int64** | id หมวดสินค้า | [optional] 
**CategoryName** | **string** | หมวดสินค้า | [optional] 
**Barcode** | **string** | บาร์โค้ด | [optional] 
**BuyDescription** | **string** | รายละเอียดสินค้า ฝั่งซื้อ | [optional] 
**BuyPrice** | **float32** | ราคาซื้อสินค้า | [optional] 
**BuyVatType** | **int64** | ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**InventoryPublishedOn** | **string** | วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] [default to Wed Jan 01 00:00:00 ICT 2020]
**InventoryQuantity** | **float32** | จำนวนยอดตั้งต้นสินค้า | [optional] 
**AverageBuyPrice** | **float32** | ราคาซื้อเฉลี่ยสินค้า | [optional] 
**AverageSellPrice** | **float32** | ราคาขายเฉลี่ยสินค้า | [optional] 
**RemainingStock** | **float32** | จำนวนสินค้าคงเหลือในสต๊อก | [optional] 
**TotalValueInHand** | **float32** | มูลค่าสินค้าคงเหลือในสต๊อก | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


