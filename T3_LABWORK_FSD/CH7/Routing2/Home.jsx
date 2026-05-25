
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1 style={{ color: 'blue' }}>welcome to our shop</h1>
            <Link to="/product">Go to Product Page</Link>
        </div>
    );
}

export default Home;
