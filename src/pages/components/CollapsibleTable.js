import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { createTheme } from '@mui/material/styles';

export const themeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#353333',
      paper: '#383f4a',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(251,251,251,0.6)',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <a href={row.classLink}><code style={{backgroundColor: '#2d2e2d'}}>{row.class}</code></a>
        </TableCell>
        <TableCell>{row.description}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={3}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 0, padding: 0 }}>
              <Table size="small" aria-label="functions">
                <TableHead>
                  <TableRow>
                    <TableCell>Function</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.functions && row.functions.map((functionRow) => (
                    <TableRow key={functionRow.name}>
                      <TableCell component="th" scope="row">
                        <a href={functionRow.link}><code style={{backgroundColor: '#2d2e2d'}}>{functionRow.name}</code></a>
                      </TableCell>
                      <TableCell>{functionRow.description}</TableCell>
                    </TableRow>))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    description: PropTypes.string.isRequired,
    functions: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        parameters: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    classLink: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
  }).isRequired,
};

export default function CollapsibleTable(props) {
    return (
        <ThemeProvider theme={themeOptions}>
          <TableContainer>
            <Table sx={{backgroundColor: '#323232'}}>
                <TableHead style={{backgroundColor: '#232323'}}>
                <TableRow>
                    <TableCell />
                    <TableCell>Class</TableCell>
                    <TableCell>Description</TableCell>
                </TableRow>
                </TableHead>
                <TableBody style={{padding: 0}}>
                {props.rows && props.rows.map((row) => (
                    <Row key={row.class} row={row} />
                ))}
                </TableBody>
            </Table>
          </TableContainer>
        </ThemeProvider>
    );
}