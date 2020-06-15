/**
 * FlowAccount Open API
 * # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer_support@flowaccount.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SimpleDocumentResponseAllOfDataPayments model module.
 * @module model/SimpleDocumentResponseAllOfDataPayments
 * @version 2-oas3
 */
class SimpleDocumentResponseAllOfDataPayments {
    /**
     * Constructs a new <code>SimpleDocumentResponseAllOfDataPayments</code>.
     * ข้อมูลการเก็บเงินและจ่ายเงินของเอกสาร &lt;br&gt; ข้อมูลการเก็บเงิน: &lt;br&gt;1. ใบกำกับภาษี/ใบเสร็จรับเงิน (Tax Invoice) &lt;br&gt; 2. ใบเสร็จรับเงิน (Receipt) &lt;br&gt; 3. ใบกำกับภาษี/ใบเสร็จรับเงิน (Cash Invoice) &lt;br&gt; ข้อมูลการจ่ายเงิน: &lt;br&gt;1. เอกสารใบรับสินค้า (Receiving Inventory)
     * @alias module:model/SimpleDocumentResponseAllOfDataPayments
     */
    constructor() { 
        
        SimpleDocumentResponseAllOfDataPayments.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SimpleDocumentResponseAllOfDataPayments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleDocumentResponseAllOfDataPayments} obj Optional instance to populate.
     * @return {module:model/SimpleDocumentResponseAllOfDataPayments} The populated <code>SimpleDocumentResponseAllOfDataPayments</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleDocumentResponseAllOfDataPayments();

