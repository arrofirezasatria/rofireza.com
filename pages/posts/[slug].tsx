import React from "react";
import Head from "next/head";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from ".contentlayer/generated";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { useMDXComponent } from "next-contentlayer/hooks";

// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { useTheme, alpha, styled } from "@mui/material/styles";

import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import ContainerHero from "components/ContainerHero";
import { Box, Stack, Avatar, Divider } from "@mui/material";
import ImageMDX from "components/mdxcomponents/ImageMDX";

import {
  TypographyH1,
  TypographyH3,
  TypographyH2,
  TypographyH4,
  ParagraphMDX,
  BlockquoteMDXX,
  BlockquoteWarning,
  PreMDX,
  AlinkMDX,
  LiMDX,
} from "components/post/TextComponent";

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post: Post = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  );
  return {
    props: {
      post,
    },
  };
}

const mdxComponents = {
  h1: (props) => <TypographyH1 {...props} />,
  h2: (props) => <TypographyH2 {...props} />,
  h3: (props) => <TypographyH3 {...props} />,
  h4: (props) => <TypographyH4 {...props} />,
  p: (props) => <ParagraphMDX {...props} />,
  ImageMDX: (props) => (
    <ImageMDX layout={"intrinsic"} width={720} height={405} {...props} />
  ),
  blockquote: (props) => <BlockquoteMDXX {...props} />,
  li: (props) => <LiMDX {...props} />,
  pre: (props) => <PreMDX {...props} />,
  a: (props) => <AlinkMDX {...props} />,
  BlockquoteWarning: (props) => <BlockquoteWarning {...props} />,
  // table: (props) => <TableMDX />,
  // td: (props) => <TdMDX />,
  // th: (props) => <ThMDX />,
};

const PostLayout = ({ post }: { post: Post }) => {
  const Component = useMDXComponent(post.body.code);
  const theme = useTheme();
  // // console.log(post);
  // React.useEffect(() => {
  //   Prism.highlightAll();
  // }, []);

  return (
    <ContainerHero variantContainer="blog">
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="max-w-xl mx-auto py-8">
        <Box sx={{ mb: 1 }}>
          <Typography
            component="time"
            variant="subtitle2"
            sx={{ fontWeight: 400 }}
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </Typography>
          <Typography
            component="h1"
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: "40px",
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.grey[200]
                  : theme.palette.grey[900],
            }}
          >
            {post.title}
          </Typography>
          <Stack
            sx={{
              justifyContent: "space-between",
              pt: {
                xs: 1,
                md: 1,
              },
              alignItems: "center",
              pb: 1,
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.grey[200]
                  : theme.palette.grey[900],
            }}
            direction="row"
          >
            <Stack direction="row" spacing={1} sx={{ alignItems: "inherit" }}>
              <Avatar
                sx={{
                  width: "24px",
                  height: "24px",
                }}
              >
                A
              </Avatar>
              <Typography
                component="h4"
                variant="subtitle1"
                sx={{
                  paddingTop: "2px",
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Rubik",
                }}
              >
                Arrofi Reza Satria
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ alignItems: "baseline" }}>
              <Typography
                component="p"
                variant="subtitle1"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Rubik",
                }}
              >
                10 min read
              </Typography>
              <Typography component="span" sx={{}}>
                &bull;
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  fontFamily: "Rubik",
                }}
              >
                213 views
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Component components={mdxComponents} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "16px",
          }}
        >
          <Button
            component={Link}
            href="www.google.com"
            endIcon={
              <CreateIcon
                sx={{
                  height: "16px",
                  width: "16px",
                  paddingTop: "0px",
                }}
              />
            }
            sx={{
              fontWeight: 400,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Edit this page
          </Button>
        </Box>
      </article>
    </ContainerHero>
  );
};

export default PostLayout;
