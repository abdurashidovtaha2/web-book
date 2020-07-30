import React from 'react'
import { NetworkLogoViewProps } from './model'

export const NetworkLogoView: React.FC<NetworkLogoViewProps> = (props) => {
    return (
        <div>
            <img src={props.url} alt=""/>
        </div>
    )
}
