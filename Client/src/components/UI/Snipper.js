import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="text-center mt-5">
      <Spinner animation="grow" variant="secondary" />
    </div>
  );
};

export default Loading;
