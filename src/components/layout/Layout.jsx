import './layout.scss';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div className="layout__wrap">
        { children }
      </div>
    </div>
  )
}

export default Layout