import './index.css'
const Pagination=(props)=>{
    const {data,pageHandler}=props
    const pageNum=[]
    for (let i=1;i<Math.ceil(data.length/6)+1;i++){
        pageNum.push(i)
    }
    
    return(
        <div  >

            <center className='page-num-cont'>
                {pageNum.map(each=><div className="page-num" onClick={()=>pageHandler(each)}>{each}</div>)}
            </center>
        </div>

    )
}
export default Pagination