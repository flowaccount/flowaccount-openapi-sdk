# SendEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DocumentId** | **int64** | documentId หรือ recordId ของเอกสารที่ต้องการส่งอีเมล | 
**Fromemail** | **string** | ใส่อีเมลผู้ส่ง &lt;br&gt; &lt;ex&gt;Example: myemail@email.com&lt;/ex&gt; | 
**Toemail** | **string** | ใส่อีเมลผู้รับ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | 
**CCMyself** | **bool** | ส่งสำเนาหาตนเอง | [optional] [default to true]
**CcEmail** | **string** | สำเนา (CC) &lt;br&gt; &lt;ex&gt;Example: cc@email.com&lt;/ex&gt; | [optional] 
**BccEmail** | **string** | สำเนาลับ (BCC) &lt;br&gt; &lt;ex&gt;Example: bcc@email.com&lt;/ex&gt; | [optional] 
**Subject** | **string** | หัวข้อ / ชื่อเรื่อง  | 
**Message** | **string** | ข้อความ เนื้อหาของ email | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


