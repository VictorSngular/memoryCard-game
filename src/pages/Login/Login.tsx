import { Container, Grid } from "@mui/material";
import { LoginForm } from "../../modules/LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/userSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSelectUser = (username: string) => {
    dispatch(setUser(username));
    navigate("/game");
  };
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <LoginForm onSelectUser={onSelectUser} />
        </Grid>
      </Grid>
    </Container>
  );
};
