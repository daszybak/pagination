import { Pagination, Title } from "@mantine/core";

const SearchResults = () => {
  return (
    <div style={{ marginBottom: "4rem" }}>
      <Title>Search Ads</Title>
      <Pagination total={5} />
    </div>
  );
};
export default SearchResults;
