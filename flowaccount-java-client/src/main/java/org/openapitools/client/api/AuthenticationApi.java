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


import org.openapitools.client.model.AuthenResponse;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AuthenticationApi {
    private ApiClient localVarApiClient;

    public AuthenticationApi() {
        this(Configuration.getDefaultApiClient());
    }

    public AuthenticationApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for tokenPost
     * @param contentType  (required)
     * @param grantType  (optional)
     * @param scope  (optional)
     * @param clientId  (optional)
     * @param clientSecret  (optional)
     * @param guid  (optional)
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
    public okhttp3.Call tokenPostCall(String contentType, String grantType, String scope, String clientId, String clientSecret, String guid, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/token";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        if (contentType != null) {
            localVarHeaderParams.put("Content-Type", localVarApiClient.parameterToString(contentType));
        }

        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();
        if (grantType != null) {
            localVarFormParams.put("grant_type", grantType);
        }

        if (scope != null) {
            localVarFormParams.put("scope", scope);
        }

        if (clientId != null) {
            localVarFormParams.put("client_id", clientId);
        }

        if (clientSecret != null) {
            localVarFormParams.put("client_secret", clientSecret);
        }

        if (guid != null) {
            localVarFormParams.put("guid", guid);
        }

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/x-www-form-urlencoded"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call tokenPostValidateBeforeCall(String contentType, String grantType, String scope, String clientId, String clientSecret, String guid, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'contentType' is set
        if (contentType == null) {
            throw new ApiException("Missing the required parameter 'contentType' when calling tokenPost(Async)");
        }
        

        okhttp3.Call localVarCall = tokenPostCall(contentType, grantType, scope, clientId, clientSecret, guid, _callback);
        return localVarCall;

    }

    /**
     * Generate Access Token
     * 
     * @param contentType  (required)
     * @param grantType  (optional)
     * @param scope  (optional)
     * @param clientId  (optional)
     * @param clientSecret  (optional)
     * @param guid  (optional)
     * @return AuthenResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public AuthenResponse tokenPost(String contentType, String grantType, String scope, String clientId, String clientSecret, String guid) throws ApiException {
        ApiResponse<AuthenResponse> localVarResp = tokenPostWithHttpInfo(contentType, grantType, scope, clientId, clientSecret, guid);
        return localVarResp.getData();
    }

    /**
     * Generate Access Token
     * 
     * @param contentType  (required)
     * @param grantType  (optional)
     * @param scope  (optional)
     * @param clientId  (optional)
     * @param clientSecret  (optional)
     * @param guid  (optional)
     * @return ApiResponse&lt;AuthenResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<AuthenResponse> tokenPostWithHttpInfo(String contentType, String grantType, String scope, String clientId, String clientSecret, String guid) throws ApiException {
        okhttp3.Call localVarCall = tokenPostValidateBeforeCall(contentType, grantType, scope, clientId, clientSecret, guid, null);
        Type localVarReturnType = new TypeToken<AuthenResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Generate Access Token (asynchronously)
     * 
     * @param contentType  (required)
     * @param grantType  (optional)
     * @param scope  (optional)
     * @param clientId  (optional)
     * @param clientSecret  (optional)
     * @param guid  (optional)
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
    public okhttp3.Call tokenPostAsync(String contentType, String grantType, String scope, String clientId, String clientSecret, String guid, final ApiCallback<AuthenResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = tokenPostValidateBeforeCall(contentType, grantType, scope, clientId, clientSecret, guid, _callback);
        Type localVarReturnType = new TypeToken<AuthenResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
