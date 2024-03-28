export default function Skills() {
    return (
        <div>
            <p className="font-cardo font-bold text-2xl 3xl:text-3xl">Skills</p>
            <hr className="h-1 my-2 bg-gray-200 border dark:bg-gray-700"></hr>
            <ul className="list-disc list-inside 3xl:text-xl">
                <li>
                    <span className="font-bold">Languages : </span>HTML, CSS,
                    JavaScript
                </li>
                <li>
                    <span className="font-bold">Frameworks / Libraries : </span>
                    ReactJS, Tailwind CSS
                </li>
                <li>
                    <span className="font-bold">Developer Tools : </span>
                    Git
                </li>
            </ul>
        </div>
    );
}
