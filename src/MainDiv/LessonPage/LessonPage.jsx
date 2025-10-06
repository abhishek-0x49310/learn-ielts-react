import { useContext, useState } from 'react'
import Input from '../../components/Input'
import './LessonPage.scss'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { AppContext } from '../../contexts/AppContext'

function LessonPage({ darkTheme, title="Title of the page" }) {
    const { setPage } = useContext(AppContext)

    useGSAP(() => {
        console.log("animating")
        gsap.to(".lesson-page", {
            translateY: "0%",
            duration: 0.5,
            ease: "power4.out"
        })
    }, [])

    function closePage() {
        gsap.to(".lesson-page", {
            translateY: "100%",
            duration: 0.5,
            ease: "power4.out",
            onComplete: () => setPage("")
        })
    }
    
    return (
        <div className='lesson-page'>
            <img className='close-button' src={darkTheme ? "/close_icon.png" : "/close_dark.png"} onClick={closePage} />

            <div className='content-div'>
                <span className='title'>{title}</span>
                <p>
                    Preparing for the IELTS exam can feel overwhelming, but the right guidance makes all the difference. 
                    Our training program is designed to simplify the process and help you build confidence in each 
                    section of the test—Listening, Reading, Writing, and Speaking. With structured lessons and practical 
                    tips, we ensure that you focus on what truly matters.
                </p>
                <iframe src='https://www.youtube.com/embed/HDhlXPBXwFA'></iframe>
                <p>
                    We believe every learner has unique strengths and challenges. That’s why our approach blends 
                    personalized support with proven strategies. Whether you are aiming for academic success, 
                    professional opportunities, or migration, we tailor our sessions to match your goals and 
                    learning pace.
                </p>
                <p>
                    Our mock tests and practice exercises are built to mirror the actual IELTS exam experience. 
                    This helps you not only improve your skills but also manage time effectively under pressure. 
                    Regular feedback from trainers ensures you are on the right path and making measurable progress.
                </p>
                <p>
                    Thousands of students have trusted our training to achieve their target scores, and you can too. 
                    With expert trainers, interactive lessons, and a supportive environment, we aim to make your 
                    IELTS journey smooth and successful. Take the first step today towards your dream of studying, 
                    working, or settling abroad.
                </p>
            </div>
        </div>
    )
}

export default LessonPage