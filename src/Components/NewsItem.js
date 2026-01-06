import React from 'react'

export default function NewsItem(props) {

  
    let{title, description, imgurl, newsurl, name, time}=props
    return (
      <div className="my-4">
        <div className="card">
              <img src={!imgurl?"https://image.cnbcfm.com/api/v1/image/108206822-1759376123798-gettyimages-976177846-zb5423_241410_0009.jpeg?v=1759376155&w=1920&h=1080":imgurl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="text-muted"><small>By {!name?"unknown":name} on {new Date(time).toGMTString()} </small></p>
                <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-dark">Read more</a>
              </div>
          </div>
      </div>
    )
  
}


