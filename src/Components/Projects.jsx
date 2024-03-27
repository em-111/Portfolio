import img0 from "../assets/websites/img-0.avif";
import img1 from "../assets/websites/img-1.avif";
import img2 from "../assets/websites/img-2.avif";
import img3 from "../assets/websites/img-3.avif";
import img4 from "../assets/websites/img-4.avif";
import img5 from "../assets/websites/img-5.avif";
import img6 from "../assets/websites/img-6.avif";
import img7 from "../assets/websites/img-7.avif";
import img8 from "../assets/websites/img-8.avif";
import img9 from "../assets/websites/img-9.avif";
import img10 from "../assets/websites/img-10.avif";
import img11 from "../assets/websites/img-11.avif";
import img12 from "../assets/websites/img-12.avif";
import github from "../assets/logo-github-filled.svg";
import web from "../assets/web.svg";
import { data } from "../data";

console.log(data[0].img)

export default function Projects() {
    return (
        <div>
            <p className="font-cardo font-bold text-xl 3xl:text-3xl">
                Projects
            </p>

            <hr className="h-1 my-2 bg-gray-200 border dark:bg-gray-700"></hr>

            <div className="flex justify-center flex-wrap gap-4">
                <div className="w-[270px] h-fit flex items-center flex-col border border-gray-900">
                    <img src={img0} alt="" className="h-[135px]" />

                    <div className="w-full h-[50px] flex items-center gap-5">
                        <a
                            href="https://github.com/em-111/Testimonials"
                            className="w-fit h-fit ml-3"
                            target="_blank"
                        >
                            <img src={github} className="w-[24px]" alt="" />
                        </a>
                        <a
                            href="https://11testimonials.netlify.app"
                            className="w-fit h-fit"
                            target="_blank"
                        >
                            <img src={web} className="w-[24px]" alt="" />
                        </a>
                    </div>
                </div>

                <div className="w-[270px] h-fit flex items-center flex-col border border-gray-900">
                    <img src={img1} alt="" className="h-[135px]" />

                    <div className="w-full h-[50px] flex items-center gap-5">
                        <a
                            href="https://github.com/em-111/My-Gallery"
                            className="w-fit h-fit ml-3"
                            target="_blank"
                        >
                            <img src={github} className="w-[24px]" alt="" />
                        </a>
                        <a
                            href="https://11gallery.netlify.app"
                            className="w-fit h-fit"
                            target="_blank"
                        >
                            <img src={web} className="w-[24px]" alt="" />
                        </a>
                    </div>
                </div>

                <div className="w-[270px] h-fit flex items-center flex-col border border-gray-900">
                    <img src={img2} alt="" className="h-[135px]" />

                    <div className="w-full h-[50px] flex items-center gap-5">
                        <a
                            href="https://github.com/em-111/Homepage"
                            className="w-fit h-fit ml-3"
                            target="_blank"
                        >
                            <img src={github} className="w-[24px]" alt="" />
                        </a>
                        <a
                            href="https://11homepage.netlify.app"
                            className="w-fit h-fit"
                            target="_blank"
                        >
                            <img src={web} className="w-[24px]" alt="" />
                        </a>
                    </div>
                </div>

                <div className="w-[270px] h-fit flex items-center flex-col border border-gray-900">
                    <img src={img3} alt="" className="h-[135px]" />

                    <div className="w-full h-[50px] flex items-center gap-5">
                        <a
                            href="https://github.com/em-111/Checkout-Page"
                            className="w-fit h-fit ml-3"
                            target="_blank"
                        >
                            <img src={github} className="w-[24px]" alt="" />
                        </a>
                        <a
                            href="https://11checkoutpage.netlify.app"
                            className="w-fit h-fit"
                            target="_blank"
                        >
                            <img src={web} className="w-[24px]" alt="" />
                        </a>
                    </div>
                </div>

                <div className="w-[270px] h-fit flex items-center flex-col border border-gray-900">
                    <img src={img4} alt="" className="h-[135px]" />

                    <div className="w-full h-[50px] flex items-center gap-5">
                        <a
                            href="https://github.com/em-111/Sunnyside-Agency"
                            className="w-fit h-fit ml-3"
                            target="_blank"
                        >
                            <img src={github} className="w-[24px]" alt="" />
                        </a>
                        <a
                            href="https://11sunnyside.netlify.app"
                            className="w-fit h-fit"
                            target="_blank"
                        >
                            <img src={web} className="w-[24px]" alt="" />
                        </a>
                    </div>
                </div>

                <div className="w-[270px] h-fit flex items-center flex-col border border-gray-900">
                    <img src={img5} alt="" className="h-[135px]" />

                    <div className="w-full h-[50px] flex items-center gap-5">
                        <a
                            href="https://github.com/em-111/Huddle"
                            className="w-fit h-fit ml-3"
                            target="_blank"
                        >
                            <img src={github} className="w-[24px]" alt="" />
                        </a>
                        <a
                            href="https://11huddle.netlify.app"
                            className="w-fit h-fit"
                            target="_blank"
                        >
                            <img src={web} className="w-[24px]" alt="" />
                        </a>
                    </div>
                </div>

                <div className="w-[270px] h-fit flex items-center flex-col border border-gray-900">
                    <img src={img6} alt="" className="h-[135px]" />

                    <div className="w-full h-[50px] flex items-center gap-5">
                        <a
                            href="https://github.com/em-111/Clipboard"
                            className="w-fit h-fit ml-3"
                            target="_blank"
                        >
                            <img src={github} className="w-[24px]" alt="" />
                        </a>
                        <a
                            href="https://11clipboard.netlify.app"
                            className="w-fit h-fit"
                            target="_blank"
                        >
                            <img src={web} className="w-[24px]" alt="" />
                        </a>
                    </div>
                </div>

                <div className="w-[270px] h-fit flex items-center flex-col border border-gray-900">
                    <img src={img7} alt="" className="h-[135px]" />

                    <div className="w-full h-[50px] flex items-center gap-5">
                        <a
                            href="https://github.com/em-111/Hangman"
                            className="w-fit h-fit ml-3"
                            target="_blank"
                        >
                            <img src={github} className="w-[24px]" alt="" />
                        </a>
                        <a
                            href="https://11hangman.netlify.app"
                            className="w-fit h-fit"
                            target="_blank"
                        >
                            <img src={web} className="w-[24px]" alt="" />
                        </a>
                    </div>
                </div>

                <div className="w-[270px] h-fit flex items-center flex-col border border-gray-900">
                    <img src={img8} alt="" className="h-[135px]" />

                    <div className="w-full h-[50px] flex items-center gap-5">
                        <a
                            href="https://github.com/em-111/Country-Quiz"
                            className="w-fit h-fit ml-3"
                            target="_blank"
                        >
                            <img src={github} className="w-[24px]" alt="" />
                        </a>
                        <a
                            href="https://11country-quiz.netlify.app"
                            className="w-fit h-fit"
                            target="_blank"
                        >
                            <img src={web} className="w-[24px]" alt="" />
                        </a>
                    </div>
                </div>

                <div className="w-[270px] h-fit flex items-center flex-col border border-gray-900">
                    <img src={img9} alt="" className="h-[135px]" />

                    <div className="w-full h-[50px] flex items-center gap-5">
                        <a
                            href="https://github.com/em-111/Todo-List"
                            className="w-fit h-fit ml-3"
                            target="_blank"
                        >
                            <img src={github} className="w-[24px]" alt="" />
                        </a>
                        <a
                            href="https://11todo-list.netlify.app"
                            className="w-fit h-fit"
                            target="_blank"
                        >
                            <img src={web} className="w-[24px]" alt="" />
                        </a>
                    </div>
                </div>

                <div className="w-[270px] h-fit flex items-center flex-col border border-gray-900">
                    <img src={img10} alt="" className="h-[135px]" />

                    <div className="w-full h-[50px] flex items-center gap-5">
                        <a
                            href="https://github.com/em-111/Country-Quiz-2"
                            className="w-fit h-fit ml-3"
                            target="_blank"
                        >
                            <img src={github} className="w-[24px]" alt="" />
                        </a>
                        <a
                            href="https://11country-quiz2.netlify.app"
                            className="w-fit h-fit"
                            target="_blank"
                        >
                            <img src={web} className="w-[24px]" alt="" />
                        </a>
                    </div>
                </div>

                <div className="w-[270px] h-fit flex items-center flex-col border border-gray-900">
                    <img src={img11} alt="" className="h-[135px]" />

                    <div className="w-full h-[50px] flex items-center gap-5">
                        <a
                            href="https://github.com/em-111/World-Countries"
                            className="w-fit h-fit ml-3"
                            target="_blank"
                        >
                            <img src={github} className="w-[24px]" alt="" />
                        </a>
                        <a
                            href="https://11worldcountries.netlify.app"
                            className="w-fit h-fit"
                            target="_blank"
                        >
                            <img src={web} className="w-[24px]" alt="" />
                        </a>
                    </div>
                </div>

                <div className="w-[270px] h-fit flex items-center flex-col border border-gray-900">
                    <img src={img12} alt="" className="h-[135px]" />

                    <div className="w-full h-[50px] flex items-center gap-5">
                        <a
                            href="https://github.com/em-111/Components"
                            className="w-fit h-fit ml-3"
                            target="_blank"
                        >
                            <img src={github} className="w-[24px]" alt="" />
                        </a>
                        <a
                            href="https://11components.netlify.app"
                            className="w-fit h-fit"
                            target="_blank"
                        >
                            <img src={web} className="w-[24px]" alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <img src={data[0].img} alt="" width={500} />
            <img src={data[1].img} alt="" width={500} />
            <img src={data[2].img} alt="" width={500} />
        </div>
    );
}
