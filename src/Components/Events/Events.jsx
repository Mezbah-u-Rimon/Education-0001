import { useContext, useEffect, useState } from "react";
import Event from "./Event";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Events = () => {
    const [events, setEvents] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('/events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])


    return (
        <div className="max-w-6xl mx-auto py-24 px-5">
            <div className="flex flex-wrap md:justify-between items-center mb-12 ">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold"> Our Events </h2>
                    <p className="text-gray-400"> Upcoming Education Events to feed your brain. </p>
                </div>
                <div>
                    {
                        user?.email ? <button className="btn text-amber-500 bg-white border shadow hover:bg-white hover:border-amber-500"><Link to='/events'> View All Events</Link> </button>
                            : <button
                                className="btn text-amber-500 bg-white border shadow hover:bg-white hover:border-amber-500"><Link to='/login'> View All Events</Link> </button>
                    }
                </div>
            </div>
            <div>
                {
                    events?.slice(0, 3).map(event => <Event
                        key={event.id}
                        event={event}
                    ></Event>)
                }
            </div>
        </div>
    );
};

export default Events;