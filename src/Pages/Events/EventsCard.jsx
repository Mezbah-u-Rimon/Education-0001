import PropTypes from 'prop-types'
import { IoMdTime } from 'react-icons/io';
import { CiLocationOn } from 'react-icons/ci';

const EventsCard = ({ event }) => {
    const { title, img, location, time, details, date, month } = event || {};

    return (
        <div className='flex flex-col justify-center md:flex-row-reverse md:justify-between border-y py-8 gap-4'>
            <div className='h-[150px] md:w-[300px] w-full'>
                <img className='h-full w-full rounded-lg' src={img} alt="" />
            </div>
            <div className='w-full md:w-2/4'>
                <h2 className="text-2xl font-bold hover:text-amber-500 inline-block">{title}
                </h2>
                <div className='flex flex-wrap my-4 gap-3 md:gap-5 text-gray-400'>
                    <p className='flex gap-2 items-center'> <IoMdTime></IoMdTime> {time} </p>
                    <p className='flex gap-2 items-center'> <CiLocationOn></CiLocationOn> {location} </p>
                </div>
                <p className='text-gray-500'> {details} </p>
            </div>
            <div className='md:w-[200px] w-full text-center border-r'>
                <h1 className="text-7xl font-bold text-amber-400">{date} </h1>
                <h3>{month} </h3>
            </div>
        </div>
    );
};

EventsCard.propTypes = {
    event: PropTypes.object,
}

export default EventsCard;