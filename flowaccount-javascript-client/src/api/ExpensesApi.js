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
import AllExpenseDocumentResponse from '../model/AllExpenseDocumentResponse';
import AttachmentResponse from '../model/AttachmentResponse';
import BusinessCategory from '../model/BusinessCategory';
import DeleteResponse from '../model/DeleteResponse';
import ExpenseInlineDocument from '../model/ExpenseInlineDocument';
import ExpenseInlineDocumentResponse from '../model/ExpenseInlineDocumentResponse';
import ExpenseInlineDocumentWithPaymentPaid from '../model/ExpenseInlineDocumentWithPaymentPaid';
import ExpenseSimpleDocument from '../model/ExpenseSimpleDocument';
import ExpenseSimpleDocumentResponse from '../model/ExpenseSimpleDocumentResponse';
import ExpenseSimpleDocumentWithPaymentPaid from '../model/ExpenseSimpleDocumentWithPaymentPaid';
import PaymentPaidDocument from '../model/PaymentPaidDocument';
import SendEmail from '../model/SendEmail';
import SendEmailResponse from '../model/SendEmailResponse';
import SendEmailSimple from '../model/SendEmailSimple';
import ShareDocument from '../model/ShareDocument';
import ShareDocumentResponse from '../model/ShareDocumentResponse';
import UpdateExpenseDocument from '../model/UpdateExpenseDocument';

/**
* Expenses service.
* @module api/ExpensesApi
* @version 2-oas3
*/
export default class ExpensesApi {

