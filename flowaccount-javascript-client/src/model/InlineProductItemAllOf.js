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
 * The InlineProductItemAllOf model module.
 * @module model/InlineProductItemAllOf
 * @version 2-oas3
 */
class InlineProductItemAllOf {
    /**
     * Constructs a new <code>InlineProductItemAllOf</code>.
     * ข้อมุลรายการสินค้า ใช้งานส่วนลดหรือภาษีแยกตามรายการสินค้า
     * @alias module:model/InlineProductItemAllOf
     */
    constructor() { 
        
        InlineProductItemAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineProductItemAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineProductItemAllOf} obj Optional instance to populate.
     * @return {module:model/InlineProductItemAllOf} The populated <code>InlineProductItemAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineProductItemAllOf();

            if (data.hasOwnProperty('discountAmount')) {
                obj['discountAmount'] = ApiClient.convertToType(data['discountAmount'], 'Number');
            }
            if (data.hasOwnProperty('vatRate')) {
                obj['vatRate'] = ApiClient.convertToType(data['vatRate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * จำนวนส่วนลดสินค้า
 * @member {Number} discountAmount
 * @default 0
 */
InlineProductItemAllOf.prototype['discountAmount'] = 0;

/**
 * รูปแบบภาษี <br> 7 = ภาษี 7% <br> 0 = ภาษี 0% <br> -1 = ยกเว้นภาษี
 * @member {Number} vatRate
 * @default 7
 */
InlineProductItemAllOf.prototype['vatRate'] = 7;






export default InlineProductItemAllOf;

