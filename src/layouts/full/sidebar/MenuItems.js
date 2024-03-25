import { IconCash, IconLogout, IconPigMoney, IconReportMoney } from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Quản lý',
  },
  {
    id: uniqueId(),
    title: 'Cấu hình',
    icon: IconCash,
    href: '/config',
  },
  {
    id: uniqueId(),
    title: 'Theo dõi danh sách',
    icon: IconCash,
    href: '/manage/loans',
  },
  {
    id: uniqueId(),
    title: 'Báo cáo',
    icon: IconCash,
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
