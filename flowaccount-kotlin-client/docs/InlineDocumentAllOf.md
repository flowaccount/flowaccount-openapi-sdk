
# InlineDocumentAllOf

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discountType** | **kotlin.Int** | รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า &lt;br&gt; สามารถเลือกรูปแบบส่วนลดได้ &lt;br&gt; 1 &#x3D;  เปอร์เซ็นต์ &lt;br&gt; 3 &#x3D; จำนวน (บาท) |  [optional]
**useInlineDiscount** | **kotlin.Boolean** | inline discount ใช้งานส่วนลด แยกตามรายการสินค้า |  [optional]
**useInlineVat** | **kotlin.Boolean** | inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า |  [optional]
**exemptAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม |  [optional]
**vatableAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | ยอดขายที่คิดภาษีมูลค่าเพิ่ม |  [optional]
**items** | [**kotlin.Array&lt;InlineProductItem&gt;**](InlineProductItem.md) | รายการสินค้าใช้งานสำหรับเอกสาร Inline |  [optional]
**documentReference** | [**kotlin.Array&lt;UpgradeDocument&gt;**](UpgradeDocument.md) | สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา) |  [optional]



