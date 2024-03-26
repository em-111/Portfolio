import { webImg } from "../web_data";

export default function Projects() {
    return (
        <div>
            <p className="font-cardo font-bold text-xl">Projects</p>

            <hr className="h-1 my-2 bg-gray-200 border dark:bg-gray-700"></hr>

            <div className="flex justify-center flex-wrap gap-4">
                {Object.keys(webImg).map((key) => (
                    <div
                        key={key}
                        className="w-[270px] h-fit flex items-center flex-col border border-gray-900"
                    >
                        <img
                            src={`src/assets/websites/${webImg[key].img}`}
                            alt=""
                            className="h-[135px]"
                        />

                        <div className="w-full h-[50px] flex items-center gap-5">
                            <a
                                href={webImg[key].git}
                                className="w-fit h-fit ml-3"
                                target="_blank"
                            >
                                <img
                                    src="src/assets/logo-github-filled.svg"
                                    className="w-[24px]"
                                    alt=""
                                />
                            </a>
                            <a
                                href={webImg[key].url}
                                className="w-fit h-fit"
                                target="_blank"
                            >
                                <img
                                    src="src/assets/web.svg"
                                    className="w-[24px]"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
