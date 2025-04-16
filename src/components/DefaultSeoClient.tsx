"use client";

import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

export default function DefaultSeoClient(): React.ReactElement {
  return <DefaultSeo {...SEO} />;
}
