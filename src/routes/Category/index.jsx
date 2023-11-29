import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { addItemToCart } from '../../Store/Actions/UserAction';

export default function Category() {

	const { category } = useParams()
	const dispatch = useDispatch()
	const cartItems = useSelector((state) => state.user.cartItems)

	//TODO::This can be common func.
	const categoriesMap = useSelector((state) => state.user.categories.reduce((acc, category) => {
		const { title, items } = category;
		acc[title.toLowerCase()] = items;
		return acc;
	}, {}))

	const [products, setProducts] = useState(categoriesMap[category])

	/**Lifecycle method */
	useEffect(() => {
		setProducts(categoriesMap[category])
	}, [])

	return (
		<Container>
			<Row>
				<h2>{category.toUpperCase()}</h2>
				{products && products.map((product) => (
					<Col key={product.id} lg={4} className="mb-3">
						<div className="h-100 d-flex flex-column">
							<Card className="h-100 bg-dark text-white custom-card border-0">
								<Card.Img
									className="h-100"
									src={product.imageUrl}
									alt={product.name}
								/>
								<Card.ImgOverlay className="d-flex align-items-center justify-content-center custom-card-overlay">
									<Button onClick={() => dispatch(addItemToCart(cartItems, product))}>
										Add To Cart
									</Button>
								</Card.ImgOverlay>
							</Card>
							<p className="mb-0">{product.name}</p>
							<span className="mb-0 fw-light">Striped cotton Slim T-shirt</span>
							<div>
								<p className="mb-0 d-inline">Rs. {product.price}</p>
								<span className="ps-2 text-decoration-line-through fw-light">Rs. 699</span>
								<span className="ps-2 fw-light text-danger">(50% OFF)</span>
							</div>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	)
}
