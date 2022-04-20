import type { NextPage } from "next";
import { Layout } from "../shared/components/layout/";





const Home: NextPage = () => {
  return (
    <Layout title='Freelo Budget'>
      <div className="projects">
        <div className="projects__filters flex w-full justify-center mb-4">
          <input type="text" className="p-2 w-8/12 rounded-r-none rounded-b-none rounded-t-md rounded-l-md" />
          <div className="projects__buttons">
            
          </div>
        </div>
        <div className="projects__results">
          <div className="projects__item">

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;



