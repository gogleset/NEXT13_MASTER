const url = "https://jsonplaceholder.typicode.com"
const getPosts = async () => {
  

  // 2초 후에 요청 보내기
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const response = await fetch(`${url}/posts`);
  return await response.json();

}


export {getPosts}