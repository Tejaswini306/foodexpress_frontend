import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
// import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
export default function Home() {
    const [foodCat, setFoodCat] = useState([])
    const [foodItems, setFoodItems] = useState([])
    const [search, setSearch] = useState('')
    const loadFoodItems = async () => {
        let response = await fetch("https://foodorderbackend-a1vg.onrender.com/api/auth/foodData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }

        });
        response = await response.json()
        // console.log(response[1][0].CategoryName)
        setFoodItems(response[0])
        setFoodCat(response[1])
    }

    useEffect(() => {
        loadFoodItems()
    }, [])

    return (
        <div className="container-fluid p-0" >
            <div>
                <Navbar />
            </div>
            <div>
                <div 
                //id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel"
                id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
                >
                    <div className="carousel-inner " id='carousel'>
                        <div class=" carousel-caption  " style={{ zIndex: "9" }}>
                            <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                                <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Search in here..." aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                <button className="btn text-white bg-danger" onClick={() => { setSearch('') }}>Search</button>
                            </div>
                        </div>
                        <div className="carousel-item active" >
                            <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100 vh-100" style={{ filter: "brightness(80%)" ,objectFit: 'cover'}} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 vh-100" style={{ filter: "brightness(80%)",objectFit: 'cover' }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 vh-100" style={{ filter: "brightness(80%)",objectFit: 'cover' }} alt="..." />
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

            <div className='container'>
                {/* boootstrap is mobile first */}
                {foodCat && foodCat.length !== 0 ? (
                    foodCat.map((data) => {
                        return (
                            <div className='row mb-3' key={data.id}>
                                <div className='fs-3 m-3'>
                                    {data.categoryName}
                                </div>
                                <hr id="hr-success" style={{ height: "5px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                                {foodItems && foodItems.length !== 0 ? (
                                    foodItems
                                        .filter((items) => items.categoryName === data.categoryName && items.name.toLowerCase().includes(search.toLowerCase()))
                                        .map((filterItems) => {
                                            return (
                                                <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                                                    {console.log(filterItems.url)}
                                                    <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} />
                                                </div>
                                            );
                                        })
                                ) : (
                                    <div>No Such Data</div>
                                )}
                            </div>
                        );
                    })
                ) : (
                    ""
                )}
            </div>

            <Footer />
        </div>
    )
}
