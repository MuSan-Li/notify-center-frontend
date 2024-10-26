// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getNotifyLogPage POST /api/notify-info-log/page */
export async function getNotifyLogPageUsingPost(
  body: API.NotifyLogPageReq,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageNotifyLogResp>('/api/notify-info-log/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
