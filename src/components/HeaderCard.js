import CountUp from 'react-countup'

const CardHeader = (props) => (
    <div class="flex items-center justify-between p-4 bg-white rounded-md dark:bg-darker">
        <div>
        <h6
            class="text-xs font-medium text-dark-green leading-none tracking-wider uppercase 
            mb-2"
        >
            {props.title}
        </h6>
        <span class="text-xl font-semibold text-gray-500">
            {props.index!=3 ? 
            <CountUp start={0} end={props.detail} duration={5}/> : props.detail}
            </span>
        </div>
        <div>
        <span className="text-3xl text-dark-green">
            {props.icon}
        </span>
        </div>
    </div>
)

export default CardHeader