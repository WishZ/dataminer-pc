import { MemoryRouter as Router } from 'react-router-dom';
import { Layout, Menu, theme, ConfigProvider } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import './App.css';

const { Header, Sider, Content } = Layout;

export default function App() {
  const [selectedKey, setSelectedKey] = useState('1');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: '首页',
    },
    {
      key: '2',
      icon: <UserOutlined />,
      label: '个人中心',
    },
  ];

  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return <HomePage />;
      case '2':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 8,
        },
      }}
    >
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            theme="light"
            width={240}
            style={{
              background: colorBgContainer,
              borderRight: '1px solid #f0f0f0',
              boxShadow: '2px 0 8px 0 rgba(29, 35, 41, 0.05)',
            }}
          >
            <div
              style={{
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid #f0f0f0',
                marginBottom: 16,
              }}
            >
              <h2 style={{ margin: 0, color: '#1677ff', fontWeight: 600 }}>
                DataMiner
              </h2>
            </div>
            <Menu
              mode="inline"
              selectedKeys={[selectedKey]}
              items={menuItems}
              onClick={({ key }) => setSelectedKey(key)}
              style={{
                border: 'none',
                fontSize: 14,
              }}
            />
          </Sider>
          <Layout>
            <Header
              style={{
                padding: '0 24px',
                background: colorBgContainer,
                borderBottom: '1px solid #f0f0f0',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 2px 8px 0 rgba(29, 35, 41, 0.05)',
              }}
            >
              <h3 style={{ margin: 0, color: '#262626' }}>
                {menuItems.find((item) => item.key === selectedKey)?.label}
              </h3>
            </Header>
            <Content
              style={{
                margin: 24,
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                boxShadow:
                  '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
                minHeight: 'calc(100vh - 112px)',
              }}
            >
              {renderContent()}
            </Content>
          </Layout>
        </Layout>
      </Router>
    </ConfigProvider>
  );
}
