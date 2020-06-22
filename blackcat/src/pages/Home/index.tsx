import React, { useState, useEffect } from 'react';
import PageLayout from '../../containers/PageLayout';
import Activity from '../../components/Activity/Activity';
import Header from '../../components/Bar/Bar'

const Home: React.FunctionComponent<{}> = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      fetch("http://localhost:4000/activities")
        .then(res => res.json())
        .then(res => setActivities(res))
      }
      fecthData();
    }
  );

  return (
    <PageLayout>
      <Header />
      {activities.map(activity => (
        <div>
          <Activity activity1={activity}/>
          <hr />
        </div>
      ))}
    </PageLayout>
  );
};

export default Home;