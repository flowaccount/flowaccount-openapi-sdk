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
* PurchaseOrder service.
* @module api/PurchaseOrderApi
* @version 2-oas3
*/
export default class PurchaseOrderApi {

    /**
    * Constructs a new PurchaseOrderApi. 
    * @alias module:api/PurchaseOrderApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the purchasesOrdersEmailDocumentPost operation.
     * @callback module:api/PurchaseOrderApi~purchasesOrdersEmailDocumentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send email purchase order document.
     * ส่งเอกสารใบสั่งซื้อ ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ
     * @param {String} authorization 
     * @param {module:model/SendEmailCoppies} sendEmailCoppies 
     * @param {module:api/PurchaseOrderApi~purchasesOrdersEmailDocumentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SendEmailResponse}
     */
    purchasesOrdersEmailDocumentPost(authorization, sendEmailCoppies, callback) {
      let postBody = sendEmailCoppies;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling purchasesOrdersEmailDocumentPost");
      }
      // verify the required parameter 'sendEmailCoppies' is set
      if (sendEmailCoppies === undefined || sendEmailCoppies === null) {
        throw new Error("Missing the required parameter 'sendEmailCoppies' when calling purchasesOrdersEmailDocumentPost");
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
        '/purchases-orders/email-document', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the purchasesOrdersGet operation.
     * @callback module:api/PurchaseOrderApi~purchasesOrdersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list all purchase order documents.
     * เรียกดูข้อมูลเอกสารใบสั่งซื้อทั้งหมดในระบบ
     * @param {Number} currentPage Query current page document purchase orders. <br>Example Pattern: <ex>/purchases-orders?currentPage=1 </ex><ex>/purchases-orders?currentPage=1&pageSize=20</ex>
     * @param {Number} pageSize Query document purchase orders list amount per page. <br>Example Pattern: <ex> /purchases-orders?pageSize=20 </ex>
     * @param {String} authorization 
     * @param {Object} opts Optional parameters
     * @param {String} opts.sortBy Query document purchase orders list amount per page. <br>Example Pattern: <ex> /purchases-orders?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/purchases-orders?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases-orders?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/purchases-orders?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
     * @param {String} opts.filter 
     * @param {module:api/PurchaseOrderApi~purchasesOrdersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    purchasesOrdersGet(currentPage, pageSize, authorization, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'currentPage' is set
      if (currentPage === undefined || currentPage === null) {
        throw new Error("Missing the required parameter 'currentPage' when calling purchasesOrdersGet");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling purchasesOrdersGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling purchasesOrdersGet");
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
      let returnType = InlineDocumentResponse;
      return this.apiClient.callApi(
        '/purchases-orders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the purchasesOrdersIdAttachmentPost operation.
     * @callback module:api/PurchaseOrderApi~purchasesOrdersIdAttachmentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttachmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Attachment to purchase order document.
     * แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ
     * @param {String} authorization 
     * @param {String} id documentId หรือ recordId ของเอกสารที่ต้องการแนบ
     * @param {Object} opts Optional parameters
     * @param {File} opts.file รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
     * @param {module:api/PurchaseOrderApi~purchasesOrdersIdAttachmentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttachmentResponse}
     */
    purchasesOrdersIdAttachmentPost(authorization, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling purchasesOrdersIdAttachmentPost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling purchasesOrdersIdAttachmentPost");
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
        '/purchases-orders/{id}/attachment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the purchasesOrdersIdDelete operation.
     * @callback module:api/PurchaseOrderApi~purchasesOrdersIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete purchase order document.
     * ลบ เอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รออนุมัติ 
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId
     * @param {module:api/PurchaseOrderApi~purchasesOrdersIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteResponse}
     */
    purchasesOrdersIdDelete(authorization, id, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling purchasesOrdersIdDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling purchasesOrdersIdDelete");
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
        '/purchases-orders/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the purchasesOrdersIdGet operation.
     * @callback module:api/PurchaseOrderApi~purchasesOrdersIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get purchase order document.
     * เรียกดูข้อมูลเอกสารใบสั่งซื้อตามเลขที่เอกสารที่ต้องการ
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId
     * @param {module:api/PurchaseOrderApi~purchasesOrdersIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    purchasesOrdersIdGet(authorization, id, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling purchasesOrdersIdGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling purchasesOrdersIdGet");
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
        '/purchases-orders/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the purchasesOrdersIdPut operation.
     * @callback module:api/PurchaseOrderApi~purchasesOrdersIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit purchase order document.
     * แก้ไขข้อมูลเอกสารใบสั่งซื้อ ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รออนุมัติ (Awaiting)
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId
     * @param {module:model/UpdateInlineDocument} updateInlineDocument 
     * @param {module:api/PurchaseOrderApi~purchasesOrdersIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    purchasesOrdersIdPut(authorization, id, updateInlineDocument, callback) {
      let postBody = updateInlineDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling purchasesOrdersIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling purchasesOrdersIdPut");
      }
      // verify the required parameter 'updateInlineDocument' is set
      if (updateInlineDocument === undefined || updateInlineDocument === null) {
        throw new Error("Missing the required parameter 'updateInlineDocument' when calling purchasesOrdersIdPut");
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
        '/purchases-orders/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the purchasesOrdersIdStatusStatusIdPost operation.
     * @callback module:api/PurchaseOrderApi~purchasesOrdersIdStatusStatusIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change status of purchase order document.
     * เปลี่ยนสถานะของเอกสารใบสั่งซื้อ สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รออนุมัติ (awaiting)
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId
     * @param {String} statusId เปลี่ยนสถานะเอกสารได้ 4 สถานะ <br> awaiting = รออนุมัติ <br> approved = อนุมัติ <br> approvedandprocessed = ดำเนินการแล้ว <br> void = ยกเลิก
     * @param {module:api/PurchaseOrderApi~purchasesOrdersIdStatusStatusIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    purchasesOrdersIdStatusStatusIdPost(authorization, id, statusId, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling purchasesOrdersIdStatusStatusIdPost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling purchasesOrdersIdStatusStatusIdPost");
      }
      // verify the required parameter 'statusId' is set
      if (statusId === undefined || statusId === null) {
        throw new Error("Missing the required parameter 'statusId' when calling purchasesOrdersIdStatusStatusIdPost");
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
        '/purchases-orders/{id}/status/{statusId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the purchasesOrdersInlinePost operation.
     * @callback module:api/PurchaseOrderApi~purchasesOrdersInlinePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create purchase order document with discount and tax inline.
     * สร้างเอกสารใบสั่งซื้อ แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br>
     * @param {String} authorization 
     * @param {module:model/InlineDocument} inlineDocument 
     * @param {module:api/PurchaseOrderApi~purchasesOrdersInlinePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    purchasesOrdersInlinePost(authorization, inlineDocument, callback) {
      let postBody = inlineDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling purchasesOrdersInlinePost");
      }
      // verify the required parameter 'inlineDocument' is set
      if (inlineDocument === undefined || inlineDocument === null) {
        throw new Error("Missing the required parameter 'inlineDocument' when calling purchasesOrdersInlinePost");
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
        '/purchases-orders/inline', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the purchasesOrdersPost operation.
     * @callback module:api/PurchaseOrderApi~purchasesOrdersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimpleDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create purchase order document.
     * สร้างเอกสารใบสั่งซื้อ เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รออนุมัติ (awaiting) <br>
     * @param {String} authorization 
     * @param {module:model/SimpleDocument} simpleDocument 
     * @param {module:api/PurchaseOrderApi~purchasesOrdersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimpleDocumentResponse}
     */
    purchasesOrdersPost(authorization, simpleDocument, callback) {
      let postBody = simpleDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling purchasesOrdersPost");
      }
      // verify the required parameter 'simpleDocument' is set
      if (simpleDocument === undefined || simpleDocument === null) {
        throw new Error("Missing the required parameter 'simpleDocument' when calling purchasesOrdersPost");
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
        '/purchases-orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the purchasesOrdersSharedocumentPost operation.
     * @callback module:api/PurchaseOrderApi~purchasesOrdersSharedocumentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShareDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Share link purchase order document.
     * แชร์ลิงค์ เอกสารใบสั่งซื้อที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร
     * @param {String} authorization 
     * @param {module:model/ShareDocument} shareDocument 
     * @param {module:api/PurchaseOrderApi~purchasesOrdersSharedocumentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShareDocumentResponse}
     */
    purchasesOrdersSharedocumentPost(authorization, shareDocument, callback) {
      let postBody = shareDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling purchasesOrdersSharedocumentPost");
      }
      // verify the required parameter 'shareDocument' is set
      if (shareDocument === undefined || shareDocument === null) {
        throw new Error("Missing the required parameter 'shareDocument' when calling purchasesOrdersSharedocumentPost");
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
        '/purchases-orders/sharedocument', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
