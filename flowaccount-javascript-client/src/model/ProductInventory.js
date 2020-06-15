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
 * The ProductInventory model module.
 * @module model/ProductInventory
 * @version 2-oas3
 */
class ProductInventory {
    /**
     * Constructs a new <code>ProductInventory</code>.
     * @alias module:model/ProductInventory
     * @param type {Number} ระเภทสินค้า: <br>1 = บริการ <br> 3 = ไม่นับสต๊อก <br> 5 = นับสต๊อก
     * @param name {String} ชื่อสินค้า <br> <ex>Example: Product</ex>
     * @param unitName {String} หน่วยสินค้า
     */
    constructor(type, name, unitName) { 
        
        ProductInventory.initialize(this, type, name, unitName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, name, unitName) { 
        obj['type'] = type;
        obj['name'] = name;
        obj['unitName'] = unitName;
    }

    /**
     * Constructs a <code>ProductInventory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductInventory} obj Optional instance to populate.
     * @return {module:model/ProductInventory} The populated <code>ProductInventory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductInventory();

            if (data.hasOwnProperty('productStructureType')) {
                obj['productStructureType'] = ApiClient.convertToType(data['productStructureType'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('sellDescription')) {
                obj['sellDescription'] = ApiClient.convertToType(data['sellDescription'], 'String');
            }
            if (data.hasOwnProperty('sellPrice')) {
                obj['sellPrice'] = ApiClient.convertToType(data['sellPrice'], 'Number');
            }
            if (data.hasOwnProperty('sellVatType')) {
                obj['sellVatType'] = ApiClient.convertToType(data['sellVatType'], 'Number');
            }
            if (data.hasOwnProperty('unitName')) {
                obj['unitName'] = ApiClient.convertToType(data['unitName'], 'String');
            }
            if (data.hasOwnProperty('categoryName')) {
                obj['categoryName'] = ApiClient.convertToType(data['categoryName'], 'String');
            }
            if (data.hasOwnProperty('barcode')) {
                obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
            }
            if (data.hasOwnProperty('buyDescription')) {
                obj['buyDescription'] = ApiClient.convertToType(data['buyDescription'], 'String');
            }
            if (data.hasOwnProperty('buyPrice')) {
                obj['buyPrice'] = ApiClient.convertToType(data['buyPrice'], 'Number');
            }
            if (data.hasOwnProperty('buyVatType')) {
                obj['buyVatType'] = ApiClient.convertToType(data['buyVatType'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * สร้างสินค้าประเภท นับสต๊อก
 * @member {String} productStructureType
 */
ProductInventory.prototype['productStructureType'] = undefined;

/**
 * ระเภทสินค้า: <br>1 = บริการ <br> 3 = ไม่นับสต๊อก <br> 5 = นับสต๊อก
 * @member {Number} type
 * @default 1
 */
ProductInventory.prototype['type'] = 1;

/**
 * รหัสสินค้า / SKU <br> <ex>Example: P001</ex>
 * @member {String} code
 */
ProductInventory.prototype['code'] = undefined;

/**
 * ชื่อสินค้า <br> <ex>Example: Product</ex>
 * @member {String} name
 */
ProductInventory.prototype['name'] = undefined;

/**
 * รายละเอียดสินค้า ฝั่งขาย
 * @member {String} sellDescription
 */
ProductInventory.prototype['sellDescription'] = undefined;

/**
 * ราคาขายสินค้า
 * @member {Number} sellPrice
 */
ProductInventory.prototype['sellPrice'] = undefined;

/**
 * ภาษีขาย: <br> 1 = ราคาขายรวมภาษี <br> 3 = ราคาขายไม่รวมภาษี <br> 5 = ราคาขายภาษี 0% <br> 7 = ราคาขายสินค้าได้รับการยกเว้นภาษี
 * @member {Number} sellVatType
 * @default 3
 */
ProductInventory.prototype['sellVatType'] = 3;

/**
 * หน่วยสินค้า
 * @member {String} unitName
 */
ProductInventory.prototype['unitName'] = undefined;

/**
 * หมวดสินค้า
 * @member {String} categoryName
 */
ProductInventory.prototype['categoryName'] = undefined;

/**
 * บาร์โค้ด
 * @member {String} barcode
 */
ProductInventory.prototype['barcode'] = undefined;

/**
 * รายละเอียดสินค้า ฝั่งซื้อ
 * @member {String} buyDescription
 */
ProductInventory.prototype['buyDescription'] = undefined;

/**
 * ราคาซื้อสินค้า
 * @member {Number} buyPrice
 */
ProductInventory.prototype['buyPrice'] = undefined;

/**
 * ภาษีซื้อ: <br> 1 = ราคาซื้อรวมภาษี <br> 3 = ราคาซื้อไม่รวมภาษี <br> 5 = ราคาซื้อภาษี 0% <br> 7 = ราคาซื้อสินค้าได้รับการยกเว้นภาษี
 * @member {Number} buyVatType
 * @default 3
 */
ProductInventory.prototype['buyVatType'] = 3;






export default ProductInventory;

