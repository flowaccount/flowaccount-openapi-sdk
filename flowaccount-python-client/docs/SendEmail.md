# SendEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **int** | documentId หรือ recordId ของเอกสารที่ต้องการส่งอีเมล | 
**fromemail** | **str** | ใส่อีเมลผู้ส่ง &lt;br&gt; &lt;ex&gt;Example: myemail@email.com&lt;/ex&gt; | 
**toemail** | **str** | ใส่อีเมลผู้รับ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | 
**c_c_myself** | **bool** | ส่งสำเนาหาตนเอง | [optional] [default to True]
**cc_email** | **str** | สำเนา (CC) &lt;br&gt; &lt;ex&gt;Example: cc@email.com&lt;/ex&gt; | [optional] 
**bcc_email** | **str** | สำเนาลับ (BCC) &lt;br&gt; &lt;ex&gt;Example: bcc@email.com&lt;/ex&gt; | [optional] 
**subject** | **str** | หัวข้อ / ชื่อเรื่อง  | 
**message** | **str** | ข้อความ เนื้อหาของ email | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


