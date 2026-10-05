import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "../../blog-posts.json";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.href.replace("/blog/", "") }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.href === `/blog/${slug}`);

  if (!post) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex w-[90%] max-w-[1000px] flex-col items-center px-2 py-32 text-center">
        <Link
          className="mb-8 self-start text-sm font-bold tracking-[2px] text-brand-blue hover:underline"
          href="/#blog"
        >
          ← VOLTAR PARA O BLOG
        </Link>
        <Image
          src={post.image}
          alt={post.alt}
          width={post.width}
          height={post.height}
          className="mb-10 h-auto max-h-[520px] w-full rounded-2xl object-cover"
          priority
        />
        <p className="mb-4 text-sm font-bold tracking-[4px] text-brand-blue">BLOG</p>
        <h1 className="max-w-4xl text-4xl leading-tight font-bold text-brand-blue max-[767px]:text-3xl">
          {post.title}
        </h1>
        <p className="mt-8 max-w-3xl whitespace-pre-line text-left text-lg leading-8 text-[#555]">
          {post.excerpt.replace(/^Blog\s+/, "")}
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
