# OpenapiClient::ProductInventory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_structure_type** | **String** | สร้างสินค้าประเภท นับสต๊อก | [optional] 
**type** | **Integer** | ระเภทสินค้า: &lt;br&gt;1 &#x3D; บริการ &lt;br&gt; 3 &#x3D; ไม่นับสต๊อก &lt;br&gt; 5 &#x3D; นับสต๊อก | [default to 1]
**code** | **String** | รหัสสินค้า / SKU &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; | [optional] 
**name** | **String** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; | 
**sell_description** | **String** | รายละเอียดสินค้า ฝั่งขาย | [optional] 
**sell_price** | **Float** | ราคาขายสินค้า | [optional] 
**sell_vat_type** | **Integer** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**unit_name** | **String** | หน่วยสินค้า | 
**category_name** | **String** | หมวดสินค้า | [optional] 
**barcode** | **String** | บาร์โค้ด | [optional] 
**buy_description** | **String** | รายละเอียดสินค้า ฝั่งซื้อ | [optional] 
**buy_price** | **Float** | ราคาซื้อสินค้า | [optional] 
**buy_vat_type** | **Integer** | ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ProductInventory.new(product_structure_type: null,
                                 type: null,
                                 code: P001,
                                 name: Product,
                                 sell_description: null,
                                 sell_price: null,
                                 sell_vat_type: null,
                                 unit_name: null,
                                 category_name: null,
                                 barcode: null,
                                 buy_description: null,
                                 buy_price: null,
                                 buy_vat_type: null)
```


