# OpenapiClient::BankAccountResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Boolean** | action success | [optional] 
**message** | **String** | error message | [optional] 
**code** | **Integer** | error code | [optional] 
**data** | [**BankAccountResponseData**](BankAccountResponseData.md) |  | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::BankAccountResponse.new(status: null,
                                 message: null,
                                 code: null,
                                 data: null)
```


