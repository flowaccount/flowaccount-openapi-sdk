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
 * The ReferencedToMe model module.
 * @module model/ReferencedToMe
 * @version 2-oas3
 */
class ReferencedToMe {
    /**
     * Constructs a new <code>ReferencedToMe</code>.
     * @alias module:model/ReferencedToMe
     */
    constructor() { 
        
        ReferencedToMe.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReferencedToMe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReferencedToMe} obj Optional instance to populate.
     * @return {module:model/ReferencedToMe} The populated <code>ReferencedToMe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReferencedToMe();

            if (data.hasOwnProperty('referenceId')) {
                obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'Number');
            }
            if (data.hasOwnProperty('referenceDocumentType')) {
                obj['referenceDocumentType'] = ApiClient.convertToType(data['referenceDocumentType'], 'Number');
            }
            if (data.hasOwnProperty('referenceDocumentSerial')) {
                obj['referenceDocumentSerial'] = ApiClient.convertToType(data['referenceDocumentSerial'], 'String');
            }
            if (data.hasOwnProperty('documentId')) {
                obj['documentId'] = ApiClient.convertToType(data['documentId'], 'Number');
            }
            if (data.hasOwnProperty('documentSerial')) {
                obj['documentSerial'] = ApiClient.convertToType(data['documentSerial'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * ID เอกสารฉบับนี้
 * @member {Number} referenceId
 */
ReferencedToMe.prototype['referenceId'] = undefined;

/**
 * ประเภทของเอกสารฉบับนี้
 * @member {Number} referenceDocumentType
 */
ReferencedToMe.prototype['referenceDocumentType'] = undefined;

/**
 * เลขที่เอกสารฉบับนี้
 * @member {String} referenceDocumentSerial
 */
ReferencedToMe.prototype['referenceDocumentSerial'] = undefined;

/**
 * ID เอกสารปลายทางที่อ้างอิง ถึง เอกสารฉบับนี้
 * @member {Number} documentId
 */
ReferencedToMe.prototype['documentId'] = undefined;

/**
 * เลขที่เอกสารปลายทางที่อ้างอิง ถึง เอกสารฉบับนี้
 * @member {Number} documentSerial
 */
ReferencedToMe.prototype['documentSerial'] = undefined;

/**
 * @member {Number} type
 * @default 1
 */
ReferencedToMe.prototype['type'] = 1;






export default ReferencedToMe;

