'use client';
import {
  LaptopOutlined,
  MobileOutlined,
  SaveOutlined,
  TabletOutlined
} from '@ant-design/icons';
import { Card } from '@skeleton/shared';
import {
  Badge,
  Button,
  Col,
  Collapse,
  Descriptions,
  Flex,
  Form,
  Input,
  Row,
  Typography
} from 'antd';
import { useStylesContext } from '../../../context/styles';
import { UserProfileLayout } from '../user-profile-layout';
const { Text } = Typography;
type FieldType = {
  currentPassword?: string;
  newPassword?: string;
  reEnterPassword?: string;
};
const sessionActivityData = [
  {
    id: '6604171c-296c-4bde-adf9-daa128ade922',
    login_time: '1/31/2022',
    login_location: 'Ribeira Grande',
    device_type: 'tablet',
    browser: 'Firefox',
    ip_address: '1.229.167.184',
    session_type: 'password change',
    status: 'suspended',
    login_duration: 1588,
    login_attempts: 4
  },
  {
    id: '972b51a1-44a9-42e0-bc21-c1858932c7c2',
    login_time: '9/1/2022',
    login_location: 'Zhaotong',
    device_type: 'mobile',
    browser: 'Firefox',
    ip_address: '97.248.187.6',
    session_type: 'account creation',
    status: 'locked',
    login_duration: 107,
    login_attempts: 8
  },
  {
    id: '5eacbf6d-0849-475e-beaa-862d75bb9b09',
    login_time: '3/3/2022',
    login_location: 'Peace River',
    device_type: 'desktop',
    browser: 'Chrome',
    ip_address: '225.201.8.151',
    session_type: 'device verification',
    status: 'active',
    login_duration: 3374,
    login_attempts: 7
  },
  {
    id: 'ac91b15d-5943-4e42-a4a8-00099e723fdc',
    login_time: '3/7/2022',
    login_location: 'Chenzhou',
    device_type: 'desktop',
    browser: 'Brave',
    ip_address: '168.123.188.20',
    session_type: 'logout',
    status: 'suspended',
    login_duration: 845,
    login_attempts: 5
  },
  {
    id: 'a29a5149-655c-446a-a972-5f7a6e75d96d',
    login_time: '9/3/2022',
    login_location: 'Kertabumi',
    device_type: 'tablet',
    browser: 'Edge',
    ip_address: '82.109.65.17',
    session_type: 'password change',
    status: 'suspended',
    login_duration: 562,
    login_attempts: 5
  },
  {
    id: '4231bc04-df8f-4a60-9958-1a7a3ca9c9e7',
    login_time: '11/2/2022',
    login_location: 'Göteborg',
    device_type: 'tablet',
    browser: 'Mozilla',
    ip_address: '129.143.29.116',
    session_type: 'account creation',
    status: 'locked',
    login_duration: 44,
    login_attempts: 8
  },
  {
    id: '41926591-c30a-4ccc-bcbc-ec9a5483dd67',
    login_time: '2/7/2022',
    login_location: 'Saint Croix',
    device_type: 'mobile',
    browser: 'Edge',
    ip_address: '23.102.63.218',
    session_type: 'account deletion',
    status: 'suspended',
    login_duration: 2582,
    login_attempts: 0
  },
  {
    id: 'fc363797-4d89-4af8-b44e-dc4f2297f6e0',
    login_time: '7/21/2022',
    login_location: 'Novi Zagreb',
    device_type: 'mobile',
    browser: 'Firefox',
    ip_address: '55.155.65.117',
    session_type: 'password reset',
    status: 'active',
    login_duration: 1903,
    login_attempts: 7
  },
  {
    id: '5cfa99f8-35f6-4226-8627-b21909dfbf1a',
    login_time: '12/24/2022',
    login_location: 'Seia',
    device_type: 'mobile',
    browser: 'Brave',
    ip_address: '141.38.42.66',
    session_type: 'login',
    status: 'suspended',
    login_duration: 437,
    login_attempts: 9
  },
  {
    id: '840e9764-e93f-41da-988f-bac6dc2d8c7b',
    login_time: '7/2/2022',
    login_location: 'Mudanjiang',
    device_type: 'desktop',
    browser: 'Safari',
    ip_address: '14.197.112.162',
    session_type: 'session timeout',
    status: 'locked',
    login_duration: 2218,
    login_attempts: 6
  },
  {
    id: 'ba527e01-1756-480f-b939-7d9b02e4a9a7',
    login_time: '6/8/2022',
    login_location: 'Navais',
    device_type: 'mobile',
    browser: 'Opera',
    ip_address: '170.221.13.71',
    session_type: 'session timeout',
    status: 'active',
    login_duration: 3043,
    login_attempts: 8
  },
  {
    id: '9382ef06-33cd-46a5-bc16-541b2b60b05d',
    login_time: '6/13/2022',
    login_location: 'Inda Silasē',
    device_type: 'tablet',
    browser: 'Safari',
    ip_address: '123.57.215.191',
    session_type: 'account creation',
    status: 'suspended',
    login_duration: 2354,
    login_attempts: 5
  },
  {
    id: 'f4782842-6541-4bf6-af76-e7df175b1bf6',
    login_time: '3/14/2022',
    login_location: 'København',
    device_type: 'mobile',
    browser: 'Chrome',
    ip_address: '151.169.62.89',
    session_type: 'account creation',
    status: 'active',
    login_duration: 518,
    login_attempts: 10
  },
  {
    id: '738fd6a7-f77b-467b-8ab6-249d086b0877',
    login_time: '8/4/2022',
    login_location: 'Memaliaj',
    device_type: 'mobile',
    browser: 'Brave',
    ip_address: '248.233.77.23',
    session_type: 'account creation',
    status: 'locked',
    login_duration: 2310,
    login_attempts: 4
  },
  {
    id: '9b69f89b-c7d2-405d-b262-d17ab6d08ed2',
    login_time: '10/5/2022',
    login_location: 'Brooklyn',
    device_type: 'tablet',
    browser: 'Brave',
    ip_address: '59.35.162.196',
    session_type: 'account creation',
    status: 'active',
    login_duration: 1007,
    login_attempts: 2
  },
  {
    id: '24efff8f-af5b-46fb-9587-a6dbcf52ba9f',
    login_time: '5/9/2022',
    login_location: 'Netishyn',
    device_type: 'desktop',
    browser: 'Brave',
    ip_address: '103.221.167.32',
    session_type: 'password reset',
    status: 'locked',
    login_duration: 984,
    login_attempts: 0
  },
  {
    id: '44ba0522-5f55-4299-a005-550726cd9f34',
    login_time: '1/10/2022',
    login_location: 'Tongole',
    device_type: 'desktop',
    browser: 'Edge',
    ip_address: '173.197.116.170',
    session_type: 'password change',
    status: 'active',
    login_duration: 1887,
    login_attempts: 9
  },
  {
    id: 'c145537f-30e8-4b62-a0cf-c42b44d2c4d3',
    login_time: '1/8/2022',
    login_location: 'Randusari',
    device_type: 'desktop',
    browser: 'Brave',
    ip_address: '65.162.10.179',
    session_type: 'device verification',
    status: 'locked',
    login_duration: 2964,
    login_attempts: 6
  },
  {
    id: '94e341e6-6d88-4df5-8dde-03f6fb5df4c0',
    login_time: '3/22/2022',
    login_location: 'Yangiobod',
    device_type: 'tablet',
    browser: 'Mozilla',
    ip_address: '226.28.29.166',
    session_type: 'login',
    status: 'active',
    login_duration: 1639,
    login_attempts: 1
  },
  {
    id: 'fcad15b0-63c9-4668-be02-84d2da29e28e',
    login_time: '8/26/2022',
    login_location: 'Pokrovka',
    device_type: 'desktop',
    browser: 'Safari',
    ip_address: '6.14.168.146',
    session_type: 'device verification',
    status: 'locked',
    login_duration: 118,
    login_attempts: 6
  },
  {
    id: '9d499a78-d23a-4776-816c-7b886cf9c2ef',
    login_time: '3/21/2022',
    login_location: 'Sigli',
    device_type: 'tablet',
    browser: 'Safari',
    ip_address: '204.66.71.129',
    session_type: 'device verification',
    status: 'suspended',
    login_duration: 1185,
    login_attempts: 6
  },
  {
    id: '15244209-2760-4fc4-a051-d07944da529b',
    login_time: '1/18/2022',
    login_location: 'Barong',
    device_type: 'desktop',
    browser: 'Mozilla',
    ip_address: '152.130.211.76',
    session_type: 'password change',
    status: 'locked',
    login_duration: 1759,
    login_attempts: 3
  },
  {
    id: 'e7adb60e-8eac-4b35-a837-2dd84f00469c',
    login_time: '4/5/2022',
    login_location: 'Xiaopu',
    device_type: 'tablet',
    browser: 'Brave',
    ip_address: '147.134.161.17',
    session_type: 'password reset',
    status: 'locked',
    login_duration: 2788,
    login_attempts: 0
  },
  {
    id: 'a1dab6af-3075-4f0e-aff0-c37edb93c8be',
    login_time: '1/22/2022',
    login_location: 'Temirtau',
    device_type: 'desktop',
    browser: 'Mozilla',
    ip_address: '134.6.23.87',
    session_type: 'password change',
    status: 'locked',
    login_duration: 1918,
    login_attempts: 8
  },
  {
    id: '431de8a1-0747-446a-95ca-e24e9b7c7fe1',
    login_time: '4/12/2022',
    login_location: 'Dagur',
    device_type: 'desktop',
    browser: 'Edge',
    ip_address: '17.252.156.118',
    session_type: 'device verification',
    status: 'suspended',
    login_duration: 766,
    login_attempts: 3
  },
  {
    id: 'daf76641-f829-4f7e-9f8a-74e6bdff8943',
    login_time: '7/21/2022',
    login_location: 'Jinchang',
    device_type: 'mobile',
    browser: 'Brave',
    ip_address: '157.255.239.96',
    session_type: 'password reset',
    status: 'suspended',
    login_duration: 341,
    login_attempts: 2
  },
  {
    id: '05e07bf0-15dc-480d-9942-3f0ae15b451d',
    login_time: '5/5/2022',
    login_location: 'Yangjiaqiao',
    device_type: 'mobile',
    browser: 'Chrome',
    ip_address: '171.200.199.216',
    session_type: 'account creation',
    status: 'suspended',
    login_duration: 581,
    login_attempts: 6
  },
  {
    id: '3a6eee44-37d2-46b0-8fc6-d29eaa523bbe',
    login_time: '1/1/2022',
    login_location: 'Panggulan',
    device_type: 'tablet',
    browser: 'Safari',
    ip_address: '99.12.151.91',
    session_type: 'authentication failed',
    status: 'active',
    login_duration: 371,
    login_attempts: 2
  },
  {
    id: '1aa3c351-790a-4592-9031-2b0adf2ea08e',
    login_time: '3/9/2022',
    login_location: 'Constantia',
    device_type: 'desktop',
    browser: 'Safari',
    ip_address: '126.100.221.123',
    session_type: 'session timeout',
    status: 'suspended',
    login_duration: 614,
    login_attempts: 7
  },
  {
    id: '9a9f12c5-7dd1-48a7-96c7-f4d38b71e875',
    login_time: '8/11/2022',
    login_location: 'Areado',
    device_type: 'mobile',
    browser: 'Opera',
    ip_address: '126.234.80.243',
    session_type: 'session timeout',
    status: 'suspended',
    login_duration: 2541,
    login_attempts: 1
  },
  {
    id: 'c7f7b449-84ff-4d8a-b78c-708d6e556536',
    login_time: '7/3/2022',
    login_location: 'Conceição do Jacuípe',
    device_type: 'tablet',
    browser: 'Mozilla',
    ip_address: '205.221.164.231',
    session_type: 'account deletion',
    status: 'active',
    login_duration: 2097,
    login_attempts: 10
  },
  {
    id: '53fd0f19-f7e8-438c-b502-010aea3879fa',
    login_time: '1/22/2022',
    login_location: 'Cergy-Pontoise',
    device_type: 'tablet',
    browser: 'Safari',
    ip_address: '207.146.30.81',
    session_type: 'session timeout',
    status: 'suspended',
    login_duration: 2525,
    login_attempts: 0
  },
  {
    id: '910de831-417b-4a13-9ca7-9e68e6d5c2f7',
    login_time: '4/1/2022',
    login_location: 'Vesoul',
    device_type: 'desktop',
    browser: 'Chrome',
    ip_address: '239.102.60.217',
    session_type: 'password reset',
    status: 'suspended',
    login_duration: 1387,
    login_attempts: 10
  },
  {
    id: '46e5413a-2d38-4998-94c8-639e0edf39a6',
    login_time: '8/19/2022',
    login_location: 'Ljupina',
    device_type: 'desktop',
    browser: 'Chrome',
    ip_address: '13.253.26.243',
    session_type: 'password reset',
    status: 'suspended',
    login_duration: 971,
    login_attempts: 10
  },
  {
    id: 'a965f805-f818-40e4-9f63-1f79f0460019',
    login_time: '9/27/2022',
    login_location: 'Afonsoeiro',
    device_type: 'mobile',
    browser: 'Opera',
    ip_address: '156.42.59.50',
    session_type: 'logout',
    status: 'suspended',
    login_duration: 1493,
    login_attempts: 7
  },
  {
    id: '7fe791a1-fd4f-4bfd-9a1c-eb9b087e61e2',
    login_time: '1/29/2022',
    login_location: 'Hekou',
    device_type: 'desktop',
    browser: 'Safari',
    ip_address: '75.121.238.3',
    session_type: 'account deletion',
    status: 'locked',
    login_duration: 3403,
    login_attempts: 9
  },
  {
    id: '291b3863-e62a-4f36-8eea-a0afe539db0d',
    login_time: '10/29/2022',
    login_location: 'Moate',
    device_type: 'tablet',
    browser: 'Brave',
    ip_address: '100.228.40.252',
    session_type: 'logout',
    status: 'locked',
    login_duration: 2085,
    login_attempts: 9
  },
  {
    id: '4d3bc0ae-e137-47ca-8cc8-d9e5314d248b',
    login_time: '4/5/2022',
    login_location: 'Dingshan',
    device_type: 'mobile',
    browser: 'Edge',
    ip_address: '124.228.156.248',
    session_type: 'password change',
    status: 'active',
    login_duration: 273,
    login_attempts: 8
  },
  {
    id: '215ce119-1c64-4d9f-be46-8c3627b3958a',
    login_time: '6/5/2022',
    login_location: 'Fak Tha',
    device_type: 'desktop',
    browser: 'Opera',
    ip_address: '176.80.51.240',
    session_type: 'account creation',
    status: 'suspended',
    login_duration: 3476,
    login_attempts: 5
  },
  {
    id: '7def01f0-da7b-405f-871d-8a99f1de0739',
    login_time: '6/17/2022',
    login_location: 'Tundagan',
    device_type: 'tablet',
    browser: 'Opera',
    ip_address: '178.145.220.70',
    session_type: 'device verification',
    status: 'locked',
    login_duration: 658,
    login_attempts: 0
  },
  {
    id: '0081c86e-d39d-4562-9d1c-d2ae7fd71246',
    login_time: '4/8/2022',
    login_location: 'Tobol',
    device_type: 'desktop',
    browser: 'Mozilla',
    ip_address: '82.136.213.193',
    session_type: 'session expired',
    status: 'active',
    login_duration: 994,
    login_attempts: 5
  },
  {
    id: '72af415b-7bb2-47be-b86c-6bfd2965fcfb',
    login_time: '11/16/2022',
    login_location: 'Opaka',
    device_type: 'desktop',
    browser: 'Brave',
    ip_address: '198.180.175.253',
    session_type: 'account creation',
    status: 'locked',
    login_duration: 2151,
    login_attempts: 1
  },
  {
    id: 'e4db20a3-8be6-41dd-a898-00fdeb74ac76',
    login_time: '9/9/2022',
    login_location: 'Irving',
    device_type: 'desktop',
    browser: 'Brave',
    ip_address: '91.200.89.245',
    session_type: 'session expired',
    status: 'locked',
    login_duration: 3420,
    login_attempts: 4
  },
  {
    id: 'ba860021-bd28-4f54-880d-7060334f891e',
    login_time: '9/11/2022',
    login_location: 'Kozel’shchyna',
    device_type: 'tablet',
    browser: 'Edge',
    ip_address: '144.84.187.67',
    session_type: 'authentication failed',
    status: 'locked',
    login_duration: 2088,
    login_attempts: 6
  },
  {
    id: '51a28596-4127-41f7-b7d6-b1d1afcbac49',
    login_time: '1/7/2022',
    login_location: 'Shādegān',
    device_type: 'desktop',
    browser: 'Safari',
    ip_address: '93.8.197.134',
    session_type: 'logout',
    status: 'locked',
    login_duration: 1601,
    login_attempts: 6
  },
  {
    id: '6c05ba8d-b22d-4d3a-9ce0-5dde20d8a805',
    login_time: '11/6/2022',
    login_location: 'Grand Rapids',
    device_type: 'mobile',
    browser: 'Opera',
    ip_address: '128.49.225.116',
    session_type: 'device verification',
    status: 'locked',
    login_duration: 1011,
    login_attempts: 8
  },
  {
    id: '965efaea-5371-472f-bca4-4f7905066a3d',
    login_time: '6/16/2022',
    login_location: 'Santo Domingo',
    device_type: 'desktop',
    browser: 'Edge',
    ip_address: '84.166.230.2',
    session_type: 'account creation',
    status: 'locked',
    login_duration: 514,
    login_attempts: 0
  },
  {
    id: '3c2a1242-ff23-48c6-a627-9bef52f3e7fa',
    login_time: '5/24/2022',
    login_location: 'Bondoufle',
    device_type: 'mobile',
    browser: 'Safari',
    ip_address: '59.251.114.105',
    session_type: 'device verification',
    status: 'suspended',
    login_duration: 401,
    login_attempts: 2
  },
  {
    id: 'f46fe7dc-1550-4dfe-88d8-85527d4f4cce',
    login_time: '6/6/2022',
    login_location: 'Bayuin',
    device_type: 'desktop',
    browser: 'Firefox',
    ip_address: '12.138.52.68',
    session_type: 'authentication failed',
    status: 'active',
    login_duration: 2938,
    login_attempts: 1
  },
  {
    id: 'a3bc7bc2-ce94-4a91-8bf6-4df2167cf3e4',
    login_time: '11/13/2022',
    login_location: 'Anling',
    device_type: 'desktop',
    browser: 'Safari',
    ip_address: '40.255.75.200',
    session_type: 'logout',
    status: 'suspended',
    login_duration: 3400,
    login_attempts: 1
  },
  {
    id: '9adfa22a-583e-48d1-858a-d3e69054c2f4',
    login_time: '3/27/2022',
    login_location: 'Cihaur',
    device_type: 'mobile',
    browser: 'Edge',
    ip_address: '119.186.77.69',
    session_type: 'account creation',
    status: 'locked',
    login_duration: 2421,
    login_attempts: 6
  },
  {
    id: '1749d3c3-b39b-4e0e-bc2d-8132c328ae19',
    login_time: '7/2/2022',
    login_location: 'Quốc Oai',
    device_type: 'mobile',
    browser: 'Firefox',
    ip_address: '146.43.175.140',
    session_type: 'device verification',
    status: 'active',
    login_duration: 1506,
    login_attempts: 2
  },
  {
    id: '22fec80d-7208-4690-bbfe-093508e57967',
    login_time: '6/17/2022',
    login_location: 'Kawahmanuk',
    device_type: 'desktop',
    browser: 'Mozilla',
    ip_address: '203.175.55.154',
    session_type: 'account deletion',
    status: 'suspended',
    login_duration: 1576,
    login_attempts: 10
  },
  {
    id: '020c09fd-c1e1-49b8-8469-ba5d3149bdbe',
    login_time: '3/30/2022',
    login_location: 'Saint-Paul',
    device_type: 'mobile',
    browser: 'Safari',
    ip_address: '41.76.229.15',
    session_type: 'password change',
    status: 'locked',
    login_duration: 544,
    login_attempts: 2
  },
  {
    id: '36a1de49-5b86-448c-8495-11a258f07ff3',
    login_time: '8/1/2022',
    login_location: 'Pamedaran',
    device_type: 'desktop',
    browser: 'Safari',
    ip_address: '192.5.88.212',
    session_type: 'device verification',
    status: 'locked',
    login_duration: 2299,
    login_attempts: 6
  },
  {
    id: '3768d82c-0710-45ca-986b-040a3e3b212d',
    login_time: '7/14/2022',
    login_location: 'Tianhe',
    device_type: 'desktop',
    browser: 'Mozilla',
    ip_address: '113.210.165.206',
    session_type: 'device verification',
    status: 'suspended',
    login_duration: 1968,
    login_attempts: 6
  },
  {
    id: '4cc62d65-3bdb-4e79-8c8d-f1b68572f852',
    login_time: '10/18/2022',
    login_location: 'Sibay',
    device_type: 'mobile',
    browser: 'Chrome',
    ip_address: '216.173.125.94',
    session_type: 'authentication failed',
    status: 'active',
    login_duration: 3052,
    login_attempts: 10
  },
  {
    id: '01a1ac0d-2ab0-42a7-acfe-5c7efa670173',
    login_time: '7/30/2022',
    login_location: 'Estefania',
    device_type: 'mobile',
    browser: 'Firefox',
    ip_address: '96.238.204.103',
    session_type: 'logout',
    status: 'locked',
    login_duration: 523,
    login_attempts: 3
  },
  {
    id: '635b71a4-92d2-4f2a-bb46-ecf6a5106c2d',
    login_time: '2/9/2022',
    login_location: 'Huibu',
    device_type: 'mobile',
    browser: 'Opera',
    ip_address: '151.112.200.22',
    session_type: 'login',
    status: 'locked',
    login_duration: 2593,
    login_attempts: 9
  },
  {
    id: '6862b2cb-d485-4685-a59c-ec67c5893587',
    login_time: '5/23/2022',
    login_location: 'Greensboro',
    device_type: 'desktop',
    browser: 'Chrome',
    ip_address: '158.174.210.180',
    session_type: 'password change',
    status: 'locked',
    login_duration: 547,
    login_attempts: 7
  },
  {
    id: '5d959e21-e247-4526-9e3f-e9a0950506f5',
    login_time: '3/2/2022',
    login_location: 'Lý Sơn',
    device_type: 'tablet',
    browser: 'Opera',
    ip_address: '107.196.99.157',
    session_type: 'session expired',
    status: 'locked',
    login_duration: 2680,
    login_attempts: 5
  },
  {
    id: 'e8e5b68d-0f8f-4fbe-8137-07d99ff51854',
    login_time: '1/21/2022',
    login_location: 'La Guadalupe',
    device_type: 'desktop',
    browser: 'Brave',
    ip_address: '206.121.11.230',
    session_type: 'authentication failed',
    status: 'locked',
    login_duration: 3187,
    login_attempts: 8
  },
  {
    id: '24d84801-cd1c-4d3a-af40-20a01b1170f6',
    login_time: '9/23/2022',
    login_location: 'La Calera',
    device_type: 'tablet',
    browser: 'Chrome',
    ip_address: '26.213.156.68',
    session_type: 'session timeout',
    status: 'active',
    login_duration: 12,
    login_attempts: 2
  },
  {
    id: '2009bad1-2bda-4fcb-b443-f6124ee0ee18',
    login_time: '11/4/2022',
    login_location: 'Coronel',
    device_type: 'desktop',
    browser: 'Brave',
    ip_address: '132.24.86.100',
    session_type: 'authentication failed',
    status: 'locked',
    login_duration: 984,
    login_attempts: 2
  },
  {
    id: '385122ea-bc36-422a-8b2b-1f08731c40e6',
    login_time: '12/28/2022',
    login_location: 'Villaba',
    device_type: 'tablet',
    browser: 'Firefox',
    ip_address: '200.253.50.32',
    session_type: 'session expired',
    status: 'suspended',
    login_duration: 3221,
    login_attempts: 10
  },
  {
    id: '59206252-2242-4757-b53c-d76359ea8ef0',
    login_time: '6/5/2022',
    login_location: 'Sayaxché',
    device_type: 'mobile',
    browser: 'Safari',
    ip_address: '243.53.215.147',
    session_type: 'account creation',
    status: 'active',
    login_duration: 2823,
    login_attempts: 5
  },
  {
    id: '3d3f3420-512f-498a-ac17-acf90f383d0d',
    login_time: '3/26/2022',
    login_location: 'Ganyan',
    device_type: 'tablet',
    browser: 'Mozilla',
    ip_address: '236.131.173.221',
    session_type: 'device verification',
    status: 'suspended',
    login_duration: 1932,
    login_attempts: 1
  },
  {
    id: '7217cb00-84ab-436b-afc7-506a99f1bd82',
    login_time: '7/27/2022',
    login_location: 'Ngkiong',
    device_type: 'desktop',
    browser: 'Mozilla',
    ip_address: '207.50.13.99',
    session_type: 'session timeout',
    status: 'suspended',
    login_duration: 2633,
    login_attempts: 9
  },
  {
    id: '159d5f99-525d-406b-8e9a-097f3b73140a',
    login_time: '11/18/2022',
    login_location: 'Krajan',
    device_type: 'mobile',
    browser: 'Brave',
    ip_address: '221.145.85.116',
    session_type: 'session timeout',
    status: 'suspended',
    login_duration: 916,
    login_attempts: 5
  },
  {
    id: 'b76202cf-ead3-432f-9079-48c0a2e320e4',
    login_time: '4/2/2022',
    login_location: 'Dar es Salaam',
    device_type: 'mobile',
    browser: 'Edge',
    ip_address: '161.51.140.94',
    session_type: 'password reset',
    status: 'active',
    login_duration: 1405,
    login_attempts: 1
  },
  {
    id: '4682c7d2-be5f-4710-a68c-2da01356ba6b',
    login_time: '6/3/2022',
    login_location: 'Pokotylivka',
    device_type: 'mobile',
    browser: 'Mozilla',
    ip_address: '40.96.249.70',
    session_type: 'account creation',
    status: 'locked',
    login_duration: 911,
    login_attempts: 9
  },
  {
    id: '337a3c96-20d5-4815-9166-0b803e277b59',
    login_time: '6/3/2022',
    login_location: 'Qiancang',
    device_type: 'desktop',
    browser: 'Firefox',
    ip_address: '201.97.11.243',
    session_type: 'session timeout',
    status: 'locked',
    login_duration: 2880,
    login_attempts: 1
  },
  {
    id: 'ab941203-c533-4dae-823a-dd9872535201',
    login_time: '2/16/2022',
    login_location: 'Burgas',
    device_type: 'tablet',
    browser: 'Brave',
    ip_address: '124.52.225.74',
    session_type: 'session timeout',
    status: 'suspended',
    login_duration: 3194,
    login_attempts: 3
  },
  {
    id: '4c885adf-b27f-4606-8f9d-c2db22249aa4',
    login_time: '10/5/2022',
    login_location: 'Rýmařov',
    device_type: 'desktop',
    browser: 'Safari',
    ip_address: '217.42.88.160',
    session_type: 'account deletion',
    status: 'suspended',
    login_duration: 3381,
    login_attempts: 1
  },
  {
    id: '30bfee9e-f062-4995-8cdd-46f4e7a9d18e',
    login_time: '7/12/2022',
    login_location: 'Banjar Desa',
    device_type: 'tablet',
    browser: 'Brave',
    ip_address: '191.47.163.130',
    session_type: 'login',
    status: 'locked',
    login_duration: 2174,
    login_attempts: 7
  },
  {
    id: '8ba75854-1fd3-4f2e-83a1-188ef558a666',
    login_time: '10/14/2022',
    login_location: 'Rybnoye',
    device_type: 'mobile',
    browser: 'Safari',
    ip_address: '130.88.55.117',
    session_type: 'logout',
    status: 'active',
    login_duration: 2408,
    login_attempts: 0
  },
  {
    id: '656cce62-4a45-4313-9da2-b2014c45bfbe',
    login_time: '9/13/2022',
    login_location: 'Tianchang',
    device_type: 'desktop',
    browser: 'Safari',
    ip_address: '203.229.194.139',
    session_type: 'password change',
    status: 'locked',
    login_duration: 2976,
    login_attempts: 7
  },
  {
    id: 'ed527979-0e4d-47a5-989c-854b62da85c4',
    login_time: '4/19/2022',
    login_location: 'Jatisari',
    device_type: 'tablet',
    browser: 'Safari',
    ip_address: '242.140.201.54',
    session_type: 'device verification',
    status: 'locked',
    login_duration: 1098,
    login_attempts: 5
  },
  {
    id: 'da894358-d02c-4bc7-9e89-308aafe13b6e',
    login_time: '9/16/2022',
    login_location: 'Itacarambi',
    device_type: 'mobile',
    browser: 'Opera',
    ip_address: '104.8.97.184',
    session_type: 'device verification',
    status: 'suspended',
    login_duration: 2384,
    login_attempts: 9
  },
  {
    id: '5dd12420-9573-44fc-96e7-91d79e11d34a',
    login_time: '12/10/2022',
    login_location: 'San Diego',
    device_type: 'desktop',
    browser: 'Safari',
    ip_address: '49.28.192.39',
    session_type: 'password change',
    status: 'suspended',
    login_duration: 2921,
    login_attempts: 2
  },
  {
    id: '51ddf561-92fa-4e41-aa77-8bf8edc7e0b9',
    login_time: '8/3/2022',
    login_location: 'Sirnaresmi',
    device_type: 'desktop',
    browser: 'Safari',
    ip_address: '160.120.199.224',
    session_type: 'logout',
    status: 'active',
    login_duration: 3522,
    login_attempts: 4
  },
  {
    id: 'e46b16b2-f8f0-49c4-be86-6a5cd8970bc7',
    login_time: '1/20/2022',
    login_location: 'Siwalan',
    device_type: 'mobile',
    browser: 'Mozilla',
    ip_address: '158.31.87.75',
    session_type: 'account deletion',
    status: 'active',
    login_duration: 2193,
    login_attempts: 0
  },
  {
    id: '43f212c9-3215-4574-a0b4-10901044aaed',
    login_time: '11/4/2022',
    login_location: 'Pomabamba',
    device_type: 'mobile',
    browser: 'Safari',
    ip_address: '38.193.231.107',
    session_type: 'device verification',
    status: 'active',
    login_duration: 1742,
    login_attempts: 5
  },
  {
    id: '6b1d3b69-64c0-49fd-ba3d-923bdb25d351',
    login_time: '12/26/2022',
    login_location: 'Stutterheim',
    device_type: 'desktop',
    browser: 'Firefox',
    ip_address: '18.151.28.32',
    session_type: 'password change',
    status: 'active',
    login_duration: 1998,
    login_attempts: 10
  },
  {
    id: '8dd7b7c8-f26c-4a4a-8df3-679f6dffc274',
    login_time: '1/18/2022',
    login_location: 'Sucun',
    device_type: 'mobile',
    browser: 'Brave',
    ip_address: '72.225.10.101',
    session_type: 'account creation',
    status: 'active',
    login_duration: 2441,
    login_attempts: 1
  },
  {
    id: '96cf4cda-3198-460d-a62b-c7932e50e245',
    login_time: '3/19/2022',
    login_location: 'Sawara',
    device_type: 'desktop',
    browser: 'Edge',
    ip_address: '157.49.245.34',
    session_type: 'password reset',
    status: 'locked',
    login_duration: 1653,
    login_attempts: 0
  },
  {
    id: '20755756-5c7f-42ae-9042-dbd6945c625a',
    login_time: '5/19/2022',
    login_location: 'Bayasgalant',
    device_type: 'desktop',
    browser: 'Brave',
    ip_address: '141.228.177.38',
    session_type: 'account creation',
    status: 'suspended',
    login_duration: 3103,
    login_attempts: 1
  },
  {
    id: '756f2fad-2a65-4169-aa83-503eda2de3a7',
    login_time: '2/22/2022',
    login_location: 'Salento',
    device_type: 'desktop',
    browser: 'Mozilla',
    ip_address: '93.25.80.140',
    session_type: 'session timeout',
    status: 'suspended',
    login_duration: 2215,
    login_attempts: 10
  },
  {
    id: 'c4db2abc-b348-4294-9b90-0d07a5176c79',
    login_time: '3/4/2022',
    login_location: 'Eslāmābād',
    device_type: 'desktop',
    browser: 'Opera',
    ip_address: '49.222.62.132',
    session_type: 'logout',
    status: 'active',
    login_duration: 258,
    login_attempts: 3
  },
  {
    id: 'a9d0c29b-9b60-442b-8d08-baf9beac9070',
    login_time: '5/11/2022',
    login_location: 'Kertai',
    device_type: 'mobile',
    browser: 'Safari',
    ip_address: '194.144.126.151',
    session_type: 'account creation',
    status: 'active',
    login_duration: 467,
    login_attempts: 7
  },
  {
    id: '77e3d9b5-7172-44d3-95c2-9910b65911f1',
    login_time: '8/9/2022',
    login_location: 'New York City',
    device_type: 'tablet',
    browser: 'Opera',
    ip_address: '44.22.28.152',
    session_type: 'device verification',
    status: 'locked',
    login_duration: 928,
    login_attempts: 0
  },
  {
    id: 'a34207c8-490f-4212-a4b3-02d54dad9526',
    login_time: '10/28/2022',
    login_location: 'Franca',
    device_type: 'tablet',
    browser: 'Opera',
    ip_address: '123.64.239.186',
    session_type: 'account deletion',
    status: 'active',
    login_duration: 1924,
    login_attempts: 3
  },
  {
    id: 'd469c5c2-7453-4b15-bc2a-d7c8d81b5ffc',
    login_time: '9/26/2022',
    login_location: 'Yangirabot',
    device_type: 'mobile',
    browser: 'Safari',
    ip_address: '156.25.47.92',
    session_type: 'logout',
    status: 'active',
    login_duration: 2949,
    login_attempts: 9
  },
  {
    id: 'c0eb4677-0220-49ba-8b0d-eb800960cba0',
    login_time: '5/28/2022',
    login_location: 'Betim',
    device_type: 'mobile',
    browser: 'Edge',
    ip_address: '34.218.177.203',
    session_type: 'device verification',
    status: 'suspended',
    login_duration: 2236,
    login_attempts: 9
  },
  {
    id: '4f3ed452-5242-4f3c-8235-1e6544d5a8ca',
    login_time: '1/25/2022',
    login_location: 'Wangda',
    device_type: 'tablet',
    browser: 'Chrome',
    ip_address: '42.116.130.237',
    session_type: 'logout',
    status: 'suspended',
    login_duration: 3005,
    login_attempts: 9
  },
  {
    id: '1b15b6b4-99fa-49a1-a255-0b00ba62ac60',
    login_time: '3/30/2022',
    login_location: 'Lourido',
    device_type: 'mobile',
    browser: 'Safari',
    ip_address: '110.141.59.124',
    session_type: 'session expired',
    status: 'locked',
    login_duration: 2655,
    login_attempts: 5
  },
  {
    id: '4c8eec64-658e-4e28-b590-08d8bcd7751b',
    login_time: '11/21/2022',
    login_location: 'Dulangan',
    device_type: 'mobile',
    browser: 'Brave',
    ip_address: '198.247.13.51',
    session_type: 'authentication failed',
    status: 'suspended',
    login_duration: 1113,
    login_attempts: 2
  },
  {
    id: '49ef5b0f-77e5-4c96-bbf1-ec1a6400d55f',
    login_time: '2/6/2022',
    login_location: 'Palalang',
    device_type: 'mobile',
    browser: 'Firefox',
    ip_address: '90.161.36.156',
    session_type: 'device verification',
    status: 'suspended',
    login_duration: 3447,
    login_attempts: 2
  },
  {
    id: '30bd0ff9-d14f-499c-8e9d-91b39e4a2b38',
    login_time: '4/3/2022',
    login_location: 'Minneapolis',
    device_type: 'desktop',
    browser: 'Firefox',
    ip_address: '46.68.175.44',
    session_type: 'login',
    status: 'suspended',
    login_duration: 608,
    login_attempts: 7
  },
  {
    id: 'c32ffc87-89ff-4b65-ab01-f6c085051d54',
    login_time: '6/19/2022',
    login_location: 'Miyazu',
    device_type: 'mobile',
    browser: 'Firefox',
    ip_address: '39.187.63.137',
    session_type: 'authentication failed',
    status: 'suspended',
    login_duration: 2789,
    login_attempts: 9
  }
];

