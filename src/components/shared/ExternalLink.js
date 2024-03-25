import { Box, Link } from '@mui/material';
import { IconExternalLink } from '@tabler/icons';

const ExternalLink = ({ href, target, typography = 'subtitle2', children }) => {
  return (
    <Box>
      <Link
        href={href}
        target={target}
        typography={typography}
        sx={{ textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}
      >
        {children}
        <IconExternalLink
          size="1rem"
          style={{ marginLeft: '3px', position: 'relative', top: '2px' }}
        />
      </Link>
    </Box>
  );
};

export default ExternalLink;
