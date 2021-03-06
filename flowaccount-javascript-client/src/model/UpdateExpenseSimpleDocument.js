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
import ExpenseSimpleDocumentAllOf from './ExpenseSimpleDocumentAllOf';
import ExpenseSimpleProductItem from './ExpenseSimpleProductItem';
import UpdateExpenseDocument from './UpdateExpenseDocument';

/**
 * The UpdateExpenseSimpleDocument model module.
 * @module model/UpdateExpenseSimpleDocument
 * @version 2-oas3
 */
class UpdateExpenseSimpleDocument {
    /**
     * Constructs a new <code>UpdateExpenseSimpleDocument</code>.
     * @alias module:model/UpdateExpenseSimpleDocument
     * @extends module:model/UpdateExpenseDocument
     * @implements module:model/UpdateExpenseDocument
     * @implements module:model/ExpenseSimpleDocumentAllOf
     * @param companyName {String} ชื่อบริษัท
     * @param companyAddress {String} ที่อยู่บริษัท
     * @param companyBranch {String} ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex>
     * @param contactName {String} ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
     * @param publishedOn {Date} วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
     * @param subTotal {Number} มูลค่ารวมเป็นเงิน
     * @param totalAfterDiscount {Number} มูลค่าหลังหักส่วนลด
     * @param grandTotal {Number} จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
     */
    constructor(companyName, companyAddress, companyBranch, contactName, publishedOn, subTotal, totalAfterDiscount, grandTotal) { 
        UpdateExpenseDocument.initialize(this, companyName, companyAddress, companyBranch, contactName, publishedOn, subTotal, totalAfterDiscount, grandTotal);ExpenseSimpleDocumentAllOf.initialize(this);
        UpdateExpenseSimpleDocument.initialize(this, companyName, companyAddress, companyBranch, contactName, publishedOn, subTotal, totalAfterDiscount, grandTotal);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, companyName, companyAddress, companyBranch, contactName, publishedOn, subTotal, totalAfterDiscount, grandTotal) { 
    }

