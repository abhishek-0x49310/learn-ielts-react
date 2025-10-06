import { FadeLoader, PulseLoader } from 'react-spinners'
import './SubmitButton.scss'

function SubmitButton({text, loading, onClick}) {

    if (loading) {

        const cssOverride = {
            display: "block",
            margin: "auto auto"
        }

        return (
            <div className="button-div">
                <PulseLoader color='#e2e2e2' size={10} cssOverride={cssOverride} />
            </div>
        )
    }
    else {
        return (
            <div className="button-div" onClick={() => onClick()}>
                { text }
            </div>
        )
    }
}

export default SubmitButton