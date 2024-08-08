/* eslint-disable react/prop-types */
/* eslint-disable no-unsafe-optional-chaining */
import { SWIGGY_CLOUDINARY_IMG } from "../constants/constants";

const Card = (props) => {
    // console.log(props);
    // console.log(props?.res?.info?.name + "  " + props?.res?.info?.id);
    const { name, cloudinaryImageId, areaName, avgRating, cuisines, costForTwo, sla } = props?.res?.info;

    return (
        <div className="card bg-light col-md-3 mt-3">
            <img src={SWIGGY_CLOUDINARY_IMG + cloudinaryImageId} className="rounded-circle" alt="res-img" style={{ aspectRatio: "4/3" }} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6> {avgRating} stars • {sla?.slaString}</h6>
                <p>{cuisines.join(", ")}</p>
                <p>{areaName} • <b>{costForTwo}</b></p>
            </div>
        </div >
    )
}

export default Card;