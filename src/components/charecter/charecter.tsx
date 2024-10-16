import React,{FC} from 'react';
import './charecter.css'
type IPropType={
    name:string;
    type:string;
    gender:string;
    img:string;
    status:string;
    children?:React.ReactNode
}
const Charecter:FC<IPropType> = (props) => {
    let {children,status,name,type,gender,img}=props
    return (
        <div>
            <h2 className={'title'}>{name}</h2>
            <ul>
                <li>status: {status}</li>
                <li>type: {type}</li>
                <li>gender: {gender}</li>
            </ul>
            <img src={img} alt={name}/>
            {children}
        </div>
    );
};

export default Charecter;
