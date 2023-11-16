import React from 'react'
import banner from '../assets/home/featured.jpg'
import img1 from '../assets/home/featured.jpg'
import Title from '../SharedComponents/Title'

const FeaturedFood = () => {
  return (
      <div className='w-full lg:h-[700px] bg-black bg-opacity-60 bg-blend-overlay my-20' style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='flex space-y-10 justify-center flex-col items-center text-white'>
              <Title title={'---Check it out---'} subTitle={'FROM OUR MENU'} />
              <div className='flex justify-center gap-10 items-center'>
                  <img src={img1} alt="" className='h-[300px] ' />
                  <div className='max-w-[400px]'>
                      <h1>March 20, 2023</h1>
                      <h1>WHERE CAN I GET SOME?</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                      <button className='btn uppercase text-white mt-10'>Read More</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default FeaturedFood