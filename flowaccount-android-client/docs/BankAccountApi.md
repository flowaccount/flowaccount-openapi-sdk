# BankAccountApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bankAccountsGet**](BankAccountApi.md#bankAccountsGet) | **GET** /bank-accounts | Get list all My Bank Account
[**bankAccountsPost**](BankAccountApi.md#bankAccountsPost) | **POST** /bank-accounts | Create bank account.



## bankAccountsGet

> AllBankAccountResponse bankAccountsGet(authorization)

Get list all My Bank Account

### Example

```java
// Import classes:
//import org.openapitools.client.api.BankAccountApi;

BankAccountApi apiInstance = new BankAccountApi();
String authorization = Bearer accessToken; // String | 
try {
    AllBankAccountResponse result = apiInstance.bankAccountsGet(authorization);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BankAccountApi#bankAccountsGet");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]

### Return type

[**AllBankAccountResponse**](AllBankAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bankAccountsPost

> BankAccountResponse bankAccountsPost(authorization, bankAccount)

Create bank account.

### Example

```java
// Import classes:
//import org.openapitools.client.api.BankAccountApi;

BankAccountApi apiInstance = new BankAccountApi();
String authorization = Bearer accessToken; // String | 
BankAccount bankAccount = new BankAccount(); // BankAccount | 
try {
    BankAccountResponse result = apiInstance.bankAccountsPost(authorization, bankAccount);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling BankAccountApi#bankAccountsPost");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | [default to Bearer accessToken]
 **bankAccount** | [**BankAccount**](BankAccount.md)|  |

### Return type

[**BankAccountResponse**](BankAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

