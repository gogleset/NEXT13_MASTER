import React from 'react';
type PageParams = {
  slug: string
}

const page = ({ params }: { params: PageParams }) => {
    console.log({params})
    return (
        <div>
            {params.slug}
        </div>
    );
};

export default page;