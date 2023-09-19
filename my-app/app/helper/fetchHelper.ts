const url = "https://jsonplaceholder.typicode.com"
const getPosts = async () => {
  // 2초 후에 요청 보내기
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const response = await fetch(`${url}/posts`);
  return await response.json();
}

const getPostId = async (id:number) => {
  // 4초 후에 요청 보내기
  await new Promise(resolve => setTimeout(resolve, 4000));
  
  const response = await fetch(`${url}/posts/${id}`);
  return await response.json();
}



export {getPosts, getPostId}