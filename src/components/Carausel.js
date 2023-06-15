import React from 'react';

export default function Carausel() {

    return (
      <div>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectfit:"contain !important"}}>
    <div className='carousel-caption' id='carousel' style={{"zIndex":"10"}}>
    <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
        </form>
    </div>
  
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://source.unsplash.com/random/300×300/?burger" className="d-block w-100" style={{filter:"brightness(80%)"}}alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/300×300/?pasta" className="d-block w-100" style={{filter:"brightness(80%)"}}alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/300×300/?pastry" className="d-block w-100" style={{filter:"brightness(80%)"}}alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
      </div>
    )
  }

