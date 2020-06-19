
# PaymentReceivingCash

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentStructureType** | **kotlin.String** | รับชำระเงิน ด้วยเงินสด | 
**documentId** | **kotlin.Long** | id เอกสาร | 
**paymentMethod** | **kotlin.Long** | ประเภทการเก็บเงิน &lt;br&gt; 1 &#x3D; เงินสด | 
**paymentDate** | [**java.time.LocalDate**](java.time.LocalDate.md) | วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; | 
**collected** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนเงินยอดรับสุทธิ &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; | 
**paymentDeductionType** | **kotlin.Long** | ประเภทรายการปรับลด &lt;br&gt; 1 &#x3D; ส่วนลดพิเศษ &lt;br&gt; 3 &#x3D; ค่านายหน้าและส่วนแบ่งการขาย &lt;br&gt; 5 &#x3D; ค่าดำเนินการ &lt;br&gt; 7 &#x3D; ปัดเศษ &lt;br&gt; |  [optional]
**paymentDeductionAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวนเงินยอดรายการปรับลด &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; |  [optional]
**withheldPercentage** | **kotlin.Long** | เปอร์เซ็น หัก ณ ที่จ่าย &lt;br&gt; 0.5 &#x3D; 0.5% &lt;br&gt; 0.75 &#x3D; 0.75% &lt;br&gt; 1 &#x3D; 1% &lt;br&gt; 1.5 &#x3D; 1.5% &lt;br&gt; 2 &#x3D; 2% &lt;br&gt; 3 &#x3D; 3% &lt;br&gt; 5 &#x3D; 5% &lt;br&gt; 10 &#x3D; 10% &lt;br&gt; 15 &#x3D; 15% &lt;br&gt; -1 &#x3D; จำนวนเงิน &lt;red&gt;(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)&lt;/red&gt; |  [optional]
**withheldAmount** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวน ยอดหัก ณ ที่จ่าย &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; |  [optional]
**paymentRemarks** | **kotlin.String** | หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน |  [optional]
**remainingCollectedType** | **kotlin.Long** | สาเหตุเงินขาด เงินเกิน &lt;br&gt; 51 &#x3D; เงินขาดหรือเงินกิน &lt;br&gt; 55 &#x3D; ค่าธรรมเนียมธนาคาร  |  [optional]
**remainingCollected** | [**java.math.BigDecimal**](java.math.BigDecimal.md) | จำนวน ยอดเงินขาด หรือ เงินเกิน &lt;br&gt; &lt;ex&gt; Example : 100.00 &lt;/ex&gt; |  [optional]



