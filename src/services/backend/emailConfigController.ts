// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getEmailConfigPage POST /api/email-config/page */
export async function getEmailConfigPageUsingPost(
  body: API.EmailConfigPageReq,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageEmailConfigResp>('/api/email-config/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
