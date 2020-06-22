import React from 'react';

//import components
//from index.js in components 
//we dont need to append to components/index
import {Cards, Chart, CountryPicker} from './components';

//import style which has style or css
import styles from './App.module.css';
// for named import {}
import { fetchData } from './api';

import coronaImage from './images/image.png';


class App extends React.Component {

    // to bring fetcheddata to components we use state
    state = {
        data: {},
        country: '',

    }

//make component didmount asynchronius
    async componentDidMount() {

        const fetchedData = await fetchData();

        //console.log(data);
        //to populate data
        this.setState({ data: fetchedData });
    }

    // method to change state of cou try
    handleCountryChange = async (country) => {

        const fetchedData = await fetchData(country);


        console.log(fetchedData);

        console.log(country);

        this.setState({ data: fetchedData, country: country});
        //fetch data

        //set the state
    }

    render(){

        const { data, country } = this.state;

        return(

            <div className={styles.container} >
                <h1 >My App</h1>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} / >
            </div>
        )
    }
}

export default App;