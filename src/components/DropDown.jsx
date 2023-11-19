import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { DownOutlined} from '@ant-design/icons';
import { Dropdown, message, Space, Menu } from 'antd';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
const DropDown = () => {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const apiUrl = `https://lurialab.com/backend/index.php/reporting/get_count_stats?token=A_Ds_s_DDKAJDN_VK588as5d8___________8f48d4558a8as741d_ADSDVD`;
        const { data } = await axios.get(apiUrl);
        console.log(data);
        setCharts(data.assignment_date_questionnaire_count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
  }, []);

  const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  return (
    <Space wrap>
      <Dropdown
        overlay={
          <Menu onClick={handleMenuClick}>
            {charts.map((item) => (
              <Menu.Item key={uuidv4()} icon={<UserOutlined />}>
                {item.code}
              </Menu.Item>
            ))}
          </Menu>
        }
        onClick={handleButtonClick}
      >
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Code
          <DownOutlined />
        </a>
      </Dropdown>
    </Space>
  );
};

export default DropDown;
