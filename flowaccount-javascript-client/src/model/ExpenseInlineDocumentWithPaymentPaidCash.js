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
import ExpenseInlineProductItem from './ExpenseInlineProductItem';

/**
 * The ExpenseInlineDocumentWithPaymentPaidCash model module.
 * @module model/ExpenseInlineDocumentWithPaymentPaidCash
 * @version 2-oas3
 */
class ExpenseInlineDocumentWithPaymentPaidCash {
    /**
     * Constructs a new <code>ExpenseInlineDocumentWithPaymentPaidCash</code>.
     * @alias module:model/ExpenseInlineDocumentWithPaymentPaidCash
     * @param contactName {String} ชื่อ ลูกค้า/ผู้จำหน่าย <br> <ex>Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ</ex>
     * @param publishedOn {Date} วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
     * @param dueDate {Date} วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
     * @param totalAfterDiscount {Number} มูลค่าหลังหักส่วนลด
     * @param grandTotal {Number} จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
     * @param expensePaymentStructureType {String} สร้างเอกสารแบบ Simple พร้อมชำระเงิน ด้วยเงินสด
     * @param paymentMethod {Number} ประเภทการชำระเงิน <br> 1 = เงินสด
     * @param paymentDate {Date} วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
     * @param collected {Number} จำนวนเงินยอดจ่ายสุทธิ <br> <ex> Example : 100.00 </ex>
     */
    constructor(contactName, publishedOn, dueDate, totalAfterDiscount, grandTotal, expensePaymentStructureType, paymentMethod, paymentDate, collected) { 
        
        ExpenseInlineDocumentWithPaymentPaidCash.initialize(this, contactName, publishedOn, dueDate, totalAfterDiscount, grandTotal, expensePaymentStructureType, paymentMethod, paymentDate, collected);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contactName, publishedOn, dueDate, totalAfterDiscount, grandTotal, expensePaymentStructureType, paymentMethod, paymentDate, collected) { 
        obj['contactName'] = contactName;
        obj['publishedOn'] = publishedOn;
        obj['dueDate'] = dueDate;
        obj['totalAfterDiscount'] = totalAfterDiscount;
        obj['grandTotal'] = grandTotal;
        obj['expensePaymentStructureType'] = expensePaymentStructureType;
        obj['paymentMethod'] = paymentMethod;
        obj['paymentDate'] = paymentDate;
        obj['collected'] = collected;
    }

