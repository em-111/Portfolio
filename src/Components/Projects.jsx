import github from "../assets/logo-github-filled.svg";
import web from "../assets/web.svg";
import { data } from "../data";

export default function Projects() {
    return (
        <div>
            <p className="font-cardo font-bold text-xl 3xl:text-3xl">
                Projects
            </p>

            <hr className="h-1 my-2 bg-gray-200 border dark:bg-gray-700"></hr>

            <div className="flex justify-center flex-wrap gap-4">
                {data.map((d, index) => (
                    <div
                        key={index}
                        className="w-[270px] h-fit flex items-center flex-col border border-gray-900"
                    >
                        <img src={d.img} alt="" className="h-[135px]" />

                        <div className="w-full h-[50px] flex items-center gap-5">
                            <a
                                href={d.github}
                                className="w-fit h-fit ml-3"
                                target="_blank"
                            >
                                <img src={github} className="w-[24px]" alt="" />
                            </a>
                            <a
                                href={d.url}
                                className="w-fit h-fit"
                                target="_blank"
                            >
                                <img src={web} className="w-[24px]" alt="" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
