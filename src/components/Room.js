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
  // <div className="bg-white p-6 rounded-lg shadow-lg mx-4 my-4 w-[300px] h-[200px] justify-between">
  //     <h2 className="text-2xl font-bold mb-2 text-gray-800">heyy</h2>
  //     <p className="text-text-gray-700">cool</p>
  // </div>
    <div className="card flex justify-evenly">
        <Card title={props.name} subTitle="subtitle" header={header} footer={footer} className="mx-4 my-4 w-[300px] h-[400px] md:w-25rem">
            <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
            consequuntur error repudiandae numquam deserunt quisquam repellat libero
            asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque quas!
            </p>
        </Card>
    </div>
);

export default Room;
