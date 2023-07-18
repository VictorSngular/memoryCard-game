import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  user: {} | null;
  children: ReactElement;
}
export const ProtectedRoute = ({ user, children }: Props) => {
  if (!user) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};
