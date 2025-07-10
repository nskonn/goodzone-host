import React, { Suspense } from 'react';
// @ts-ignore
const HomePageMF = React.lazy(() => import('home/HomePageMF'));

export const Home = () => {
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <HomePageMF />
        </Suspense>
    );
};
