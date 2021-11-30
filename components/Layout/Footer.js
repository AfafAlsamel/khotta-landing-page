import Link from './Link'
import siteMetadata from '../../data/siteMetadata'
import SocialIcon from '../../public/social-icons'
import headerNavLinks from '../../data/headerNavLinks'
import footerNavLinks from '../../data/footerNavLinks'
import Image from 'next/image';
import KhottaLogo from '../../public/logo.svg';
import AxendaLogo from '../../public/axendaLogo.svg';



const Footer = () => {
  return (

    <>
      <footer className="bg-footerbg pt-44 pb-24">
        <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid sm:grid-cols-12 gap-8 py-8 md:py-12 ">
          <div className="sm:col-span-12 lg:col-span-3 items-start ">
            <div>
              <Link
                href="/"
                aria-label="Khotta home page"
              >
                <div className="flex items-start">

                  <div className="flex h-10 mr-2">
                    <Image
                      src={KhottaLogo}
                      width="50"
                      alt="Khotta"
                    />
                  </div>

                  <div className="text-white h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>

                </div>
              </Link>
            </div>

            <p className="mb-4 text-white">
              Plan your academic life effectively
            </p>

            <p className="text-gray-400">
              {`© ${new Date().getFullYear()}`}

              <Link
                href="/"
              >
                {siteMetadata.author}
              </Link>

            </p>
          </div>



          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 sm:col-end-9 flex flex-col ">
            <p className="text-primary mb-4 font-medium text-lg">Khotta</p>
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="my-2 cursor-pointer transition-all text-white"
              >
                {link.title}
              </Link>
            ))}
          </div>



          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 flex flex-col">
            <p className="text-primary mb-4 font-medium text-lg">Axenda</p>
            {footerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="my-2 cursor-pointer transition-all text-white"
              >
                {link.title}
              </Link>
            ))}
          </div>



          <div className="sm:col-span-6 md:col-span-3 flex flex-col">
            <p className="text-primary mb-4 font-medium text-lg">Follow us</p>
            <form>
              <div className="flex flex-wrap mb-4 rounded">
                <div className="w-full">
                  <label
                    className="block text-sm sr-only"
                    htmlFor="newsletter"
                  >
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm rounded-lg"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto rounded-lg"
                      aria-label="Subscribe"
                    >
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-primary mx-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>

                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>


        </div>



        <div className="m-12 border-t border-primary">
          <div className="my-12 ">
            <Link
              href="/"
              aria-label="Axenda home page"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 mr-2">
                  <Image
                    src={AxendaLogo}
                    width="50"
                    alt="Khotta"
                  />
                </div>

                <div className="text-white h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.author}
                </div>

              </div>
            </Link>
          </div>
        </div>



      </footer>

    </>
  )
}
export default Footer