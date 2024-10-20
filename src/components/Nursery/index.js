import './index.css'

const Nursery=(props)=>{
    const {eachItem}=props
    const {image,text}=eachItem
    return(
        <div className="nursery-items">

            <img src={image}/>
            <p>{text}</p>
        </div>
    )
}

export default Nursery