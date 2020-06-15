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
import DeleteResponseData from './DeleteResponseData';

/**
 * The DeleteResponse model module.
 * @module model/DeleteResponse
 * @version 2-oas3
 */
class DeleteResponse {
    /**
     * Constructs a new <code>DeleteResponse</code>.
     * @alias module:model/DeleteResponse
     */
    constructor() { 
        
        DeleteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteResponse} obj Optional instance to populate.
     * @return {module:model/DeleteResponse} The populated <code>DeleteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteResponse();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = DeleteResponseData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * action success
 * @member {Boolean} status
 */
DeleteResponse.prototype['status'] = undefined;

/**
 * error message
 * @member {String} message
 */
DeleteResponse.prototype['message'] = undefined;

/**
 * error code
 * @member {Number} code
 */
DeleteResponse.prototype['code'] = undefined;

/**
 * @member {module:model/DeleteResponseData} data
 */
DeleteResponse.prototype['data'] = undefined;






export default DeleteResponse;

