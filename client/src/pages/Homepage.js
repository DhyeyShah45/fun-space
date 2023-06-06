import { useEffect } from "react";
import HomepageSideData from "../components/HomepageSideData";
import ListContent from "../components/ListContent";
import { useFetch } from "../hooks/useFetch";

const Homepage = () => {
  const { top5, top5thread, stat, metrics } = useFetch();

  useEffect(() => {
    top5();
    stat();
  }, [top5thread]);
  return (
    <>
      <div className="homepage">
        <div className="list-content">
          <ListContent data={top5thread} heading={"Top Threads"} />
        </div>
        <div className="site-data">
          <HomepageSideData data={metrics} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
