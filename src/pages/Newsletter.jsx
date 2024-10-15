import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	try {
		const response = await axios.post(newsletterUrl, data);
		//console.log(response);

		toast.success(response.data.msg);
		return redirect("/");
	} catch (error) {
		//console.log(error);
		toast.error(error?.response?.data?.msg);
		return error;
	}
};

const Newsletter = () => {
	const isSubmitting = useNavigation().state === "submitting";
	return (
		<Form
			className='form'
			method='POST'>
			<h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
				our newsletter
			</h4>
			{/* firstname */}
			<div className='form-row'>
				<label
					htmlFor='firstname'
					className='form-label'>
					first name
				</label>
				<input
					type='text'
					className='form-input'
					name='firstname'
					id='firstname'
					required
				/>
			</div>
			{/* lastname */}
			<div className='form-row'>
				<label
					htmlFor='lastname'
					className='form-label'>
					last name
				</label>
				<input
					type='text'
					className='form-input'
					name='lastname'
					id='lastname'
					required
				/>
			</div>
			{/* email */}
			<div className='form-row'>
				<label
					htmlFor='email'
					className='form-label'>
					email
				</label>
				<input
					type='email'
					className='form-input'
					name='email'
					id='email'
					defaultValue='test@mail.com'
					required
				/>
			</div>
			<button
				type='submit'
				className='btn btn-block'
				style={{ marginTop: "0.5rem" }}
				disabled={isSubmitting}>
				{isSubmitting ? "submitting..." : "submit"}
			</button>
		</Form>
	);
};
export default Newsletter;
