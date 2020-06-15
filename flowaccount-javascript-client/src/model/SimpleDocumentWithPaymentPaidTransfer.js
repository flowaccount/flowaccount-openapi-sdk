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
import SimpleProductItem from './SimpleProductItem';
import UpgradeDocument from './UpgradeDocument';

/**
 * The SimpleDocumentWithPaymentPaidTransfer model module.
 * @module model/SimpleDocumentWithPaymentPaidTransfer
 * @version 2-oas3
 */
class SimpleDocumentWithPaymentPaidTransfer {
    /**
     * Constructs a new <code>SimpleDocumentWithPaymentPaidTransfer</code>.
     * @alias module:model/SimpleDocumentWithPaymentPaidTransfer
     * @param contactName {String} ชื่อ ลูกค้า/ผู้จำหน่าย <br> <ex>Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ</ex>
     * @param publishedOn {Date} วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
     * @param dueDate {Date} วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
     * @param totalAfterDiscount {Number} มูลค่าหลังหักส่วนลด
     * @param grandTotal {Number} จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
     * @param documentPaymentStructureType {String} สร้างเอกสารแบบ Simple พร้อมชำระเงิน ด้วยการโอนเงิน
     * @param paymentMethod {Number} ประเภทการชำระเงิน <br> 5 = โอนเงิน 
     * @param paymentDate {Date} วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
     * @param collected {Number} จำนวนเงินยอดจ่ายสุทธิ <br> <ex> Example : 100.00 </ex>
     */
    constructor(contactName, publishedOn, dueDate, totalAfterDiscount, grandTotal, documentPaymentStructureType, paymentMethod, paymentDate, collected) { 
        
        SimpleDocumentWithPaymentPaidTransfer.initialize(this, contactName, publishedOn, dueDate, totalAfterDiscount, grandTotal, documentPaymentStructureType, paymentMethod, paymentDate, collected);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contactName, publishedOn, dueDate, totalAfterDiscount, grandTotal, documentPaymentStructureType, paymentMethod, paymentDate, collected) { 
        obj['contactName'] = contactName;
        obj['publishedOn'] = publishedOn;
        obj['dueDate'] = dueDate;
        obj['totalAfterDiscount'] = totalAfterDiscount;
        obj['grandTotal'] = grandTotal;
        obj['documentPaymentStructureType'] = documentPaymentStructureType;
        obj['paymentMethod'] = paymentMethod;
        obj['paymentDate'] = paymentDate;
        obj['collected'] = collected;
    }

