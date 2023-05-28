import HomepageSideData from "../components/HomepageSideData";
import ListContent from "../components/ListContent";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <div className="list-content">
          {" "}
          <ListContent />
        </div>
        <div className="site-data">
          <HomepageSideData />
        </div>
      </div>
    </>
  );
};

export default Homepage;
