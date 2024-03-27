import styled from '@emotion/styled';
import { Box, MenuItem, Select, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const Label = styled(Typography)({
  marginBottom: 4,
});

const PeriodSelect = ({ periodType, onChange }) => {
  const currentYear = new Date().getFullYear();
  const quarters = Array.from({ length: 4 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);
  const showQuarter = periodType === 'quarter';
  const showMonth = periodType === 'month';

  const [period, setPeriod] = useState({
    year: currentYear,
    quarter: showQuarter ? Math.floor(new Date().getMonth() / 3) + 1 : null,
    month: showMonth ? new Date().getMonth() + 1 : null,
  });

  const handleChangeYear = (e) => setPeriod((prev) => ({ ...prev, year: e.target.value }));
  const handleChangeQuarter = (e) => setPeriod((prev) => ({ ...prev, quarter: e.target.value }));
  const handleChangeMonth = (e) => setPeriod((prev) => ({ ...prev, month: e.target.value }));

  useEffect(() => {
    onChange(period);
  }, [period]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
      <Box>
        <Label>Năm</Label>
        <Select size="small" value={period.year} onChange={handleChangeYear}>
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </Box>
      {showQuarter && (
        <Box>
          <Label>Quý</Label>
          <Select
            size="small"
            sx={{ minWidth: '70px' }}
            value={period.quarter}
            onChange={handleChangeQuarter}
          >
            {quarters.map((quarter) => (
              <MenuItem key={quarter} value={quarter}>
                {quarter}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}
      {showMonth && (
        <Box>
          <Label>Tháng</Label>
          <Select
            size="small"
            sx={{ minWidth: '70px' }}
            value={period.month}
            onChange={handleChangeMonth}
          >
            {months.map((month) => (
              <MenuItem key={month} value={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}
    </Box>
  );
};

export default PeriodSelect;
