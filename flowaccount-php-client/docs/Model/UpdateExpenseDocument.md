# # UpdateExpenseDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **string** | ชื่อบริษัท | 
**company_name_en** | **string** | ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) | [optional] 
**company_address** | **string** | ที่อยู่บริษัท | 
**company_address_en** | **string** | ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) | [optional] 
**company_tax_id** | **string** | เลขประจำตัวผู้เสียภาษี บริษัท &lt;br&gt;&lt;ex&gt;Example: 0105558096348&lt;/ex&gt; | [optional] 
**company_branch** | **string** | ชื่อ และ รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: สำนักงานใหญ่ 00000&lt;/ex&gt; | 
**company_branch_en** | **string** | ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) &lt;br&gt;&lt;ex&gt;Example: Head Office 00000&lt;/ex&gt; | [optional] 
**company_phone** | **string** | เบอร์โทรสำนักงาน &lt;br&gt;&lt;ex&gt;Example: 02-999-9999&lt;/ex&gt; | [optional] 
**company_mobile** | **string** | เบอร์โทรศัพท์มือถือ &lt;br&gt;&lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**company_fax** | **string** | เบอร์โทรสาร &lt;br&gt;&lt;ex&gt;Example: 02-999-9999 ต่อ 1&lt;/ex&gt; | [optional] 
**company_website** | **string** | เว็บไซต์ &lt;br&gt;&lt;ex&gt;Example: www.flowaccount.com&lt;/ex&gt; | [optional] 
**contact_code** | **string** | รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contact_name** | **string** | ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | 
**contact_address** | **string** | ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contact_tax_id** | **string** | เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; | [optional] 
**contact_branch** | **string** | สำนักงาน/สาขา | [optional] 
**contact_person** | **string** | ชื่อผู้ติดต่อ | [optional] 
**contact_email** | **string** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: supplier@email.com&lt;/ex&gt; | [optional] 
**contact_number** | **string** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**contact_zip_code** | **string** | รหัสไปรษณีย์ติดต่อ | [optional] 
**contact_group** | **int** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**published_on** | [**\DateTime**](\DateTime.md) | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**credit_type** | **int** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) | [optional] [default to 1]
**credit_days** | **int** | จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; | [optional] [default to 0]
**due_date** | [**\DateTime**](\DateTime.md) | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**sales_name** | **string** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; | [optional] [default to 'อีเมล หรือ ชื่อผู้สร้างเอกสาร']
**project_name** | **string** | ชื่อโปรเจค | [optional] 
**reference** | **string** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; | [optional] 
**is_vat_inclusive** | **bool** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ | [optional] [default to false]
**sub_total** | **float** | มูลค่ารวมเป็นเงิน | [default to 0]
**discount_percentage** | **int** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ | [optional] [default to 0]
**discount_amount** | **float** | มูลค่าส่วนลดเป็นจำนวน (บาท) | [optional] [default to 0]
**total_after_discount** | **float** | มูลค่าหลังหักส่วนลด | 
**is_vat** | **bool** | มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7% | [optional] [default to false]
**vat_amount** | **float** | ภาษีมูลค่าเพิ่ม | [optional] 
**grand_total** | **float** | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | 
**remarks** | **string** | หมายเหตุเอกสาร | [optional] 
**internal_notes** | **string** | โน๊ตภายในบริษัท | [optional] 
**show_signature_or_stamp** | **bool** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to true]
**expense_structure_type** | **string** |  | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


