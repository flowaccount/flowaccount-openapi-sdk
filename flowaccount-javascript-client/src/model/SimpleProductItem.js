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
import ProductItem from './ProductItem';

/**
 * The SimpleProductItem model module.
 * @module model/SimpleProductItem
 * @version 2-oas3
 */
class SimpleProductItem {
    /**
     * Constructs a new <code>SimpleProductItem</code>.
     * @alias module:model/SimpleProductItem
     * @extends module:model/ProductItem
     * @implements module:model/ProductItem
     * @param name {String} ชื่อสินค้า
     * @param quantity {Number} จำนวนสินค้า
     * @param pricePerUnit {Number} ราคาสินค้าต่อหน่วย
     * @param total {Number} ราคารวมสินค้า
     */
    constructor(name, quantity, pricePerUnit, total) { 
        ProductItem.initialize(this, name, quantity, pricePerUnit, total);
        SimpleProductItem.initialize(this, name, quantity, pricePerUnit, total);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, quantity, pricePerUnit, total) { 
    }

    /**
     * Constructs a <code>SimpleProductItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleProductItem} obj Optional instance to populate.
     * @return {module:model/SimpleProductItem} The populated <code>SimpleProductItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleProductItem();
            ProductItem.constructFromObject(data, obj);
            ProductItem.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement ProductItem interface:
/**
 * ประเภทสินค้า <br> 1 = บริการ (service) <br> 3 = สินค้าไม่นับสต๊อก (non inventory) <br> 5 = สินค้านับสต๊อก (inventory)
 * @member {Number} type
 * @default 1
 */
ProductItem.prototype['type'] = 1;
/**
 * ชื่อสินค้า
 * @member {String} name
 */
ProductItem.prototype['name'] = undefined;
/**
 * รายละเอียดสินค้า
 * @member {String} description
 */
ProductItem.prototype['description'] = undefined;
/**
 * จำนวนสินค้า
 * @member {Number} quantity
 */
ProductItem.prototype['quantity'] = undefined;
/**
 * หน่วยสินค้า
 * @member {String} unitName
 */
ProductItem.prototype['unitName'] = undefined;
/**
 * ราคาสินค้าต่อหน่วย
 * @member {Number} pricePerUnit
 */
ProductItem.prototype['pricePerUnit'] = undefined;
/**
 * ราคารวมสินค้า
 * @member {Number} total
 */
ProductItem.prototype['total'] = undefined;
/**
 * เลือกลงบันทึกบัญชีรายได้ สำหรับเอกสารฝั่งขาย <br> <ex>Example: 41111</ex>
 * @member {String} sellChartOfAccountCode
 */
ProductItem.prototype['sellChartOfAccountCode'] = undefined;
/**
 * เลือกลงบันทึกบัญชีค่าใช้จ่าย สำหรับเอกสารฝั่งซื้อ <br> <ex>Example: 51111.02</ex>
 * @member {String} buyChartOfAccountCode
 */
ProductItem.prototype['buyChartOfAccountCode'] = undefined;




export default SimpleProductItem;

