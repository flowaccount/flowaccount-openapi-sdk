# InlineDocument

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discountType** | **Int** | รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท) | [optional] [default to 1]
**useInlineDiscount** | **Bool** | inline discount ใช้งานส่วนลด แยกตามรายการสินค้า | [optional] [default to true]
**useInlineVat** | **Bool** | inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า | [optional] 
**exemptAmount** | **Double** | ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม | [optional] [default to 0]
**vatableAmount** | **Double** | ยอดขายที่คิดภาษีมูลค่าเพิ่ม | [optional] [default to 0]
**items** | [InlineProductItem] | รายการสินค้าใช้งานสำหรับเอกสาร Inline | [optional] 
**documentReference** | [UpgradeDocument] | สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา) | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


