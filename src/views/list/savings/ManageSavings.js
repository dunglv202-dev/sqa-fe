import { useEffect, useState } from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../../components/shared/DashboardCard';
import SavingFilter from './components/SavingFilter';
import SavingListing from './components/SavingListing';
import { fetchAllSavings } from 'src/services/listing';

const ManageSavings = () => {
  const [filtering, setFiltering] = useState(false);
  const [savings, setSavings] = useState();

  useEffect(() => {
    const fetchSavings = async () => {
      const respData = await fetchAllSavings();
      setSavings(respData.items);
    };

    fetchSavings();
  }, []);

  const doFilter = async ({ idCardNo }) => {
    const respData = await fetchAllSavings(idCardNo ? { idCardNo } : null);
    try {
      setFiltering(true);
      setSavings(respData.items);
    } finally {
      setFiltering(false);
    }
  };

  return (
    <PageContainer title="Theo dõi danh sách sổ tiết kiệm">
      <DashboardCard title="Danh sách các sổ tiết kiệm">
        <SavingFilter onFilter={doFilter} filtering={filtering} />
        <SavingListing savings={savings} />
      </DashboardCard>
    </PageContainer>
  );
};

export default ManageSavings;
