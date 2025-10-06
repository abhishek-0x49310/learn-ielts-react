import { useContext, useRef } from 'react'
import './ReviewSection.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ReviewCard from './ReviewCard'
import { AppContext } from '../../contexts/AppContext'

function ReviewSection({ winWidth, widthCategory }) {
    const cardContainer = useRef(null)
    const marqueeEnd = useRef(null)

    const { page } = useContext(AppContext)

    useGSAP(() => {
        gsap.killTweensOf(cardContainer.current)

        gsap.set(cardContainer.current, {
            clearProps: "transform"
        })

        if (page != "")
            return

        const offsetX = -marqueeEnd.current.offsetLeft - marqueeEnd.current.offsetWidth - 10 + 20
        gsap.to(cardContainer.current, {
            x: offsetX,
            duration: 25,
            repeat: -1,
            ease: "linear"
        })
    }, [winWidth, widthCategory, page])

    return (
        <div className='review-section'>
            <div className='card-container' ref={cardContainer}>
                <ReviewCard name={"Pavitra J"} place={"Delhi"} review={"Very clear and practical guidance!"}/>
                <ReviewCard name={"Abhishek H"} place={"Calicut"} review={"Helped me boost my band score quickly."}/>
                <ReviewCard name={"Said A"} place={"Telengana"} review={"Friendly trainers, easy to follow lessons."}/>
                <ReviewCard name={"Rohit S"} place={"Bangalore"} review={"Good practice tests, felt like the real exam."}/>
                <ReviewCard name={"Ananya T"} place={"Mumbai"} review={"I finally understood speaking strategies!"}/>
                <ReviewCard name={"Meera J"} place={"Kochi"} review={"Writing tips were super useful."}/>
                <ReviewCard name={"Karan D"} place={"Ludhiana"} review={"Made IELTS prep less stressful."}/>
                <ReviewCard name={"Vikram N"} place={"Chennai"} review={"Great feedback and personalized support."} endRef={marqueeEnd}/>

                <ReviewCard name={"Pavitra J"} place={"Delhi"} review={"Very clear and practical guidance!"}/>
                <ReviewCard name={"Abhishek H"} place={"Calicut"} review={"Helped me boost my band score quickly."}/>
                <ReviewCard name={"Said A"} place={"Telengana"} review={"Friendly trainers, easy to follow lessons."}/>
                <ReviewCard name={"Rohit S"} place={"Bangalore"} review={"Good practice tests, felt like the real exam."}/>
                <ReviewCard name={"Ananya T"} place={"Mumbai"} review={"I finally understood speaking strategies!"}/>
                <ReviewCard name={"Meera J"} place={"Kochi"} review={"Writing tips were super useful."}/>
                <ReviewCard name={"Karan D"} place={"Ludhiana"} review={"Made IELTS prep less stressful."}/>
                <ReviewCard name={"Vikram N"} place={"Chennai"} review={"Great feedback and personalized support."}/>
            </div>

            <div className='overlay' />
        </div>
    )
}

export default ReviewSection