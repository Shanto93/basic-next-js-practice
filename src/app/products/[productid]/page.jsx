import React from 'react';

const DynamicID = ({params, searchParams}) => {
    console.log(params, searchParams);
    return (
        <div>
            This is dynamic product page {searchParams.category}.
        </div>
    );
};

export default DynamicID;