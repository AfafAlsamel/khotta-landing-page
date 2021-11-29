import Link from './Link'
import siteMetadata from '../../data/siteMetadata'
import SocialIcon from '../social-icons'
import headerNavLinks from '../../data/headerNavLinks'
import footerNavLinks from '../../data/footerNavLinks'
import Image from 'next/image';
import KhottaLogo from '../../public/logo.svg';
import AxendaLogo from '../../public/axendaLogo.svg';



const Footer = () => {
  return (

  <>
    <footer className="bg-footerbg pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
        <div>
            <Link href="/" aria-label="Khotta home page">
              <div className="flex items-start justify-between">
                <div className="flex h-10 mr-2">
                <Image src={KhottaLogo} width="50" alt="Khotta"/>
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="text-white h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
              
            </Link>
          </div>
          <p className="mb-4 text-white">
            Plan your academic life effectively
          </p>
          
          <p className="text-gray-400">{`© ${new Date().getFullYear()}`} <Link href="/">{siteMetadata.author}</Link> </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-white mb-4 font-medium text-lg">Khotta</p>
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
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-white mb-4 font-medium text-lg">Axenda</p>
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
        <div className="row-span-2 sm:col-span-2 sm:col-end-11 sm:col-start-13 flex flex-col">
        <p className="text-white mb-4 font-medium text-lg">Follow us</p>
          <form className="flex  mr-auto text-right">
            <input type="email" className="h-8 px-3 w-full text-white bg-white rounded-md outline-none w-52 text-left mr-3" placeholder="Email"></input>
            <button className="px-5 text-sm w-full transition rounded-lg hover:opacity-90 bg-primary">Send</button>
        </form>
        </div>
      </div>
      <div className="mx-10 mt-10">
        <div>
            <hr className="w-full h-1 border-primary"></hr>
        </div>
        <div className="flex flex-row-reverse align-middle justify-between my-8 "></div>
             <span className="flex justify-start"><div className="mr-auto"></div></span>
                <Link href="/" aria-label="Axenda home page">
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 mr-2">
                     <Image src={AxendaLogo} width="50" alt="Khotta"/>
                    </div>
                    {typeof siteMetadata.author === 'string' ? (
                      <div className="text-white h-6 text-2xl font-semibold sm:block">
                        {siteMetadata.author}
                      </div>
                    ) : (
                      siteMetadata.author
                    )}
                    </div>
                </Link>
      </div>
    </footer>

    </>
  )
}
export default Footer