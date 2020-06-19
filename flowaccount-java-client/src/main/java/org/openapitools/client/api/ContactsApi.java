/*
 * FlowAccount Open API
 * # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer_support@flowaccount.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiCallback;
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.ApiResponse;
import org.openapitools.client.Configuration;
import org.openapitools.client.Pair;
import org.openapitools.client.ProgressRequestBody;
import org.openapitools.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.Contact;
import org.openapitools.client.model.ContactResponse;
import org.openapitools.client.model.DeleteResponse;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ContactsApi {
    private ApiClient localVarApiClient;

    public ContactsApi() {
        this(Configuration.getDefaultApiClient());
    }

    public ContactsApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for contactsGet
     * @param authorization  (required)
     * @param currentPage Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; (optional)
     * @param pageSize Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; (optional)
     * @param sortBy Contact Sort By Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; (optional)
     * @param filter Contact Filter Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; (optional)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call contactsGetCall(String authorization, Integer currentPage, Integer pageSize, String sortBy, String filter, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/contacts";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (currentPage != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("currentPage", currentPage));
        }

        if (pageSize != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("pageSize", pageSize));
        }

        if (sortBy != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("sortBy", sortBy));
        }

        if (filter != null) {
            localVarQueryParams.addAll(localVarApiClient.parameterToPair("filter", filter));
        }

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        if (authorization != null) {
            localVarHeaderParams.put("Authorization", localVarApiClient.parameterToString(authorization));
        }

        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call contactsGetValidateBeforeCall(String authorization, Integer currentPage, Integer pageSize, String sortBy, String filter, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'authorization' is set
        if (authorization == null) {
            throw new ApiException("Missing the required parameter 'authorization' when calling contactsGet(Async)");
        }
        

        okhttp3.Call localVarCall = contactsGetCall(authorization, currentPage, pageSize, sortBy, filter, _callback);
        return localVarCall;

    }

    /**
     * Get list all contacts.
     * 
     * @param authorization  (required)
     * @param currentPage Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; (optional)
     * @param pageSize Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; (optional)
     * @param sortBy Contact Sort By Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; (optional)
     * @param filter Contact Filter Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; (optional)
     * @return ContactResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ContactResponse contactsGet(String authorization, Integer currentPage, Integer pageSize, String sortBy, String filter) throws ApiException {
        ApiResponse<ContactResponse> localVarResp = contactsGetWithHttpInfo(authorization, currentPage, pageSize, sortBy, filter);
        return localVarResp.getData();
    }

    /**
     * Get list all contacts.
     * 
     * @param authorization  (required)
     * @param currentPage Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; (optional)
     * @param pageSize Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; (optional)
     * @param sortBy Contact Sort By Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; (optional)
     * @param filter Contact Filter Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; (optional)
     * @return ApiResponse&lt;ContactResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<ContactResponse> contactsGetWithHttpInfo(String authorization, Integer currentPage, Integer pageSize, String sortBy, String filter) throws ApiException {
        okhttp3.Call localVarCall = contactsGetValidateBeforeCall(authorization, currentPage, pageSize, sortBy, filter, null);
        Type localVarReturnType = new TypeToken<ContactResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get list all contacts. (asynchronously)
     * 
     * @param authorization  (required)
     * @param currentPage Query current page contacts. &lt;br&gt;Example Pattern: &lt;ex&gt;/contacts?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/contacts?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; (optional)
     * @param pageSize Query contacts list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /contacts?pageSize&#x3D;20 &lt;/ex&gt; (optional)
     * @param sortBy Contact Sort By Example Pattern:&lt;br&gt; namelocal &#x3D; Sort By Contact Name &lt;br&gt; contactPerson &#x3D; Sort By Contact Person &lt;br&gt; email &#x3D; Sort By Email &lt;br&gt; phone2 &#x3D; Sort By Contact Mobile &lt;br&gt; contactType &#x3D; Sort By Contact Type &lt;ex&gt; /contacts?sortBy&#x3D;[{&#39;name&#39;:&#39;contactPerson&#39;,&#39;sortOrder&#39;:&#39;desc&#39;}]&lt;/ex&gt; (optional)
     * @param filter Contact Filter Example Pattern: &lt;ex&gt; /contacts?filter&#x3D;[{&#39;columnName&#39;:&#39;contactType&#39;,&#39;columnValue&#39;:&#39;3&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; (optional)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call contactsGetAsync(String authorization, Integer currentPage, Integer pageSize, String sortBy, String filter, final ApiCallback<ContactResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = contactsGetValidateBeforeCall(authorization, currentPage, pageSize, sortBy, filter, _callback);
        Type localVarReturnType = new TypeToken<ContactResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for contactsIdDelete
     * @param authorization  (required)
     * @param id เลข Id Contact (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call contactsIdDeleteCall(String authorization, String id, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/contacts/{id}"
            .replaceAll("\\{" + "id" + "\\}", localVarApiClient.escapeString(id.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        if (authorization != null) {
            localVarHeaderParams.put("Authorization", localVarApiClient.parameterToString(authorization));
        }

        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "DELETE", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call contactsIdDeleteValidateBeforeCall(String authorization, String id, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'authorization' is set
        if (authorization == null) {
            throw new ApiException("Missing the required parameter 'authorization' when calling contactsIdDelete(Async)");
        }
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new ApiException("Missing the required parameter 'id' when calling contactsIdDelete(Async)");
        }
        

        okhttp3.Call localVarCall = contactsIdDeleteCall(authorization, id, _callback);
        return localVarCall;

    }

    /**
     * Delete contacts.
     * 
     * @param authorization  (required)
     * @param id เลข Id Contact (required)
     * @return DeleteResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public DeleteResponse contactsIdDelete(String authorization, String id) throws ApiException {
        ApiResponse<DeleteResponse> localVarResp = contactsIdDeleteWithHttpInfo(authorization, id);
        return localVarResp.getData();
    }

    /**
     * Delete contacts.
     * 
     * @param authorization  (required)
     * @param id เลข Id Contact (required)
     * @return ApiResponse&lt;DeleteResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<DeleteResponse> contactsIdDeleteWithHttpInfo(String authorization, String id) throws ApiException {
        okhttp3.Call localVarCall = contactsIdDeleteValidateBeforeCall(authorization, id, null);
        Type localVarReturnType = new TypeToken<DeleteResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Delete contacts. (asynchronously)
     * 
     * @param authorization  (required)
     * @param id เลข Id Contact (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call contactsIdDeleteAsync(String authorization, String id, final ApiCallback<DeleteResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = contactsIdDeleteValidateBeforeCall(authorization, id, _callback);
        Type localVarReturnType = new TypeToken<DeleteResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for contactsIdGet
     * @param authorization  (required)
     * @param id เลข Id Contact (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call contactsIdGetCall(String authorization, String id, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/contacts/{id}"
            .replaceAll("\\{" + "id" + "\\}", localVarApiClient.escapeString(id.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        if (authorization != null) {
            localVarHeaderParams.put("Authorization", localVarApiClient.parameterToString(authorization));
        }

        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call contactsIdGetValidateBeforeCall(String authorization, String id, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'authorization' is set
        if (authorization == null) {
            throw new ApiException("Missing the required parameter 'authorization' when calling contactsIdGet(Async)");
        }
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new ApiException("Missing the required parameter 'id' when calling contactsIdGet(Async)");
        }
        

        okhttp3.Call localVarCall = contactsIdGetCall(authorization, id, _callback);
        return localVarCall;

    }

    /**
     * Get contacts.
     * 
     * @param authorization  (required)
     * @param id เลข Id Contact (required)
     * @return ContactResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ContactResponse contactsIdGet(String authorization, String id) throws ApiException {
        ApiResponse<ContactResponse> localVarResp = contactsIdGetWithHttpInfo(authorization, id);
        return localVarResp.getData();
    }

    /**
     * Get contacts.
     * 
     * @param authorization  (required)
     * @param id เลข Id Contact (required)
     * @return ApiResponse&lt;ContactResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<ContactResponse> contactsIdGetWithHttpInfo(String authorization, String id) throws ApiException {
        okhttp3.Call localVarCall = contactsIdGetValidateBeforeCall(authorization, id, null);
        Type localVarReturnType = new TypeToken<ContactResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get contacts. (asynchronously)
     * 
     * @param authorization  (required)
     * @param id เลข Id Contact (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call contactsIdGetAsync(String authorization, String id, final ApiCallback<ContactResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = contactsIdGetValidateBeforeCall(authorization, id, _callback);
        Type localVarReturnType = new TypeToken<ContactResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for contactsIdPut
     * @param authorization  (required)
     * @param id เลข Id Contact (required)
     * @param contact  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call contactsIdPutCall(String authorization, String id, Contact contact, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = contact;

        // create path and map variables
        String localVarPath = "/contacts/{id}"
            .replaceAll("\\{" + "id" + "\\}", localVarApiClient.escapeString(id.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        if (authorization != null) {
            localVarHeaderParams.put("Authorization", localVarApiClient.parameterToString(authorization));
        }

        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "PUT", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call contactsIdPutValidateBeforeCall(String authorization, String id, Contact contact, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'authorization' is set
        if (authorization == null) {
            throw new ApiException("Missing the required parameter 'authorization' when calling contactsIdPut(Async)");
        }
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new ApiException("Missing the required parameter 'id' when calling contactsIdPut(Async)");
        }
        
        // verify the required parameter 'contact' is set
        if (contact == null) {
            throw new ApiException("Missing the required parameter 'contact' when calling contactsIdPut(Async)");
        }
        

        okhttp3.Call localVarCall = contactsIdPutCall(authorization, id, contact, _callback);
        return localVarCall;

    }

    /**
     * Update contacts.
     * 
     * @param authorization  (required)
     * @param id เลข Id Contact (required)
     * @param contact  (required)
     * @return ContactResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ContactResponse contactsIdPut(String authorization, String id, Contact contact) throws ApiException {
        ApiResponse<ContactResponse> localVarResp = contactsIdPutWithHttpInfo(authorization, id, contact);
        return localVarResp.getData();
    }

    /**
     * Update contacts.
     * 
     * @param authorization  (required)
     * @param id เลข Id Contact (required)
     * @param contact  (required)
     * @return ApiResponse&lt;ContactResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<ContactResponse> contactsIdPutWithHttpInfo(String authorization, String id, Contact contact) throws ApiException {
        okhttp3.Call localVarCall = contactsIdPutValidateBeforeCall(authorization, id, contact, null);
        Type localVarReturnType = new TypeToken<ContactResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Update contacts. (asynchronously)
     * 
     * @param authorization  (required)
     * @param id เลข Id Contact (required)
     * @param contact  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call contactsIdPutAsync(String authorization, String id, Contact contact, final ApiCallback<ContactResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = contactsIdPutValidateBeforeCall(authorization, id, contact, _callback);
        Type localVarReturnType = new TypeToken<ContactResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for contactsPost
     * @param authorization  (required)
     * @param contact  (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call contactsPostCall(String authorization, Contact contact, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = contact;

        // create path and map variables
        String localVarPath = "/contacts";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        if (authorization != null) {
            localVarHeaderParams.put("Authorization", localVarApiClient.parameterToString(authorization));
        }

        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call contactsPostValidateBeforeCall(String authorization, Contact contact, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'authorization' is set
        if (authorization == null) {
            throw new ApiException("Missing the required parameter 'authorization' when calling contactsPost(Async)");
        }
        
        // verify the required parameter 'contact' is set
        if (contact == null) {
            throw new ApiException("Missing the required parameter 'contact' when calling contactsPost(Async)");
        }
        

        okhttp3.Call localVarCall = contactsPostCall(authorization, contact, _callback);
        return localVarCall;

    }

    /**
     * Create contacts
     * 
     * @param authorization  (required)
     * @param contact  (required)
     * @return ContactResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ContactResponse contactsPost(String authorization, Contact contact) throws ApiException {
        ApiResponse<ContactResponse> localVarResp = contactsPostWithHttpInfo(authorization, contact);
        return localVarResp.getData();
    }

    /**
     * Create contacts
     * 
     * @param authorization  (required)
     * @param contact  (required)
     * @return ApiResponse&lt;ContactResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<ContactResponse> contactsPostWithHttpInfo(String authorization, Contact contact) throws ApiException {
        okhttp3.Call localVarCall = contactsPostValidateBeforeCall(authorization, contact, null);
        Type localVarReturnType = new TypeToken<ContactResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Create contacts (asynchronously)
     * 
     * @param authorization  (required)
     * @param contact  (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call contactsPostAsync(String authorization, Contact contact, final ApiCallback<ContactResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = contactsPostValidateBeforeCall(authorization, contact, _callback);
        Type localVarReturnType = new TypeToken<ContactResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
