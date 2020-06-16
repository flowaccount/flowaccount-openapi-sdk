# OpenapiClient::AllBankAccountResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Boolean** | action success | [optional] 
**message** | **String** | error message | [optional] 
**code** | **Integer** | error code | [optional] 
**data** | [**Array&lt;BankAccountResponseData&gt;**](BankAccountResponseData.md) | บัญชีธนาคารบริษัทเราทั้งหมด | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::AllBankAccountResponse.new(status: null,
                                 message: null,
                                 code: null,
                                 data: null)
```


