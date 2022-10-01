import { FallingLines } from 'react-loader-spinner';
import { Loading } from './Loader.styled';

const Loader = () => {
  return (
    <Loading>
      <FallingLines
        color="#01000f67"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </Loading>
  );
};
export default Loader;
