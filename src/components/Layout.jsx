import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, cart }) {
  return (
    <div className="nearstore-layout">
      <Header cart={cart} />
      <main className="nearstore-layout__main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
