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
 * The CompanyInfoResponseAllOf model module.
 * @module model/CompanyInfoResponseAllOf
 * @version 2-oas3
 */
class CompanyInfoResponseAllOf {
    /**
     * Constructs a new <code>CompanyInfoResponseAllOf</code>.
     * @alias module:model/CompanyInfoResponseAllOf
     */
    constructor() { 
        
        CompanyInfoResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompanyInfoResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompanyInfoResponseAllOf} obj Optional instance to populate.
     * @return {module:model/CompanyInfoResponseAllOf} The populated <code>CompanyInfoResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompanyInfoResponseAllOf();

            if (data.hasOwnProperty('companyId')) {
                obj['companyId'] = ApiClient.convertToType(data['companyId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * รหัสบริษัท
 * @member {Number} companyId
 * @default 0
 */
CompanyInfoResponseAllOf.prototype['companyId'] = 0;






export default CompanyInfoResponseAllOf;
