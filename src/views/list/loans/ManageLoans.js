import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import LoanFilter from './components/LoanFilter';
import LoanListing from './components/LoanListing';
import { useState } from 'react';

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

const ManageLoans = () => {
  const [loans, setLoans] = useState(initialData);

  const doFilter = ({ idCardNo, types }) => {
    console.log(idCardNo, types);
  };

  return (
    <PageContainer title="Theo dõi danh sách khoản vay">
      <DashboardCard title="Danh sách các khoản vay">
        <LoanFilter onFilter={doFilter} />
        <LoanListing loans={loans} />
      </DashboardCard>
    </PageContainer>
  );
};

export default ManageLoans;
