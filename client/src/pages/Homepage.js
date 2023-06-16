import { useEffect } from "react";
import HomepageSideData from "../components/HomepageSideData";
import ListContent from "../components/ListContent";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";

const Homepage = () => {
  const { top5, top5thread, stat, metrics } = useFetch();

  useEffect(() => {
    setTimeout(() => {
      top5();
      stat();
    }, 2000);
  }, []);
  return (
    <>
      {Object.keys(top5thread).length === 0 ? (
        <Loading />
      ) : (
        <div className="homepage">
          <div className="list-content">
            <ListContent data={top5thread} heading={"Top Threads"} />
          </div>
          <div className="site-data">
            <HomepageSideData data={metrics} />
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
