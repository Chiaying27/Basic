import { log } from 'console';
import React from 'react'

interface Props {
    label: string;
    value: string | number;
}

const PostDetails = ({ label, value }: Props) => {

    // console.log(typeof value);

    /*to check the type of value,
    if the number is 1, show Active else Inactive,
    if string just show the value 
    */
    const actValue = typeof value === 'number' ?
        value === 1 ? 'Active' : 'Inactive'
        : value;


    /*to check the value is number or not
    if yes, then change the color of status 
    else it wiil set normal text color
    */
    const statusColor = typeof value === 'number' ?
        value === 1 ? 'text-green-500' : 'text-red-500'
        : 'text-black';


    // console.log(statusColor);


    return (
        <div className='flex flex-col items-start gap-1'>
            <span className="text-xs text-gray-600 font-medium">
                {label}
            </span>
            <p className={`text-left text-lg md:text-xl font-semibold ${statusColor} `}>{actValue}</p>
        </div>
    )
}

export default PostDetails