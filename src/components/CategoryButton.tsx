import { useState, useEffect } from "react";
import '../App.css'

export interface CategoryButtonProps {
    btnCategory: string
    btnCategoryLabel: string
    currBtnCategory: string
    handleClick: (btnCategory: string) => void 
}

const CategoryButton = ({ btnCategory, btnCategoryLabel, currBtnCategory, handleClick }: CategoryButtonProps) => {
    const [dynamicClassName, setDynamicClassName] = useState(btnCategory)

        useEffect(() => {
        if (btnCategory && currBtnCategory) {
            setDynamicClassName(`${btnCategory} ${currBtnCategory === btnCategory ? 'selected-btn' : null}`);
            } else { setDynamicClassName(btnCategory);
        }
        }, [btnCategory, currBtnCategory])
    
    return (
        <div onClick={() => handleClick(btnCategory)} className={dynamicClassName}>{btnCategoryLabel}</div>
    );
}

export default CategoryButton;