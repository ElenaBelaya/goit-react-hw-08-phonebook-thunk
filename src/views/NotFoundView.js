import { Link } from 'react-router-dom';

const NotFoundView = () => {
  return (
    <h2>
      Error 404. Sorry, but this page is not found. Follow this link {''}
      <Link to="/">Home</Link>.
    </h2>
  );
};

export default NotFoundView;
