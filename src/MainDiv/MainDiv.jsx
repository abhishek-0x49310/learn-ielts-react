import { useEffect, useCallback, useState, useRef, useMemo, useContext } from 'react'
import './MainDiv.scss'
import { useGSAP } from '@gsap/react'
import { Flip } from 'gsap/Flip'
import ReviewSection from './ReviewSection/ReviewSection'
import Footer from './Footer/Footer'
import { SplitText } from 'gsap/SplitText'
import gsap from 'gsap'
import LoginPage from './LoginPage/LoginPage'
import { AppContext } from '../contexts/AppContext'
import LessonPage from './LessonPage/LessonPage'

function MainDiv({ darkTheme }) {

    const { page, setPage, loggedInUser, pageData, setPageData } = useContext(AppContext)
    
    const handleResize = useCallback(() => {
        if (window.innerWidth < 500)
            return 0
        else if (window.innerWidth < 800)
            return 1
        else
            return 2
    }, [])

    const [widthCategory, setWidthCategory] = useState(() => handleResize())
    const [winWidth, setWinWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidthCategory(handleResize())
            setWinWidth(window.innerWidth)
        })

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useGSAP(() => {
        const elements = document.querySelectorAll(".card-container")
        const state = Flip.getState([".card-container>div", ".main-div>div"])

        if (widthCategory == 0) {
            elements.forEach(element => element.classList.remove("three-columns"))
            elements.forEach(element => element.classList.add("two-columns"))
        }
        else if (widthCategory == 1) {
            elements.forEach(element => element.classList.remove("two-columns", "four-columns"))
            elements.forEach(element => element.classList.add("three-columns"))
        }
        else if (widthCategory == 2) {
            elements.forEach(element => element.classList.remove("three-columns"))
            elements.forEach(element => element.classList.add("four-columns"))
        }

        if (page == "") {
            Flip.from(state, {
                absolute: false,
                duration: 0.5,
                ease: "power2.out"
            })
        }

    }, [widthCategory])

    useGSAP(() => {
        let split_lines = SplitText.create(".intro-text.big", {type: "lines"})
        let split_chars = SplitText.create(".intro-text.small", {type: "chars, words"})

        gsap.from(split_lines.lines, {
            rotationX: -100,
            transformOrigin: "50% 50% -1600px",
            opacity: 0,
            duration: 0.8, 
            ease: "power2.out",
            stagger: 0.25
        })

        gsap.from(split_chars.words, {
            x: 150,
            opacity: 0,
            duration: 0.7, 
            ease: "power4",
            stagger: 0.04
        })
    }, [])

    const sectionContainers = useMemo(() => {
        return (<>
            <div className='intro-div'>
                <span className='intro-text big'>Your IELTS success starts here.</span>
                <p className='intro-text small'>
                    Our expert-led IELTS training program is designed to simplify your preparation. 
                    With personalized guidance, real exam simulations, and proven strategies, we’ll help you 
                    gain the confidence and skills you need to achieve your target band score.
                </p>
            </div>

            <div className='section-container'>
                <span>Prepare with ease</span>
                <div className="card-container">
                    <div onClick={() => {
                        setPage(loggedInUser ? "lesson" : "login")
                        setPageData({title: "How to prepare: IELTS Reading"})
                    }}>
                        <div className='img-container'>
                            <img src='/img1.png' />
                            <div className='overlay'>
                                <p>
                                    Develop strong reading skills with strategies and 
                                    practice exercises to tackle every passage confidently.
                                </p>
                                <span>View More</span>
                            </div>
                        </div>
                        
                        <span>Reading</span>
                    </div>
                    <div onClick={() => {
                        setPage(loggedInUser ? "lesson" : "login")
                        setPageData({title: "Master the writing section with expert guidance and practice exercises"})
                    }}>
                        <div className='img-container'>
                            <img src='/img4.png' />
                            <div className='overlay'>
                                <p>
                                    Learn to structure essays and letters effectively for higher writing scores.
                                </p>
                                <span>View More</span>
                            </div>
                        </div>
                        <span>Writing</span>
                    </div>
                    <div onClick={() => {
                        setPage(loggedInUser ? "lesson" : "login")
                        setPageData({title: "Boost your confidence and fluency with focused speaking practice"})
                    }}>
                        <div className='img-container'>
                            <img src='/img5.png' />
                            <div className='overlay'>
                                <p>
                                    Practice speaking confidently and improve your fluency with guided exercises.
                                </p>
                                <span>View More</span>
                            </div>
                        </div>
                        <span>Speaking</span>
                    </div>
                    <div onClick={() => {
                        setPage(loggedInUser ? "lesson" : "login")
                        setPageData({title: "Sharpen your listening skills with real exam-style audio exercises"})
                    }}>
                        <div className='img-container'>
                            <img src='/img6.png' />
                            <div className='overlay'>
                                <p>
                                    Enhance your listening skills with real exam-style audio practice
                                </p>
                                <span>View More</span>
                            </div>
                        </div>
                        <span>Listening</span>
                    </div>
                    <div onClick={() => {
                        setPage(loggedInUser ? "lesson" : "login")
                        setPageData({title: "Join interactive sessions designed to help you succeed faster"})
                    }}>
                        <div className='img-container'>
                            <img src='/img2.png' />
                            <div className='overlay'>
                                <p>
                                    Join interactive classes that make learning engaging and effective.
                                </p>
                                <span>View More</span>
                            </div>
                        </div>
                        <span>Classes</span>
                    </div>
                    <div onClick={() => {
                        setPage(loggedInUser ? "lesson" : "login")
                        setPageData({title: "Expand your vocabulary to improve scores across all IELTS sections"})
                    }}>
                        <div className='img-container'>
                            <img src='/img3.png' />
                            <div className='overlay'>
                                <p>
                                    Expand your vocabulary to tackle all sections of the IELTS confidently.
                                </p>
                                <span>View More</span>
                            </div>
                        </div>
                        <span>Vocabulary</span>
                    </div>
                </div>
            </div>
            
            <div className='section-container'>
                <span>Test and Analyze</span>
                <div className="card-container">
                    <div onClick={() => {
                        setPage(loggedInUser ? "lesson" : "login")
                        setPageData({title: "Simulate real IELTS exams to track your progress effectively"})
                    }}>
                        <div className='img-container'>
                            <img src='/img7.png' />
                            <div className='overlay'>
                                <p>
                                    Take realistic mock tests to track your progress and improve accuracy.
                                </p>
                                <span>View More</span>
                            </div>
                        </div>
                        <span>Mock Tests</span>
                    </div>
                    <div onClick={() => {
                        setPage(loggedInUser ? "lesson" : "login")
                        setPageData({title: "Get personalized AI-powered feedback to identify and improve your weaknesses"})
                    }}>
                        <div className='img-container'>
                            <img src='/img8.png' />
                            <div className='overlay'>
                                <p>
                                    Receive personalized AI-driven feedback to identify weaknesses and improve faster.
                                </p>
                                <span>View More</span>
                            </div>
                        </div>
                        <span>AI Analysis</span>
                    </div>
                </div>
            </div>
        </>)
    }, [widthCategory, page])
    
    return (
        <div className='main-div'>
    
            {sectionContainers}

            <ReviewSection winWidth={winWidth} widthCategory={widthCategory}/>

            <Footer />

            {page == "lesson" && <LessonPage darkTheme={darkTheme} title={pageData.title} />}
            {page == "login" && <LoginPage widthCategory={widthCategory} darkTheme={darkTheme} /> }
        </div>
    )
}

export default MainDiv