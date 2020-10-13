import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Container from "@material-ui/core/Container";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';


const styles = (theme) => ({
  editRoot: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.error.contrastText,
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.info.dark,
    },
  },
  deleteRoot: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  }
});

class RestaurantTable extends Component {
  render() {
    return (
      <TableContainer maxWidth={'xs'} component={Container}>
        <Table aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Tools</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.restaurantsList.map((row, i) => (
              <TableRow key={row._id} >
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit">
                    <Fab classes={{ root: this.props.classes.editRoot }} size="small">
                      <EditOutlinedIcon />
                    </Fab>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <Fab classes={{ root: this.props.classes.deleteRoot }} size="small">
                      <DeleteForeverOutlinedIcon />
                    </Fab>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}


export default withStyles(styles)(RestaurantTable);