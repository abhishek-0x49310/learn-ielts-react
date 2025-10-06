import { useEffect, useCallback, useState } from 'react'
import './ReviewSection.scss'
import { useGSAP } from '@gsap/react'
import { Flip } from 'gsap/Flip'

function ReviewCard({ name, place, review, endRef=null }) {


    return (
        <div className='review-card' ref={endRef}>
            <span className='name'>{name}</span>
            <span className='place'>{place}</span>
            <p className='review'>{review}</p>
        </div>
    )
}

export default ReviewCard