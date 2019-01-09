import ContentLoader from "react-content-loader"
import React, { Component } from 'react'

const MyLoader = props => (
    <>
    <div className="card row ml-0">
        <div className="">
        	<ContentLoader
                rtl
                height={80}
                width={400}
                speed={2}
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
                {...props}
            >
                <rect x="18" y="16" rx="4" ry="4" width="117" height="6.4" />
                <rect x="146" y="17.27" rx="3" ry="3" width="47.6" height="3.58" />
                <rect x="18" y="35" rx="3" ry="3" width="259" height="10.69" />
                <rect x="18" y="55.67" rx="3" ry="3" width="349.6" height="4.93" />
                <rect x="19" y="65.61" rx="3" ry="3" width="307.53" height="4.93" />
            </ContentLoader>
        </div>
    </div>
    <div className="gap-5"></div>
    </>
)
export default MyLoader