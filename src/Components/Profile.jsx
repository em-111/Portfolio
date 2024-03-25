export default function Profile() {
    return (
        <div className="grid gap-5">
            <p className="font-cardo text-5xl sm:text-7xl">Endrit Mehaj</p>
            <div className="flex gap-10">
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
            <p className="w-[95%] sm:w-[590px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates temporibus eum porro laborum unde dolore atque fuga
                culpa distinctio, praesentium magni quae. Vero unde voluptatum
                dolorum, sequi ipsam amet debitis.
            </p>
        </div>
    );
}
