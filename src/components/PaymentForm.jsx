import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button, CardBody, Card, Form } from 'react-bootstrap'

function PaymentForm() {


	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event) => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}

		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({ amount: 100 })
		})
		console.log(response)
	};

	return (
		<Card>
			<CardBody>
				<Form onSubmit={handleSubmit}>
					<CardElement className="mb-5" />
					<Button>Pay Now</Button>
				</Form>
			</CardBody>
		</Card>
	)
}
export default PaymentForm;