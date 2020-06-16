# OpenapiClient::StatusDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Integer** | เลขสถานะเอกสารฉบับนี้ | [optional] 
**status_string** | **Integer** | ชื่อสถานะเอกสารฉบับนี้ | [optional] 
**document_type** | **Integer** | เลขประเภทเอกสารฉบับนี้ | [optional] 
**allow_delete** | **Boolean** | สามารถลบเอกสาร :&lt;br&gt; true &#x3D; ลบได้ &lt;br&gt; false &#x3D; ลบไม่ได้ | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::StatusDocument.new(status: null,
                                 status_string: null,
                                 document_type: null,
                                 allow_delete: null)
```


