import { useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import SavingFilter from './components/SavingFilter';
import SavingListing from './components/SavingListing';

const initialData = [
  {
    id: '1',
    name: 'Sunil Joshi',
    post: 'Web Designer',
    pname: 'Elite Admin',
    priority: 'Thế chấp',
    pbg: 'primary.main',
    budget: '3.9',
  },
  {
    id: '3',
    name: 'Christopher Jamil',
    post: 'Project Manager',
    pname: 'MedicalPro WP Theme',
    priority: 'Tín chấp',
    pbg: 'error.main',
    budget: '12.8',
  },
];

const ManageSavings = () => {
  const [savings, setSavings] = useState(initialData);

  const doFilter = ({ idCardNo }) => {
    console.log(idCardNo);
  };

  return (
    <PageContainer title="Theo dõi danh sách sổ tiết kiệm">
      <DashboardCard title="Danh sách các sổ tiết kiệm">
        <SavingFilter onFilter={doFilter} />
        <SavingListing savings={savings} />
      </DashboardCard>
    </PageContainer>
  );
};

export default ManageSavings;
