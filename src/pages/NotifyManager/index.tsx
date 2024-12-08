import CreateModal from '@/pages/NotifyManager/components/CreateModal';
import UpdateModal from '@/pages/NotifyManager/components/UpdateModal';
import {
  getNotifyConfigPageUsingPost,
  sendNotifyUsingPost,
} from '@/services/backend/notifyConfigController';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Button, message, Modal, Space, Typography } from 'antd';
import React, { useRef, useState } from 'react';

const TableList: React.FC = () => {
  /**
   *  新建窗口的弹窗
   */
  const [createModalVisible, setCreateModalVisible] = useState<boolean>(false);
  /**
   * 更新窗口的弹窗
   */
  const [updateModalVisible, setUpdateModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.NotifyConfigResp>();

  const handleAction = async (row: API.SafetyUser) => {
    console.log(' 测试一下，row:{}', row);
    try {
      const result = await sendNotifyUsingPost({
        id: row.id,
      });
      console.log(' 测试一下，result:{}', result);
      message.success('发送成功！');
    } catch (error: e) {
      console.error('测试一下发送失败，' + e.message);
    }
  };

  /**
   * 删除节点
   *
   * @param row
   */
  const handleDelete = async (row: API.SafetyUser) => {
    Modal.confirm({
      title: '确定要删除这条记录吗？',
      content: `删除后将无法恢复，是否继续？`,
      okText: '确定',
      cancelText: '取消',
      onOk: async () => {
        const hide = message.loading('正在删除');
        if (!row) {
          return true;
        }
        try {
          await deleteUserUsingPost({
            id: row.id,
          });
          hide();
          message.success('删除成功');
          actionRef?.current?.reload();
          return true;
        } catch (error: any) {
          hide();
          message.error('删除失败，' + error.message);
          return false;
        }
      },
      onCancel: async () => {
        console.log('取消删除');
      },
    });
  };

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   */
  const columns: ProColumns<API.SafetyUser>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      valueType: 'text',
      hideInForm: true,
      hideInSearch: true,
    },
    {
      title: '订阅名称',
      dataIndex: 'notifyName',
      valueType: 'text',
    },
    {
      title: '订阅内容',
      dataIndex: 'content',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '通知方式',
      dataIndex: 'notifyType',
      hideInForm: true,
      hideInSearch: true,
      valueEnum: {
        1: {
          text: '邮箱',
        },
        2: {
          text: '短信',
        },
      },
    },
    {
      title: 'corn表达式',
      dataIndex: 'corn',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '备注',
      dataIndex: 'remarks',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '状态',
      dataIndex: 'notifyStatus',
      hideInSearch: true,
      valueEnum: {
        '0': {
          text: '启用',
        },
        '1': {
          text: '禁用',
          status: 'Error',
        },
      },
    },
    {
      title: '操作',
      width: '10%',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <Space size="middle">
          <Typography.Link type="warning" onClick={() => handleAction(record)}>
            测试一下
          </Typography.Link>
          <Typography.Link
            onClick={() => {
              setCurrentRow(record);
              setUpdateModalVisible(true);
            }}
          >
            修改
          </Typography.Link>
          <Typography.Link type="danger" onClick={() => handleDelete(record)}>
            删除
          </Typography.Link>
        </Space>
      ),
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.NotifyConfigResp>
        headerTitle={'查询表格'}
        actionRef={actionRef}
        rowKey={(columns) => columns.id}
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setCreateModalVisible(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={async (params, sort, filter) => {
          const sortField = Object.keys(sort)?.[0];
          const sortOrder = sort?.[sortField] ?? undefined;

          const { data, code } = await getNotifyConfigPageUsingPost({
            ...params,
            sortField,
            sortOrder,
            ...filter,
          } as API.NotifyConfigPageReq);

          return {
            success: code === 200,
            data: data?.records || [],
            total: Number(data?.total) || 0,
          };
        }}
        columns={columns}
      />

      <CreateModal
        visible={createModalVisible}
        columns={columns}
        onSubmit={() => {
          setCreateModalVisible(false);
          actionRef.current?.reload();
        }}
        onCancel={() => {
          setCreateModalVisible(false);
        }}
      />
      <UpdateModal
        visible={updateModalVisible}
        columns={columns}
        oldData={currentRow}
        onSubmit={() => {
          setUpdateModalVisible(false);
          setCurrentRow(undefined);
          actionRef.current?.reload();
        }}
        onCancel={() => {
          setUpdateModalVisible(false);
        }}
      />
    </PageContainer>
  );
};
export default TableList;
