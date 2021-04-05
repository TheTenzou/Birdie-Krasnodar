import React from "react"
import "./descCard.css"

const DescCard = ({title, description, image}) => {
  return (
    <div className="col-md-4" >
      <img src={image} />
      <h2 className="text-left">
        <a href="#" className="title"> <strong>{title}</strong> </a>
      </h2>
      <p className="desc" > {description} </p>
    </div>
  )
}

export default DescCard