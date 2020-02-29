import React, { useEffect } from "react";

import { Grid, Paper, Container, Typography } from "@material-ui/core/";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";

interface iPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  categories: [string];
}

const API_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@siddharthparmar7";

const HTMLParser = new DOMParser();

const Posts: React.FC<{}> = () => {
  const [posts, setPosts] = React.useState<iPost[] | null>();
  const classes = useStyles();

  const getPosts = async () => {
    try {
      const res: Response = await fetch(API_URL);
      const data = await res.json();
      setPosts(data.items);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts);

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h3" align="center">
        Blog Posts
      </Typography>
      <Typography
        variant="caption"
        gutterBottom
        className={classes.sectionTitle}
      ></Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {posts?.map((post, index) => (
            <Grid
              key={post?.pubDate}
              item
              sm={index === 0 ? 8 : index === 1 ? 4 : 6}
            >
              <Card className={classes.card}>
                <CardActionArea href={post.link}>
                  <CardMedia
                    className={classes.image}
                    image={post.thumbnail}
                    title="blog picture"
                  />
                  <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post?.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="h6"
                    >
                      {post?.pubDate}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {post.description
                        .replace(/<\/?[^>]+(>|$)/g, "")
                        .slice(1, 200) + "..."}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button href={post.link} size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Posts;
