import React from "react";
import { Redirect, Route, Navigate } from "react-router-dom";

export default function ProtectedRoute({ prefix, children }) {
  const isAuthenticated = localStorage.getItem(prefix + "Token") != null;
  console.log("this", isAuthenticated);
  return isAuthenticated === true ? (
    children
  ) : (
    <Navigate to={"/" + prefix + "/login"} replace />
  );
}
