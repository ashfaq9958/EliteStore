import SuspenseFallback from "@/components/suspenceFallback/SuspenseFallback";
import { Suspense, type JSX } from "react";

export const withSuspense = (element: JSX.Element) => (
  <Suspense fallback={<SuspenseFallback />}>{element}</Suspense>
);
