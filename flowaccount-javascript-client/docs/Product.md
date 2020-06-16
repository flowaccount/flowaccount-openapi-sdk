# FlowAccountOpenApi.Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | เลข id Product | [optional] 
**type** | **Number** | ประเภทสินค้า: 1 &#x3D; บริการ / 3 &#x3D; ไม่นับสต๊อก / 5 &#x3D; นับสต๊อก | [optional] [default to 1]
**code** | **String** | รหัสสินค้า &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; | [optional] 
**name** | **String** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; | [optional] 
**sellDescription** | **String** | รายละเอียดสินค้า ฝั่งขาย | [optional] 
**sellPrice** | **Number** | ราคาขายสินค้า | [optional] 
**sellVatType** | **Number** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**unitName** | **String** | หน่วยสินค้า | [optional] 
**categoryId** | **Number** | id หมวดสินค้า | [optional] 
**categoryName** | **String** | หมวดสินค้า | [optional] 
**barcode** | **String** | บาร์โค้ด | [optional] 
**buyDescription** | **String** | รายละเอียดสินค้า ฝั่งซื้อ | [optional] 
**buyPrice** | **Number** | ราคาซื้อสินค้า | [optional] 
**buyVatType** | **Number** | ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**inventoryPublishedOn** | **Date** | วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**inventoryQuantity** | **Number** | จำนวนยอดตั้งต้นสินค้า | [optional] 
**averageBuyPrice** | **Number** | ราคาซื้อเฉลี่ยสินค้า | [optional] 
**averageSellPrice** | **Number** | ราคาขายเฉลี่ยสินค้า | [optional] 
**remainingStock** | **Number** | จำนวนสินค้าคงเหลือในสต๊อก | [optional] 
**totalValueInHand** | **Number** | มูลค่าสินค้าคงเหลือในสต๊อก | [optional] 


