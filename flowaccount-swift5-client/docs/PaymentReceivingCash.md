# PaymentReceivingCash

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentStructureType** | **String** | รับชำระเงิน ด้วยเงินสด | 
**documentId** | **Int64** | id เอกสาร | 
**paymentMethod** | **Int64** | ประเภทการเก็บเงิน &lt;br&gt; 1 &#x3D; เงินสด | [default to 1]
**paymentDate** | **Date** | วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**collected** | **Double** | จำนวนเงินยอดรับสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | [default to 0]
**paymentDeductionType** | **Int64** | ประเภทรายการปรับลด &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; | [optional] [default to 0]
**paymentDeductionAmount** | **Double** | จำนวนเงินยอดรายการปรับลด &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | [optional] [default to 0]
**withheldPercentage** | **Int64** | เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt; | [optional] [default to 0]
**withheldAmount** | **Double** | จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | [optional] [default to 0]
**paymentRemarks** | **String** | หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน | [optional] 
**remainingCollectedType** | **Int64** | สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร  | [optional] [default to 0]
**remainingCollected** | **Double** | จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | [optional] [default to 0]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


