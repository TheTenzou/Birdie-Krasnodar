import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({title, rating, desc, pic, slug}) => {
    return (
        <div
            className="col-md-4"
            style={{
            fontFamily: "Roboto, sans-serif",
            background: "#f8f9fa"
            }}
        >
            <Link
            to={"/Cafepage/" + slug}
            style={{
                borderColor: "#1b1b1b",
                color: "#1b1b1b",
                textDecoration: "none"
            }}
            >
            <h3
                style={{
                marginTop: "5%",
                fontFamily: "Roboto, sans-serif",
                borderColor: "#1b1b1b"
                }}
            >
                {title}
            </h3>
            <img src={pic} />
            <p>
                Оценка заведения: {rating} &nbsp;&nbsp;
                <i className="fa fa-star" style={{ color: "#cc8f52" }} />
                <i className="fa fa-star" style={{ color: "#cc8f52" }} />
                <i className="fa fa-star" style={{ color: "#cc8f52" }} />
                <i className="fa fa-star" style={{ color: "#cc8f52" }} />
                <i
                className="fa fa-star-half-full"
                style={{ color: "#cc8f52" }}
                />
            </p>
            <p
                style={{ fontFamily: "Roboto, sans-serif", color: "#5c5c5c" }}
            >
                {desc}
            </p>
            </Link>
            <div />
        </div>
    )
}

export default RestaurantCard;