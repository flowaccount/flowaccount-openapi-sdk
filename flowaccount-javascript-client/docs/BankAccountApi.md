# FlowAccountOpenApi.BankAccountApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bankAccountsGet**](BankAccountApi.md#bankAccountsGet) | **GET** /bank-accounts | Get list all My Bank Account
[**bankAccountsPost**](BankAccountApi.md#bankAccountsPost) | **POST** /bank-accounts | Create bank account.



## bankAccountsGet

> BankAccountResponse bankAccountsGet(authorization)

Get list all My Bank Account

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.BankAccountApi();
let authorization = "'Bearer accessToken'"; // String | 
apiInstance.bankAccountsGet(authorization, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]

### Return type

[**BankAccountResponse**](BankAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bankAccountsPost

> BankAccountResponse bankAccountsPost(authorization, bankAccount)

Create bank account.

### Example

```javascript
import FlowAccountOpenApi from 'flow_account_open_api';

let apiInstance = new FlowAccountOpenApi.BankAccountApi();
let authorization = "'Bearer accessToken'"; // String | 
let bankAccount = new FlowAccountOpenApi.BankAccount(); // BankAccount | 
apiInstance.bankAccountsPost(authorization, bankAccount, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to &#39;Bearer accessToken&#39;]
 **bankAccount** | [**BankAccount**](BankAccount.md)|  | 

### Return type

[**BankAccountResponse**](BankAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

