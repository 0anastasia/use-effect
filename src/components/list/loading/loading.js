import './loading.css';
import handling from '../../../img/shark.svg';

export default function Loading() {
  return (
    <img
      className="Loading"
      src={handling}
      alt="loading process"
    />
  );
}