# OpenapiClient::InlineProductItemAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_amount** | **Float** | จำนวนส่วนลดสินค้า | [optional] [default to 0]
**vat_rate** | **Integer** | รูปแบบภาษี &lt;br&gt; 7 &#x3D; ภาษี 7% &lt;br&gt; 0 &#x3D; ภาษี 0% &lt;br&gt; -1 &#x3D; ยกเว้นภาษี | [optional] [default to 7]

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::InlineProductItemAllOf.new(discount_amount: null,
                                 vat_rate: null)
```


