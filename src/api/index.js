//function lto fetchdata
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async ( country ) => {
    let changeableUrl = url;

    if(country) {
        changeableUrl = `${url}/countries/${country}`
    }
    try {
        //get data
        //const response = await axios.get(url);
        //we restructure to get data
        const  { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);

        const modifiedData = {
            confirmed: confirmed,
            recovered: recovered,
            deaths: deaths,
            lastUpdate: lastUpdate,
        }
        return modifiedData;

        
    } catch (error) {
        console.log(error);
        
    }
}

//second api
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        
        console.log(data);

        // since its an array we loop through

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));


        return modifiedData;

    } catch (error) {
        
    }
}

export const fetchCountries = async () => {
    try {
        //const response = await axios.get(`${url}/countries`);
      //console.log(response);
      //we resturcture the edata out of it 
        const { data: { countries } } = await axios.get(`${url}/countries`);
      
        return countries.map((country) => country.name);

    } catch (error) {
        console.log(error);
        
    }
}