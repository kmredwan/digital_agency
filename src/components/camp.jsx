import Link from "next/link";

const Camp = ({titel}) => {
    return (
        <section className="bg-[var(--header-bg)] px-16">
            <div className='pt-[90px] pb-[80px] '>
                <h1 className='font-semibold text-[40px] text-[var(--black)] mb-[20px]'>{titel}</h1>
                <ul>
                <li className="inline-flex items-center">
              <Link href="/" className="hover:text-[var(--primary-text-color)] text-gray-800">
                Home
              </Link>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="inline-flex items-center">
              <a href="#" className="hover:text-[var(--primary-text-color)] text-gray-800">
                {titel}
              </a>
            </li>
                    
                </ul>
            </div>
        </section>
    );
};

export default Camp;