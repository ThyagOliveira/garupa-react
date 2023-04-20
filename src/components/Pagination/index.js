import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react';
import './styles.css';

export default function PaginationComponent({
  spacing,
  color,
  shape,
  variant,
  count,
  onChange,
}) {
  return (
    <div className="paginationContainer">
      <Stack spacing={spacing}>
        <Pagination
          count={count}
          color={color}
          shape={shape}
          variant={variant}
          onChange={onChange}
        />
      </Stack>
    </div>
  );
}
