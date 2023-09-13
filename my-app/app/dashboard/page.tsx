import React from 'react';

const page = ({children} : {children: React.ReactNode}) => {
    return (
        <div>
            <div>
                page
            </div>
            <div>{children}</div>
        </div>
    );
};

export default page;