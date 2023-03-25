import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

    return(
        <>
            <h3>Not Found</h3>
            <button onClick={() => navigate('/books')}>Redirect To Books</button>
        </>
    )
}

export default NotFound