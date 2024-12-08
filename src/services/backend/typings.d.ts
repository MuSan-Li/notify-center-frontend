declare namespace API {
  type BaseResponseboolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseint = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponselong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageEmailConfigResp = {
    code?: number;
    data?: PageEmailConfigResp;
    message?: string;
  };

  type BaseResponsePageNotifyConfigResp = {
    code?: number;
    data?: PageNotifyConfigResp;
    message?: string;
  };

  type BaseResponsePageNotifyLogResp = {
    code?: number;
    data?: PageNotifyLogResp;
    message?: string;
  };

  type BaseResponsePageSafetyUser = {
    code?: number;
    data?: PageSafetyUser;
    message?: string;
  };

  type BaseResponseSafetyUser = {
    code?: number;
    data?: SafetyUser;
    message?: string;
  };

  type EmailConfigPageReq = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    username?: string;
  };

  type EmailConfigResp = {
    createTime?: string;
    host?: string;
    id?: number;
    password?: string;
    port?: string;
    props?: string;
    remarks?: string;
    status?: number;
    updateTime?: string;
    username?: string;
  };

  type ModelAndView = {
    empty?: boolean;
    model?: Record<string, any>;
    modelMap?: Record<string, any>;
    reference?: boolean;
    status?:
      | 'ACCEPTED'
      | 'ALREADY_REPORTED'
      | 'BAD_GATEWAY'
      | 'BAD_REQUEST'
      | 'BANDWIDTH_LIMIT_EXCEEDED'
      | 'CHECKPOINT'
      | 'CONFLICT'
      | 'CONTINUE'
      | 'CREATED'
      | 'DESTINATION_LOCKED'
      | 'EXPECTATION_FAILED'
      | 'FAILED_DEPENDENCY'
      | 'FORBIDDEN'
      | 'FOUND'
      | 'GATEWAY_TIMEOUT'
      | 'GONE'
      | 'HTTP_VERSION_NOT_SUPPORTED'
      | 'IM_USED'
      | 'INSUFFICIENT_SPACE_ON_RESOURCE'
      | 'INSUFFICIENT_STORAGE'
      | 'INTERNAL_SERVER_ERROR'
      | 'I_AM_A_TEAPOT'
      | 'LENGTH_REQUIRED'
      | 'LOCKED'
      | 'LOOP_DETECTED'
      | 'METHOD_FAILURE'
      | 'METHOD_NOT_ALLOWED'
      | 'MOVED_PERMANENTLY'
      | 'MOVED_TEMPORARILY'
      | 'MULTIPLE_CHOICES'
      | 'MULTI_STATUS'
      | 'NETWORK_AUTHENTICATION_REQUIRED'
      | 'NON_AUTHORITATIVE_INFORMATION'
      | 'NOT_ACCEPTABLE'
      | 'NOT_EXTENDED'
      | 'NOT_FOUND'
      | 'NOT_IMPLEMENTED'
      | 'NOT_MODIFIED'
      | 'NO_CONTENT'
      | 'OK'
      | 'PARTIAL_CONTENT'
      | 'PAYLOAD_TOO_LARGE'
      | 'PAYMENT_REQUIRED'
      | 'PERMANENT_REDIRECT'
      | 'PRECONDITION_FAILED'
      | 'PRECONDITION_REQUIRED'
      | 'PROCESSING'
      | 'PROXY_AUTHENTICATION_REQUIRED'
      | 'REQUESTED_RANGE_NOT_SATISFIABLE'
      | 'REQUEST_ENTITY_TOO_LARGE'
      | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
      | 'REQUEST_TIMEOUT'
      | 'REQUEST_URI_TOO_LONG'
      | 'RESET_CONTENT'
      | 'SEE_OTHER'
      | 'SERVICE_UNAVAILABLE'
      | 'SWITCHING_PROTOCOLS'
      | 'TEMPORARY_REDIRECT'
      | 'TOO_EARLY'
      | 'TOO_MANY_REQUESTS'
      | 'UNAUTHORIZED'
      | 'UNAVAILABLE_FOR_LEGAL_REASONS'
      | 'UNPROCESSABLE_ENTITY'
      | 'UNSUPPORTED_MEDIA_TYPE'
      | 'UPGRADE_REQUIRED'
      | 'URI_TOO_LONG'
      | 'USE_PROXY'
      | 'VARIANT_ALSO_NEGOTIATES';
    view?: View;
    viewName?: string;
  };

  type NotifyConfigPageReq = {
    current?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type NotifyConfigResp = {
    content?: string;
    corn?: string;
    createTime?: string;
    id?: number;
    name?: string;
    notifyStatus?: string;
    notifyType?: number;
    remarks?: string;
    updateTime?: string;
  };

  type NotifyLogPageReq = {
    current?: number;
    notifyConfigId?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type NotifyLogResp = {
    createTime?: string;
    id?: number;
    notifyConfigId?: number;
    notifyConfigName?: string;
    notifyType?: number;
    status?: number;
    updateTime?: string;
  };

  type NotifySendRequest = {
    id?: number;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageEmailConfigResp = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: EmailConfigResp[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageNotifyConfigResp = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: NotifyConfigResp[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageNotifyLogResp = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: NotifyLogResp[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageSafetyUser = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: SafetyUser[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type SafetyUser = {
    avatarUrl?: string;
    email?: string;
    gender?: number;
    id?: number;
    phone?: string;
    userAccount?: string;
    userPassword?: string;
    userRole?: number;
    userStatus?: number;
    username?: string;
  };

  type UserAddRequest = {
    email?: string;
    gender?: number;
    phone?: string;
    userAccount?: string;
    username?: string;
  };

  type UserDeleteRequest = {
    id?: number;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userName?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateRequest = {
    email?: string;
    gender?: number;
    id?: number;
    phone?: string;
    username?: string;
  };

  type View = {
    contentType?: string;
  };
}
