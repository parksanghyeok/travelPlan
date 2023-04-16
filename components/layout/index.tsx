const Layout = ({ children }: any) => {
  return (
    <div>
      <div className="w-full h-[100vh] flex">
        { children }
      </div>
    </div>
  )
};

export default Layout;

