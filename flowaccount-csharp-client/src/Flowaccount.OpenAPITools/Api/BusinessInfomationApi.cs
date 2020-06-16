/* 
 * FlowAccount Open API
 *
 * # Introduction  **Servers Production**    <site>Site:</site> https://www.flowaccount.com    <site>Api url:</site> https://openapi.flowaccount.com/v1    **Beta test**   <site>Site:</site> http://sandbox-new.flowaccount.com/    <site>Api url:</site> https://openapi.flowaccount.com/test    **PostMan Collection**   <site>Link:</site> https://www.getpostman.com/collections/01e7c68d7093e2092a64
 *
 * The version of the OpenAPI document: 2-oas3
 * Contact: developer_support@flowaccount.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using RestSharp;
using Flowaccount.OpenAPITools.Client;
using Flowaccount.OpenAPITools.Model;

namespace Flowaccount.OpenAPITools.Api
{
    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IBusinessInfomationApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Get business infomation
        /// </summary>
        /// <remarks>
        /// เรียกดูข้อมูลธรุกิจ
        /// </remarks>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <returns>CompanyInfoResponse</returns>
        CompanyInfoResponse CompanyInfoGet (string authorization);

        /// <summary>
        /// Get business infomation
        /// </summary>
        /// <remarks>
        /// เรียกดูข้อมูลธรุกิจ
        /// </remarks>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <returns>ApiResponse of CompanyInfoResponse</returns>
        ApiResponse<CompanyInfoResponse> CompanyInfoGetWithHttpInfo (string authorization);
        /// <summary>
        /// Edit business infomation
        /// </summary>
        /// <remarks>
        /// แก้ไขข้อมูลธรุกิจ
        /// </remarks>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <param name="companyInfo"></param>
        /// <returns>CompanyInfoResponse</returns>
        CompanyInfoResponse CompanyInfoPut (string authorization, CompanyInfo companyInfo);

        /// <summary>
        /// Edit business infomation
        /// </summary>
        /// <remarks>
        /// แก้ไขข้อมูลธรุกิจ
        /// </remarks>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <param name="companyInfo"></param>
        /// <returns>ApiResponse of CompanyInfoResponse</returns>
        ApiResponse<CompanyInfoResponse> CompanyInfoPutWithHttpInfo (string authorization, CompanyInfo companyInfo);
        #endregion Synchronous Operations
        #region Asynchronous Operations
        /// <summary>
        /// Get business infomation
        /// </summary>
        /// <remarks>
        /// เรียกดูข้อมูลธรุกิจ
        /// </remarks>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <returns>Task of CompanyInfoResponse</returns>
        System.Threading.Tasks.Task<CompanyInfoResponse> CompanyInfoGetAsync (string authorization);

        /// <summary>
        /// Get business infomation
        /// </summary>
        /// <remarks>
        /// เรียกดูข้อมูลธรุกิจ
        /// </remarks>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <returns>Task of ApiResponse (CompanyInfoResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<CompanyInfoResponse>> CompanyInfoGetAsyncWithHttpInfo (string authorization);
        /// <summary>
        /// Edit business infomation
        /// </summary>
        /// <remarks>
        /// แก้ไขข้อมูลธรุกิจ
        /// </remarks>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <param name="companyInfo"></param>
        /// <returns>Task of CompanyInfoResponse</returns>
        System.Threading.Tasks.Task<CompanyInfoResponse> CompanyInfoPutAsync (string authorization, CompanyInfo companyInfo);

        /// <summary>
        /// Edit business infomation
        /// </summary>
        /// <remarks>
        /// แก้ไขข้อมูลธรุกิจ
        /// </remarks>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <param name="companyInfo"></param>
        /// <returns>Task of ApiResponse (CompanyInfoResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<CompanyInfoResponse>> CompanyInfoPutAsyncWithHttpInfo (string authorization, CompanyInfo companyInfo);
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class BusinessInfomationApi : IBusinessInfomationApi
    {
        private Flowaccount.OpenAPITools.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="BusinessInfomationApi"/> class.
        /// </summary>
        /// <returns></returns>
        public BusinessInfomationApi(String basePath)
        {
            this.Configuration = new Flowaccount.OpenAPITools.Client.Configuration { BasePath = basePath };

            ExceptionFactory = Flowaccount.OpenAPITools.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="BusinessInfomationApi"/> class
        /// </summary>
        /// <returns></returns>
        public BusinessInfomationApi()
        {
            this.Configuration = Flowaccount.OpenAPITools.Client.Configuration.Default;

            ExceptionFactory = Flowaccount.OpenAPITools.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="BusinessInfomationApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public BusinessInfomationApi(Flowaccount.OpenAPITools.Client.Configuration configuration = null)
        {
            if (configuration == null) // use the default one in Configuration
                this.Configuration = Flowaccount.OpenAPITools.Client.Configuration.Default;
            else
                this.Configuration = configuration;

            ExceptionFactory = Flowaccount.OpenAPITools.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public String GetBasePath()
        {
            return this.Configuration.ApiClient.RestClient.BaseUrl.ToString();
        }

        /// <summary>
        /// Sets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        [Obsolete("SetBasePath is deprecated, please do 'Configuration.ApiClient = new ApiClient(\"http://new-path\")' instead.")]
        public void SetBasePath(String basePath)
        {
            // do nothing
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public Flowaccount.OpenAPITools.Client.Configuration Configuration {get; set;}

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public Flowaccount.OpenAPITools.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// Gets the default header.
        /// </summary>
        /// <returns>Dictionary of HTTP header</returns>
        [Obsolete("DefaultHeader is deprecated, please use Configuration.DefaultHeader instead.")]
        public IDictionary<String, String> DefaultHeader()
        {
            return new ReadOnlyDictionary<string, string>(this.Configuration.DefaultHeader);
        }

        /// <summary>
        /// Add default header.
        /// </summary>
        /// <param name="key">Header field name.</param>
        /// <param name="value">Header field value.</param>
        /// <returns></returns>
        [Obsolete("AddDefaultHeader is deprecated, please use Configuration.AddDefaultHeader instead.")]
        public void AddDefaultHeader(string key, string value)
        {
            this.Configuration.AddDefaultHeader(key, value);
        }

        /// <summary>
        /// Get business infomation เรียกดูข้อมูลธรุกิจ
        /// </summary>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <returns>CompanyInfoResponse</returns>
        public CompanyInfoResponse CompanyInfoGet (string authorization)
        {
             ApiResponse<CompanyInfoResponse> localVarResponse = CompanyInfoGetWithHttpInfo(authorization);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Get business infomation เรียกดูข้อมูลธรุกิจ
        /// </summary>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <returns>ApiResponse of CompanyInfoResponse</returns>
        public ApiResponse<CompanyInfoResponse> CompanyInfoGetWithHttpInfo (string authorization)
        {
            // verify the required parameter 'authorization' is set
            if (authorization == null)
                throw new ApiException(400, "Missing required parameter 'authorization' when calling BusinessInfomationApi->CompanyInfoGet");

            var localVarPath = "/company/info";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (authorization != null) localVarHeaderParams.Add("Authorization", this.Configuration.ApiClient.ParameterToString(authorization)); // header parameter


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("CompanyInfoGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<CompanyInfoResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (CompanyInfoResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(CompanyInfoResponse)));
        }

        /// <summary>
        /// Get business infomation เรียกดูข้อมูลธรุกิจ
        /// </summary>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <returns>Task of CompanyInfoResponse</returns>
        public async System.Threading.Tasks.Task<CompanyInfoResponse> CompanyInfoGetAsync (string authorization)
        {
             ApiResponse<CompanyInfoResponse> localVarResponse = await CompanyInfoGetAsyncWithHttpInfo(authorization);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Get business infomation เรียกดูข้อมูลธรุกิจ
        /// </summary>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <returns>Task of ApiResponse (CompanyInfoResponse)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<CompanyInfoResponse>> CompanyInfoGetAsyncWithHttpInfo (string authorization)
        {
            // verify the required parameter 'authorization' is set
            if (authorization == null)
                throw new ApiException(400, "Missing required parameter 'authorization' when calling BusinessInfomationApi->CompanyInfoGet");

            var localVarPath = "/company/info";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (authorization != null) localVarHeaderParams.Add("Authorization", this.Configuration.ApiClient.ParameterToString(authorization)); // header parameter


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.GET, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("CompanyInfoGet", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<CompanyInfoResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (CompanyInfoResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(CompanyInfoResponse)));
        }

        /// <summary>
        /// Edit business infomation แก้ไขข้อมูลธรุกิจ
        /// </summary>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <param name="companyInfo"></param>
        /// <returns>CompanyInfoResponse</returns>
        public CompanyInfoResponse CompanyInfoPut (string authorization, CompanyInfo companyInfo)
        {
             ApiResponse<CompanyInfoResponse> localVarResponse = CompanyInfoPutWithHttpInfo(authorization, companyInfo);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Edit business infomation แก้ไขข้อมูลธรุกิจ
        /// </summary>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <param name="companyInfo"></param>
        /// <returns>ApiResponse of CompanyInfoResponse</returns>
        public ApiResponse<CompanyInfoResponse> CompanyInfoPutWithHttpInfo (string authorization, CompanyInfo companyInfo)
        {
            // verify the required parameter 'authorization' is set
            if (authorization == null)
                throw new ApiException(400, "Missing required parameter 'authorization' when calling BusinessInfomationApi->CompanyInfoPut");
            // verify the required parameter 'companyInfo' is set
            if (companyInfo == null)
                throw new ApiException(400, "Missing required parameter 'companyInfo' when calling BusinessInfomationApi->CompanyInfoPut");

            var localVarPath = "/company/info";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (authorization != null) localVarHeaderParams.Add("Authorization", this.Configuration.ApiClient.ParameterToString(authorization)); // header parameter
            if (companyInfo != null && companyInfo.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(companyInfo); // http body (model) parameter
            }
            else
            {
                localVarPostBody = companyInfo; // byte array
            }


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.PUT, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("CompanyInfoPut", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<CompanyInfoResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (CompanyInfoResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(CompanyInfoResponse)));
        }

        /// <summary>
        /// Edit business infomation แก้ไขข้อมูลธรุกิจ
        /// </summary>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <param name="companyInfo"></param>
        /// <returns>Task of CompanyInfoResponse</returns>
        public async System.Threading.Tasks.Task<CompanyInfoResponse> CompanyInfoPutAsync (string authorization, CompanyInfo companyInfo)
        {
             ApiResponse<CompanyInfoResponse> localVarResponse = await CompanyInfoPutAsyncWithHttpInfo(authorization, companyInfo);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Edit business infomation แก้ไขข้อมูลธรุกิจ
        /// </summary>
        /// <exception cref="Flowaccount.OpenAPITools.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="authorization"></param>
        /// <param name="companyInfo"></param>
        /// <returns>Task of ApiResponse (CompanyInfoResponse)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<CompanyInfoResponse>> CompanyInfoPutAsyncWithHttpInfo (string authorization, CompanyInfo companyInfo)
        {
            // verify the required parameter 'authorization' is set
            if (authorization == null)
                throw new ApiException(400, "Missing required parameter 'authorization' when calling BusinessInfomationApi->CompanyInfoPut");
            // verify the required parameter 'companyInfo' is set
            if (companyInfo == null)
                throw new ApiException(400, "Missing required parameter 'companyInfo' when calling BusinessInfomationApi->CompanyInfoPut");

            var localVarPath = "/company/info";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (authorization != null) localVarHeaderParams.Add("Authorization", this.Configuration.ApiClient.ParameterToString(authorization)); // header parameter
            if (companyInfo != null && companyInfo.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(companyInfo); // http body (model) parameter
            }
            else
            {
                localVarPostBody = companyInfo; // byte array
            }


            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.PUT, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("CompanyInfoPut", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<CompanyInfoResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (CompanyInfoResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(CompanyInfoResponse)));
        }

    }
}
