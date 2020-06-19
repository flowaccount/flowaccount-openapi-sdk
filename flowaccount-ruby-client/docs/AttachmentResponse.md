# OpenapiClient::AttachmentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Boolean** | action success | [optional] 
**message** | **String** | error message | [optional] 
**code** | **Integer** | error code | [optional] 
**data** | [**Array&lt;AttachmentResponseData&gt;**](AttachmentResponseData.md) | ข้อมูลไฟล์แนบเอกสาร | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::AttachmentResponse.new(status: null,
                                 message: null,
                                 code: null,
                                 data: null)
```


