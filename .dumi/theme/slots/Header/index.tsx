import React from 'react';
import DumiLogo from 'dumi/theme-default/slots/Logo';
import DumiSearch from 'dumi/theme-default/slots/SearchBar';
import { Row, Col, Space, Divider, Select } from 'antd';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import GithubLink from './GithubLink';

import './index.less';

const prefix = 'xr-doc-header';

const Header: React.FC = () => {

  return (
    <header className={prefix}>
      <Row align="middle" justify="space-between" style={{ padding: '10px 40px' }}>
        <Col span={12}>
          <Space size={20}>
            <DumiLogo />
          </Space>
        </Col>
        <Col span={12}>
          <Space size={0} style={{ float: 'right'}}>
            <DumiSearch/>
            <Navigation />
            <Select 
              options={[{ label: '2.x', value: 2 }, { label: '1.x', value: 1}]} 
              style={{ width: '70px' }} 
              defaultValue={2}
              onChange={(value) => {
                if (value === 2) {
                  return;
                }
                window.open('https://xrender1.vercel.app/')
              }}
            />
            <Divider type="vertical" style={{ marginLeft: 0 }} />
            <Space>
              <ThemeSwitch />
              <GithubLink />
            </Space>
          </Space>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
