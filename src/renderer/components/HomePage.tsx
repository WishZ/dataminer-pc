import { Card, Row, Col, Statistic, Button, Space, Typography, Divider } from 'antd';
import { 
  DatabaseOutlined, 
  CloudDownloadOutlined, 
  BarChartOutlined, 
  RocketOutlined,
  TrophyOutlined,
  ClockCircleOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function HomePage() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <Title level={2} style={{ margin: 0, color: '#262626' }}>
          欢迎使用 DataMiner
        </Title>
        <Paragraph style={{ margin: '8px 0 0 0', color: '#8c8c8c', fontSize: 16 }}>
          强大的数据挖掘和分析平台
        </Paragraph>
      </div>

      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="数据集"
              value={1128}
              prefix={<DatabaseOutlined style={{ color: '#1677ff' }} />}
              valueStyle={{ color: '#262626' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="已处理"
              value={893}
              prefix={<CloudDownloadOutlined style={{ color: '#52c41a' }} />}
              valueStyle={{ color: '#262626' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="分析报告"
              value={156}
              prefix={<BarChartOutlined style={{ color: '#faad14' }} />}
              valueStyle={{ color: '#262626' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="活跃项目"
              value={23}
              prefix={<RocketOutlined style={{ color: '#f5222d' }} />}
              valueStyle={{ color: '#262626' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card 
            title="快速开始" 
            extra={<Button type="primary">查看全部</Button>}
            style={{ height: '100%' }}
          >
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Title level={4} style={{ margin: 0, color: '#262626' }}>
                  <DatabaseOutlined style={{ marginRight: 8, color: '#1677ff' }} />
                  导入数据
                </Title>
                <Paragraph style={{ margin: '8px 0 0 0', color: '#8c8c8c' }}>
                  支持 CSV、JSON、Excel 等多种格式的数据导入
                </Paragraph>
                <Button type="link" style={{ padding: 0, marginTop: 8 }}>
                  开始导入 →
                </Button>
              </div>
              
              <Divider style={{ margin: '16px 0' }} />
              
              <div>
                <Title level={4} style={{ margin: 0, color: '#262626' }}>
                  <BarChartOutlined style={{ marginRight: 8, color: '#52c41a' }} />
                  数据分析
                </Title>
                <Paragraph style={{ margin: '8px 0 0 0', color: '#8c8c8c' }}>
                  使用内置算法进行数据清洗、特征提取和模式识别
                </Paragraph>
                <Button type="link" style={{ padding: 0, marginTop: 8 }}>
                  创建分析 →
                </Button>
              </div>
              
              <Divider style={{ margin: '16px 0' }} />
              
              <div>
                <Title level={4} style={{ margin: 0, color: '#262626' }}>
                  <RocketOutlined style={{ marginRight: 8, color: '#faad14' }} />
                  模型训练
                </Title>
                <Paragraph style={{ margin: '8px 0 0 0', color: '#8c8c8c' }}>
                  构建和训练机器学习模型，支持多种算法
                </Paragraph>
                <Button type="link" style={{ padding: 0, marginTop: 8 }}>
                  开始训练 →
                </Button>
              </div>
            </Space>
          </Card>
        </Col>
        
        <Col xs={24} lg={8}>
          <Card title="最近活动" style={{ height: '100%' }}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TrophyOutlined style={{ color: '#faad14', marginRight: 12, fontSize: 16 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#262626', fontWeight: 500 }}>
                    完成销售数据分析
                  </div>
                  <div style={{ color: '#8c8c8c', fontSize: 12 }}>
                    <ClockCircleOutlined style={{ marginRight: 4 }} />
                    2小时前
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <DatabaseOutlined style={{ color: '#1677ff', marginRight: 12, fontSize: 16 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#262626', fontWeight: 500 }}>
                    导入客户数据集
                  </div>
                  <div style={{ color: '#8c8c8c', fontSize: 12 }}>
                    <ClockCircleOutlined style={{ marginRight: 4 }} />
                    5小时前
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <RocketOutlined style={{ color: '#52c41a', marginRight: 12, fontSize: 16 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#262626', fontWeight: 500 }}>
                    启动预测模型
                  </div>
                  <div style={{ color: '#8c8c8c', fontSize: 12 }}>
                    <ClockCircleOutlined style={{ marginRight: 4 }} />
                    1天前
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <BarChartOutlined style={{ color: '#f5222d', marginRight: 12, fontSize: 16 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#262626', fontWeight: 500 }}>
                    生成月度报告
                  </div>
                  <div style={{ color: '#8c8c8c', fontSize: 12 }}>
                    <ClockCircleOutlined style={{ marginRight: 4 }} />
                    2天前
                  </div>
                </div>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