    /**
     * Constructs a <code>ExpenseInlineDocumentWithPaymentPaidCash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExpenseInlineDocumentWithPaymentPaidCash} obj Optional instance to populate.
     * @return {module:model/ExpenseInlineDocumentWithPaymentPaidCash} The populated <code>ExpenseInlineDocumentWithPaymentPaidCash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExpenseInlineDocumentWithPaymentPaidCash();

            if (data.hasOwnProperty('contactCode')) {
                obj['contactCode'] = ApiClient.convertToType(data['contactCode'], 'String');
            }
            if (data.hasOwnProperty('contactName')) {
                obj['contactName'] = ApiClient.convertToType(data['contactName'], 'String');
            }
            if (data.hasOwnProperty('contactAddress')) {
                obj['contactAddress'] = ApiClient.convertToType(data['contactAddress'], 'String');
            }
            if (data.hasOwnProperty('contactTaxId')) {
                obj['contactTaxId'] = ApiClient.convertToType(data['contactTaxId'], 'String');
            }
            if (data.hasOwnProperty('contactBranch')) {
                obj['contactBranch'] = ApiClient.convertToType(data['contactBranch'], 'String');
            }
            if (data.hasOwnProperty('contactPerson')) {
                obj['contactPerson'] = ApiClient.convertToType(data['contactPerson'], 'String');
            }
            if (data.hasOwnProperty('contactEmail')) {
                obj['contactEmail'] = ApiClient.convertToType(data['contactEmail'], 'String');
            }
            if (data.hasOwnProperty('contactNumber')) {
                obj['contactNumber'] = ApiClient.convertToType(data['contactNumber'], 'String');
            }
            if (data.hasOwnProperty('contactZipCode')) {
                obj['contactZipCode'] = ApiClient.convertToType(data['contactZipCode'], 'String');
            }
            if (data.hasOwnProperty('contactGroup')) {
                obj['contactGroup'] = ApiClient.convertToType(data['contactGroup'], 'Number');
            }
            if (data.hasOwnProperty('publishedOn')) {
                obj['publishedOn'] = ApiClient.convertToType(data['publishedOn'], 'Date');
            }
            if (data.hasOwnProperty('creditType')) {
                obj['creditType'] = ApiClient.convertToType(data['creditType'], 'Number');
            }
            if (data.hasOwnProperty('creditDays')) {
                obj['creditDays'] = ApiClient.convertToType(data['creditDays'], 'Number');
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
            }
            if (data.hasOwnProperty('salesName')) {
                obj['salesName'] = ApiClient.convertToType(data['salesName'], 'String');
            }
            if (data.hasOwnProperty('projectName')) {
                obj['projectName'] = ApiClient.convertToType(data['projectName'], 'String');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('isVatInclusive')) {
                obj['isVatInclusive'] = ApiClient.convertToType(data['isVatInclusive'], 'Boolean');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ExpenseInlineProductItem]);
            }
            if (data.hasOwnProperty('subTotal')) {
                obj['subTotal'] = ApiClient.convertToType(data['subTotal'], 'Number');
            }
            if (data.hasOwnProperty('discountPercentage')) {
                obj['discountPercentage'] = ApiClient.convertToType(data['discountPercentage'], 'Number');
            }
            if (data.hasOwnProperty('discountAmount')) {
                obj['discountAmount'] = ApiClient.convertToType(data['discountAmount'], 'Number');
            }
            if (data.hasOwnProperty('totalAfterDiscount')) {
                obj['totalAfterDiscount'] = ApiClient.convertToType(data['totalAfterDiscount'], 'Number');
            }
            if (data.hasOwnProperty('isVat')) {
                obj['isVat'] = ApiClient.convertToType(data['isVat'], 'Boolean');
            }
            if (data.hasOwnProperty('vatAmount')) {
                obj['vatAmount'] = ApiClient.convertToType(data['vatAmount'], 'Number');
            }
            if (data.hasOwnProperty('grandTotal')) {
                obj['grandTotal'] = ApiClient.convertToType(data['grandTotal'], 'Number');
            }
            if (data.hasOwnProperty('discountType')) {
                obj['discountType'] = ApiClient.convertToType(data['discountType'], 'Number');
            }
            if (data.hasOwnProperty('useInlineDiscount')) {
                obj['useInlineDiscount'] = ApiClient.convertToType(data['useInlineDiscount'], 'Boolean');
            }
            if (data.hasOwnProperty('useInlineVat')) {
                obj['useInlineVat'] = ApiClient.convertToType(data['useInlineVat'], 'Boolean');
            }
            if (data.hasOwnProperty('exemptAmount')) {
                obj['exemptAmount'] = ApiClient.convertToType(data['exemptAmount'], 'Number');
            }
            if (data.hasOwnProperty('remarks')) {
                obj['remarks'] = ApiClient.convertToType(data['remarks'], 'String');
            }
            if (data.hasOwnProperty('internalNotes')) {
                obj['internalNotes'] = ApiClient.convertToType(data['internalNotes'], 'String');
            }
            if (data.hasOwnProperty('showSignatureOrStamp')) {
                obj['showSignatureOrStamp'] = ApiClient.convertToType(data['showSignatureOrStamp'], 'Boolean');
            }
            if (data.hasOwnProperty('expensePaymentStructureType')) {
                obj['expensePaymentStructureType'] = ApiClient.convertToType(data['expensePaymentStructureType'], 'String');
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
 * รหัส ลูกค้า/ผู้จำหน่าย
 * @member {String} contactCode
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['contactCode'] = undefined;

/**
 * ชื่อ ลูกค้า/ผู้จำหน่าย <br> <ex>Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ</ex>
 * @member {String} contactName
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['contactName'] = undefined;

/**
 * ที่อยู่ ลูกค้า/ผู้จำหน่าย
 * @member {String} contactAddress
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['contactAddress'] = undefined;

/**
 * เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
 * @member {String} contactTaxId
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['contactTaxId'] = undefined;

/**
 * สำนักงาน/สาขา
 * @member {String} contactBranch
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['contactBranch'] = undefined;

/**
 * ชื่อผู้ติดต่อ
 * @member {String} contactPerson
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['contactPerson'] = undefined;

/**
 * อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>
 * @member {String} contactEmail
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['contactEmail'] = undefined;

/**
 * เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
 * @member {String} contactNumber
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['contactNumber'] = undefined;

/**
 * รหัสไปรษณีย์ติดต่อ
 * @member {String} contactZipCode
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['contactZipCode'] = undefined;

/**
 * ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
 * @member {Number} contactGroup
 * @default 1
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['contactGroup'] = 1;

/**
 * วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} publishedOn
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['publishedOn'] = undefined;

/**
 * รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด)
 * @member {Number} creditType
 * @default 1
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['creditType'] = 1;

/**
 * จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex>
 * @member {Number} creditDays
 * @default 0
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['creditDays'] = 0;

/**
 * วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} dueDate
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['dueDate'] = undefined;

/**
 * ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex>
 * @member {String} salesName
 * @default 'อีเมล หรือ ชื่อผู้สร้างเอกสาร'
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['salesName'] = 'อีเมล หรือ ชื่อผู้สร้างเอกสาร';

/**
 * ชื่อโปรเจค
 * @member {String} projectName
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['projectName'] = undefined;

/**
 * เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex>
 * @member {String} reference
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['reference'] = undefined;

/**
 * มูลค่าเอกสารรวมภาษีแล้วหรือไม่
 * @member {Boolean} isVatInclusive
 * @default false
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['isVatInclusive'] = false;

/**
 * รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense
 * @member {Array.<module:model/ExpenseInlineProductItem>} items
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['items'] = undefined;

/**
 * มูลค่ารวมเป็นเงิน
 * @member {Number} subTotal
 * @default 0
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['subTotal'] = 0;

/**
 * มูลค่าส่วนลดเป็นเปอร์เซ็นต์
 * @member {Number} discountPercentage
 * @default 0
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['discountPercentage'] = 0;

/**
 * มูลค่าส่วนลดเป็นจำนวน (บาท)
 * @member {Number} discountAmount
 * @default 0
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['discountAmount'] = 0;

/**
 * มูลค่าหลังหักส่วนลด
 * @member {Number} totalAfterDiscount
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['totalAfterDiscount'] = undefined;

/**
 * มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7%
 * @member {Boolean} isVat
 * @default false
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['isVat'] = false;

/**
 * ภาษีมูลค่าเพิ่ม
 * @member {Number} vatAmount
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['vatAmount'] = undefined;

/**
 * จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
 * @member {Number} grandTotal
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['grandTotal'] = undefined;

/**
 * รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า <br> สามารถเลือกรูปแบบส่วนลดได้ <br> 1 =  เปอร์เซ็นต์ <br> 3 = จำนวน (บาท)
 * @member {Number} discountType
 * @default 1
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['discountType'] = 1;

/**
 * inline discount ใช้งานส่วนลด แยกตามรายการสินค้า
 * @member {Boolean} useInlineDiscount
 * @default true
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['useInlineDiscount'] = true;

/**
 * inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า
 * @member {Boolean} useInlineVat
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['useInlineVat'] = undefined;

/**
 * ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม
 * @member {Number} exemptAmount
 * @default 0
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['exemptAmount'] = 0;

/**
 * หมายเหตุเอกสาร
 * @member {String} remarks
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['remarks'] = undefined;

/**
 * โน๊ตภายในบริษัท
 * @member {String} internalNotes
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['internalNotes'] = undefined;

/**
 * ลายเซ็นอิเล็กทรอนิกส์และตรายาง
 * @member {Boolean} showSignatureOrStamp
 * @default true
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['showSignatureOrStamp'] = true;

/**
 * สร้างเอกสารแบบ Simple พร้อมชำระเงิน ด้วยเงินสด
 * @member {String} expensePaymentStructureType
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['expensePaymentStructureType'] = undefined;

/**
 * ประเภทการชำระเงิน <br> 1 = เงินสด
 * @member {Number} paymentMethod
 * @default 1
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['paymentMethod'] = 1;

/**
 * วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} paymentDate
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['paymentDate'] = undefined;

/**
 * จำนวนเงินยอดจ่ายสุทธิ <br> <ex> Example : 100.00 </ex>
 * @member {Number} collected
 * @default 0
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['collected'] = 0;

/**
 * เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>
 * @member {Number} withheldPercentage
 * @default 0
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['withheldPercentage'] = 0;

/**
 * จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>
 * @member {Number} withheldAmount
 * @default 0
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['withheldAmount'] = 0;

/**
 * หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน
 * @member {String} paymentRemarks
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['paymentRemarks'] = undefined;

/**
 * สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร 
 * @member {Number} remainingCollectedType
 * @default 0
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['remainingCollectedType'] = 0;

/**
 * จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex>
 * @member {Number} remainingCollected
 * @default 0
 */
ExpenseInlineDocumentWithPaymentPaidCash.prototype['remainingCollected'] = 0;






export default ExpenseInlineDocumentWithPaymentPaidCash;

