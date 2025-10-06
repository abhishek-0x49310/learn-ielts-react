import './App.scss'
import { useContext, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Flip from 'gsap/Flip'
import MainDiv from './MainDiv/MainDiv'
import { SplitText } from 'gsap/SplitText'
import SubmitButton from './components/SubmitButton'
import { AppContext } from './contexts/AppContext'
import { toast, ToastContainer } from 'react-toastify'

gsap.registerPlugin(Flip, SplitText)

function App() {
    const [isOpen, setOpen] = useState(false)
    const [darkTheme, setDarkTheme] = useState(true)
    const navMenu = useRef(null)
    const logo = useRef(null)

    const { setPage, loggedInUser, setLoggedInUser } = useContext(AppContext)
    
    useGSAP(() => {
        if (isOpen && navMenu) {
            gsap.to(navMenu.current, {
                left: 0,
                duration: 0.5,
                ease: "power2.out"
            })
        }
        else if (!isOpen && navMenu) {
            gsap.to(navMenu.current, {
                left: "-100%",
                duration: 1,
                ease: "power2.inOut"
            })
        }
    }, [isOpen])

    function toggleMenu() {
        gsap.to(logo.current, {
            rotate: "360deg",
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                gsap.set(logo.current, { rotate: 0 });
            }
        })

        setOpen(!isOpen)
    }

    useEffect(() => {
        const element = document.querySelector("#root")

        if (darkTheme) {
            element.classList.remove("light-theme")
            element.classList.add("dark-theme")
        }
        else {
            element.classList.remove("dark-theme")
            element.classList.add("light-theme")
        }
    }, [darkTheme])
    
    return (
        <>
            <MainDiv darkTheme={darkTheme} />

            <div className='titlebar'>
                <img src='/learnIELTS!.png' ref={logo} onClick={toggleMenu}/>
                {!loggedInUser && <SubmitButton text={"Login/SignUp"} loading={false} onClick={() => setPage("login")} />}
                {loggedInUser && <div className='end-container'>
                    <img src={loggedInUser.image_src} />
                    <div>
                        <span>{loggedInUser.full_name}</span>
                    </div>
                </div>}
            </div>

            <div className='nav-menu' ref={navMenu}>
                <div className='header' />
                {loggedInUser && <div className='menu-item logout' onClick={() => {
                    setLoggedInUser(null)
                    toast.success("Successfully logged out!")
                    toggleMenu()
                }}>
                    <img src={darkTheme ? "/logout_dark.png" : "/logout_light.png"} />
                    <span>Logout</span>
                </div>}
                <div className='menu-item'>
                    <img src={darkTheme ? "/home_dark.png" : "/home_light.png"} />
                    <span>Home</span>
                </div>
                <div className='menu-item'>
                    <img src={darkTheme ? "/shop_dark.png" : "/shop_light.png"} />
                    <span>Shop</span>
                </div>
                <div className='menu-item' onClick={() => {
                    setDarkTheme(!darkTheme)
                    toggleMenu()
                }}>
                    <img src={darkTheme ? "/light_mode_dark.png" : "/dark_mode_light.png"} />
                    <span>{darkTheme ? "Light Mode" : "Dark Mode"}</span> 
                </div>
            </div>

            <ToastContainer
                position='bottom-center'
                theme={darkTheme ? "dark" : "light"}    
            />
        </>
    )
}

export default App
