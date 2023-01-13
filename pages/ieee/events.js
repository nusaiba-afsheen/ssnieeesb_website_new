import React from 'react';
import {Upcoming, Past} from '../../components/events';
import Navigation from '../../components/navbar';
import Head from 'next/head';
import upcoming_events from '../../public/data/ieee_cs/upcoming_events.json';
import past_events from '../../public/data/ieee_cs/past_events.json';
import {Nav, NavAcross} from "../../components/nav";


const Events = () => {
    
  return (
    <>
      <Head>
        <title>IEEE</title>
      </Head>
      <NavAcross></NavAcross>
      <Navigation team_home="/ieee" events="/ieee/events" gallery="/ieee/gallery"></Navigation>
      <Upcoming data={upcoming_events}></Upcoming>
      <Past data={past_events}></Past>
    </>
  );
};

export default Events;