import React from 'react';
import classname from 'classnames/bind';
import styles from './detail.module.scss';
import PageLayout from '../../containers/PageLayout';
import Bar from '../../components/Bar/Bar';
import Header from '../../components/Details/Head/DetailHeader';
import TimePlace from '../../components/Details/TimePlace/TimePlace';

const cx = classname.bind(styles)

const Detail: React.FunctionComponent<{}> = () => {
  return (
    <PageLayout>
      <Bar />
      <Header />
      <TimePlace />
    </PageLayout>
  );
};

export default Detail;