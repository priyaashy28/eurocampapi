import Box from "@mui/material/Box";
import ErrorIcon from "@mui/icons-material/Error";
import MuiContainer from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Container = styled(MuiContainer)({
  display: "flex",
  flex: 1,
  flexDirection: "column",
});

export const ErrorComponent = () => (
  <Container>
    <Box
      flexDirection="column"
      display="flex"
      justifyContent="flex-start"
      flex={1}
      maxWidth="100%"
    >
      <Paper sx={{ py: 3, px: 2, my: 3, mx: 2 }}>
        <Typography variant="h1" align="center">
          <ErrorIcon color="primary" fontSize="large" />
        </Typography>
        <Typography variant="h1" align="center" paragraph>
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          We are sorry, the page did not load correctly.
        </Typography>
      </Paper>
    </Box>
  </Container>
);
