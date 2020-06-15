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
import OneOfInlineDocumentWithPaymentReceivingCashInlineDocumentWithPaymentReceivingTransferInlineDocumentWithPaymentReceivingChequeInlineDocumentWithPaymentReceivingCreditCard from '../model/OneOfInlineDocumentWithPaymentReceivingCashInlineDocumentWithPaymentReceivingTransferInlineDocumentWithPaymentReceivingChequeInlineDocumentWithPaymentReceivingCreditCard';
import OneOfPaymentReceivingCashPaymentReceivingTransferPaymentReceivingChequePaymentReceivingCreditCard from '../model/OneOfPaymentReceivingCashPaymentReceivingTransferPaymentReceivingChequePaymentReceivingCreditCard';
import OneOfSimpleDocumentWithPaymentReceivingCashSimpleDocumentWithPaymentReceivingTransferSimpleDocumentWithPaymentReceivingChequeSimpleDocumentWithPaymentReceivingCreditCard from '../model/OneOfSimpleDocumentWithPaymentReceivingCashSimpleDocumentWithPaymentReceivingTransferSimpleDocumentWithPaymentReceivingChequeSimpleDocumentWithPaymentReceivingCreditCard';
import SendEmailCoppies from '../model/SendEmailCoppies';
import SendEmailResponse from '../model/SendEmailResponse';
import ShareDocument from '../model/ShareDocument';
import ShareDocumentResponse from '../model/ShareDocumentResponse';
import SimpleDocument from '../model/SimpleDocument';
import SimpleDocumentResponse from '../model/SimpleDocumentResponse';
import UNKNOWN_BASE_TYPE from '../model/UNKNOWN_BASE_TYPE';
import UpdateInlineDocument from '../model/UpdateInlineDocument';

/**
* Receipt service.
* @module api/ReceiptApi
* @version 2-oas3
*/
export default class ReceiptApi {

