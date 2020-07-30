import React from 'react';
import { GetAppViewProps } from './model';
import { GetAppView } from './GetAppView';


export const GetApp: React.FC = () => {
    const appStoreUrl: string = 'https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png';
    const googlePlayUrl: string = 'https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png';

    const stateProps: GetAppViewProps = {
        appStoreUrl,
        googlePlayUrl,
    }

    return GetAppView(stateProps);
}