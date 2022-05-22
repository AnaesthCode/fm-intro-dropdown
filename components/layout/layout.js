import MainHeader from "./main-header";
import c from "./layout.module.css";
const Layout = (props) => {
  return (
    <>
      <MainHeader />
      <main className={c.main}>{props.children}</main>
    </>
  );
};

export default Layout;
