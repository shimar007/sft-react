import { useNavigate } from "react-router-dom";

function BackButton () {
   
    let navigate = useNavigate();

    return (
        <>
          <a href="/#" onClick={() => navigate(-1)} className="back-button">Back</a>
        </>
    );
};

export default BackButton;