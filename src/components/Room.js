import { Card } from "primereact/card"

const header = (
    <img
        alt="Card"
        src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
);

const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
        
    </div>
);
const Room = (props) => (
    <div className="card flex justify-evenly">
        <Card title={props.title} subTitle={props.created_at} header={header} footer={footer} className="mx-4 my-4 w-[300px] h-[400px] md:w-25rem">
            <p className="m-0">{props.detail}</p>
        </Card>
    </div>
)

export default Room;
