# ExpensesAPI

All URIs are relative to *https://openapi.flowaccount.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expensesCategoriesAccountingGet**](ExpensesAPI.md#expensescategoriesaccountingget) | **GET** /expenses/categories/accounting | Accounting categorys expenses document.
[**expensesCategoriesBusinessGet**](ExpensesAPI.md#expensescategoriesbusinessget) | **GET** /expenses/categories/business | Business categorys expenses document.
[**expensesEmailDocumentPost**](ExpensesAPI.md#expensesemaildocumentpost) | **POST** /expenses/email-document | Send email expenses document.
[**expensesGet**](ExpensesAPI.md#expensesget) | **GET** /expenses | Get list all expenses documents.
[**expensesIdAttachmentPost**](ExpensesAPI.md#expensesidattachmentpost) | **POST** /expenses/{id}/attachment | Add Attachment to expenses.
[**expensesIdDelete**](ExpensesAPI.md#expensesiddelete) | **DELETE** /expenses/{id} | Delete expenses document.
[**expensesIdGet**](ExpensesAPI.md#expensesidget) | **GET** /expenses/{id} | Get expenses document.
[**expensesIdPaymentPost**](ExpensesAPI.md#expensesidpaymentpost) | **POST** /expenses/{id}/payment | Change paid status of expenses document.
[**expensesIdPut**](ExpensesAPI.md#expensesidput) | **PUT** /expenses/{id} | Edit expenses document.
[**expensesIdStatusStatusIdPost**](ExpensesAPI.md#expensesidstatusstatusidpost) | **POST** /expenses/{id}/status/{statusId} | Change status of expenses document.
[**expensesInlinePost**](ExpensesAPI.md#expensesinlinepost) | **POST** /expenses/inline | Create expenses document with discount and tax inline.
[**expensesInlineWithPaymentPost**](ExpensesAPI.md#expensesinlinewithpaymentpost) | **POST** /expenses/inline/with-payment | Create expenses document with discount and tax inline with payment.
[**expensesPost**](ExpensesAPI.md#expensespost) | **POST** /expenses | Create expenses document.
[**expensesSharedocumentPost**](ExpensesAPI.md#expensessharedocumentpost) | **POST** /expenses/sharedocument | Share link expenses documents.
[**expensesWithPaymentPost**](ExpensesAPI.md#expenseswithpaymentpost) | **POST** /expenses/with-payment | Create expenses document with-payment.


# **expensesCategoriesAccountingGet**
```swift
    open class func expensesCategoriesAccountingGet(authorization: String, completion: @escaping (_ data: BusinessCategory?, _ error: Error?) -> Void)
```

Accounting categorys expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักบัญชี)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")

// Accounting categorys expenses document.
ExpensesAPI.expensesCategoriesAccountingGet(authorization: authorization) { (response, error) in
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

[**BusinessCategory**](BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expensesCategoriesBusinessGet**
```swift
    open class func expensesCategoriesBusinessGet(authorization: String, completion: @escaping (_ data: BusinessCategory?, _ error: Error?) -> Void)
```

Business categorys expenses document.

เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักธุรกิจ)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")

// Business categorys expenses document.
ExpensesAPI.expensesCategoriesBusinessGet(authorization: authorization) { (response, error) in
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

[**BusinessCategory**](BusinessCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expensesEmailDocumentPost**
```swift
    open class func expensesEmailDocumentPost(authorization: String, sendEmailSimple: SendEmailSimple, completion: @escaping (_ data: SendEmailResponse?, _ error: Error?) -> Void)
```

Send email expenses document.

ส่งเอกสารค่าใช้จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sendEmailSimple = SendEmailSimple() // SendEmailSimple | 

// Send email expenses document.
ExpensesAPI.expensesEmailDocumentPost(authorization: authorization, sendEmailSimple: sendEmailSimple) { (response, error) in
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

# **expensesGet**
```swift
    open class func expensesGet(currentPage: Int, pageSize: Int, authorization: String, sortBy: String? = nil, filter: String? = nil, completion: @escaping (_ data: AllExpenseDocumentResponse?, _ error: Error?) -> Void)
```

Get list all expenses documents.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายทั้งหมดในระบบ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let currentPage = 987 // Int | Query current page document expenses. <br>Example Pattern: <ex>/expenses?currentPage=1 </ex><ex>/expenses?currentPage=1&pageSize=20</ex>
let pageSize = 987 // Int | Query document expenses list amount per page. <br>Example Pattern: <ex> /expenses?pageSize=20 </ex>
let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let sortBy = "sortBy_example" // String | Query document expenses list amount per page. <br>Example Pattern: <ex> /expenses?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/expenses?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex> (optional)
let filter = "filter_example" // String |  (optional)

// Get list all expenses documents.
ExpensesAPI.expensesGet(currentPage: currentPage, pageSize: pageSize, authorization: authorization, sortBy: sortBy, filter: filter) { (response, error) in
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
 **currentPage** | **Int** | Query current page document expenses. &lt;br&gt;Example Pattern: &lt;ex&gt;/expenses?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/expenses?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; | 
 **pageSize** | **Int** | Query document expenses list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?pageSize&#x3D;20 &lt;/ex&gt; | 
 **authorization** | **String** |  | [default to &quot;Bearer accessToken&quot;]
 **sortBy** | **String** | Query document expenses list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;publishedOn&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}] &lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Contact.NameLocal&#39;,&#39;sortOrder&#39;:&#39;desc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Value&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt;&lt;ex&gt;/expenses?sortBy&#x3D;[{&#39;name&#39;:&#39;Status&#39;,&#39;sortOrder&#39;:&#39;asc&#39;},{&#39;name&#39;:&#39;documentSerial&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; | [optional] 
 **filter** | **String** |  | [optional] 

### Return type

[**AllExpenseDocumentResponse**](AllExpenseDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expensesIdAttachmentPost**
```swift
    open class func expensesIdAttachmentPost(authorization: String, id: String, file: URL? = nil, completion: @escaping (_ data: AttachmentResponse?, _ error: Error?) -> Void)
```

Add Attachment to expenses.

แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | 
let file = URL(string: "https://example.com")! // URL |  (optional)

// Add Attachment to expenses.
ExpensesAPI.expensesIdAttachmentPost(authorization: authorization, id: id, file: file) { (response, error) in
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

# **expensesIdDelete**
```swift
    open class func expensesIdDelete(authorization: String, id: String, completion: @escaping (_ data: DeleteResponse?, _ error: Error?) -> Void)
```

Delete expenses document.

ลบ เอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId

// Delete expenses document.
ExpensesAPI.expensesIdDelete(authorization: authorization, id: id) { (response, error) in
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

# **expensesIdGet**
```swift
    open class func expensesIdGet(authorization: String, id: String, completion: @escaping (_ data: ExpenseInlineDocumentResponse?, _ error: Error?) -> Void)
```

Get expenses document.

เรียกดูข้อมูลเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | 

// Get expenses document.
ExpensesAPI.expensesIdGet(authorization: authorization, id: id) { (response, error) in
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

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expensesIdPaymentPost**
```swift
    open class func expensesIdPaymentPost(authorization: String, id: String, paymentPaidDocument: PaymentPaidDocument, completion: @escaping (_ data: ExpenseSimpleDocumentResponse?, _ error: Error?) -> Void)
```

Change paid status of expenses document.

ชำระเงิน เอกสารค่าใช้จ่ายเปลี่ยน สถานะเป็น ชำระเงินแล้ว

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId หรือ documentId
let paymentPaidDocument = PaymentPaidDocument(paymentStructureType: "paymentStructureType_example", documentId: 123, paymentMethod: 123, paymentDate: Date(), collected: 123, withheldPercentage: 123, withheldAmount: 123, paymentRemarks: "paymentRemarks_example", remainingCollectedType: 123, remainingCollected: 123, transferBankAccountId: 123, bankAccountId: 123, paymentCharge: 123, chequeDate: Date(), chequeNumber: "chequeNumber_example", chequeBankAccountId: 123, creditCardBankAccountId: 123) // PaymentPaidDocument | 

// Change paid status of expenses document.
ExpensesAPI.expensesIdPaymentPost(authorization: authorization, id: id, paymentPaidDocument: paymentPaidDocument) { (response, error) in
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
 **paymentPaidDocument** | [**PaymentPaidDocument**](PaymentPaidDocument.md) |  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expensesIdPut**
```swift
    open class func expensesIdPut(authorization: String, id: String, updateExpenseDocument: UpdateExpenseDocument, completion: @escaping (_ data: ExpenseInlineDocumentResponse?, _ error: Error?) -> Void)
```

Edit expenses document.

แก้ไขข้อมูลเอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId
let updateExpenseDocument = UpdateExpenseDocument(companyName: "companyName_example", companyNameEn: "companyNameEn_example", companyAddress: "companyAddress_example", companyAddressEn: "companyAddressEn_example", companyTaxId: "companyTaxId_example", companyBranch: "companyBranch_example", companyBranchEn: "companyBranchEn_example", companyPhone: "companyPhone_example", companyMobile: "companyMobile_example", companyFax: "companyFax_example", companyWebsite: "companyWebsite_example", contactCode: "contactCode_example", contactName: "contactName_example", contactAddress: "contactAddress_example", contactTaxId: "contactTaxId_example", contactBranch: "contactBranch_example", contactPerson: "contactPerson_example", contactEmail: "contactEmail_example", contactNumber: "contactNumber_example", contactZipCode: "contactZipCode_example", contactGroup: 123, publishedOn: Date(), creditType: 123, creditDays: 123, dueDate: Date(), salesName: "salesName_example", projectName: "projectName_example", reference: "reference_example", isVatInclusive: false, subTotal: 123, discountPercentage: 123, discountAmount: 123, totalAfterDiscount: 123, isVat: false, vatAmount: 123, grandTotal: 123, remarks: "remarks_example", internalNotes: "internalNotes_example", showSignatureOrStamp: false, expenseStructureType: "expenseStructureType_example") // UpdateExpenseDocument | 

// Edit expenses document.
ExpensesAPI.expensesIdPut(authorization: authorization, id: id, updateExpenseDocument: updateExpenseDocument) { (response, error) in
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
 **updateExpenseDocument** | [**UpdateExpenseDocument**](UpdateExpenseDocument.md) |  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expensesIdStatusStatusIdPost**
```swift
    open class func expensesIdStatusStatusIdPost(authorization: String, id: String, statusId: String, completion: @escaping (_ data: ExpenseInlineDocumentResponse?, _ error: Error?) -> Void)
```

Change status of expenses document.

เปลี่ยนสถานะของเอกสารค่าใช้จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let id = "id_example" // String | ID เอกสารใช้ recordId
let statusId = "statusId_example" // String | เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> received = รับใบเสร็จแล้ว <br> void = ยกเลิก

// Change status of expenses document.
ExpensesAPI.expensesIdStatusStatusIdPost(authorization: authorization, id: id, statusId: statusId) { (response, error) in
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
 **statusId** | **String** | เปลี่ยนสถานะเอกสารได้ 3 สถานะ &lt;br&gt; awaiting &#x3D; รอดำเนินการ &lt;br&gt; received &#x3D; รับใบเสร็จแล้ว &lt;br&gt; void &#x3D; ยกเลิก | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expensesInlinePost**
```swift
    open class func expensesInlinePost(authorization: String, expenseInlineDocument: ExpenseInlineDocument, completion: @escaping (_ data: ExpenseInlineDocumentResponse?, _ error: Error?) -> Void)
```

Create expenses document with discount and tax inline.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let expenseInlineDocument = ExpenseInlineDocument(items: [ExpenseInlineProductItem(systemCode: 123, categoryId: 123, description: "description_example", nameLocal: "nameLocal_example", nameForeign: "nameForeign_example", creditCategory: 123, creditId: 123, creditCode: "creditCode_example", creditNameLocal: "creditNameLocal_example", creditNameForeign: "creditNameForeign_example", debitCategory: 123, debitId: 123, debitCode: "debitCode_example", debitNameLocal: "debitNameLocal_example", debitNameForeign: "debitNameForeign_example", quantity: 123, unitName: "unitName_example", pricePerUnit: 123, discountAmount: 123, vatRate: 123, total: 123)], discountType: 123, useInlineDiscount: false, useInlineVat: false, exemptAmount: 123, vatableAmount: 123) // ExpenseInlineDocument | 

// Create expenses document with discount and tax inline.
ExpensesAPI.expensesInlinePost(authorization: authorization, expenseInlineDocument: expenseInlineDocument) { (response, error) in
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
 **expenseInlineDocument** | [**ExpenseInlineDocument**](ExpenseInlineDocument.md) |  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expensesInlineWithPaymentPost**
```swift
    open class func expensesInlineWithPaymentPost(authorization: String, expenseInlineDocumentWithPaymentPaid: ExpenseInlineDocumentWithPaymentPaid, completion: @escaping (_ data: ExpenseInlineDocumentResponse?, _ error: Error?) -> Void)
```

Create expenses document with discount and tax inline with payment.

สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let expenseInlineDocumentWithPaymentPaid = ExpenseInlineDocumentWithPaymentPaid(contactCode: "contactCode_example", contactName: "contactName_example", contactAddress: "contactAddress_example", contactTaxId: "contactTaxId_example", contactBranch: "contactBranch_example", contactPerson: "contactPerson_example", contactEmail: "contactEmail_example", contactNumber: "contactNumber_example", contactZipCode: "contactZipCode_example", contactGroup: 123, publishedOn: Date(), creditType: 123, creditDays: 123, dueDate: Date(), salesName: "salesName_example", projectName: "projectName_example", reference: "reference_example", isVatInclusive: false, items: [ExpenseInlineProductItem(systemCode: 123, categoryId: 123, description: "description_example", nameLocal: "nameLocal_example", nameForeign: "nameForeign_example", creditCategory: 123, creditId: 123, creditCode: "creditCode_example", creditNameLocal: "creditNameLocal_example", creditNameForeign: "creditNameForeign_example", debitCategory: 123, debitId: 123, debitCode: "debitCode_example", debitNameLocal: "debitNameLocal_example", debitNameForeign: "debitNameForeign_example", quantity: 123, unitName: "unitName_example", pricePerUnit: 123, discountAmount: 123, vatRate: 123, total: 123)], subTotal: 123, discountPercentage: 123, discountAmount: 123, totalAfterDiscount: 123, isVat: false, vatAmount: 123, grandTotal: 123, discountType: 123, useInlineDiscount: false, useInlineVat: false, exemptAmount: 123, remarks: "remarks_example", internalNotes: "internalNotes_example", showSignatureOrStamp: false, expensePaymentStructureType: "expensePaymentStructureType_example", paymentMethod: 123, paymentDate: Date(), collected: 123, withheldPercentage: 123, withheldAmount: 123, paymentRemarks: "paymentRemarks_example", remainingCollectedType: 123, remainingCollected: 123, transferBankAccountId: 123, bankAccountId: 123, paymentCharge: 123, chequeDate: Date(), chequeNumber: "chequeNumber_example", chequeBankAccountId: 123, creditCardBankAccountId: 123) // ExpenseInlineDocumentWithPaymentPaid | 

// Create expenses document with discount and tax inline with payment.
ExpensesAPI.expensesInlineWithPaymentPost(authorization: authorization, expenseInlineDocumentWithPaymentPaid: expenseInlineDocumentWithPaymentPaid) { (response, error) in
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
 **expenseInlineDocumentWithPaymentPaid** | [**ExpenseInlineDocumentWithPaymentPaid**](ExpenseInlineDocumentWithPaymentPaid.md) |  | 

### Return type

[**ExpenseInlineDocumentResponse**](ExpenseInlineDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expensesPost**
```swift
    open class func expensesPost(authorization: String, expenseSimpleDocument: ExpenseSimpleDocument, completion: @escaping (_ data: ExpenseSimpleDocumentResponse?, _ error: Error?) -> Void)
```

Create expenses document.

สร้างเอกสารค่าใช้จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let expenseSimpleDocument = ExpenseSimpleDocument(items: [ExpenseSimpleProductItem(systemCode: 123, categoryId: 123, description: "description_example", nameLocal: "nameLocal_example", nameForeign: "nameForeign_example", creditCategory: 123, creditId: 123, creditCode: "creditCode_example", creditNameLocal: "creditNameLocal_example", creditNameForeign: "creditNameForeign_example", debitCategory: 123, debitId: 123, debitCode: "debitCode_example", debitNameLocal: "debitNameLocal_example", debitNameForeign: "debitNameForeign_example", quantity: 123, unitName: "unitName_example", pricePerUnit: 123, total: 123)]) // ExpenseSimpleDocument | 

// Create expenses document.
ExpensesAPI.expensesPost(authorization: authorization, expenseSimpleDocument: expenseSimpleDocument) { (response, error) in
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
 **expenseSimpleDocument** | [**ExpenseSimpleDocument**](ExpenseSimpleDocument.md) |  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expensesSharedocumentPost**
```swift
    open class func expensesSharedocumentPost(authorization: String, shareDocument: ShareDocument, completion: @escaping (_ data: ShareDocumentResponse?, _ error: Error?) -> Void)
```

Share link expenses documents.

แชร์ลิงค์ เอกสารค่าใช้จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let shareDocument = ShareDocument(documentId: 123, culture: "culture_example") // ShareDocument | 

// Share link expenses documents.
ExpensesAPI.expensesSharedocumentPost(authorization: authorization, shareDocument: shareDocument) { (response, error) in
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

# **expensesWithPaymentPost**
```swift
    open class func expensesWithPaymentPost(authorization: String, expenseSimpleDocumentWithPaymentPaid: ExpenseSimpleDocumentWithPaymentPaid, completion: @escaping (_ data: ExpenseSimpleDocumentResponse?, _ error: Error?) -> Void)
```

Create expenses document with-payment.

สร้างเอกสารค่าใช้จ่าย พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)

### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let authorization = "authorization_example" // String |  (default to "Bearer accessToken")
let expenseSimpleDocumentWithPaymentPaid = ExpenseSimpleDocumentWithPaymentPaid(contactCode: "contactCode_example", contactName: "contactName_example", contactAddress: "contactAddress_example", contactTaxId: "contactTaxId_example", contactBranch: "contactBranch_example", contactPerson: "contactPerson_example", contactEmail: "contactEmail_example", contactNumber: "contactNumber_example", contactZipCode: "contactZipCode_example", contactGroup: 123, publishedOn: Date(), creditType: 123, creditDays: 123, dueDate: Date(), salesName: "salesName_example", projectName: "projectName_example", reference: "reference_example", isVatInclusive: false, items: [ExpenseSimpleProductItem(systemCode: 123, categoryId: 123, description: "description_example", nameLocal: "nameLocal_example", nameForeign: "nameForeign_example", creditCategory: 123, creditId: 123, creditCode: "creditCode_example", creditNameLocal: "creditNameLocal_example", creditNameForeign: "creditNameForeign_example", debitCategory: 123, debitId: 123, debitCode: "debitCode_example", debitNameLocal: "debitNameLocal_example", debitNameForeign: "debitNameForeign_example", quantity: 123, unitName: "unitName_example", pricePerUnit: 123, total: 123)], subTotal: 123, discountPercentage: 123, discountAmount: 123, totalAfterDiscount: 123, isVat: false, vatAmount: 123, grandTotal: 123, remarks: "remarks_example", internalNotes: "internalNotes_example", showSignatureOrStamp: false, expensePaymentStructureType: "expensePaymentStructureType_example", paymentMethod: 123, paymentDate: Date(), collected: 123, withheldPercentage: 123, withheldAmount: 123, paymentRemarks: "paymentRemarks_example", remainingCollectedType: 123, remainingCollected: 123, transferBankAccountId: 123, bankAccountId: 123, paymentCharge: 123, chequeDate: Date(), chequeNumber: "chequeNumber_example", chequeBankAccountId: 123, creditCardBankAccountId: 123) // ExpenseSimpleDocumentWithPaymentPaid | 

// Create expenses document with-payment.
ExpensesAPI.expensesWithPaymentPost(authorization: authorization, expenseSimpleDocumentWithPaymentPaid: expenseSimpleDocumentWithPaymentPaid) { (response, error) in
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
 **expenseSimpleDocumentWithPaymentPaid** | [**ExpenseSimpleDocumentWithPaymentPaid**](ExpenseSimpleDocumentWithPaymentPaid.md) |  | 

### Return type

[**ExpenseSimpleDocumentResponse**](ExpenseSimpleDocumentResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

