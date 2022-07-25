import { Card, Text, Title } from "@mantine/core";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useFindOneAdByIdQuery } from "../../store/graphql/graphql-generated";

interface AdProps {
  query: number | undefined;
}

const Ad: React.FC<AdProps> = ({ query }) => {
  console.log("query", query);

  const { data } = useFindOneAdByIdQuery(
    query ? { id: query } : undefined ?? skipToken
  );

  return (
    <div style={{ width: "300px", margin: "4rem" }}>
      {data?.findOneAd && (
        <Card shadow="sm" p="lq">
          <Title>Ad: {data?.findOneAd?.title}</Title>
          <Text>Text: {data?.findOneAd?.text}</Text>
        </Card>
      )}
    </div>
  );
};
export default Ad;
