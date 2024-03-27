import { IconAdjustments, IconList, IconLogout, IconReport } from '@tabler/icons';

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
    auth: ['ROLE_DIRECTOR', 'ROLE_MANAGER'],
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
    auth: ['ROLE_DIRECTOR', 'ROLE_MANAGER'],
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
