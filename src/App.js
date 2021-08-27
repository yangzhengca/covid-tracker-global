import React from "react";

import { Cards, Chart, CountryPicker, ProvincePicker } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchDataC, fetchDataCanadaTime, fetchProvinces } from "./api";
import covid from "./images/covid.png";
import { ButtonGroup, Button } from "@material-ui/core";

class App extends React.Component {
  state = {
    data: {},
    country: "",
    isCanada: false,
    dataC: {},
    dataCT:{},
    dataCP:{},
    provinces:[]
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData)
    this.setState({ data: fetchedData });

    const fetchedDataC = await fetchDataC();
    // console.log(fetchedDataC)
    this.setState({ dataC: fetchedDataC });

    const fetchedDataCanadaTime = await fetchDataCanadaTime();
    console.log(fetchedDataCanadaTime)
    this.setState({ dataCT: fetchedDataCanadaTime });


    const fetchedProvinces = await fetchProvinces();
    // console.log(fetchedProvinces.prov)
      const provinces=fetchedProvinces.prov.map((item)=>{
        return item.province_full
      })
    // console.log(provinces)
    this.setState({ provinces: provinces });
  }

    



  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  handleProvinceChange = async (province) => {
    const provinceData = this.dataCT.active.filter((item)=>{
      if (item.province==province){
        return item;
      }
      
    });

    this.setState({ dataCP: provinceData, province: province });
  };

  render() {
    const { data, country, isCanada, dataC, dataCP, provinces, province } = this.state;

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
            <ProvincePicker provinces={provinces} handleProvinceChange={this.handleProvinceChange} />
            <Chart data={dataCP} country={province} />
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
