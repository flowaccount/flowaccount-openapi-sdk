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
 * The PaymentPaidCheque model module.
 * @module model/PaymentPaidCheque
 * @version 2-oas3
 */
class PaymentPaidCheque {
    /**
     * Constructs a new <code>PaymentPaidCheque</code>.
     * @alias module:model/PaymentPaidCheque
     * @param paymentStructureType {String} ชำระเงิน ด้วยเช็ค
     * @param documentId {Number} id เอกสาร
     * @param paymentMethod {Number} ประเภทการชำระเงิน <br> 3 = เช็ค
     * @param paymentDate {Date} วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
     * @param collected {Number} จำนวนเงินยอดจ่ายสุทธิ <br> <ex> Example : 100.00 </ex>
     */
    constructor(paymentStructureType, documentId, paymentMethod, paymentDate, collected) { 
        
        PaymentPaidCheque.initialize(this, paymentStructureType, documentId, paymentMethod, paymentDate, collected);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, paymentStructureType, documentId, paymentMethod, paymentDate, collected) { 
        obj['paymentStructureType'] = paymentStructureType;
        obj['documentId'] = documentId;
        obj['paymentMethod'] = paymentMethod;
        obj['paymentDate'] = paymentDate;
        obj['collected'] = collected;
    }

    /**
     * Constructs a <code>PaymentPaidCheque</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentPaidCheque} obj Optional instance to populate.
     * @return {module:model/PaymentPaidCheque} The populated <code>PaymentPaidCheque</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentPaidCheque();

            if (data.hasOwnProperty('paymentStructureType')) {
                obj['paymentStructureType'] = ApiClient.convertToType(data['paymentStructureType'], 'String');
            }
            if (data.hasOwnProperty('documentId')) {
                obj['documentId'] = ApiClient.convertToType(data['documentId'], 'Number');
            }
            if (data.hasOwnProperty('paymentMethod')) {
                obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'Number');
            }
            if (data.hasOwnProperty('paymentDate')) {
                obj['paymentDate'] = ApiClient.convertToType(data['paymentDate'], 'Date');
            }
            if (data.hasOwnProperty('collected')) {
                obj['collected'] = ApiClient.convertToType(data['collected'], 'Number');
            }
            if (data.hasOwnProperty('withheldPercentage')) {
                obj['withheldPercentage'] = ApiClient.convertToType(data['withheldPercentage'], 'Number');
            }
            if (data.hasOwnProperty('withheldAmount')) {
                obj['withheldAmount'] = ApiClient.convertToType(data['withheldAmount'], 'Number');
            }
            if (data.hasOwnProperty('chequeDate')) {
                obj['chequeDate'] = ApiClient.convertToType(data['chequeDate'], 'Date');
            }
            if (data.hasOwnProperty('chequeNumber')) {
                obj['chequeNumber'] = ApiClient.convertToType(data['chequeNumber'], 'String');
            }
            if (data.hasOwnProperty('chequeBankAccountId')) {
                obj['chequeBankAccountId'] = ApiClient.convertToType(data['chequeBankAccountId'], 'Number');
            }
            if (data.hasOwnProperty('bankAccountId')) {
                obj['bankAccountId'] = ApiClient.convertToType(data['bankAccountId'], 'Number');
            }
            if (data.hasOwnProperty('paymentCharge')) {
                obj['paymentCharge'] = ApiClient.convertToType(data['paymentCharge'], 'Number');
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
 * ชำระเงิน ด้วยเช็ค
 * @member {String} paymentStructureType
 */
PaymentPaidCheque.prototype['paymentStructureType'] = undefined;

/**
 * id เอกสาร
 * @member {Number} documentId
 */
PaymentPaidCheque.prototype['documentId'] = undefined;

/**
 * ประเภทการชำระเงิน <br> 3 = เช็ค
 * @member {Number} paymentMethod
 * @default 1
 */
PaymentPaidCheque.prototype['paymentMethod'] = 1;

/**
 * วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} paymentDate
 */
PaymentPaidCheque.prototype['paymentDate'] = undefined;

/**
 * จำนวนเงินยอดจ่ายสุทธิ <br> <ex> Example : 100.00 </ex>
 * @member {Number} collected
 * @default 0
 */
PaymentPaidCheque.prototype['collected'] = 0;

/**
 * เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>
 * @member {Number} withheldPercentage
 * @default 0
 */
PaymentPaidCheque.prototype['withheldPercentage'] = 0;

/**
 * จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>
 * @member {Number} withheldAmount
 * @default 0
 */
PaymentPaidCheque.prototype['withheldAmount'] = 0;

/**
 * วันที่หน้าเช็ค รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} chequeDate
 */
PaymentPaidCheque.prototype['chequeDate'] = undefined;

/**
 * เลขที่เช็คธนาคาร <br> <ex>Example: 122-122-122</ex>
 * @member {String} chequeNumber
 */
PaymentPaidCheque.prototype['chequeNumber'] = undefined;

/**
 * ธนาคารที่ระบุหน้าเช็ค <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
 * @member {Number} chequeBankAccountId
 * @default 0
 */
PaymentPaidCheque.prototype['chequeBankAccountId'] = 0;

/**
 * เลข id บัญชีธนาคารที่ใช้ชำระเงิน <br><red>สามารถ GET มาได้จาก My Company > Bank Account </red><br> <ex>Example: 12345</ex>
 * @member {Number} bankAccountId
 * @default 0
 */
PaymentPaidCheque.prototype['bankAccountId'] = 0;

/**
 * ค่าธรรมเนียม ที่ชำระโดยเช็ค <br> <ex> Example : 100.00 </ex>
 * @member {Number} paymentCharge
 * @default 0
 */
PaymentPaidCheque.prototype['paymentCharge'] = 0;

/**
 * หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน
 * @member {String} paymentRemarks
 */
PaymentPaidCheque.prototype['paymentRemarks'] = undefined;

/**
 * สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร 
 * @member {Number} remainingCollectedType
 * @default 0
 */
PaymentPaidCheque.prototype['remainingCollectedType'] = 0;

/**
 * จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex>
 * @member {Number} remainingCollected
 * @default 0
 */
PaymentPaidCheque.prototype['remainingCollected'] = 0;






export default PaymentPaidCheque;

