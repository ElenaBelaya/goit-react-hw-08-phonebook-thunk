import { Audio } from 'react-loader-spinner';
import { Load } from './Loader.Styled';

const Loader = () => {
  return (
    <Load>
      <Audio />
    </Load>
  );
};

export default Loader;
