import React from 'react'

interface Props {
    message: string;
}

const Alert = ({ message = 'Alert' }: Props) => {
    return (
        <div className="bg-green-100">
            <div className="py-4 max-w-4xl mx-auto">
                <p className="text-green-600">{message}</p>
            </div>
        </div>
    )
}

export default Alert