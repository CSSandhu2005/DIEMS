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

        <div className='text-sm text-center mt-12 border-t border-gray-600/10 py-6'>
          <a
            href='https://www.youtube.com/@deogiriinstituteofengineer4233'
            target='_blank'
            className=''
          >
            {footerData.copyright}
          </a>
          <p className='mt-1'>
            <span>Developed by </span>
            <span className='font-semibold text-primary'>
              <a
                href='https://www.linkedin.com/in/ashish-rathi-a52749298/'
                target='_blank'
                className=''
              >
                Ashish Rathi
              </a>
            </span>
            <span> & </span>
            <span className='font-semibold text-primary'>
              <a
                href='https://www.linkedin.com/in/chiranjeev-singh-sandhu/'
                target='_blank'
                className=''
              >
                Chiranjeev Singh Sandhu
              </a>
            </span>
            (SY-CSE-A)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
