# OpenapiClient::UpdateDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**record_id** | **Integer** | id ของเอกสาร | [optional] [default to 0]
**company_name** | **String** | ชื่อบริษัท | 
**company_name_en** | **String** | ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) | [optional] 
**company_address** | **String** | ที่อยู่บริษัท | [optional] 
**company_address_en** | **String** | ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) | [optional] 
**company_tax_id** | **String** | เลขประจำตัวผู้เสียภาษี บริษัท &lt;br&gt;&lt;ex&gt;Example: 0105558096348&lt;/ex&gt; | [optional] 
**company_branch** | **String** | ชื่อ และ รหัสสาขา &lt;br&gt;&lt;ex&gt;Example: สำนักงานใหญ่ 00000&lt;/ex&gt; | 
**company_branch_en** | **String** | ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) &lt;br&gt;&lt;ex&gt;Example: Head Office 00000&lt;/ex&gt; | [optional] 
**company_phone** | **String** | เบอร์โทรสำนักงาน &lt;br&gt;&lt;ex&gt;Example: 02-999-9999&lt;/ex&gt; | [optional] 
**company_mobile** | **String** | เบอร์โทรศัพท์มือถือ &lt;br&gt;&lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**company_fax** | **String** | เบอร์โทรสาร &lt;br&gt;&lt;ex&gt;Example: 02-999-9999 ต่อ 1&lt;/ex&gt; | [optional] 
**company_website** | **String** | เว็บไซต์ &lt;br&gt;&lt;ex&gt;Example: www.flowaccount.com&lt;/ex&gt; | [optional] 
**contact_code** | **String** | รหัส ลูกค้า/ผู้จำหน่าย | [optional] 
**contact_name** | **String** | ชื่อ ลูกค้า/ผู้จำหน่าย &lt;br&gt; &lt;ex&gt;Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ&lt;/ex&gt; | 
**contact_address** | **String** | ที่อยู่ ลูกค้า/ผู้จำหน่าย | [optional] 
**contact_tax_id** | **String** | เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; | [optional] 
**contact_branch** | **String** | สำนักงาน/สาขา | [optional] 
**contact_person** | **String** | ชื่อผู้ติดต่อ | [optional] 
**contact_email** | **String** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | [optional] 
**contact_number** | **String** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**contact_zip_code** | **String** | รหัสไปรษณีย์ | [optional] 
**contact_group** | **Integer** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**published_on** | **Date** | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**credit_type** | **Integer** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) | [optional] [default to 1]
**credit_days** | **Integer** | จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; | [optional] [default to 0]
**due_date** | **Date** | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**sales_name** | **String** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; | [optional] [default to &#39;อีเมล หรือ ชื่อผู้สร้างเอกสาร&#39;]
**project_name** | **String** | ชื่อโปรเจค | [optional] 
**reference** | **String** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; | [optional] 
**is_vat_inclusive** | **Boolean** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ | [optional] [default to false]
**use_receipt_deduction** | **Boolean** | เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน) | [optional] [default to false]
**sub_total** | **Float** | มูลค่ารวมเป็นเงิน | [optional] [default to 0]
**discount_percentage** | **Integer** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ | [optional] [default to 0]
**discount_amount** | **Float** | มูลค่าส่วนลดเป็นจำนวน (บาท) | [optional] [default to 0]
**total_after_discount** | **Float** | มูลค่าหลังหักส่วนลด | 
**is_vat** | **Boolean** | มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7% | [optional] [default to false]
**vat_amount** | **Float** | ภาษีมูลค่าเพิ่ม | [optional] 
**grand_total** | **Float** | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | 
**document_show_withholding_tax** | **Boolean** | แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร | [optional] [default to false]
**document_withholding_tax_percentage** | **Integer** | ภาษี ณ ที่จ่าย (%) | [optional] [default to 0]
**document_withholding_tax_amount** | **Float** | มูลค่าภาษีหัก ณ ที่จ่าย | [optional] [default to 0]
**document_deduction_type** | **Integer** | ประเภทรายการปรับลด &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) | [optional] [default to 0]
**document_deduction_amount** | **Float** | จำนวนเงินยอดรายการปรับลด &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) | [optional] [default to 0]
**remarks** | **String** | หมายเหตุเอกสาร | [optional] 
**internal_notes** | **String** | โน๊ตภายในบริษัท | [optional] 
**show_signature_or_stamp** | **Boolean** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to true]
**document_structure_type** | **String** |  | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::UpdateDocument.new(record_id: null,
                                 company_name: null,
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
                                 contact_name: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ,
                                 contact_address: null,
                                 contact_tax_id: 1234567890123,
                                 contact_branch: null,
                                 contact_person: null,
                                 contact_email: contact@email.com,
                                 contact_number: 099-999-9999,
                                 contact_zip_code: null,
                                 contact_group: null,
                                 published_on: Wed Jan 01 07:00:00 ICT 2020,
                                 credit_type: null,
                                 credit_days: 30,
                                 due_date: Wed Jan 01 07:00:00 ICT 2020,
                                 sales_name: พนักงาน ขายหน้าร้าน,
                                 project_name: null,
                                 reference: INV2020010001,
                                 is_vat_inclusive: null,
                                 use_receipt_deduction: null,
                                 sub_total: null,
                                 discount_percentage: null,
                                 discount_amount: null,
                                 total_after_discount: null,
                                 is_vat: null,
                                 vat_amount: null,
                                 grand_total: null,
                                 document_show_withholding_tax: null,
                                 document_withholding_tax_percentage: null,
                                 document_withholding_tax_amount: null,
                                 document_deduction_type: null,
                                 document_deduction_amount: null,
                                 remarks: null,
                                 internal_notes: null,
                                 show_signature_or_stamp: null,
                                 document_structure_type: null)
```


