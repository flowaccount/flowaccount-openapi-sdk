<?php
/**
 * WithholidingTaxItem
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
 * FlowAccount.com โปรแกรมบัญชีออนไลน์ใช้งานง่าย สำหรับธุรกิจที่พึ่งเริ่มต้น   # Introduction **Servers Production**    site: https://www.flowaccount.com    api url: https://openapi.flowaccount.com/v1    **Beta test**   site: http://sandbox-new.flowaccount.com/    api url: https://openapi.flowaccount.com/test
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

use \ArrayAccess;
use \OpenAPI\Client\ObjectSerializer;

/**
 * WithholidingTaxItem Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class WithholidingTaxItem implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'WithholidingTaxItem';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'income_type' => 'int',
        'description' => 'string',
        'tax_rate' => 'float',
        'tax_amount' => 'float',
        'tax_amount_no_vat' => 'float',
        'withheld' => 'float',
        'total' => 'float',
        'vat_type' => 'int'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPIFormats = [
        'income_type' => null,
        'description' => null,
        'tax_rate' => 'decimal',
        'tax_amount' => 'decimal',
        'tax_amount_no_vat' => 'decimal',
        'withheld' => 'decimal',
        'total' => 'decimal',
        'vat_type' => null
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
        'income_type' => 'incomeType',
        'description' => 'description',
        'tax_rate' => 'taxRate',
        'tax_amount' => 'taxAmount',
        'tax_amount_no_vat' => 'taxAmountNoVat',
        'withheld' => 'withheld',
        'total' => 'total',
        'vat_type' => 'vatType'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'income_type' => 'setIncomeType',
        'description' => 'setDescription',
        'tax_rate' => 'setTaxRate',
        'tax_amount' => 'setTaxAmount',
        'tax_amount_no_vat' => 'setTaxAmountNoVat',
        'withheld' => 'setWithheld',
        'total' => 'setTotal',
        'vat_type' => 'setVatType'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'income_type' => 'getIncomeType',
        'description' => 'getDescription',
        'tax_rate' => 'getTaxRate',
        'tax_amount' => 'getTaxAmount',
        'tax_amount_no_vat' => 'getTaxAmountNoVat',
        'withheld' => 'getWithheld',
        'total' => 'getTotal',
        'vat_type' => 'getVatType'
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
        $this->container['income_type'] = isset($data['income_type']) ? $data['income_type'] : 1;
        $this->container['description'] = isset($data['description']) ? $data['description'] : null;
        $this->container['tax_rate'] = isset($data['tax_rate']) ? $data['tax_rate'] : null;
        $this->container['tax_amount'] = isset($data['tax_amount']) ? $data['tax_amount'] : null;
        $this->container['tax_amount_no_vat'] = isset($data['tax_amount_no_vat']) ? $data['tax_amount_no_vat'] : null;
        $this->container['withheld'] = isset($data['withheld']) ? $data['withheld'] : null;
        $this->container['total'] = isset($data['total']) ? $data['total'] : null;
        $this->container['vat_type'] = isset($data['vat_type']) ? $data['vat_type'] : 1;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['income_type'] === null) {
            $invalidProperties[] = "'income_type' can't be null";
        }
        if ($this->container['tax_rate'] === null) {
            $invalidProperties[] = "'tax_rate' can't be null";
        }
        if ($this->container['tax_amount'] === null) {
            $invalidProperties[] = "'tax_amount' can't be null";
        }
        if ($this->container['tax_amount_no_vat'] === null) {
            $invalidProperties[] = "'tax_amount_no_vat' can't be null";
        }
        if ($this->container['withheld'] === null) {
            $invalidProperties[] = "'withheld' can't be null";
        }
        if ($this->container['vat_type'] === null) {
            $invalidProperties[] = "'vat_type' can't be null";
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
     * Gets income_type
     *
     * @return int
     */
    public function getIncomeType()
    {
        return $this->container['income_type'];
    }

    /**
     * Sets income_type
     *
     * @param int $income_type ประเภทเงินได้ที่จ่าย <br> 1 = 1. เงินเดือน ค่าจ้าง เบี้ยเลี้ยง โบนัส ฯลฯ ตามมาตรา 40 (1) <br> 3 = 2. ค่าธรรมเนียม ค่านายหน้า ฯลฯ ตามมาตรา 40 (2) <br> 5 = 3. ค่าแห่งลิขสิทธิ์ ฯลฯ ตามมาตรา 40(3) <br> 7 = 4. (ก) ค่าดอกเบี้ย ฯลฯ ตามมาตรา 40(4) (ก) <br> 11 = 4. (ข)(1.1) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราร้อยละ 25 ของกำไรสุทธิ <br> 13 = 4. (ข)(1.2) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราร้อยละ 20 ของกำไรสุทธิ <br> 15 = 4. (ข)(1.3) กิจการที่ต้องเสียภาษีเงินได้นิติบุคคลในอัตราอื่น ของกำไรสุทธิ (กรุณาระบุ) <br> 17 = 4. (ข)(2.1) กำไรสุทธิของกิจการที่ได้รับยกเว้นเงินได้นิติบุคคล <br> 19 = 4. (ข)(2.2) เงินปันผลหรือเงินส่วนแบ่งของกำไรที่ได้รับยกเว้น... <br> 21 = 4. (ข)(2.3) กำไรสุทธิส่วนที่ได้หักผลขาดทุนสิทธิยกมาไม่เกิน 5 ปี... <br> 23 = 4. (ข)(2.4) กำไรที่รับรู้ทางบัญชีโดยวิธีส่วนได้เสีย (equity method) <br> 25 = 4. (ข)(2.5) อื่นๆ (กรุณาระบุ) <br> 27 = 5. การจ่ายเงินได้ที่ต้องหักภาษี ณ ที่จ่ายตามคำสั่งกรมสรรพากร.... <br> 29 = 6. อื่นๆ (กรุณาระบุ)
     *
     * @return $this
     */
    public function setIncomeType($income_type)
    {
        $this->container['income_type'] = $income_type;

        return $this;
    }

    /**
     * Gets description
     *
     * @return string|null
     */
    public function getDescription()
    {
        return $this->container['description'];
    }

    /**
     * Sets description
     *
     * @param string|null $description รายละเอียดหัก ณ ที่จ่าย <br> สำหรับประเภทเงินได้ที่จ่าย ข้อ 4.(ข)(2.5) อื่นๆ และ ข้อ 6. อื่นๆ
     *
     * @return $this
     */
    public function setDescription($description)
    {
        $this->container['description'] = $description;

        return $this;
    }

    /**
     * Gets tax_rate
     *
     * @return float
     */
    public function getTaxRate()
    {
        return $this->container['tax_rate'];
    }

    /**
     * Sets tax_rate
     *
     * @param float $tax_rate อัตราภาษี หัก ณ ที่จ่าย <br> 3 = อัตราภาษี 3% <br> 5 = อัตราภาษี 5% <br> 0.5 = อัตราภาษี 0.5% <br> 0.75 = อัตราภาษี 0.75% <br> 1 = อัตราภาษี 1% <br> 2 = อัตราภาษี 2% <br> 10 = อัตราภาษี 10% <br> 15 = อัตราภาษี 15% <br> -1 = อัตราภาษีเป็นแบบจำนวนเงิน
     *
     * @return $this
     */
    public function setTaxRate($tax_rate)
    {
        $this->container['tax_rate'] = $tax_rate;

        return $this;
    }

    /**
     * Gets tax_amount
     *
     * @return float
     */
    public function getTaxAmount()
    {
        return $this->container['tax_amount'];
    }

    /**
     * Sets tax_amount
     *
     * @param float $tax_amount จำนวนเงินที่นำมาหักภาษี
     *
     * @return $this
     */
    public function setTaxAmount($tax_amount)
    {
        $this->container['tax_amount'] = $tax_amount;

        return $this;
    }

    /**
     * Gets tax_amount_no_vat
     *
     * @return float
     */
    public function getTaxAmountNoVat()
    {
        return $this->container['tax_amount_no_vat'];
    }

    /**
     * Sets tax_amount_no_vat
     *
     * @param float $tax_amount_no_vat จำนวนเงินไม่รวมภาษีมูลค่าเพิ่ม
     *
     * @return $this
     */
    public function setTaxAmountNoVat($tax_amount_no_vat)
    {
        $this->container['tax_amount_no_vat'] = $tax_amount_no_vat;

        return $this;
    }

    /**
     * Gets withheld
     *
     * @return float
     */
    public function getWithheld()
    {
        return $this->container['withheld'];
    }

    /**
     * Sets withheld
     *
     * @param float $withheld จำนวนเงินภาษีหัก ณ ที่จ่าย
     *
     * @return $this
     */
    public function setWithheld($withheld)
    {
        $this->container['withheld'] = $withheld;

        return $this;
    }

    /**
     * Gets total
     *
     * @return float|null
     */
    public function getTotal()
    {
        return $this->container['total'];
    }

    /**
     * Sets total
     *
     * @param float|null $total จำนวนเงินหลังหักภาษี ณ ที่จ่าย (taxAmount - withheld = total)
     *
     * @return $this
     */
    public function setTotal($total)
    {
        $this->container['total'] = $total;

        return $this;
    }

    /**
     * Gets vat_type
     *
     * @return int
     */
    public function getVatType()
    {
        return $this->container['vat_type'];
    }

    /**
     * Sets vat_type
     *
     * @param int $vat_type ภาษีมูลค่าเพิ่ม <br> 1 = รวมภาษีมูลค่าเพิ่ม <br> 3 = ไม่รวมภาษีมูลค่าเพิ่ม <br>7 = ไม่มี/ยกเว้นภาษีมูลค่าเพิ่ม
     *
     * @return $this
     */
    public function setVatType($vat_type)
    {
        $this->container['vat_type'] = $vat_type;

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


