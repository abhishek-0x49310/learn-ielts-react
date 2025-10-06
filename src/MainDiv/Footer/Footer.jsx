import './Footer.scss'

function Footer() {

    return (
        <div className='footer'>
            <div className='row'>
                <div className='section'>
                    <span className='title'>Social</span>
                    <div className='row'>
                        <img src='/icons8-facebook-48.png' />
                        <span>Facebook</span>
                    </div>
                    <div className='row'>
                        <img src='/icons8-instagram-50.png' />
                        <span>Instagram</span>
                    </div>
                    <div className='row'>
                        <img src='/icons8-whatsapp-50.png' />
                        <span>WhatsApp</span>
                    </div>
                    <div className='row'>
                        <img src='/icons8-youtube-50.png' />
                        <span>YouTube</span>
                    </div>
                    <div className='row'>
                        <img src='/icons8-twitter-50.png' />
                        <span>Twitter</span>
                    </div>
                </div>
                <div className='section'>
                    <span className='title'>Products</span>
                    <span>IELTS Mastery</span>
                    <span>Band 8+ Booster</span>
                    <span>Skill Builder Series</span>
                </div>
                <div className='section'>
                    <span className='title'>Our Offices</span>
                    <pre>
                        {`Bangalore Office
No. 42, 3rd Floor, Orion Business Park
Outer Ring Road, HSR Layout
Bengaluru, Karnataka – 560102`}
                    </pre>
                    <pre>
                        {`Kochi Office
Suite 210, Skyline Corporate Center
MG Road, Ernakulam
Kochi, Kerala – 682016`}
                    </pre>
                </div>
            </div>
            <span>learnIELTS. 2025 All rights reserved</span>
        </div>
    )
}

export default Footer