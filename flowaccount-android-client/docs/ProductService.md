

# ProductService

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productStructureType** | **String** | สร้างสินค้าประเภท บริการ |  [optional]
**type** | **Long** | ประเภทสินค้า: &lt;br&gt;1 &#x3D; บริการ &lt;br&gt; 3 &#x3D; ไม่นับสต๊อก &lt;br&gt; 5 &#x3D; นับสต๊อก | 
**code** | **String** | รหัสสินค้า / SKU &lt;br&gt; &lt;ex&gt;Example: P001&lt;/ex&gt; |  [optional]
**name** | **String** | ชื่อสินค้า &lt;br&gt; &lt;ex&gt;Example: Product&lt;/ex&gt; | 
**sellDescription** | **String** | รายละเอียดสินค้า ฝั่งขาย |  [optional]
**sellPrice** | [**BigDecimal**](BigDecimal.md) | ราคาขายสินค้า |  [optional]
**sellVatType** | **Long** | ภาษีขาย: &lt;br&gt; 1 &#x3D; ราคาขายรวมภาษี &lt;br&gt; 3 &#x3D; ราคาขายไม่รวมภาษี &lt;br&gt; 5 &#x3D; ราคาขายภาษี 0% &lt;br&gt; 7 &#x3D; ราคาขายสินค้าได้รับการยกเว้นภาษี |  [optional]
**unitName** | **String** | หน่วยสินค้า |  [optional]
**categoryName** | **String** | หมวดสินค้า |  [optional]
**barcode** | **String** | บาร์โค้ด |  [optional]




