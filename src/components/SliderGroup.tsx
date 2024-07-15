import SliderBar from '../components/SliderBar.tsx';
import '../styles/SliderGroup.css';

interface SliderGroupProps {
  pageSize: number;
  setPageSize: (value: number) => void;
}

function SliderGroup({ pageSize, setPageSize }: SliderGroupProps) {
  return (
    <>
      <div className="results-per-page"># Of Results Per Page</div>
      <div className="number-and-results flex">
        <div className="number">{pageSize}</div>
        <div className="results">results</div>
      </div>
      <SliderBar setPageSize={setPageSize} />
    </>
  );
}

export default SliderGroup;