    /**
    * Constructs a new ExpensesApi. 
    * @alias module:api/ExpensesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the expensesCategoriesAccountingGet operation.
     * @callback module:api/ExpensesApi~expensesCategoriesAccountingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BusinessCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Accounting categories expenses document.
     * เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักบัญชี)
     * @param {String} authorization 
     * @param {module:api/ExpensesApi~expensesCategoriesAccountingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BusinessCategory}
     */
    expensesCategoriesAccountingGet(authorization, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesCategoriesAccountingGet");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BusinessCategory;
      return this.apiClient.callApi(
        '/expenses/categories/accounting', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the expensesCategoriesBusinessGet operation.
     * @callback module:api/ExpensesApi~expensesCategoriesBusinessGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BusinessCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Business categories expenses document.
     * เรียกดูข้อมูลหมวดหมู่เอกสารค่าใช้จ่าย (สำหรับนักธุรกิจ)
     * @param {String} authorization 
     * @param {module:api/ExpensesApi~expensesCategoriesBusinessGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BusinessCategory}
     */
    expensesCategoriesBusinessGet(authorization, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesCategoriesBusinessGet");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BusinessCategory;
      return this.apiClient.callApi(
        '/expenses/categories/business', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the expensesEmailDocumentPost operation.
     * @callback module:api/ExpensesApi~expensesEmailDocumentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendEmailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send email expenses document.
     * ส่งเอกสารค่าใช้จ่าย ผ่านทางอีเมล ตามเลขที่เอกสารที่ต้องการ
     * @param {String} authorization 
     * @param {module:model/SendEmailSimple} sendEmailSimple 
     * @param {module:api/ExpensesApi~expensesEmailDocumentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SendEmailResponse}
     */
    expensesEmailDocumentPost(authorization, sendEmailSimple, callback) {
      let postBody = sendEmailSimple;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesEmailDocumentPost");
      }
      // verify the required parameter 'sendEmailSimple' is set
      if (sendEmailSimple === undefined || sendEmailSimple === null) {
        throw new Error("Missing the required parameter 'sendEmailSimple' when calling expensesEmailDocumentPost");
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
        '/expenses/email-document', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the expensesGet operation.
     * @callback module:api/ExpensesApi~expensesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AllExpenseDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list all expenses documents.
     * เรียกดูข้อมูลเอกสารค่าใช้จ่ายทั้งหมดในระบบ
     * @param {Number} currentPage Query current page expenses document. <br>Example Pattern: <ex>/expenses?currentPage=1 </ex><ex>/expenses?currentPage=1&pageSize=20</ex>
     * @param {Number} pageSize Query expenses document list amount per page. <br>Example Pattern: <ex> /expenses?pageSize=20 </ex>
     * @param {String} authorization 
     * @param {Object} opts Optional parameters
     * @param {String} opts.sortBy Query sort by expense document. <br>Example Pattern: <ex> /expenses?sortBy=[{'name':'publishedOn','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}] </ex><ex>/expenses?sortBy=[{'name':'Contact.NameLocal','sortOrder':'desc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Value','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex><ex>/expenses?sortBy=[{'name':'Status','sortOrder':'asc'},{'name':'documentSerial','sortOrder':'desc'}]</ex>
     * @param {String} opts.filter Query filter expenses document. <br>Example Pattern: <ex> /expenses?filter=[{'columnName':'Status','columnValue':'processed','columnPredicateOperator':'And'}] </ex>
     * @param {module:api/ExpensesApi~expensesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AllExpenseDocumentResponse}
     */
    expensesGet(currentPage, pageSize, authorization, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'currentPage' is set
      if (currentPage === undefined || currentPage === null) {
        throw new Error("Missing the required parameter 'currentPage' when calling expensesGet");
      }
      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling expensesGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesGet");
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
      let returnType = AllExpenseDocumentResponse;
      return this.apiClient.callApi(
        '/expenses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the expensesIdAttachmentPost operation.
     * @callback module:api/ExpensesApi~expensesIdAttachmentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttachmentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attachment to expenses document.
     * แนบไฟล์ รูปภาพ หรือ เอกสารที่เกี่ยวข้อง ในเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ
     * @param {String} authorization 
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {File} opts.file 
     * @param {module:api/ExpensesApi~expensesIdAttachmentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttachmentResponse}
     */
    expensesIdAttachmentPost(authorization, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesIdAttachmentPost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling expensesIdAttachmentPost");
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
        '/expenses/{id}/attachment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the expensesIdDelete operation.
     * @callback module:api/ExpensesApi~expensesIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete expenses document.
     * ลบ เอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการ <br> ** การลบเอกสาร เอกสารต้องอยู่ในสถานะ รอดำเนินการ 
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId
     * @param {module:api/ExpensesApi~expensesIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteResponse}
     */
    expensesIdDelete(authorization, id, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesIdDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling expensesIdDelete");
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
        '/expenses/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the expensesIdGet operation.
     * @callback module:api/ExpensesApi~expensesIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AllExpenseDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get expenses document.
     * เรียกดูข้อมูลเอกสารค่าใช้จ่ายตามเลขที่เอกสารที่ต้องการ
     * @param {String} authorization 
     * @param {String} id 
     * @param {module:api/ExpensesApi~expensesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AllExpenseDocumentResponse}
     */
    expensesIdGet(authorization, id, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesIdGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling expensesIdGet");
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
      let returnType = AllExpenseDocumentResponse;
      return this.apiClient.callApi(
        '/expenses/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the expensesIdPaymentPost operation.
     * @callback module:api/ExpensesApi~expensesIdPaymentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExpenseSimpleDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change status is paid expenses document.
     * ชำระเงิน เอกสารค่าใช้จ่ายเปลี่ยน สถานะเป็น ชำระเงินแล้ว
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId หรือ documentId
     * @param {module:model/PaymentPaidDocument} paymentPaidDocument 
     * @param {module:api/ExpensesApi~expensesIdPaymentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExpenseSimpleDocumentResponse}
     */
    expensesIdPaymentPost(authorization, id, paymentPaidDocument, callback) {
      let postBody = paymentPaidDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesIdPaymentPost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling expensesIdPaymentPost");
      }
      // verify the required parameter 'paymentPaidDocument' is set
      if (paymentPaidDocument === undefined || paymentPaidDocument === null) {
        throw new Error("Missing the required parameter 'paymentPaidDocument' when calling expensesIdPaymentPost");
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
      let returnType = ExpenseSimpleDocumentResponse;
      return this.apiClient.callApi(
        '/expenses/{id}/payment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the expensesIdPut operation.
     * @callback module:api/ExpensesApi~expensesIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExpenseInlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit expenses document.
     * แก้ไขข้อมูลเอกสารค่าใช้จ่าย ตามเลขที่เอกสารที่ต้องการเอกสารต้องเป็นสถานะ รอดำเนินการ (Awaiting)
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId
     * @param {module:model/UpdateExpenseDocument} updateExpenseDocument 
     * @param {module:api/ExpensesApi~expensesIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExpenseInlineDocumentResponse}
     */
    expensesIdPut(authorization, id, updateExpenseDocument, callback) {
      let postBody = updateExpenseDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling expensesIdPut");
      }
      // verify the required parameter 'updateExpenseDocument' is set
      if (updateExpenseDocument === undefined || updateExpenseDocument === null) {
        throw new Error("Missing the required parameter 'updateExpenseDocument' when calling expensesIdPut");
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
      let returnType = ExpenseInlineDocumentResponse;
      return this.apiClient.callApi(
        '/expenses/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the expensesIdStatusStatusIdPost operation.
     * @callback module:api/ExpensesApi~expensesIdStatusStatusIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExpenseInlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change status expenses document.
     * เปลี่ยนสถานะของเอกสารค่าใช้จ่าย สร้างเอกสารใหม่ครั้งแรกจะได้รับสถานะ รอดำเนินการ (awaiting)
     * @param {String} authorization 
     * @param {String} id ID เอกสารใช้ recordId
     * @param {String} statusId เปลี่ยนสถานะเอกสารได้ 3 สถานะ <br> awaiting = รอดำเนินการ <br> received = รับใบเสร็จแล้ว <br> void = ยกเลิก
     * @param {module:api/ExpensesApi~expensesIdStatusStatusIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExpenseInlineDocumentResponse}
     */
    expensesIdStatusStatusIdPost(authorization, id, statusId, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesIdStatusStatusIdPost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling expensesIdStatusStatusIdPost");
      }
      // verify the required parameter 'statusId' is set
      if (statusId === undefined || statusId === null) {
        throw new Error("Missing the required parameter 'statusId' when calling expensesIdStatusStatusIdPost");
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
      let returnType = ExpenseInlineDocumentResponse;
      return this.apiClient.callApi(
        '/expenses/{id}/status/{statusId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the expensesInlinePost operation.
     * @callback module:api/ExpensesApi~expensesInlinePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExpenseInlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create expenses document inline discount or inline vat.
     * สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)
     * @param {String} authorization 
     * @param {module:model/ExpenseInlineDocument} expenseInlineDocument 
     * @param {module:api/ExpensesApi~expensesInlinePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExpenseInlineDocumentResponse}
     */
    expensesInlinePost(authorization, expenseInlineDocument, callback) {
      let postBody = expenseInlineDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesInlinePost");
      }
      // verify the required parameter 'expenseInlineDocument' is set
      if (expenseInlineDocument === undefined || expenseInlineDocument === null) {
        throw new Error("Missing the required parameter 'expenseInlineDocument' when calling expensesInlinePost");
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
      let returnType = ExpenseInlineDocumentResponse;
      return this.apiClient.callApi(
        '/expenses/inline', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the expensesInlineWithPaymentPost operation.
     * @callback module:api/ExpensesApi~expensesInlineWithPaymentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExpenseInlineDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create expenses document inline discount or inline vat with payment.
     * สร้างเอกสารค่าใช้จ่าย แบบส่วนลด หรือ ภาษี แยกตามรายการสินค้า พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)
     * @param {String} authorization 
     * @param {module:model/ExpenseInlineDocumentWithPaymentPaid} expenseInlineDocumentWithPaymentPaid 
     * @param {module:api/ExpensesApi~expensesInlineWithPaymentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExpenseInlineDocumentResponse}
     */
    expensesInlineWithPaymentPost(authorization, expenseInlineDocumentWithPaymentPaid, callback) {
      let postBody = expenseInlineDocumentWithPaymentPaid;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesInlineWithPaymentPost");
      }
      // verify the required parameter 'expenseInlineDocumentWithPaymentPaid' is set
      if (expenseInlineDocumentWithPaymentPaid === undefined || expenseInlineDocumentWithPaymentPaid === null) {
        throw new Error("Missing the required parameter 'expenseInlineDocumentWithPaymentPaid' when calling expensesInlineWithPaymentPost");
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
      let returnType = ExpenseInlineDocumentResponse;
      return this.apiClient.callApi(
        '/expenses/inline/with-payment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the expensesPost operation.
     * @callback module:api/ExpensesApi~expensesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExpenseSimpleDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create expenses document.
     * สร้างเอกสารค่าใช้จ่าย เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ รอดำเนินการ (awaiting)
     * @param {String} authorization 
     * @param {module:model/ExpenseSimpleDocument} expenseSimpleDocument 
     * @param {module:api/ExpensesApi~expensesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExpenseSimpleDocumentResponse}
     */
    expensesPost(authorization, expenseSimpleDocument, callback) {
      let postBody = expenseSimpleDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesPost");
      }
      // verify the required parameter 'expenseSimpleDocument' is set
      if (expenseSimpleDocument === undefined || expenseSimpleDocument === null) {
        throw new Error("Missing the required parameter 'expenseSimpleDocument' when calling expensesPost");
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
      let returnType = ExpenseSimpleDocumentResponse;
      return this.apiClient.callApi(
        '/expenses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the expensesSharedocumentPost operation.
     * @callback module:api/ExpensesApi~expensesSharedocumentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ShareDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Share link expenses document.
     * แชร์ลิงค์ เอกสารค่าใช้จ่าย ที่ต้องการ จะได้รับลิงค์สำหรับแชร์และเรียกดูเอกสาร
     * @param {String} authorization 
     * @param {module:model/ShareDocument} shareDocument 
     * @param {module:api/ExpensesApi~expensesSharedocumentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ShareDocumentResponse}
     */
    expensesSharedocumentPost(authorization, shareDocument, callback) {
      let postBody = shareDocument;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesSharedocumentPost");
      }
      // verify the required parameter 'shareDocument' is set
      if (shareDocument === undefined || shareDocument === null) {
        throw new Error("Missing the required parameter 'shareDocument' when calling expensesSharedocumentPost");
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
        '/expenses/sharedocument', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the expensesWithPaymentPost operation.
     * @callback module:api/ExpensesApi~expensesWithPaymentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExpenseSimpleDocumentResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create expenses document with payment.
     * สร้างเอกสารค่าใช้จ่าย พร้อมชำระเงิน เมื่อสร้างสำเร็จสถานะเอกสารจะอยู่ในสถานะ ชำระเงินแล้ว (paid)
     * @param {String} authorization 
     * @param {module:model/ExpenseSimpleDocumentWithPaymentPaid} expenseSimpleDocumentWithPaymentPaid 
     * @param {module:api/ExpensesApi~expensesWithPaymentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExpenseSimpleDocumentResponse}
     */
    expensesWithPaymentPost(authorization, expenseSimpleDocumentWithPaymentPaid, callback) {
      let postBody = expenseSimpleDocumentWithPaymentPaid;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling expensesWithPaymentPost");
      }
      // verify the required parameter 'expenseSimpleDocumentWithPaymentPaid' is set
      if (expenseSimpleDocumentWithPaymentPaid === undefined || expenseSimpleDocumentWithPaymentPaid === null) {
        throw new Error("Missing the required parameter 'expenseSimpleDocumentWithPaymentPaid' when calling expensesWithPaymentPost");
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
      let returnType = ExpenseSimpleDocumentResponse;
      return this.apiClient.callApi(
        '/expenses/with-payment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
