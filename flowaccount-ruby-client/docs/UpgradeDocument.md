# OpenapiClient::UpgradeDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**record_id** | **Integer** | id ของเอกสารต้นทาง | 
**reference_document_serial** | **String** | เลขที่เอกสารต้นทาง &lt;br&gt; &lt;ex&gt;Example: QT20200101&lt;/ex&gt; | 
**reference_document_type** | **Integer** | เลขประเภทของเอกสารต้นทาง &lt;br&gt; Quotaions &#x3D; 3 &lt;br&gt; Billing Notes &#x3D; 5 &lt;br&gt; Tax Invoices &#x3D; 7 &lt;br&gt; &lt;ex&gt;Example: 3&lt;/ex&gt; | 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::UpgradeDocument.new(record_id: null,
                                 reference_document_serial: QT20200101,
                                 reference_document_type: 3)
```


