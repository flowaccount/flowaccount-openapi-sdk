# OpenapiClient::BusinessCategory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Boolean** | action success | [optional] 
**message** | **String** | error message | [optional] 
**code** | **Integer** | error code | [optional] 
**data** | [**Array&lt;BusinessCategoryData&gt;**](BusinessCategoryData.md) | ข้อมูลหมวดหมู่ค่าใช้จ่าย ในระบบ | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::BusinessCategory.new(status: null,
                                 message: null,
                                 code: null,
                                 data: null)
```


