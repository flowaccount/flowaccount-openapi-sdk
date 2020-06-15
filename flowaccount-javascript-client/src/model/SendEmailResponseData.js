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
 * The SendEmailResponseData model module.
 * @module model/SendEmailResponseData
 * @version 2-oas3
 */
class SendEmailResponseData {
    /**
     * Constructs a new <code>SendEmailResponseData</code>.
     * data success
     * @alias module:model/SendEmailResponseData
     */
    constructor() { 
        
        SendEmailResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendEmailResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendEmailResponseData} obj Optional instance to populate.
     * @return {module:model/SendEmailResponseData} The populated <code>SendEmailResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendEmailResponseData();

            if (data.hasOwnProperty('ok')) {
                obj['ok'] = ApiClient.convertToType(data['ok'], 'Boolean');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('successMsg')) {
                obj['successMsg'] = ApiClient.convertToType(data['successMsg'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Status
 * @member {Boolean} ok
 */
SendEmailResponseData.prototype['ok'] = undefined;

/**
 * Email sent successfully
 * @member {String} message
 */
SendEmailResponseData.prototype['message'] = undefined;

/**
 * Change Status Complete
 * @member {String} successMsg
 */
SendEmailResponseData.prototype['successMsg'] = undefined;






export default SendEmailResponseData;

