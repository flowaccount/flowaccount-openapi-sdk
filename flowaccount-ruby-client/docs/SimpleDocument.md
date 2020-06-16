# OpenapiClient::SimpleDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;SimpleProductItem&gt;**](SimpleProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Simple | [optional] 
**document_reference** | [**Array&lt;UpgradeDocument&gt;**](UpgradeDocument.md) | สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา) | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::SimpleDocument.new(items: null,
                                 document_reference: null)
```


