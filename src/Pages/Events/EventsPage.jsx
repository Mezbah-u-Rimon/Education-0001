import { useLoaderData } from "react-router-dom";
import EventsCard from "./EventsCard";


const EventsPage = () => {
    const events = useLoaderData()
    console.log(events);


    return (
        <div className="max-w-6xl mx-auto py-24 px-5">
            <div className="mb-12 ">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold"> Our Events </h2>
                    <p className="text-gray-400"> Upcoming Education Events to feed your brain. </p>
                </div>
            </div>
            <div>
                {
                    events?.map(event => <EventsCard
                        key={event.id}
                        event={event}
                    ></EventsCard>)
                }
            </div>
        </div>
    );
};

export default EventsPage;