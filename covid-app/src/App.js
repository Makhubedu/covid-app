import React from 'react'
import styles from './App.module.css'
import cx from 'classnames'
import 'bootstrap/dist/css/bootstrap.css';
import covidImg from './images/covid.png'
import { Cards , Chart , CountrySelector} from './compoents'


import { fetchData } from './api'




class App extends React.Component {
    state = {
        data : {},
        country : ""
    }
    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data });
  }
  handleCountryChange = async (country) => {
      const data = await fetchData(country)
      this.setState({data, country:country})

  }

    render(){
        const {data, country} = this.state;
        return(
                <div className= {cx(styles.container, "container-fluid")}>
                    <h1 className={styles.text}>C<img src={covidImg} alt="Covid 19" className={styles.covidImgage} />V I D - 1 9  APP BY  DERRICK</h1>
                    <Cards  data = {data}/>
                    <CountrySelector handleCountryChange= {this.handleCountryChange}/>
                    <Chart 
                        data = {data}
                        country = {country}/>
                    <footer><strong> Made with ❤ By Derrick Makhubedue |<a className="card-text" href="https://derrick-makhubedu.herokuapp.com/" target="_blank">My Porfolio </a> </strong>|</footer>
                </div>
            
        )
    }
}
export default App;