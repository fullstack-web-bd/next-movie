interface ISection {
    title?: string | React.ReactNode;
    children: React.ReactNode;
    areaClassName?: string;
}

export default function ({ title = null, children, areaClassName = 'justify-between' }: ISection) {
    return (
        <section className="my-10">
            <div className={`flex ${areaClassName}`}>
                {title !== null &&
                    <div className="text-white font-bold">
                        {title}
                    </div>
                }

                {children}
            </div>
        </section>
    )
}