export const UserProfileSecurityContainer = () => {
  const stylesContext = useStylesContext();
  return (
    <UserProfileLayout>
      <Row {...stylesContext?.rowProps}>
        <Col span={24}>
          <Row {...stylesContext?.rowProps}>
            <Col xs={24} sm={12}>
              <Card
                title="Additional security"
                extra={<Button type="default">Learn more</Button>}
                actions={[<Button key="turn-on">Turn on</Button>]}
                style={{ height: '100%' }}
              >
                <Flex vertical>
                  <Text>Passwordless account</Text>
                  <Badge status="error" text="OFF" />
                </Flex>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                title="Additional security"
                extra={<Button type="default">Learn more</Button>}
                actions={[<Button key={'turn-off'}>Turn off</Button>]}
                style={{ height: '100%' }}
              >
                <Flex vertical>
                  <Text>Two-step verification</Text>
                  <Badge status="success" text="ON" />
                </Flex>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                title="Sign me out"
                actions={[<Button key={'sign-out'}>Sign me out</Button>]}
                style={{ height: '100%' }}
              >
                <Flex vertical>
                  <Text>
                    We can protect you by signing you out of browsers, apps and
                    anywhere else your account is used to sign in.
                  </Text>
                </Flex>
              </Card>
            </Col>
            <Col xs={24} sm={12}>
              <Card
                title="Recovery code"
                actions={[
                  <Button key={'generate-code'}>Generate a new code</Button>
                ]}
                style={{ height: '100%' }}
              >
                <Flex vertical>
                  <Text>
                    You can use this code to access your account if you lose
                    access to your sign-in info. Print this out and keep it in a
                    safe place or take a picture of it.
                  </Text>
                </Flex>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Card title="Change your password">
            <Form
              name="form-change-password"
              layout="vertical"
              labelCol={{ span: 8 }}
              initialValues={{ remember: true }}
              onFinish={() => null}
              onFinishFailed={() => null}
              autoComplete="off"
              requiredMark={false}
            >
              <Form.Item<any>
                label="Current password"
                name="currentPassword"
                rules={[
                  {
                    required: true,
                    message: 'Please input your current password!'
                  }
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item<FieldType>
                label="New password"
                name="newPassword"
                rules={[
                  { required: true, message: 'Please input your new password!' }
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item<FieldType>
                label="Reenter password"
                name="reEnterPassword"
                rules={[
                  {
                    required: true,
                    message: 'Please re-input your new password!!'
                  }
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<SaveOutlined />}
                >
                  Save changes
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={24}>
          <Card
            title="Recent activity"
            extra={<Button>View all activity</Button>}
          >
            <Collapse
              bordered
              expandIconPosition="start"
              items={sessionActivityData.slice(0, 5).map((s: any) => ({
                key: s.id,
                label: (
                  <Flex>
                    <span>{s.login_time}</span>
                  </Flex>
                ),
                children: (
                  <Descriptions
                    bordered
                    column={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 4 }}
                    items={[
                      {
                        key: 'session_device',
                        label: 'Device',
                        children: s.device_type
                      },
                      {
                        key: 'session_browser',
                        label: 'Browser',
                        children: s.browser
                      },
                      {
                        key: 'session_ip',
                        label: 'IP address',
                        children: s.ip_address
                      },
                      {
                        key: 'session_status',
                        label: 'Status',
                        children: <Badge status="processing" text={s.status} />
                      },
                      {
                        key: 'session_location',
                        label: 'Location',
                        children: s.login_location
                      },
                      {
                        key: 'session_duration',
                        label: 'Session duration (mins)',
                        children: s.login_duration
                      },
                      {
                        key: 'session_login_attempts',
                        label: 'Login attempts',
                        children: s.login_attempts
                      }
                    ]}
                  />
                ),
                extra:
                  s.device_type === 'desktop' ? (
                    <LaptopOutlined />
                  ) : s.device_type === 'tablet' ? (
                    <TabletOutlined />
                  ) : (
                    <MobileOutlined />
                  )
              }))}
            />
          </Card>
        </Col>
      </Row>
    </UserProfileLayout>
  );
};
