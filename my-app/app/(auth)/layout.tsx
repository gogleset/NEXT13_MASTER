"use client";
import React from 'react';


const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <h1>
                login.layout
            </h1>
            <div>
                 {children}
            </div>
        </div>
    );
};

export default layout;