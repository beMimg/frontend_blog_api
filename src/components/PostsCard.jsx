import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <Link
      to={`/posts/${post._id}`}
      key={post._id}
      className="relative grid h-36 max-w-[400px] grid-cols-10 rounded-xl p-2.5 shadow-md md:h-56 lg:h-64 lg:max-w-full"
    >
      <div className="col-span-4 rounded-md bg-pink-200 md:col-span-5"></div>
      <div className="col-span-6 flex flex-col justify-between py-3 pl-2 md:col-span-5 ">
        <h1 className="w-full font-medium">{post.title}</h1>
        <p className="reverseTheme w-min rounded-md bg-gray-700 px-6 text-sm ">
          {post.topic}
        </p>
        <div className="flex flex-row items-center justify-between">
          <p className="text-sm font-light opacity-80">
            {post.author.username}
          </p>
          <p className="text-xs opacity-40">{post.formated_date}</p>
        </div>
      </div>
    </Link>
  );
}
