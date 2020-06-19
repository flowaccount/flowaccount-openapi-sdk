# ContactsAPI

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactsGet**](ContactsAPI.md#contactsget) | **GET** /contacts | Get list all contacts.
[**contactsIdDelete**](ContactsAPI.md#contactsiddelete) | **DELETE** /contacts/{id} | Delete contacts.
[**contactsIdGet**](ContactsAPI.md#contactsidget) | **GET** /contacts/{id} | Get contacts.
[**contactsIdPut**](ContactsAPI.md#contactsidput) | **PUT** /contacts/{id} | Update contacts.
[**contactsPost**](ContactsAPI.md#contactspost) | **POST** /contacts | Create contacts


# **contactsGet**
```swift
    open class func contactsGet(authorization: String, currentPage: Int? = nil, pageSize: Int? = nil, sortBy: String? = nil, filter: String? = nil, completion: @escaping (_ data: ContactResponse?, _ error: Error?) -> Void)
```

Get list all contacts.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let currentPage = 987 // Int | Query current page contacts. <br>Example Pattern: <ex>/contacts?currentPage=1 </ex><ex>/contacts?currentPage=1&pageSize=20</ex> (optional)
let pageSize = 987 // Int | Query contacts list amount per page. <br>Example Pattern: <ex> /contacts?pageSize=20 </ex> (optional)
let sortBy = "sortBy_example" // String | Contact Sort By Example Pattern:<br> namelocal = Sort By Contact Name <br> contactPerson = Sort By Contact Person <br> email = Sort By Email <br> phone2 = Sort By Contact Mobile <br> contactType = Sort By Contact Type <ex> /contacts?sortBy=[{'name':'contactPerson','sortOrder':'desc'}]</ex> (optional)
let filter = "filter_example" // String | Contact Filter Example Pattern: <ex> /contacts?filter=[{'columnName':'contactType','columnValue':'3','columnPredicateOperator':'And'}]</ex> (optional)

// Get list all contacts.
ContactsAPI.contactsGet(authorization: authorization, currentPage: currentPage, pageSize: pageSize, sortBy: sortBy, filter: filter) { (response, error) in
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
 **currentPage** | **Int** | Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | [optional] 
 **pageSize** | **Int** | Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; | [optional] 
 **sortBy** | **String** | Contact Sort By Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String** | Contact Filter Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; | [optional] 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contactsIdDelete**
```swift
    open class func contactsIdDelete(authorization: String, id: String, completion: @escaping (_ data: DeleteResponse?, _ error: Error?) -> Void)
```

Delete contacts.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | เลข Id Contact

// Delete contacts.
ContactsAPI.contactsIdDelete(authorization: authorization, id: id) { (response, error) in
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
 **id** | **String** | เลข Id Contact | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contactsIdGet**
```swift
    open class func contactsIdGet(authorization: String, id: String, completion: @escaping (_ data: ContactResponse?, _ error: Error?) -> Void)
```

Get contacts.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | เลข Id Contact

// Get contacts.
ContactsAPI.contactsIdGet(authorization: authorization, id: id) { (response, error) in
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
 **id** | **String** | เลข Id Contact | 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contactsIdPut**
```swift
    open class func contactsIdPut(authorization: String, id: String, contact: Contact, completion: @escaping (_ data: ContactResponse?, _ error: Error?) -> Void)
```

Update contacts.

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | เลข Id Contact
let contact = Contact(id: 123, contactGroup: 123, contactType: 123, contactCode: 123, contactName: "contactName_example", contactAddress: "contactAddress_example", contactZipCode: "contactZipCode_example", contactTaxId: 123, contactBranchCode: "contactBranchCode_example", contactBranch: "contactBranch_example", contactPerson: "contactPerson_example", contactEmail: "contactEmail_example", contactMobile: "contactMobile_example", contactBankId: 123, contactBankAccountNumber: 123, contactBankBranch: "contactBankBranch_example", contactBankAccountType: 123, contactCreditDays: 123, contactOffice: "contactOffice_example", contactFax: "contactFax_example", contactWebsite: "contactWebsite_example", conatactShippingAddress: "conatactShippingAddress_example", contactNote: "contactNote_example") // Contact | 

// Update contacts.
ContactsAPI.contactsIdPut(authorization: authorization, id: id, contact: contact) { (response, error) in
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
 **id** | **String** | เลข Id Contact | 
 **contact** | [**Contact**](Contact.md) |  | 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contactsPost**
```swift
    open class func contactsPost(authorization: String, contact: Contact, completion: @escaping (_ data: ContactResponse?, _ error: Error?) -> Void)
```

Create contacts

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let contact = Contact(id: 123, contactGroup: 123, contactType: 123, contactCode: 123, contactName: "contactName_example", contactAddress: "contactAddress_example", contactZipCode: "contactZipCode_example", contactTaxId: 123, contactBranchCode: "contactBranchCode_example", contactBranch: "contactBranch_example", contactPerson: "contactPerson_example", contactEmail: "contactEmail_example", contactMobile: "contactMobile_example", contactBankId: 123, contactBankAccountNumber: 123, contactBankBranch: "contactBankBranch_example", contactBankAccountType: 123, contactCreditDays: 123, contactOffice: "contactOffice_example", contactFax: "contactFax_example", contactWebsite: "contactWebsite_example", conatactShippingAddress: "conatactShippingAddress_example", contactNote: "contactNote_example") // Contact | 

// Create contacts
ContactsAPI.contactsPost(authorization: authorization, contact: contact) { (response, error) in
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
 **contact** | [**Contact**](Contact.md) |  | 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

