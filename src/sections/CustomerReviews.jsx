import React from 'react'
import ReviewCard from '../components/ReviewCard'
import {reviews} from '../constants'

export default function CustomerReviews() {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl'>What Our
        <span className='text-coral-red'>Customers&nbsp;</span>
        Say?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="mt-24 flex-flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {
          reviews.map(review => (
            <ReviewCard key={review.customerName}/>
          ))
        }
      </div>
    </section>
  )
}
