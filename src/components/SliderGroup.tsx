import SliderBar from '../components/SliderBar.tsx';
import '../styles/SliderGroup.css';

function SliderGroup() {
  return (
    <>
      <div className="results-per-page"># of results per page</div>
      <div className="number-and-results flex">
        <div className="number">30</div>
        <div className="results">results</div>
      </div>
      <SliderBar />
    </>
  );
}

export default SliderGroup;
