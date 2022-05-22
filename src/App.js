import { Route, Routes } from "react-router-dom";
import AddAReview from "./pages/Dashboard/AddAReview";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyProfile from "./pages/Dashboard/MyProfile";
import { publicRoutes } from "./routes/publicRoutes";
import Footer from "./shared/Footer";

function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route path={path} key={index} element={<Component />} />
        ))}
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="my-profile" element={<MyProfile />}></Route>
          <Route path="my-orders" element={<MyOrders />}></Route>
          <Route path="my-reviews" element={<AddAReview />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
