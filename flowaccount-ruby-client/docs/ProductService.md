# OpenapiClient::ProductService

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_structure_type** | **String** | สร้างสินค้าประเภท บริการ | [optional] 
**type** | **Integer** | ประเภทสินค้า: &lt;br&gt;1 &#x3D; บริการ &lt;br&gt; 3 &#x3D; ไม่นับสต๊อก &lt;br&gt; 5 &#x3D; นับสต๊อก | [default to 1]
**code** | **String** | รหัสสินค้า / SKU &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; | [optional] 
**name** | **String** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; | 
**sell_description** | **String** | รายละเอียดสินค้า ฝั่งขาย | [optional] 
**sell_price** | **Float** | ราคาขายสินค้า | [optional] 
**sell_vat_type** | **Integer** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**unit_name** | **String** | หน่วยสินค้า | [optional] 
**category_name** | **String** | หมวดสินค้า | [optional] 
**barcode** | **String** | บาร์โค้ด | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ProductService.new(product_structure_type: null,
                                 type: null,
                                 code: P001,
                                 name: Product,
                                 sell_description: null,
                                 sell_price: null,
                                 sell_vat_type: null,
                                 unit_name: null,
                                 category_name: null,
                                 barcode: null)
```


