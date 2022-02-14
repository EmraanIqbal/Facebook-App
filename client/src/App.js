import { Grid } from "@mui/material";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item sm={12} xs={10}>
          <LoginPage />
        </Grid>
      </Grid>
    </div>
    // <LoginPage />
  );
}

export default App;
