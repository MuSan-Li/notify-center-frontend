// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getNotifyConfigPage POST /api/notify-config/page */
export async function getNotifyConfigPageUsingPost(
  body: API.NotifyConfigPageReq,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageNotifyConfigResp>('/api/notify-config/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** sendNotify POST /api/notify-config/sendNotify */
export async function sendNotifyUsingPost(
  body: API.NotifySendRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/notify-config/sendNotify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
