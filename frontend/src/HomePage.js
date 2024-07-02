import { Link } from 'react-router-dom';
function HomePage() {
    return (
      <div>
        <h1>Welcome to Our Animation Platform</h1>
        <Link to="/manage-animations" style={{ padding: '10px', color: 'blue' }}>Manage Animations</Link>
        {/* Other content */}
      </div>
    );
  }
  
  export default HomePage;