# OpenapiClient::SimpleDocumentResponseAllOfDataCompany

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **String** | ชื่อบริษัท | [optional] 
**company_name_en** | **String** | ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) | [optional] 
**company_address** | **String** | ที่อยู่บริษัท | [optional] 
**company_address_en** | **String** | ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) | [optional] 
**company_tax_id** | **String** | เลขประจำตัวผู้เสียภาษี บริษัท &lt;br&gt;&lt;ex&gt;Example: 0105558096348&lt;/ex&gt; | [optional] 
**company_branch** | **String** | ชื่อ และ รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: สำนักงานใหญ่ 00000&lt;/ex&gt; | [optional] 
**company_branch_en** | **String** | ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) &lt;br&gt;&lt;ex&gt;Example: Head Office 00000&lt;/ex&gt; | [optional] 
**company_phone** | **String** | เบอร์โทรสำนักงาน &lt;br&gt;&lt;ex&gt;Example: 02-999-9999&lt;/ex&gt; | [optional] 
**company_mobile** | **String** | เบอร์โทรศัพท์มือถือ &lt;br&gt;&lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**company_fax** | **String** | เบอร์โทรสาร &lt;br&gt;&lt;ex&gt;Example: 02-999-9999 ต่อ 1&lt;/ex&gt; | [optional] 
**company_website** | **String** | เว็บไซต์ &lt;br&gt;&lt;ex&gt;Example: www.flowaccount.com&lt;/ex&gt; | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::SimpleDocumentResponseAllOfDataCompany.new(company_name: null,
                                 company_name_en: null,
                                 company_address: null,
                                 company_address_en: null,
                                 company_tax_id: null,
                                 company_branch: null,
                                 company_branch_en: null,
                                 company_phone: null,
                                 company_mobile: null,
                                 company_fax: null,
                                 company_website: null)
```


