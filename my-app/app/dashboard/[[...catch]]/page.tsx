import React from 'react';
type PageParams = {
  catch: string[] 
}

const page = ({ params }: { params: PageParams }) => {
    console.log({ params })

    return (
        <div>
            {params.catch ? params.catch.map((value) => {
                return (
                    <span className='mr-2'>
                        {value}
                    </span>
                )
            }): <span>not found params</span>}
        </div>
    );
};

export default page;