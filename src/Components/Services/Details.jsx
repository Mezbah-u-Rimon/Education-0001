import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const { id } = useParams();
    const services = useLoaderData();
    const [service, setService] = useState({});


    useEffect(() => {
        const findServices = services?.find(service => service.id === parseFloat(id));
        setService(findServices);

    }, [id, services]);

    console.log(service);

    return (
        <div className="max-w-6xl mx-auto">
            <Card className="shadow p-10 rounded-lg">
                <CardHeader shadow={false} floated={false} className=" ">
                    <img
                        src={service.image}
                        alt="card-image"
                        className="h-full w-full object-cover rounded-lg"
                    />
                </CardHeader>
                <CardBody>
                    <div className="my-5  flex items-center gap-3 justify-between">
                        <Typography color="blue-gray" className="font-bold text-3xl">
                            {service.title}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            ${service.price}
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                    >
                        <p> <span className="text-black text-xl font-bold">Description :</span> {service.description}</p>
                    </Typography>
                </CardBody>

            </Card>
        </div>
    );
};

export default Details;