"use client";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

export default function DefaultSeoClient(): JSX.Element {
  return <DefaultSeo {...SEO} />;
}
