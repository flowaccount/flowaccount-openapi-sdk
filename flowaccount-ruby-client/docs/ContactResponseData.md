# OpenapiClient::ContactResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **Integer** | จำนวนรายชื่อติดต่อทั้งหมด | [optional] 
**current_page** | **Integer** | หน้าที่แสดงรายชื่อผู้ติดต่อ | [optional] 
**list** | [**Array&lt;Contact&gt;**](Contact.md) | ข้อมูลรายชื่อผู้ติดต่อ | [optional] 
**is_db** | **Boolean** | database | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ContactResponseData.new(total: null,
                                 current_page: null,
                                 list: null,
                                 is_db: null)
```


