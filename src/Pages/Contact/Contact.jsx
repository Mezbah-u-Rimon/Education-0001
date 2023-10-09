import { CiLocationOn } from 'react-icons/ci';
import { LuContact2 } from 'react-icons/lu';
import { BsClockHistory } from 'react-icons/bs';




const Contact = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto pb-24 pt-12 px-5 text-center ">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Any Question and any problem contact us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="rounded-md px-7 pt-12 bg-base-100 shadow-xl hover:border-b-4 hover:border-solid hover:border-indigo-500">
                        <figure className=' '>
                            <CiLocationOn className='text-7xl text-indigo-500 mx-auto'></CiLocationOn>
                        </figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">Address way</h2>
                            <p>
                                Abbot Kinney Blvd. Unit D & E Venice
                            </p>
                        </div>
                    </div>

                    <div className="rounded-md px-7 pt-12 bg-base-100 shadow-xl hover:border-b-4 hover:border-solid hover:border-green-500">
                        <figure className=' '>

                            <LuContact2 className='text-7xl text-green-500 mx-auto'></LuContact2>
                        </figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">Contact info</h2>
                            <p>
                                Mobile: (+88) - 1990 - 6886
                                Hotline: 1800 - 1102
                                Mail: contact@eduma.com
                            </p>
                        </div>
                    </div>

                    <div className=" px-7 pt-12 bg-base-100 rounded-md shadow-xl hover:border-b-4 hover:border-solid hover:border-amber-400">
                        <figure className=' '>
                            <BsClockHistory className='text-7xl text-amber-400 mx-auto'></BsClockHistory>
                        </figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">Work Timer</h2>
                            <p>
                                Monday - Friday: 09:00 - 20:00
                                Sunday & Saturday: 10:30 - 22:0
                            </p>
                        </div>
                    </div>
                </div>


                <div className="hero min-h-screen w-2/3 mx-auto my-24">
                    <div className="card w-full">
                        <div>
                            <h1 className="text-3xl font-bold ">Fill the form below so we can get to know you and your needs better.</h1>
                        </div>
                        <form className="w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name </span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered bg-base-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered bg-base-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject </span>
                                </label>
                                <input type="text" placeholder="Subject" className="input input-bordered bg-base-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className='border p-4 bg-base-200' name="" id="" cols="20" rows="5" placeholder='message'></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-amber-500 w-[200px] mx-auto"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;