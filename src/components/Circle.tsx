import { useState, useEffect } from 'react'
import '../App.css';

export interface CircleProps {
    gridPosition: string
    circleLabel: string
    currCategory: string
    dataModel: any
    loading: boolean
}

const Circle = ({ gridPosition, circleLabel, currCategory, dataModel, loading }: CircleProps) => {
    const [dynamicClassName, setDynamicClassName] = useState(`circle ${gridPosition}`);

    useEffect(() => {
        if (dataModel && gridPosition && currCategory) {
            if (dataModel[`${currCategory}`][`${gridPosition}`]) {
                setDynamicClassName(`circle ${gridPosition} ${dataModel[`${currCategory}`][`${gridPosition}`]}`);
            } else {
                setDynamicClassName(`circle ${gridPosition}`);
            }
        }
    }, [dataModel, gridPosition, currCategory, loading]);    

    return (
        <div className={dynamicClassName}>{circleLabel}</div>
    );
}

export default Circle;