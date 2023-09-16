import { Helmet } from 'react-helmet';


const Layout = ({ title, content, children }) => (
    <>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={content} />
        </Helmet>
        {/* <Navbar /> */}
        <div className="">
            {children}
        </div>
    </>
)

export default Layout;