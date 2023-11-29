import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Error404() {

   /**useNavigate hook used to navigate to the Home page */
   const navigate = useNavigate();

   return (
      <Container className='flex-grow-1 d-flex align-items-center justify-content-center'>
         <div className='text-center'>
            <p className='text-primary fw-bold mb-0'>404</p>
            <h1>Page not found</h1>
            <p>Sorry, we couldn’t find the page you’re looking for.</p>
            <Button onClick={() => navigate('/')}>Go Back Home</Button>
         </div>
      </Container>
   )
}
