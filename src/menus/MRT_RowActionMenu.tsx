import React, { FC } from 'react';
import { Menu, MenuItem as MuiMenuItem, styled } from '@mui/material';
import { useMaterialReactTable } from '../useMaterialReactTable';
import { Row } from 'react-table';
import EditIcon from '@mui/icons-material/Edit';

const MenuItem = styled(MuiMenuItem)({
  display: 'flex',
  gap: '0.75rem',
});

interface Props {
  anchorEl: HTMLElement | null;
  row: Row;
  setAnchorEl: (anchorEl: HTMLElement | null) => void;
  handleEdit: () => void;
}

export const MRT_RowActionMenu: FC<Props> = ({ anchorEl, row, handleEdit, setAnchorEl }) => {
  const { enableRowEditing, localization, renderRowActionMenuItems, tableInstance } =
    useMaterialReactTable();

  return (
    <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={() => setAnchorEl(null)}>
      {enableRowEditing && (
        <MenuItem onClick={handleEdit}>
          <EditIcon /> {localization?.rowActionMenuItemEdit}
        </MenuItem>
      )}
      {renderRowActionMenuItems?.(row, tableInstance, () => setAnchorEl(null)) ?? null}
    </Menu>
  );
};