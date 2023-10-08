import React from "react";
import Navbar from "../Components/Navbar";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Pic2 from "./Assests/Jpgg.webp";
import Pic1 from "./Assests/fp-home.jpg";
import Pic3 from "./Assests/Delivery-Hero-enters-Japan-1200x800.jpg";
import Pic4 from "./Assests/Picture 4.jpg";
import Pic5 from './Assests/6047233bcbed2.jpg'
import Pic6 from './Assests/Foodpanda-Services.jpg'
import Pic7 from './Assests/How-To-Make-Food-Delivery-App-Like-FoodPanda-in-Singapore.png'
import Pic8 from './Assests/Pandas.jpg'
import Pic9 from './Assests/how-to-register-restaurant-in-foodpanda.jpg'
import Pic10 from './Assests/brand-banner.jpeg'
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <img className="w-full  max-w-full" src={Pic2}></img>
      </div>
      <div>
        <div className="bg-gray-900">
          <Container>
            <p className="text-white h-80 font-bold text-4xl mb-20 flex justify-center items-center relative bottom-10 mt-11">
              We’re here to help you live life the panda way. Spend more time
              doing what you love – we’ll take care of tasty meals, fresh
              groceries and new flavours.
            </p>
          </Container>
        </div>

        <div className="container  flex justify-center items-center mt-6">
          <div className="ml-24 h-64">
            <img className="h-full rounded w-full" src={Pic1}></img>
          </div>
          <div className="relative left-3 top-3">
            <p className="ml-8 mb-9 text-gray-700 font-bold text-5xl">
              Meet the next generation of delivery!{" "}
            </p>
            <p className="ml-8 mb-8">
              What makes quick commerce quick? We stand for swift personalised
              delivery solutions for our customers, partners and employees.
              Learn how we empower authentic lifestyles and drive innovation
              across the globe.
            </p>
            <button className="ml-5 mb-5 border-2 border-white bg-pink-500 flex  rounded-full px-9 py-3 text-white hover:bg-pink-600 font-bold">
              Read Our Story
            </button>
          </div>
        </div>

        <div className="container  flex justify-center items-center mt-32">
          <div className="relative left-11 top-3">
            <p className="ml-40 mb-9 text-gray-700 font-bold text-5xl">
              Taste the convenience.{" "}
            </p>
            <p className="ml-16 mb-8 text-base">
              Try us out! Delicious food and speedy groceries are at your
              fingertips. Go ahead, download foodpanda now.
            </p>
            <div className="flex space-x-6 justify-center items-center">
              <button className="ml-11 mb-5 border-2 border-gray-400 bg-pink-600 flex  rounded-full px-6 py-3 text-white hover:bg-pink-700 font-bold">
                Download On Apple Phone
              </button>
              <button className="ml-5 mb-5 border-2 border-gray-400 bg-pink-600 flex  rounded-full px-9 py-3 text-white hover:bg-pink-700 font-bold">
                Download On Andriod
              </button>
              <button className="ml-5 mb-5 border-2 border-gray-400 bg-pink-600 flex  rounded-full px-9 py-3 text-white hover:bg-pink-700 font-bold">
                Read Our MicroSoft
              </button>
            </div>
          </div>
          <div className="ml-24 h-64">
            <img className="h-full  w-full pr-24 rounded" src={Pic3}></img>
          </div>
        </div>
      </div>

      <div className="container  flex justify-center items-center mt-20 pl-20">
        <div className="ml-24 h-64">
          <img className="h-full rounded w-full" src={Pic4}></img>
        </div>
        <div className="relative left-3 top-3">
          <p className="ml-8 mb-9 text-gray-700 font-bold text-5xl">
            Find the job you'd love
          </p>
          <p className="ml-8 mb-8">
            Hungry to make a difference? There’s a seat at our table!
            <br />
            <br />
            Find out how we connect tech, passions, projects and people –
            explore international career opportunities at foodpanda.
          </p>
          <button className="ml-5 mb-5 border-2 border-white bg-pink-500 flex  rounded-full px-9 py-3 text-white hover:bg-pink-600 font-bold">
            Join us
          </button>
        </div>
      </div>
      <div className="my-8">
        <p className="text-5xl font-bold flex justify-center items -center pt-2 py-7 text-gray-700">
          Have you heard?{" "}
        </p>
        <Typography
          style={{
            fontWeight: "lighter",
            paddingBottom: "16px",
          }}
          variant="body1"
          align="center"
        >
          The industry is changing fast! Stay up to date with foodpanda press.
          Catch up on the lates news, updates and reports here.
        </Typography>
      </div>
      <Container>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="240" image={Pic5} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                FoodPanda Restaurant Selection
                </Typography>
                <Typography variant="body2" color="text.secondary">
                FoodPanda offers a diverse selection of restaurants for you to choose from. Whether you're in the mood for local cuisine, international flavors, or fast food classics, you can find a restaurant that suits your cravings on the platform.
                </Typography>
              </CardContent>
              
             
            </Card>
          </Grid>
          <Grid item xs={2}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="240" image={Pic6} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Cuisine Diversity
                </Typography>
                <Typography variant="body2" color="text.secondary">
                FoodPanda features a wide range of cuisines, including Italian, Chinese, Indian, Mexican, and more. Explore the rich tapestry of flavors available from different restaurants, allowing you to indulge in a variety of taste experiences without leaving your home.
                </Typography>
              </CardContent>
              
            </Card>
          </Grid>
          <Grid item xs={2}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="240" image={Pic7} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Restaurant Ratings and Reviews
                </Typography>
                <Typography variant="body2" color="text.secondary">
                oodPanda provides user ratings and reviews to help you make informed decisions. Check out what other customers have to say about a particular restaurant's food quality, delivery speed, and overall experience before placing your order.
                </Typography>
              </CardContent>
             
            </Card>
          </Grid>
          <Grid item xs={2}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="240" image={Pic8} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Exclusive Deals and Discounts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                : Discover exclusive deals and discounts when you order from FoodPanda restaurants. Many restaurants offer special promotions and combos, allowing you to save money while enjoying delicious meals.
                </Typography>
              </CardContent>
              
            </Card>
          </Grid>
          <Grid item xs={2}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="240" image={Pic9} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Customized Ordering:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                FoodPanda's platform allows you to customize your orders to match your preferences. Whether you want extra cheese on your pizza or specific dietary accommodations, you can often make special requests when placing your order.
                </Typography>
              </CardContent>
             
            </Card>
          </Grid>
          <Grid item xs={2}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="240" image={Pic10} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Convenient Delivery Options
                </Typography>
                <Typography variant="body2" color="text.secondary">
                FoodPanda offers various delivery options, including express delivery for those who are in a hurry and scheduled deliveries for planning ahead. You can track your order in real-time to know when your food will arrive.
                </Typography>
              </CardContent>
              
            </Card>
          </Grid>
        </Grid>
      </Box>
      </Container>


<Footer/>


    </>
  );
};

export default Home;