    /**
    * Constructs a new ReceiptApi. 
    * @alias module:api/ReceiptApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the receiptsEmailDocumentPost operation.
     * @callback module:api/ReceiptApi~receiptsEmailDocumentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send email receipt document.
     * ส่งเอกสารใบเสร็จรับเงิน ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ
     * @param {String} authorization 
     * @param {module:model/SendEmailCoppies} sendEmailCoppies 
     * @param {module:api/ReceiptApi~receiptsEmailDocumentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SendEmailResponse}
     */
    receiptsEmailDocumentPost(authorization, sendEmailCoppies, callback) {
      let postBody = sendEmailCoppies;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling receiptsEmailDocumentPost");
      }
      // verify the required parameter 'sendEmailCoppies' is set
      if (sendEmailCoppies === undefined || sendEmailCoppies === null) {
        throw new Error("Missing the required parameter 'sendEmailCoppies' when calling receiptsEmailDocumentPost");
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
        '/receipts/email-document', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the receiptsGet operation.
     * @callback module:api/ReceiptApi~receiptsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list all receipt documents
     * เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ทั้งหมดในระบบ
     * @param {Number} currentPage Query current page document receipts. <br>Example Pattern: <ex>/receipts?currentPage=1 </ex><ex>/receipts?currentPage=1&pageSize=20</ex>
     * @param {Number} pageSize Query document receipts list amount per page. <br>Example Pattern: <ex> /receipts?pageSize=20 </ex>
     * @param {String} authorization 
     * @param {Object} opts Optional parameters
     * @param {String} opts.sortBy Query document receipts list amount per page. <br>Example Pattern: <ex> /receipts?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/receipts?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/receipts?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/receipts?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
     * @param {String} opts.filter 
     * @param {module:api/ReceiptApi~receiptsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    receiptsGet(currentPage, pageSize, authorization, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'currentPage' is set
      if (currentPage === undefined || currentPage === null) {
        throw new Error("Missing the required parameter 'currentPage' when calling receiptsGet");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling receiptsGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling receiptsGet");
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
        '/receipts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the receiptsIdAttachmentPost operation.
     * @callback module:api/ReceiptApi~receiptsIdAttachmentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttachmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Attachment to receipt document.
     * แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ
     * @param {String} authorization 
     * @param {String} id documentId หรือ recordId ของเอกสารที่ต้องการแนบ
     * @param {Object} opts Optional parameters
     * @param {File} opts.file รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
     * @param {module:api/ReceiptApi~receiptsIdAttachmentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttachmentResponse}
     */
    receiptsIdAttachmentPost(authorization, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling receiptsIdAttachmentPost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling receiptsIdAttachmentPost");
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
        '/receipts/{id}/attachment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the receiptsIdDelete operation.
     * @callback module:api/ReceiptApi~receiptsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete receipt document.
     * ลบ เอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId
     * @param {module:api/ReceiptApi~receiptsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteResponse}
     */
    receiptsIdDelete(authorization, id, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling receiptsIdDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling receiptsIdDelete");
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
        '/receipts/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the receiptsIdGet operation.
     * @callback module:api/ReceiptApi~receiptsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get receipt document.
     * เรียกดูข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการ
     * @param {String} authorization 
     * @param {String} id 
     * @param {module:api/ReceiptApi~receiptsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    receiptsIdGet(authorization, id, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling receiptsIdGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling receiptsIdGet");
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
        '/receipts/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the receiptsIdPaymentPost operation.
     * @callback module:api/ReceiptApi~receiptsIdPaymentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change paid status of receipt document.
     * เก็บเงิน เอกสารใบเสร็จรับเงิน (เงินสด) เปลี่ยนสถานะเป็น เก็บเงินแล้ว
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId หรือ documentId
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ReceiptApi~receiptsIdPaymentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    receiptsIdPaymentPost(authorization, id, UNKNOWN_BASE_TYPE, callback) {
      let postBody = UNKNOWN_BASE_TYPE;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling receiptsIdPaymentPost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling receiptsIdPaymentPost");
      }
      // verify the required parameter 'UNKNOWN_BASE_TYPE' is set
      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling receiptsIdPaymentPost");
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
        '/receipts/{id}/payment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the receiptsIdPut operation.
     * @callback module:api/ReceiptApi~receiptsIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit receipt document.
     * แก้ไขข้อมูลเอกสารใบเสร็จรับเงิน ตามเลขที่เอกสารที่ต้องการและเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId
     * @param {module:model/UpdateInlineDocument} updateInlineDocument 
     * @param {module:api/ReceiptApi~receiptsIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    receiptsIdPut(authorization, id, updateInlineDocument, callback) {
      let postBody = updateInlineDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling receiptsIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling receiptsIdPut");
      }
      // verify the required parameter 'updateInlineDocument' is set
      if (updateInlineDocument === undefined || updateInlineDocument === null) {
        throw new Error("Missing the required parameter 'updateInlineDocument' when calling receiptsIdPut");
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
        '/receipts/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the receiptsIdStatusStatusIdPost operation.
     * @callback module:api/ReceiptApi~receiptsIdStatusStatusIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change status of receipt document.
     * เปลี่ยนสถานะของเอกสารใบเสร็จรับเงิน สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId
     * @param {String} statusId เปลี่ยนสถานะเอกสารได้ 1 สถานะ <br> void = ยกเลิก
     * @param {module:api/ReceiptApi~receiptsIdStatusStatusIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    receiptsIdStatusStatusIdPost(authorization, id, statusId, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling receiptsIdStatusStatusIdPost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling receiptsIdStatusStatusIdPost");
      }
      // verify the required parameter 'statusId' is set
      if (statusId === undefined || statusId === null) {
        throw new Error("Missing the required parameter 'statusId' when calling receiptsIdStatusStatusIdPost");
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
        '/receipts/{id}/status/{statusId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the receiptsInlinePost operation.
     * @callback module:api/ReceiptApi~receiptsInlinePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create receipt document with discount and tax inline.
     * สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน
     * @param {String} authorization 
     * @param {module:model/InlineDocument} inlineDocument 
     * @param {module:api/ReceiptApi~receiptsInlinePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    receiptsInlinePost(authorization, inlineDocument, callback) {
      let postBody = inlineDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling receiptsInlinePost");
      }
      // verify the required parameter 'inlineDocument' is set
      if (inlineDocument === undefined || inlineDocument === null) {
        throw new Error("Missing the required parameter 'inlineDocument' when calling receiptsInlinePost");
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
        '/receipts/inline', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the receiptsInlineWithPaymentPost operation.
     * @callback module:api/ReceiptApi~receiptsInlineWithPaymentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create receipt document with discount and tax inline with payment.
     * สร้างเอกสารใบเสร็จรับเงิน แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้าพร้อมเก็บเงิน <br>เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)
     * @param {String} authorization 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ReceiptApi~receiptsInlineWithPaymentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineDocumentResponse}
     */
    receiptsInlineWithPaymentPost(authorization, UNKNOWN_BASE_TYPE, callback) {
      let postBody = UNKNOWN_BASE_TYPE;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling receiptsInlineWithPaymentPost");
      }
      // verify the required parameter 'UNKNOWN_BASE_TYPE' is set
      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling receiptsInlineWithPaymentPost");
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
        '/receipts/inline/with-payment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the receiptsPost operation.
     * @callback module:api/ReceiptApi~receiptsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimpleDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create receipt document.
     * สร้างเอกสารใบเสร็จรับเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting) <br> <br> ข้อมูลการออกเอกสารใบเสร็จรับเงิน : https://flowaccount.com/blog/ใบเสร็จรับเงิน
     * @param {String} authorization 
     * @param {module:model/SimpleDocument} simpleDocument 
     * @param {module:api/ReceiptApi~receiptsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimpleDocumentResponse}
     */
    receiptsPost(authorization, simpleDocument, callback) {
      let postBody = simpleDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling receiptsPost");
      }
      // verify the required parameter 'simpleDocument' is set
      if (simpleDocument === undefined || simpleDocument === null) {
        throw new Error("Missing the required parameter 'simpleDocument' when calling receiptsPost");
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
        '/receipts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the receiptsSharedocumentPost operation.
     * @callback module:api/ReceiptApi~receiptsSharedocumentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShareDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Share link receipt document.
     * แชร์ลิงค์ เอกสารใบเสร็จรับเงิน ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร
     * @param {String} authorization 
     * @param {module:model/ShareDocument} shareDocument 
     * @param {module:api/ReceiptApi~receiptsSharedocumentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShareDocumentResponse}
     */
    receiptsSharedocumentPost(authorization, shareDocument, callback) {
      let postBody = shareDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling receiptsSharedocumentPost");
      }
      // verify the required parameter 'shareDocument' is set
      if (shareDocument === undefined || shareDocument === null) {
        throw new Error("Missing the required parameter 'shareDocument' when calling receiptsSharedocumentPost");
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
        '/receipts/sharedocument', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the receiptsWithPaymentPost operation.
     * @callback module:api/ReceiptApi~receiptsWithPaymentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SimpleDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create receipt document with payment.
     * สร้างเอกสารใบเสร็จรับเงิน พร้อมเก็บเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ เก็บเงินแล้ว (paid)
     * @param {String} authorization 
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ReceiptApi~receiptsWithPaymentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SimpleDocumentResponse}
     */
    receiptsWithPaymentPost(authorization, UNKNOWN_BASE_TYPE, callback) {
      let postBody = UNKNOWN_BASE_TYPE;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling receiptsWithPaymentPost");
      }
      // verify the required parameter 'UNKNOWN_BASE_TYPE' is set
      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling receiptsWithPaymentPost");
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
        '/receipts/with-payment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}