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
import Contact from '../model/Contact';
import ContactResponse from '../model/ContactResponse';
import DeleteResponse from '../model/DeleteResponse';

/**
* Contacts service.
* @module api/ContactsApi
* @version 2-oas3
*/
export default class ContactsApi {

    /**
    * Constructs a new ContactsApi. 
    * @alias module:api/ContactsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the contactsGet operation.
     * @callback module:api/ContactsApi~contactsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list all contacts.
     * @param {String} authorization 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.currentPage Query current page contacts. <br>Example Pattern: <ex>/contacts?currentPage=1 </ex><ex>/contacts?currentPage=1&pageSize=20</ex>
     * @param {Number} opts.pageSize Query contacts list amount per page. <br>Example Pattern: <ex> /contacts?pageSize=20 </ex>
     * @param {String} opts.sortBy Contact Sort By Example Pattern:<br> namelocal = Sort By Contact Name <br> contactPerson = Sort By Contact Person <br> email = Sort By Email <br> phone2 = Sort By Contact Mobile <br> contactType = Sort By Contact Type <ex> /contacts?sortBy=[{'name':'contactPerson','sortOrder':'desc'}]</ex>
     * @param {String} opts.filter Contact Filter Example Pattern: <ex> /contacts?filter=[{'columnName':'contactType','columnValue':'3','columnPredicateOperator':'And'}]</ex>
     * @param {module:api/ContactsApi~contactsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactResponse}
     */
    contactsGet(authorization, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling contactsGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'currentPage': opts['currentPage'],
        'pageSize': opts['pageSize'],
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
      let returnType = ContactResponse;
      return this.apiClient.callApi(
        '/contacts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsIdDelete operation.
     * @callback module:api/ContactsApi~contactsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete contacts.
     * @param {String} authorization 
     * @param {String} id เลข Id Contact
     * @param {module:api/ContactsApi~contactsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteResponse}
     */
    contactsIdDelete(authorization, id, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling contactsIdDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling contactsIdDelete");
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
        '/contacts/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsIdGet operation.
     * @callback module:api/ContactsApi~contactsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contacts.
     * @param {String} authorization 
     * @param {String} id เลข Id Contact
     * @param {module:api/ContactsApi~contactsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactResponse}
     */
    contactsIdGet(authorization, id, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling contactsIdGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling contactsIdGet");
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
      let returnType = ContactResponse;
      return this.apiClient.callApi(
        '/contacts/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsIdPut operation.
     * @callback module:api/ContactsApi~contactsIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update contacts.
     * @param {String} authorization 
     * @param {String} id เลข Id Contact
     * @param {module:model/Contact} contact 
     * @param {module:api/ContactsApi~contactsIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactResponse}
     */
    contactsIdPut(authorization, id, contact, callback) {
      let postBody = contact;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling contactsIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling contactsIdPut");
      }
      // verify the required parameter 'contact' is set
      if (contact === undefined || contact === null) {
        throw new Error("Missing the required parameter 'contact' when calling contactsIdPut");
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
      let returnType = ContactResponse;
      return this.apiClient.callApi(
        '/contacts/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsPost operation.
     * @callback module:api/ContactsApi~contactsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create contacts
     * @param {String} authorization 
     * @param {module:model/Contact} contact 
     * @param {module:api/ContactsApi~contactsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactResponse}
     */
    contactsPost(authorization, contact, callback) {
      let postBody = contact;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling contactsPost");
      }
      // verify the required parameter 'contact' is set
      if (contact === undefined || contact === null) {
        throw new Error("Missing the required parameter 'contact' when calling contactsPost");
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
      let returnType = ContactResponse;
      return this.apiClient.callApi(
        '/contacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
