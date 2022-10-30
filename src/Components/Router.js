import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "Routes/Auth";
import { Home } from "Routes/Home";
import { Navigation } from "Components/Navigation";
import { Profile } from "Routes/Profile";

export const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <div
        style={{
          maxWidth: 890,
          width: "100%",
          margin: "0 auto",
          marginTop: 80,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Routes>
          {isLoggedIn ? (
            <>
              <Route exact path="/" element={<Home userObj={userObj} />} />
              <Route
                exact
                path="/profile"
                element={
                  <Profile userObj={userObj} refreshUser={refreshUser} />
                }
              />
            </>
          ) : (
            <Route exact path="/" element={<Auth />} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
