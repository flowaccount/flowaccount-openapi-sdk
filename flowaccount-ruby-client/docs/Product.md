# OpenapiClient::Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | เลข id Product | [optional] 
**type** | **Integer** | ประเภทสินค้า: 1 &#x3D; บริการ / 3 &#x3D; ไม่นับสต๊อก / 5 &#x3D; นับสต๊อก | [optional] [default to 1]
**code** | **String** | รหัสสินค้า &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; | [optional] 
**name** | **String** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; | [optional] 
**sell_description** | **String** | รายละเอียดสินค้า ฝั่งขาย | [optional] 
**sell_price** | **Float** | ราคาขายสินค้า | [optional] 
**sell_price_with_vat** | **Float** | ราคาขายสินค้า รวมภาษี | [optional] 
**sell_vat_type** | **Integer** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**unit_name** | **String** | หน่วยสินค้า | [optional] 
**category_id** | **Integer** | id หมวดสินค้า | [optional] 
**category_name** | **String** | หมวดสินค้า | [optional] 
**barcode** | **String** | บาร์โค้ด | [optional] 
**buy_description** | **String** | รายละเอียดสินค้า ฝั่งซื้อ | [optional] 
**buy_price** | **Float** | ราคาซื้อสินค้า | [optional] 
**buy_vat_type** | **Integer** | ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี | [optional] [default to 3]
**buy_vat_type_with_vat** | **Float** | ราคาซื้อสินค้า รวมภาษี | [optional] 
**inventory_published_on** | **Date** | วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**inventory_quantity** | **Float** | จำนวนยอดตั้งต้นสินค้า | [optional] 
**inventory_price** | **Float** | ต้นทุนสินค้าต่อหน่วย | [optional] [default to 0]
**inventory_total** | **Float** | มูลค่ารวมยอดตั้งต้นสินค้า | [optional] [default to 0]
**average_buy_price** | **Float** | ราคาสินค้าซื้อเฉลี่ย | [optional] 
**average_sell_price** | **Float** | ราคาขายสินค้าเฉลี่ย | [optional] 
**remaining_stock** | **Float** | จำนวนสินค้าคงเหลือในสต๊อก | [optional] 
**total_value_in_hand** | **Float** | มูลค่าสินค้าคงเหลือในสต๊อก | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Product.new(id: null,
                                 type: null,
                                 code: P001,
                                 name: Product,
                                 sell_description: null,
                                 sell_price: null,
                                 sell_price_with_vat: null,
                                 sell_vat_type: null,
                                 unit_name: null,
                                 category_id: null,
                                 category_name: null,
                                 barcode: null,
                                 buy_description: null,
                                 buy_price: null,
                                 buy_vat_type: null,
                                 buy_vat_type_with_vat: null,
                                 inventory_published_on: Wed Jan 01 07:00:00 ICT 2020,
                                 inventory_quantity: null,
                                 inventory_price: null,
                                 inventory_total: null,
                                 average_buy_price: null,
                                 average_sell_price: null,
                                 remaining_stock: null,
                                 total_value_in_hand: null)
```


