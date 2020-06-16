# OpenapiClient::BankAccountApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bank_accounts_get**](BankAccountApi.md#bank_accounts_get) | **GET** /bank-accounts | Get list all My Bank Account
[**bank_accounts_post**](BankAccountApi.md#bank_accounts_post) | **POST** /bank-accounts | Create bank account.



## bank_accounts_get

> AllBankAccountResponse bank_accounts_get(authorization)

Get list all My Bank Account

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::BankAccountApi.new
authorization = 'Bearer accessToken' # String | 

begin
  #Get list all My Bank Account
  result = api_instance.bank_accounts_get(authorization)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling BankAccountApi->bank_accounts_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]

### Return type

[**AllBankAccountResponse**](AllBankAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bank_accounts_post

> BankAccountResponse bank_accounts_post(authorization, bank_account)

Create bank account.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::BankAccountApi.new
authorization = 'Bearer accessToken' # String | 
bank_account = OpenapiClient::BankAccount.new # BankAccount | 

begin
  #Create bank account.
  result = api_instance.bank_accounts_post(authorization, bank_account)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling BankAccountApi->bank_accounts_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **bank_account** | [**BankAccount**](BankAccount.md)|  | 

### Return type

[**BankAccountResponse**](BankAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

