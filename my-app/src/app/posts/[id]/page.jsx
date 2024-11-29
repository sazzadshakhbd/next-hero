import React from "react";

const pstdetailsData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostDetailsPage = async ({ params }) => {
  const { title, body, id } = await pstdetailsData(params.id);
  return (
    <div className="border-2 p-5 m-3 h-screen">
      <h3 className="text-red-400">
        {id}. Title: {title}
      </h3>
      <p>{body}</p>
    </div>
  );
};
export default PostDetailsPage;
