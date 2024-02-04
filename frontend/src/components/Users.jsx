export function Users() {
  const array = [1,3,4,5];

  return <div className="flex flex-col gap-2 bg-white px-10 py-4">
    <h1 className="font-bold">Users</h1>
    <input placeholder="Search Users" className="border border-gray-400 rounded w-[50%] p-1" type="text"></input>
    {array.map(item => <User key={item}></User>)}
  </div>
}

export function User() {
  return <div className="flex items-center mb-1">
    <button className=" w-8 h-8 bg-gray-500 rounded-full text-white flex items-center justify-center">U</button>
    <h1 className="ml-3">User 1</h1>
    <button className="ml-auto p-4 h-8 bg-green-700 rounded-md text-white flex items-center justify-center">Send Money</button>
  </div>
}