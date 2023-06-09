import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import ListContent from "../components/ListContent";

const View = ({ allThreads }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataThreads, setDataThreads] = useState([]);
  const itemsPerPage = 5; // Number of items to display per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const totalPages = Math.ceil(allThreads.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setDataThreads(allThreads.slice(startIndex, endIndex));
  }, [allThreads, startIndex, endIndex]);

  return (
    <Box sx={{ width: "80%", margin: "auto" }}>
      <ListContent data={dataThreads} heading={"Threads"}></ListContent>;
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          width: "30%",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          variant="outlined"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button variant="outlined">{currentPage}</Button>
        <Button
          variant="outlined"
          onClick={nextPage}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default View;
