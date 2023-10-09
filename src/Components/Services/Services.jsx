
import { useEffect, useState } from "react";
import Service from "./Service";



const Services = () => {

    const [services, setServices] = useState();

    useEffect(() => {
        fetch('/serviceData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="max-w-6xl mx-auto py-24">
            <div className="mb-12 space-y-3">
                <h1 className="text-3xl font-bold"
                    data-aos="zoom-out-right"
                > Popular Courses </h1>
                <p data-aos="zoom-out-right"> Strategies for Effective Teaching and Student Engagement
                </p>
            </div>

            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    services?.map(service => <Service key={service.id} service={service}> </Service>)
                }
            </div>

        </div>
    );
};

export default Services;