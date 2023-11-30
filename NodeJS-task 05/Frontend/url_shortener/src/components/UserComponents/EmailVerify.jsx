import { Fragment, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../../images/success.png";

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(false);
	const param = useParams();
    const verifyEmailUrl = async () => {
        try {
            const url = `https://url-shortener-83vp.onrender.com/user/${param.id}/verify/${param.token}`;
            const response = await axios.get(url);
            console.log(response.data.message);
            setValidUrl(true);
        } catch (error) {
            console.log(error.response.data.message);
            setValidUrl(false);
        }
    };
	useEffect(() => {

		verifyEmailUrl()
	}, [param]);

	return (
		<Fragment >
			{validUrl ? (
				<div className="container">
					<img src={success} alt="success_img"  />
					<h1>Email verified successfully</h1>
					<Link to="/login" style={{ color: "blue", wordSpacing: 2 }}>
						<button>Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</Fragment>
	);
};

export default EmailVerify;