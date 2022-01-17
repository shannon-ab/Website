import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';

const TeamPage = () => {
  const imagePaths = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativeDirectory: { ne: "" } }
        sort: { fields: base }
      ) {
        nodes {
          base
          publicURL
        }
      }
    }
  `).allFile.nodes;

  return (
    <Layout>
      <Header />
      <section id="team" className="bg-white">
        {/*Write your code below*/}
      </section>
    </Layout>
  );
};

export default TeamPage;
