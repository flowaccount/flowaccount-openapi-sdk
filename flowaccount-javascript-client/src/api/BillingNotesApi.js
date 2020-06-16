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


import ApiClient from "../ApiClient";
import AllDocumentResponse from '../model/AllDocumentResponse';
import AttachmentResponse from '../model/AttachmentResponse';
import DeleteResponse from '../model/DeleteResponse';
import InlineDocument from '../model/InlineDocument';
import InlineDocumentResponse from '../model/InlineDocumentResponse';
import SendEmailCoppies from '../model/SendEmailCoppies';
import SendEmailResponse from '../model/SendEmailResponse';
import ShareDocument from '../model/ShareDocument';
import ShareDocumentResponse from '../model/ShareDocumentResponse';
import SimpleDocument from '../model/SimpleDocument';
import SimpleDocumentResponse from '../model/SimpleDocumentResponse';
import UpdateInlineDocument from '../model/UpdateInlineDocument';

/**
* BillingNotes service.
* @module api/BillingNotesApi
* @version 2-oas3
*/
export default class BillingNotesApi {

    /**
    * Constructs a new BillingNotesApi. 
    * @alias module:api/BillingNotesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the billingNotesEmailDocumentPost operation.
     * @callback module:api/BillingNotesApi~billingNotesEmailDocumentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send email billing notes document.
     * ส่งเอกสารใบวางบิล ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ
     * @param {String} authorization 
     * @param {module:model/SendEmailCoppies} sendEmailCoppies 
     * @param {module:api/BillingNotesApi~billingNotesEmailDocumentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SendEmailResponse}
     */
    billingNotesEmailDocumentPost(authorization, sendEmailCoppies, callback) {
      let postBody = sendEmailCoppies;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling billingNotesEmailDocumentPost");
      }
      // verify the required parameter 'sendEmailCoppies' is set
      if (sendEmailCoppies === undefined || sendEmailCoppies === null) {
        throw new Error("Missing the required parameter 'sendEmailCoppies' when calling billingNotesEmailDocumentPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SendEmailResponse;
      return this.apiClient.callApi(
        '/billing-notes/email-document', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingNotesGet operation.
     * @callback module:api/BillingNotesApi~billingNotesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AllDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list all billing notes documents.
     * เรียกดูข้อมูลเอกสารใบวางบิลทั้งหมดในระบบ
     * @param {Number} currentPage Query current page document billing notes. <br>Example Pattern: <ex>/billing-notes?currentPage=1 </ex><ex>/billing-notes?currentPage=1&pageSize=20</ex>
     * @param {Number} pageSize Query document billing notes list amount per page. <br>Example Pattern: <ex> /billing-notes?pageSize=20 </ex>
     * @param {String} authorization 
     * @param {Object} opts Optional parameters
     * @param {String} opts.sortBy Query document billing notes list amount per page. <br>Example Pattern: <ex> /billing-notes?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/billing-notes?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/billing-notes?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/billing-notes?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
     * @param {String} opts.filter 
     * @param {module:api/BillingNotesApi~billingNotesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AllDocumentResponse}
     */
    billingNotesGet(currentPage, pageSize, authorization, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'currentPage' is set
      if (currentPage === undefined || currentPage === null) {
        throw new Error("Missing the required parameter 'currentPage' when calling billingNotesGet");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling billingNotesGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling billingNotesGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'currentPage': currentPage,
        'pageSize': pageSize,
        'sortBy': opts['sortBy'],
        'filter': opts['filter']
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AllDocumentResponse;
      return this.apiClient.callApi(
        '/billing-notes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingNotesIdAttachmentPost operation.
     * @callback module:api/BillingNotesApi~billingNotesIdAttachmentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttachmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Attachment to billing notes document.
     * แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ
     * @param {String} authorization 
     * @param {String} id documentId หรือ recordId ของเอกสารที่ต้องการแนบ
     * @param {Object} opts Optional parameters
     * @param {File} opts.file รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
     * @param {module:api/BillingNotesApi~billingNotesIdAttachmentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttachmentResponse}
     */
    billingNotesIdAttachmentPost(authorization, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling billingNotesIdAttachmentPost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling billingNotesIdAttachmentPost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = AttachmentResponse;
      return this.apiClient.callApi(
        '/billing-notes/{id}/attachment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingNotesIdDelete operation.
     * @callback module:api/BillingNotesApi~billingNotesIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete billing notes document.
     * ลบ เอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอวางบิล 
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId
     * @param {module:api/BillingNotesApi~billingNotesIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteResponse}
     */
    billingNotesIdDelete(authorization, id, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling billingNotesIdDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling billingNotesIdDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeleteResponse;
      return this.apiClient.callApi(
        '/billing-notes/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingNotesIdGet operation.
     * @callback module:api/BillingNotesApi~billingNotesIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get billing notes document.
     * เรียกดูข้อมูลเอกสารใบวางบิลตามเลขที่เอกสารที่ต้องการ
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId
     * @param {module:api/BillingNotesApi~billingNotesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    billingNotesIdGet(authorization, id, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling billingNotesIdGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling billingNotesIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineDocumentResponse;
      return this.apiClient.callApi(
        '/billing-notes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingNotesIdPut operation.
     * @callback module:api/BillingNotesApi~billingNotesIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit billing notes document.
     * แก้ไขข้อมูลเอกสารใบวางบิล ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอวางบิล (Awaiting)
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId
     * @param {module:model/UpdateInlineDocument} updateInlineDocument 
     * @param {module:api/BillingNotesApi~billingNotesIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    billingNotesIdPut(authorization, id, updateInlineDocument, callback) {
      let postBody = updateInlineDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling billingNotesIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling billingNotesIdPut");
      }
      // verify the required parameter 'updateInlineDocument' is set
      if (updateInlineDocument === undefined || updateInlineDocument === null) {
        throw new Error("Missing the required parameter 'updateInlineDocument' when calling billingNotesIdPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineDocumentResponse;
      return this.apiClient.callApi(
        '/billing-notes/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingNotesIdStatusStatusIdPost operation.
     * @callback module:api/BillingNotesApi~billingNotesIdStatusStatusIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change status of billing notes document.
     * เปลี่ยนสถานะของเอกสารใบวางบิล สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอวางบิล (awaiting)
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId
     * @param {String} statusId เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รอวางบิล <br> approved = วางบิลแล้ว <br> approvedandprocessed = เปิดบิลแล้ว <br> void = ยกเลิก
     * @param {module:api/BillingNotesApi~billingNotesIdStatusStatusIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    billingNotesIdStatusStatusIdPost(authorization, id, statusId, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling billingNotesIdStatusStatusIdPost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling billingNotesIdStatusStatusIdPost");
      }
      // verify the required parameter 'statusId' is set
      if (statusId === undefined || statusId === null) {
        throw new Error("Missing the required parameter 'statusId' when calling billingNotesIdStatusStatusIdPost");
      }

      let pathParams = {
        'id': id,
        'statusId': statusId
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineDocumentResponse;
      return this.apiClient.callApi(
        '/billing-notes/{id}/status/{statusId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingNotesInlinePost operation.
     * @callback module:api/BillingNotesApi~billingNotesInlinePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create billing notes document with discount and tax inline.
     * สร้างเอกสารใบวางบิล แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวางบิล (awaiting) <br> <br> ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้
     * @param {String} authorization 
     * @param {module:model/InlineDocument} inlineDocument 
     * @param {module:api/BillingNotesApi~billingNotesInlinePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    billingNotesInlinePost(authorization, inlineDocument, callback) {
      let postBody = inlineDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling billingNotesInlinePost");
      }
      // verify the required parameter 'inlineDocument' is set
      if (inlineDocument === undefined || inlineDocument === null) {
        throw new Error("Missing the required parameter 'inlineDocument' when calling billingNotesInlinePost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineDocumentResponse;
      return this.apiClient.callApi(
        '/billing-notes/inline', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingNotesPost operation.
     * @callback module:api/BillingNotesApi~billingNotesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimpleDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create billing notes document.
     * สร้างเอกสารใบวางบิล เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอวาบิล (awaiting) <br> <br> ข้อมูลการออกเอกสารใบวางบิล : https://flowaccount.com/blog/ใบวางบิล-ใบแจ้งหนี้
     * @param {String} authorization 
     * @param {module:model/SimpleDocument} simpleDocument 
     * @param {module:api/BillingNotesApi~billingNotesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimpleDocumentResponse}
     */
    billingNotesPost(authorization, simpleDocument, callback) {
      let postBody = simpleDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling billingNotesPost");
      }
      // verify the required parameter 'simpleDocument' is set
      if (simpleDocument === undefined || simpleDocument === null) {
        throw new Error("Missing the required parameter 'simpleDocument' when calling billingNotesPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SimpleDocumentResponse;
      return this.apiClient.callApi(
        '/billing-notes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the billingNotesSharedocumentPost operation.
     * @callback module:api/BillingNotesApi~billingNotesSharedocumentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShareDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Share link billing notes document.
     * แชร์ลิงค์ เอกสารใบวางบิลที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร
     * @param {String} authorization 
     * @param {module:model/ShareDocument} shareDocument 
     * @param {module:api/BillingNotesApi~billingNotesSharedocumentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShareDocumentResponse}
     */
    billingNotesSharedocumentPost(authorization, shareDocument, callback) {
      let postBody = shareDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling billingNotesSharedocumentPost");
      }
      // verify the required parameter 'shareDocument' is set
      if (shareDocument === undefined || shareDocument === null) {
        throw new Error("Missing the required parameter 'shareDocument' when calling billingNotesSharedocumentPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ShareDocumentResponse;
      return this.apiClient.callApi(
        '/billing-notes/sharedocument', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
