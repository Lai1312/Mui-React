import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material'

export const MuiTable = () => {
   return (
    <TableContainer component = {Paper} sx={{maxHeight:'320px'}}>
        <Table  aria-label='simple table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First name</TableCell>
                    <TableCell>Last name</TableCell>
                    <TableCell>Middle name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { tableData.map((row) =>(
                    <TableRow
                    key={row.id}
                    sx={{'&:last-child ts, &:last-child th': {border: 0}}}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell>{row.middle_name}</TableCell>
                        <TableCell align='center'>{row.email}</TableCell>

                    </TableRow>
                ))
}
            </TableBody>
        </Table>
    </TableContainer>
   )
}

const tableData = [
    {
    id: 1,
    first_name: 'Nevile',
    middle_name: 'Morgans',
    last_name: 'nmorgans',
    email: 'nmmorganns@gmail.com',
    gender: 'male',
    ip_address: '155.4.107.25',

},
{
    id: 1,
    first_name: 'Nevile',
    middle_name: 'Morgans',
    last_name: 'nmorgans',
    email: 'nmmorganns@gmail.com',
    gender: 'male',
    ip_address: '155.4.107.25',

},
{
    id: 1,
    first_name: 'Nevile',
    middle_name: 'Morgans',
    last_name: 'nmorgans',
    email: 'nmmorganns@gmail.com',
    gender: 'male',
    ip_address: '155.4.107.25',

},
{
    id: 1,
    first_name: 'Nevile',
    middle_name: 'Morgans',
    last_name: 'nmorgans',
    email: 'nmmorganns@gmail.com',
    gender: 'male',
    ip_address: '155.4.107.25',

}
]