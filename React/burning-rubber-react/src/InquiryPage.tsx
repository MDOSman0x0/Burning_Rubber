import Header from "./Header";
import InquiryForm from "./InquiryForm";
import './InquiryPage.css';

function InquiryPage() {
  return (
    <>
      <Header />
      <h1 className="d-flex align-items-center justify-content-center mt-3 fs-2 text-danger"> Dealership Address </h1>
        <div id = "Address-Information">
               1234 Buy Your Car Here Road
        </div>

        <h1 className="d-flex align-items-center justify-content-center mt-3 fs-2 text-danger"> Phone Number </h1>
        <div id = "Phone-Information">
               (858) 999-1200  
        </div>
      <InquiryForm/>
      <footer className="d-flex align-items-center justify-content-center mt-3 border-top position-static fixed-bottom">
        {" "}
        <p className="text-muted"> Copyright &copy; Burning Rubber 2023</p>{" "}
      </footer>
    </>
    
  );
}

export default InquiryPage;
