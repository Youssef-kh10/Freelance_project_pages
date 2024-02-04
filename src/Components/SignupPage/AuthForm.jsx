import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { AccountCircle, MailOutline, LockOutlined } from "@mui/icons-material";
import "./AuthForm.css";

const AuthForm = () => {
  const [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  return (
    <div className={`Auth-form-container ${authMode}`}>
      <Typography variant="h4" className="Auth-form-title text-primary">
        {authMode === "signin" ? "Bienvenue !" : "Créer un compte"}
      </Typography>

      <form className="Auth-form">
        <div className="Auth-form-content">
          <div className="text-center">
            {authMode === "signin" ? (
              <>
                Pas encore inscrit ?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  S'inscrire
                </span>
              </>
            ) : (
              <>
                Déjà inscrit ?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Se connecter
                </span>
              </>
            )}
          </div>

          {authMode === "signup" && (
            <div className="form-group mt-3">
              <TextField
                label="Nom complet"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <AccountCircle fontSize="small" color="action" />
                  ),
                }}
              />
            </div>
          )}

          <div className="form-group mt-3">
            <TextField
              label="Adresse e-mail"
              type="email"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <MailOutline fontSize="small" color="action" />
                ),
              }}
            />
          </div>

          <div className="form-group mt-3">
            <TextField
              label="Mot de passe"
              type="password"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <LockOutlined fontSize="small" color="action" />
                ),
              }}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <Button variant="contained" color="primary" fullWidth>
              {authMode === "signin" ? "Se connecter" : "S'inscrire"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
