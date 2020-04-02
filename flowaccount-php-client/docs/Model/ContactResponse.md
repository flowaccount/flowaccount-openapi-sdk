# # ContactResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | เลข id Contact | [optional] 
**contact_group** | **int** | ประเภทผู้ติดต่อ: 1 &#x3D; บุคคลธรรมดา / 3 &#x3D; นิติบุคคล | [default to 3]
**contact_type** | **int** | ประเภท: 3 &#x3D; ลูกค้า / 5 &#x3D; ผู้จำหน่าย / 7 &#x3D; ผู้จำหน่ายและลูกค้า | [default to 3]
**contact_code** | **string** | รหัสผู้ติดต่อ | 
**contact_name** | **string** | ชื่อผู้ธุรกิจ หรือ ชื่อลูกค้า หรือ ชื่อผู้จำหน่าย | 
**contact_address** | **string** | ที่อยู่ผู้ติดต่อ | [optional] 
**contact_tax_id** | **int** | เลขประจำตัวผู้เสียภาษี 13 หลัก ​&lt;br&gt;&lt;ex&gt;Example: 1234567890123&lt;/ex&gt; | [optional] 
**contact_branch_code** | **string** | รหัสสาขา | [optional] 
**contact_branch** | **string** | ชื่อสาขา | [optional] [default to 'สำนักงานใหญ่']
**contact_person** | **string** | ชื่อผู้ติดต่อ | [optional] 
**contact_email** | **string** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | [optional] 
**contact_mobile** | **string** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**contact_bank_id** | **int** | รหัสธนาคาร &lt;br&gt; 1 &#x3D; ธนาคารกรุงเทพ &lt;br&gt; 2 &#x3D; ธนาคารกสิกรไทย &lt;br&gt; 3 &#x3D; ธนาคารกรุงไทย &lt;br&gt; 4 &#x3D; ธนาคารทหารไทย &lt;br&gt; 5 &#x3D; ธนาคารไทยพาณิชย์ &lt;br&gt; 6 &#x3D; ธนาคารสแตนดาร์ดชาร์เตอร์ด &lt;br&gt; 7 &#x3D; ธนาคารซีไอเอ็มบี ไทย &lt;br&gt; 8 &#x3D; ธนาคารยูโอบี &lt;br&gt; 10 &#x3D; ธนาคารกรุงศรีอยุธยา &lt;br&gt; 11 &#x3D; ธนาคารออมสิน &lt;br&gt; 12 &#x3D; ธนาคารธนชาต &lt;br&gt; 13 &#x3D; ธนาคารแลนด์ แอนด์ เฮ้าส์ &lt;br&gt; 14 &#x3D; ธนาคารเกียรตินาคิน &lt;br&gt; 15 &#x3D; ธนาคารซิตี้แบงก์ &lt;br&gt; 16 &#x3D; ธนาคารทิสโก้ &lt;br&gt; 53 &#x3D; ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร &lt;br&gt; 54 &#x3D; ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย &lt;br&gt; 55 &#x3D; ธนาคารอาคารสงเคราะห์ &lt;br&gt; 56 &#x3D; ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย &lt;br&gt; 57 &#x3D; ธนาคารอิสลามแห่งประเทศไทย &lt;br&gt; 58 &#x3D; ธนาคารแห่งประเทศจีน (ไทย) &lt;br&gt; 59 &#x3D; ธนาคารไอซีบีซี (ไทย) &lt;br&gt; 60 &#x3D; ธนาคารเมกะ สากลพาณิชย์ &lt;br&gt; 61 &#x3D; ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น &lt;br&gt; 62 &#x3D; ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) &lt;br&gt; 63 &#x3D; ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น &lt;br&gt; 64 &#x3D; ธนาคารไทยเครดิต เพื่อรายย่อย | [optional] [default to 0]
**contact_bank_account_number** | **int** | เลขที่บัญชีธนาคาร &lt;br&gt; &lt;ex&gt;Example: 1111111111&lt;/ex&gt; | [optional] 
**contact_bank_branch** | **string** | สาขาธนาคาร &lt;br&gt; &lt;ex&gt;Example: บางรัก&lt;/ex&gt; | [optional] 
**contact_bank_account_type** | **int** | ประเภทบัญชีธนาคาร: &lt;br&gt; 1 &#x3D; บัญชีออมทรัพย์ &lt;br&gt; 3 &#x3D; บัญชีกระแสรายวัน | [optional] [default to 1]
**contact_credit_days** | **int** | เครดิต (วัน) &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; | [optional] [default to 0]
**contact_office** | **string** | เบอร์โทรศัพท์สำนักงาน &lt;br&gt; &lt;ex&gt;Example: 02-999-9999&lt;/ex&gt; | [optional] 
**contact_fax** | **string** | เบอร์โทรสาร &lt;br&gt; &lt;ex&gt;Example: 02-888-8888&lt;/ex&gt; | [optional] 
**contact_website** | **string** | เว็บไซต์ ผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Eample: www.flowaccount.com&lt;/ex&gt; | [optional] 
**conatact_shipping_address** | **string** | ที่อยู่สำหรับจัดส่ง | [optional] 
**contact_note** | **string** | โน๊ต | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


