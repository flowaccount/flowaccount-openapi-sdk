# SendEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **Int64** | documentId หรือ recordId ของเอกสารที่ต้องการส่งอีเมล | 
**fromemail** | **String** | ใส่อีเมลผู้ส่ง &lt;br&gt; &lt;ex&gt;Example: myemail@email.com&lt;/ex&gt; | 
**toemail** | **String** | ใส่อีเมลผู้รับ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | 
**cCMyself** | **Bool** | ส่งสำเนาหาตนเอง | [optional] [default to true]
**ccEmail** | **String** | สำเนา (CC) &lt;br&gt; &lt;ex&gt;Example: cc@email.com&lt;/ex&gt; | [optional] 
**bccEmail** | **String** | สำเนาลับ (BCC) &lt;br&gt; &lt;ex&gt;Example: bcc@email.com&lt;/ex&gt; | [optional] 
**subject** | **String** | หัวข้อ / ชื่อเรื่อง  | 
**message** | **String** | ข้อความ เนื้อหาของ email | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


