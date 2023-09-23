import { Card } from "primereact/card"
import { Link } from "react-router-dom"

const header = (
    <img
        alt="Card"
        src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
)

const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
        
    </div>
)

const formatter = (timestamp) => {
    const curDate = new Date()
    const givenDate = new Date(timestamp)

    const diffInTime = curDate - givenDate

    const seconds = Math.floor(diffInTime / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (days >= 2) {
        return `${days} days ago`
    } else if (hours >= 1) {
        return `${hours} hours ago`
    }else if (minutes >= 2) {
        return `${minutes} minutes ago`
    } else {
        return "just now"
    }
}

const Room = (props) => {
    
    return (
        <Link to={`/room/${props.id}`}>
            <div className="card flex justify-evenly">
                <Card 
                    title={props.title} 
                    subTitle={formatter(props.created_at)} 
                    header={header} 
                    footer={footer} 
                    className="mx-4 my-4 w-[300px] h-[300px] md:w-25rem"
                    >
                    <p className="m-0">{props.detail}</p>
                </Card>
            </div>
        </Link>
)}

export default Room
