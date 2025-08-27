import { 
  Card, 
  Row, 
  Col, 
  Avatar, 
  Typography, 
  Button, 
  Space, 
  Descriptions, 
  Progress,
  Tag,
  List,
  Divider
} from 'antd';
import { 
  UserOutlined, 
  EditOutlined, 
  SettingOutlined,
  TrophyOutlined,
  StarOutlined,
  ClockCircleOutlined,
  DatabaseOutlined,
  BarChartOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function ProfilePage() {
  const achievements = [
    { title: '数据专家', description: '处理超过1000个数据集', icon: <DatabaseOutlined />, color: '#1677ff' },
    { title: '分析大师', description: '完成100个分析项目', icon: <BarChartOutlined />, color: '#52c41a' },
    { title: '效率之星', description: '连续30天活跃使用', icon: <StarOutlined />, color: '#faad14' },
    { title: '团队协作', description: '参与10个团队项目', icon: <TrophyOutlined />, color: '#f5222d' },
  ];

  const recentProjects = [
    {
      title: '销售数据分析',
      status: '已完成',
      time: '2024-01-15',
      type: '数据分析',
    },
    {
      title: '客户行为预测',
      status: '进行中',
      time: '2024-01-10',
      type: '机器学习',
    },
    {
      title: '市场趋势报告',
      status: '已完成',
      time: '2024-01-08',
      type: '数据可视化',
    },
    {
      title: '用户画像构建',
      status: '待开始',
      time: '2024-01-05',
      type: '数据挖掘',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '已完成': return 'success';
      case '进行中': return 'processing';
      case '待开始': return 'default';
      default: return 'default';
    }
  };

  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={8}>
          <Card>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <Avatar 
                size={80} 
                icon={<UserOutlined />} 
                style={{ backgroundColor: '#1677ff', marginBottom: 16 }}
              />
              <Title level={3} style={{ margin: 0 }}>张三</Title>
              <Paragraph style={{ color: '#8c8c8c', margin: '8px 0 0 0' }}>
                高级数据分析师
              </Paragraph>
            </div>
            
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <Button type="primary" icon={<EditOutlined />} block>
                编辑资料
              </Button>
              <Button icon={<SettingOutlined />} block>
                账户设置
              </Button>
            </Space>
          </Card>

          <Card title="技能等级" style={{ marginTop: 24 }}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span>数据分析</span>
                  <span>85%</span>
                </div>
                <Progress percent={85} strokeColor="#1677ff" />
              </div>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span>机器学习</span>
                  <span>72%</span>
                </div>
                <Progress percent={72} strokeColor="#52c41a" />
              </div>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span>数据可视化</span>
                  <span>90%</span>
                </div>
                <Progress percent={90} strokeColor="#faad14" />
              </div>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span>统计分析</span>
                  <span>78%</span>
                </div>
                <Progress percent={78} strokeColor="#f5222d" />
              </div>
            </Space>
          </Card>
        </Col>

        <Col xs={24} lg={16}>
          <Card title="基本信息">
            <Descriptions column={2} bordered>
              <Descriptions.Item label="用户名">zhangsan</Descriptions.Item>
              <Descriptions.Item label="邮箱">zhangsan@example.com</Descriptions.Item>
              <Descriptions.Item label="手机号">138****8888</Descriptions.Item>
              <Descriptions.Item label="部门">数据科学部</Descriptions.Item>
              <Descriptions.Item label="职位">高级数据分析师</Descriptions.Item>
              <Descriptions.Item label="入职时间">2022-03-15</Descriptions.Item>
              <Descriptions.Item label="最后登录">
                <ClockCircleOutlined style={{ marginRight: 4 }} />
                2024-01-20 14:30
              </Descriptions.Item>
              <Descriptions.Item label="账户状态">
                <Tag color="success">正常</Tag>
              </Descriptions.Item>
            </Descriptions>
          </Card>

          <Card title="成就徽章" style={{ marginTop: 24 }}>
            <Row gutter={[16, 16]}>
              {achievements.map((achievement, index) => (
                <Col xs={24} sm={12} key={index}>
                  <Card size="small" style={{ textAlign: 'center' }}>
                    <div style={{ color: achievement.color, fontSize: 24, marginBottom: 8 }}>
                      {achievement.icon}
                    </div>
                    <Title level={5} style={{ margin: '0 0 4px 0' }}>
                      {achievement.title}
                    </Title>
                    <Paragraph style={{ margin: 0, color: '#8c8c8c', fontSize: 12 }}>
                      {achievement.description}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          <Card title="最近项目" style={{ marginTop: 24 }}>
            <List
              dataSource={recentProjects}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{item.title}</span>
                        <Tag color={getStatusColor(item.status)}>{item.status}</Tag>
                      </div>
                    }
                    description={
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8c8c8c' }}>
                        <span>{item.type}</span>
                        <span>{item.time}</span>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
