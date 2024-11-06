import Col_1 from "../components/Col_1";
import Col_2 from "../components/Col_2";
import Scrollbar from "../components/scrollbar";

const HomePage = () => {
  return (
    <div>
      <div className="flex gap-10">
        <Col_2/>
        <Col_1 />
        <Scrollbar />
      </div>
    </div>
  );
};

export default HomePage;
