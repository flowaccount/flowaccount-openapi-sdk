
# Contact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactGroup** | **kotlin.Long** | ประเภทผู้ติดต่อ: 1 &#x3D; บุคคลธรรมดา / 3 &#x3D; นิติบุคคล | 
**contactType** | **kotlin.Long** | ประเภท: 3 &#x3D; ลูกค้า / 5 &#x3D; ผู้จำหน่าย / 7 &#x3D; ผู้จำหน่ายและลูกค้า | 
**contactName** | **kotlin.String** | ชื่อผู้ธุรกิจ หรือ ชื่อลูกค้า หรือ ชื่อผู้จำหน่าย | 
**id** | **kotlin.Long** | เลข id Contact |  [optional]
**contactCode** | **kotlin.Long** | รหัสผู้ติดต่อ ​&lt;br&gt;&lt;ex&gt;Example: C0001&lt;/ex&gt; |  [optional]
**contactAddress** | **kotlin.String** | ที่อยู่ผู้ติดต่อ |  [optional]
**contactZipCode** | **kotlin.String** | รหัสไปรษณีย์ติดต่อ &lt;ex&gt;Example: 10140 &lt;/ex&gt; |  [optional]
**contactTaxId** | **kotlin.Long** | เลขประจำตัวผู้เสียภาษี 13 หลัก ​&lt;br&gt;&lt;ex&gt;Example: 1234567890123&lt;/ex&gt; |  [optional]
**contactBranchCode** | **kotlin.String** | รหัสสาขา |  [optional]
**contactBranch** | **kotlin.String** | ชื่อสาขา |  [optional]
**contactPerson** | **kotlin.String** | ชื่อผู้ติดต่อ |  [optional]
**contactEmail** | **kotlin.String** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; |  [optional]
**contactMobile** | **kotlin.String** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; |  [optional]
**contactBankId** | **kotlin.Long** | รหัสธนาคาร &lt;br&gt; 1 &#x3D; ธนาคารกรุงเทพ &lt;br&gt; 2 &#x3D; ธนาคารกสิกรไทย &lt;br&gt; 3 &#x3D; ธนาคารกรุงไทย &lt;br&gt; 4 &#x3D; ธนาคารทหารไทย &lt;br&gt; 5 &#x3D; ธนาคารไทยพาณิชย์ &lt;br&gt; 6 &#x3D; ธนาคารสแตนดาร์ดชาร์เตอร์ด &lt;br&gt; 7 &#x3D; ธนาคารซีไอเอ็มบี ไทย &lt;br&gt; 8 &#x3D; ธนาคารยูโอบี &lt;br&gt; 10 &#x3D; ธนาคารกรุงศรีอยุธยา &lt;br&gt; 11 &#x3D; ธนาคารออมสิน &lt;br&gt; 12 &#x3D; ธนาคารธนชาต &lt;br&gt; 13 &#x3D; ธนาคารแลนด์ แอนด์ เฮ้าส์ &lt;br&gt; 14 &#x3D; ธนาคารเกียรตินาคิน &lt;br&gt; 15 &#x3D; ธนาคารซิตี้แบงก์ &lt;br&gt; 16 &#x3D; ธนาคารทิสโก้ &lt;br&gt; 53 &#x3D; ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร &lt;br&gt; 54 &#x3D; ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย &lt;br&gt; 55 &#x3D; ธนาคารอาคารสงเคราะห์ &lt;br&gt; 56 &#x3D; ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย &lt;br&gt; 57 &#x3D; ธนาคารอิสลามแห่งประเทศไทย &lt;br&gt; 58 &#x3D; ธนาคารแห่งประเทศจีน (ไทย) &lt;br&gt; 59 &#x3D; ธนาคารไอซีบีซี (ไทย) &lt;br&gt; 60 &#x3D; ธนาคารเมกะ สากลพาณิชย์ &lt;br&gt; 61 &#x3D; ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น &lt;br&gt; 62 &#x3D; ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) &lt;br&gt; 63 &#x3D; ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น &lt;br&gt; 64 &#x3D; ธนาคารไทยเครดิต เพื่อรายย่อย  |  [optional]
**contactBankAccountNumber** | **kotlin.Long** | เลขที่บัญชีธนาคาร &lt;br&gt; &lt;ex&gt;Example: 1111111111&lt;/ex&gt; |  [optional]
**contactBankBranch** | **kotlin.String** | สาขาธนาคาร &lt;br&gt; &lt;ex&gt;Example: บางรัก&lt;/ex&gt; |  [optional]
**contactBankAccountType** | **kotlin.Long** | ประเภทบัญชีธนาคาร: &lt;br&gt; 1 &#x3D; บัญชีออมทรัพย์ &lt;br&gt; 3 &#x3D; บัญชีกระแสรายวัน |  [optional]
**contactCreditDays** | **kotlin.Long** | เครดิต (วัน) &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; |  [optional]
**contactOffice** | **kotlin.String** | เบอร์โทรศัพท์สำนักงาน &lt;br&gt; &lt;ex&gt;Example: 02-999-9999&lt;/ex&gt; |  [optional]
**contactFax** | **kotlin.String** | เบอร์โทรสาร &lt;br&gt; &lt;ex&gt;Example: 02-888-8888&lt;/ex&gt; |  [optional]
**contactWebsite** | **kotlin.String** | เว็บไซต์ ผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Eample: www.flowaccount.com&lt;/ex&gt; |  [optional]
**conatactShippingAddress** | **kotlin.String** | ที่อยู่สำหรับจัดส่ง |  [optional]
**contactNote** | **kotlin.String** | โน๊ต |  [optional]



