import Card from "./Card";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../constants/constants";
import Shimmer from "./Shimmer";

const Body = () => {
    const [list, setList] = useState([]);
    const [filteredList, setFilteredList] = useState(list);
    const [searchText, setSearchText] = useState("");

    useEffect(() => { fetchJSONFromAPI() }, []);

    const fetchJSONFromAPI = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        // console.log(json);
        // console.log(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name);
        const allRes = json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;     // check cards[3] / cards[4]
        setList(allRes);
        setFilteredList(allRes);
    }

    return (
        <div className="container">
            <div className="row mt-3">
                {/* Search Functionallity */}
                <div className="col-md-8">
                    <input type="search"
                        placeholder="Search Restaurants"
                        className="form-control"
                        // bind search filed with state variable
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }}
                        onKeyUp={() => {
                            const filtered2 = list.filter(
                                (obj) => obj?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                            )
                            setFilteredList(filtered2);
                        }}
                    />
                </div>

                {/* Top Rated Restaurants */}
                <div className="col-md-4">
                    <button
                        className="btn btn-success w-100"
                        onClick={() => {
                            const filtered = list.filter(
                                (obj) => obj.info.avgRating >= 4.5
                            )
                            setFilteredList(filtered);
                        }}
                    >Top Rated Restaurants</button>
                </div>
            </div>

            {/* Render Cards */}
            <div className="row">
                {/* <Card obj={list[0]} /> */}
                {/* <Card obj={list[1]} />
                <Card obj={list[2]} />
                <Card obj={list[3]} /> */}

                {
                    (filteredList.length === 0) ? <Shimmer /> :
                        filteredList.map(
                            // (obj, index) => { return <Card res={obj} key={index} /> }
                            (obj) => { return <Card res={obj} key={obj?.info?.id} /> }
                        )
                }
            </div>
        </div >
    )
}

export default Body;