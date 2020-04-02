<?php
/**
 * PaymentDocument
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
 * PaymentDocument Class Doc Comment
 *
 * @category Class
 * @description เก็บเงิน
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class PaymentDocument implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'PaymentDocument';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'document_id' => 'int',
        'payment_date' => '\DateTime',
        'collected' => 'float',
        'payment_deduction_type' => 'int',
        'payment_deduction_amount' => 'float',
        'withheld_percentage' => 'int',
        'withheld_amount' => 'float',
        'payment_charge' => 'float',
        'payment_method' => 'int',
        'transfer_bank_account_id' => 'int',
        'bank_account_id' => 'int',
        'cheque_date' => '\DateTime',
        'cheque_number' => 'string',
        'cheque_bank_account_id' => 'int',
        'credit_card_bank_account_id' => 'int',
        'payment_remarks' => 'string',
        'remaining_collected_type' => 'int',
        'remaining_collected' => 'float'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPIFormats = [
        'document_id' => 'int64',
        'payment_date' => 'date',
        'collected' => 'decimal',
        'payment_deduction_type' => 'int64',
        'payment_deduction_amount' => 'decimal',
        'withheld_percentage' => 'int64',
        'withheld_amount' => 'decimal',
        'payment_charge' => 'decimal',
        'payment_method' => 'int64',
        'transfer_bank_account_id' => 'int64',
        'bank_account_id' => 'int64',
        'cheque_date' => 'date',
        'cheque_number' => null,
        'cheque_bank_account_id' => 'int64',
        'credit_card_bank_account_id' => 'int64',
        'payment_remarks' => null,
        'remaining_collected_type' => 'int64',
        'remaining_collected' => 'decimal'
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
        'document_id' => 'documentId',
        'payment_date' => 'paymentDate',
        'collected' => 'collected',
        'payment_deduction_type' => 'paymentDeductionType',
        'payment_deduction_amount' => 'paymentDeductionAmount',
        'withheld_percentage' => 'withheldPercentage',
        'withheld_amount' => 'withheldAmount',
        'payment_charge' => 'paymentCharge',
        'payment_method' => 'paymentMethod',
        'transfer_bank_account_id' => 'transferBankAccountId',
        'bank_account_id' => 'bankAccountId',
        'cheque_date' => 'chequeDate',
        'cheque_number' => 'chequeNumber',
        'cheque_bank_account_id' => 'chequeBankAccountId',
        'credit_card_bank_account_id' => 'creditCardBankAccountId',
        'payment_remarks' => 'paymentRemarks',
        'remaining_collected_type' => 'remainingCollectedType',
        'remaining_collected' => 'remainingCollected'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'document_id' => 'setDocumentId',
        'payment_date' => 'setPaymentDate',
        'collected' => 'setCollected',
        'payment_deduction_type' => 'setPaymentDeductionType',
        'payment_deduction_amount' => 'setPaymentDeductionAmount',
        'withheld_percentage' => 'setWithheldPercentage',
        'withheld_amount' => 'setWithheldAmount',
        'payment_charge' => 'setPaymentCharge',
        'payment_method' => 'setPaymentMethod',
        'transfer_bank_account_id' => 'setTransferBankAccountId',
        'bank_account_id' => 'setBankAccountId',
        'cheque_date' => 'setChequeDate',
        'cheque_number' => 'setChequeNumber',
        'cheque_bank_account_id' => 'setChequeBankAccountId',
        'credit_card_bank_account_id' => 'setCreditCardBankAccountId',
        'payment_remarks' => 'setPaymentRemarks',
        'remaining_collected_type' => 'setRemainingCollectedType',
        'remaining_collected' => 'setRemainingCollected'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'document_id' => 'getDocumentId',
        'payment_date' => 'getPaymentDate',
        'collected' => 'getCollected',
        'payment_deduction_type' => 'getPaymentDeductionType',
        'payment_deduction_amount' => 'getPaymentDeductionAmount',
        'withheld_percentage' => 'getWithheldPercentage',
        'withheld_amount' => 'getWithheldAmount',
        'payment_charge' => 'getPaymentCharge',
        'payment_method' => 'getPaymentMethod',
        'transfer_bank_account_id' => 'getTransferBankAccountId',
        'bank_account_id' => 'getBankAccountId',
        'cheque_date' => 'getChequeDate',
        'cheque_number' => 'getChequeNumber',
        'cheque_bank_account_id' => 'getChequeBankAccountId',
        'credit_card_bank_account_id' => 'getCreditCardBankAccountId',
        'payment_remarks' => 'getPaymentRemarks',
        'remaining_collected_type' => 'getRemainingCollectedType',
        'remaining_collected' => 'getRemainingCollected'
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
        $this->container['document_id'] = isset($data['document_id']) ? $data['document_id'] : null;
        $this->container['payment_date'] = isset($data['payment_date']) ? $data['payment_date'] : null;
        $this->container['collected'] = isset($data['collected']) ? $data['collected'] : 0;
        $this->container['payment_deduction_type'] = isset($data['payment_deduction_type']) ? $data['payment_deduction_type'] : 0;
        $this->container['payment_deduction_amount'] = isset($data['payment_deduction_amount']) ? $data['payment_deduction_amount'] : 0;
        $this->container['withheld_percentage'] = isset($data['withheld_percentage']) ? $data['withheld_percentage'] : 0;
        $this->container['withheld_amount'] = isset($data['withheld_amount']) ? $data['withheld_amount'] : 0;
        $this->container['payment_charge'] = isset($data['payment_charge']) ? $data['payment_charge'] : 0;
        $this->container['payment_method'] = isset($data['payment_method']) ? $data['payment_method'] : 1;
        $this->container['transfer_bank_account_id'] = isset($data['transfer_bank_account_id']) ? $data['transfer_bank_account_id'] : 0;
        $this->container['bank_account_id'] = isset($data['bank_account_id']) ? $data['bank_account_id'] : 0;
        $this->container['cheque_date'] = isset($data['cheque_date']) ? $data['cheque_date'] : null;
        $this->container['cheque_number'] = isset($data['cheque_number']) ? $data['cheque_number'] : null;
        $this->container['cheque_bank_account_id'] = isset($data['cheque_bank_account_id']) ? $data['cheque_bank_account_id'] : 0;
        $this->container['credit_card_bank_account_id'] = isset($data['credit_card_bank_account_id']) ? $data['credit_card_bank_account_id'] : 0;
        $this->container['payment_remarks'] = isset($data['payment_remarks']) ? $data['payment_remarks'] : null;
        $this->container['remaining_collected_type'] = isset($data['remaining_collected_type']) ? $data['remaining_collected_type'] : 0;
        $this->container['remaining_collected'] = isset($data['remaining_collected']) ? $data['remaining_collected'] : 0;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['document_id'] === null) {
            $invalidProperties[] = "'document_id' can't be null";
        }
        if ($this->container['payment_date'] === null) {
            $invalidProperties[] = "'payment_date' can't be null";
        }
        if ($this->container['collected'] === null) {
            $invalidProperties[] = "'collected' can't be null";
        }
        if ($this->container['payment_method'] === null) {
            $invalidProperties[] = "'payment_method' can't be null";
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
     * Gets document_id
     *
     * @return int
     */
    public function getDocumentId()
    {
        return $this->container['document_id'];
    }

    /**
     * Sets document_id
     *
     * @param int $document_id id เอกสาร
     *
     * @return $this
     */
    public function setDocumentId($document_id)
    {
        $this->container['document_id'] = $document_id;

        return $this;
    }

    /**
     * Gets payment_date
     *
     * @return \DateTime
     */
    public function getPaymentDate()
    {
        return $this->container['payment_date'];
    }

    /**
     * Sets payment_date
     *
     * @param \DateTime $payment_date วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
     *
     * @return $this
     */
    public function setPaymentDate($payment_date)
    {
        $this->container['payment_date'] = $payment_date;

        return $this;
    }

    /**
     * Gets collected
     *
     * @return float
     */
    public function getCollected()
    {
        return $this->container['collected'];
    }

    /**
     * Sets collected
     *
     * @param float $collected จำนวนเงินยอดรับสุทธิ
     *
     * @return $this
     */
    public function setCollected($collected)
    {
        $this->container['collected'] = $collected;

        return $this;
    }

    /**
     * Gets payment_deduction_type
     *
     * @return int|null
     */
    public function getPaymentDeductionType()
    {
        return $this->container['payment_deduction_type'];
    }

    /**
     * Sets payment_deduction_type
     *
     * @param int|null $payment_deduction_type ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
     *
     * @return $this
     */
    public function setPaymentDeductionType($payment_deduction_type)
    {
        $this->container['payment_deduction_type'] = $payment_deduction_type;

        return $this;
    }

    /**
     * Gets payment_deduction_amount
     *
     * @return float|null
     */
    public function getPaymentDeductionAmount()
    {
        return $this->container['payment_deduction_amount'];
    }

    /**
     * Sets payment_deduction_amount
     *
     * @param float|null $payment_deduction_amount จำนวนเงินยอดรายการปรับลด <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
     *
     * @return $this
     */
    public function setPaymentDeductionAmount($payment_deduction_amount)
    {
        $this->container['payment_deduction_amount'] = $payment_deduction_amount;

        return $this;
    }

    /**
     * Gets withheld_percentage
     *
     * @return int|null
     */
    public function getWithheldPercentage()
    {
        return $this->container['withheld_percentage'];
    }

    /**
     * Sets withheld_percentage
     *
     * @param int|null $withheld_percentage เปอร์เซ็น หัก ณ ที่จ่าย
     *
     * @return $this
     */
    public function setWithheldPercentage($withheld_percentage)
    {
        $this->container['withheld_percentage'] = $withheld_percentage;

        return $this;
    }

    /**
     * Gets withheld_amount
     *
     * @return float|null
     */
    public function getWithheldAmount()
    {
        return $this->container['withheld_amount'];
    }

    /**
     * Sets withheld_amount
     *
     * @param float|null $withheld_amount จำนวน ยอดหัก ณ ที่จ่าย
     *
     * @return $this
     */
    public function setWithheldAmount($withheld_amount)
    {
        $this->container['withheld_amount'] = $withheld_amount;

        return $this;
    }

    /**
     * Gets payment_charge
     *
     * @return float|null
     */
    public function getPaymentCharge()
    {
        return $this->container['payment_charge'];
    }

    /**
     * Sets payment_charge
     *
     * @param float|null $payment_charge ค่าธรรมเนียม ที่ชำระโดยการโอนเงิน หรือ เช็ค <br> (เฉพาะเอกสารค่าใช้จ่าย)
     *
     * @return $this
     */
    public function setPaymentCharge($payment_charge)
    {
        $this->container['payment_charge'] = $payment_charge;

        return $this;
    }

    /**
     * Gets payment_method
     *
     * @return int
     */
    public function getPaymentMethod()
    {
        return $this->container['payment_method'];
    }

    /**
     * Sets payment_method
     *
     * @param int $payment_method ประเภทการเก็บเงิน <br> 1 = เงินสด <br> 3 = เช็ค <br> 5 = โอนเงิน <br> 7 = บัตรเครดิต
     *
     * @return $this
     */
    public function setPaymentMethod($payment_method)
    {
        $this->container['payment_method'] = $payment_method;

        return $this;
    }

    /**
     * Gets transfer_bank_account_id
     *
     * @return int|null
     */
    public function getTransferBankAccountId()
    {
        return $this->container['transfer_bank_account_id'];
    }

    /**
     * Sets transfer_bank_account_id
     *
     * @param int|null $transfer_bank_account_id ธนาคารที่ใช้รับชำระเงิน ธนาคารที่ชำระเงิน
     *
     * @return $this
     */
    public function setTransferBankAccountId($transfer_bank_account_id)
    {
        $this->container['transfer_bank_account_id'] = $transfer_bank_account_id;

        return $this;
    }

    /**
     * Gets bank_account_id
     *
     * @return int|null
     */
    public function getBankAccountId()
    {
        return $this->container['bank_account_id'];
    }

    /**
     * Sets bank_account_id
     *
     * @param int|null $bank_account_id บัญชีธนาคารที่ใช้รับชำระเงิน <br> <ex>Example: 1012013014</ex>
     *
     * @return $this
     */
    public function setBankAccountId($bank_account_id)
    {
        $this->container['bank_account_id'] = $bank_account_id;

        return $this;
    }

    /**
     * Gets cheque_date
     *
     * @return \DateTime|null
     */
    public function getChequeDate()
    {
        return $this->container['cheque_date'];
    }

    /**
     * Sets cheque_date
     *
     * @param \DateTime|null $cheque_date วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
     *
     * @return $this
     */
    public function setChequeDate($cheque_date)
    {
        $this->container['cheque_date'] = $cheque_date;

        return $this;
    }

    /**
     * Gets cheque_number
     *
     * @return string|null
     */
    public function getChequeNumber()
    {
        return $this->container['cheque_number'];
    }

    /**
     * Sets cheque_number
     *
     * @param string|null $cheque_number เลขที่เช็คธนาคาร <br> <ex>Example: 122-122-122</ex>
     *
     * @return $this
     */
    public function setChequeNumber($cheque_number)
    {
        $this->container['cheque_number'] = $cheque_number;

        return $this;
    }

    /**
     * Gets cheque_bank_account_id
     *
     * @return int|null
     */
    public function getChequeBankAccountId()
    {
        return $this->container['cheque_bank_account_id'];
    }

    /**
     * Sets cheque_bank_account_id
     *
     * @param int|null $cheque_bank_account_id ธนาคารที่ระบุหน้าเช็ค <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย
     *
     * @return $this
     */
    public function setChequeBankAccountId($cheque_bank_account_id)
    {
        $this->container['cheque_bank_account_id'] = $cheque_bank_account_id;

        return $this;
    }

    /**
     * Gets credit_card_bank_account_id
     *
     * @return int|null
     */
    public function getCreditCardBankAccountId()
    {
        return $this->container['credit_card_bank_account_id'];
    }

    /**
     * Sets credit_card_bank_account_id
     *
     * @param int|null $credit_card_bank_account_id ธนาคารที่ชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย
     *
     * @return $this
     */
    public function setCreditCardBankAccountId($credit_card_bank_account_id)
    {
        $this->container['credit_card_bank_account_id'] = $credit_card_bank_account_id;

        return $this;
    }

    /**
     * Gets payment_remarks
     *
     * @return string|null
     */
    public function getPaymentRemarks()
    {
        return $this->container['payment_remarks'];
    }

    /**
     * Sets payment_remarks
     *
     * @param string|null $payment_remarks หมายเหตุ การรับชำระเงิน หรือ จ่ายเงิน
     *
     * @return $this
     */
    public function setPaymentRemarks($payment_remarks)
    {
        $this->container['payment_remarks'] = $payment_remarks;

        return $this;
    }

    /**
     * Gets remaining_collected_type
     *
     * @return int|null
     */
    public function getRemainingCollectedType()
    {
        return $this->container['remaining_collected_type'];
    }

    /**
     * Sets remaining_collected_type
     *
     * @param int|null $remaining_collected_type สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร
     *
     * @return $this
     */
    public function setRemainingCollectedType($remaining_collected_type)
    {
        $this->container['remaining_collected_type'] = $remaining_collected_type;

        return $this;
    }

    /**
     * Gets remaining_collected
     *
     * @return float|null
     */
    public function getRemainingCollected()
    {
        return $this->container['remaining_collected'];
    }

    /**
     * Sets remaining_collected
     *
     * @param float|null $remaining_collected จำนวน ยอดเงินขาด หรือ เงินเกิน
     *
     * @return $this
     */
    public function setRemainingCollected($remaining_collected)
    {
        $this->container['remaining_collected'] = $remaining_collected;

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


