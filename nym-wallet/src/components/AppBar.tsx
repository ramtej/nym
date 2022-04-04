import React, { useContext } from 'react';
import { AppBar as MuiAppBar, Grid, IconButton, Toolbar } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { ClientContext } from '../context/main';
import { NetworkSelector } from './NetworkSelector';
import { Node as NodeIcon } from '../svg-icons/node';
import { Delegate as DelegateIcon } from '../svg-icons';


export const AppBar = () => {
  const { showSettings, showValidatorSettings, logOut, handleShowSettings, handleShowValidatorSettings } = useContext(ClientContext);

  return (
    <MuiAppBar position="sticky" sx={{ boxShadow: 'none', bgcolor: 'transparent' }}>
      <Toolbar disableGutters>
        <Grid container justifyContent="space-between" alignItems="center" flexWrap="nowrap">
          <Grid item>
            <NetworkSelector />
          </Grid>
          <Grid item container justifyContent="flex-end" md={12} lg={5} spacing={2}>
            <Grid item>
              <IconButton
                onClick={handleShowValidatorSettings}
                sx={{ color: showValidatorSettings ? 'primary.main' : 'nym.background.dark' }}
                size="small"
              >
                <DelegateIcon fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={handleShowSettings}
                sx={{ color: showSettings ? 'primary.main' : 'nym.background.dark' }}
                size="small"
              >
                <NodeIcon fontSize="small" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton size="small" onClick={logOut} sx={{ color: 'nym.background.dark' }}>
                <Logout fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
};
