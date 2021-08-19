import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchDataC } from "./api";
import covid from "./images/covid.png";
import { ButtonGroup, Button } from "@material-ui/core";

class App extends React.Component {
  state = {
    data: {},
    country: "",
    isCanada: false,
    dataC: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData)
    this.setState({ data: fetchedData });

    const fetchedDataC = await fetchDataC();
    // console.log(fetchedDataC)
    this.setState({ dataC: fetchedDataC });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country, isCanada, dataC } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={covid} alt="" covid />

        {isCanada ? (
          <>
            <ButtonGroup variant="outlined" color="primary">
              <Button onClick={() => this.setState({ isCanada: false })}>
                Global
              </Button>
              <Button variant="contained" onClick={() => this.setState({ isCanada: true })}>
                Canada
              </Button>
            </ButtonGroup>
            {/* <h1>Canada</h1> */}
            <Cards data={dataC} isCanada={isCanada} />
          </>
        ) : (
          <>
            <ButtonGroup variant="outlined" color="primary">
              <Button variant="contained" onClick={() => this.setState({ isCanada: false })}>
                Global
              </Button>
              <Button onClick={() => this.setState({ isCanada: true })}>
                Canada
              </Button>
            </ButtonGroup>
            <Cards data={data} isCanada={isCanada} />
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Chart data={data} country={country} />
          </>
        )}
      </div>
    );
  }
}

export default App;
