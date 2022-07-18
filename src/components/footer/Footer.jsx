import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
	return (
		<>
			<Box
				py={2}
				sx={{
					borderTop: "1px solid #eebe62",
				}}
			>
				<Container>
					<Grid
						container
						py={3}
						sx={{ display: "flex", justifyContent: "center" }}
					>
						<Grid
							item
							sm={6}
							py={1}
							sx={{
								display: "flex",
								justifyContent: "flex-start",
								alignItems: "center",
							}}
						>
							<Typography>© 2021 BNBMatrix</Typography>
						</Grid>
						<Grid
							item
							sm={2}
							sx={{
								display: "flex",
								justifyContent: "flex-end",
							}}
							pt={{ sm: 0, xs: 2 }}
						>
							{/* <Box
								sx={{
									display: "flex",
								}}
							> */}
							<Link
								sx={{
									width: "130px",
									height: "50px",
									background: "rgba(238, 190, 98, 0.12)",
									backdropFilter: "blur(15px)",
									borderRadius: "10px",
									textDecoration: "none",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									border: "1px solid #eebe62",
								}}
							>
								Audit
							</Link>
						</Grid>
						<Grid
							item
							sm={2}
							sx={{
								display: "flex",
								justifyContent: "center",
							}}
							pt={{ sm: 0, xs: 2 }}
						>
							<Link
								sx={{
									width: "130px",
									height: "50px",
									background: "rgba(238, 190, 98, 0.12)",
									backdropFilter: "blur(15px)",
									borderRadius: "10px",
									textDecoration: "none",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									border: "1px solid #eebe62",
								}}
								mx={2}
							>
								FAQ
							</Link>
						</Grid>
						<Grid
							item
							sm={2}
							sx={{
								display: "flex",
								justifyContent: "flex-start",
							}}
							pt={{ sm: 0, xs: 2 }}
						>
							<Button
								variant="contained"
								sx={{
									width: "130px",
									height: "50px",
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
								Smart Contract
							</Button>
						</Grid>
						{/* </Box> */}
					</Grid>
				</Container>
			</Box>
		</>
	);
};

export default Footer;
