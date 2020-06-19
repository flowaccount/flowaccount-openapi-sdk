

# Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | เลข id Product |  [optional]
**type** | **Long** | ประเภทสินค้า: 1 &#x3D; บริการ / 3 &#x3D; ไม่นับสต๊อก / 5 &#x3D; นับสต๊อก |  [optional]
**code** | **String** | รหัสสินค้า &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; |  [optional]
**name** | **String** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; |  [optional]
**sellDescription** | **String** | รายละเอียดสินค้า ฝั่งขาย |  [optional]
**sellPrice** | [**BigDecimal**](BigDecimal.md) | ราคาขายสินค้า |  [optional]
**sellPriceWithVat** | [**BigDecimal**](BigDecimal.md) | ราคาขายสินค้า รวมภาษี |  [optional]
**sellVatType** | **Long** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี |  [optional]
**unitName** | **String** | หน่วยสินค้า |  [optional]
**categoryId** | **Long** | id หมวดสินค้า |  [optional]
**categoryName** | **String** | หมวดสินค้า |  [optional]
**barcode** | **String** | บาร์โค้ด |  [optional]
**buyDescription** | **String** | รายละเอียดสินค้า ฝั่งซื้อ |  [optional]
**buyPrice** | [**BigDecimal**](BigDecimal.md) | ราคาซื้อสินค้า |  [optional]
**buyVatType** | **Long** | ภาษีซื้อ: &lt;br&gt; 1 &#x3D; ราคาซื้อรวมภาษี &lt;br&gt; 3 &#x3D; ราคาซื้อไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาซื้อภาษี 0% &lt;br&gt; 7 &#x3D; ราคาซื้อสินค้าได้รับการยกเว้นภาษี |  [optional]
**buyVatTypeWithVat** | [**BigDecimal**](BigDecimal.md) | ราคาซื้อสินค้า รวมภาษี |  [optional]
**inventoryPublishedOn** | [**LocalDate**](LocalDate.md) | วันที่ตั้งต้นสินค้า รูปแบบ yyyy-MM-dd &lt;br&gt; &lt;ex&gt;Example: 2020-01-01&lt;/ex&gt; |  [optional]
**inventoryQuantity** | [**BigDecimal**](BigDecimal.md) | จำนวนยอดตั้งต้นสินค้า |  [optional]
**inventoryPrice** | [**BigDecimal**](BigDecimal.md) | ต้นทุนสินค้าต่อหน่วย |  [optional]
**inventoryTotal** | [**BigDecimal**](BigDecimal.md) | มูลค่ารวมยอดตั้งต้นสินค้า |  [optional]
**averageBuyPrice** | [**BigDecimal**](BigDecimal.md) | ราคาสินค้าซื้อเฉลี่ย |  [optional]
**averageSellPrice** | [**BigDecimal**](BigDecimal.md) | ราคาขายสินค้าเฉลี่ย |  [optional]
**remainingStock** | [**BigDecimal**](BigDecimal.md) | จำนวนสินค้าคงเหลือในสต๊อก |  [optional]
**totalValueInHand** | [**BigDecimal**](BigDecimal.md) | มูลค่าสินค้าคงเหลือในสต๊อก |  [optional]



