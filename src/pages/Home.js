import { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { fetchCountry } from '../store/action';

let retrieveOnce = true;
const Home = () => {
  const country = useSelector((state) => state.rocket, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    if (retrieveOnce) {
      dispatch(fetchCountry());
      retrieveOnce = false;
    }
  }, [dispatch]);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