            if (data.hasOwnProperty('paymentDate')) {
                obj['paymentDate'] = ApiClient.convertToType(data['paymentDate'], 'Date');
            }
            if (data.hasOwnProperty('collected')) {
                obj['collected'] = ApiClient.convertToType(data['collected'], 'Number');
            }
            if (data.hasOwnProperty('paymentDeductionType')) {
                obj['paymentDeductionType'] = ApiClient.convertToType(data['paymentDeductionType'], 'Number');
            }
            if (data.hasOwnProperty('paymentDeductionAmount')) {
                obj['paymentDeductionAmount'] = ApiClient.convertToType(data['paymentDeductionAmount'], 'Number');
            }
            if (data.hasOwnProperty('withheldPercentage')) {
                obj['withheldPercentage'] = ApiClient.convertToType(data['withheldPercentage'], 'Number');
            }
            if (data.hasOwnProperty('withheldAmount')) {
                obj['withheldAmount'] = ApiClient.convertToType(data['withheldAmount'], 'Number');
            }
            if (data.hasOwnProperty('paymentCharge')) {
                obj['paymentCharge'] = ApiClient.convertToType(data['paymentCharge'], 'Number');
            }
            if (data.hasOwnProperty('paymentMethod')) {
                obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'Number');
            }
            if (data.hasOwnProperty('paymentChannel')) {
                obj['paymentChannel'] = ApiClient.convertToType(data['paymentChannel'], 'String');
            }
            if (data.hasOwnProperty('bankAccountType')) {
                obj['bankAccountType'] = ApiClient.convertToType(data['bankAccountType'], 'Number');
            }
            if (data.hasOwnProperty('bankAccountName')) {
                obj['bankAccountName'] = ApiClient.convertToType(data['bankAccountName'], 'String');
            }
            if (data.hasOwnProperty('bankAccountNumber')) {
                obj['bankAccountNumber'] = ApiClient.convertToType(data['bankAccountNumber'], 'String');
            }
            if (data.hasOwnProperty('chequeDate')) {
                obj['chequeDate'] = ApiClient.convertToType(data['chequeDate'], 'Date');
            }
            if (data.hasOwnProperty('chequeNumber')) {
                obj['chequeNumber'] = ApiClient.convertToType(data['chequeNumber'], 'String');
            }
            if (data.hasOwnProperty('creditCardBankAccountId')) {
                obj['creditCardBankAccountId'] = ApiClient.convertToType(data['creditCardBankAccountId'], 'Number');
            }
            if (data.hasOwnProperty('paymentRemarks')) {
                obj['paymentRemarks'] = ApiClient.convertToType(data['paymentRemarks'], 'String');
            }
            if (data.hasOwnProperty('remainingCollectedType')) {
                obj['remainingCollectedType'] = ApiClient.convertToType(data['remainingCollectedType'], 'Number');
            }
            if (data.hasOwnProperty('remainingCollected')) {
                obj['remainingCollected'] = ApiClient.convertToType(data['remainingCollected'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * วันที่รับชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} paymentDate
 */
SimpleDocumentResponseAllOfDataPayments.prototype['paymentDate'] = undefined;

/**
 * จำนวนเงินยอดรับสุทธิ
 * @member {Number} collected
 * @default 0
 */
SimpleDocumentResponseAllOfDataPayments.prototype['collected'] = 0;

/**
 * ประเภทรายการปรับลด: <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
 * @member {Number} paymentDeductionType
 * @default 0
 */
SimpleDocumentResponseAllOfDataPayments.prototype['paymentDeductionType'] = 0;

/**
 * จำนวนเงินยอดรายการปรับลด <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
 * @member {Number} paymentDeductionAmount
 * @default 0
 */
SimpleDocumentResponseAllOfDataPayments.prototype['paymentDeductionAmount'] = 0;

/**
 * เปอร์เซ็น หัก ณ ที่จ่าย
 * @member {Number} withheldPercentage
 * @default 0
 */
SimpleDocumentResponseAllOfDataPayments.prototype['withheldPercentage'] = 0;

/**
 * จำนวน ยอดหัก ณ ที่จ่าย
 * @member {Number} withheldAmount
 * @default 0
 */
SimpleDocumentResponseAllOfDataPayments.prototype['withheldAmount'] = 0;

/**
 * ค่าธรรมเนียม ที่ชำระโดยการโอนเงิน หรือ เช็ค <br> (เฉพาะเอกสารค่าใช้จ่าย)
 * @member {Number} paymentCharge
 * @default 0
 */
SimpleDocumentResponseAllOfDataPayments.prototype['paymentCharge'] = 0;

/**
 * วิธีการชำระ: <br> 1 = เงินสด <br> 3 = เช็ค <br> 5 = โอนเงิน <br> 7 = เครดิต
 * @member {Number} paymentMethod
 * @default 0
 */
SimpleDocumentResponseAllOfDataPayments.prototype['paymentMethod'] = 0;

/**
 * ช่องทางการชำระเงิน: <br> - เงินสด (Cash) <br> - โอนเงิน (Transfer) - ชื่อธนาคาร (Bank Name) <br> - เช็ค (Cheque) <br> - บัตรเครดิต (Credit card)
 * @member {String} paymentChannel
 */
SimpleDocumentResponseAllOfDataPayments.prototype['paymentChannel'] = undefined;

/**
 * ประเภทบัญชีธนาคาร: <br> 1 = ออมทรัพย์ <br> 3 = กระแสรายวัน <br> 7 = ฝากประจำ
 * @member {Number} bankAccountType
 */
SimpleDocumentResponseAllOfDataPayments.prototype['bankAccountType'] = undefined;

/**
 * ชื่อธนาคาร
 * @member {String} bankAccountName
 */
SimpleDocumentResponseAllOfDataPayments.prototype['bankAccountName'] = undefined;

/**
 * เลขที่ธนาคาร / บัตรเคดิต
 * @member {String} bankAccountNumber
 */
SimpleDocumentResponseAllOfDataPayments.prototype['bankAccountNumber'] = undefined;

/**
 * วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} chequeDate
 */
SimpleDocumentResponseAllOfDataPayments.prototype['chequeDate'] = undefined;

/**
 * เลขที่เช็คธนาคาร
 * @member {String} chequeNumber
 */
SimpleDocumentResponseAllOfDataPayments.prototype['chequeNumber'] = undefined;

/**
 * ธนาคารที่ชำระด้วยบัตรเครดิต <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
 * @member {Number} creditCardBankAccountId
 * @default 0
 */
SimpleDocumentResponseAllOfDataPayments.prototype['creditCardBankAccountId'] = 0;

/**
 * หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน
 * @member {String} paymentRemarks
 */
SimpleDocumentResponseAllOfDataPayments.prototype['paymentRemarks'] = undefined;

/**
 * สาเหตุเงินขาดเงินเกิน: <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร 
 * @member {Number} remainingCollectedType
 * @default 0
 */
SimpleDocumentResponseAllOfDataPayments.prototype['remainingCollectedType'] = 0;

/**
 * จำนวน ยอดเงินขาด หรือ เงินเกิน
 * @member {Number} remainingCollected
 * @default 0
 */
SimpleDocumentResponseAllOfDataPayments.prototype['remainingCollected'] = 0;






export default SimpleDocumentResponseAllOfDataPayments;

