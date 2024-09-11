import React from "react";

const PostData = async () => {
  const res = await fetch("http://localhost:5000/posts",{
    next:{
        revalidate: 5,
    }
  });
  const data = await res.json();
  // console.log(data);

  throw new Error("Something wrong");

  return (
    <div>
      {data.map((item) => (
        <>
          <p>{item.title} </p>
          <p>{item.views} </p>
        </>
      ))}
    </div>
  );
};

export default PostData;
