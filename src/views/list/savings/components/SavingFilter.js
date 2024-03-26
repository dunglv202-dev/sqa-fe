import { Box, Button } from '@mui/material';
import { useState } from 'react';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

const SavingFilter = ({ onFilter }) => {
  const [idCardNo, setIdCardNo] = useState('');

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    onFilter({ idCardNo });
  };

  return (
    <form onSubmit={handleFilterSubmit}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
          marginBlock: 2,
        }}
      >
        <CustomTextField
          placeholder="Căn cước công dân"
          value={idCardNo}
          onChange={(e) => setIdCardNo(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ paddingBlock: 1.5, paddingInline: 3, textTransform: 'uppercase' }}
        >
          Lọc
        </Button>
      </Box>
    </form>
  );
};

export default SavingFilter;