    /**
     * Constructs a <code>UpdateExpenseSimpleDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateExpenseSimpleDocument} obj Optional instance to populate.
     * @return {module:model/UpdateExpenseSimpleDocument} The populated <code>UpdateExpenseSimpleDocument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateExpenseSimpleDocument();
            UpdateExpenseDocument.constructFromObject(data, obj);
            UpdateExpenseDocument.constructFromObject(data, obj);
            ExpenseSimpleDocumentAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ExpenseSimpleProductItem]);
            }
        }
        return obj;
    }


}

/**
 * รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense
 * @member {Array.<module:model/ExpenseSimpleProductItem>} items
 */
UpdateExpenseSimpleDocument.prototype['items'] = undefined;


// Implement UpdateExpenseDocument interface:
/**
 * ชื่อบริษัท
 * @member {String} companyName
 */
UpdateExpenseDocument.prototype['companyName'] = undefined;
/**
 * ชื่อบริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
 * @member {String} companyNameEn
 */
UpdateExpenseDocument.prototype['companyNameEn'] = undefined;
/**
 * ที่อยู่บริษัท
 * @member {String} companyAddress
 */
UpdateExpenseDocument.prototype['companyAddress'] = undefined;
/**
 * ที่อยู่บริษัท ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ)
 * @member {String} companyAddressEn
 */
UpdateExpenseDocument.prototype['companyAddressEn'] = undefined;
/**
 * เลขประจำตัวผู้เสียภาษี บริษัท <br><ex>Example: 0105558096348</ex>
 * @member {String} companyTaxId
 */
UpdateExpenseDocument.prototype['companyTaxId'] = undefined;
/**
 * ชื่อ และ รหัสสาขา <br><ex>Example: สำนักงานใหญ่ 00000</ex>
 * @member {String} companyBranch
 */
UpdateExpenseDocument.prototype['companyBranch'] = undefined;
/**
 * ชื่อ และ รหัสสาขา ภาษาอังกฤษ (แสดงเมื่อเลือกเอกสารเป็นภาษาอังกฤษ) <br><ex>Example: Head Office 00000</ex>
 * @member {String} companyBranchEn
 */
UpdateExpenseDocument.prototype['companyBranchEn'] = undefined;
/**
 * เบอร์โทรสำนักงาน <br><ex>Example: 02-999-9999</ex>
 * @member {String} companyPhone
 */
UpdateExpenseDocument.prototype['companyPhone'] = undefined;
/**
 * เบอร์โทรศัพท์มือถือ <br><ex>Example: 099-999-9999</ex>
 * @member {String} companyMobile
 */
UpdateExpenseDocument.prototype['companyMobile'] = undefined;
/**
 * เบอร์โทรสาร <br><ex>Example: 02-999-9999 ต่อ 1</ex>
 * @member {String} companyFax
 */
UpdateExpenseDocument.prototype['companyFax'] = undefined;
/**
 * เว็บไซต์ <br><ex>Example: www.flowaccount.com</ex>
 * @member {String} companyWebsite
 */
UpdateExpenseDocument.prototype['companyWebsite'] = undefined;
/**
 * รหัส ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @member {String} contactCode
 */
UpdateExpenseDocument.prototype['contactCode'] = undefined;
/**
 * ชื่อ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @member {String} contactName
 */
UpdateExpenseDocument.prototype['contactName'] = undefined;
/**
 * ที่อยู่ ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า
 * @member {String} contactAddress
 */
UpdateExpenseDocument.prototype['contactAddress'] = undefined;
/**
 * เลขประจำตัวผู้เสียภาษี ผู้จำหน่าย หรือ ผู้จำหน่าย/ลูกค้า <br> (ถ้ามีจำเป็นต้องครบ 13 หลัก) <br> <ex>Example: 1234567890123 </ex>
 * @member {String} contactTaxId
 */
UpdateExpenseDocument.prototype['contactTaxId'] = undefined;
/**
 * สำนักงาน/สาขา
 * @member {String} contactBranch
 */
UpdateExpenseDocument.prototype['contactBranch'] = undefined;
/**
 * ชื่อผู้ติดต่อ
 * @member {String} contactPerson
 */
UpdateExpenseDocument.prototype['contactPerson'] = undefined;
/**
 * อีเมลผู้ติดต่อ <br> <ex>Example: supplier@email.com</ex>
 * @member {String} contactEmail
 */
UpdateExpenseDocument.prototype['contactEmail'] = undefined;
/**
 * เบอร์มือถือผู้ติดต่อ <br> <ex>Example: 099-999-9999</ex>
 * @member {String} contactNumber
 */
UpdateExpenseDocument.prototype['contactNumber'] = undefined;
/**
 * รหัสไปรษณีย์ติดต่อ
 * @member {String} contactZipCode
 */
UpdateExpenseDocument.prototype['contactZipCode'] = undefined;
/**
 * ประผู้ติดต่อ <br> 1 = บุคคลธรรมดา <br> 3 = นิติบุคคล
 * @member {Number} contactGroup
 * @default 1
 */
UpdateExpenseDocument.prototype['contactGroup'] = 1;
/**
 * วันที่เอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} publishedOn
 */
UpdateExpenseDocument.prototype['publishedOn'] = undefined;
/**
 * รูปแบบเครดิต <br> 1 = เครดิต (วัน) <br> 3 = เงินสด  <br> 5 = เครดิต (ไม่แสดงวันที่ครบกำหนด)
 * @member {Number} creditType
 * @default 1
 */
UpdateExpenseDocument.prototype['creditType'] = 1;
/**
 * จำนวนวันที่ให้เครดิต <br> <ex>Example: 30</ex>
 * @member {Number} creditDays
 * @default 0
 */
UpdateExpenseDocument.prototype['creditDays'] = 0;
/**
 * วันครบกำหนดเอกสาร รูปแบบ yyyy-MM-dd <br> <ex>Example: 2020-01-01</ex>
 * @member {Date} dueDate
 */
UpdateExpenseDocument.prototype['dueDate'] = undefined;
/**
 * ชื่อผู้สร้างเอกสาร หรือ ชื่อพนักงานขาย <br> <ex>Example: sale@email.com or Mr.Sale Shop</ex>
 * @member {String} salesName
 * @default 'อีเมล หรือ ชื่อผู้สร้างเอกสาร'
 */
UpdateExpenseDocument.prototype['salesName'] = 'อีเมล หรือ ชื่อผู้สร้างเอกสาร';
/**
 * ชื่อโปรเจค
 * @member {String} projectName
 */
UpdateExpenseDocument.prototype['projectName'] = undefined;
/**
 * เลขที่อ้างอิง หรือ เลขที่เอกสารที่เกี่ยวข้อง <br> <ex>Example: INV2020010001</ex>
 * @member {String} reference
 */
UpdateExpenseDocument.prototype['reference'] = undefined;
/**
 * มูลค่าเอกสารรวมภาษีแล้วหรือไม่
 * @member {Boolean} isVatInclusive
 * @default false
 */
UpdateExpenseDocument.prototype['isVatInclusive'] = false;
/**
 * มูลค่ารวมเป็นเงิน
 * @member {Number} subTotal
 * @default 0
 */
UpdateExpenseDocument.prototype['subTotal'] = 0;
/**
 * มูลค่าส่วนลดเป็นเปอร์เซ็นต์
 * @member {Number} discountPercentage
 * @default 0
 */
UpdateExpenseDocument.prototype['discountPercentage'] = 0;
/**
 * มูลค่าส่วนลดเป็นจำนวน (บาท)
 * @member {Number} discountAmount
 * @default 0
 */
UpdateExpenseDocument.prototype['discountAmount'] = 0;
/**
 * มูลค่าหลังหักส่วนลด
 * @member {Number} totalAfterDiscount
 */
UpdateExpenseDocument.prototype['totalAfterDiscount'] = undefined;
/**
 * มูลค่าหลังหักส่วนลด มีีภาษีมูลค่าเพิ่ม 7%
 * @member {Boolean} isVat
 * @default false
 */
UpdateExpenseDocument.prototype['isVat'] = false;
/**
 * ภาษีมูลค่าเพิ่ม
 * @member {Number} vatAmount
 */
UpdateExpenseDocument.prototype['vatAmount'] = undefined;
/**
 * จำนวนเงินรวมทั้งสิ้น (รวมภาษีมูลค่าเพิ่ม 7% แล้ว)
 * @member {Number} grandTotal
 */
UpdateExpenseDocument.prototype['grandTotal'] = undefined;
/**
 * หมายเหตุเอกสาร
 * @member {String} remarks
 */
UpdateExpenseDocument.prototype['remarks'] = undefined;
/**
 * โน๊ตภายในบริษัท
 * @member {String} internalNotes
 */
UpdateExpenseDocument.prototype['internalNotes'] = undefined;
/**
 * ลายเซ็นอิเล็กทรอนิกส์และตรายาง
 * @member {Boolean} showSignatureOrStamp
 * @default true
 */
UpdateExpenseDocument.prototype['showSignatureOrStamp'] = true;
/**
 * @member {String} expenseStructureType
 */
UpdateExpenseDocument.prototype['expenseStructureType'] = undefined;
// Implement ExpenseSimpleDocumentAllOf interface:
/**
 * รายการสินค้าใช้งานสำหรับเอกสาร Simple Expense
 * @member {Array.<module:model/ExpenseSimpleProductItem>} items
 */
ExpenseSimpleDocumentAllOf.prototype['items'] = undefined;




export default UpdateExpenseSimpleDocument;

