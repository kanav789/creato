import axios from "axios";
import { useEffect, useState } from "react";

const getColor = (count: number) => {
    if (count === 0) return "bg-gray-800";
    if (count < 3) return 'bg-green-900';
    if (count < 5) return 'bg-green-700';
    if (count < 8) return 'bg-green-500';
    return "bg-green-400";
};



export default function Contribution() {
    const [contributions, setContributions] = useState<number[]>([]);
    const [totalContributions, setTotalContributions] = useState(0);

    useEffect(() => {
        axios
            .get("https://github-contributions-api.jogruber.de/v4/kanav789?y=last")
            .then((res) => {
                const counts =
                    res.data?.contributions?.map((entry: any) =>
                        Number(entry.count)
                    ) || [];
                setContributions(counts);
                setTotalContributions(res.data?.total?.lastYear || 0);
            })
            .catch(console.error);
    }, []);

    const weeks: number[][] = [];
    for (let i = 0; i < contributions.length; i += 7) {
        weeks.push(contributions.slice(i, i + 7));
    }

    return (
        <section className="pl-14 sm:pl-[40vh] mt-10">
            <h2 className="mt-10 text-[17px] font-medium sm:text-[22px]">Contributions</h2>



            <div className="border border-gray-800 rounded-md px-2 sm:w-[670px] pb-4 w-auto mt-6 " >


                <div className="bg-[#111827] rounded-md p-3 sm:inline-block w-auto overflow-x-scroll shadow-m sm:w-[650px]">
                    <div className="flex gap-[3px]">
                        {weeks.map((week, weekIndex) => (
                            <div key={weekIndex} className="flex flex-col gap-[1px]">
                                {week.map((count, dayIndex) => (
                                    <div
                                        key={dayIndex}
                                        className={`w-3 h-3 sm:w-4 sm:h-4  border border-black ${getColor(count)} rounded-sm transition-all duration-300`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional: Gray Legend */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 mt-3 text-[10px] sm:text-[16px]  text-gray-500">
                        <span>Less</span>
                        <div className="w-3 h-3 bg-gray-800" />
                        <div className="w-3 h-3 bg-green-900" />
                        <div className="w-3 h-3 bg-green-700" />
                        <div className="w-3 h-3 bg-green-500" />
                        <div className="w-3 h-3 bg-green-300" />
                        <span>More</span>
                    </div>


                    <p className="text-gray-500 text-[10px] sm:text-[16px]   mt-3">
                        Total Contributions:{" "}
                        <span className="text-gray-500 font-semibold">{totalContributions}</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
