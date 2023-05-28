import { Card, Rating } from "flowbite-react";
import Link from "next/link";

export default function () {
    return (
        <Link href={'/movie'} className="basis-[23.6%]">
            <Card
                className="border-1 border-slate-900 !bg-transparent"

                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="/movies/avatar.jpg"
            >
                <h5 className="text-2xl font-bold tracking-tight text-white dark:text-gray-900">
                    <div className="flex justify-between items-center">
                        <div>
                            Avatar
                        </div>
                        <div className="text-sm">
                            <Rating>
                                <Rating.Star />
                                <span>7.8</span>
                            </Rating>
                        </div>
                    </div>
                    <p className="text-xs font-thin uppercase">
                        The way of Water
                    </p>
                </h5>
                <div className="flex gap-2">
                    <div>
                        <i className="bi bi-person-circle text-primary text-3xl"></i>
                    </div>
                    <div>
                        <h3 className="text-xs">
                            Maniruzzaman Akash
                            <i className="bi bi-check-circle-fill ml-2 text-green-500"></i>
                        </h3>
                    </div>
                </div>
            </Card>
        </Link>
    )
}