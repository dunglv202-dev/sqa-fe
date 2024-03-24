import { IconCash, IconLogout, IconPigMoney, IconReportMoney } from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Quản lý',
  },
  {
    id: uniqueId(),
    title: 'Vay lãi',
    icon: IconCash,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'Gửi tiết kiệm',
    icon: IconPigMoney,
    href: '/manage/savings',
  },
  {
    navlabel: true,
    subheader: 'Báo báo',
  },
  {
    id: uniqueId(),
    title: 'Tổng quan',
    icon: IconReportMoney,
    href: '/reports/general',
  },
  {
    id: uniqueId(),
    title: 'Cho vay',
    icon: IconCash,
    href: '/reports/loans',
  },
  {
    id: uniqueId(),
    title: 'Gửi tiết kiệm',
    icon: IconPigMoney,
    href: '/report/savings',
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
