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
import ExpenseSimpleProductItem from './ExpenseSimpleProductItem';
import SimpleDocumentResponseAllOfDataCompany from './SimpleDocumentResponseAllOfDataCompany';
import SimpleDocumentResponseAllOfDataPayments from './SimpleDocumentResponseAllOfDataPayments';

/**
 * The ExpenseSimpleDocumentResponseAllOfData model module.
 * @module model/ExpenseSimpleDocumentResponseAllOfData
 * @version 2-oas3
 */
class ExpenseSimpleDocumentResponseAllOfData {
    /**
     * Constructs a new <code>ExpenseSimpleDocumentResponseAllOfData</code>.
     * @alias module:model/ExpenseSimpleDocumentResponseAllOfData
     */
    constructor() { 
        
        ExpenseSimpleDocumentResponseAllOfData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExpenseSimpleDocumentResponseAllOfData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExpenseSimpleDocumentResponseAllOfData} obj Optional instance to populate.
     * @return {module:model/ExpenseSimpleDocumentResponseAllOfData} The populated <code>ExpenseSimpleDocumentResponseAllOfData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExpenseSimpleDocumentResponseAllOfData();

            if (data.hasOwnProperty('recordId')) {
                obj['recordId'] = ApiClient.convertToType(data['recordId'], 'Number');
            }
            if (data.hasOwnProperty('documentId')) {
                obj['documentId'] = ApiClient.convertToType(data['documentId'], 'Number');
            }
            if (data.hasOwnProperty('documentSerial')) {
                obj['documentSerial'] = ApiClient.convertToType(data['documentSerial'], 'String');
            }
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
                obj['items'] = ApiClient.convertToType(data['items'], [ExpenseSimpleProductItem]);
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
            if (data.hasOwnProperty('remarks')) {
                obj['remarks'] = ApiClient.convertToType(data['remarks'], 'String');
            }
            if (data.hasOwnProperty('internalNotes')) {
                obj['internalNotes'] = ApiClient.convertToType(data['internalNotes'], 'String');
            }
            if (data.hasOwnProperty('showSignatureOrStamp')) {
                obj['showSignatureOrStamp'] = ApiClient.convertToType(data['showSignatureOrStamp'], 'Boolean');
            }
            if (data.hasOwnProperty('payments')) {
                obj['payments'] = SimpleDocumentResponseAllOfDataPayments.constructFromObject(data['payments']);
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = SimpleDocumentResponseAllOfDataCompany.constructFromObject(data['company']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('statusString')) {
                obj['statusString'] = ApiClient.convertToType(data['statusString'], 'Number');
            }
            if (data.hasOwnProperty('documentType')) {
                obj['documentType'] = ApiClient.convertToType(data['documentType'], 'Number');
            }
            if (data.hasOwnProperty('allowDelete')) {
                obj['allowDelete'] = ApiClient.convertToType(data['allowDelete'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * id ของเอกสาร
 * @member {Number} recordId
 * @default 0
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['recordId'] = 0;

/**
 * id ของเอกสาร
 * @member {Number} documentId
 * @default 0
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['documentId'] = 0;

/**
 * เลขที่เอกสาร
 * @member {String} documentSerial
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['documentSerial'] = undefined;

/**
 * รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @member {String} contactCode
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['contactCode'] = undefined;

/**
 * ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @member {String} contactName
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['contactName'] = undefined;

/**
 * ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @member {String} contactAddress
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['contactAddress'] = undefined;

/**
 * เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
 * @member {String} contactTaxId
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['contactTaxId'] = undefined;

/**
 * สำนักงาน/สาขา
 * @member {String} contactBranch
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['contactBranch'] = undefined;

/**
 * ชื่อผู้ติดต่อ
 * @member {String} contactPerson
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['contactPerson'] = undefined;

/**
 * อีเมลผู้ติดต่อ <br> <ex>Example: supplier@email.com</ex>
 * @member {String} contactEmail
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['contactEmail'] = undefined;

/**
 * เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
 * @member {String} contactNumber
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['contactNumber'] = undefined;

/**
 * รหัสไปรษณีย์ติดต่อ
 * @member {String} contactZipCode
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['contactZipCode'] = undefined;

/**
 * ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
 * @member {Number} contactGroup
 * @default 1
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['contactGroup'] = 1;

/**
 * วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} publishedOn
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['publishedOn'] = undefined;

/**
 * รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด)
 * @member {Number} creditType
 * @default 1
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['creditType'] = 1;

/**
 * จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex>
 * @member {Number} creditDays
 * @default 0
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['creditDays'] = 0;

/**
 * วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} dueDate
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['dueDate'] = undefined;

/**
 * ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex>
 * @member {String} salesName
 * @default 'อีเมล หรือ ชื่อผู้สร้างเอกสาร'
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['salesName'] = 'อีเมล หรือ ชื่อผู้สร้างเอกสาร';

/**
 * ชื่อโปรเจค
 * @member {String} projectName
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['projectName'] = undefined;

/**
 * เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex>
 * @member {String} reference
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['reference'] = undefined;

/**
 * มูลค่าเอกสารรวมภาษีแล้วหรือไม่
 * @member {Boolean} isVatInclusive
 * @default false
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['isVatInclusive'] = false;

/**
 * รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense
 * @member {Array.<module:model/ExpenseSimpleProductItem>} items
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['items'] = undefined;

/**
 * มูลค่ารวมเป็นเงิน
 * @member {Number} subTotal
 * @default 0
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['subTotal'] = 0;

/**
 * มูลค่าส่วนลดเป็นเปอร์เซ็นต์
 * @member {Number} discountPercentage
 * @default 0
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['discountPercentage'] = 0;

/**
 * มูลค่าส่วนลดเป็นจำนวน (บาท)
 * @member {Number} discountAmount
 * @default 0
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['discountAmount'] = 0;

/**
 * มูลค่าหลังหักส่วนลด
 * @member {Number} totalAfterDiscount
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['totalAfterDiscount'] = undefined;

/**
 * มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7%
 * @member {Boolean} isVat
 * @default false
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['isVat'] = false;

/**
 * ภาษีมูลค่าเพิ่ม
 * @member {Number} vatAmount
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['vatAmount'] = undefined;

/**
 * จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
 * @member {Number} grandTotal
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['grandTotal'] = undefined;

/**
 * หมายเหตุเอกสาร
 * @member {String} remarks
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['remarks'] = undefined;

/**
 * โน๊ตภายในบริษัท
 * @member {String} internalNotes
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['internalNotes'] = undefined;

/**
 * ลายเซ็นอิเล็กทรอนิกส์และตรายาง
 * @member {Boolean} showSignatureOrStamp
 * @default true
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['showSignatureOrStamp'] = true;

/**
 * @member {module:model/SimpleDocumentResponseAllOfDataPayments} payments
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['payments'] = undefined;

/**
 * @member {module:model/SimpleDocumentResponseAllOfDataCompany} company
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['company'] = undefined;

/**
 * เลขสถานะเอกสารฉบับนี้
 * @member {Number} status
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['status'] = undefined;

/**
 * ชื่อสถานะเอกสารฉบับนี้
 * @member {Number} statusString
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['statusString'] = undefined;

/**
 * เลขประเภทเอกสารฉบับนี้
 * @member {Number} documentType
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['documentType'] = undefined;

/**
 * สามารถลบเอกสาร :<br> true = ลบได้ <br> false = ลบไม่ได้
 * @member {Boolean} allowDelete
 */
ExpenseSimpleDocumentResponseAllOfData.prototype['allowDelete'] = undefined;






export default ExpenseSimpleDocumentResponseAllOfData;

