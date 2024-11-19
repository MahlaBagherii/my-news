import Slider from "../components/Slider";
import Sport_1 from "../components/Sport_1";
import Sport_2 from "../components/Sport_2";
import Sport_3 from "../components/Sport_3";
import Sport_4 from "../components/Sport_4";

const Sport = () => {
  return (
    <div>
      <div className="flex gap-8">
        <Sport_1 />
        <Sport_2 />
        <Sport_3 />
      </div>
    </div>
  );
};

export default Sport;
