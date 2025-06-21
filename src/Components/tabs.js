import React,{useState} from 'react';
export default function Tabs({children}) {
    const [activeIndex,setactiveIndex] = useState(0);
    const handleClick=(index)=> {
        setactiveIndex(index);
    }
    return (
        <div className="tabs-container">
            <div className="tabs-header">
                {React.Children.map(children,(child,index)=>
            <button className=
                {`tab-button ${index === activeIndex ?
                    'active': ' '}`}              
                onClick ={()=>handleClick(index)}>
                {child.props.title}
            </button>
            )}
            </div>
            <div className ="tab-content">
                {children[activeIndex]}
            </div>
        </div>
    )
}
