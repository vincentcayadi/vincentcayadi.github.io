import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { readFile } from "node:fs/promises";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

const dimensions = {
  width: 1200,
  height: 630,
};

interface Props {
  title: string;
}

export async function GET(context: APIContext) {
  const { title } = context.props as Props;

  const markup = html` <div
    tw="flex w-full h-full h-screen text-left bg-stone-200"
  >
    <h2 tw="flex flex-col text-gray-900 text-left self-end px-4">
      <span tw="font-bold tracking-tight text-3xl text-stone-900"
        >${title}</span
      >
      <span tw="text-stone-600">Vincent Cayadi</span>
    </h2>
  </div>`;

  const svg = await satori(markup, {
    fonts: [
      {
        name: "Inter",
        data: await readFile("./src/font/Inter-Bold.ttf"),
        weight: 400,
        style: "normal",
      },
    ],
    height: dimensions.height,
    width: dimensions.width,
  });

  const image = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: dimensions.width,
    },
  }).render();

  return new Response(image.asPng(), {
    headers: {
      "Content-Type": "image/png",
    },
  });
}

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  const paths = posts.map((post) => {
    const slug = post.id.replace(/\/index\.md$/, "");
    return {
      params: { slug },
      props: {
        title: post.data.title,
      },
    };
  });
  return paths;
}
