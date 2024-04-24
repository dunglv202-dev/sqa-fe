import { Box, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

const LoanFilter = ({ onFilter, filtering }) => {
  const [idCardNo, setIdCardNo] = useState();
  const [secured, setSecured] = useState(true);
  const [unsecured, setUnsecured] = useState(true);

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    const types = [];
    if (secured) types.push('SECURED');
    if (unsecured) types.push('UNSECURED');

    onFilter({ idCardNo, types });
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
        <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
          <FormControlLabel
            control={<Checkbox checked={unsecured} />}
            label="Vay tín chấp"
            checked={unsecured}
            onChange={(e) => setUnsecured(e.target.checked)}
          />
          <FormControlLabel
            control={<Checkbox checked={secured} />}
            label="Vay thế chấp"
            checked={secured}
            onChange={(e) => setSecured(e.target.checked)}
          />
        </FormGroup>
        <Button
          type="submit"
          variant="contained"
          disabled={filtering}
          sx={{ paddingBlock: 1.5, paddingInline: 3, textTransform: 'uppercase' }}
        >
          Lọc
        </Button>
      </Box>
    </form>
  );
};

export default LoanFilter;
