import Axios from 'axios'

export default Axios.create(
    {
        baseURL: 'https://api.unsplash.com/',
        headers: {
            Authorization: 'Client-ID lirVF8_Cnq-wn0eVHfPGJXZkPyYLikQOgcBXlp-vhwA'
        }
    }
)