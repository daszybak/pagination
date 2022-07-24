import { Button, TextInput, Title } from "@mantine/core";
import React, { useState } from "react";
import Ad from "../../common/ad.component";

const SearchAd = () => {
  const [search, setSearch] = useState<string>("");
  const [query, setQuery] = useState<number | undefined>(undefined);

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFormOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(Number(search));
  };

  return (
    <div style={{ marginBottom: "4rem" }}>
      <Title>Search Ad</Title>
      <form onSubmit={handleFormOnSubmit}>
        <TextInput
          label="Search ad: "
          onChange={handleSearchOnChange}
          name="search"
          id="search"
          value={search}
        />
        <Button type="submit">Search</Button>
      </form>
      <Ad query={query} />
    </div>
  );
};
export default SearchAd;
