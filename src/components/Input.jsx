import './Input.scss'
import { toast } from 'react-toastify'

function Input({type, placeholder, value, errorMessage, onChange, disabled}) {
    
    if (disabled) {
        <div className="input-container">
            <input className="input" type={type} placeholder={placeholder} name={placeholder} value={value} disabled />
        </div>
    }
    return (
        <div className="input-container">
            <input className="input" type={type} placeholder={placeholder} name={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
            { errorMessage && <img src="src/assets/error_icon.png" onClick={() => toast(`❌ ${errorMessage}`)} /> }
        </div>
    )
}

export default Input