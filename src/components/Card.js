import PropTypes from "prop-types";
import Header from "./Header";

const countryImage='https://improvemandarin.com/wp-content/uploads/country-names-in-Chinese-1024x683.jpg'
const Card=({country,totalRecovered,totalDeaths,totalCase})=>{
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all">
            <img className="w-full" src={countryImage} alt="Country" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{country}</div>
                <p className="text-gray-700 text-base">
                    Toplam Vaka : {totalCase}
                </p>
                <p className="text-gray-700 text-base">
                    Toplam Ölüm : {totalDeaths}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" >
                    #→ {totalRecovered}
                </span>
            </div>
        </div>
    )
}

Card.propTypes = {
    country: PropTypes.string,
    totalCase: PropTypes.string,
    totalRecovered: PropTypes.string,
    totalDeaths: PropTypes.string,

}
Card.defaultProps = {
    country: "",
    totalCase: "",
    totalRecovered: "",
    totalDeaths: "",
}
export default Card