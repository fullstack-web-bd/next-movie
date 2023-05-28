import { Button, Rating } from "flowbite-react";
import Image from "next/image";

interface IMovieBanner {
    addToWatchList?: boolean;
}

export default function ({ addToWatchList = false }: IMovieBanner) {
    return (
        <div className="max-w-[100%] relative">
            <Image
                src={'/movies/avatar-banner.jpg'}
                alt=""
                width={0}
                height={0}
                sizes="80vw"
                className="w-full h-auto max-h-[400px] rounded-xl"
            />

            <div className="absolute top-0 opacity-30 w-[250px] h-[400px]" style={{ boxShadow: 'inset 247px 20px 144px -102px black' }}></div>

            <div className="absolute text-white top-20 left-5">
                <div className="flex justify-between items-center">
                    <h2 className="text-4xl font-bold mb-2">
                        Avatar
                    </h2>
                    {
                        addToWatchList &&
                        <i className="bi bi-heart-fill text-sm hover:text-red-500"></i>
                    }
                </div>
                <h3 className="text-xl font-thin">The way of the water</h3>

                <div className="flex mt-10 gap-6 items-center">
                    <div>
                        <Rating>
                            <span className="bg-yellow-500 px-3 py-1 text-xs rounded text-black">
                                IMDB
                            </span>
                            <Rating.Star />
                            7.8
                        </Rating>
                    </div>

                    <div className="flex text-xs">
                        <img src="/flags/usa.svg" alt="" width={30} className="mr-3" />
                        English
                    </div>
                </div>

                <div className="mt-10">
                    <Button color="failure">
                        <i className="bi bi-youtube mr-4"></i> Watch Now
                    </Button>
                </div>
            </div>
        </div>
    )
}