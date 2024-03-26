import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PageContainer from 'src/components/container/PageContainer';
import { fetchLoan } from 'src/services/listing';
import DetailField from '../components/DetailField';
import DetailSection from '../components/DetailSection';
import { Chip, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

const LoanType = ({ type }) => {
  if (!type) return;

  return (
    <Chip
      sx={{
        px: '4px',
        backgroundColor: type === 'SECURED' ? 'primary.main' : 'error.main',
        color: '#fff',
      }}
      size="small"
      label={type === 'SECURED' ? 'Thế chấp' : 'Tín chấp'}
    ></Chip>
  );
};

const LoanDetails = () => {
  const { loanId } = useParams();
  const [loan, setLoan] = useState();
  const theme = useTheme();

  useEffect(() => {
    const fetchDetails = async () => {
      setLoan(await fetchLoan(loanId));
    };

    fetchDetails();
  }, []);

  return (
    <PageContainer title="Chi tiết khoản vay">
      <Typography
        variant="h2"
        textAlign="center"
        sx={{ marginBottom: 5, color: theme.palette.primary.main }}
      >
        Chi tiết khoản vay
      </Typography>
      <DetailSection title="Thông tin khách hàng">
        <DetailField label="Họ đệm" value={loan?.customer.firstname} />
        <DetailField label="Tên" value={loan?.customer.lastname} />
        <DetailField label="CCCD" value={loan?.customer.idCardNo} />
        <DetailField label="Ngày cấp" value={loan?.customer.idCardIssueDate} />
        <DetailField label="Nơi cấp" value={loan?.customer.idCardIssueBy} />
      </DetailSection>
      <DetailSection title="Thông tin khoản vay">
        <DetailField label="Số tiền vay" value={loan?.amount} />
        <DetailField label="Số tiền còn phải trả" value={loan?.remaining} />
        <DetailField label="Lãi suất (%/năm)" value={loan?.yearlyInterestRate} />
        <DetailField label="Ngày cho vay" value={loan?.createdAt} />
        <DetailField label="Ngày đáo hạn" value={loan?.dueDate} />
        <DetailField label="Mục đích vay" value={loan?.purpose} />
        <DetailField label="Loại hình vay" value={<LoanType type={loan?.purpose} />} />
      </DetailSection>
    </PageContainer>
  );
};

export default LoanDetails;
