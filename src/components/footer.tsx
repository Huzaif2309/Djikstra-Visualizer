import Link from "next/link";

const Footer = () => {
    return (
        <div className="mt-6 p-6 text-gray-500 text-center text-[13px]">
            Made by Huzaif in 2024&nbsp; •&nbsp; 
            {<Link href='https://github.com/Huzaif2309' target="_blank">
                <div className="text-sky-700 inline"> Github </div>
            </Link>}
        </div>
    )
}

export default Footer;