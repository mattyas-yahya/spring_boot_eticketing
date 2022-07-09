//package com.example.dto;
//
//
//
//
//  import com.fasterxml.jackson.annotation.*;
//
//import java.util.HashMap;
//import java.util.Map;
//
//@JsonInclude(JsonInclude.Include.NON_NULL)
//@JsonPropertyOrder({
//  "userId",
//  "id",
//  "title",
//  "body"
//})
//public class PostServis {
//
//  @JsonProperty("userId")
//  private Integer userId;
//  @JsonProperty("id")
//  private Integer id;
//  @JsonProperty("title")
//  private String title;
//  @JsonProperty("body")
//  private String body;
//  @JsonIgnore
//  private Map<String, Object> additionalProperties = new HashMap<String, Object>();
//
//  @JsonProperty("userId")
//  public Integer getUserId() {
//    return userId;
//  }
//
//  @JsonProperty("userId")
//  public void setUserId(Integer userId) {
//    this.userId = userId;
//  }
//
//  @JsonProperty("id")
//  public Integer getId() {
//    return id;
//  }
//
//  @JsonProperty("id")
//  public void setId(Integer id) {
//    this.id = id;
//  }
//
//  @JsonProperty("title")
//  public String getTitle() {
//    return title;
//  }
//
//  @JsonProperty("title")
//  public void setTitle(String title) {
//    this.title = title;
//  }
//
//  @JsonProperty("body")
//  public String getBody() {
//    return body;
//  }
//
//  @JsonProperty("body")
//  public void setBody(String body) {
//    this.body = body;
//  }
//
//  @JsonAnyGetter
//  public Map<String, Object> getAdditionalProperties() {
//    return this.additionalProperties;
//  }
//
//  @JsonAnySetter
//  public void setAdditionalProperty(String name, Object value) {
//    this.additionalProperties.put(name, value);
//  }
//
//}
