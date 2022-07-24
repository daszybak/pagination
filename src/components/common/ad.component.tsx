import { Card, Text, Title } from "@mantine/core";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useGetAdByIdQuery } from "../../store/ads/ads.api";

interface AdProps {
  query: number | undefined;
}

const Ad: React.FC<AdProps> = ({ query }) => {
  const { data } = useGetAdByIdQuery(query ?? skipToken);

  return (
    <div style={{ width: "300px", margin: "4rem" }}>
      {data?.ad && (
        <Card shadow="sm" p="lq">
          <Title>Ad: {data.ad.title}</Title>
          <Text>Text: {data.ad.text}</Text>
        </Card>
      )}
    </div>
  );
};
export default Ad;
