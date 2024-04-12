import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input, Button, Select, Row, Col, DatePicker, Typography, Breadcrumb, Divider, Tooltip, Pagination } from 'antd';
import { PlusOutlined, DeleteOutlined, EyeOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './ProjectList.scss'
import { useNavigate } from 'react-router-dom';
import { getProjects } from '../../../redux/slices/projectSlice';


function ProjectList() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { RangePicker } = DatePicker;
  const dispatch = useDispatch();

  const { projects } = useSelector((state) => state.project);


  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch])

  const columns = [
    {
      title: t('TABLE.ACTIONS'),
      key: 'actions',
      render: (record) => (
        <span>
          <Tooltip title={t('TABLE.DELETE')}>
            <Button
              type="link"
              icon={<DeleteOutlined style={{ color: 'red' }} />}
              onClick={() => handleDelete(record.id)}
            />
          </Tooltip>
          <Tooltip title={t('TABLE.VIEW')}>
            <Button
              type="link"
              icon={<EyeOutlined />}
              onClick={() => handleView(record.id)}
            />
          </Tooltip>
          <Tooltip title={t('TABLE.HISTORY')}>
            <Button
              type="text"
              icon={<FieldTimeOutlined />}
              onClick={() => showDrawer(record)}
            />
          </Tooltip>
        </span>
      ),
    },
    {
      title: t('TABLE.NO.'),
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: t('TABLE.MANAGER'),
      dataIndex: 'manager',
      key: 'manager',
      render: (managers) => (
        <span>
          {managers.map((manager, index) => (
            <div key={index}>{manager.name}</div>
          ))}
        </span>
      ),
    },
    {
      title: t('TABLE.PROJECTS'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('TABLE.STARTDAY'),
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: t('TABLE.ENDDAY'),
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: t('TABLE.STATUS'),
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tooltip placement="topLeft" title={status === 'pending'
          ? 'Pending'
          : status === 'progress'
            ? 'In progress'
            : 'Completed'}>
          <span
            style={{
              backgroundColor:

                status === 'progress'
                  ? 'orange'
                  : 'green',
              color: 'white',
              padding: '3px 8px',
              borderRadius: '4px',
              display: 'inline-block',
            }}
          >
            {status === 'pending'
              ? t('TABLE.PENDING')
              : status === 'progress'
                ? t('TABLE.INPROGRESS')
                : t('TABLE.COMPLETE')}
          </span>
        </Tooltip>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4">

      <Row justify="space-between" align="middle" className='h-max'>
        <Col span={24} md={12}>
          <Typography.Title level={2} style={{ color: 'black' }}>{t('PROJECT.LISTPROJECT')}</Typography.Title>
        </Col>

        <Col span={24} md={12} style={{ textAlign: 'right' }}>
          <Button onClick={() => navigate('/project/create')} type="primary" icon={<PlusOutlined />}
            style={{
              backgroundColor: '#000',
              borderColor: '#000',
              color: '#fff'
            }}>
            {t('PROJECT.CREATE')}</Button>
        </Col>
      </Row>
      <Breadcrumb className="my-4 text-[#101011] cursor-pointer">
        <Breadcrumb.Item onClick={() => {
          navigate("/");
        }}
        >{t('PROJECT.DASHBOARD')}</Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => {
          navigate("/project");
        }}
        >{t('PROJECT.PROJECT')}</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="divider-dark" />

      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} lg={4}>
          <label className="block text-gray-700 font-bold mb-2 lg:mb-0 text-xl">
            {t('PROJECT.LISTPROJECT')}
          </label>
        </Col>
        <Col xs={24} sm={12} lg={4}>
          <Input
            placeholder={t('PROJECT.MANAGER')}
          />
        </Col>
        <Col xs={24} sm={12} lg={4}>
          <Input
            placeholder={t('PROJECT.PROJECTNAME')}
          />
        </Col>
        <Col>
          <RangePicker
            placeholder={[t('TABLE.STARTDAY'), t('TABLE.ENDDAY')]}
            onChange={(e) => {
              if (e !== null && e.length > 0) {
                setSearchParam({
                  ...searchParam,
                  startDate: moment(e[0]['$d']).format('DD/MM/YYYY'),
                  endDate: moment(e[1]['$d']).format('DD/MM/YYYY'),
                });
              } else {
                setSearchParam({
                  ...searchParam,
                  startDate: '',
                  endDate: '',
                });
              }
            }}
            format={'DD/MM/YYYY'}
          />
        </Col>
        <Col xs={24} sm={12} lg={4}>
          <Select
            placeholder={t('PROJECT.STATUS')}
            style={{ width: '100%' }}
            onChange={() => { }}
            allowClear
            options={[
              {
                value: 'pending',
                label: t('TABLE.PENDING'),
              },
              {
                value: 'progress',
                label: t('TABLE.INPROGRESS'),
              },
              {
                value: 'completed',
                label: t('TABLE.COMPLETE'),
              },
            ]}
          >
          </Select>
        </Col>
        <Col xs={24} sm={12} lg={2}>
          <Button type="primary" style={{ backgroundColor: '#000', borderColor: '#000', color: '#fff' }}>
            {t('PROJECT.SEARCH')}
          </Button>
        </Col>
      </Row>
      <Table className='overflow-y-auto h-[350px]' dataSource={projects} columns={columns} scroll={{ x: 'max-content' }} style={{ marginBottom: '19px' }} />
      <Row justify="space-between" align="flex">
        <Col>
          <span style={{ fontWeight: 'bold', fontSize: '15px' }}>
            {t('PROJECT.TOTAL')}: {projects.length}
          </span>
        </Col>
        <Col>
          <Pagination
            defaultCurrent={1}
            total={projects.length}
          />
        </Col>
      </Row>
    </div>
  );
}

export default ProjectList;
