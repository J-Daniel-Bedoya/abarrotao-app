import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionGetGlocersAsync } from "../../redux/actions/glocersActions";


const Home = () => {
    const  glocers  = useSelector((store) => store.glocerStore);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(glocers);

    useEffect(() => {
        dispatch(actionGetGlocersAsync())
    }, [dispatch])


    return (
        <div className="home">

            {
                glocers && glocers.length ? (
                    glocers.map((glocer, index) => (
                        <section>
                            <div key={index} style={{ width: '18rem', height: '50%' }} onClick={() => { navigate(`/tienda${glocer.name}`); }}>
                                <div variant="top" src={glocer.image} style={{ height: '10rem', objectFit: 'cover' }} className='imgCard'/>
                                <div bg="warning" text="dark">{glocer.name}</div>
                                <div>
                                    <p>{glocer.seller}</p>
                                    <p>{`${glocer.description}`}</p>
                                </div>
                            </div>
                        </section>
                    ))
                ) : (<></>)
            }

        </div>
    )
}
export default Home