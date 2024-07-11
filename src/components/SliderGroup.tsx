import SliderBar from '../components/SliderBar.tsx';
import '../styles/SliderGroup.css';

function SliderGroup({ pageSize, setPageSize }) {
  return (
    <>
      <div className="results-per-page"># of results per page</div>
      <div className="number-and-results flex">
        <div className="number">{pageSize}</div>
        <div className="results">results</div>
      </div>
      <SliderBar setPageSize={setPageSize} />
    </>
  );
}

export default SliderGroup;
