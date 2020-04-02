# # Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **int** | ประเภทสินค้า: 1 &#x3D; บริการ / 3 &#x3D; ไม่นับสต๊อก / 5 &#x3D; นับสต๊อก | [default to 1]
**code** | **string** | รหัสสินค้า / SKU &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; | [optional] 
**name** | **string** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; | 
**sell_description** | **string** | รายละเอียดสินค้า ฝั่งขาย | [optional] 
**sell_price** | **float** | ราคาขายสินค้า | [optional] 
**sell_vat_type** | **int** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**unit_name** | **string** | หน่วยสินค้า | [optional] 
**category_name** | **string** | หมวดสินค้า | [optional] 
**barcode** | **string** | บาร์โค้ด | [optional] 
**buy_description** | **string** | รายละเอียดสินค้า ฝั่งซื้อ | [optional] 
**buy_price** | **float** | ราคาซื้อสินค้า | [optional] 
**buy_vat_type** | **int** | ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**inventory_published_on** | **string** | วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] [default to '2020-01-01']
**inventory_quantity** | **float** | จำนวนยอดตั้งต้นสินค้า | [optional] 
**inventory_price** | **float** | ราคาซื้อสินค้า | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


