import React, { Component } from "react";
import Fab from '@material-ui/core/Fab';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Typography from '@material-ui/core/Typography';
import RestaurantTable from "../components/RestaurantTable";

import { Link } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const backendApi = "192.168.1.111:3000/api/";
export default class Restaurants extends Component {
  constructor() {
    super();
    this.state = {
      restaurantsList: [],
    };
  }

  componentDidMount() {
    fetch("http://" + backendApi + "restaurants", { mode: "cors" })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          restaurantsList: json,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>

        <Fab variant="extended" color="primary" component={Link} to="/restaurants/add">
          <AddOutlinedIcon fontSize="large" />Add Restaurant
        </Fab>
        {/* <Fab variant="extended" color="primary" onClick={()=>this.props.history.goBack()}>
          &lt;
        </Fab> */}
        <RestaurantTable
          restaurantsList={this.state.restaurantsList}
        ></RestaurantTable>
      </div>
    );
  }
}
