# OpenapiClient::UpdateWithholidingTaxDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **String** | ชื่อบริษัท | 
**company_name_en** | **String** | ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) | [optional] 
**company_address** | **String** | ที่อยู่บริษัท | 
**company_address_en** | **String** | ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) | [optional] 
**company_tax_id** | **String** | เลขประจำตัวผู้เสียภาษี บริษัท &lt;br&gt;&lt;ex&gt;Example: 0105558096348&lt;/ex&gt; | [optional] 
**company_branch** | **String** | ชื่อ และ รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: สำนักงานใหญ่ 00000&lt;/ex&gt; | 
**company_branch_en** | **String** | ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) &lt;br&gt;&lt;ex&gt;Example: Head Office 00000&lt;/ex&gt; | [optional] 
**company_phone** | **String** | เบอร์โทรสำนักงาน &lt;br&gt;&lt;ex&gt;Example: 02-999-9999&lt;/ex&gt; | [optional] 
**company_mobile** | **String** | เบอร์โทรศัพท์มือถือ &lt;br&gt;&lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**company_fax** | **String** | เบอร์โทรสาร &lt;br&gt;&lt;ex&gt;Example: 02-999-9999 ต่อ 1&lt;/ex&gt; | [optional] 
**company_website** | **String** | เว็บไซต์ &lt;br&gt;&lt;ex&gt;Example: www.flowaccount.com&lt;/ex&gt; | [optional] 
**contact_code** | **String** | รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contact_name** | **String** | ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | 
**contact_address** | **String** | ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contact_tax_id** | **String** | เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; | [optional] 
**contact_branch** | **String** | สำนักงาน/สาขา | [optional] 
**contact_person** | **String** | ชื่อผู้ติดต่อ | [optional] 
**contact_email** | **String** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | [optional] 
**contact_number** | **String** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**contact_zip_code** | **String** | รหัสไปรษณีย์ติดต่อ | [optional] 
**contact_group** | **Integer** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**published_on** | **Date** | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**entity** | **Integer** | แบบฟอร์มเอกสารหัก ณ ที่จ่าย &lt;br&gt; ภงด 3 &#x3D; 1 &lt;br&gt; ภงด 53 &#x3D; 3 &lt;br&gt; ภงด 1ก &#x3D; 1 &lt;br&gt; ภงด 1ก (พิเศษ) &#x3D; 7 &lt;br&gt; ภงด 2 &#x3D; 9 &lt;br&gt; ภงด 2ก &#x3D; 11 &lt;br&gt; ภงด 3ก &#x3D; 13 | [default to 1]
**text_other** | **String** | ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) &lt;br&gt;Example: 2020&lt;/ex&gt; | [optional] 
**withholding_tax_items** | [**Array&lt;WithholidingTaxItem&gt;**](WithholidingTaxItem.md) | รายการหัก ของเอกสารหัก ณ ที่จ่าย | 
**total** | **Float** | จำนวนเงิน (ไม่รวมภาษี) | 
**total_tax_withheld** | **Float** | ภาษีที่หัก | 
**tax_payment** | **Integer** | ผู้จ่ายเงิน &lt;br&gt; 1 &#x3D; ภาษีหัก ณ ที่จ่าย &lt;br&gt; 3 &#x3D; ออกภาษีให้ตลอดไป &lt;br&gt; 5 &#x3D; ออกภาษีให้ครั้งเดียว &lt;br&gt; 7 &#x3D; อื่น ๆ | [optional] [default to 1]
**tax_payment_others** | **String** | ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ  | [optional] 
**provident_fund_number** | **String** | ใบอนุญาตเลขที่ | [optional] 
**provident_fund_amount** | **String** | จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ | [optional] 
**social_security_amount** | **String** | จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม | [optional] 
**remarks** | **String** | หมายเหตุเอกสาร | [optional] 
**internal_notes** | **String** | โน๊ตภายในบริษัท | [optional] 
**show_signature_or_stamp** | **Boolean** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to true]

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::UpdateWithholidingTaxDocument.new(company_name: null,
                                 company_name_en: null,
                                 company_address: null,
                                 company_address_en: null,
                                 company_tax_id: null,
                                 company_branch: null,
                                 company_branch_en: null,
                                 company_phone: null,
                                 company_mobile: null,
                                 company_fax: null,
                                 company_website: null,
                                 contact_code: null,
                                 contact_name: null,
                                 contact_address: null,
                                 contact_tax_id: 1234567890123,
                                 contact_branch: null,
                                 contact_person: null,
                                 contact_email: contact@email.com,
                                 contact_number: 099-999-9999,
                                 contact_zip_code: null,
                                 contact_group: null,
                                 published_on: Wed Jan 01 07:00:00 ICT 2020,
                                 entity: null,
                                 text_other: 2020,
                                 withholding_tax_items: null,
                                 total: null,
                                 total_tax_withheld: null,
                                 tax_payment: null,
                                 tax_payment_others: null,
                                 provident_fund_number: null,
                                 provident_fund_amount: null,
                                 social_security_amount: null,
                                 remarks: null,
                                 internal_notes: null,
                                 show_signature_or_stamp: null)
```


