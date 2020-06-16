# OpenapiClient::InlineDocumentResponseAllOfData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**record_id** | **Integer** | id ของเอกสาร | [optional] [default to 0]
**document_id** | **Integer** | id ของเอกสาร | [optional] [default to 0]
**document_serial** | **String** | เลขที่เอกสาร | [optional] 
**contact_code** | **String** | รหัส ลูกค้า/ผู้จำหน่าย | [optional] 
**contact_name** | **String** | ชื่อ ลูกค้า/ผู้จำหน่าย &lt;br&gt; &lt;ex&gt;Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ&lt;/ex&gt; | [optional] 
**contact_address** | **String** | ที่อยู่ ลูกค้า/ผู้จำหน่าย | [optional] 
**contact_tax_id** | **String** | เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; | [optional] 
**contact_branch** | **String** | สำนักงาน/สาขา | [optional] 
**contact_person** | **String** | ชื่อผู้ติดต่อ | [optional] 
**contact_email** | **String** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | [optional] 
**contact_number** | **String** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**contact_zip_code** | **String** | รหัสไปรษณีย์ติดต่อ | [optional] 
**contact_group** | **Integer** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**published_on** | **Date** | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**credit_type** | **Integer** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) | [optional] [default to 1]
**credit_days** | **Integer** | จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; | [optional] [default to 0]
**due_date** | **Date** | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**sales_name** | **String** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; | [optional] [default to &#39;อีเมล หรือ ชื่อผู้สร้างเอกสาร&#39;]
**project_name** | **String** | ชื่อโปรเจค | [optional] 
**reference** | **String** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; | [optional] 
**is_vat_inclusive** | **Boolean** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ | [optional] [default to false]
**discount_type** | **Integer** | รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท) | [optional] [default to 1]
**use_inline_discount** | **Boolean** | inline discount ใช้งานส่วนลด แยกตามรายการสินค้า | [optional] [default to true]
**use_inline_vat** | **Boolean** | inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า | [optional] 
**use_receipt_deduction** | **Boolean** | เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน) | [optional] [default to false]
**sub_total** | **Float** | มูลค่ารวมเป็นเงิน | [optional] [default to 0]
**discount_percentage** | **Integer** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ | [optional] [default to 0]
**discount_amount** | **Float** | มูลค่าส่วนลดเป็นจำนวน (บาท) | [optional] [default to 0]
**total_after_discount** | **Float** | มูลค่าหลังหักส่วนลด | [optional] 
**total_without_vat** | **Float** | มูลค่าไม่รวมภาษีมูลค่าเพิ่ม | [optional] 
**exempt_amount** | **Float** | ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม | [optional] [default to 0]
**vatable_amount** | **Float** | ยอดขายที่คิดภาษีมูลค่าเพิ่ม | [optional] [default to 0]
**is_vat** | **Boolean** | มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7% | [optional] [default to false]
**vat_amount** | **Float** | ภาษีมูลค่าเพิ่ม | [optional] 
**grand_total** | **Float** | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | [optional] 
**document_show_withholding_tax** | **Boolean** | แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร | [optional] [default to false]
**document_withholding_tax_percentage** | **Integer** | ภาษี ณ ที่จ่าย (%) | [optional] [default to 0]
**document_deduction_type** | **Integer** | ประเภทรายการปรับลด &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) | [optional] [default to 0]
**document_deduction_amount** | **Float** | จำนวนเงินยอดรายการปรับลด &lt;br&gt; (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน) | [optional] [default to 0]
**remarks** | **String** | หมายเหตุเอกสาร | [optional] 
**internal_notes** | **String** | โน๊ตภายในบริษัท | [optional] 
**show_signature_or_stamp** | **Boolean** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to true]
**items** | [**Array&lt;InlineProductItem&gt;**](InlineProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Inline Document | [optional] 
**referenced_to_me** | [**Array&lt;ReferencedToMe&gt;**](ReferencedToMe.md) | ข้อมูลเอกสารปลายทางที่อ้างอิง ถึง เอกสารฉบับนี้ | [optional] 
**referenced_by_me** | [**Array&lt;ReferencedByMe&gt;**](ReferencedByMe.md) | เอกสารต้นทางที่อ้างอิง ถึง เอกสารฉบับนี้ | [optional] 
**payments** | [**SimpleDocumentResponseAllOfDataPayments**](SimpleDocumentResponseAllOfDataPayments.md) |  | [optional] 
**company** | [**SimpleDocumentResponseAllOfDataCompany**](SimpleDocumentResponseAllOfDataCompany.md) |  | [optional] 
**status** | **Integer** | เลขสถานะเอกสารฉบับนี้ | [optional] 
**status_string** | **Integer** | ชื่อสถานะเอกสารฉบับนี้ | [optional] 
**document_type** | **Integer** | เลขประเภทเอกสารฉบับนี้ | [optional] 
**allow_delete** | **Boolean** | สามารถลบเอกสาร :&lt;br&gt; true &#x3D; ลบได้ &lt;br&gt; false &#x3D; ลบไม่ได้ | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::InlineDocumentResponseAllOfData.new(record_id: null,
                                 document_id: null,
                                 document_serial: null,
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
                                 discount_type: null,
                                 use_inline_discount: null,
                                 use_inline_vat: null,
                                 use_receipt_deduction: null,
                                 sub_total: null,
                                 discount_percentage: null,
                                 discount_amount: null,
                                 total_after_discount: null,
                                 total_without_vat: null,
                                 exempt_amount: null,
                                 vatable_amount: null,
                                 is_vat: null,
                                 vat_amount: null,
                                 grand_total: null,
                                 document_show_withholding_tax: null,
                                 document_withholding_tax_percentage: null,
                                 document_deduction_type: null,
                                 document_deduction_amount: null,
                                 remarks: null,
                                 internal_notes: null,
                                 show_signature_or_stamp: null,
                                 items: null,
                                 referenced_to_me: null,
                                 referenced_by_me: null,
                                 payments: null,
                                 company: null,
                                 status: null,
                                 status_string: null,
                                 document_type: null,
                                 allow_delete: null)
```


