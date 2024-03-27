import React, { useContext } from 'react';
import Menuitems from './MenuItems';
import { useLocation } from 'react-router';
import { Box, List } from '@mui/material';
import NavItem from './NavItem';
import NavGroup from './NavGroup/NavGroup';
import { AuthContext } from 'src/contexts/auth-context';

const SidebarItems = () => {
  const { pathname } = useLocation();
  const authContext = useContext(AuthContext);
  const pathDirect = pathname;

  const isAuthorized = (requiredAuthorities) => {
    if (!requiredAuthorities) return true;

    return requiredAuthorities.find((authority) =>
      authContext?.user.authorities.includes(authority),
    );
  };

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {Menuitems.map((item) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else {
            return (
              isAuthorized(item.auth) && (
                <NavItem item={item} key={item.id} pathDirect={pathDirect} />
              )
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
