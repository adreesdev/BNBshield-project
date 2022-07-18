import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/footer/Footer";

import Header from "../components/header/Header";
import Home1 from "../components/home/Home1";
import Home2 from "../components/home/Home2";
import Home3 from "../components/home/Home3";

const Home = () => {
	return (
		<>
			<Box position="relative">
				<Box
					sx={{
						backgroundImage: {
							sm: `url(${"/assets/images/background/desktopbg1.png"})`,
							xs: `url(${"/assets/images/background/mobilebg1.png"})`,
						},
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
					}}
				>
					<Header />
					<Home1 />
				</Box>
				<Container>
					<Box sx={{ textAlign: "center" }} pb={5} pt={10}>
						<Typography variant="subtitle">CALCULATE PROFIT</Typography>
					</Box>
				</Container>
				<Box
					sx={{
						backgroundImage: `url(${"/assets/images/background/desktopbg2.png"})`,
						backgroundPosition: "center",
						height: "130vh",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
					}}
					pt={5}
				>
					<Home2 />
				</Box>
				<Container>
					<Box sx={{ textAlign: "center" }} pb={5} pt={10}>
						<Typography variant="subtitle">DASHBOARD</Typography>
					</Box>
				</Container>
				<Box
					sx={{
						backgroundImage:
							"radial-gradient(closest-side at 40% 40%,#9C702A,black)",
						backgroundPosition: "center",
						height: "110vh",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
					}}
				>
					<Home3 />
				</Box>
				<Footer />
			</Box>
		</>
	);
};

export default Home;
