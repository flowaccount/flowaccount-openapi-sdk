# OpenapiClient::ProductItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **Integer** | ประเภทสินค้า &lt;br&gt; 1 &#x3D; บริการ (service) &lt;br&gt; 3 &#x3D; สินค้าไม่นับสต๊อก (non inventory) &lt;br&gt; 5 &#x3D; สินค้านับสต๊อก (inventory) | [optional] [default to 1]
**name** | **String** | ชื่อสินค้า | 
**description** | **String** | รายละเอียดสินค้า | [optional] 
**quantity** | **Float** | จำนวนสินค้า | 
**unit_name** | **String** | หน่วยสินค้า | [optional] 
**price_per_unit** | **Float** | ราคาสินค้าต่อหน่วย | 
**total** | **Float** | ราคารวมสินค้า | 
**sell_chart_of_account_code** | **String** | เลือกลงบันทึกบัญชีรายได้ สำหรับเอกสารฝั่งขาย &lt;br&gt; &lt;ex&gt;Example: 41111&lt;/ex&gt; | [optional] 
**buy_chart_of_account_code** | **String** | เลือกลงบันทึกบัญชีค่าใช้จ่าย สำหรับเอกสารฝั่งซื้อ &lt;br&gt; &lt;ex&gt;Example: 51111.02&lt;/ex&gt; | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ProductItem.new(type: null,
                                 name: null,
                                 description: null,
                                 quantity: null,
                                 unit_name: null,
                                 price_per_unit: null,
                                 total: null,
                                 sell_chart_of_account_code: null,
                                 buy_chart_of_account_code: null)
```


