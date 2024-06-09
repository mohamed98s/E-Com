import React, { Suspense } from "react";
import LottieHandler from "../LottieHandler/LottieHandler";

export default function PageSuspenseFallback({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <LottieHandler type="loading" message="loading please wait..." />
      }
    >
      {children}
    </Suspense>
  );
}
