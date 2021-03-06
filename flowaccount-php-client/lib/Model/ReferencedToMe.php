<?php
/**
 * ReferencedToMe
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
 * ReferencedToMe Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class ReferencedToMe implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'ReferencedToMe';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'reference_id' => 'int',
        'reference_document_type' => 'int',
        'reference_document_serial' => 'string',
        'document_id' => 'int',
        'document_serial' => 'int',
        'type' => 'int'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPIFormats = [
        'reference_id' => null,
        'reference_document_type' => null,
        'reference_document_serial' => null,
        'document_id' => null,
        'document_serial' => null,
        'type' => null
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
        'reference_id' => 'referenceId',
        'reference_document_type' => 'referenceDocumentType',
        'reference_document_serial' => 'referenceDocumentSerial',
        'document_id' => 'documentId',
        'document_serial' => 'documentSerial',
        'type' => 'type'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'reference_id' => 'setReferenceId',
        'reference_document_type' => 'setReferenceDocumentType',
        'reference_document_serial' => 'setReferenceDocumentSerial',
        'document_id' => 'setDocumentId',
        'document_serial' => 'setDocumentSerial',
        'type' => 'setType'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'reference_id' => 'getReferenceId',
        'reference_document_type' => 'getReferenceDocumentType',
        'reference_document_serial' => 'getReferenceDocumentSerial',
        'document_id' => 'getDocumentId',
        'document_serial' => 'getDocumentSerial',
        'type' => 'getType'
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
        $this->container['reference_id'] = isset($data['reference_id']) ? $data['reference_id'] : null;
        $this->container['reference_document_type'] = isset($data['reference_document_type']) ? $data['reference_document_type'] : null;
        $this->container['reference_document_serial'] = isset($data['reference_document_serial']) ? $data['reference_document_serial'] : null;
        $this->container['document_id'] = isset($data['document_id']) ? $data['document_id'] : null;
        $this->container['document_serial'] = isset($data['document_serial']) ? $data['document_serial'] : null;
        $this->container['type'] = isset($data['type']) ? $data['type'] : 1;
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
     * Gets reference_id
     *
     * @return int|null
     */
    public function getReferenceId()
    {
        return $this->container['reference_id'];
    }

    /**
     * Sets reference_id
     *
     * @param int|null $reference_id ID เอกสารฉบับนี้
     *
     * @return $this
     */
    public function setReferenceId($reference_id)
    {
        $this->container['reference_id'] = $reference_id;

        return $this;
    }

    /**
     * Gets reference_document_type
     *
     * @return int|null
     */
    public function getReferenceDocumentType()
    {
        return $this->container['reference_document_type'];
    }

    /**
     * Sets reference_document_type
     *
     * @param int|null $reference_document_type ประเภทของเอกสารฉบับนี้
     *
     * @return $this
     */
    public function setReferenceDocumentType($reference_document_type)
    {
        $this->container['reference_document_type'] = $reference_document_type;

        return $this;
    }

    /**
     * Gets reference_document_serial
     *
     * @return string|null
     */
    public function getReferenceDocumentSerial()
    {
        return $this->container['reference_document_serial'];
    }

    /**
     * Sets reference_document_serial
     *
     * @param string|null $reference_document_serial เลขที่เอกสารฉบับนี้
     *
     * @return $this
     */
    public function setReferenceDocumentSerial($reference_document_serial)
    {
        $this->container['reference_document_serial'] = $reference_document_serial;

        return $this;
    }

    /**
     * Gets document_id
     *
     * @return int|null
     */
    public function getDocumentId()
    {
        return $this->container['document_id'];
    }

    /**
     * Sets document_id
     *
     * @param int|null $document_id ID เอกสารปลายทางที่อ้างอิง ถึง เอกสารฉบับนี้
     *
     * @return $this
     */
    public function setDocumentId($document_id)
    {
        $this->container['document_id'] = $document_id;

        return $this;
    }

    /**
     * Gets document_serial
     *
     * @return int|null
     */
    public function getDocumentSerial()
    {
        return $this->container['document_serial'];
    }

    /**
     * Sets document_serial
     *
     * @param int|null $document_serial เลขที่เอกสารปลายทางที่อ้างอิง ถึง เอกสารฉบับนี้
     *
     * @return $this
     */
    public function setDocumentSerial($document_serial)
    {
        $this->container['document_serial'] = $document_serial;

        return $this;
    }

    /**
     * Gets type
     *
     * @return int|null
     */
    public function getType()
    {
        return $this->container['type'];
    }

    /**
     * Sets type
     *
     * @param int|null $type type
     *
     * @return $this
     */
    public function setType($type)
    {
        $this->container['type'] = $type;

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


