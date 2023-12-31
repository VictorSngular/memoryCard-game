import { Container, Grid } from "@mui/material";
import { LoginForm } from "../../modules/LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/userSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSelectUser = (username: string) => {
    dispatch(setUser(username));
    navigate("/game");
  };
  return (
    <Container className="login">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          justifyContent={"center"}
          alignItems={"center"}
          xs={12}
          md={8}
        >
          <LoginForm onSelectUser={onSelectUser} />
        </Grid>
      </Grid>
    </Container>
  );
};
