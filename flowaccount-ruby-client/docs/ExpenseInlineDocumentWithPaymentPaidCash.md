# OpenapiClient::ExpenseInlineDocumentWithPaymentPaidCash

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_code** | **String** | รหัส ลูกค้า/ผู้จำหน่าย | [optional] 
**contact_name** | **String** | ชื่อ ลูกค้า/ผู้จำหน่าย &lt;br&gt; &lt;ex&gt;Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ&lt;/ex&gt; | 
**contact_address** | **String** | ที่อยู่ ลูกค้า/ผู้จำหน่าย | [optional] 
**contact_tax_id** | **String** | เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; | [optional] 
**contact_branch** | **String** | สำนักงาน/สาขา | [optional] 
**contact_person** | **String** | ชื่อผู้ติดต่อ | [optional] 
**contact_email** | **String** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | [optional] 
**contact_number** | **String** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**contact_zip_code** | **String** | รหัสไปรษณีย์ติดต่อ | [optional] 
**contact_group** | **Integer** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**published_on** | **Date** | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**credit_type** | **Integer** | รูปแบบเครดิต &lt;br&gt; 1 &#x3D; เครดิต (วัน) &lt;br&gt; 3 &#x3D; เงินสด  &lt;br&gt; 5 &#x3D; เครดิต (ไม่แสดงวันที่ครบกำหนด) | [optional] [default to 1]
**credit_days** | **Integer** | จำนวนวันที่ให้เครดิต &lt;br&gt; &lt;ex&gt;Example: 30&lt;/ex&gt; | [optional] [default to 0]
**due_date** | **Date** | วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**sales_name** | **String** | ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย &lt;br&gt; &lt;ex&gt;Example: sale@email.com or Mr.Sale Shop&lt;/ex&gt; | [optional] [default to &#39;อีเมล หรือ ชื่อผู้สร้างเอกสาร&#39;]
**project_name** | **String** | ชื่อโปรเจค | [optional] 
**reference** | **String** | เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง &lt;br&gt; &lt;ex&gt;Example: INV2020010001&lt;/ex&gt; | [optional] 
**is_vat_inclusive** | **Boolean** | มูลค่าเอกสารรวมภาษีแล้วหรือไม่ | [optional] [default to false]
**items** | [**Array&lt;ExpenseInlineProductItem&gt;**](ExpenseInlineProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense | [optional] 
**sub_total** | **Float** | มูลค่ารวมเป็นเงิน | [optional] [default to 0]
**discount_percentage** | **Integer** | มูลค่าส่วนลดเป็นเปอร์เซ็นต์ | [optional] [default to 0]
**discount_amount** | **Float** | มูลค่าส่วนลดเป็นจำนวน (บาท) | [optional] [default to 0]
**total_after_discount** | **Float** | มูลค่าหลังหักส่วนลด | 
**is_vat** | **Boolean** | มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7% | [optional] [default to false]
**vat_amount** | **Float** | ภาษีมูลค่าเพิ่ม | [optional] 
**grand_total** | **Float** | จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว) | 
**discount_type** | **Integer** | รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท) | [optional] [default to 1]
**use_inline_discount** | **Boolean** | inline discount ใช้งานส่วนลด แยกตามรายการสินค้า | [optional] [default to true]
**use_inline_vat** | **Boolean** | inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า | [optional] 
**exempt_amount** | **Float** | ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม | [optional] [default to 0]
**remarks** | **String** | หมายเหตุเอกสาร | [optional] 
**internal_notes** | **String** | โน๊ตภายในบริษัท | [optional] 
**show_signature_or_stamp** | **Boolean** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to true]
**expense_payment_structure_type** | **String** | สร้างเอกสารแบบ Simple พร้อมชำระเงิน ด้วยเงินสด | 
**payment_method** | **Integer** | ประเภทการชำระเงิน &lt;br&gt; 1 &#x3D; เงินสด | [default to 1]
**payment_date** | **Date** | วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**collected** | **Float** | จำนวนเงินยอดจ่ายสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | [default to 0]
**withheld_percentage** | **Integer** | เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt; | [optional] [default to 0]
**withheld_amount** | **Float** | จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | [optional] [default to 0]
**payment_remarks** | **String** | หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน | [optional] 
**remaining_collected_type** | **Integer** | สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร  | [optional] [default to 0]
**remaining_collected** | **Float** | จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | [optional] [default to 0]

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::ExpenseInlineDocumentWithPaymentPaidCash.new(contact_code: null,
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
                                 items: null,
                                 sub_total: null,
                                 discount_percentage: null,
                                 discount_amount: null,
                                 total_after_discount: null,
                                 is_vat: null,
                                 vat_amount: null,
                                 grand_total: null,
                                 discount_type: null,
                                 use_inline_discount: null,
                                 use_inline_vat: null,
                                 exempt_amount: null,
                                 remarks: null,
                                 internal_notes: null,
                                 show_signature_or_stamp: null,
                                 expense_payment_structure_type: null,
                                 payment_method: null,
                                 payment_date: Wed Jan 01 07:00:00 ICT 2020,
                                 collected: null,
                                 withheld_percentage: null,
                                 withheld_amount: null,
                                 payment_remarks: null,
                                 remaining_collected_type: null,
                                 remaining_collected: null)
```


