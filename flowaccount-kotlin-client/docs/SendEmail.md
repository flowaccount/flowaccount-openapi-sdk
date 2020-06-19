
# SendEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **kotlin.Long** | documentId หรือ recordId ของเอกสารที่ต้องการส่งอีเมล | 
**fromemail** | **kotlin.String** | ใส่อีเมลผู้ส่ง &lt;br&gt; &lt;ex&gt;Example: myemail@email.com&lt;/ex&gt; | 
**toemail** | **kotlin.String** | ใส่อีเมลผู้รับ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | 
**subject** | **kotlin.String** | หัวข้อ / ชื่อเรื่อง  | 
**cCMyself** | **kotlin.Boolean** | ส่งสำเนาหาตนเอง |  [optional]
**ccEmail** | **kotlin.String** | สำเนา (CC) &lt;br&gt; &lt;ex&gt;Example: cc@email.com&lt;/ex&gt; |  [optional]
**bccEmail** | **kotlin.String** | สำเนาลับ (BCC) &lt;br&gt; &lt;ex&gt;Example: bcc@email.com&lt;/ex&gt; |  [optional]
**message** | **kotlin.String** | ข้อความ เนื้อหาของ email |  [optional]



