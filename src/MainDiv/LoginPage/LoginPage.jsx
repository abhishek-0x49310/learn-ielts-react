import { useContext, useState } from 'react'
import Input from '../../components/Input'
import './LoginPage.scss'
import SubmitButton from '../../components/SubmitButton'
import { useGSAP } from '@gsap/react'
import { Flip } from 'gsap/Flip'
import gsap from 'gsap'
import { AppContext } from '../../contexts/AppContext'
import { toast } from 'react-toastify'

function LoginPage({ widthCategory, darkTheme }) {
    const [isLogin, setIsLogin] = useState(true)
    const [userID, setUserID] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const { setPage, setLoggedInUser } = useContext(AppContext)

    useGSAP(() => {
        gsap.to(".login-page", {
            right: 0,
            duration: 0.5,
            ease: "power2.out"
        })
    }, [])

    useGSAP(() => {
        const loginContainer = document.querySelector(".login-container")
        const signupContainer = document.querySelector(".signup-container")
        const loginCover = document.querySelector(".login-container>.cover")
        const signupCover = document.querySelector(".signup-container>.cover")

        if (widthCategory <= 1) {

            if (isLogin) {
                gsap.set(signupContainer, {
                    position: "absolute",
                    top: "100%"
                })
                gsap.set(signupCover, {
                    right: "100%"
                })
                gsap.set(loginCover, {
                    left: "100%"
                })
            }
            else {
                gsap.set(loginContainer, {
                    position: "absolute",
                    top: "100%"
                })
                gsap.set(loginCover, {
                    left: "100%"
                })
                gsap.set(signupCover, {
                    right: "100%"
                })
            }
        }
        else if (widthCategory == 2) {

            if (isLogin) {
                gsap.set(signupCover, {
                    right: 0
                })
            }
            else {
                gsap.set(loginCover, {
                    left: 0
                })
            }

            gsap.to(loginContainer, {
                position: "relative",
                top: 0,
                duration: 0.5,
                ease: "power2.out"
            })

            gsap.to(signupContainer, {
                position: "relative",
                top: 0,
                duration: 0.5,
                ease: "power2.out"
            })
        }
    }, [widthCategory])

    useGSAP(() => {

        if (widthCategory <= 1) {
            const loginContainer = document.querySelector(".login-container")
            const signupContainer = document.querySelector(".signup-container")

            if (isLogin) {
                gsap.to(loginContainer, {
                    top: 0,
                    position: "relative",
                    duration: 0.5,
                    ease: "power2.out"
                })
                gsap.to(signupContainer, {
                    top: "100%",
                    position: "absolute",
                    duration: 0.5,
                    ease: "power2.out"
                })
            }
            else {
                gsap.to(loginContainer, {
                    top: "-100%",
                    position: "absolute",
                    duration: 0.5,
                    ease: "power2.out"
                })
                gsap.to(signupContainer, {
                    top: 0,
                    position: "relative",
                    duration: 0.5,
                    ease: "power2.out"
                })
            }
        }
        else {
            const loginCover = document.querySelector(".login-container>.cover")
            const signupCover = document.querySelector(".signup-container>.cover")

            if (isLogin) {
                gsap.to(loginCover, {
                    left: "100%",
                    right: 0,
                    duration: 0.5,
                    ease: "power2.out"
                })
                gsap.to(signupCover, {
                    left: 0,
                    right: 0,
                    duration: 0.5,
                    ease: "power2.out"
                })
            }
            else {
                gsap.to(loginCover, {
                    right: 0,
                    left: 0,
                    duration: 0.5,
                    ease: "power2.out"
                })
                gsap.to(signupCover, {
                    right: "100%",
                    left: 0,
                    duration: 0.5,
                    ease: "power2.out"
                })
            }
        }
    }, [isLogin])

    function handleSubmit() {
        setLoggedInUser({
            id: 1,
            first_name: "John",
            last_name: "Doe",
            full_name: "John Doe",
            image_src: "https://www.selectmarket.ae/wp-content/uploads/2016/05/5ed0bc59411f1356d4fdf40b_dummy-person.png"
        })

        toast.success("Successfully logged in!")

        closePage()
    }

    function handleSpanClick() {
        setIsLogin(!isLogin)
    }

    function closePage() {
        gsap.to(".login-page", {
            right: "100vw",
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => setPage("")
        })
    }

    return (
        <div className='login-page'>
            <img className='close-button' src={darkTheme ? "/close_icon.png" : "/close_dark.png"} onClick={closePage} />
            <div>
                <div className={(isLogin || widthCategory <= 1) ? "login-container content-div" : "login-container content-div hide"}>
                    <Input type={"text"} placeholder={"Email"} value={userID} onChange={(e) => setUserID(e)} />
                    <Input type={"password"} placeholder={"Password"} value={password} onChange={(e) => setPassword(e)} />
                    
                    <SubmitButton text={"LOGIN"} loading={false} onClick={handleSubmit} />
                    <p>New user ? <span onClick={handleSpanClick}>Create an account!</span></p>

                    <div className='cover'>
                        CREATE AN ACCOUNT.
                    </div>
                </div>

                <div className={(!isLogin || widthCategory <= 1) ? "signup-container content-div" : "signup-container content-div hide"}>
                    <div className="sub-container">
                        <Input type={"text"} placeholder={"Email"} value={userID} onChange={(e) => setUserID(e)} />
                    </div>
                    <div className="sub-container">
                        <Input type={"text"} placeholder={"First Name"} value={firstName} onChange={(e) => setFirstName(e)} />
                        <Input type={"text"} placeholder={"Last Name"} value={lastName} onChange={(e) => setLastName(e)} />
                    </div>
                    <div className="sub-container">
                        <Input type={"password"} placeholder={"Password"} value={password} onChange={(e) => setPassword(e)} />
                        <Input type={"password"} placeholder={"Confirm Password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e)} />
                    </div>
                    
                    <SubmitButton text={"CREATE ACCOUNT"} loading={false} onClick={handleSubmit} />
                    <p>Already have an account ? <span onClick={handleSpanClick}>Login!</span></p>

                    <div className='cover'>
                        WELCOME BACK!
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default LoginPage