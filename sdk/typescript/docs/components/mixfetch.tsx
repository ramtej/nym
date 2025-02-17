import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { mixFetch } from '@nymproject/mix-fetch-full-fat';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import type { SetupMixFetchOps } from '@nymproject/mix-fetch';

const defaultUrl = 'https://nymtech.net/favicon.svg';
const args = { mode: 'unsafe-ignore-cors' };

const extra = {
  hiddenGateways: [
    {
      owner: 'n1kymvkx6vsq7pvn6hfurkpg06h3j4gxj4em7tlg',
      host: 'gateway1.nymtech.net',
      explicitIp: '213.219.38.119',
      identityKey: 'E3mvZTHQCdBvhfr178Swx9g4QG3kkRUun7YnToLMcMbM',
      sphinxKey: 'CYcrjoJ8GT7Dp54zViUyyRUfegeRCyPifWQZHRgMZrfX',
    },
  ],
};

const mixFetchOptions: SetupMixFetchOps = {
  preferredGateway: 'E3mvZTHQCdBvhfr178Swx9g4QG3kkRUun7YnToLMcMbM', // with WSS
  preferredNetworkRequester:
    'GiRjFWrMxt58pEMuusm4yT3RxoMD1MMPrR9M2N4VWRJP.3CNZBPq4vg7v7qozjGjdPMXcvDmkbWPCgbGCjQVw9n6Z@2xU4CBE6QiiYt6EyBXSALwxkNvM7gqJfjHXaMkjiFmYW',
  mixFetchOverride: {
    requestTimeoutMs: 60_000,
  },
  forceTls: true, // force WSS
  extra, // manually set the gateway details for WSS so certificates will work for hostname
};

export const MixFetch = () => {
  const [url, setUrl] = useState<string>(defaultUrl);
  const [html, setHtml] = useState<string>();
  const [busy, setBusy] = useState<boolean>(false);

  const handleFetch = async () => {
    try {
      setBusy(true);
      setHtml(undefined);
      const response = await mixFetch(url, args, mixFetchOptions);
      console.log(response);
      const resHtml = await response.text();
      setHtml(resHtml);
    } catch (err) {
      console.log(err);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <Stack direction="row">
        <TextField
          disabled={busy}
          fullWidth
          label="URL"
          type="text"
          variant="outlined"
          defaultValue={defaultUrl}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button variant="outlined" disabled={busy} sx={{ marginLeft: '1rem' }} onClick={handleFetch}>
          Fetch
        </Button>
      </Stack>

      {busy && (
        <Box mt={4}>
          <CircularProgress />
        </Box>
      )}
      {html && (
        <>
          <Box mt={4}>
            <strong>Response</strong>
          </Box>
          <Paper sx={{ p: 2, mt: 1 }} elevation={4}>
            <Typography fontFamily="monospace" fontSize="small">
              {html}
            </Typography>
          </Paper>
        </>
      )}
    </div>
  );
};
