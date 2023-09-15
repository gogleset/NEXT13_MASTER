import React from 'react';
type PageParams = {
  catch: string[] 
}

const page = ({ params }: { params: PageParams }) => {
    console.log({params})
    return (
        <div>
            {params.catch.map((value) => {
                return (
                    <span className='mr-2'>
                        {value}
                    </span>
                )
            })}
        </div>
    );
};

export default page;