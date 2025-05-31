const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function Page({ params }) {
  const posts = await fetchData();
  console.log(posts);
  const { username } = await params;

  return (
    <>
      <h1>This is the user: {username}</h1>
      {posts.map((post) => (
        <p key={post.id}> {post.title}</p>
      ))}
    </>
  );
}
