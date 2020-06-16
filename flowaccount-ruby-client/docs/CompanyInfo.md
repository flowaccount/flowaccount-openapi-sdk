# OpenapiClient::CompanyInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_type** | **String** | ประเภทธุรกิจ &lt;br&gt; 10 &#x3D; บริษัท - จดภาษีมูลค่าเพิ่มแล้ว &lt;br&gt; 20 &#x3D; บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 30 &#x3D; บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 40 &#x3D; บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 50 &#x3D; ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว &lt;br&gt; 60 &#x3D; ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม | [optional] [default to &#39;10&#39;]
**compnay_name** | **String** | ชื่อบริษัท | 
**company_name_en** | **String** | ชื่อบริษัท ภาษาอังกฤษ | [optional] 
**company_address** | **String** | ที่อยู่บริษัท | [optional] 
**company_address_en** | **String** | ที่อยู่บริษัท ภาษาอังกฤษ | [optional] 
**company_zip_code** | **String** | รหัสไปรษณีย์ บริษัท &lt;br&gt;&lt;ex&gt;Example: 10150&lt;/ex&gt; | [optional] 
**company_tax_id** | **String** | เลขประจำตัวผู้เสียภาษี บริษัท &lt;br&gt;&lt;ex&gt;Example: 0105558096348&lt;/ex&gt; | [optional] 
**company_branch** | **String** | ชื่อ และ รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: สำนักงานใหญ่&lt;/ex&gt; | [optional] [default to &#39;สำนักงานใหญ่&#39;]
**company_branch_en** | **String** | ชื่อ และ รหัสสาขา ภาษาอังกฤษ &lt;br&gt;&lt;ex&gt;Example: Head Office&lt;/ex&gt; | [optional] 
**company_branch_code** | **String** | รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: 00000&lt;/ex&gt; | [optional] 
**company_phone** | **String** | เบอร์โทรสำนักงาน &lt;br&gt;&lt;ex&gt;Example: 02-999-9999&lt;/ex&gt; | [optional] 
**company_mobile** | **String** | เบอร์โทรศัพท์มือถือ &lt;br&gt;&lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**company_fax** | **String** | เบอร์โทรสาร &lt;br&gt;&lt;ex&gt;Example: 02-999-9999 ต่อ 1&lt;/ex&gt; | [optional] 
**company_website** | **String** | เว็บไซต์ &lt;br&gt;&lt;ex&gt;Example: www.flowaccount.com&lt;/ex&gt; | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::CompanyInfo.new(company_type: null,
                                 compnay_name: null,
                                 company_name_en: null,
                                 company_address: null,
                                 company_address_en: null,
                                 company_zip_code: null,
                                 company_tax_id: null,
                                 company_branch: null,
                                 company_branch_en: null,
                                 company_branch_code: null,
                                 company_phone: null,
                                 company_mobile: null,
                                 company_fax: null,
                                 company_website: null)
```


