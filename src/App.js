import React from 'react'
import {Cards, CountryPicker, Charts} from './components'
import styles from './App.module.css'
import {fetchData} from './api'
import image from './images/image.png'

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

   async  componentDidMount(){
        const data = await fetchData()
        this.setState({data})
    }

    handleCountryChange = async (country) => {
        //fetch data
        const data = await fetchData(country)

        console.log(data)
        //set state
    }

    render() {
        
        const { data } = this.state

        return(
            <div className={styles.container}>
            <img className={styles.image} src={image} alt="COVID-19" />
                <Cards  data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts />
            </div>
        )
    }
}

export default App