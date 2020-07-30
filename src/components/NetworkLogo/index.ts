import React from 'react'
import { NetworkLogoViewProps } from './model';
import { NetworkLogoView } from './NetworkLogoView';

export const NetworkLogo: React.FC = () => {
    const url: string = 'https://i0.wp.com/www.euroscientist.com/wp-content/uploads/2019/06/cropped-social-media-3846597_1280-1.png?resize=672%2C372&ssl=1';

    const stateProps: NetworkLogoViewProps = {
        url
    }

    return NetworkLogoView(stateProps);
}
