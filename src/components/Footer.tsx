import Logo from '@/components/Logo';
import { footerData } from '@/constants';

const Footer = () => {
  return (
    <footer className='section !pb-0'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-4'>
          <Logo />
          <div className='grid grid-cols-2 gap-x-2 gap-y-8 text-sm sm:grid-cols-4 lg:col-span-3'>
            {footerData.links.map(({ title, items }, index) => (
              <ul key={index}>
                <p className='mb-4'>{title}</p>
                {items.map(({ href, label }, index) => (
                  <li
                    key={index}
                    className='text-muted-foreground'
                  >
                    <a
                      href={href}
                      className='inline-block py-1 transition-colors hover:text-primary'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className='flex justify-between mt-12 border-t border-gray-600/10 py-6'>
          <a
            href='https://www.youtube.com/@deogiriinstituteofengineer4233'
            target='_blank'
            className=''
          >
            {footerData.copyright}
          </a>

          {/* Removed social icons and added the new line */}
          <div className='text-sm text-end'>
            <span>Developed by </span>
            <span className='font-semibold text-primary'>Ashish Rathi</span>
            <span> & </span>
            <span className='font-semibold text-primary'>Chiranjeev Singh Sandhu  </span>(SY-CSE-A)
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
