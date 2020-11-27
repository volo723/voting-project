import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import { getMoneyString } from 'utils/helper';
import { RootState } from 'store/reducers';
import { selectProtocol } from 'store/protocol/actions';

const mapState = (state: RootState) => ({
    currentProtocol: state.protocol.currentProtocol
})

const mapDispatch = {
    selectProtocol: (payload: string) => selectProtocol(payload)
}

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

interface Data {
    name: string;
    locked: number;
    yd: string;
    power: string;
}

function createData(
    name: string,
    locked: number,
    yd: string,
    power: string
): Data {
    return { name, locked, yd, power };
}

const rows = [
    createData('Compound', 799600000, '2.46%', '$234'),
    createData('Nexus Mutual', 2730000000, '19.74%', '$234'),
    createData('Maker', 1330000000, '2.46%', '$234'),
    createData('Synthetix', 636200000, '2.46%', '$234'),
    createData('Aave', 552300000, '2.46%', '$234'),
    createData('Compound1', 799600000, '2.46%', '$234'),
    createData('Nexus Mutual1', 2730000000, '19.74%', '$234'),
    createData('Maker1', 1330000000, '2.46%', '$234'),
    createData('Synthetix1', 636200000, '2.46%', '$234'),
    createData('Aave1', 552300000, '2.46%', '$234'),
    createData('Compound2', 799600000, '2.46%', '$234'),
    createData('Nexus Mutual2', 2730000000, '19.74%', '$234'),
    createData('Maker2', 1330000000, '2.46%', '$234'),
    createData('Synthetix2', 636200000, '2.46%', '$234'),
    createData('Aave2', 552300000, '2.46%', '$234'),
    createData('Compound3', 799600000, '2.46%', '$234'),
    createData('Nexus Mutual3', 2730000000, '19.74%', '$234'),
    createData('Maker3', 1330000000, '2.46%', '$234'),
    createData('Synthetix3', 636200000, '2.46%', '$234'),
    createData('Aave3', 552300000, '2.46%', '$234'),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: HeadCell[] = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'locked', numeric: true, disablePadding: false, label: 'Locked ($)' },
    { id: 'yd', numeric: true, disablePadding: false, label: 'Yield' },
    { id: 'power', numeric: true, disablePadding: false, label: 'V. Power ($)' },
];

interface ProtocolTableProps {
    classes: ReturnType<typeof useStyles>;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    order: Order;
    orderBy: string;
}

function ProtocolTableHead(props: ProtocolTableProps) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        className={classes.tableCell}
                        key={headCell.id}
                        align={'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            style={{ color: 'white' }}
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        paper: {
            width: '100%',
            marginBottom: theme.spacing(2),
            background: 'rgba(0, 0, 0, 0)',
        },
        container: {
            maxHeight: 'calc(100vh - 300px)',
            minHeight: 'calc(100vh - 300px)',
        },
        table: {
            width: '100%',
        },
        tableCell: {
            color: 'white',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        },
        visuallyHidden: {
            border: 0,
            color: 'white',
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1,
        },
    }),
);

const ProtocolTable = (props: PropsFromRedux) => {
    const classes = useStyles();
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('name');
    const [selected, setSelected] = React.useState<string[]>([]);
    const page = 0;
    const rowsPerPage = 20;

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(name);
        } else if (selectedIndex >= 0) {
            newSelected = [];
        }

        props.selectProtocol(name);
        setSelected(newSelected);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer className={classes.container}>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                        aria-label="enhanced table"
                    >
                        <ProtocolTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                        >
                                            <TableCell id={labelId} scope="row" padding="none" className={classes.tableCell} style={{ borderTopLeftRadius: '6px', borderBottomLeftRadius: '6px' }}>
                                                &nbsp;&nbsp;&nbsp;{row.name}
                                            </TableCell>
                                            <TableCell className={classes.tableCell}>{getMoneyString(row.locked, '$')}</TableCell>
                                            <TableCell className={classes.tableCell}>{row.yd}</TableCell>
                                            <TableCell className={classes.tableCell} style={{ borderTopRightRadius: '6px', borderBottomRightRadius: '6px' }}>{row.power}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 33 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
        </div>
    );
}

export default connector(ProtocolTable)