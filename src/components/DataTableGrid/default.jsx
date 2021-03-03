import React, { memo } from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const MaterialTable = memo(() => {
    const headCells = [
        {
            "id": "stock",
            "column": "stock",
            "order": 0,
            "style": {},
            "label": "Stok Kodu",
            "numeric": false,
            "disablePadding": true,
        },
        {
            "id": "ref",
            "column": "ref",
            "order": 1,
            "style": {},
            "label": "Ref No",
            "numeric": true,
            "disablePadding": true,
        },
        {
            "id": "product",
            "column": "product",
            "order": 2,
            "style": {
                "width": "100%"
            },
            "label": "Ürün Adı",
            "numeric": false,
            "disablePadding": true,
        },
        {
            "id": "img",
            "column": "img",
            "order": 3,
            "style": {},
            "label": "◱",
            "numeric": false,
            "disablePadding": true,
        },
        {
            "id": "str212",
            "column": "str212",
            "order": 4,
            "style": {},
            "label": "212",
            "numeric": false,
            "disablePadding": true,
        },
        {
            "id": "str216",
            "column": "str216",
            "order": 5,
            "style": {},
            "label": "216",
            "numeric": true,
            "disablePadding": true,
        },
        {
            "id": "str54",
            "column": "str54",
            "order": 6,
            "style": {},
            "label": "54",
            "numeric": true,
            "disablePadding": true,
        },
        {
            "id": "spot",
            "column": "spot",
            "order": 7,
            "style": {},
            "label": "Spot",
            "numeric": true,
            "disablePadding": true,
        },
        {
            "id": "total",
            "column": "total",
            "order": 8,
            "style": {},
            "label": "Toplam",
            "numeric": true,
            "disablePadding": true,
        },
        {
            "id": "br",
            "column": "br",
            "order": 9,
            "style": {},
            "label": "Br.",
            "numeric": true,
            "disablePadding": true,
        },
        {
            "id": "price",
            "column": "price",
            "order": 10,
            "style": {},
            "label": "Liste Fiyatı",
            "numeric": true,
            "disablePadding": true,
        },
        {
            "id": "dontKdv",
            "column": "dontKdv",
            "order": 11,
            "style": {},
            "label": "KDV' siz",
            "numeric": true,
            "disablePadding": true,
        },
        {
            "id": "kdv",
            "column": "kdv",
            "order": 12,
            "style": {},
            "label": "KDV' li",
            "numeric": true,
            "disablePadding": true,
        },
        {
            "id": "iskonto",
            "column": "iskonto",
            "order": 13,
            "style": {},
            "label": "İskonto",
            "numeric": true,
            "disablePadding": true,
        }
    ];

    const createData = (stock, ref, product, img, str212, str216, str54, spot, total, br, price, dontKdv, kdv, iskonto, history) => {
        return {
            stock, ref, product, img, str212, str216, str54, spot, total, br, price, dontKdv, kdv, iskonto,
            history: [
                { date: '2020-01-05', customerId: '11091700', amount: 3 },
                { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
            ],
        };
    }

    const rows = [
        createData(
            "KRAFTVOL KV5064 1",
            "",
            "Fren Balata Temizleyici Sistem",
            "◱",
            "x",
            "456",
            "2760",
            "x",
            "10000",
            "10000 Ad.",
            "100.00 TL",
            "100.00 TL",
            "100.00 TL",
            "%28+20+10+60",
            ""),
        createData(
            "KRAFTVOL KV5064 2",
            "",
            "Fren Balata Temizleyici Sistem",
            "◱",
            "x",
            "456",
            "2760",
            "x",
            "10000",
            "10000 Ad.",
            "100.00 TL",
            "100.00 TL",
            "100.00 TL",
            "%28+20+10+60",
            ""),
        createData(
            "KRAFTVOL KV5064 3",
            "",
            "Fren Balata Temizleyici Sistem",
            "◱",
            "x",
            "456",
            "2760",
            "x",
            "10000",
            "10000 Ad.",
            "100.00 TL",
            "100.00 TL",
            "100.00 TL",
            "%28+20+10+60",
            ""),
        createData(
            "KRAFTVOL KV5064 3",
            "",
            "Fren Balata Temizleyici Sistem",
            "◱",
            "x",
            "456",
            "2760",
            "x",
            "10000",
            "10000 Ad.",
            "100.00 TL",
            "100.00 TL",
            "100.00 TL",
            "%28+20+10+60",
            ""),
        createData(
            "KRAFTVOL KV5064 3",
            "",
            "Fren Balata Temizleyici Sistem",
            "◱",
            "x",
            "456",
            "2760",
            "x",
            "10000",
            "10000 Ad.",
            "100.00 TL",
            "100.00 TL",
            "100.00 TL",
            "%28+20+10+60",
            ""),
        createData(
            "KRAFTVOL KV5064 3",
            "",
            "Fren Balata Temizleyici Sistem",
            "◱",
            "x",
            "456",
            "2760",
            "x",
            "10000",
            "10000 Ad.",
            "100.00 TL",
            "100.00 TL",
            "100.00 TL",
            "%28+20+10+60",
            ""),
        createData(
            "KRAFTVOL KV5064 3",
            "",
            "Fren Balata Temizleyici Sistem",
            "◱",
            "x",
            "456",
            "2760",
            "x",
            "10000",
            "10000 Ad.",
            "100.00 TL",
            "100.00 TL",
            "100.00 TL",
            "%28+20+10+60",
            ""),

        createData(
            "KRAFTVOL KV5064 3",
            "",
            "Fren Balata Temizleyici Sistem",
            "◱",
            "x",
            "456",
            "2760",
            "x",
            "10000",
            "10000 Ad.",
            "100.00 TL",
            "100.00 TL",
            "100.00 TL",
            "%28+20+10+60",
            ""),
        createData(
            "KRAFTVOL KV5064 3",
            "",
            "Fren Balata Temizleyici Sistem",
            "◱",
            "x",
            "456",
            "2760",
            "x",
            "10000",
            "10000 Ad.",
            "100.00 TL",
            "100.00 TL",
            "100.00 TL",
            "%28+20+10+60",
            ""),

        createData(
            "KRAFTVOL KV5064 3",
            "",
            "Fren Balata Temizleyici Sistem",
            "◱",
            "x",
            "456",
            "2760",
            "x",
            "10000",
            "10000 Ad.",
            "100.00 TL",
            "100.00 TL",
            "100.00 TL",
            "%28+20+10+60",
            ""),

        createData(
            "KRAFTVOL KV5064 3",
            "",
            "Fren Balata Temizleyici Sistem",
            "◱",
            "x",
            "456",
            "2760",
            "x",
            "10000",
            "10000 Ad.",
            "100.00 TL",
            "100.00 TL",
            "100.00 TL",
            "%28+20+10+60",
            ""),
    ];

    const useRowStyles = makeStyles({
        root: {
            '& > *': {
                /*styles*/
            },
        },
    });

    const Row = props => {
        const { row } = props;
        const [open, setOpen] = React.useState(false);
        const classes = useRowStyles();

        return (
            <React.Fragment>
                <TableRow className={`${classes.root}`}>
                    <TableCell className="mobile-contex-menu">
                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    {
                        headCells.map(
                            (columnVal, columnKey) =>
                                <TableCell key={columnKey} component="th" scope="row">{row[columnVal.column]}</TableCell>
                        )
                    }
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box margin={1}>
                                <Typography variant="h6" gutterBottom component="div">
                                    History
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Customer</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                            <TableCell align="right">Total price ($)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.history.map((historyRow) => (
                                            <TableRow key={historyRow.date}>
                                                <TableCell component="th" scope="row">
                                                    {historyRow.date}
                                                </TableCell>
                                                <TableCell>{historyRow.customerId}</TableCell>
                                                <TableCell align="right">{historyRow.amount}</TableCell>
                                                <TableCell align="right">
                                                    {Math.round(historyRow.amount * row.price * 100) / 100}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }

    return (
        <section className="data-grid">
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="mobile-contex-menu">#</TableCell>
                            {
                                headCells.map((val, key) => {
                                    return (
                                        <TableCell
                                            key={key}
                                            id={`search-table-${val.id}`}
                                            className={`search-table ${val.column}`}
                                            style={val.style}>
                                            {val.label}
                                            {/*
                                                table sorttable
                                                <TableSortLabel>
                                                </TableSortLabel>
                                            */}
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((val, key) => (
                            <Row key={key} row={val} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    );
});

export default MaterialTable;