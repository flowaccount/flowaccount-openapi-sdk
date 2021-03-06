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
import SendEmail from './SendEmail';
import SendEmailCoppiesAllOf from './SendEmailCoppiesAllOf';

/**
 * The SendEmailCoppies model module.
 * @module model/SendEmailCoppies
 * @version 2-oas3
 */
class SendEmailCoppies {
    /**
     * Constructs a new <code>SendEmailCoppies</code>.
     * @alias module:model/SendEmailCoppies
     * @extends module:model/SendEmail
     * @implements module:model/SendEmail
     * @implements module:model/SendEmailCoppiesAllOf
     * @param documentId {Number} documentId หรือ recordId ของเอกสารที่ต้องการส่งอีเมล
     * @param fromemail {String} ใส่อีเมลผู้ส่ง <br> <ex>Example: myemail@email.com</ex>
     * @param toemail {String} ใส่อีเมลผู้รับ <br> <ex>Example: contact@email.com</ex>
     * @param subject {String} หัวข้อ / ชื่อเรื่อง 
     */
    constructor(documentId, fromemail, toemail, subject) { 
        SendEmail.initialize(this, documentId, fromemail, toemail, subject);SendEmailCoppiesAllOf.initialize(this);
        SendEmailCoppies.initialize(this, documentId, fromemail, toemail, subject);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, documentId, fromemail, toemail, subject) { 
    }

    /**
     * Constructs a <code>SendEmailCoppies</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendEmailCoppies} obj Optional instance to populate.
     * @return {module:model/SendEmailCoppies} The populated <code>SendEmailCoppies</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendEmailCoppies();
            SendEmail.constructFromObject(data, obj);
            SendEmail.constructFromObject(data, obj);
            SendEmailCoppiesAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('doCopy')) {
                obj['doCopy'] = ApiClient.convertToType(data['doCopy'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * ส่งต้นฉบับ พร้อม สำเนา
 * @member {Boolean} doCopy
 * @default true
 */
SendEmailCoppies.prototype['doCopy'] = true;


// Implement SendEmail interface:
/**
 * documentId หรือ recordId ของเอกสารที่ต้องการส่งอีเมล
 * @member {Number} documentId
 */
SendEmail.prototype['documentId'] = undefined;
/**
 * ใส่อีเมลผู้ส่ง <br> <ex>Example: myemail@email.com</ex>
 * @member {String} fromemail
 */
SendEmail.prototype['fromemail'] = undefined;
/**
 * ใส่อีเมลผู้รับ <br> <ex>Example: contact@email.com</ex>
 * @member {String} toemail
 */
SendEmail.prototype['toemail'] = undefined;
/**
 * ส่งสำเนาหาตนเอง
 * @member {Boolean} cCMyself
 * @default true
 */
SendEmail.prototype['cCMyself'] = true;
/**
 * สำเนา (CC) <br> <ex>Example: cc@email.com</ex>
 * @member {String} ccEmail
 */
SendEmail.prototype['ccEmail'] = undefined;
/**
 * สำเนาลับ (BCC) <br> <ex>Example: bcc@email.com</ex>
 * @member {String} bccEmail
 */
SendEmail.prototype['bccEmail'] = undefined;
/**
 * หัวข้อ / ชื่อเรื่อง 
 * @member {String} subject
 */
SendEmail.prototype['subject'] = undefined;
/**
 * ข้อความ เนื้อหาของ email
 * @member {String} message
 */
SendEmail.prototype['message'] = undefined;
// Implement SendEmailCoppiesAllOf interface:
/**
 * ส่งต้นฉบับ พร้อม สำเนา
 * @member {Boolean} doCopy
 * @default true
 */
SendEmailCoppiesAllOf.prototype['doCopy'] = true;




export default SendEmailCoppies;

