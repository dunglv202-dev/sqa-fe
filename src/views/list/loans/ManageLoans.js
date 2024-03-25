import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import LoanFilter from './components/LoanFilter';
import LoanListing from './components/LoanListing';
import { useEffect, useState } from 'react';
import { fetchAllLoans } from 'src/services/listing';

const ManageLoans = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      const respData = await fetchAllLoans();
      setLoans(respData.items);
    };

    fetchLoans();
  });

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
