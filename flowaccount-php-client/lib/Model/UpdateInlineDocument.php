<?php
/**
 * UpdateInlineDocument
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
 * FlowAccount.com โปรแกรมบัญชีออนไลน์ใช้งานง่าย สำหรับธุรกิจที่พึ่งเริ่มต้น   # Introduction **Servers Production**    site: https://www.flowaccount.com    api url: https://openapi.flowaccount.com/v1    **Beta test**   site: http://sandbox-new.flowaccount.com/    api url: https://openapi.flowaccount.com/test    **PostMan Collection**   site: https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer@flowaccount.com
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 4.2.1
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model;
use \OpenAPI\Client\ObjectSerializer;

/**
 * UpdateInlineDocument Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class UpdateInlineDocument extends UpdateDocument 
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'UpdateInlineDocument';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'discount_type' => 'int',
        'use_inline_discount' => 'bool',
        'use_inline_vat' => 'bool',
        'exempt_amount' => 'float',
        'vatable_amount' => 'float',
        'items' => '\OpenAPI\Client\Model\InlineProductItem[]',
        'document_reference' => '\OpenAPI\Client\Model\UpgradeDocument[]'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPIFormats = [
        'discount_type' => null,
        'use_inline_discount' => null,
        'use_inline_vat' => null,
        'exempt_amount' => 'decimal',
        'vatable_amount' => 'decimal',
        'items' => null,
        'document_reference' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes + parent::openAPITypes();
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats + parent::openAPIFormats();
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'discount_type' => 'discountType',
        'use_inline_discount' => 'useInlineDiscount',
        'use_inline_vat' => 'useInlineVat',
        'exempt_amount' => 'exemptAmount',
        'vatable_amount' => 'vatableAmount',
        'items' => 'items',
        'document_reference' => 'documentReference'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'discount_type' => 'setDiscountType',
        'use_inline_discount' => 'setUseInlineDiscount',
        'use_inline_vat' => 'setUseInlineVat',
        'exempt_amount' => 'setExemptAmount',
        'vatable_amount' => 'setVatableAmount',
        'items' => 'setItems',
        'document_reference' => 'setDocumentReference'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'discount_type' => 'getDiscountType',
        'use_inline_discount' => 'getUseInlineDiscount',
        'use_inline_vat' => 'getUseInlineVat',
        'exempt_amount' => 'getExemptAmount',
        'vatable_amount' => 'getVatableAmount',
        'items' => 'getItems',
        'document_reference' => 'getDocumentReference'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return parent::attributeMap() + self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return parent::setters() + self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return parent::getters() + self::$getters;
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
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        parent::__construct($data);

        $this->container['discount_type'] = isset($data['discount_type']) ? $data['discount_type'] : 1;
        $this->container['use_inline_discount'] = isset($data['use_inline_discount']) ? $data['use_inline_discount'] : true;
        $this->container['use_inline_vat'] = isset($data['use_inline_vat']) ? $data['use_inline_vat'] : null;
        $this->container['exempt_amount'] = isset($data['exempt_amount']) ? $data['exempt_amount'] : 0;
        $this->container['vatable_amount'] = isset($data['vatable_amount']) ? $data['vatable_amount'] : 0;
        $this->container['items'] = isset($data['items']) ? $data['items'] : null;
        $this->container['document_reference'] = isset($data['document_reference']) ? $data['document_reference'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = parent::listInvalidProperties();

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
     * Gets discount_type
     *
     * @return int|null
     */
    public function getDiscountType()
    {
        return $this->container['discount_type'];
    }

    /**
     * Sets discount_type
     *
     * @param int|null $discount_type รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า <br> สามารถเลือกรูปแบบส่วนลดได้ <br> 1 =  เปอร์เซ็นต์ <br> 3 = จำนวน (บาท)
     *
     * @return $this
     */
    public function setDiscountType($discount_type)
    {
        $this->container['discount_type'] = $discount_type;

        return $this;
    }

    /**
     * Gets use_inline_discount
     *
     * @return bool|null
     */
    public function getUseInlineDiscount()
    {
        return $this->container['use_inline_discount'];
    }

    /**
     * Sets use_inline_discount
     *
     * @param bool|null $use_inline_discount inline discount ใช้งานส่วนลด แยกตามรายการสินค้า
     *
     * @return $this
     */
    public function setUseInlineDiscount($use_inline_discount)
    {
        $this->container['use_inline_discount'] = $use_inline_discount;

        return $this;
    }

    /**
     * Gets use_inline_vat
     *
     * @return bool|null
     */
    public function getUseInlineVat()
    {
        return $this->container['use_inline_vat'];
    }

    /**
     * Sets use_inline_vat
     *
     * @param bool|null $use_inline_vat inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า
     *
     * @return $this
     */
    public function setUseInlineVat($use_inline_vat)
    {
        $this->container['use_inline_vat'] = $use_inline_vat;

        return $this;
    }

    /**
     * Gets exempt_amount
     *
     * @return float|null
     */
    public function getExemptAmount()
    {
        return $this->container['exempt_amount'];
    }

    /**
     * Sets exempt_amount
     *
     * @param float|null $exempt_amount ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม
     *
     * @return $this
     */
    public function setExemptAmount($exempt_amount)
    {
        $this->container['exempt_amount'] = $exempt_amount;

        return $this;
    }

    /**
     * Gets vatable_amount
     *
     * @return float|null
     */
    public function getVatableAmount()
    {
        return $this->container['vatable_amount'];
    }

    /**
     * Sets vatable_amount
     *
     * @param float|null $vatable_amount ยอดขายที่คิดภาษีมูลค่าเพิ่ม
     *
     * @return $this
     */
    public function setVatableAmount($vatable_amount)
    {
        $this->container['vatable_amount'] = $vatable_amount;

        return $this;
    }

    /**
     * Gets items
     *
     * @return \OpenAPI\Client\Model\InlineProductItem[]|null
     */
    public function getItems()
    {
        return $this->container['items'];
    }

    /**
     * Sets items
     *
     * @param \OpenAPI\Client\Model\InlineProductItem[]|null $items รายการสินค้าใช้งานสำหรับเอกสาร Inline
     *
     * @return $this
     */
    public function setItems($items)
    {
        $this->container['items'] = $items;

        return $this;
    }

    /**
     * Gets document_reference
     *
     * @return \OpenAPI\Client\Model\UpgradeDocument[]|null
     */
    public function getDocumentReference()
    {
        return $this->container['document_reference'];
    }

    /**
     * Sets document_reference
     *
     * @param \OpenAPI\Client\Model\UpgradeDocument[]|null $document_reference สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)
     *
     * @return $this
     */
    public function setDocumentReference($document_reference)
    {
        $this->container['document_reference'] = $document_reference;

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


