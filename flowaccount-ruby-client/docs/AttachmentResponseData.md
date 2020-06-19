# OpenapiClient::AttachmentResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachment_id** | **Integer** | เลข Id ไฟล์แนบเอกสาร | [optional] 
**created_on** | **Date** | วันที่แนบไฟล์เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**attachment_name** | **String** | ชื่อไฟล์แนบเอกสาร | [optional] 
**order_number** | **Integer** | ลำดับไฟล์แนบเอกสาร | [optional] 
**is_display** | **Boolean** | สถานะการแสดงไฟล์แนบเอกสาร | [optional] [default to true]
**attachment_path** | **String** | path ที่อยู่ไฟล์แนบเอกสาร | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::AttachmentResponseData.new(attachment_id: null,
                                 created_on: Wed Jan 01 07:00:00 ICT 2020,
                                 attachment_name: null,
                                 order_number: null,
                                 is_display: null,
                                 attachment_path: null)
```


