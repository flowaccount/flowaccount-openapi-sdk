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
 * The ProductService model module.
 * @module model/ProductService
 * @version 2-oas3
 */
class ProductService {
    /**
     * Constructs a new <code>ProductService</code>.
     * @alias module:model/ProductService
     * @param type {Number} ประเภทสินค้า: <br>1 = บริการ <br> 3 = ไม่นับสต๊อก <br> 5 = นับสต๊อก
     * @param name {String} ชื่อสินค้า <br> <ex>Example: Product</ex>
     */
    constructor(type, name) { 
        
        ProductService.initialize(this, type, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, name) { 
        obj['type'] = type;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ProductService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductService} obj Optional instance to populate.
     * @return {module:model/ProductService} The populated <code>ProductService</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductService();

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
        }
        return obj;
    }


}

/**
 * สร้างสินค้าประเภท บริการ
 * @member {String} productStructureType
 */
ProductService.prototype['productStructureType'] = undefined;

/**
 * ประเภทสินค้า: <br>1 = บริการ <br> 3 = ไม่นับสต๊อก <br> 5 = นับสต๊อก
 * @member {Number} type
 * @default 1
 */
ProductService.prototype['type'] = 1;

/**
 * รหัสสินค้า / SKU <br> <ex>Example: P001</ex>
 * @member {String} code
 */
ProductService.prototype['code'] = undefined;

/**
 * ชื่อสินค้า <br> <ex>Example: Product</ex>
 * @member {String} name
 */
ProductService.prototype['name'] = undefined;

/**
 * รายละเอียดสินค้า ฝั่งขาย
 * @member {String} sellDescription
 */
ProductService.prototype['sellDescription'] = undefined;

/**
 * ราคาขายสินค้า
 * @member {Number} sellPrice
 */
ProductService.prototype['sellPrice'] = undefined;

/**
 * ภาษีขาย: <br> 1 = ราคาขายรวมภาษี <br> 3 = ราคาขายไม่รวมภาษี <br> 5 = ราคาขายภาษี 0% <br> 7 = ราคาขายสินค้าได้รับการยกเว้นภาษี
 * @member {Number} sellVatType
 * @default 3
 */
ProductService.prototype['sellVatType'] = 3;

/**
 * หน่วยสินค้า
 * @member {String} unitName
 */
ProductService.prototype['unitName'] = undefined;

/**
 * หมวดสินค้า
 * @member {String} categoryName
 */
ProductService.prototype['categoryName'] = undefined;

/**
 * บาร์โค้ด
 * @member {String} barcode
 */
ProductService.prototype['barcode'] = undefined;






export default ProductService;

