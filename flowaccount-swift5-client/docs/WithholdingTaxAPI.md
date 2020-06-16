# WithholdingTaxAPI

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**withholdingTaxesEmailDocumentPost**](WithholdingTaxAPI.md#withholdingtaxesemaildocumentpost) | **POST** /withholding-taxes/email-document | Send email withholding tax document.
[**withholdingTaxesGet**](WithholdingTaxAPI.md#withholdingtaxesget) | **GET** /withholding-taxes | Get list all withholding tax documents.
[**withholdingTaxesIdAttachmentPost**](WithholdingTaxAPI.md#withholdingtaxesidattachmentpost) | **POST** /withholding-taxes/{id}/attachment | Add Attachment to expenses.
[**withholdingTaxesIdDelete**](WithholdingTaxAPI.md#withholdingtaxesiddelete) | **DELETE** /withholding-taxes/{id} | Delete withholding tax document.
[**withholdingTaxesIdGet**](WithholdingTaxAPI.md#withholdingtaxesidget) | **GET** /withholding-taxes/{id} | Get withholding tax document.
[**withholdingTaxesIdPut**](WithholdingTaxAPI.md#withholdingtaxesidput) | **PUT** /withholding-taxes/{id} | Edit withholding tax document.
[**withholdingTaxesIdStatusStatusIdPost**](WithholdingTaxAPI.md#withholdingtaxesidstatusstatusidpost) | **POST** /withholding-taxes/{id}/status/{statusId} | Change status of withholding tax document.
[**withholdingTaxesPost**](WithholdingTaxAPI.md#withholdingtaxespost) | **POST** /withholding-taxes | Create withholding tax document.
[**withholdingTaxesSharedocumentPost**](WithholdingTaxAPI.md#withholdingtaxessharedocumentpost) | **POST** /withholding-taxes/sharedocument | Share link withholding tax documents.


# **withholdingTaxesEmailDocumentPost**
```swift
    open class func withholdingTaxesEmailDocumentPost(authorization: String, sendEmailSimple: SendEmailSimple, completion: @escaping (_ data: SendEmailResponse?, _ error: Error?) -> Void)
```

Send email withholding tax document.

ส่งเอกสารใบหัก ณ ที่จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sendEmailSimple = SendEmailSimple() // SendEmailSimple | 

// Send email withholding tax document.
WithholdingTaxAPI.withholdingTaxesEmailDocumentPost(authorization: authorization, sendEmailSimple: sendEmailSimple) { (response, error) in
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
 **sendEmailSimple** | [**SendEmailSimple**](SendEmailSimple.md) |  | 

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **withholdingTaxesGet**
```swift
    open class func withholdingTaxesGet(currentPage: Int, pageSize: Int, authorization: String, sortBy: String? = nil, filter: String? = nil, completion: @escaping (_ data: AllWithholidingTaxDocumentResponse?, _ error: Error?) -> Void)
```

Get list all withholding tax documents.

เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่ายทั้งหมดในระบบ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let currentPage = 987 // Int | Query current page document withholding tax. <br>Example Pattern: <ex>/withholding-taxes?currentPage=1 </ex><ex>/withholding-taxes?currentPage=1&pageSize=20</ex>
let pageSize = 987 // Int | Query document withholding tax list amount per page. <br>Example Pattern: <ex> /withholding-taxes?pageSize=20 </ex>
let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sortBy = "sortBy_example" // String | Query document withholding tax list amount per page. <br>Example Pattern: <ex> /withholding-taxes?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/withholding-taxes?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'entity','sortOrder':'asc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/withholding-taxes?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex> (optional)
let filter = "filter_example" // String |  (optional)

// Get list all withholding tax documents.
WithholdingTaxAPI.withholdingTaxesGet(currentPage: currentPage, pageSize: pageSize, authorization: authorization, sortBy: sortBy, filter: filter) { (response, error) in
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
 **currentPage** | **Int** | Query current page document withholding tax. &lt;br&gt;Example Pattern: &lt;ex&gt;/withholding-taxes?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Int** | Query document withholding tax list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String** |  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **String** | Query document withholding tax list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;entity&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/withholding-taxes?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String** |  | [optional] 

### Return type

[**AllWithholidingTaxDocumentResponse**](AllWithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **withholdingTaxesIdAttachmentPost**
```swift
    open class func withholdingTaxesIdAttachmentPost(authorization: String, id: String, file: URL? = nil, completion: @escaping (_ data: AttachmentResponse?, _ error: Error?) -> Void)
```

Add Attachment to expenses.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | 
let file = URL(string: "https://example.com")! // URL |  (optional)

// Add Attachment to expenses.
WithholdingTaxAPI.withholdingTaxesIdAttachmentPost(authorization: authorization, id: id, file: file) { (response, error) in
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
 **id** | **String** |  | 
 **file** | **URL** |  | [optional] 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **withholdingTaxesIdDelete**
```swift
    open class func withholdingTaxesIdDelete(authorization: String, id: String, completion: @escaping (_ data: DeleteResponse?, _ error: Error?) -> Void)
```

Delete withholding tax document.

ลบ เอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId

// Delete withholding tax document.
WithholdingTaxAPI.withholdingTaxesIdDelete(authorization: authorization, id: id) { (response, error) in
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
 **id** | **String** | ID เอกสารใช้ recordId | 

### Return type

[**DeleteResponse**](DeleteResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **withholdingTaxesIdGet**
```swift
    open class func withholdingTaxesIdGet(authorization: String, id: String, completion: @escaping (_ data: WithholidingTaxDocumentResponse?, _ error: Error?) -> Void)
```

Get withholding tax document.

เรียกดูข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId หรือ documentId

// Get withholding tax document.
WithholdingTaxAPI.withholdingTaxesIdGet(authorization: authorization, id: id) { (response, error) in
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
 **id** | **String** | ID เอกสารใช้ recordId หรือ documentId | 

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **withholdingTaxesIdPut**
```swift
    open class func withholdingTaxesIdPut(authorization: String, id: String, updateWithholidingTaxDocument: UpdateWithholidingTaxDocument, completion: @escaping (_ data: WithholidingTaxDocumentResponse?, _ error: Error?) -> Void)
```

Edit withholding tax document.

แก้ไขข้อมูลเอกสารใบหัก ณ ที่จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId
let updateWithholidingTaxDocument = UpdateWithholidingTaxDocument(companyName: "companyName_example", companyNameEn: "companyNameEn_example", companyAddress: "companyAddress_example", companyAddressEn: "companyAddressEn_example", companyTaxId: "companyTaxId_example", companyBranch: "companyBranch_example", companyBranchEn: "companyBranchEn_example", companyPhone: "companyPhone_example", companyMobile: "companyMobile_example", companyFax: "companyFax_example", companyWebsite: "companyWebsite_example", contactCode: "contactCode_example", contactName: "contactName_example", contactAddress: "contactAddress_example", contactTaxId: "contactTaxId_example", contactBranch: "contactBranch_example", contactPerson: "contactPerson_example", contactEmail: "contactEmail_example", contactNumber: "contactNumber_example", contactZipCode: "contactZipCode_example", contactGroup: 123, publishedOn: Date(), entity: 123, textOther: "textOther_example", withholdingTaxItems: [WithholidingTaxItem(incomeType: 123, description: "description_example", taxRate: 123, taxAmount: 123, taxAmountNoVat: 123, withheld: 123, total: 123, vatType: 123)], total: 123, totalTaxWithheld: 123, taxPayment: 123, taxPaymentOthers: "taxPaymentOthers_example", providentFundNumber: "providentFundNumber_example", providentFundAmount: "providentFundAmount_example", socialSecurityAmount: "socialSecurityAmount_example", remarks: "remarks_example", internalNotes: "internalNotes_example", showSignatureOrStamp: false) // UpdateWithholidingTaxDocument | 

// Edit withholding tax document.
WithholdingTaxAPI.withholdingTaxesIdPut(authorization: authorization, id: id, updateWithholidingTaxDocument: updateWithholidingTaxDocument) { (response, error) in
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
 **id** | **String** | ID เอกสารใช้ recordId | 
 **updateWithholidingTaxDocument** | [**UpdateWithholidingTaxDocument**](UpdateWithholidingTaxDocument.md) |  | 

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **withholdingTaxesIdStatusStatusIdPost**
```swift
    open class func withholdingTaxesIdStatusStatusIdPost(authorization: String, id: String, statusId: String, completion: @escaping (_ data: WithholidingTaxDocumentResponse?, _ error: Error?) -> Void)
```

Change status of withholding tax document.

เปลี่ยนสถานะของเอกสารใบหัก ณ ที่จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ ดำเนินการแล้ว (processed)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId
let statusId = "statusId_example" // String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> processed = ดำเนินการแล้ว <br> void = ยกเลิก

// Change status of withholding tax document.
WithholdingTaxAPI.withholdingTaxesIdStatusStatusIdPost(authorization: authorization, id: id, statusId: statusId) { (response, error) in
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
 **id** | **String** | ID เอกสารใช้ recordId | 
 **statusId** | **String** | เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; processed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **withholdingTaxesPost**
```swift
    open class func withholdingTaxesPost(authorization: String, withholidingTaxDocument: WithholidingTaxDocument, completion: @escaping (_ data: WithholidingTaxDocumentResponse?, _ error: Error?) -> Void)
```

Create withholding tax document.

สร้างเอกสารใบหัก ณ ที่จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ดำเนินการแล้ว (issued) <br> <br> ข้อมูลการออกเอกสาร หัก ณ ที่จ่าย : https://flowaccount.com/blog/ภาษีเงินได้-หัก-ณ-ที่จ่า

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let withholidingTaxDocument = WithholidingTaxDocument(contactCode: "contactCode_example", contactName: "contactName_example", contactAddress: "contactAddress_example", contactTaxId: "contactTaxId_example", contactBranch: "contactBranch_example", contactPerson: "contactPerson_example", contactEmail: "contactEmail_example", contactNumber: "contactNumber_example", contactZipCode: "contactZipCode_example", contactGroup: 123, publishedOn: Date(), entity: 123, textOther: "textOther_example", withholdingTaxItems: [WithholidingTaxItem(incomeType: 123, description: "description_example", taxRate: 123, taxAmount: 123, taxAmountNoVat: 123, withheld: 123, total: 123, vatType: 123)], total: 123, totalTaxWithheld: 123, taxPayment: 123, taxPaymentOthers: "taxPaymentOthers_example", providentFundNumber: "providentFundNumber_example", providentFundAmount: "providentFundAmount_example", socialSecurityAmount: "socialSecurityAmount_example", remarks: "remarks_example", internalNotes: "internalNotes_example", showSignatureOrStamp: false) // WithholidingTaxDocument | 

// Create withholding tax document.
WithholdingTaxAPI.withholdingTaxesPost(authorization: authorization, withholidingTaxDocument: withholidingTaxDocument) { (response, error) in
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
 **withholidingTaxDocument** | [**WithholidingTaxDocument**](WithholidingTaxDocument.md) |  | 

### Return type

[**WithholidingTaxDocumentResponse**](WithholidingTaxDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **withholdingTaxesSharedocumentPost**
```swift
    open class func withholdingTaxesSharedocumentPost(authorization: String, shareDocument: ShareDocument, completion: @escaping (_ data: ShareDocumentResponse?, _ error: Error?) -> Void)
```

Share link withholding tax documents.

แชร์ลิงค์ เอกสารใบหัก ณ ที่จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let shareDocument = ShareDocument(documentId: 123, culture: "culture_example") // ShareDocument | 

// Share link withholding tax documents.
WithholdingTaxAPI.withholdingTaxesSharedocumentPost(authorization: authorization, shareDocument: shareDocument) { (response, error) in
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
 **shareDocument** | [**ShareDocument**](ShareDocument.md) |  | 

### Return type

[**ShareDocumentResponse**](ShareDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

