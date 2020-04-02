# # SendEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **int** | documentId หรือ recordId ของเอกสารที่ต้องการส่งอีเมล | 
**fromemail** | **string** | ใส่อีเมลผู้ส่ง &lt;br&gt; &lt;ex&gt;Example: myemail@email.com&lt;/ex&gt; | 
**toemail** | **string** | ใส่อีเมลผู้รับ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | 
**c_c_myself** | **bool** | ส่งสำเนาหาตนเอง | [optional] [default to true]
**cc_email** | **string** | สำเนา (CC) &lt;br&gt; &lt;ex&gt;Example: cc@email.com&lt;/ex&gt; | [optional] 
**bcc_email** | **string** | สำเนาลับ (BCC) &lt;br&gt; &lt;ex&gt;Example: bcc@email.com&lt;/ex&gt; | [optional] 
**subject** | **string** | หัวข้อ / ชื่อเรื่อง | 
**message** | **string** | ข้อความ เนื้อหาของ email | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


