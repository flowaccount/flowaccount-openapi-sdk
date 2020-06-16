# BankAccountAPI

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bankAccountsGet**](BankAccountAPI.md#bankaccountsget) | **GET** /bank-accounts | Get list all My Bank Account
[**bankAccountsPost**](BankAccountAPI.md#bankaccountspost) | **POST** /bank-accounts | Create bank account.


# **bankAccountsGet**
```swift
    open class func bankAccountsGet(authorization: String, completion: @escaping (_ data: AllBankAccountResponse?, _ error: Error?) -> Void)
```

Get list all My Bank Account

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")

// Get list all My Bank Account
BankAccountAPI.bankAccountsGet(authorization: authorization) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String** |  | [default to &quot;Bearer accessToken&quot;]

### Return type

[**AllBankAccountResponse**](AllBankAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bankAccountsPost**
```swift
    open class func bankAccountsPost(authorization: String, bankAccount: BankAccount, completion: @escaping (_ data: BankAccountResponse?, _ error: Error?) -> Void)
```

Create bank account.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let bankAccount = BankAccount(bankAccountNumber: 123, bankAccountName: "bankAccountName_example", bankAccountType: 123, bankBranch: "bankBranch_example", bankId: 123) // BankAccount | 

// Create bank account.
BankAccountAPI.bankAccountsPost(authorization: authorization, bankAccount: bankAccount) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String** |  | [default to &quot;Bearer accessToken&quot;]
 **bankAccount** | [**BankAccount**](BankAccount.md) |  | 

### Return type

[**BankAccountResponse**](BankAccountResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

