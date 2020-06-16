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
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Flowaccount.OpenAPITools.Client.OpenAPIDateConverter;

namespace Flowaccount.OpenAPITools.Model
{
    /// <summary>
    /// ShareDocument
    /// </summary>
    [DataContract]
    public partial class ShareDocument :  IEquatable<ShareDocument>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ShareDocument" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ShareDocument() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ShareDocument" /> class.
        /// </summary>
        /// <param name="documentId">documentId หรือ recordId ของเอกสารที่ต้องการส่งอีเมล (required).</param>
        /// <param name="culture">เลือกภาษาของเอกสาร &lt;br&gt; th &#x3D; ไทย &lt;br&gt; en &#x3D; อังกฤษ (default to &quot;th&quot;).</param>
        public ShareDocument(long documentId = default(long), string culture = "th")
        {
            // to ensure "documentId" is required (not null)
            if (documentId == null)
            {
                throw new InvalidDataException("documentId is a required property for ShareDocument and cannot be null");
            }
            else
            {
                this.DocumentId = documentId;
            }
            
            // use default value if no "culture" provided
            if (culture == null)
            {
                this.Culture = "th";
            }
            else
            {
                this.Culture = culture;
            }
        }
        
        /// <summary>
        /// documentId หรือ recordId ของเอกสารที่ต้องการส่งอีเมล
        /// </summary>
        /// <value>documentId หรือ recordId ของเอกสารที่ต้องการส่งอีเมล</value>
        [DataMember(Name="documentId", EmitDefaultValue=true)]
        public long DocumentId { get; set; }

        /// <summary>
        /// เลือกภาษาของเอกสาร &lt;br&gt; th &#x3D; ไทย &lt;br&gt; en &#x3D; อังกฤษ
        /// </summary>
        /// <value>เลือกภาษาของเอกสาร &lt;br&gt; th &#x3D; ไทย &lt;br&gt; en &#x3D; อังกฤษ</value>
        [DataMember(Name="culture", EmitDefaultValue=true)]
        public string Culture { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ShareDocument {\n");
            sb.Append("  DocumentId: ").Append(DocumentId).Append("\n");
            sb.Append("  Culture: ").Append(Culture).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as ShareDocument);
        }

        /// <summary>
        /// Returns true if ShareDocument instances are equal
        /// </summary>
        /// <param name="input">Instance of ShareDocument to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ShareDocument input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.DocumentId == input.DocumentId ||
                    (this.DocumentId != null &&
                    this.DocumentId.Equals(input.DocumentId))
                ) && 
                (
                    this.Culture == input.Culture ||
                    (this.Culture != null &&
                    this.Culture.Equals(input.Culture))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.DocumentId != null)
                    hashCode = hashCode * 59 + this.DocumentId.GetHashCode();
                if (this.Culture != null)
                    hashCode = hashCode * 59 + this.Culture.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
