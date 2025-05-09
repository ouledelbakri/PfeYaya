
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from "react-router-dom";

type AuthFormProps = {
  isLogin?: boolean;
};

export function AuthForm({ isLogin = true }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // This would normally connect to a backend auth system
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        
        if (isLogin) {
          // In a real app, verify credentials against backend
          const demoUser = {
            id: "demo-user-123",
            name: "Utilisateur TerrePro",
            email: email,
            role: "farmer"
          };
          
          localStorage.setItem("terreproUser", JSON.stringify(demoUser));
          toast.success("Connexion réussie");
          navigate("/dashboard");
        } else {
          // In a real app, register user in backend
          const newUser = {
            id: "new-user-" + Date.now(),
            name: name || "Utilisateur TerrePro",
            email: email,
            role: "farmer"
          };
          
          localStorage.setItem("terreproUser", JSON.stringify(newUser));
          toast.success("Compte créé avec succès");
          navigate("/dashboard");
        }
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      toast.error("Une erreur s'est produite");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{isLogin ? "Connexion" : "Créer un compte"}</CardTitle>
        <CardDescription>
          {isLogin
            ? "Saisissez vos identifiants pour accéder à votre compte"
            : "Inscrivez-vous pour créer un compte TerrePro"}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLogin}
                placeholder="Votre nom"
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="votre.email@exemple.fr"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Mot de passe</Label>
              {isLogin && (
                <a href="#" className="text-sm text-terre-green-700 hover:text-terre-green-600">
                  Mot de passe oublié?
                </a>
              )}
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button 
            type="submit" 
            className="w-full bg-terre-green-600 hover:bg-terre-green-700" 
            disabled={isLoading}
          >
            {isLoading
              ? "Chargement..."
              : isLogin
              ? "Se connecter"
              : "Créer un compte"}
          </Button>
          <div className="text-sm text-center">
            {isLogin ? (
              <p>
                Pas encore de compte?{" "}
                <a href="/register" className="text-terre-green-700 hover:text-terre-green-600">
                  S'inscrire
                </a>
              </p>
            ) : (
              <p>
                Déjà un compte?{" "}
                <a href="/login" className="text-terre-green-700 hover:text-terre-green-600">
                  Se connecter
                </a>
              </p>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
