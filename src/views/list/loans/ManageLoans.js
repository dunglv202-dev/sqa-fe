import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import LoanFilter from './components/LoanFilter';
import LoanListing from './components/LoanListing';
import { useEffect, useState } from 'react';
import { fetchAllLoans } from 'src/services/listing';
import { Box, CircularProgress } from '@mui/material';
import Loader from 'src/components/animations/Loader';

const ManageLoans = () => {
  const [filtering, setFiltering] = useState(false);
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLoans = async () => {
      const respData = await fetchAllLoans();
      setLoans(respData.items);
      setLoading(false);
    };

    setLoading(true);
    fetchLoans();
  }, []);

  const doFilter = async ({ idCardNo, types }) => {
    const filterParams = { types };

    if (idCardNo) {
      filterParams.idCardNo = idCardNo;
    }

    try {
      setFiltering(true);
      setLoans((await fetchAllLoans(filterParams)).items);
    } finally {
      setFiltering(false);
    }
  };

  return (
    <PageContainer title="Theo dõi danh sách khoản vay">
      <DashboardCard title="Danh sách các khoản vay">
        <LoanFilter onFilter={doFilter} filtering={filtering} />
        {loading || filtering ? <Loader /> : <LoanListing loans={loans} />}
      </DashboardCard>
    </PageContainer>
  );
};

export default ManageLoans;
