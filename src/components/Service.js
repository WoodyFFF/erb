import React from 'react'

export default function Service({icon,title,text}) {
  return (
    <article className="service">
                <span className="service-icon">
                    <i className={icon}></i>
                </span>
                <div className="service-info">
                    <h4 className="service-title">{title}</h4>
                </div>
                <div className="service-text">
                    <p>{text}</p>
                </div>
            </article>
  )
}
