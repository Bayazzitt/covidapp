import {useEffect, useState} from "react";
import axios from "axios";
import {API_TOKEN, API_URL} from "../consts";
import Card from "./Card";


const CoronaForCountry = () => {

    const [data, setData] = useState([])
    const [queryText, setQueryText] = useState("")
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        const response = await axios.get(`${API_URL}countriesData?country=${queryText}`, {
            headers: {
                authorization: API_TOKEN
            }
        })
        setLoading(false)
        setData(response.data.result)
    }
    useEffect(() => {
        fetchData()
    }, [queryText])
    return (
        <>
            <div className="mb-4">
                <input value={queryText} onChange={(e) => {
                    setQueryText(e.target.value)
                }}
                       placeholder="Ara ..."
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-violet-600"/>
            </div>

            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  gap-6">
                {loading && <p>Yükleniyor ...</p>}
                {data.map((item) => {
                    return (
                        <Card key={item.country} country={item.country} totalDeaths={item.totalDeaths}
                              totalCase={item.totalCases} totalRecovered={item.totalRecovered}/>
                    )
                })}
            </div>
        </>
    )
}
export default CoronaForCountry