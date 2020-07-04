const url = 'https://covid19.mathdro.id/api'

export const fetchData = async() => {
    try{
        const response = await fetch(url)
        const {confirmed, recovered, deaths, lastUpdate}   = await response.json()

        return  { confirmed, recovered, deaths, lastUpdate}
    } catch(error){

    }

}


export const fetchDailyData = async () => {
    try {
        const response = await fetch(`${url}/daily`)
        const data = await response.json()

       const modifiedData = data.map((dailyData) => ({
           confirmed: dailyData.confirmed.total,
           deaths: dailyData.deaths.total,
           date: dailyData.reportDate,
       }))

      return modifiedData
    } catch (error){

    }
}