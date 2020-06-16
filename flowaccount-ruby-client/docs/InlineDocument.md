# OpenapiClient::InlineDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_type** | **Integer** | รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท) | [optional] [default to 1]
**use_inline_discount** | **Boolean** | inline discount ใช้งานส่วนลด แยกตามรายการสินค้า | [optional] [default to true]
**use_inline_vat** | **Boolean** | inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า | [optional] 
**exempt_amount** | **Float** | ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม | [optional] [default to 0]
**vatable_amount** | **Float** | ยอดขายที่คิดภาษีมูลค่าเพิ่ม | [optional] [default to 0]
**items** | [**Array&lt;InlineProductItem&gt;**](InlineProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Inline | [optional] 
**document_reference** | [**Array&lt;UpgradeDocument&gt;**](UpgradeDocument.md) | สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา) | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::InlineDocument.new(discount_type: null,
                                 use_inline_discount: null,
                                 use_inline_vat: null,
                                 exempt_amount: null,
                                 vatable_amount: null,
                                 items: null,
                                 document_reference: null)
```


