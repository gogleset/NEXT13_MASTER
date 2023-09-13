import React from 'react';
type PageParams = {
    slug: string,
    id: string
}

const page = ({ params }: { params: PageParams }) => {
    console.log({params})
    return (
        <div>
            {params.slug} / {params.id}
        </div>
    );
};

export default page;