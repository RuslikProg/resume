import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Layout = ({children,data}) => {

  return (
    <div className="container mx-auto">
        <Header
          data={data}
        />
        <Section
          data={data}
        />  
        <Footer
          data={data?.basics?.profiles}
        />
      {children}
    </div>
  )
}

export default Layout;