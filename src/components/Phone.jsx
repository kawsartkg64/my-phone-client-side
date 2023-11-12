import { useLoaderData } from "react-router-dom";


const Phone = () => {
const phone = useLoaderData()
    return (
        <div>
            <h2>{phone.name}</h2>
            <img src={phone.image} alt="" />
            <p>{phone.price}</p>
        </div>
    );
};

export default Phone;