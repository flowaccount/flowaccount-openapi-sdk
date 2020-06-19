# # WithholidingTaxDocumentResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**record_id** | **string** | เลข Id เอกสารใบหัก ณ ที่จ่าย | [optional] 
**document_id** | **string** | เลข Id เอกสารใบหัก ณ ที่จ่าย | [optional] 
**document_serial** | **string** | เลขที่เอกสารใบหัก ณ ที่จ่าย | [optional] 
**contact_code** | **string** | รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contact_name** | **string** | ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contact_address** | **string** | ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า | [optional] 
**contact_tax_id** | **string** | เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า &lt;br&gt; (ถ้ามีจำเป็นต้องครบ 13 หลัก) &lt;br&gt; &lt;ex&gt;Example: 1234567890123 &lt;/ex&gt; | [optional] 
**contact_branch** | **string** | สำนักงาน/สาขา | [optional] 
**contact_person** | **string** | ชื่อผู้ติดต่อ | [optional] 
**contact_email** | **string** | อีเมลผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: contact@email.com&lt;/ex&gt; | [optional] 
**contact_number** | **string** | เบอร์มือถือผู้ติดต่อ &lt;br&gt; &lt;ex&gt;Example: 099-999-9999&lt;/ex&gt; | [optional] 
**contact_zip_code** | **string** | รหัสไปรษณีย์ติดต่อ | [optional] 
**contact_group** | **int** | ประผู้ติดต่อ &lt;br&gt; 1 &#x3D; บุคคลธรรมดา &lt;br&gt; 3 &#x3D; นิติบุคคล | [optional] [default to 1]
**published_on** | [**\DateTime**](\DateTime.md) | วันที่เอกสาร รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | [optional] 
**entity** | **int** | แบบฟอร์มเอกสารหัก ณ ที่จ่าย &lt;br&gt; ภงด 3 &#x3D; 1 &lt;br&gt; ภงด 53 &#x3D; 3 &lt;br&gt; ภงด 1ก &#x3D; 1 &lt;br&gt; ภงด 1ก (พิเศษ) &#x3D; 7 &lt;br&gt; ภงด 2 &#x3D; 9 &lt;br&gt; ภงด 2ก &#x3D; 11 &lt;br&gt; ภงด 3ก &#x3D; 13 | [optional] [default to 1]
**text_other** | **string** | ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) Example: 2020 | [optional] 
**withholding_tax_items** | [**\OpenAPI\Client\Model\WithholidingTaxItem[]**](WithholidingTaxItem.md) | รายการหัก ของเอกสารหัก ณ ที่จ่าย | [optional] 
**total** | **float** | จำนวนเงิน (ไม่รวมภาษี) | [optional] 
**total_tax_withheld** | **float** | ภาษีที่หัก | [optional] 
**tax_payment** | **int** | ผู้จ่ายเงิน &lt;br&gt; 1 &#x3D; ภาษีหัก ณ ที่จ่าย &lt;br&gt; 3 &#x3D; ออกภาษีให้ตลอดไป &lt;br&gt; 5 &#x3D; ออกภาษีให้ครั้งเดียว &lt;br&gt; 7 &#x3D; อื่น ๆ | [optional] [default to 1]
**tax_payment_others** | **string** | ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ | [optional] 
**provident_fund_number** | **string** | ใบอนุญาตเลขที่ | [optional] 
**provident_fund_amount** | **string** | จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ | [optional] 
**social_security_amount** | **string** | จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม | [optional] 
**remarks** | **string** | หมายเหตุเอกสาร | [optional] 
**internal_notes** | **string** | โน๊ตภายในบริษัท | [optional] 
**show_signature_or_stamp** | **bool** | ลายเซ็นอิเล็กทรอนิกส์และตรายาง | [optional] [default to true]
**company** | [**\OpenAPI\Client\Model\SimpleDocumentResponseAllOfDataCompany**](SimpleDocumentResponseAllOfDataCompany.md) |  | [optional] 
**status** | **int** | เลขสถานะเอกสารฉบับนี้ | [optional] 
**status_string** | **int** | ชื่อสถานะเอกสารฉบับนี้ | [optional] 
**document_type** | **int** | เลขประเภทเอกสารฉบับนี้ | [optional] 
**allow_delete** | **bool** | สามารถลบเอกสาร :&lt;br&gt; true &#x3D; ลบได้ &lt;br&gt; false &#x3D; ลบไม่ได้ | [optional] 

[[Back to Model list]](../../README.md#documentation-for-models) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to README]](../../README.md)


