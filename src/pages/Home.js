import { useState } from "react"
import { categories } from "../data"
import SideBar from "../components/SideBar"
import { useNavigate } from "react-router-dom"

export default function Home(){

    // const [categoryData,setCategoryData] = useState(categories)
    const navigate = useNavigate()
    return <div>
        <h1>Categories</h1>
        
        <div className="main-container">
        <div><SideBar/></div>
        <div className="category-main">
        {categories.map(({_id,thumbnail,category})=><div key={_id} onClick={()=>navigate(`/videos/${category}`)}>
            <img className="category-pic"src={thumbnail} alt="pictures"/>
            <p>{category}</p>
        </div>)}
    </div>
    </div>
    </div>
  }