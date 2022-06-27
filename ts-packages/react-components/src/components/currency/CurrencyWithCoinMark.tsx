import * as React from 'react';
import { DecCoin } from '@nymproject/types';
import { Stack, SxProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CoinMark } from '../coins/CoinMark';
import { CoinMarkTestnet } from '../coins/CoinMarkTestnet';
import { CurrencyAmount } from './CurrencyAmount';

export const CurrencyWithCoinMark: React.FC<{
  majorAmount?: DecCoin;
  fontSize?: number;
  prefix?: boolean;
  showSeparators?: boolean;
  hideFractions?: boolean;
  sx?: SxProps;
}> = ({ majorAmount, fontSize, prefix, showSeparators, hideFractions, sx }) => {
  const theme = useTheme();
  const size = fontSize || theme.typography.htmlFontSize;
  if (!majorAmount) {
    return <span>-</span>;
  }
  const DenomMark = majorAmount.denom === 'nymt' ? CoinMarkTestnet : CoinMark;
  return (
    <Stack direction="row" fontSize={size || 'inherit'} spacing={1} alignItems="center" sx={sx}>
      {prefix ? (
        <>
          <DenomMark height={size} />
          <CurrencyAmount majorAmount={majorAmount} showSeparators={showSeparators} hideFractions={hideFractions} />
        </>
      ) : (
        <>
          <CurrencyAmount majorAmount={majorAmount} showSeparators={showSeparators} hideFractions={hideFractions} />
          <DenomMark height={size} />
        </>
      )}
    </Stack>
  );
};
