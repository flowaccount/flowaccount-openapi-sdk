# OpenapiClient::CompanyInfoResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Boolean** | action success | [optional] 
**message** | **String** | error message | [optional] 
**code** | **Integer** | error code | [optional] 
**data** | [**Array&lt;CompanyInfoResponseData&gt;**](CompanyInfoResponseData.md) | ข้อมูลบริษัทเรา | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::CompanyInfoResponse.new(status: null,
                                 message: null,
                                 code: null,
                                 data: null)
```


