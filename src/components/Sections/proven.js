export default function proven( params ) {
    return (
        <div className=" lg:h-96 w-screen justify-center items-center h-auto lg:p-20 bg-black text-white ">
            <div className=" grid grid-flow-row grid-cols-1 lg:grid-cols-3 ">
                <div className=" flex flex-col gap-5 border-r border-gray-600 p-5">
                    <div>

                    </div>
                    <div className="flex flex-col gap-10 justify-between">
                        <h1 className="lg:text-2xl text-lg">
                            {params.title1}
                        </h1>
                        <p className="text-balance text-sm ">
                            {params.desc1}
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col gap-5 border-r border-gray-600 p-5">
                 <div>

                    </div>
                    <div className="flex flex-col gap-10 justify-between">
                        <h1 className="lg:text-2xl text-lg">
                            {params.title2}
                        </h1>
                        <p className="text-balance text-sm ">
                            {params.desc2}
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col gap-5 border-gray-600 p-5">
 <div>

                    </div>
                    <div className="flex flex-col gap-10 justify-between">
                        <h1 className="lg:text-2xl text-lg">
                            {params.title3}
                        </h1>
                        <p className=" text-sm ">
                            {params.desc3}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}