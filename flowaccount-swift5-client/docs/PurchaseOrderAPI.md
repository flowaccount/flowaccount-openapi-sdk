# PurchaseOrderAPI

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**purchasesOrdersEmailDocumentPost**](PurchaseOrderAPI.md#purchasesordersemaildocumentpost) | **POST** /purchases-orders/email-document | Send email purchase order document.
[**purchasesOrdersGet**](PurchaseOrderAPI.md#purchasesordersget) | **GET** /purchases-orders | Get list all purchase order documents.
[**purchasesOrdersIdAttachmentPost**](PurchaseOrderAPI.md#purchasesordersidattachmentpost) | **POST** /purchases-orders/{id}/attachment | Add Attachment to purchase order document.
[**purchasesOrdersIdDelete**](PurchaseOrderAPI.md#purchasesordersiddelete) | **DELETE** /purchases-orders/{id} | Delete purchase order document.
[**purchasesOrdersIdGet**](PurchaseOrderAPI.md#purchasesordersidget) | **GET** /purchases-orders/{id} | Get purchase order document.
[**purchasesOrdersIdPut**](PurchaseOrderAPI.md#purchasesordersidput) | **PUT** /purchases-orders/{id} | Edit purchase order document.
[**purchasesOrdersIdStatusStatusIdPost**](PurchaseOrderAPI.md#purchasesordersidstatusstatusidpost) | **POST** /purchases-orders/{id}/status/{statusId} | Change status of purchase order document.
[**purchasesOrdersInlinePost**](PurchaseOrderAPI.md#purchasesordersinlinepost) | **POST** /purchases-orders/inline | Create purchase order document with discount and tax inline.
[**purchasesOrdersPost**](PurchaseOrderAPI.md#purchasesorderspost) | **POST** /purchases-orders | Create purchase order document.
[**purchasesOrdersSharedocumentPost**](PurchaseOrderAPI.md#purchasesorderssharedocumentpost) | **POST** /purchases-orders/sharedocument | Share link purchase order document.


# **purchasesOrdersEmailDocumentPost**
```swift
    open class func purchasesOrdersEmailDocumentPost(authorization: String, sendEmailCoppies: SendEmailCoppies, completion: @escaping (_ data: SendEmailResponse?, _ error: Error?) -> Void)
```

Send email purchase order document.

ส่งเอกสารใบสั่งซื้อ ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sendEmailCoppies = SendEmailCoppies(doCopy: false) // SendEmailCoppies | 

// Send email purchase order document.
PurchaseOrderAPI.purchasesOrdersEmailDocumentPost(authorization: authorization, sendEmailCoppies: sendEmailCoppies) { (response, error) in
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
 **sendEmailCoppies** | [**SendEmailCoppies**](SendEmailCoppies.md) |  | 

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purchasesOrdersGet**
```swift
    open class func purchasesOrdersGet(currentPage: Int, pageSize: Int, authorization: String, sortBy: String? = nil, filter: String? = nil, completion: @escaping (_ data: AllDocumentResponse?, _ error: Error?) -> Void)
```

Get list all purchase order documents.

เรียกดูข้อมูลเอกสารใบสั่งซื้อทั้งหมดในระบบ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let currentPage = 987 // Int | Query current page document purchase orders. <br>Example Pattern: <ex>/purchases-orders?currentPage=1 </ex><ex>/purchases-orders?currentPage=1&pageSize=20</ex>
let pageSize = 987 // Int | Query document purchase orders list amount per page. <br>Example Pattern: <ex> /purchases-orders?pageSize=20 </ex>
let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sortBy = "sortBy_example" // String | Query document purchase orders list amount per page. <br>Example Pattern: <ex> /purchases-orders?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/purchases-orders?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases-orders?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases-orders?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex> (optional)
let filter = "filter_example" // String |  (optional)

// Get list all purchase order documents.
PurchaseOrderAPI.purchasesOrdersGet(currentPage: currentPage, pageSize: pageSize, authorization: authorization, sortBy: sortBy, filter: filter) { (response, error) in
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
 **currentPage** | **Int** | Query current page document purchase orders. &lt;br&gt;Example Pattern: &lt;ex&gt;/purchases-orders?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/purchases-orders?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Int** | Query document purchase orders list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String** |  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **String** | Query document purchase orders list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/purchases-orders?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String** |  | [optional] 

### Return type

[**AllDocumentResponse**](AllDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purchasesOrdersIdAttachmentPost**
```swift
    open class func purchasesOrdersIdAttachmentPost(authorization: String, id: String, file: URL? = nil, completion: @escaping (_ data: AttachmentResponse?, _ error: Error?) -> Void)
```

Add Attachment to purchase order document.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | documentId หรือ recordId ของเอกสารที่ต้องการแนบ
let file = URL(string: "https://example.com")! // URL | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary (optional)

// Add Attachment to purchase order document.
PurchaseOrderAPI.purchasesOrdersIdAttachmentPost(authorization: authorization, id: id, file: file) { (response, error) in
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
 **id** | **String** | documentId หรือ recordId ของเอกสารที่ต้องการแนบ | 
 **file** | **URL** | รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary | [optional] 

### Return type

[**AttachmentResponse**](AttachmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purchasesOrdersIdDelete**
```swift
    open class func purchasesOrdersIdDelete(authorization: String, id: String, completion: @escaping (_ data: DeleteResponse?, _ error: Error?) -> Void)
```

Delete purchase order document.

ลบ เอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId

// Delete purchase order document.
PurchaseOrderAPI.purchasesOrdersIdDelete(authorization: authorization, id: id) { (response, error) in
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

# **purchasesOrdersIdGet**
```swift
    open class func purchasesOrdersIdGet(authorization: String, id: String, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Get purchase order document.

เรียกดูข้อมูลเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId

// Get purchase order document.
PurchaseOrderAPI.purchasesOrdersIdGet(authorization: authorization, id: id) { (response, error) in
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

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purchasesOrdersIdPut**
```swift
    open class func purchasesOrdersIdPut(authorization: String, id: String, updateInlineDocument: UpdateInlineDocument, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Edit purchase order document.

แก้ไขข้อมูลเอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId
let updateInlineDocument = UpdateInlineDocument(discountType: 123, useInlineDiscount: false, useInlineVat: false, exemptAmount: 123, vatableAmount: 123, items: [InlineProductItem(type: 123, name: "name_example", description: "description_example", quantity: 123, unitName: "unitName_example", pricePerUnit: 123, total: 123, sellChartOfAccountCode: "sellChartOfAccountCode_example", buyChartOfAccountCode: "buyChartOfAccountCode_example", discountAmount: 123, vatRate: 123)], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // UpdateInlineDocument | 

// Edit purchase order document.
PurchaseOrderAPI.purchasesOrdersIdPut(authorization: authorization, id: id, updateInlineDocument: updateInlineDocument) { (response, error) in
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
 **updateInlineDocument** | [**UpdateInlineDocument**](UpdateInlineDocument.md) |  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purchasesOrdersIdStatusStatusIdPost**
```swift
    open class func purchasesOrdersIdStatusStatusIdPost(authorization: String, id: String, statusId: String, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Change status of purchase order document.

เปลี่ยนสถานะของเอกสารใบสั่งซื้อ สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId
let statusId = "statusId_example" // String | เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> approvedandprocessed = ดำเนินการแล้ว <br> void = ยกเลิก

// Change status of purchase order document.
PurchaseOrderAPI.purchasesOrdersIdStatusStatusIdPost(authorization: authorization, id: id, statusId: statusId) { (response, error) in
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
 **statusId** | **String** | เปลี่ยนสถานะเอกสารได้ 4 สถานะ &lt;br&gt; awaiting &#x3D; รออนุมัติ &lt;br&gt; approved &#x3D; อนุมัติ &lt;br&gt; approvedandprocessed &#x3D; ดำเนินการแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purchasesOrdersInlinePost**
```swift
    open class func purchasesOrdersInlinePost(authorization: String, inlineDocument: InlineDocument, completion: @escaping (_ data: InlineDocumentResponse?, _ error: Error?) -> Void)
```

Create purchase order document with discount and tax inline.

สร้างเอกสารใบสั่งซื้อ แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br>

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let inlineDocument = InlineDocument(discountType: 123, useInlineDiscount: false, useInlineVat: false, exemptAmount: 123, vatableAmount: 123, items: [InlineProductItem(type: 123, name: "name_example", description: "description_example", quantity: 123, unitName: "unitName_example", pricePerUnit: 123, total: 123, sellChartOfAccountCode: "sellChartOfAccountCode_example", buyChartOfAccountCode: "buyChartOfAccountCode_example", discountAmount: 123, vatRate: 123)], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // InlineDocument | 

// Create purchase order document with discount and tax inline.
PurchaseOrderAPI.purchasesOrdersInlinePost(authorization: authorization, inlineDocument: inlineDocument) { (response, error) in
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
 **inlineDocument** | [**InlineDocument**](InlineDocument.md) |  | 

### Return type

[**InlineDocumentResponse**](InlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purchasesOrdersPost**
```swift
    open class func purchasesOrdersPost(authorization: String, simpleDocument: SimpleDocument, completion: @escaping (_ data: SimpleDocumentResponse?, _ error: Error?) -> Void)
```

Create purchase order document.

สร้างเอกสารใบสั่งซื้อ เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br>

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let simpleDocument = SimpleDocument(items: [SimpleProductItem()], documentReference: [UpgradeDocument(recordId: 123, referenceDocumentSerial: "referenceDocumentSerial_example", referenceDocumentType: 123)]) // SimpleDocument | 

// Create purchase order document.
PurchaseOrderAPI.purchasesOrdersPost(authorization: authorization, simpleDocument: simpleDocument) { (response, error) in
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
 **simpleDocument** | [**SimpleDocument**](SimpleDocument.md) |  | 

### Return type

[**SimpleDocumentResponse**](SimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purchasesOrdersSharedocumentPost**
```swift
    open class func purchasesOrdersSharedocumentPost(authorization: String, shareDocument: ShareDocument, completion: @escaping (_ data: ShareDocumentResponse?, _ error: Error?) -> Void)
```

Share link purchase order document.

แชร์ลิงค์ เอกสารใบสั่งซื้อที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let shareDocument = ShareDocument(documentId: 123, culture: "culture_example") // ShareDocument | 

// Share link purchase order document.
PurchaseOrderAPI.purchasesOrdersSharedocumentPost(authorization: authorization, shareDocument: shareDocument) { (response, error) in
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

