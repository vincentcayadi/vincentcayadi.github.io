import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { readFile } from "node:fs/promises";
import { getCollection } from "astro:content";
import type { APIContext, GetStaticPaths, GetStaticPathsItem } from "astro";
import { defaultMeta } from "@consts";

const dimensions = {
  width: 800,
  height: 400,
};

interface Props {
  title: string;
}

export async function GET(context: APIContext) {
  const { title } = context.props as Props;

  const markup = html`
    <div tw="flex w-full h-full h-screen text-left bg-stone-200">
      <h2 tw="flex flex-col text-gray-900 text-left self-end px-8 py-2">
        <span tw="font-bold tracking-tighter text-5xl text-stone-900 py-2"
          >${title}</span
        >
        <span tw="text-stone-600 text-3xl">Vincent Cayadi</span>
      </h2>
    </div>
  `;

  const svg = await satori(markup, {
    fonts: [
      {
        name: "Inter",
        data: await readFile("./src/font/Helvetica-Bold-Font.ttf"),
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

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection("blog");
  const paths: GetStaticPathsItem[] = posts.map((post) => {
    return {
      params: { slug: `blog/${post.slug}` },
      props: {
        title: post.data.title,
      },
    };
  });

  paths.push(
    {
      params: { slug: "blog" },
      props: {
        title: "Blogs",
      },
    },
    {
      params: { slug: `${defaultMeta.title}` },
      props: {
        title: "Home",
      },
    }
  );

  return paths;
};
