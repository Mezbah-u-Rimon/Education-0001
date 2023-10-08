import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { id, title, image, price, description } = service || {};


    return (
        <div>
            <Card className="shadow p-2 rounded-lg">
                <CardHeader shadow={false} floated={false} className="h-72 ">
                    <img
                        src={image}
                        alt="card-image"
                        className="h-full w-full object-cover rounded-lg"
                    />
                </CardHeader>
                <CardBody>
                    <div className="my-2  flex items-center gap-3 justify-between">
                        <Typography color="blue-gray" className="font-medium">
                            {title}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            ${price}
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                    >
                        {description.length > 100 ? <p>{description.slice(0, 100)} <Link
                            to={`/details/${id}`}
                            className="text-black bg-amber-500  hover:bg-amber-300 font-bold btn  flex items-center my-5"> Read More... </Link> </p> : <p> {description}</p>}
                    </Typography>
                </CardBody>
            </Card>

        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired,
}

export default Service;