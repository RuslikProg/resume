import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Layout = ({data}) => {
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
    </div>
  )
}

export default Layout;