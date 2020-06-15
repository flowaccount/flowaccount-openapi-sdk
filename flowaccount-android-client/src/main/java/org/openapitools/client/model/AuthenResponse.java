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
 */

package org.openapitools.client.model;

import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class AuthenResponse {
  
  @SerializedName("access_token")
  private String accessToken = null;
  @SerializedName("expires_in")
  private Integer expiresIn = null;
  @SerializedName("token_type")
  private String tokenType = null;
  @SerializedName("refresh_token")
  private String refreshToken = null;
  @SerializedName("error")
  private String error = null;

  /**
   **/
  @ApiModelProperty(value = "")
  public String getAccessToken() {
    return accessToken;
  }
  public void setAccessToken(String accessToken) {
    this.accessToken = accessToken;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public Integer getExpiresIn() {
    return expiresIn;
  }
  public void setExpiresIn(Integer expiresIn) {
    this.expiresIn = expiresIn;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getTokenType() {
    return tokenType;
  }
  public void setTokenType(String tokenType) {
    this.tokenType = tokenType;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getRefreshToken() {
    return refreshToken;
  }
  public void setRefreshToken(String refreshToken) {
    this.refreshToken = refreshToken;
  }

  /**
   **/
  @ApiModelProperty(value = "")
  public String getError() {
    return error;
  }
  public void setError(String error) {
    this.error = error;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AuthenResponse authenResponse = (AuthenResponse) o;
    return (this.accessToken == null ? authenResponse.accessToken == null : this.accessToken.equals(authenResponse.accessToken)) &&
        (this.expiresIn == null ? authenResponse.expiresIn == null : this.expiresIn.equals(authenResponse.expiresIn)) &&
        (this.tokenType == null ? authenResponse.tokenType == null : this.tokenType.equals(authenResponse.tokenType)) &&
        (this.refreshToken == null ? authenResponse.refreshToken == null : this.refreshToken.equals(authenResponse.refreshToken)) &&
        (this.error == null ? authenResponse.error == null : this.error.equals(authenResponse.error));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.accessToken == null ? 0: this.accessToken.hashCode());
    result = 31 * result + (this.expiresIn == null ? 0: this.expiresIn.hashCode());
    result = 31 * result + (this.tokenType == null ? 0: this.tokenType.hashCode());
    result = 31 * result + (this.refreshToken == null ? 0: this.refreshToken.hashCode());
    result = 31 * result + (this.error == null ? 0: this.error.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class AuthenResponse {\n");
    
    sb.append("  accessToken: ").append(accessToken).append("\n");
    sb.append("  expiresIn: ").append(expiresIn).append("\n");
    sb.append("  tokenType: ").append(tokenType).append("\n");
    sb.append("  refreshToken: ").append(refreshToken).append("\n");
    sb.append("  error: ").append(error).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}