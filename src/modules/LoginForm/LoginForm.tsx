import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { checkInputText } from "../../utils/formValidation";
import { useTranslation } from "react-i18next";

interface Props {
  onSelectUser: (username: string) => void;
}

export const LoginForm = ({ onSelectUser }: Props) => {
  const [username, setUsername] = useState("");
  const [hasError, setHasError] = useState<boolean>(false);
  const { t } = useTranslation();

  const onValidateInput = () => {
    const isValid = checkInputText(username);
    setHasError(!isValid);
    if (isValid) onSelectUser(username);
  };

  return (
    <Card>
      <CardContent>
        <FormControl>
          <TextField
            error={hasError}
            helperText={hasError ? t("login.input.error") : ""}
            id="username"
            placeholder={t("login.input.placeholder")}
            label={t("login.input.label")}
            variant="standard"
            inputMode="text"
            color="primary"
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button onClick={onValidateInput} variant="contained" color="primary">
          {t("login.button.label")}
        </Button>
      </CardActions>
    </Card>
  );
};
