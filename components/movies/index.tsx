import { Dropdown } from "flowbite-react";
import { useState } from "react";
import SectionHeader from "@/components/section-header";
import Movie from '@/components/movies/single-movie';

export default function () {
    const [filterType, setFilterType] = useState('popular');

    return (
        <>
            <SectionHeader title={`${filterType.toUpperCase()} MOVIES`}>
                <div className="border border-1 rounded-lg px-5 py-2 text-white text-sm">
                    <Dropdown
                        inline
                        label={filterType.toUpperCase()}
                        className="bg-transparent"
                    >
                        <Dropdown.Item onClick={() => setFilterType('popular')}>
                            Popular
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setFilterType('latest')}>
                            Latest
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </SectionHeader>

            <div className="flex flex-wrap gap-4">
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </div>
        </>
    )
}