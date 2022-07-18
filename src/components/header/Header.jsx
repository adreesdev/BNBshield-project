import { Box, Button, Container } from "@mui/material";
import React, { useState } from "react";

const Header = () => {
	const [colorChange, setColorchange] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	window.addEventListener("scroll", changeNavbarColor);
	return (
		<>
			<Box
				py={2}
				transition="all 1s ease-in-out"
				sx={
					colorChange
						? {
								width: "100%",
								position: "fixed",
								zIndex: "2",
								backgroundColor: "#000",
						  }
						: ""
				}
			>
				<Container>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Box sx={{ width: { md: "230px", sm: "150px", xs: "120px" } }}>
							<img src="/assets/images/logo.png" alt="logo" width="100%" />
						</Box>

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
							}}
						>
							Connect
						</Button>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Header;
