# OpenapiClient::SendEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_id** | **Integer** | documentId หรือ recordId ของเอกสารที่ต้องการส่งอีเมล | 
**fromemail** | **String** | ใส่อีเมลผู้ส่ง &lt;br&gt; &lt;ex&gt;Example: myemail@email.com&lt;/ex&gt; | 
**toemail** | **String** | ใส่อีเมลผู้รับ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | 
**c_c_myself** | **Boolean** | ส่งสำเนาหาตนเอง | [optional] [default to true]
**cc_email** | **String** | สำเนา (CC) &lt;br&gt; &lt;ex&gt;Example: cc@email.com&lt;/ex&gt; | [optional] 
**bcc_email** | **String** | สำเนาลับ (BCC) &lt;br&gt; &lt;ex&gt;Example: bcc@email.com&lt;/ex&gt; | [optional] 
**subject** | **String** | หัวข้อ / ชื่อเรื่อง  | 
**message** | **String** | ข้อความ เนื้อหาของ email | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::SendEmail.new(document_id: null,
                                 fromemail: myemail@email.com,
                                 toemail: contact@email.com,
                                 c_c_myself: null,
                                 cc_email: cc@email.com,
                                 bcc_email: bcc@email.com,
                                 subject: null,
                                 message: null)
```


