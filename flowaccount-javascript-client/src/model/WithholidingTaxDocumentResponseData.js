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
import SimpleDocumentResponseAllOfDataCompany from './SimpleDocumentResponseAllOfDataCompany';
import WithholidingTaxItem from './WithholidingTaxItem';

/**
 * The WithholidingTaxDocumentResponseData model module.
 * @module model/WithholidingTaxDocumentResponseData
 * @version 2-oas3
 */
class WithholidingTaxDocumentResponseData {
    /**
     * Constructs a new <code>WithholidingTaxDocumentResponseData</code>.
     * @alias module:model/WithholidingTaxDocumentResponseData
     */
    constructor() { 
        
        WithholidingTaxDocumentResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WithholidingTaxDocumentResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WithholidingTaxDocumentResponseData} obj Optional instance to populate.
     * @return {module:model/WithholidingTaxDocumentResponseData} The populated <code>WithholidingTaxDocumentResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WithholidingTaxDocumentResponseData();

            if (data.hasOwnProperty('recordId')) {
                obj['recordId'] = ApiClient.convertToType(data['recordId'], 'String');
            }
            if (data.hasOwnProperty('documentId')) {
                obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
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
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], 'Number');
            }
            if (data.hasOwnProperty('textOther')) {
                obj['textOther'] = ApiClient.convertToType(data['textOther'], 'String');
            }
            if (data.hasOwnProperty('withholdingTaxItems')) {
                obj['withholdingTaxItems'] = ApiClient.convertToType(data['withholdingTaxItems'], [WithholidingTaxItem]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('totalTaxWithheld')) {
                obj['totalTaxWithheld'] = ApiClient.convertToType(data['totalTaxWithheld'], 'Number');
            }
            if (data.hasOwnProperty('taxPayment')) {
                obj['taxPayment'] = ApiClient.convertToType(data['taxPayment'], 'Number');
            }
            if (data.hasOwnProperty('taxPaymentOthers')) {
                obj['taxPaymentOthers'] = ApiClient.convertToType(data['taxPaymentOthers'], 'String');
            }
            if (data.hasOwnProperty('providentFundNumber')) {
                obj['providentFundNumber'] = ApiClient.convertToType(data['providentFundNumber'], 'String');
            }
            if (data.hasOwnProperty('providentFundAmount')) {
                obj['providentFundAmount'] = ApiClient.convertToType(data['providentFundAmount'], 'String');
            }
            if (data.hasOwnProperty('socialSecurityAmount')) {
                obj['socialSecurityAmount'] = ApiClient.convertToType(data['socialSecurityAmount'], 'String');
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
 * เลข Id เอกสารใบหัก ณ ที่จ่าย
 * @member {String} recordId
 */
WithholidingTaxDocumentResponseData.prototype['recordId'] = undefined;

/**
 * เลข Id เอกสารใบหัก ณ ที่จ่าย
 * @member {String} documentId
 */
WithholidingTaxDocumentResponseData.prototype['documentId'] = undefined;

/**
 * เลขที่เอกสารใบหัก ณ ที่จ่าย
 * @member {String} documentSerial
 */
WithholidingTaxDocumentResponseData.prototype['documentSerial'] = undefined;

/**
 * รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @member {String} contactCode
 */
WithholidingTaxDocumentResponseData.prototype['contactCode'] = undefined;

/**
 * ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @member {String} contactName
 */
WithholidingTaxDocumentResponseData.prototype['contactName'] = undefined;

/**
 * ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @member {String} contactAddress
 */
WithholidingTaxDocumentResponseData.prototype['contactAddress'] = undefined;

/**
 * เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
 * @member {String} contactTaxId
 */
WithholidingTaxDocumentResponseData.prototype['contactTaxId'] = undefined;

/**
 * สำนักงาน/สาขา
 * @member {String} contactBranch
 */
WithholidingTaxDocumentResponseData.prototype['contactBranch'] = undefined;

/**
 * ชื่อผู้ติดต่อ
 * @member {String} contactPerson
 */
WithholidingTaxDocumentResponseData.prototype['contactPerson'] = undefined;

/**
 * อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>
 * @member {String} contactEmail
 */
WithholidingTaxDocumentResponseData.prototype['contactEmail'] = undefined;

/**
 * เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
 * @member {String} contactNumber
 */
WithholidingTaxDocumentResponseData.prototype['contactNumber'] = undefined;

/**
 * รหัสไปรษณีย์ติดต่อ
 * @member {String} contactZipCode
 */
WithholidingTaxDocumentResponseData.prototype['contactZipCode'] = undefined;

/**
 * ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
 * @member {Number} contactGroup
 * @default 1
 */
WithholidingTaxDocumentResponseData.prototype['contactGroup'] = 1;

/**
 * วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} publishedOn
 */
WithholidingTaxDocumentResponseData.prototype['publishedOn'] = undefined;

/**
 * แบบฟอร์มเอกสารหัก ณ ที่จ่าย <br> ภงด 3 = 1 <br> ภงด 53 = 3 <br> ภงด 1ก = 1 <br> ภงด 1ก (พิเศษ) = 7 <br> ภงด 2 = 9 <br> ภงด 2ก = 11 <br> ภงด 3ก = 13
 * @member {Number} entity
 * @default 1
 */
WithholidingTaxDocumentResponseData.prototype['entity'] = 1;

/**
 * ระบุปีของเอกสาร เช่น 2020 (สำหรับแบบฟอร์มเอกสาร ภงด 1ก หรือ ภงด 1ก (พิเศษ) Example: 2020
 * @member {String} textOther
 */
WithholidingTaxDocumentResponseData.prototype['textOther'] = undefined;

/**
 * รายการหัก ของเอกสารหัก ณ ที่จ่าย
 * @member {Array.<module:model/WithholidingTaxItem>} withholdingTaxItems
 */
WithholidingTaxDocumentResponseData.prototype['withholdingTaxItems'] = undefined;

/**
 * จำนวนเงิน (ไม่รวมภาษี)
 * @member {Number} total
 */
WithholidingTaxDocumentResponseData.prototype['total'] = undefined;

/**
 * ภาษีที่หัก
 * @member {Number} totalTaxWithheld
 */
WithholidingTaxDocumentResponseData.prototype['totalTaxWithheld'] = undefined;

/**
 * ผู้จ่ายเงิน <br> 1 = ภาษีหัก ณ ที่จ่าย <br> 3 = ออกภาษีให้ตลอดไป <br> 5 = ออกภาษีให้ครั้งเดียว <br> 7 = อื่น ๆ
 * @member {Number} taxPayment
 * @default 1
 */
WithholidingTaxDocumentResponseData.prototype['taxPayment'] = 1;

/**
 * ข้อความ สำหรับผู้จ่ายเงิน อื่นๆ 
 * @member {String} taxPaymentOthers
 */
WithholidingTaxDocumentResponseData.prototype['taxPaymentOthers'] = undefined;

/**
 * ใบอนุญาตเลขที่
 * @member {String} providentFundNumber
 */
WithholidingTaxDocumentResponseData.prototype['providentFundNumber'] = undefined;

/**
 * จำนวนเงินที่ต้องจ่ายเข้า กองทุนสำรองเลี้ยงชีพ
 * @member {String} providentFundAmount
 */
WithholidingTaxDocumentResponseData.prototype['providentFundAmount'] = undefined;

/**
 * จำนวนเงินที่ต้องจ่ายเข้า กองทุนประกันสังคม
 * @member {String} socialSecurityAmount
 */
WithholidingTaxDocumentResponseData.prototype['socialSecurityAmount'] = undefined;

/**
 * หมายเหตุเอกสาร
 * @member {String} remarks
 */
WithholidingTaxDocumentResponseData.prototype['remarks'] = undefined;

/**
 * โน๊ตภายในบริษัท
 * @member {String} internalNotes
 */
WithholidingTaxDocumentResponseData.prototype['internalNotes'] = undefined;

/**
 * ลายเซ็นอิเล็กทรอนิกส์และตรายาง
 * @member {Boolean} showSignatureOrStamp
 * @default true
 */
WithholidingTaxDocumentResponseData.prototype['showSignatureOrStamp'] = true;

/**
 * @member {module:model/SimpleDocumentResponseAllOfDataCompany} company
 */
WithholidingTaxDocumentResponseData.prototype['company'] = undefined;

/**
 * เลขสถานะเอกสารฉบับนี้
 * @member {Number} status
 */
WithholidingTaxDocumentResponseData.prototype['status'] = undefined;

/**
 * ชื่อสถานะเอกสารฉบับนี้
 * @member {Number} statusString
 */
WithholidingTaxDocumentResponseData.prototype['statusString'] = undefined;

/**
 * เลขประเภทเอกสารฉบับนี้
 * @member {Number} documentType
 */
WithholidingTaxDocumentResponseData.prototype['documentType'] = undefined;

/**
 * สามารถลบเอกสาร :<br> true = ลบได้ <br> false = ลบไม่ได้
 * @member {Boolean} allowDelete
 */
WithholidingTaxDocumentResponseData.prototype['allowDelete'] = undefined;






export default WithholidingTaxDocumentResponseData;

