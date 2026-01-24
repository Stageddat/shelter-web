"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useEffect, useState } from "react";
import { Mail, Lock } from "lucide-react";
import { getUser } from "@/services/auth/getUser";
import LoginForm from "@/components/login/loginForm";

export default function Login() {
  // TODO: login
  // cargar los usuarios si hay y mostrar solo form de contraseña
  // añadir aviso si no se detecta usuario
  // redirigir a dashboard al logearse

  // TODO: separar en diferentes views el FORM
  // 1. login mail y pass
  // 2. login user y pass

  return (
    <div>
      <h1>LOGIN!!!!</h1>
      <div>
        <LoginForm />
      </div>{" "}
    </div>
  );
}
