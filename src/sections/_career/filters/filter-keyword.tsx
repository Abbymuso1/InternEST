import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import { _jobTitles } from 'src/_mock';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

interface FilterKeywordProps {
  filterKeyword: string;
  onChangeKeyword: (value: string | null) => void;
  sx?: object;
}


export default function FilterKeyword({ filterKeyword, onChangeKeyword, sx }: FilterKeywordProps) {
  return (
    <Autocomplete
      sx={{ width: 1 }}
      options={_jobTitles}
      getOptionLabel={(option) => option}
      value={filterKeyword}
      onChange={(event, value) => onChangeKeyword(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          hiddenLabel
          placeholder="Job title, keywords..."
          InputProps={{
            ...params.InputProps,
            autoComplete: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <Iconify width={24} icon="carbon:search" sx={{ color: 'text.disabled', mr: 1 }} />
              </InputAdornment>
            ),
            sx: { pb: 1, ...sx },
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option}>
          {option}
        </li>
      )}
    />
  );
}

