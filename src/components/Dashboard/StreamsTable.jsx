import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  TextField,
  Box,
  InputAdornment,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { useDashboard } from '../../context/DashboardContext';
import { format } from 'date-fns';

const StreamsTable = () => {
  const { dashboardData, loading } = useDashboard();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState('dateStreamed');
  const [order, setOrder] = useState('desc');
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const filteredData = dashboardData.recentStreams.filter(
    (row) =>
      row.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.userId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (order === 'asc') {
      return a[orderBy] < b[orderBy] ? -1 : 1;
    } else {
      return a[orderBy] > b[orderBy] ? -1 : 1;
    }
  });

  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Recent Streams</Typography>
        <TextField
          size="small"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'songName'}
                  direction={orderBy === 'songName' ? order : 'asc'}
                  onClick={() => handleRequestSort('songName')}
                >
                  Song Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'artist'}
                  direction={orderBy === 'artist' ? order : 'asc'}
                  onClick={() => handleRequestSort('artist')}
                >
                  Artist
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'dateStreamed'}
                  direction={orderBy === 'dateStreamed' ? order : 'asc'}
                  onClick={() => handleRequestSort('dateStreamed')}
                >
                  Date Streamed
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'streamCount'}
                  direction={orderBy === 'streamCount' ? order : 'asc'}
                  onClick={() => handleRequestSort('streamCount')}
                >
                  Stream Count
                </TableSortLabel>
              </TableCell>
              <TableCell>User ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.songName}</TableCell>
                <TableCell>{row.artist}</TableCell>
                <TableCell>
                  {format(new Date(row.dateStreamed), 'MMM dd, yyyy HH:mm')}
                </TableCell>
                <TableCell>{row.streamCount.toLocaleString()}</TableCell>
                <TableCell>{row.userId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StreamsTable;