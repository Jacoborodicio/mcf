/** @jsx jsx **/
import React from 'react';
import {css, jsx} from "@emotion/react";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, Container, styled} from "@mui/material";
import { Link } from 'react-router-dom';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to={{pathname: 'https://jacoborodicio.com'}} target={'_blank'}>
        jacoborodicio.com
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const HeroContent = styled('div')`
  background-color: lightgrey;
  padding: 2rem;
`;

const HeroButtons = styled('div')`
  margin-top: 1rem;
`;

const CardGrid = styled(Container)`;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Footer = styled('footer')`
  padding: 1rem;
  background-color: lightgrey;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <HeroContent>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Home Page
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <HeroButtons>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <StyledLink to="/pricing">
                    <Button variant="contained" color="primary">
                      Pricing
                    </Button>
                  </StyledLink>
                </Grid>
                <Grid item>
                  <StyledLink to="/pricing">
                    <Button variant="outlined" color="primary">
                      Pricing
                    </Button>
                  </StyledLink>
                </Grid>
              </Grid>
            </HeroButtons>
          </Container>
        </HeroContent>
        <CardGrid maxWidth="md" css={css`padding-top: 3rem`}>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card css={css`
                  height: 100%;
                  display: flex;
                  flex-direction: column;`}>
                  <CardMedia
                    css={css`padding-top: 56.25%;`}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent css={css`flex-grow: 1`}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions css={css`justify-content: flex-end`}>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardGrid>
      </main>
      {/* Footer */}
      <Footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Footer>
      {/* End footer */}
    </React.Fragment>
  );
}
