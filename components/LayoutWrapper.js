import siteMetadata from '../data/siteMetadata'
import headerNavLinks from '../data/headerNavLinks'
import Image from 'next/image';
import Illustration from '../public/logo.svg';
import Link from './Link'
import SectionContainer from './SectionContainer'
//import Footer from './Footer'
import MobileNav from './MobileNav'
import Footer from './Footer';


const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className=" flex flex-col justify-between h-full">
        <header className="flex bg-black items-center justify-between p-8">
          <div>
            <Link href="/" aria-label="Tailwind CSS Blog">
              <div className="flex items-start justify-between">
                <div className="flex h-10 mr-2">
                <Image src={Illustration} width="50" alt="Khotta"/>
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden text-white h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
              
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block ">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-white sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            
            
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    
    </SectionContainer>
  )
}

export default LayoutWrapper