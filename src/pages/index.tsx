import type { NextPage } from "next";
import { SearchAd, SearchAds } from "../components/layouts";
import CreateAd from "../components/layouts/create-ad/create-ad.component";

const Home: NextPage = () => {
  return (
    <div>
      <CreateAd />
      <SearchAd />
      <SearchAds />
    </div>
  );
};

export default Home;
