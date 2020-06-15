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

import java.io.File;
import io.swagger.annotations.*;
import com.google.gson.annotations.SerializedName;

@ApiModel(description = "")
public class InlineObject6 {
  
  @SerializedName("file")
  private File file = null;

  /**
   * รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary
   **/
  @ApiModelProperty(value = "รูปแบบ file ที่ใช้แนบในเอกสารเป็นแบบ Binary")
  public File getFile() {
    return file;
  }
  public void setFile(File file) {
    this.file = file;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineObject6 inlineObject6 = (InlineObject6) o;
    return (this.file == null ? inlineObject6.file == null : this.file.equals(inlineObject6.file));
  }

  @Override
  public int hashCode() {
    int result = 17;
    result = 31 * result + (this.file == null ? 0: this.file.hashCode());
    return result;
  }

  @Override
  public String toString()  {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineObject6 {\n");
    
    sb.append("  file: ").append(file).append("\n");
    sb.append("}\n");
    return sb.toString();
  }
}
