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
import CompanyInfo from '../model/CompanyInfo';
import CompanyInfoResponse from '../model/CompanyInfoResponse';

/**
* BusinessInfomation service.
* @module api/BusinessInfomationApi
* @version 2-oas3
*/
export default class BusinessInfomationApi {

    /**
    * Constructs a new BusinessInfomationApi. 
    * @alias module:api/BusinessInfomationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the companyInfoGet operation.
     * @callback module:api/BusinessInfomationApi~companyInfoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CompanyInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get business infomation
     * เรียกดูข้อมูลธรุกิจ
     * @param {String} authorization 
     * @param {module:api/BusinessInfomationApi~companyInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompanyInfoResponse}
     */
    companyInfoGet(authorization, callback) {
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling companyInfoGet");
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
      let returnType = CompanyInfoResponse;
      return this.apiClient.callApi(
        '/company/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the companyInfoPut operation.
     * @callback module:api/BusinessInfomationApi~companyInfoPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CompanyInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit business infomation
     * แก้ไขข้อมูลธรุกิจ
     * @param {String} authorization 
     * @param {module:model/CompanyInfo} companyInfo 
     * @param {module:api/BusinessInfomationApi~companyInfoPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CompanyInfoResponse}
     */
    companyInfoPut(authorization, companyInfo, callback) {
      let postBody = companyInfo;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling companyInfoPut");
      }
      // verify the required parameter 'companyInfo' is set
      if (companyInfo === undefined || companyInfo === null) {
        throw new Error("Missing the required parameter 'companyInfo' when calling companyInfoPut");
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
      let returnType = CompanyInfoResponse;
      return this.apiClient.callApi(
        '/company/info', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}