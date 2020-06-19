# CompanyInfoResponseData

ข้อมูลบริษัทเรา
## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_id** | **int** | รหัสบริษัท | [optional] [default to 0]
**company_type** | **str** | ประเภทธุรกิจ &lt;br&gt; 10 &#x3D; บริษัท - จดภาษีมูลค่าเพิ่มแล้ว &lt;br&gt; 20 &#x3D; บริษัท - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 30 &#x3D; บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 40 &#x3D; บุคคลธรรมดา/ฟรีแลนซ์ - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม &lt;br&gt; 50 &#x3D; ห้างหุ้นส่วนจำกัด - จดภาษีมูลค่าเพิ่มแล้ว &lt;br&gt; 60 &#x3D; ห้างหุ้นส่วนจำกัด - ยังไม่เข้าระบบภาษีมูลค่าเพิ่ม | [optional] [default to '10']
**compnay_name** | **str** | ชื่อบริษัท | [optional] 
**company_name_en** | **str** | ชื่อบริษัท ภาษาอังกฤษ | [optional] 
**company_address** | **str** | ที่อยู่บริษัท | [optional] 
**company_address_en** | **str** | ที่อยู่บริษัท ภาษาอังกฤษ | [optional] 
**company_zip_code** | **str** | รหัสไปรษณีย์ บริษัท &lt;br&gt;&lt;ex&gt;Example: 10150&lt;/ex&gt; | [optional] 
**company_tax_id** | **str** | เลขประจำตัวผู้เสียภาษี บริษัท &lt;br&gt;&lt;ex&gt;Example: 0105558096348&lt;/ex&gt; | [optional] 
**company_branch** | **str** | ชื่อ และ รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: สำนักงานใหญ่&lt;/ex&gt; | [optional] [default to 'สำนักงานใหญ่']
**company_branch_en** | **str** | ชื่อ และ รหัสสาขา ภาษาอังกฤษ &lt;br&gt;&lt;ex&gt;Example: Head Office&lt;/ex&gt; | [optional] 
**company_branch_code** | **str** | รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: 00000&lt;/ex&gt; | [optional] 
**company_phone** | **str** | เบอร์โทรสำนักงาน &lt;br&gt;&lt;ex&gt;Example: 02-999-9999&lt;/ex&gt; | [optional] 
**company_mobile** | **str** | เบอร์โทรศัพท์มือถือ &lt;br&gt;&lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**company_fax** | **str** | เบอร์โทรสาร &lt;br&gt;&lt;ex&gt;Example: 02-999-9999 ต่อ 1&lt;/ex&gt; | [optional] 
**company_website** | **str** | เว็บไซต์ &lt;br&gt;&lt;ex&gt;Example: www.flowaccount.com&lt;/ex&gt; | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


