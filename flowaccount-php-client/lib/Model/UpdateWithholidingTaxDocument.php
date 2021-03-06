<?php
/**
 * UpdateWithholidingTaxDocument
 *
 * PHP version 5
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * FlowAccount Open API
 *
 * # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer_support@flowaccount.com
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 4.3.1
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model;

use \ArrayAccess;
use \OpenAPI\Client\ObjectSerializer;

/**
 * UpdateWithholidingTaxDocument Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class UpdateWithholidingTaxDocument implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'UpdateWithholidingTaxDocument';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'company_name' => 'string',
        'company_name_en' => 'string',
        'company_address' => 'string',
        'company_address_en' => 'string',
        'company_tax_id' => 'string',
        'company_branch' => 'string',
        'company_branch_en' => 'string',
        'company_phone' => 'string',
        'company_mobile' => 'string',
        'company_fax' => 'string',
        'company_website' => 'string',
        'contact_code' => 'string',
        'contact_name' => 'string',
        'contact_address' => 'string',
        'contact_tax_id' => 'string',
        'contact_branch' => 'string',
        'contact_person' => 'string',
        'contact_email' => 'string',
        'contact_number' => 'string',
        'contact_zip_code' => 'string',
        'contact_group' => 'int',
        'published_on' => '\DateTime',
        'entity' => 'int',
        'text_other' => 'string',
        'withholding_tax_items' => '\OpenAPI\Client\Model\WithholidingTaxItem[]',
        'total' => 'float',
        'total_tax_withheld' => 'float',
        'tax_payment' => 'int',
        'tax_payment_others' => 'string',
        'provident_fund_number' => 'string',
        'provident_fund_amount' => 'string',
        'social_security_amount' => 'string',
        'remarks' => 'string',
        'internal_notes' => 'string',
        'show_signature_or_stamp' => 'bool'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPIFormats = [
        'company_name' => null,
        'company_name_en' => null,
        'company_address' => null,
        'company_address_en' => null,
        'company_tax_id' => null,
        'company_branch' => null,
        'company_branch_en' => null,
        'company_phone' => null,
        'company_mobile' => null,
        'company_fax' => null,
        'company_website' => null,
        'contact_code' => null,
        'contact_name' => null,
        'contact_address' => null,
        'contact_tax_id' => null,
        'contact_branch' => null,
        'contact_person' => null,
        'contact_email' => null,
        'contact_number' => null,
        'contact_zip_code' => null,
        'contact_group' => null,
        'published_on' => 'date',
        'entity' => null,
        'text_other' => null,
        'withholding_tax_items' => null,
        'total' => 'decimal',
        'total_tax_withheld' => 'decimal',
        'tax_payment' => null,
        'tax_payment_others' => null,
        'provident_fund_number' => null,
        'provident_fund_amount' => null,
        'social_security_amount' => null,
        'remarks' => null,
        'internal_notes' => null,
        'show_signature_or_stamp' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'company_name' => 'companyName',
        'company_name_en' => 'companyNameEn',
        'company_address' => 'companyAddress',
        'company_address_en' => 'companyAddressEn',
        'company_tax_id' => 'companyTaxId',
        'company_branch' => 'companyBranch',
        'company_branch_en' => 'companyBranchEn',
        'company_phone' => 'companyPhone',
        'company_mobile' => 'companyMobile',
        'company_fax' => 'companyFax',
        'company_website' => 'companyWebsite',
        'contact_code' => 'contactCode',
        'contact_name' => 'contactName',
        'contact_address' => 'contactAddress',
        'contact_tax_id' => 'contactTaxId',
        'contact_branch' => 'contactBranch',
        'contact_person' => 'contactPerson',
        'contact_email' => 'contactEmail',
        'contact_number' => 'contactNumber',
        'contact_zip_code' => 'contactZipCode',
        'contact_group' => 'contactGroup',
        'published_on' => 'publishedOn',
        'entity' => 'entity',
        'text_other' => 'textOther',
        'withholding_tax_items' => 'withholdingTaxItems',
        'total' => 'total',
        'total_tax_withheld' => 'totalTaxWithheld',
        'tax_payment' => 'taxPayment',
        'tax_payment_others' => 'taxPaymentOthers',
        'provident_fund_number' => 'providentFundNumber',
        'provident_fund_amount' => 'providentFundAmount',
        'social_security_amount' => 'socialSecurityAmount',
        'remarks' => 'remarks',
        'internal_notes' => 'internalNotes',
        'show_signature_or_stamp' => 'showSignatureOrStamp'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'company_name' => 'setCompanyName',
        'company_name_en' => 'setCompanyNameEn',
        'company_address' => 'setCompanyAddress',
        'company_address_en' => 'setCompanyAddressEn',
        'company_tax_id' => 'setCompanyTaxId',
        'company_branch' => 'setCompanyBranch',
        'company_branch_en' => 'setCompanyBranchEn',
        'company_phone' => 'setCompanyPhone',
        'company_mobile' => 'setCompanyMobile',
        'company_fax' => 'setCompanyFax',
        'company_website' => 'setCompanyWebsite',
        'contact_code' => 'setContactCode',
        'contact_name' => 'setContactName',
        'contact_address' => 'setContactAddress',
        'contact_tax_id' => 'setContactTaxId',
        'contact_branch' => 'setContactBranch',
        'contact_person' => 'setContactPerson',
        'contact_email' => 'setContactEmail',
        'contact_number' => 'setContactNumber',
        'contact_zip_code' => 'setContactZipCode',
        'contact_group' => 'setContactGroup',
        'published_on' => 'setPublishedOn',
        'entity' => 'setEntity',
        'text_other' => 'setTextOther',
        'withholding_tax_items' => 'setWithholdingTaxItems',
        'total' => 'setTotal',
        'total_tax_withheld' => 'setTotalTaxWithheld',
        'tax_payment' => 'setTaxPayment',
        'tax_payment_others' => 'setTaxPaymentOthers',
        'provident_fund_number' => 'setProvidentFundNumber',
        'provident_fund_amount' => 'setProvidentFundAmount',
        'social_security_amount' => 'setSocialSecurityAmount',
        'remarks' => 'setRemarks',
        'internal_notes' => 'setInternalNotes',
        'show_signature_or_stamp' => 'setShowSignatureOrStamp'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'company_name' => 'getCompanyName',
        'company_name_en' => 'getCompanyNameEn',
        'company_address' => 'getCompanyAddress',
        'company_address_en' => 'getCompanyAddressEn',
        'company_tax_id' => 'getCompanyTaxId',
        'company_branch' => 'getCompanyBranch',
        'company_branch_en' => 'getCompanyBranchEn',
        'company_phone' => 'getCompanyPhone',
        'company_mobile' => 'getCompanyMobile',
        'company_fax' => 'getCompanyFax',
        'company_website' => 'getCompanyWebsite',
        'contact_code' => 'getContactCode',
        'contact_name' => 'getContactName',
        'contact_address' => 'getContactAddress',
        'contact_tax_id' => 'getContactTaxId',
        'contact_branch' => 'getContactBranch',
        'contact_person' => 'getContactPerson',
        'contact_email' => 'getContactEmail',
        'contact_number' => 'getContactNumber',
        'contact_zip_code' => 'getContactZipCode',
        'contact_group' => 'getContactGroup',
        'published_on' => 'getPublishedOn',
        'entity' => 'getEntity',
        'text_other' => 'getTextOther',
        'withholding_tax_items' => 'getWithholdingTaxItems',
        'total' => 'getTotal',
        'total_tax_withheld' => 'getTotalTaxWithheld',
        'tax_payment' => 'getTaxPayment',
        'tax_payment_others' => 'getTaxPaymentOthers',
        'provident_fund_number' => 'getProvidentFundNumber',
        'provident_fund_amount' => 'getProvidentFundAmount',
        'social_security_amount' => 'getSocialSecurityAmount',
        'remarks' => 'getRemarks',
        'internal_notes' => 'getInternalNotes',
        'show_signature_or_stamp' => 'getShowSignatureOrStamp'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }

    

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['company_name'] = isset($data['company_name']) ? $data['company_name'] : null;
        $this->container['company_name_en'] = isset($data['company_name_en']) ? $data['company_name_en'] : null;
        $this->container['company_address'] = isset($data['company_address']) ? $data['company_address'] : null;
        $this->container['company_address_en'] = isset($data['company_address_en']) ? $data['company_address_en'] : null;
        $this->container['company_tax_id'] = isset($data['company_tax_id']) ? $data['company_tax_id'] : null;
        $this->container['company_branch'] = isset($data['company_branch']) ? $data['company_branch'] : null;
        $this->container['company_branch_en'] = isset($data['company_branch_en']) ? $data['company_branch_en'] : null;
        $this->container['company_phone'] = isset($data['company_phone']) ? $data['company_phone'] : null;
        $this->container['company_mobile'] = isset($data['company_mobile']) ? $data['company_mobile'] : null;
        $this->container['company_fax'] = isset($data['company_fax']) ? $data['company_fax'] : null;
        $this->container['company_website'] = isset($data['company_website']) ? $data['company_website'] : null;
        $this->container['contact_code'] = isset($data['contact_code']) ? $data['contact_code'] : null;
        $this->container['contact_name'] = isset($data['contact_name']) ? $data['contact_name'] : null;
        $this->container['contact_address'] = isset($data['contact_address']) ? $data['contact_address'] : null;
        $this->container['contact_tax_id'] = isset($data['contact_tax_id']) ? $data['contact_tax_id'] : null;
        $this->container['contact_branch'] = isset($data['contact_branch']) ? $data['contact_branch'] : null;
        $this->container['contact_person'] = isset($data['contact_person']) ? $data['contact_person'] : null;
        $this->container['contact_email'] = isset($data['contact_email']) ? $data['contact_email'] : null;
        $this->container['contact_number'] = isset($data['contact_number']) ? $data['contact_number'] : null;
        $this->container['contact_zip_code'] = isset($data['contact_zip_code']) ? $data['contact_zip_code'] : null;
        $this->container['contact_group'] = isset($data['contact_group']) ? $data['contact_group'] : 1;
        $this->container['published_on'] = isset($data['published_on']) ? $data['published_on'] : null;
        $this->container['entity'] = isset($data['entity']) ? $data['entity'] : 1;
        $this->container['text_other'] = isset($data['text_other']) ? $data['text_other'] : null;
        $this->container['withholding_tax_items'] = isset($data['withholding_tax_items']) ? $data['withholding_tax_items'] : null;
        $this->container['total'] = isset($data['total']) ? $data['total'] : null;
        $this->container['total_tax_withheld'] = isset($data['total_tax_withheld']) ? $data['total_tax_withheld'] : null;
        $this->container['tax_payment'] = isset($data['tax_payment']) ? $data['tax_payment'] : 1;
        $this->container['tax_payment_others'] = isset($data['tax_payment_others']) ? $data['tax_payment_others'] : null;
        $this->container['provident_fund_number'] = isset($data['provident_fund_number']) ? $data['provident_fund_number'] : null;
        $this->container['provident_fund_amount'] = isset($data['provident_fund_amount']) ? $data['provident_fund_amount'] : null;
        $this->container['social_security_amount'] = isset($data['social_security_amount']) ? $data['social_security_amount'] : null;
        $this->container['remarks'] = isset($data['remarks']) ? $data['remarks'] : null;
        $this->container['internal_notes'] = isset($data['internal_notes']) ? $data['internal_notes'] : null;
        $this->container['show_signature_or_stamp'] = isset($data['show_signature_or_stamp']) ? $data['show_signature_or_stamp'] : true;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['company_name'] === null) {
            $invalidProperties[] = "'company_name' can't be null";
        }
        if ($this->container['company_address'] === null) {
            $invalidProperties[] = "'company_address' can't be null";
        }
        if ($this->container['company_branch'] === null) {
            $invalidProperties[] = "'company_branch' can't be null";
        }
        if ($this->container['contact_name'] === null) {
            $invalidProperties[] = "'contact_name' can't be null";
        }
        if ($this->container['published_on'] === null) {
            $invalidProperties[] = "'published_on' can't be null";
        }
        if ($this->container['entity'] === null) {
            $invalidProperties[] = "'entity' can't be null";
        }
        if ($this->container['withholding_tax_items'] === null) {
            $invalidProperties[] = "'withholding_tax_items' can't be null";
        }
        if ($this->container['total'] === null) {
            $invalidProperties[] = "'total' can't be null";
        }
        if ($this->container['total_tax_withheld'] === null) {
            $invalidProperties[] = "'total_tax_withheld' can't be null";
        }
        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets company_name
     *
     * @return string
     */
    public function getCompanyName()
    {
        return $this->container['company_name'];
    }

    /**
     * Sets company_name
     *
     * @param string $company_name ชื่อบริษัท
     *
     * @return $this
     */
    public function setCompanyName($company_name)
    {
        $this->container['company_name'] = $company_name;

        return $this;
    }

    /**
     * Gets company_name_en
     *
     * @return string|null
     */
    public function getCompanyNameEn()
    {
        return $this->container['company_name_en'];
    }

    /**
     * Sets company_name_en
     *
     * @param string|null $company_name_en ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
     *
     * @return $this
     */
    public function setCompanyNameEn($company_name_en)
    {
        $this->container['company_name_en'] = $company_name_en;

        return $this;
    }

    /**
     * Gets company_address
     *
     * @return string
     */
    public function getCompanyAddress()
    {
        return $this->container['company_address'];
    }

    /**
     * Sets company_address
     *
     * @param string $company_address ที่อยู่บริษัท
     *
     * @return $this
     */
    public function setCompanyAddress($company_address)
    {
        $this->container['company_address'] = $company_address;

        return $this;
    }

    /**
     * Gets company_address_en
     *
     * @return string|null
     */
    public function getCompanyAddressEn()
    {
        return $this->container['company_address_en'];
    }

    /**
     * Sets company_address_en
     *
     * @param string|null $company_address_en ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
     *
     * @return $this
     */
    public function setCompanyAddressEn($company_address_en)
    {
        $this->container['company_address_en'] = $company_address_en;

        return $this;
    }

    /**
     * Gets company_tax_id
     *
     * @return string|null
     */
    public function getCompanyTaxId()
    {
        return $this->container['company_tax_id'];
    }

    /**
     * Sets company_tax_id
     *
     * @param string|null $company_tax_id เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>
     *
     * @return $this
     */
    public function setCompanyTaxId($company_tax_id)
    {
        $this->container['company_tax_id'] = $company_tax_id;

        return $this;
    }

    /**
     * Gets company_branch
     *
     * @return string
     */
    public function getCompanyBranch()
    {
        return $this->container['company_branch'];
    }

    /**
     * Sets company_branch
     *
     * @param string $company_branch ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex>
     *
     * @return $this
     */
    public function setCompanyBranch($company_branch)
    {
        $this->container['company_branch'] = $company_branch;

        return $this;
    }

    /**
     * Gets company_branch_en
     *
     * @return string|null
     */
    public function getCompanyBranchEn()
    {
        return $this->container['company_branch_en'];
    }

    /**
     * Sets company_branch_en
     *
     * @param string|null $company_branch_en ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) <br><ex>Example: Head Office 00000</ex>
     *
     * @return $this
     */
    public function setCompanyBranchEn($company_branch_en)
    {
        $this->container['company_branch_en'] = $company_branch_en;

        return $this;
    }

    /**
     * Gets company_phone
     *
     * @return string|null
     */
    public function getCompanyPhone()
    {
        return $this->container['company_phone'];
    }

    /**
     * Sets company_phone
     *
     * @param string|null $company_phone เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>
     *
     * @return $this
     */
    public function setCompanyPhone($company_phone)
    {
        $this->container['company_phone'] = $company_phone;

        return $this;
    }

    /**
     * Gets company_mobile
     *
     * @return string|null
     */
    public function getCompanyMobile()
    {
        return $this->container['company_mobile'];
    }

    /**
     * Sets company_mobile
     *
     * @param string|null $company_mobile เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>
     *
     * @return $this
     */
    public function setCompanyMobile($company_mobile)
    {
        $this->container['company_mobile'] = $company_mobile;

        return $this;
    }

    /**
     * Gets company_fax
     *
     * @return string|null
     */
    public function getCompanyFax()
    {
        return $this->container['company_fax'];
    }

    /**
     * Sets company_fax
     *
     * @param string|null $company_fax เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>
     *
     * @return $this
     */
    public function setCompanyFax($company_fax)
    {
        $this->container['company_fax'] = $company_fax;

        return $this;
    }

    /**
     * Gets company_website
     *
     * @return string|null
     */
    public function getCompanyWebsite()
    {
        return $this->container['company_website'];
    }

    /**
     * Sets company_website
     *
     * @param string|null $company_website เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>
     *
     * @return $this
     */
    public function setCompanyWebsite($company_website)
    {
        $this->container['company_website'] = $company_website;

        return $this;
    }

    /**
     * Gets contact_code
     *
     * @return string|null
     */
    public function getContactCode()
    {
        return $this->container['contact_code'];
    }

    /**
     * Sets contact_code
     *
     * @param string|null $contact_code รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
     *
     * @return $this
     */
    public function setContactCode($contact_code)
    {
        $this->container['contact_code'] = $contact_code;

        return $this;
    }

    /**
     * Gets contact_name
     *
     * @return string
     */
    public function getContactName()
    {
        return $this->container['contact_name'];
    }

    /**
     * Sets contact_name
     *
     * @param string $contact_name ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
     *
     * @return $this
     */
    public function setContactName($contact_name)
    {
        $this->container['contact_name'] = $contact_name;

        return $this;
    }

    /**
     * Gets contact_address
     *
     * @return string|null
     */
    public function getContactAddress()
    {
        return $this->container['contact_address'];
    }

    /**
     * Sets contact_address
     *
     * @param string|null $contact_address ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
     *
     * @return $this
     */
    public function setContactAddress($contact_address)
    {
        $this->container['contact_address'] = $contact_address;

        return $this;
    }

    /**
     * Gets contact_tax_id
     *
     * @return string|null
     */
    public function getContactTaxId()
    {
        return $this->container['contact_tax_id'];
    }

    /**
     * Sets contact_tax_id
     *
     * @param string|null $contact_tax_id เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
     *
     * @return $this
     */
    public function setContactTaxId($contact_tax_id)
    {
        $this->container['contact_tax_id'] = $contact_tax_id;

        return $this;
    }

    /**
     * Gets contact_branch
     *
     * @return string|null
     */
    public function getContactBranch()
    {
        return $this->container['contact_branch'];
    }

    /**
     * Sets contact_branch
     *
     * @param string|null $contact_branch สำนักงาน/สาขา
     *
     * @return $this
     */
    public function setContactBranch($contact_branch)
    {
        $this->container['contact_branch'] = $contact_branch;

        return $this;
    }

    /**
     * Gets contact_person
     *
     * @return string|null
     */
    public function getContactPerson()
    {
        return $this->container['contact_person'];
    }

    /**
     * Sets contact_person
     *
     * @param string|null $contact_person ชื่อผู้ติดต่อ
     *
     * @return $this
     */
    public function setContactPerson($contact_person)
    {
        $this->container['contact_person'] = $contact_person;

        return $this;
    }

    /**
     * Gets contact_email
     *
     * @return string|null
     */
    public function getContactEmail()
    {
        return $this->container['contact_email'];
    }

    /**
     * Sets contact_email
     *
     * @param string|null $contact_email อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>
     *
     * @return $this
     */
    public function setContactEmail($contact_email)
    {
        $this->container['contact_email'] = $contact_email;

        return $this;
    }

    /**
     * Gets contact_number
     *
     * @return string|null
     */
    public function getContactNumber()
    {
        return $this->container['contact_number'];
    }

    /**
     * Sets contact_number
     *
     * @param string|null $contact_number เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
     *
     * @return $this
     */
    public function setContactNumber($contact_number)
    {
        $this->container['contact_number'] = $contact_number;

        return $this;
    }

    /**
     * Gets contact_zip_code
     *
     * @return string|null
     */
    public function getContactZipCode()
    {
        return $this->container['contact_zip_code'];
    }

    /**
     * Sets contact_zip_code
     *
     * @param string|null $contact_zip_code รหัสไปรษณีย์ติดต่อ
     *
     * @return $this
     */
    public function setContactZipCode($contact_zip_code)
    {
        $this->container['contact_zip_code'] = $contact_zip_code;

        return $this;
    }

    /**
     * Gets contact_group
     *
     * @return int|null
     */
    public function getContactGroup()
    {
        return $this->container['contact_group'];
    }

    /**
     * Sets contact_group
     *
     * @param int|null $contact_group ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
     *
     * @return $this
     */
    public function setContactGroup($contact_group)
    {
        $this->container['contact_group'] = $contact_group;

        return $this;
    }

    /**
     * Gets published_on
     *
     * @return \DateTime
     */
    public function getPublishedOn()
    {
        return $this->container['published_on'];
    }

    /**
     * Sets published_on
     *
     * @param \DateTime $published_on วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
     *
     * @return $this
     */
    public function setPublishedOn($published_on)
    {
        $this->container['published_on'] = $published_on;

        return $this;
    }

    /**
     * Gets entity
     *
     * @return int
     */
    public function getEntity()
    {
        return $this->container['entity'];
    }

    /**
     * Sets entity
     *
     * @param int $entity แบบฟอร์มเอกสารหัก ณ ที่จ่าย <br> ภงด 3 = 1 <br> ภงด 53 = 3 <br> ภงด 1ก = 1 <br> ภงด 1ก (พิเศษ) = 7 <br> ภงด 2 = 9 <br> ภงด 2ก = 11 <br> ภงด 3ก = 13
     *
     * @return $this
     */
    public function setEntity($entity)
    {
        $this->container['entity'] = $entity;

        return $this;
    }

    /**
     * Gets text_other
     *
     * @return string|null
     */
    public function getTextOther()
    {
        return $this->container['text_other'];
    }

    /**
     * Sets text_other
     *
     * @param string|null $text_other ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) <br>Example: 2020</ex>
     *
     * @return $this
     */
    public function setTextOther($text_other)
    {
        $this->container['text_other'] = $text_other;

        return $this;
    }

    /**
     * Gets withholding_tax_items
     *
     * @return \OpenAPI\Client\Model\WithholidingTaxItem[]
     */
    public function getWithholdingTaxItems()
    {
        return $this->container['withholding_tax_items'];
    }

    /**
     * Sets withholding_tax_items
     *
     * @param \OpenAPI\Client\Model\WithholidingTaxItem[] $withholding_tax_items รายการหัก ของเอกสารหัก ณ ที่จ่าย
     *
     * @return $this
     */
    public function setWithholdingTaxItems($withholding_tax_items)
    {
        $this->container['withholding_tax_items'] = $withholding_tax_items;

        return $this;
    }

    /**
     * Gets total
     *
     * @return float
     */
    public function getTotal()
    {
        return $this->container['total'];
    }

    /**
     * Sets total
     *
     * @param float $total จำนวนเงิน (ไม่รวมภาษี)
     *
     * @return $this
     */
    public function setTotal($total)
    {
        $this->container['total'] = $total;

        return $this;
    }

    /**
     * Gets total_tax_withheld
     *
     * @return float
     */
    public function getTotalTaxWithheld()
    {
        return $this->container['total_tax_withheld'];
    }

    /**
     * Sets total_tax_withheld
     *
     * @param float $total_tax_withheld ภาษีที่หัก
     *
     * @return $this
     */
    public function setTotalTaxWithheld($total_tax_withheld)
    {
        $this->container['total_tax_withheld'] = $total_tax_withheld;

        return $this;
    }

    /**
     * Gets tax_payment
     *
     * @return int|null
     */
    public function getTaxPayment()
    {
        return $this->container['tax_payment'];
    }

    /**
     * Sets tax_payment
     *
     * @param int|null $tax_payment ผู้จ่ายเงิน <br> 1 = ภาษีหัก ณ ที่จ่าย <br> 3 = ออกภาษีให้ตลอดไป <br> 5 = ออกภาษีให้ครั้งเดียว <br> 7 = อื่น ๆ
     *
     * @return $this
     */
    public function setTaxPayment($tax_payment)
    {
        $this->container['tax_payment'] = $tax_payment;

        return $this;
    }

    /**
     * Gets tax_payment_others
     *
     * @return string|null
     */
    public function getTaxPaymentOthers()
    {
        return $this->container['tax_payment_others'];
    }

    /**
     * Sets tax_payment_others
     *
     * @param string|null $tax_payment_others ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ
     *
     * @return $this
     */
    public function setTaxPaymentOthers($tax_payment_others)
    {
        $this->container['tax_payment_others'] = $tax_payment_others;

        return $this;
    }

    /**
     * Gets provident_fund_number
     *
     * @return string|null
     */
    public function getProvidentFundNumber()
    {
        return $this->container['provident_fund_number'];
    }

    /**
     * Sets provident_fund_number
     *
     * @param string|null $provident_fund_number ใบอนุญาตเลขที่
     *
     * @return $this
     */
    public function setProvidentFundNumber($provident_fund_number)
    {
        $this->container['provident_fund_number'] = $provident_fund_number;

        return $this;
    }

    /**
     * Gets provident_fund_amount
     *
     * @return string|null
     */
    public function getProvidentFundAmount()
    {
        return $this->container['provident_fund_amount'];
    }

    /**
     * Sets provident_fund_amount
     *
     * @param string|null $provident_fund_amount จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ
     *
     * @return $this
     */
    public function setProvidentFundAmount($provident_fund_amount)
    {
        $this->container['provident_fund_amount'] = $provident_fund_amount;

        return $this;
    }

    /**
     * Gets social_security_amount
     *
     * @return string|null
     */
    public function getSocialSecurityAmount()
    {
        return $this->container['social_security_amount'];
    }

    /**
     * Sets social_security_amount
     *
     * @param string|null $social_security_amount จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม
     *
     * @return $this
     */
    public function setSocialSecurityAmount($social_security_amount)
    {
        $this->container['social_security_amount'] = $social_security_amount;

        return $this;
    }

    /**
     * Gets remarks
     *
     * @return string|null
     */
    public function getRemarks()
    {
        return $this->container['remarks'];
    }

    /**
     * Sets remarks
     *
     * @param string|null $remarks หมายเหตุเอกสาร
     *
     * @return $this
     */
    public function setRemarks($remarks)
    {
        $this->container['remarks'] = $remarks;

        return $this;
    }

    /**
     * Gets internal_notes
     *
     * @return string|null
     */
    public function getInternalNotes()
    {
        return $this->container['internal_notes'];
    }

    /**
     * Sets internal_notes
     *
     * @param string|null $internal_notes โน๊ตภายในบริษัท
     *
     * @return $this
     */
    public function setInternalNotes($internal_notes)
    {
        $this->container['internal_notes'] = $internal_notes;

        return $this;
    }

    /**
     * Gets show_signature_or_stamp
     *
     * @return bool|null
     */
    public function getShowSignatureOrStamp()
    {
        return $this->container['show_signature_or_stamp'];
    }

    /**
     * Sets show_signature_or_stamp
     *
     * @param bool|null $show_signature_or_stamp ลายเซ็นอิเล็กทรอนิกส์และตรายาง
     *
     * @return $this
     */
    public function setShowSignatureOrStamp($show_signature_or_stamp)
    {
        $this->container['show_signature_or_stamp'] = $show_signature_or_stamp;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


