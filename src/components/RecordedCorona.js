import {useEffect, useState} from "react";
import axios from "axios";
import {API_TOKEN, API_URL} from "../consts";


const RecordedCorona = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetchData=async ()=>{
        setLoading(true)
        const response=await  axios.get(`${API_URL}totalData`,{
            headers:{
                authorization: API_TOKEN
            }
        })
        setLoading(false)
        setData(response.data.result)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className="card flex flex-col bg-gray-800 rounded-2xl  items-center justify-center h-full rounded overflow-hidden">
            {loading ? <p>Yükleniyor...</p> : <>
                <h1 className="text-3xl text-blue-700 mb-6">Toplam Vaka : {data?.totalCases}</h1>
                <h1 className="text-3xl text-blue-600 mb-8">Toplam Ölüm : {data?.totalDeaths}</h1>
                <h1 className="text-3xl text-blue-500 mt-3">Toplam İyileşen : {data?.totalRecovered}</h1>

            </>
            }
        </div>
    )
}
export default RecordedCorona