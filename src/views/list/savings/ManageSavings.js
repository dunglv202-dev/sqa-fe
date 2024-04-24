import { useEffect, useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import SavingFilter from './components/SavingFilter';
import SavingListing from './components/SavingListing';
import { fetchAllSavings } from 'src/services/listing';
import Loader from 'src/components/animations/Loader';

const ManageSavings = () => {
  const [filtering, setFiltering] = useState(false);
  const [savings, setSavings] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSavings = async () => {
      const respData = await fetchAllSavings();
      setSavings(respData.items);
    };

    fetchSavings();
  }, []);

  const doFilter = async ({ idCardNo }) => {
    try {
      setFiltering(true);
      const respData = await fetchAllSavings(idCardNo ? { idCardNo } : null);
      setSavings(respData.items);
    } finally {
      setFiltering(false);
    }
  };

  return (
    <PageContainer title="Theo dõi danh sách sổ tiết kiệm">
      <DashboardCard title="Danh sách các sổ tiết kiệm">
        <SavingFilter onFilter={doFilter} filtering={filtering} />
        {loading || filtering ? <Loader /> : <SavingListing savings={savings} />}
      </DashboardCard>
    </PageContainer>
  );
};

export default ManageSavings;
