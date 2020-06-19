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


import org.openapitools.client.model.DeleteResponse;
import org.openapitools.client.model.ProductResponse;
import org.openapitools.client.model.ProductType;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProductsApi {
    private ApiClient localVarApiClient;

    public ProductsApi() {
        this(Configuration.getDefaultApiClient());
    }

    public ProductsApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for productsGet
     * @param currentPage Query current page products item. &lt;br&gt;Example Pattern: &lt;ex&gt;/products?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/products?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; (required)
     * @param pageSize Query products list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /products?pageSize&#x3D;20 &lt;/ex&gt; (required)
     * @param authorization  (required)
     * @param sortBy Product Sort By Example Pattern: &lt;ex&gt; /products?sortBy&#x3D;[{&#39;name&#39;:&#39;productCode&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt; (optional)
     * @param filter Product Filter Example Pattern: &lt;br&gt; name &#x3D; Product Name &lt;br&gt; productCode &#x3D; Product Code / SKU &lt;br&gt; barcode &#x3D; Product Barcode &lt;br&gt; categoryId &#x3D; Product Category&lt;br&gt; &lt;ex&gt; /products?filter&#x3D;[{&#39;columnName&#39;:&#39;categoryId&#39;,&#39;columnValue&#39;:&#39;517727&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; (optional)
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
    public okhttp3.Call productsGetCall(Integer currentPage, Integer pageSize, String authorization, String sortBy, String filter, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/products";

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
    private okhttp3.Call productsGetValidateBeforeCall(Integer currentPage, Integer pageSize, String authorization, String sortBy, String filter, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'currentPage' is set
        if (currentPage == null) {
            throw new ApiException("Missing the required parameter 'currentPage' when calling productsGet(Async)");
        }
        
        // verify the required parameter 'pageSize' is set
        if (pageSize == null) {
            throw new ApiException("Missing the required parameter 'pageSize' when calling productsGet(Async)");
        }
        
        // verify the required parameter 'authorization' is set
        if (authorization == null) {
            throw new ApiException("Missing the required parameter 'authorization' when calling productsGet(Async)");
        }
        

        okhttp3.Call localVarCall = productsGetCall(currentPage, pageSize, authorization, sortBy, filter, _callback);
        return localVarCall;

    }

    /**
     * Get list all products.
     * 
     * @param currentPage Query current page products item. &lt;br&gt;Example Pattern: &lt;ex&gt;/products?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/products?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; (required)
     * @param pageSize Query products list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /products?pageSize&#x3D;20 &lt;/ex&gt; (required)
     * @param authorization  (required)
     * @param sortBy Product Sort By Example Pattern: &lt;ex&gt; /products?sortBy&#x3D;[{&#39;name&#39;:&#39;productCode&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt; (optional)
     * @param filter Product Filter Example Pattern: &lt;br&gt; name &#x3D; Product Name &lt;br&gt; productCode &#x3D; Product Code / SKU &lt;br&gt; barcode &#x3D; Product Barcode &lt;br&gt; categoryId &#x3D; Product Category&lt;br&gt; &lt;ex&gt; /products?filter&#x3D;[{&#39;columnName&#39;:&#39;categoryId&#39;,&#39;columnValue&#39;:&#39;517727&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; (optional)
     * @return ProductResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ProductResponse productsGet(Integer currentPage, Integer pageSize, String authorization, String sortBy, String filter) throws ApiException {
        ApiResponse<ProductResponse> localVarResp = productsGetWithHttpInfo(currentPage, pageSize, authorization, sortBy, filter);
        return localVarResp.getData();
    }

    /**
     * Get list all products.
     * 
     * @param currentPage Query current page products item. &lt;br&gt;Example Pattern: &lt;ex&gt;/products?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/products?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; (required)
     * @param pageSize Query products list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /products?pageSize&#x3D;20 &lt;/ex&gt; (required)
     * @param authorization  (required)
     * @param sortBy Product Sort By Example Pattern: &lt;ex&gt; /products?sortBy&#x3D;[{&#39;name&#39;:&#39;productCode&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt; (optional)
     * @param filter Product Filter Example Pattern: &lt;br&gt; name &#x3D; Product Name &lt;br&gt; productCode &#x3D; Product Code / SKU &lt;br&gt; barcode &#x3D; Product Barcode &lt;br&gt; categoryId &#x3D; Product Category&lt;br&gt; &lt;ex&gt; /products?filter&#x3D;[{&#39;columnName&#39;:&#39;categoryId&#39;,&#39;columnValue&#39;:&#39;517727&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; (optional)
     * @return ApiResponse&lt;ProductResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<ProductResponse> productsGetWithHttpInfo(Integer currentPage, Integer pageSize, String authorization, String sortBy, String filter) throws ApiException {
        okhttp3.Call localVarCall = productsGetValidateBeforeCall(currentPage, pageSize, authorization, sortBy, filter, null);
        Type localVarReturnType = new TypeToken<ProductResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get list all products. (asynchronously)
     * 
     * @param currentPage Query current page products item. &lt;br&gt;Example Pattern: &lt;ex&gt;/products?currentPage&#x3D;1 &lt;/ex&gt;&lt;ex&gt;/products?currentPage&#x3D;1&amp;pageSize&#x3D;20&lt;/ex&gt; (required)
     * @param pageSize Query products list amount per page. &lt;br&gt;Example Pattern: &lt;ex&gt; /products?pageSize&#x3D;20 &lt;/ex&gt; (required)
     * @param authorization  (required)
     * @param sortBy Product Sort By Example Pattern: &lt;ex&gt; /products?sortBy&#x3D;[{&#39;name&#39;:&#39;productCode&#39;,&#39;sortOrder&#39;:&#39;asc&#39;}]&lt;/ex&gt; (optional)
     * @param filter Product Filter Example Pattern: &lt;br&gt; name &#x3D; Product Name &lt;br&gt; productCode &#x3D; Product Code / SKU &lt;br&gt; barcode &#x3D; Product Barcode &lt;br&gt; categoryId &#x3D; Product Category&lt;br&gt; &lt;ex&gt; /products?filter&#x3D;[{&#39;columnName&#39;:&#39;categoryId&#39;,&#39;columnValue&#39;:&#39;517727&#39;,&#39;columnPredicateOperator&#39;:&#39;And&#39;}]&lt;/ex&gt; (optional)
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
    public okhttp3.Call productsGetAsync(Integer currentPage, Integer pageSize, String authorization, String sortBy, String filter, final ApiCallback<ProductResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = productsGetValidateBeforeCall(currentPage, pageSize, authorization, sortBy, filter, _callback);
        Type localVarReturnType = new TypeToken<ProductResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for productsIdDelete
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
    public okhttp3.Call productsIdDeleteCall(String authorization, String id, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/products/{id}"
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
    private okhttp3.Call productsIdDeleteValidateBeforeCall(String authorization, String id, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'authorization' is set
        if (authorization == null) {
            throw new ApiException("Missing the required parameter 'authorization' when calling productsIdDelete(Async)");
        }
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new ApiException("Missing the required parameter 'id' when calling productsIdDelete(Async)");
        }
        

        okhttp3.Call localVarCall = productsIdDeleteCall(authorization, id, _callback);
        return localVarCall;

    }

    /**
     * Delete products.
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
    public DeleteResponse productsIdDelete(String authorization, String id) throws ApiException {
        ApiResponse<DeleteResponse> localVarResp = productsIdDeleteWithHttpInfo(authorization, id);
        return localVarResp.getData();
    }

    /**
     * Delete products.
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
    public ApiResponse<DeleteResponse> productsIdDeleteWithHttpInfo(String authorization, String id) throws ApiException {
        okhttp3.Call localVarCall = productsIdDeleteValidateBeforeCall(authorization, id, null);
        Type localVarReturnType = new TypeToken<DeleteResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Delete products. (asynchronously)
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
    public okhttp3.Call productsIdDeleteAsync(String authorization, String id, final ApiCallback<DeleteResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = productsIdDeleteValidateBeforeCall(authorization, id, _callback);
        Type localVarReturnType = new TypeToken<DeleteResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for productsIdGet
     * @param authorization เลข Id Product (required)
     * @param id  (required)
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
    public okhttp3.Call productsIdGetCall(String authorization, String id, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/products/{id}"
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
    private okhttp3.Call productsIdGetValidateBeforeCall(String authorization, String id, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'authorization' is set
        if (authorization == null) {
            throw new ApiException("Missing the required parameter 'authorization' when calling productsIdGet(Async)");
        }
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new ApiException("Missing the required parameter 'id' when calling productsIdGet(Async)");
        }
        

        okhttp3.Call localVarCall = productsIdGetCall(authorization, id, _callback);
        return localVarCall;

    }

    /**
     * Get products.
     * 
     * @param authorization เลข Id Product (required)
     * @param id  (required)
     * @return ProductResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ProductResponse productsIdGet(String authorization, String id) throws ApiException {
        ApiResponse<ProductResponse> localVarResp = productsIdGetWithHttpInfo(authorization, id);
        return localVarResp.getData();
    }

    /**
     * Get products.
     * 
     * @param authorization เลข Id Product (required)
     * @param id  (required)
     * @return ApiResponse&lt;ProductResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<ProductResponse> productsIdGetWithHttpInfo(String authorization, String id) throws ApiException {
        okhttp3.Call localVarCall = productsIdGetValidateBeforeCall(authorization, id, null);
        Type localVarReturnType = new TypeToken<ProductResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Get products. (asynchronously)
     * 
     * @param authorization เลข Id Product (required)
     * @param id  (required)
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
    public okhttp3.Call productsIdGetAsync(String authorization, String id, final ApiCallback<ProductResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = productsIdGetValidateBeforeCall(authorization, id, _callback);
        Type localVarReturnType = new TypeToken<ProductResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for productsIdPut
     * @param authorization เลข Id Product (required)
     * @param id  (required)
     * @param productType  (required)
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
    public okhttp3.Call productsIdPutCall(String authorization, String id, ProductType productType, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = productType;

        // create path and map variables
        String localVarPath = "/products/{id}"
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
    private okhttp3.Call productsIdPutValidateBeforeCall(String authorization, String id, ProductType productType, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'authorization' is set
        if (authorization == null) {
            throw new ApiException("Missing the required parameter 'authorization' when calling productsIdPut(Async)");
        }
        
        // verify the required parameter 'id' is set
        if (id == null) {
            throw new ApiException("Missing the required parameter 'id' when calling productsIdPut(Async)");
        }
        
        // verify the required parameter 'productType' is set
        if (productType == null) {
            throw new ApiException("Missing the required parameter 'productType' when calling productsIdPut(Async)");
        }
        

        okhttp3.Call localVarCall = productsIdPutCall(authorization, id, productType, _callback);
        return localVarCall;

    }

    /**
     * Update products.
     * 
     * @param authorization เลข Id Product (required)
     * @param id  (required)
     * @param productType  (required)
     * @return ProductResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ProductResponse productsIdPut(String authorization, String id, ProductType productType) throws ApiException {
        ApiResponse<ProductResponse> localVarResp = productsIdPutWithHttpInfo(authorization, id, productType);
        return localVarResp.getData();
    }

    /**
     * Update products.
     * 
     * @param authorization เลข Id Product (required)
     * @param id  (required)
     * @param productType  (required)
     * @return ApiResponse&lt;ProductResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<ProductResponse> productsIdPutWithHttpInfo(String authorization, String id, ProductType productType) throws ApiException {
        okhttp3.Call localVarCall = productsIdPutValidateBeforeCall(authorization, id, productType, null);
        Type localVarReturnType = new TypeToken<ProductResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Update products. (asynchronously)
     * 
     * @param authorization เลข Id Product (required)
     * @param id  (required)
     * @param productType  (required)
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
    public okhttp3.Call productsIdPutAsync(String authorization, String id, ProductType productType, final ApiCallback<ProductResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = productsIdPutValidateBeforeCall(authorization, id, productType, _callback);
        Type localVarReturnType = new TypeToken<ProductResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
    /**
     * Build call for productsPost
     * @param authorization  (required)
     * @param productType  (required)
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
    public okhttp3.Call productsPostCall(String authorization, ProductType productType, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = productType;

        // create path and map variables
        String localVarPath = "/products";

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
    private okhttp3.Call productsPostValidateBeforeCall(String authorization, ProductType productType, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'authorization' is set
        if (authorization == null) {
            throw new ApiException("Missing the required parameter 'authorization' when calling productsPost(Async)");
        }
        
        // verify the required parameter 'productType' is set
        if (productType == null) {
            throw new ApiException("Missing the required parameter 'productType' when calling productsPost(Async)");
        }
        

        okhttp3.Call localVarCall = productsPostCall(authorization, productType, _callback);
        return localVarCall;

    }

    /**
     * Create products.
     * 
     * @param authorization  (required)
     * @param productType  (required)
     * @return ProductResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ProductResponse productsPost(String authorization, ProductType productType) throws ApiException {
        ApiResponse<ProductResponse> localVarResp = productsPostWithHttpInfo(authorization, productType);
        return localVarResp.getData();
    }

    /**
     * Create products.
     * 
     * @param authorization  (required)
     * @param productType  (required)
     * @return ApiResponse&lt;ProductResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 200 </td><td> 200 response </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> 401 response </td><td>  -  </td></tr>
        <tr><td> 500 </td><td> 500 response </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<ProductResponse> productsPostWithHttpInfo(String authorization, ProductType productType) throws ApiException {
        okhttp3.Call localVarCall = productsPostValidateBeforeCall(authorization, productType, null);
        Type localVarReturnType = new TypeToken<ProductResponse>(){}.getType();
        return localVarApiClient.execute(localVarCall, localVarReturnType);
    }

    /**
     * Create products. (asynchronously)
     * 
     * @param authorization  (required)
     * @param productType  (required)
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
    public okhttp3.Call productsPostAsync(String authorization, ProductType productType, final ApiCallback<ProductResponse> _callback) throws ApiException {

        okhttp3.Call localVarCall = productsPostValidateBeforeCall(authorization, productType, _callback);
        Type localVarReturnType = new TypeToken<ProductResponse>(){}.getType();
        localVarApiClient.executeAsync(localVarCall, localVarReturnType, _callback);
        return localVarCall;
    }
}
