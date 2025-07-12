import React, { Suspense } from 'react';

// @ts-ignore
const HomePageModule = React.lazy(() => import('home/HomePageModule'));

export const Home = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <HomePageModule />
        </Suspense>
    );
};

export default Home;
