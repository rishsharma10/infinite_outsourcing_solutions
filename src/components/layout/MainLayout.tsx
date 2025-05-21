import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

const { Sider, Content } = Layout;

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  
  const { token } = theme.useToken();
  
  const menuItems = [
    {
      key: '/',
      // icon: <DashboardOutlined />,
      label: <Link href="/admin/dashboard">Dashboard</Link>,
    },
    {
      key: '/products',
      // icon: <ShoppingOutlined />,
      label: <Link href="/products">Products</Link>,
    },
    {
      key: '/orders',
      // icon: <ShoppingCartOutlined />,
      label: <Link href="/orders">Orders</Link>,
    },
    {
      key: '/customers',
      // icon: <UserOutlined />,
      label: <Link href="/customers">Customers</Link>,
    },
    {
      key: '/inventory',
      // icon: <DatabaseOutlined />,
      label: <Link href="/inventory">Inventory</Link>,
    },
    {
      key: '/analytics',
      // icon: <BarChartOutlined />,
      label: <Link href="/analytics">Analytics</Link>,
    },
    {
      key: '/settings',
      // icon: <SettingOutlined />,
      label: <Link href="/settings">Settings</Link>,
    },
  ];
  
  return (
      <Layout style={{ marginLeft: collapsed ? 80 : 220, transition: 'all 0.2s' }}>
        <Header />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: token.colorBgContainer,
            borderRadius: token.borderRadius,
          }}
        >
          {children}
        </Content>
        <Footer/>
    </Layout>
  );
};

export default MainLayout;