    /**
     * Constructs a <code>SimpleDocumentWithPaymentPaidTransfer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleDocumentWithPaymentPaidTransfer} obj Optional instance to populate.
     * @return {module:model/SimpleDocumentWithPaymentPaidTransfer} The populated <code>SimpleDocumentWithPaymentPaidTransfer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleDocumentWithPaymentPaidTransfer();

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
            if (data.hasOwnProperty('useReceiptDeduction')) {
                obj['useReceiptDeduction'] = ApiClient.convertToType(data['useReceiptDeduction'], 'Boolean');
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
            if (data.hasOwnProperty('documentShowWithholdingTax')) {
                obj['documentShowWithholdingTax'] = ApiClient.convertToType(data['documentShowWithholdingTax'], 'Boolean');
            }
            if (data.hasOwnProperty('documentWithholdingTaxPercentage')) {
                obj['documentWithholdingTaxPercentage'] = ApiClient.convertToType(data['documentWithholdingTaxPercentage'], 'Number');
            }
            if (data.hasOwnProperty('documentWithholdingTaxAmount')) {
                obj['documentWithholdingTaxAmount'] = ApiClient.convertToType(data['documentWithholdingTaxAmount'], 'Number');
            }
            if (data.hasOwnProperty('documentDeductionType')) {
                obj['documentDeductionType'] = ApiClient.convertToType(data['documentDeductionType'], 'Number');
            }
            if (data.hasOwnProperty('documentDeductionAmount')) {
                obj['documentDeductionAmount'] = ApiClient.convertToType(data['documentDeductionAmount'], 'Number');
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
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [SimpleProductItem]);
            }
            if (data.hasOwnProperty('documentReference')) {
                obj['documentReference'] = ApiClient.convertToType(data['documentReference'], [UpgradeDocument]);
            }
            if (data.hasOwnProperty('documentPaymentStructureType')) {
                obj['documentPaymentStructureType'] = ApiClient.convertToType(data['documentPaymentStructureType'], 'String');
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
            if (data.hasOwnProperty('transferBankAccountId')) {
                obj['transferBankAccountId'] = ApiClient.convertToType(data['transferBankAccountId'], 'Number');
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
 * รหัส ลูกค้า/ผู้จำหน่าย
 * @member {String} contactCode
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['contactCode'] = undefined;

/**
 * ชื่อ ลูกค้า/ผู้จำหน่าย <br> <ex>Example: บริษัท ลูกค้า จำกัด, คุณลูกค้า ซื้อประจำ</ex>
 * @member {String} contactName
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['contactName'] = undefined;

/**
 * ที่อยู่ ลูกค้า/ผู้จำหน่าย
 * @member {String} contactAddress
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['contactAddress'] = undefined;

/**
 * เลขประจำตัวผู้เสียภาษี ลูกค้า หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
 * @member {String} contactTaxId
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['contactTaxId'] = undefined;

/**
 * สำนักงาน/สาขา
 * @member {String} contactBranch
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['contactBranch'] = undefined;

/**
 * ชื่อผู้ติดต่อ
 * @member {String} contactPerson
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['contactPerson'] = undefined;

/**
 * อีเมลผู้ติดต่อ <br> <ex>Example: contact@email.com</ex>
 * @member {String} contactEmail
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['contactEmail'] = undefined;

/**
 * เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
 * @member {String} contactNumber
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['contactNumber'] = undefined;

/**
 * รหัสไปรษณีย์ติดต่อ
 * @member {String} contactZipCode
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['contactZipCode'] = undefined;

/**
 * ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
 * @member {Number} contactGroup
 * @default 1
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['contactGroup'] = 1;

/**
 * วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} publishedOn
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['publishedOn'] = undefined;

/**
 * รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด)
 * @member {Number} creditType
 * @default 1
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['creditType'] = 1;

/**
 * จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex>
 * @member {Number} creditDays
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['creditDays'] = 0;

/**
 * วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} dueDate
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['dueDate'] = undefined;

/**
 * ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex>
 * @member {String} salesName
 * @default 'อีเมล หรือ ชื่อผู้สร้างเอกสาร'
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['salesName'] = 'อีเมล หรือ ชื่อผู้สร้างเอกสาร';

/**
 * ชื่อโปรเจค
 * @member {String} projectName
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['projectName'] = undefined;

/**
 * เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex>
 * @member {String} reference
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['reference'] = undefined;

/**
 * มูลค่าเอกสารรวมภาษีแล้วหรือไม่
 * @member {Boolean} isVatInclusive
 * @default false
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['isVatInclusive'] = false;

/**
 * เปิดใช้งานฟังก์ชั่น ปรับลดท้ายเอกสาร <br> (เฉพาะเอกสารใบกำกับภาษี / ใบเสร็จรับเงิน และ ใบเสร็จรับเงิน)
 * @member {Boolean} useReceiptDeduction
 * @default false
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['useReceiptDeduction'] = false;

/**
 * มูลค่ารวมเป็นเงิน
 * @member {Number} subTotal
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['subTotal'] = 0;

/**
 * มูลค่าส่วนลดเป็นเปอร์เซ็นต์
 * @member {Number} discountPercentage
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['discountPercentage'] = 0;

/**
 * มูลค่าส่วนลดเป็นจำนวน (บาท)
 * @member {Number} discountAmount
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['discountAmount'] = 0;

/**
 * มูลค่าหลังหักส่วนลด
 * @member {Number} totalAfterDiscount
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['totalAfterDiscount'] = undefined;

/**
 * มูลค่าหลังหักส่วนลด มีภาษีมูลค่าเพิ่ม 7%
 * @member {Boolean} isVat
 * @default false
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['isVat'] = false;

/**
 * ภาษีมูลค่าเพิ่ม
 * @member {Number} vatAmount
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['vatAmount'] = undefined;

/**
 * จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
 * @member {Number} grandTotal
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['grandTotal'] = undefined;

/**
 * แสดงหรือไม่แสดง หัก ณ ที่จ่ายท้ายเอกสาร
 * @member {Boolean} documentShowWithholdingTax
 * @default false
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['documentShowWithholdingTax'] = false;

/**
 * ภาษี ณ ที่จ่าย (%)
 * @member {Number} documentWithholdingTaxPercentage
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['documentWithholdingTaxPercentage'] = 0;

/**
 * มูลค่าภาษีหัก ณ ที่จ่าย
 * @member {Number} documentWithholdingTaxAmount
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['documentWithholdingTaxAmount'] = 0;

/**
 * ประเภทรายการปรับลด <br> 1 = ส่วนลดพิเศษ <br> 3 = ค่านายหน้าและส่วนแบ่งการขาย <br> 5 = ค่าดำเนินการ <br> 7 = ปัดเศษ <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
 * @member {Number} documentDeductionType
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['documentDeductionType'] = 0;

/**
 * จำนวนเงินยอดรายการปรับลด <br> (เฉพาะเอกสารใบกำกับภาษี/ใบเสร็จรับเงิน)
 * @member {Number} documentDeductionAmount
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['documentDeductionAmount'] = 0;

/**
 * หมายเหตุเอกสาร
 * @member {String} remarks
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['remarks'] = undefined;

/**
 * โน๊ตภายในบริษัท
 * @member {String} internalNotes
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['internalNotes'] = undefined;

/**
 * ลายเซ็นอิเล็กทรอนิกส์และตรายาง
 * @member {Boolean} showSignatureOrStamp
 * @default true
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['showSignatureOrStamp'] = true;

/**
 * รายการสินค้าใช้งานสำหรับเอกสาร Simple
 * @member {Array.<module:model/SimpleProductItem>} items
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['items'] = undefined;

/**
 * สำหรับอัพเกรดเอกสาร โดยอ้างอิงเอกสารต้นทาง (ยกเว้นเอกสารใบเสนอราคา)
 * @member {Array.<module:model/UpgradeDocument>} documentReference
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['documentReference'] = undefined;

/**
 * สร้างเอกสารแบบ Simple พร้อมชำระเงิน ด้วยการโอนเงิน
 * @member {String} documentPaymentStructureType
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['documentPaymentStructureType'] = undefined;

/**
 * ประเภทการชำระเงิน <br> 5 = โอนเงิน 
 * @member {Number} paymentMethod
 * @default 1
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['paymentMethod'] = 1;

/**
 * วันที่รับชำระเงิน / วันที่ชำระเงิน รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} paymentDate
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['paymentDate'] = undefined;

/**
 * จำนวนเงินยอดจ่ายสุทธิ <br> <ex> Example : 100.00 </ex>
 * @member {Number} collected
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['collected'] = 0;

/**
 * เปอร์เซ็น หัก ณ ที่จ่าย <br> 0.5 = 0.5% <br> 0.75 = 0.75% <br> 1 = 1% <br> 1.5 = 1.5% <br> 2 = 2% <br> 3 = 3% <br> 5 = 5% <br> 10 = 10% <br> 15 = 15% <br> -1 = จำนวนเงิน <red>(สำหรับเอกสารที่ใช้ภาษีแยกตามรายการสินค้า ต้องใช้เป็นจำนวนเงิน)</red>
 * @member {Number} withheldPercentage
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['withheldPercentage'] = 0;

/**
 * จำนวน ยอดหัก ณ ที่จ่าย <br> <ex> Example : 100.00 </ex>
 * @member {Number} withheldAmount
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['withheldAmount'] = 0;

/**
 * ธนาคารที่ใช้รับชำระเงิน ธนาคารที่ชำระเงิน <br> 1 = ธนาคารกรุงเทพ <br> 2 = ธนาคารกสิกรไทย <br> 3 = ธนาคารกรุงไทย <br> 4 = ธนาคารทหารไทย <br> 5 = ธนาคารไทยพาณิชย์ <br> 6 = ธนาคารสแตนดาร์ดชาร์เตอร์ด <br> 7 = ธนาคารซีไอเอ็มบี ไทย <br> 8 = ธนาคารยูโอบี <br> 10 = ธนาคารกรุงศรีอยุธยา <br> 11 = ธนาคารออมสิน <br> 12 = ธนาคารธนชาต <br> 13 = ธนาคารแลนด์ แอนด์ เฮ้าส์ <br> 14 = ธนาคารเกียรตินาคิน <br> 15 = ธนาคารซิตี้แบงก์ <br> 16 = ธนาคารทิสโก้ <br> 53 = ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร <br> 54 = ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย <br> 55 = ธนาคารอาคารสงเคราะห์ <br> 56 = ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย <br> 57 = ธนาคารอิสลามแห่งประเทศไทย <br> 58 = ธนาคารแห่งประเทศจีน (ไทย) <br> 59 = ธนาคารไอซีบีซี (ไทย) <br> 60 = ธนาคารเมกะ สากลพาณิชย์ <br> 61 = ธนาคารซูมิโตโม มิตซุย แบงกิ้ง คอร์ปอเรชั่น <br> 62 = ธนาคารมิซูโฮ จำกัด (กรุงเทพฯ) <br> 63 = ธนาคารฮ่องกงและเซี่ยงไฮ้แบงกิ้งคอร์ปอเรชั่น <br> 64 = ธนาคารไทยเครดิต เพื่อรายย่อย 
 * @member {Number} transferBankAccountId
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['transferBankAccountId'] = 0;

/**
 * เลข id บัญชีธนาคารที่ใช้ชำระเงิน <br><red>สามารถ GET มาได้จาก My Company > Bank Account </red><br> <ex>Example: 12345</ex>
 * @member {Number} bankAccountId
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['bankAccountId'] = 0;

/**
 * ค่าธรรมเนียม ที่ชำระโดยการโอนเงิน <ex> Example : 100.00 </ex>
 * @member {Number} paymentCharge
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['paymentCharge'] = 0;

/**
 * หมายเหตุ การรับชำระเงิน หรือ ชำระเงิน
 * @member {String} paymentRemarks
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['paymentRemarks'] = undefined;

/**
 * สาเหตุเงินขาด เงินเกิน <br> 51 = เงินขาดหรือเงินกิน <br> 55 = ค่าธรรมเนียมธนาคาร 
 * @member {Number} remainingCollectedType
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['remainingCollectedType'] = 0;

/**
 * จำนวน ยอดเงินขาด หรือ เงินเกิน <br> <ex> Example : 100.00 </ex>
 * @member {Number} remainingCollected
 * @default 0
 */
SimpleDocumentWithPaymentPaidTransfer.prototype['remainingCollected'] = 0;






export default SimpleDocumentWithPaymentPaidTransfer;
