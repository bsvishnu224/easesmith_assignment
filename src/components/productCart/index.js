import { CiSearch } from "react-icons/ci";
import { useState,useEffect } from "react";

import Pagination from "../Pagination";
import { Component  } from "react";
import Header from "../Header";
import FilterList from "../FilterList";
import PlantList from "../PlantList";
import Nursery from "../Nursery";

import "./index.css"

const nurseryItems=[
    {
        id:1,
        image:"https://i.ibb.co/t3btryK/Ellipse-68.jpg",
        text:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum "
    },
    {
        id:2,
        image:"https://i.ibb.co/t3btryK/Ellipse-68.jpg",
        text:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum "
    },
    {
        id:3,
        image:"https://i.ibb.co/t3btryK/Ellipse-68.jpg",
        text:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum "
    },
    {
        id:4,
        image:"https://i.ibb.co/t3btryK/Ellipse-68.jpg",
        text:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum "
    },
    {
        id:5,
        image:"https://i.ibb.co/t3btryK/Ellipse-68.jpg",
        text:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum "
    },
    {
        id:6,
        image:"https://i.ibb.co/t3btryK/Ellipse-68.jpg",
        text:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum "
    },
    {
        id:7,
        image:"https://i.ibb.co/t3btryK/Ellipse-68.jpg",
        text:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum "
    },
    {
        id:8,
        image:"https://i.ibb.co/t3btryK/Ellipse-68.jpg",
        text:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum "
    },
    {
        id:9,
        image:"https://i.ibb.co/t3btryK/Ellipse-68.jpg",
        text:"Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum "
    }

]

const filterOptions=[
    {
        id:1,
        text:"Type of Plant"
    },
    {
        id:2,
        text:"Price"
    },
    {
        id:3,
        text:"Nursery"
    },
    {
        id:4,
        text:"Ideal Plants Location"
    },
    {
        id:5,
        text:"Indoor/ Outdoor"
    },
    {
        id:6,
        text:"Maintenance"
    },
    {
        id:7,
        text:"Plant Size"
    },
    {
        id:8,
        text:"Water Schedule"
    },
    {
        id:9,
        text:"color"
    },
    {
        id:10,
        text:"Seasonal"
    },
    {
        id:11,
        text:"Light Efficient"
    }
    
]

const plants=[
    {
        id:1,
        image:"https://i.ibb.co/X3t7LrD/e1ce63ff429a0c018fd6e2e5dd614458.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    },
    {
        id:2,
        image:"https://i.ibb.co/X3t7LrD/e1ce63ff429a0c018fd6e2e5dd614458.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    },
    {
        id:3,
        image:"https://i.ibb.co/X3t7LrD/e1ce63ff429a0c018fd6e2e5dd614458.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    },
    {
        id:4,
        image:"https://i.ibb.co/X3t7LrD/e1ce63ff429a0c018fd6e2e5dd614458.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    },
    {
        id:6,
        image:"https://i.ibb.co/X3t7LrD/e1ce63ff429a0c018fd6e2e5dd614458.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    },
    {
        id:7,
        image:"https://i.ibb.co/X3t7LrD/e1ce63ff429a0c018fd6e2e5dd614458.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    },
    {
        id:8,
        image:"https://i.ibb.co/X3t7LrD/e1ce63ff429a0c018fd6e2e5dd614458.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    },
    {
        id:9,
        image:"https://i.ibb.co/X3t7LrD/e1ce63ff429a0c018fd6e2e5dd614458.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    },
    {
        id:10,
        image:"https://i.ibb.co/X3t7LrD/e1ce63ff429a0c018fd6e2e5dd614458.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    },
    {
        id:11,
        image:"https://i.ibb.co/X8H3d1v/7973d62829a030074ad8b6ad34.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    },
    {
        id:12,
        image:"https://i.ibb.co/X8H3d1v/7973d62829a030074ad8b6ad34.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    },
    {
        id:13,
        image:"https://i.ibb.co/X8H3d1v/7973d62829a030074ad8b6ad34.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    },
    {
        id:14,
        image:"https://i.ibb.co/X8H3d1v/7973d62829a030074ad8b6ad34.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    },
    {
        id:15,
        image:"https://i.ibb.co/X8H3d1v/7973d62829a030074ad8b6ad34.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    },
    {
        id:16,
        image:"https://i.ibb.co/X8H3d1v/7973d62829a030074ad8b6ad34.png",
        name:"monsterra",
        ratingImg:"https://i.ibb.co/TvJxq7V/image-10.png",
        rating:"4.9",
        price:"Rs 359",
        sellingPrice:"Rs 299",
        description:"Indoor Plant, Low maintenance"
    }

]

const ProductCart=()=>{
    const [data,setDate]=useState(plants)
    const [pageDate,setPageData]=useState(plants.slice(0,6))

    const pageHandler=(pageNumber)=>{
        setPageData(data.slice((pageNumber*6)-6,pageNumber*6))
    }

    return(
        <div>
            <Header/>
            <div className="search-container">
                <div className="search-cont">
                    <CiSearch />
                    <input className="search-bar" type="search" placeholder="Search Plants"/>
                    <img className="search-image" src="https://i.ibb.co/X25JkLr/image-91.png"/>
                </div>
            </div>
            <div className="description-cont">
                <div>
                    <button className="plant-btn">Plants</button>
                    <button className="pot-btn">Pots</button>
                </div>
                <p className="description">Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
                <h1>Nursery</h1>
                <div className="nusery-item-cont">
                    {nurseryItems.map((each)=>(
                        <Nursery eachItem={each} key={each.id}/>
                    ))}
                </div>


            </div>
            <div className="plants-cont">

                <div className="filter-main-cont">
                    <div className="filter-cont">
                        <p>Filter</p>
                        <p>CLEAR ALL</p>
                    </div>
                    <hr/>
                    <div>
                        {filterOptions.map((each)=>(
                            <FilterList eachOption={each} key={each.id}/>
                        ))}
                    </div>
                    
                </div>
                <div>
                    <div className="option-cont">
                        <p className="plant">300 Plants</p>
                        <select className="option">
                            <option>SORT BY</option>
                            
                        </select>
                    </div>
                    <div >
                        <div className="plants-list">
                            {pageDate.map((each)=>(
                                <PlantList eachPlant={each} key={each.id}/>
                            ))}
                            
                            
                        </div>
                        <Pagination data={data} pageHandler={pageHandler}/>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default ProductCart