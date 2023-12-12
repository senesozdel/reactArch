import React from 'react'



const Categories = ({ data }) => {
  return (
    <div >


      <div className='d-flex flex-wrap gap-2 justify-content-center'>
        {data.slice(0, 4).map((i, index) => {
          return (

            <div className='product-card w-25 d-flex flex-column align-items-center gap-3 m-0 p-0  border '>

              <div className='card-image' style={ {width:'15rem', height:'22rem'}}>
                <img src={i.image} alt="card-img" style={{width:'100%', height:'100%'}} />
              </div>
              <div className='card-title'>
                <h4 className='m-0'>{i.title}</h4>
              </div>
              <div className='card-body'>
                <div className='desc'>
                  {i.description}
                </div>
              </div>
              <div className='card-footer d-flex gap-2 align-items-center mb-2 '>
                <h5 className='m-0'>{i.price}$</h5>
                <button className='bg-first rounded-1'>Add to Cart</button>
              </div>
            </div>




          )
        }



        )}
      </div>




    </div>
  )
}

export default Categories