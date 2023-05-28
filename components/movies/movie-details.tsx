import SectionHeader from "../section-header";

export default function () {
    return (
        <>
            <SectionHeader title='Plot' areaClassName='flex-col'>
                <div className="tex-xs">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in porro, harum sequi dolorem eos et veritatis dolore unde saepe, necessitatibus animi quo voluptatibus suscipit culpa maxime reiciendis! Obcaecati, doloremque.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in porro, harum sequi dolorem eos et veritatis dolore unde saepe, necessitatibus animi quo voluptatibus suscipit culpa maxime reiciendis! Obcaecati, doloremque.
                    </p>
                </div>
            </SectionHeader>

            <SectionHeader title='Director' areaClassName='flex-col'>
                <div className="tex-xs">
                    Kelly Marcel
                </div>
            </SectionHeader>

            <SectionHeader title='Production' areaClassName='flex-col'>
                <div className="tex-xs">
                    Columbia Pictures
                </div>
            </SectionHeader>

            <SectionHeader title='Cast' areaClassName='flex-col'>
                <div className="flex flex-wrap gap-2 mt-2">
                    <img src="https://www.pngkit.com/png/detail/615-6156135_vin-diesel-vin-diesel-fast-and-furious-png.png" className="rounded-full w-20 h-20" />
                </div>
            </SectionHeader>
        </>
    )
}