import React from 'react'

const Card = ({image, title, subTitle}) => {
  return (
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src={image} alt="" /></figure>
          <div className="card-body space-y-2">
              <h2 className="text-2xl font-bold text-center">{ title }</h2>
              <p className='text-center'>{ subTitle }</p>
              <div className="card-actions justify-center">
                  <button className="btn btn-primary">ADD TO CART</button>
              </div>
          </div>
      </div>
  )
}

export default Card