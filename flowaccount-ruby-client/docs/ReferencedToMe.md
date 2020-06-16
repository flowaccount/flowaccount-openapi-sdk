# OpenapiClient::ReferencedToMe

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference_id** | **Integer** | ID เอกสารฉบับนี้ | [optional] 
**reference_document_type** | **Integer** | ประเภทของเอกสารฉบับนี้ | [optional] 
**reference_document_serial** | **String** | เลขที่เอกสารฉบับนี้ | [optional] 
**document_id** | **Integer** | ID เอกสารปลายทางที่อ้างอิง ถึง เอกสารฉบับนี้ | [optional] 
**document_serial** | **Integer** | เลขที่เอกสารปลายทางที่อ้างอิง ถึง เอกสารฉบับนี้ | [optional] 
**type** | **Integer** |  | [optional] [default to 1]

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ReferencedToMe.new(reference_id: null,
                                 reference_document_type: null,
                                 reference_document_serial: null,
                                 document_id: null,
                                 document_serial: null,
                                 type: null)
```


