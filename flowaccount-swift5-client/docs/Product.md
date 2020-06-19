# Product

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | เลข id Product | [optional] 
**type** | **Int64** | ประเภทสินค้า: 1 &#x3D; บริการ / 3 &#x3D; ไม่นับสต๊อก / 5 &#x3D; นับสต๊อก | [optional] [default to 1]
**code** | **String** | รหัสสินค้า &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; | [optional] 
**name** | **String** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; | [optional] 
**sellDescription** | **String** | รายละเอียดสินค้า ฝั่งขาย | [optional] 
**sellPrice** | **Double** | ราคาขายสินค้า | [optional] 
**sellPriceWithVat** | **Double** | ราคาขายสินค้า รวมภาษี | [optional] 
**sellVatType** | **Int64** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**unitName** | **String** | หน่วยสินค้า | [optional] 
**categoryId** | **Int64** | id หมวดสินค้า | [optional] 
**categoryName** | **String** | หมวดสินค้า | [optional] 
**barcode** | **String** | บาร์โค้ด | [optional] 
**buyDescription** | **String** | รายละเอียดสินค้า ฝั่งซื้อ | [optional] 
**buyPrice** | **Double** | ราคาซื้อสินค้า | [optional] 
**buyVatType** | **Int64** | ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**buyVatTypeWithVat** | **Double** | ราคาซื้อสินค้า รวมภาษี | [optional] 
**inventoryPublishedOn** | **Date** | วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**inventoryQuantity** | **Double** | จำนวนยอดตั้งต้นสินค้า | [optional] 
**inventoryPrice** | **Double** | ต้นทุนสินค้าต่อหน่วย | [optional] [default to 0]
**inventoryTotal** | **Double** | มูลค่ารวมยอดตั้งต้นสินค้า | [optional] [default to 0]
**averageBuyPrice** | **Double** | ราคาสินค้าซื้อเฉลี่ย | [optional] 
**averageSellPrice** | **Double** | ราคาขายสินค้าเฉลี่ย | [optional] 
**remainingStock** | **Double** | จำนวนสินค้าคงเหลือในสต๊อก | [optional] 
**totalValueInHand** | **Double** | มูลค่าสินค้าคงเหลือในสต๊อก | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


