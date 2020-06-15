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
import ExpenseSimpleDocumentResponseAllOfData from './ExpenseSimpleDocumentResponseAllOfData';

/**
 * The ExpenseSimpleDocumentResponseAllOf model module.
 * @module model/ExpenseSimpleDocumentResponseAllOf
 * @version 2-oas3
 */
class ExpenseSimpleDocumentResponseAllOf {
    /**
     * Constructs a new <code>ExpenseSimpleDocumentResponseAllOf</code>.
     * @alias module:model/ExpenseSimpleDocumentResponseAllOf
     */
    constructor() { 
        
        ExpenseSimpleDocumentResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExpenseSimpleDocumentResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExpenseSimpleDocumentResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ExpenseSimpleDocumentResponseAllOf} The populated <code>ExpenseSimpleDocumentResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExpenseSimpleDocumentResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ExpenseSimpleDocumentResponseAllOfData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ExpenseSimpleDocumentResponseAllOfData} data
 */
ExpenseSimpleDocumentResponseAllOf.prototype['data'] = undefined;






export default ExpenseSimpleDocumentResponseAllOf;

