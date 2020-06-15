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
 * The ExpenseInlineDocumentAllOf model module.
 * @module model/ExpenseInlineDocumentAllOf
 * @version 2-oas3
 */
class ExpenseInlineDocumentAllOf {
    /**
     * Constructs a new <code>ExpenseInlineDocumentAllOf</code>.
     * @alias module:model/ExpenseInlineDocumentAllOf
     */
    constructor() { 
        
        ExpenseInlineDocumentAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExpenseInlineDocumentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExpenseInlineDocumentAllOf} obj Optional instance to populate.
     * @return {module:model/ExpenseInlineDocumentAllOf} The populated <code>ExpenseInlineDocumentAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExpenseInlineDocumentAllOf();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ExpenseInlineProductItem]);
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
            if (data.hasOwnProperty('vatableAmount')) {
                obj['vatableAmount'] = ApiClient.convertToType(data['vatableAmount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * รายการสินค้าใช้งานสำหรับเอกสาร Inline Expense
 * @member {Array.<module:model/ExpenseInlineProductItem>} items
 */
ExpenseInlineDocumentAllOf.prototype['items'] = undefined;

/**
 * รูปแบบส่วนลดในเอกสาร กรณีใช้รูปแบบ Inline ส่วนลด หรือ ภาษี แยกตามรายการสินค้า <br> สามารถเลือกรูปแบบส่วนลดได้ <br> 1 =  เปอร์เซ็นต์ <br> 3 = จำนวน (บาท)
 * @member {Number} discountType
 * @default 1
 */
ExpenseInlineDocumentAllOf.prototype['discountType'] = 1;

/**
 * inline discount ใช้งานส่วนลด แยกตามรายการสินค้า
 * @member {Boolean} useInlineDiscount
 * @default true
 */
ExpenseInlineDocumentAllOf.prototype['useInlineDiscount'] = true;

/**
 * inline vat ใช้งานส่วนลดและภาษี แยกตามรายการสินค้า
 * @member {Boolean} useInlineVat
 */
ExpenseInlineDocumentAllOf.prototype['useInlineVat'] = undefined;

/**
 * ยอดขายที่ยกเว้นภาษีมูลค่าเพิ่ม
 * @member {Number} exemptAmount
 * @default 0
 */
ExpenseInlineDocumentAllOf.prototype['exemptAmount'] = 0;

/**
 * ยอดขายที่คิดภาษีมูลค่าเพิ่ม
 * @member {Number} vatableAmount
 * @default 0
 */
ExpenseInlineDocumentAllOf.prototype['vatableAmount'] = 0;






export default ExpenseInlineDocumentAllOf;
