export default function Profile() {
    return (
        <div className="grid gap-5">
            <p className="font-cardo text-5xl sm:text-7xl 3xl:text-9xl">
                Endrit Mehaj
            </p>
            <div className="flex gap-10 3xl:text-2xl">
                <a
                    href="mailto:endritmehaj33@gmail.com"
                    className="font-bold underline"
                >
                    E-mail
                </a>
                <a
                    href="https://github.com/em-111"
                    className="font-bold underline"
                    target="_blank"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/endrit-mehaj-7216702a1/"
                    className="font-bold underline"
                    target="_blank"
                >
                    LinkedIn
                </a>
            </div>
            <p className="w-[95%] sm:w-[590px] 3xl:text-2xl 3xl:w-[790px] flex flex-col gap-3">
                <p>
                    I am a beginner web developer with a passion for learning
                    and advancing in the field. Although I do not have any
                    professional work experience, I have a strong foundation in
                    web development principles.
                </p>
                <p>
                    I am an excellent communicator and have strong interpersonal
                    skills. I am a hard worker and am able to work
                    independentrly and as part of a team. I am also committed to
                    continuous learning and professional development.
                </p>
                <p>
                    Thank you for visiting my portfolio. I am excited to connect
                    with you and discuss how I can contribute to your team.
                </p>
            </p>
        </div>
    );
}
