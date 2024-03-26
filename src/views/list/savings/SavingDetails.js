import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PageContainer from 'src/components/container/PageContainer';
import { fetchSaving } from 'src/services/listing';
import DetailField from '../components/DetailField';
import DetailSection from '../components/DetailSection';

const SavingDetails = () => {
  const { savingId } = useParams();
  const [saving, setSaving] = useState();
  const theme = useTheme();

  useEffect(() => {
    const fetchDetails = async () => {
      setSaving(await fetchSaving(savingId));
    };

    fetchDetails();
  }, []);

  return (
    <PageContainer title="Chi tiết số tiết kiệm">
      <Box sx={{ paddingInline: 10 }}>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ marginBottom: 5, color: theme.palette.primary.main }}
        >
          Chi tiết sổ tiết kiệm
        </Typography>
        <DetailSection title="Thông tin khách hàng">
          <DetailField label="Họ đệm" value={saving?.customer.firstname} />
          <DetailField label="Tên" value={saving?.customer.lastname} />
          <DetailField label="CCCD" value={saving?.customer.idCardNo} />
          <DetailField label="Ngày cấp" value={saving?.customer.idCardIssueDate} />
          <DetailField label="Nơi cấp" value={saving?.customer.idCardIssueBy} />
        </DetailSection>
        <DetailSection title="Thông tin sổ tiết kiệm">
          <DetailField label="Ngày tạo" value={saving?.depositDate} />
          <DetailField label="Số tiền gửi" value={saving?.amount} />
          <DetailField
            label="Kỳ gửi"
            value={saving?.termInMonth && `${saving?.termInMonth} tháng`}
          />
          <DetailField label="Lãi suất (%/năm)" value={saving?.yearlyInterestRate * 100} />
          <DetailField label="Ngày đáo hạn" value={saving?.dueDate} />
          <DetailField label="Tổng tiền được nhận" value={saving?.totalEarned} />
        </DetailSection>
      </Box>
    </PageContainer>
  );
};

export default SavingDetails;
