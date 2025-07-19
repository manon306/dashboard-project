import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';

// تنسيق الخلايا
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#8884d8',
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// تنسيق الصفوف
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// الداتا
function createData(assignee, subject, status, lastUpdate, trackingId) {
  return { assignee, subject, status, lastUpdate, trackingId };
}

const rows = [
  createData('Ahmed Tarek', 'Login not working', 'Open', '2025-07-15', 'TRK001'),
  createData('Nour Youssef', 'Payment issue', 'Pending', '2025-07-14', 'TRK002'),
  createData('Hossam Adel', 'UI bug in dashboard', 'Resolved', '2025-07-13', 'TRK003'),
  createData('Laila Samir', 'Reset password', 'Open', '2025-07-12', 'TRK004'),
  createData('Yara Mahmoud', 'Feature request', 'Closed', '2025-07-10', 'TRK005'),
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Open':
      return 'warning';
    case 'Pending':
      return 'info';
    case 'Resolved':
      return 'success';
    case 'Closed':
      return 'default';
    default:
      return 'error';
  }
};

export default function CustomizedTables() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Recent Tickets</h2>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow >
              <StyledTableCell>Assignee</StyledTableCell>
              <StyledTableCell align="right">Subject</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Last Update</StyledTableCell>
              <StyledTableCell align="right">Tracking ID</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">{row.assignee}</StyledTableCell>
                <StyledTableCell align="right">{row.subject}</StyledTableCell>
                <StyledTableCell align="right">
                  <Chip
                    label={row.status}
                    color={getStatusColor(row.status)}
                    variant="outlined"
                    size="small"
                  />
                </StyledTableCell>
                <StyledTableCell align="right">{row.lastUpdate}</StyledTableCell>
                <StyledTableCell align="right">{row.trackingId}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
