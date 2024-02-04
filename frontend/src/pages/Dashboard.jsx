import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard() {
  return <div className="bg-red">
    <div>
      <AppBar></AppBar>
      <Balance></Balance>
      <Users></Users>
    </div>
  </div>
}