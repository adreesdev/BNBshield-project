import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	InputBase,
	Paper,
	Slider,
	Typography,
} from "@mui/material";
import React from "react";

const Home2 = () => {
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
						sm: "top",
						xs: "top",
					},
					height: {
						md: "70vh",
						sm: "90vh",
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
					<Grid container pt={0} spacing={2} px={5}>
						<Grid item sm={12} xs={12} md={6}>
							<Typography>Deposit Period (days):</Typography>
							<Slider
								defaultValue={50}
								aria-label="Default"
								valueLabelDisplay="auto"
								color="secondary"
							/>
						</Grid>
						<Grid item sm={12} xs={12} md={6}>
							<Typography>Deposit Amount:</Typography>
							<Paper
								component="form"
								sx={{
									p: "2px 4px",
									display: "flex",
									alignItems: "center",
									background: "Transparent",
									border: "1px solid #EEBE62",
								}}
							>
								<InputBase
									sx={{ ml: 1, flex: 1 }}
									placeholder="1"
									inputProps={{ "aria-label": "1" }}
								/>

								<Divider
									sx={{ height: 28, m: 0.5 }}
									orientation="vertical"
									color="primary"
								/>
								<Typography color="primary" sx={{ p: "10px" }}>
									MAX
								</Typography>
							</Paper>
						</Grid>
					</Grid>
					<Grid container py={3} px={5}>
						<Grid
							item
							sm={12}
							xs={12}
							md={4}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								background: "rgba(0, 0, 0, 0.66)",
								backdropFilter: "blur(16.9526px)",
								border: "1.5px solid #EEBE62",
							}}
						>
							<Typography pt={3} pl={3}>
								Total Profit:
							</Typography>
							<Typography variant="subtitle" pb={2} pl={3}>
								149%
							</Typography>
						</Grid>
						<Grid
							item
							sm={12}
							xs={12}
							md={4}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								background: "rgba(0, 0, 0, 0.66)",
								backdropFilter: "blur(16.9526px)",
								border: "1.5px solid #EEBE62",
							}}
						>
							<Typography pt={3} pl={3}>
								Daily ROI:
							</Typography>
							<Typography variant="subtitle" pb={2} pl={3}>
								11.46%
							</Typography>
						</Grid>
						<Grid
							item
							sm={12}
							xs={12}
							md={4}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								background: "rgba(0, 0, 0, 0.66)",
								backdropFilter: "blur(16.9526px)",
								border: "1.5px solid #EEBE62",
							}}
						>
							<Typography pt={3} pl={3}>
								In 18 days you will earn:
							</Typography>
							<Typography variant="subtitle" pb={2} pl={3}>
								1.74 BNB
							</Typography>
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
					>
						Invest
					</Button>
				</Container>
			</Box>
		</>
	);
};

export default Home2;
