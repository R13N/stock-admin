import { Outlet } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>HOME PAGE</h1>
      <Outlet />
    </>
  )
}