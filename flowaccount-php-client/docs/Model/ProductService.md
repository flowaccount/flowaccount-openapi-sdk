# # ProductService

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_structure_type** | **string** | สร้างสินค้าประเภท บริการ | [optional] 
**type** | **int** | ประเภทสินค้า: &lt;br&gt;1 &#x3D; บริการ &lt;br&gt; 3 &#x3D; ไม่นับสต๊อก &lt;br&gt; 5 &#x3D; นับสต๊อก | [default to 1]
**code** | **string** | รหัสสินค้า / SKU &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; | [optional] 
**name** | **string** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; | 
**sell_description** | **string** | รายละเอียดสินค้า ฝั่งขาย | [optional] 
**sell_price** | **float** | ราคาขายสินค้า | [optional] 
**sell_vat_type** | **int** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**unit_name** | **string** | หน่วยสินค้า | [optional] 
**category_name** | **string** | หมวดสินค้า | [optional] 
**barcode** | **string** | บาร์โค้ด | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


