# BusinessInfomationAPI

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companyInfoGet**](BusinessInfomationAPI.md#companyinfoget) | **GET** /company/info | Get business infomation
[**companyInfoPut**](BusinessInfomationAPI.md#companyinfoput) | **PUT** /company/info | Edit business infomation


# **companyInfoGet**
```swift
    open class func companyInfoGet(authorization: String, completion: @escaping (_ data: CompanyInfoResponse?, _ error: Error?) -> Void)
```

Get business infomation

เรียกดูข้อมูลธรุกิจ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")

// Get business infomation
BusinessInfomationAPI.companyInfoGet(authorization: authorization) { (response, error) in
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

[**CompanyInfoResponse**](CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **companyInfoPut**
```swift
    open class func companyInfoPut(authorization: String, companyInfo: CompanyInfo, completion: @escaping (_ data: CompanyInfoResponse?, _ error: Error?) -> Void)
```

Edit business infomation

แก้ไขข้อมูลธรุกิจ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let companyInfo = CompanyInfo(companyType: "companyType_example", compnayName: "compnayName_example", companyNameEn: "companyNameEn_example", companyAddress: "companyAddress_example", companyAddressEn: "companyAddressEn_example", companyZipCode: "companyZipCode_example", companyTaxId: "companyTaxId_example", companyBranch: "companyBranch_example", companyBranchEn: "companyBranchEn_example", companyBranchCode: "companyBranchCode_example", companyPhone: "companyPhone_example", companyMobile: "companyMobile_example", companyFax: "companyFax_example", companyWebsite: "companyWebsite_example") // CompanyInfo | 

// Edit business infomation
BusinessInfomationAPI.companyInfoPut(authorization: authorization, companyInfo: companyInfo) { (response, error) in
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
 **companyInfo** | [**CompanyInfo**](CompanyInfo.md) |  | 

### Return type

[**CompanyInfoResponse**](CompanyInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

