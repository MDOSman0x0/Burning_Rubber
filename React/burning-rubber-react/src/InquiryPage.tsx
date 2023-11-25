import Header from "./Header";
import InquiryForm from "./InquiryForm";
import './InquiryPage.css';

function InquiryPage() {
  return (
    <>
      <Header />
      <h2> Dealership Address </h2>
        <div id = "Address-Information">
               1234 Buy Your Car Here Road
        </div>

        <h2> Phone Number </h2>
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
