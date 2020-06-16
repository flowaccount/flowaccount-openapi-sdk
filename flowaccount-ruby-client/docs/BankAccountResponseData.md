# OpenapiClient::BankAccountResponseData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_account_id** | **Integer** | เลข id บัญชีธนาคาร | [optional] 
**bank_account_number** | **String** | เลขบัญชี &lt;br&gt; &lt;ex&gt;Example: 0048620000 &lt;/ex&gt; | [optional] 
**bank_account_name** | **String** | ชื่อบัญชี &lt;br&gt; &lt;ex&gt;Example: บัญชีใช้รับเงิน&lt;/ex&gt; | [optional] 
**bank_account_type** | **Integer** | ประเภทบัญชีธนาคาร &lt;br&gt; 1 &#x3D; บัญชีออมทรัพย์  &lt;br&gt; 3 &#x3D; บัญชีกระรายวัน &lt;br&gt; 7  &#x3D; บัญชีฝากประจำ | [optional] 
**bank_branch** | **String** | ชื่อสาขาธนาคาร | [optional] 
**bank_id** | **Integer** | เลข id ธนาคาร | [optional] 
**bank_name** | **String** | ชื่อธนาคาร | [optional] 

## Code Sample

```ruby
require 'OpenapiClient'

instance = OpenapiClient::BankAccountResponseData.new(bank_account_id: null,
                                 bank_account_number: null,
                                 bank_account_name: null,
                                 bank_account_type: null,
                                 bank_branch: null,
                                 bank_id: null,
                                 bank_name: null)
```


