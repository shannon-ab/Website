import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import config from '../../config';

import Layout from '../components/Layout';
import Header from '../components/Header';
import TeamCard from '../components/TeamCard';

import unknown_person from '../assets/images/unknown_person.jpg';

const TeamPage = () => {
  const nodes = useStaticQuery(graphql`
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
      <section id="team" className="bg-white" style={{ paddingTop: '75px' }}>
        <div className="container">
          <div className="w-50 my-5 ml-4" style={{ fontSize: '16px' }}>
            <h1
              className="text-dark mr-5 mb-3"
              style={{ fontSize: 'xxx-large' }}
            >
              {config.team.heading}
            </h1>
            <p className="text-muted">{config.team.subHeading}</p>
          </div>
          {config.team.groups.map((group) => {
            return (
              <div className="ml-4">
                <h2>{group.heading}</h2>
                <div className="row">
                  {group.members.map((member) => {
                    const node = nodes.find(({ base }) => base === member.img);
                    return (
                      <TeamCard
                        name={member.name}
                        position={member.position}
                        image={node ? node.publicURL : unknown_person}
                        alt={member.alt}
                        contact={member.contact}
                      ></TeamCard>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;
