import {
  IconAdjustments,
  IconCash,
  IconList,
  IconLogout,
  IconPigMoney,
  IconReport,
  IconReportMoney,
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Quản lý',
  },
  {
    id: uniqueId(),
    title: 'Cấu hình',
    icon: IconAdjustments,
    href: '/configs',
  },
  {
    id: uniqueId(),
    title: 'Theo dõi danh sách',
    icon: IconList,
    href: '/lists',
  },
  {
    id: uniqueId(),
    title: 'Báo cáo',
    icon: IconReport,
    href: '/reports',
  },
  {
    navlabel: true,
    subheader: 'Xác thực',
  },
  {
    id: uniqueId(),
    title: 'Đăng xuất',
    icon: IconLogout,
    href: '/auth/logout',
  },
];

export default Menuitems;
