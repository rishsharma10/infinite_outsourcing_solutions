import React from 'react';
import { Layout, Button, Avatar, Dropdown, Badge, theme } from 'antd';
import { 
  BellOutlined, 
  UserOutlined, 
  SettingOutlined, 
  LogoutOutlined,
  SunOutlined,
  MoonOutlined,
} from '@ant-design/icons';
import { useAppTheme } from '@/lib/themeProvider';
import logo from "@/assets/logo-white.png";
import Link from 'next/link';
// import { useAppTheme } from '@/lib/theme-provider';

const { Header: AntHeader } = Layout;

const Header = () => {
  const { token } = theme.useToken();
  const { isDarkMode, toggleTheme } = useAppTheme();

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: <Link href="/admin/profile">Profile</Link>,
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
    },
  ];

  const notificationItems = [
    {
      key: '1',
      label: (
        <div>
          <div style={{ fontWeight: 'bold' }}>New Order #1234</div>
          <div style={{ fontSize: '12px', color: token.colorTextSecondary }}>Just now</div>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div>
          <div style={{ fontWeight: 'bold' }}>Product "Headphones" is low in stock</div>
          <div style={{ fontSize: '12px', color: token.colorTextSecondary }}>5 minutes ago</div>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div>
          <div style={{ fontWeight: 'bold' }}>New review from customer</div>
          <div style={{ fontSize: '12px', color: token.colorTextSecondary }}>1 hour ago</div>
        </div>
      ),
    },
  ];

  return (
    <header className="position-fixed z-2 w-100">
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo.src} height={40} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 mx-auto">
            <li className="nav-item">
              <a
                className="nav-link bg-red-300 active"
                aria-current="page"
                href="#"
              >
                Job Seekers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Outsourcing
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Industries we serve
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Jobs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact Us
              </a>
            </li>
          </ul>

          {/* <div className="d-flex align-items-center gap-2 text-primary">
          <button className="btn p-0 bg-transparent text-white">Login</button>/
          <button className="btn p-0 bg-transparent text-white">Register</button>
         </div> */}
        </div>
      </div>
    </nav>
  </header>
  );
};

export default Header;