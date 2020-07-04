const url = 'https://covid19.mathdro.id/api'

export const fetchData = async() => {

    try{
        const response = await fetch(url)
        const {confirmed, recovered, deaths, lastUpdate}   = await response.json()

        return  { confirmed, recovered, deaths, lastUpdate}
    } catch(error){

    }

}