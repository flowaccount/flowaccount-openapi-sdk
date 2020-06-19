# OpenapiClient::Contact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Integer** | เลข id Contact | [optional] 
**contact_group** | **Integer** | ประเภทผู้ติดต่อ: 1 &#x3D; บุคคลธรรมดา / 3 &#x3D; นิติบุคคล | [default to 3]
**contact_type** | **Integer** | ประเภท: 3 &#x3D; ลูกค้า / 5 &#x3D; ผู้จำหน่าย / 7 &#x3D; ผู้จำหน่ายและลูกค้า | [default to 3]
**contact_code** | **Integer** | รหัสผู้ติดต่อ ​&lt;br&gt;&lt;ex&gt;Example: C0001&lt;/ex&gt; | [optional] 
**contact_name** | **String** | ชื่อผู้ธุรกิจ หรือ ชื่อลูกค้า หรือ ชื่อผู้จำหน่าย | 
**contact_address** | **String** | ที่อยู่ผู้ติดต่อ | [optional] 
**contact_zip_code** | **String** | รหัสไปรษณีย์ติดต่อ &lt;ex&gt;Example: 10140 &lt;/ex&gt; | [optional] 
**contact_tax_id** | **Integer** | เลขประจำตัวผู้เสียภาษี 13 หลัก ​&lt;br&gt;&lt;ex&gt;Example: 1234567890123&lt;/ex&gt; | [optional] 
**contact_branch_code** | **String** | รหัสสาขา | [optional] 
**contact_branch** | **String** | ชื่อสาขา | [optional] [default to &#39;สำนักงานใหญ่&#39;]
**contact_person** | **String** | ชื่อผู้ติดต่อ | [optional] 
**contact_email** | **String** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | [optional] 
**contact_mobile** | **String** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**contact_bank_id** | **Integer** | รหัสธนาคาร &lt;br&gt; 1 &#x3D; ธนาคารกรุงเทพ &lt;br&gt; 2 &#x3D; ธนาคารกสิกรไทย &lt;br&gt; 3 &#x3D; ธนาคารกรุงไทย &lt;br&gt; 4 &#x3D; ธนาคารทหารไทย &lt;br&gt; 5 &#x3D; ธนาคารไทยพาณิชย์ &lt;br&gt; 6 &#x3D; ธนาคารสแตนดาร์ดชาร์เตอร์ด &lt;br&gt; 7 &#x3D; ธนาคารซีไอเอ็มบี ไทย &lt;br&gt; 8 &#x3D; ธนาคารยูโอบี &lt;br&gt; 10 &#x3D; ธนาคารกรุงศรีอยุธยา &lt;br&gt; 11 &#x3D; ธนาคารออมสิน &lt;br&gt; 12 &#x3D; ธนาคารธนชาต &lt;br&gt; 13 &#x3D; ธนาคารแลนด์ แอนด์ เฮ้าส์ &lt;br&gt; 14 &#x3D; ธนาคารเกียรตินาคิน &lt;br&gt; 15 &#x3D; ธนาคารซิตี้แบงก์ &lt;br&gt; 16 &#x3D; ธนาคารทิสโก้ &lt;br&gt; 53 &#x3D; ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร &lt;br&gt; 54 &#x3D; ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย &lt;br&gt; 55 &#x3D; ธนาคารอาคารสงเคราะห์ &lt;br&gt; 56 &#x3D; ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย &lt;br&gt; 57 &#x3D; ธนาคารอิสลามแห่งประเทศไทย &lt;br&gt; 58 &#x3D; ธนาคารแห่งประเทศจีน (ไทย) &lt;br&gt; 59 &#x3D; ธนาคารไอซีบีซี (ไทย) &lt;br&gt; 60 &#x3D; ธนาคารเมกะ สากลพาณิชย์ &lt;br&gt; 61 &#x3D; ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น &lt;br&gt; 62 &#x3D; ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) &lt;br&gt; 63 &#x3D; ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น &lt;br&gt; 64 &#x3D; ธนาคารไทยเครดิต เพื่อรายย่อย  | [optional] [default to 0]
**contact_bank_account_number** | **Integer** | เลขที่บัญชีธนาคาร &lt;br&gt; &lt;ex&gt;Example: 1111111111&lt;/ex&gt; | [optional] 
**contact_bank_branch** | **String** | สาขาธนาคาร &lt;br&gt; &lt;ex&gt;Example: บางรัก&lt;/ex&gt; | [optional] 
**contact_bank_account_type** | **Integer** | ประเภทบัญชีธนาคาร: &lt;br&gt; 1 &#x3D; บัญชีออมทรัพย์ &lt;br&gt; 3 &#x3D; บัญชีกระแสรายวัน | [optional] [default to 1]
**contact_credit_days** | **Integer** | เครดิต (วัน) &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; | [optional] [default to 0]
**contact_office** | **String** | เบอร์โทรศัพท์สำนักงาน &lt;br&gt; &lt;ex&gt;Example: 02-999-9999&lt;/ex&gt; | [optional] 
**contact_fax** | **String** | เบอร์โทรสาร &lt;br&gt; &lt;ex&gt;Example: 02-888-8888&lt;/ex&gt; | [optional] 
**contact_website** | **String** | เว็บไซต์ ผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Eample: www.flowaccount.com&lt;/ex&gt; | [optional] 
**conatact_shipping_address** | **String** | ที่อยู่สำหรับจัดส่ง | [optional] 
**contact_note** | **String** | โน๊ต | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::Contact.new(id: null,
                                 contact_group: null,
                                 contact_type: null,
                                 contact_code: null,
                                 contact_name: null,
                                 contact_address: null,
                                 contact_zip_code: null,
                                 contact_tax_id: 1234567890123,
                                 contact_branch_code: null,
                                 contact_branch: null,
                                 contact_person: null,
                                 contact_email: contact@email.com,
                                 contact_mobile: 099-999-9999,
                                 contact_bank_id: null,
                                 contact_bank_account_number: 1111111111,
                                 contact_bank_branch: บางรัก,
                                 contact_bank_account_type: 1,
                                 contact_credit_days: null,
                                 contact_office: 02-999-9999,
                                 contact_fax: 02-888-8888,
                                 contact_website: www.flowaccount.com,
                                 conatact_shipping_address: null,
                                 contact_note: null)
```


