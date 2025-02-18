import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'


const getAll = async () => {
  const response = await axios.get(`${baseUrl}/all`)
  return response.data
}
const getAllByName = async (name) => {
    const response = await axios.get(`${baseUrl}/name/${name}`)
    return response.data
  }


export default { getAll, getAllByName}