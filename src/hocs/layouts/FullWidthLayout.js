import { Footer } from "components/navigation/footer";
import { Navbar } from "components/navigation/navbar";
import { connect } from "react-redux";

const FullWidthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, {})(FullWidthLayout);
