import { FC, Fragment, Suspense, LazyExoticComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

type AppRoute = {
  component: FC | LazyExoticComponent<FC>;
  path: string;
};

const routes: AppRoute[] = [
  {
    component: () => <Fragment />,
    path: "/",
  },
  {
    component: () => <Navigate to="/" />,
    path: "*",
  },
];

const AppRoutes: FC = () => {
  const renderRoutes = (): JSX.Element[] => {
    return routes.map((route) => {
      const { path, component: Component } = route;
      return (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<Fragment />}>
              <Component />
            </Suspense>
          }
        />
      );
    });
  };

  return <Routes>{renderRoutes()}</Routes>;
};

export default AppRoutes;
