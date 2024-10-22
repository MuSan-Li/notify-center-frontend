import CreateModal from '@/pages/UserManager/components/CreateModal';
import UpdateModal from '@/pages/UserManager/components/UpdateModal';
import { deleteUserUsingPost, listUserByPageUsingPost } from '@/services/backend/userController';
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
  const [currentRow, setCurrentRow] = useState<API.SafetyUser>();

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
      title: '用户名',
      dataIndex: 'username',
      valueType: 'text',
    },
    {
      title: '用户账号',
      dataIndex: 'userAccount',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '性别',
      dataIndex: 'gender',
      valueEnum: {
        0: {
          text: '女',
        },
        1: {
          text: '男',
        },
      },
      hideInSearch: true,
    },
    {
      title: '电话',
      dataIndex: 'phone',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      valueType: 'text',
      hideInSearch: true,
    },
    {
      title: '头像',
      dataIndex: 'avatarUrl',
      valueType: 'image',
      fieldProps: {
        width: 32,
      },
      hideInForm: true,
      hideInSearch: true,
    },
    {
      title: '角色',
      dataIndex: 'userRole',
      hideInForm: true,
      hideInSearch: true,
      valueEnum: {
        0: {
          text: '普通用户',
        },
        1: {
          text: '管理员',
        },
      },
    },
    {
      title: '状态',
      dataIndex: 'userStatus',
      hideInForm: true,
      hideInSearch: true,
      valueEnum: {
        0: {
          text: '正常',
        },
        1: {
          text: '账户被锁定',
          status: 'Error',
        },
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <Space size="middle">
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
      <ProTable<API.SafetyUser>
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

          const { data, code } = await listUserByPageUsingPost({
            ...params,
            sortField,
            sortOrder,
            ...filter,
          } as API.UserQueryRequest);

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
