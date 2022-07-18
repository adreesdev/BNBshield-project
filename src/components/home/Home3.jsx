import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Home3 = () => {
	return (
		<>
			<Box
				sx={{
					backgroundImage: {
						md: `url(${"/assets/images/frames/frame1.png"})`,
						sm: `url(${"/assets/images/frames/frame4.png"})`,
						xs: `url(${"/assets/images/frames/frame6.png"})`,
					},
					backgroundPosition: {
						md: "center",
						sm: "center",
						xs: "top",
					},
					height: {
						md: "70vh",
						sm: "100vh",
						xs: "110vh",
					},
					backgroundRepeat: "no-repeat",
					backgroundSize: {
						md: "cover",
						sm: "contain",
						xs: "contain",
					},
				}}
				pt={{ md: 15, sm: 5, xs: 5 }}
			>
				<Container
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						maxWidth: { md: "900px", sm: "600px" },
					}}
				>
					<Grid container>
						<Grid
							item
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							md={3}
							sm={6}
							xs={6}
						>
							<Box
								sx={{
									width: "180px",
									height: "100px",
									background: "rgba(0, 0, 0, 0.76)",
									backdropFilter: "blur(27px)",
									borderRadius: "10px",
									border: "1.69px solid #EEBE62",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography variant="subtitle02">
									Withdrawable (Divs+Refs)
								</Typography>
								<Typography variant="subtitle01">0 BNB</Typography>
							</Box>
						</Grid>
						<Grid
							item
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							md={3}
							sm={6}
							xs={6}
						>
							<Box
								sx={{
									width: "180px",
									height: "100px",
									background: "rgba(0, 0, 0, 0.76)",
									backdropFilter: "blur(27px)",
									borderRadius: "10px",
									border: "1.69px solid #EEBE62",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography variant="subtitle02">Total Invested</Typography>
								<Typography variant="subtitle01">0 BNB</Typography>
							</Box>
						</Grid>
						<Grid
							item
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							md={3}
							sm={6}
							xs={6}
						>
							<Box
								sx={{
									width: "180px",
									height: "100px",
									background: "rgba(0, 0, 0, 0.76)",
									backdropFilter: "blur(27px)",
									borderRadius: "10px",
									border: "1.69px solid #EEBE62",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography variant="subtitle02">Total Withdrawal</Typography>
								<Typography variant="subtitle01">0 BNB</Typography>
							</Box>
						</Grid>
						<Grid
							item
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							md={3}
							sm={6}
							xs={6}
						>
							<Box
								sx={{
									width: "180px",
									height: "100px",
									background: "rgba(0, 0, 0, 0.76)",
									backdropFilter: "blur(27px)",
									borderRadius: "10px",
									border: "1.69px solid #EEBE62",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography variant="subtitle02">
									Total Referral Reward
								</Typography>
								<Typography variant="subtitle01">0 BNB</Typography>
							</Box>
						</Grid>
					</Grid>
					<Typography variant="subtitle02" py={5}>
						Your Referral Link: You will get your ref link after investing
					</Typography>
					<Grid container pb={4}>
						<Grid
							item
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							md={3}
							sm={6}
							xs={6}
						>
							<Box
								sx={{
									width: "180px",
									height: "100px",
									background: "rgba(0, 0, 0, 0.76)",
									backdropFilter: "blur(27px)",
									borderRadius: "10px",
									border: "1.69px solid #EEBE62",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography variant="subtitle01">1 LVL</Typography>
								<Typography variant="subtitle02">0 referrals</Typography>
								<Typography variant="subtitle02">
									5% Referral Rewards
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							md={3}
							sm={6}
							xs={6}
						>
							<Box
								sx={{
									width: "180px",
									height: "100px",
									background: "rgba(0, 0, 0, 0.76)",
									backdropFilter: "blur(27px)",
									borderRadius: "10px",
									border: "1.69px solid #EEBE62",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography variant="subtitle01">2 LVL</Typography>
								<Typography variant="subtitle02">0 referrals</Typography>
								<Typography variant="subtitle02">
									5% Referral Rewards
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							md={3}
							sm={6}
							xs={6}
						>
							<Box
								sx={{
									width: "180px",
									height: "100px",
									background: "rgba(0, 0, 0, 0.76)",
									backdropFilter: "blur(27px)",
									borderRadius: "10px",
									border: "1.69px solid #EEBE62",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography variant="subtitle01">3 LVL</Typography>
								<Typography variant="subtitle02">0 referrals</Typography>
								<Typography variant="subtitle02">
									5% Referral Rewards
								</Typography>
							</Box>
						</Grid>
						<Grid
							item
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							md={3}
							sm={6}
							xs={6}
						>
							<Box
								sx={{
									width: "180px",
									height: "100px",
									background: "rgba(0, 0, 0, 0.76)",
									backdropFilter: "blur(27px)",
									borderRadius: "10px",
									border: "1.69px solid #EEBE62",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Typography variant="subtitle01">4 LVL</Typography>
								<Typography variant="subtitle02">0 referrals</Typography>
								<Typography variant="subtitle02">
									5% Referral Rewards
								</Typography>
							</Box>
						</Grid>
					</Grid>
					<Button
						variant="contained"
						sx={{
							width: { md: "181px", sm: "150px", xs: "120px" },
							height: { md: "52px", sm: "43px", xs: "35px" },
							background:
								"linear-gradient(94.25deg, #EEBE62 0%, #9C702A 31.82%, #EEBE62 75.71%, #9C702A 98%)",
							border: "1.6875px solid #EEBE62",
							backdropFilter: "blur(16.875px)",
							borderRadius: "40.5px",
							"&:hover": {
								background:
									"linear-gradient(94.25deg, #9C702A 0%, #EEBE62 31.82%, #9C702A 75.71%, #EEBE62 98%)",
							},
							display: "flex",
							justifyContent: "center",
							textAlign: "center",
						}}
						my={2}
					>
						Withdraw
					</Button>
				</Container>
			</Box>
		</>
	);
};

export default Home3;
