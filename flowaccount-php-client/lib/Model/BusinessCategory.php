<?php
/**
 * BusinessCategory
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
 * BusinessCategory Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class BusinessCategory implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'BusinessCategory';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'id' => 'int',
        'system_code' => 'int',
        'category_id' => 'int',
        'category_name_local' => 'string',
        'category_name_foreign' => 'string',
        'debit_id' => 'int',
        'debit_category' => 'int',
        'debit_code' => 'string',
        'debit_name_local' => 'string',
        'debit_name_foreign' => 'string',
        'credit_id' => 'int',
        'credit_category' => 'int',
        'credit_code' => 'string',
        'credit_name_local' => 'string',
        'credit_name_foreign' => 'string',
        'keywords' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPIFormats = [
        'id' => null,
        'system_code' => null,
        'category_id' => null,
        'category_name_local' => null,
        'category_name_foreign' => null,
        'debit_id' => null,
        'debit_category' => null,
        'debit_code' => null,
        'debit_name_local' => null,
        'debit_name_foreign' => null,
        'credit_id' => null,
        'credit_category' => null,
        'credit_code' => null,
        'credit_name_local' => null,
        'credit_name_foreign' => null,
        'keywords' => null
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
        'id' => 'id',
        'system_code' => 'systemCode',
        'category_id' => 'categoryId',
        'category_name_local' => 'categoryNameLocal',
        'category_name_foreign' => 'categoryNameForeign',
        'debit_id' => 'debitId',
        'debit_category' => 'debitCategory',
        'debit_code' => 'debitCode',
        'debit_name_local' => 'debitNameLocal',
        'debit_name_foreign' => 'debitNameForeign',
        'credit_id' => 'creditId',
        'credit_category' => 'creditCategory',
        'credit_code' => 'creditCode',
        'credit_name_local' => 'creditNameLocal',
        'credit_name_foreign' => 'creditNameForeign',
        'keywords' => 'keywords'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
        'system_code' => 'setSystemCode',
        'category_id' => 'setCategoryId',
        'category_name_local' => 'setCategoryNameLocal',
        'category_name_foreign' => 'setCategoryNameForeign',
        'debit_id' => 'setDebitId',
        'debit_category' => 'setDebitCategory',
        'debit_code' => 'setDebitCode',
        'debit_name_local' => 'setDebitNameLocal',
        'debit_name_foreign' => 'setDebitNameForeign',
        'credit_id' => 'setCreditId',
        'credit_category' => 'setCreditCategory',
        'credit_code' => 'setCreditCode',
        'credit_name_local' => 'setCreditNameLocal',
        'credit_name_foreign' => 'setCreditNameForeign',
        'keywords' => 'setKeywords'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
        'system_code' => 'getSystemCode',
        'category_id' => 'getCategoryId',
        'category_name_local' => 'getCategoryNameLocal',
        'category_name_foreign' => 'getCategoryNameForeign',
        'debit_id' => 'getDebitId',
        'debit_category' => 'getDebitCategory',
        'debit_code' => 'getDebitCode',
        'debit_name_local' => 'getDebitNameLocal',
        'debit_name_foreign' => 'getDebitNameForeign',
        'credit_id' => 'getCreditId',
        'credit_category' => 'getCreditCategory',
        'credit_code' => 'getCreditCode',
        'credit_name_local' => 'getCreditNameLocal',
        'credit_name_foreign' => 'getCreditNameForeign',
        'keywords' => 'getKeywords'
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
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['system_code'] = isset($data['system_code']) ? $data['system_code'] : null;
        $this->container['category_id'] = isset($data['category_id']) ? $data['category_id'] : null;
        $this->container['category_name_local'] = isset($data['category_name_local']) ? $data['category_name_local'] : null;
        $this->container['category_name_foreign'] = isset($data['category_name_foreign']) ? $data['category_name_foreign'] : null;
        $this->container['debit_id'] = isset($data['debit_id']) ? $data['debit_id'] : null;
        $this->container['debit_category'] = isset($data['debit_category']) ? $data['debit_category'] : null;
        $this->container['debit_code'] = isset($data['debit_code']) ? $data['debit_code'] : null;
        $this->container['debit_name_local'] = isset($data['debit_name_local']) ? $data['debit_name_local'] : null;
        $this->container['debit_name_foreign'] = isset($data['debit_name_foreign']) ? $data['debit_name_foreign'] : null;
        $this->container['credit_id'] = isset($data['credit_id']) ? $data['credit_id'] : null;
        $this->container['credit_category'] = isset($data['credit_category']) ? $data['credit_category'] : null;
        $this->container['credit_code'] = isset($data['credit_code']) ? $data['credit_code'] : null;
        $this->container['credit_name_local'] = isset($data['credit_name_local']) ? $data['credit_name_local'] : null;
        $this->container['credit_name_foreign'] = isset($data['credit_name_foreign']) ? $data['credit_name_foreign'] : null;
        $this->container['keywords'] = isset($data['keywords']) ? $data['keywords'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

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
     * Gets id
     *
     * @return int|null
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param int|null $id id ของหมวดหมู่ค่าใช้จ่าย
     *
     * @return $this
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets system_code
     *
     * @return int|null
     */
    public function getSystemCode()
    {
        return $this->container['system_code'];
    }

    /**
     * Sets system_code
     *
     * @param int|null $system_code เลขที่ system code หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ)
     *
     * @return $this
     */
    public function setSystemCode($system_code)
    {
        $this->container['system_code'] = $system_code;

        return $this;
    }

    /**
     * Gets category_id
     *
     * @return int|null
     */
    public function getCategoryId()
    {
        return $this->container['category_id'];
    }

    /**
     * Sets category_id
     *
     * @param int|null $category_id เลขที่ id หมวดหมู่ค่าใช้จ่าย (เลือกใช้ หมวดหมู่ค่าใช้จ่ายสำหรับธุรกิจ)
     *
     * @return $this
     */
    public function setCategoryId($category_id)
    {
        $this->container['category_id'] = $category_id;

        return $this;
    }

    /**
     * Gets category_name_local
     *
     * @return string|null
     */
    public function getCategoryNameLocal()
    {
        return $this->container['category_name_local'];
    }

    /**
     * Sets category_name_local
     *
     * @param string|null $category_name_local ชื่อหมวดหมู่ค่าใช้จ่าย
     *
     * @return $this
     */
    public function setCategoryNameLocal($category_name_local)
    {
        $this->container['category_name_local'] = $category_name_local;

        return $this;
    }

    /**
     * Gets category_name_foreign
     *
     * @return string|null
     */
    public function getCategoryNameForeign()
    {
        return $this->container['category_name_foreign'];
    }

    /**
     * Sets category_name_foreign
     *
     * @param string|null $category_name_foreign ชื่อหมวดหมู่ค่าใช้จ่าย (ภาษาอังกฤษ)
     *
     * @return $this
     */
    public function setCategoryNameForeign($category_name_foreign)
    {
        $this->container['category_name_foreign'] = $category_name_foreign;

        return $this;
    }

    /**
     * Gets debit_id
     *
     * @return int|null
     */
    public function getDebitId()
    {
        return $this->container['debit_id'];
    }

    /**
     * Sets debit_id
     *
     * @param int|null $debit_id เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต
     *
     * @return $this
     */
    public function setDebitId($debit_id)
    {
        $this->container['debit_id'] = $debit_id;

        return $this;
    }

    /**
     * Gets debit_category
     *
     * @return int|null
     */
    public function getDebitCategory()
    {
        return $this->container['debit_category'];
    }

    /**
     * Sets debit_category
     *
     * @param int|null $debit_category เลขหมวดหมู่ ฝั่งเดบิต ของ หมวดหมู่ค่าใช้จ่าย
     *
     * @return $this
     */
    public function setDebitCategory($debit_category)
    {
        $this->container['debit_category'] = $debit_category;

        return $this;
    }

    /**
     * Gets debit_code
     *
     * @return string|null
     */
    public function getDebitCode()
    {
        return $this->container['debit_code'];
    }

    /**
     * Sets debit_code
     *
     * @param string|null $debit_code เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต
     *
     * @return $this
     */
    public function setDebitCode($debit_code)
    {
        $this->container['debit_code'] = $debit_code;

        return $this;
    }

    /**
     * Gets debit_name_local
     *
     * @return string|null
     */
    public function getDebitNameLocal()
    {
        return $this->container['debit_name_local'];
    }

    /**
     * Sets debit_name_local
     *
     * @param string|null $debit_name_local ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต
     *
     * @return $this
     */
    public function setDebitNameLocal($debit_name_local)
    {
        $this->container['debit_name_local'] = $debit_name_local;

        return $this;
    }

    /**
     * Gets debit_name_foreign
     *
     * @return string|null
     */
    public function getDebitNameForeign()
    {
        return $this->container['debit_name_foreign'];
    }

    /**
     * Sets debit_name_foreign
     *
     * @param string|null $debit_name_foreign ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเดบิต (ภาษาอังกฤษ)
     *
     * @return $this
     */
    public function setDebitNameForeign($debit_name_foreign)
    {
        $this->container['debit_name_foreign'] = $debit_name_foreign;

        return $this;
    }

    /**
     * Gets credit_id
     *
     * @return int|null
     */
    public function getCreditId()
    {
        return $this->container['credit_id'];
    }

    /**
     * Sets credit_id
     *
     * @param int|null $credit_id เลข id หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิิต
     *
     * @return $this
     */
    public function setCreditId($credit_id)
    {
        $this->container['credit_id'] = $credit_id;

        return $this;
    }

    /**
     * Gets credit_category
     *
     * @return int|null
     */
    public function getCreditCategory()
    {
        return $this->container['credit_category'];
    }

    /**
     * Sets credit_category
     *
     * @param int|null $credit_category เลขหมวดหมู่ ฝั่งเครดิต ของ หมวดหมู่ค่าใช้จ่าย
     *
     * @return $this
     */
    public function setCreditCategory($credit_category)
    {
        $this->container['credit_category'] = $credit_category;

        return $this;
    }

    /**
     * Gets credit_code
     *
     * @return string|null
     */
    public function getCreditCode()
    {
        return $this->container['credit_code'];
    }

    /**
     * Sets credit_code
     *
     * @param string|null $credit_code เลขที่หมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต
     *
     * @return $this
     */
    public function setCreditCode($credit_code)
    {
        $this->container['credit_code'] = $credit_code;

        return $this;
    }

    /**
     * Gets credit_name_local
     *
     * @return string|null
     */
    public function getCreditNameLocal()
    {
        return $this->container['credit_name_local'];
    }

    /**
     * Sets credit_name_local
     *
     * @param string|null $credit_name_local ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต
     *
     * @return $this
     */
    public function setCreditNameLocal($credit_name_local)
    {
        $this->container['credit_name_local'] = $credit_name_local;

        return $this;
    }

    /**
     * Gets credit_name_foreign
     *
     * @return string|null
     */
    public function getCreditNameForeign()
    {
        return $this->container['credit_name_foreign'];
    }

    /**
     * Sets credit_name_foreign
     *
     * @param string|null $credit_name_foreign ชื่อหมวดหมู่ค่าใช้จ่ายทางบัญชี ฝั่งเครดิต (ภาษาอังกฤษ)
     *
     * @return $this
     */
    public function setCreditNameForeign($credit_name_foreign)
    {
        $this->container['credit_name_foreign'] = $credit_name_foreign;

        return $this;
    }

    /**
     * Gets keywords
     *
     * @return string|null
     */
    public function getKeywords()
    {
        return $this->container['keywords'];
    }

    /**
     * Sets keywords
     *
     * @param string|null $keywords keyword
     *
     * @return $this
     */
    public function setKeywords($keywords)
    {
        $this->container['keywords'] = $keywords;

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


