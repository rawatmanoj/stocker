import React from "react";

export default async function page({ params }: { params: { slug: string } }) {
  let data = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${params.slug[0]}&apikey=KD810N393AZ6VSRK`
  ).then((res) => res.json());
  return <div>pages</div>;
}
