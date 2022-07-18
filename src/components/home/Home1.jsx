import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";

const Home1 = () => {
	return (
		<>
			<Container>
				<Grid container>
					<Grid item pt={10} md={5}>
						<Box pt={{ md: 10, sm: 5, xs: 2 }} pb={{ md: 20, sm: 10, xs: 5 }}>
							<Typography
								variant="title"
								fontSize={{ md: "2.7rem", sm: "2rem", xs: "1.8rem" }}
							>
								Stable & Profitable Yield Farming Dapp on
							</Typography>
							<Typography
								color="primary"
								variant="title"
								fontSize={{ md: "2.7rem", sm: "2rem", xs: "1.8rem" }}
							>
								&nbsp;Binance Smart Chain
							</Typography>
							<Typography
								variant="body1"
								py={3}
								fontSize={{ md: "18px", sm: "16px", xs: "14px" }}
							>
								From 7.8 to 17% Daily ROI 5 Levels of Referral Rewards
							</Typography>
							<Button
								variant="contained"
								sx={{
									paddingY: { sm: "15px", xs: "10px" },
									paddingX: { sm: "50px", xs: "35px" },
									background:
										"linear-gradient(94.25deg, #EEBE62 0%, #9C702A 31.82%, #EEBE62 75.71%, #9C702A 98%)",
									border: "1.6875px solid #EEBE62",
									backdropFilter: "blur(16.875px)",
									borderRadius: "40.5px",
									"&:hover": {
										background:
											"linear-gradient(94.25deg, #9C702A 0%, #EEBE62 31.82%, #9C702A 75.71%, #EEBE62 98%)",
									},
								}}
							>
								Deposit
							</Button>
						</Box>
					</Grid>
					<Grid
						item
						md={7}
						sx={{
							position: "relative",
							width: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									width: "275px",
									height: "120px",
									background: "rgba(238, 190, 98, 0.12)",
									backdropFilter: "blur(25px)",
									border: "1.5px solid #EEBE62",
									borderRadius: "10px",
									boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
									position: { md: "absolute", sm: "static" },
									left: "45%",
									bottom: "22%",
								}}
							>
								<Typography fontSize="18px">Total BNB Invested</Typography>
								<Typography fontSize="40px">1901.3376</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									width: "275px",
									height: "120px",
									background: "rgba(238, 190, 98, 0.12)",
									backdropFilter: "blur(25px)",
									border: "1.5px solid #EEBE62",
									borderRadius: "10px",
									boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
									position: { md: "absolute", sm: "static" },
									left: "9%",
									bottom: "8%",
								}}
								mt={2}
							>
								<Typography fontSize="18px">
									Total Referral BNB Reward
								</Typography>
								<Typography fontSize="40px">153.7155</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Home1;
