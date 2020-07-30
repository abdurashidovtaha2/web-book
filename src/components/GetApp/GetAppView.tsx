import React from 'react'
import { GetAppViewProps } from './model'

export const GetAppView: React.FC<GetAppViewProps> = (props) => {
    return (
        <div>
            <p>Get the app.</p>
            <img src={props.appStoreUrl} alt="" />
            <img src={props.googlePlayUrl} alt="" />
        </div>
    )
}