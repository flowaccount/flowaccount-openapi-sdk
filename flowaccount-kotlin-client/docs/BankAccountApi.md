# BankAccountApi

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bankAccountsGet**](BankAccountApi.md#bankAccountsGet) | **GET** /bank-accounts | Get list all My Bank Account
[**bankAccountsPost**](BankAccountApi.md#bankAccountsPost) | **POST** /bank-accounts | Create bank account.


<a name="bankAccountsGet"></a>
# **bankAccountsGet**
> AllBankAccountResponse bankAccountsGet(authorization)

Get list all My Bank Account

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BankAccountApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : AllBankAccountResponse = apiInstance.bankAccountsGet(authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BankAccountApi#bankAccountsGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BankAccountApi#bankAccountsGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]

### Return type

[**AllBankAccountResponse**](AllBankAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="bankAccountsPost"></a>
# **bankAccountsPost**
> BankAccountResponse bankAccountsPost(authorization, bankAccount)

Create bank account.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = BankAccountApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val bankAccount : BankAccount =  // BankAccount | 
try {
    val result : BankAccountResponse = apiInstance.bankAccountsPost(authorization, bankAccount)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling BankAccountApi#bankAccountsPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling BankAccountApi#bankAccountsPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [default to &quot;Bearer accessToken&quot;]
 **bankAccount** | [**BankAccount**](BankAccount.md)|  |

### Return type

[**BankAccountResponse**](BankAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

