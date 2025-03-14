
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, LogIn, User } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [showResetDialog, setShowResetDialog] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!email || !password || (!isLogin && !name)) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Mock authentication
    // In a real app, this would be replaced with actual authentication logic
    toast({
      title: isLogin ? "Login bem-sucedido!" : "Cadastro realizado!",
      description: "Redirecionando para o dashboard...",
    });
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  const handleGoogleLogin = () => {
    toast({
      title: "Login com Google",
      description: "Implementação futura - redirecionando para o dashboard...",
    });
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  const handleFacebookLogin = () => {
    toast({
      title: "Login com Facebook",
      description: "Implementação futura - redirecionando para o dashboard...",
    });
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!resetEmail) {
      toast({
        title: "Erro",
        description: "Por favor, informe seu e-mail para redefinir a senha.",
        variant: "destructive",
      });
      return;
    }
    
    // Mock password reset
    toast({
      title: "E-mail enviado",
      description: "Verifique sua caixa de entrada para redefinir sua senha.",
    });
    
    // Close the dialog and clear the email field
    setShowResetDialog(false);
    setResetEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pace-blue/10 to-pace-light flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md mb-8 text-center">
        <h1 className="text-4xl font-bold text-pace-blue">PACE RUN</h1>
        <p className="text-slate-600 mt-2">Acompanhe suas corridas, desafie-se e conecte-se com outros corredores</p>
      </div>

      <Card className="w-full max-w-md shadow-card animate-fade-in">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {isLogin ? 'Entrar' : 'Criar Conta'}
          </CardTitle>
          <CardDescription className="text-center">
            {isLogin 
              ? 'Entre para acessar sua conta PACE RUN' 
              : 'Cadastre-se para começar a correr'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nome completo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                    <User size={18} />
                  </div>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                  <Mail size={18} />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                  <Lock size={18} />
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                />
              </div>
              {isLogin && (
                <div className="flex justify-end">
                  <Button 
                    type="button" 
                    variant="link" 
                    className="p-0 h-auto text-pace-blue text-xs"
                    onClick={() => setShowResetDialog(true)}
                  >
                    Esqueceu a senha?
                  </Button>
                </div>
              )}
            </div>
            
            <Button type="submit" className="w-full bg-pace-blue hover:bg-pace-blue/90">
              <LogIn className="mr-2 h-4 w-4" />
              {isLogin ? 'Entrar' : 'Cadastrar'}
            </Button>
          </form>
          
          <div className="my-4 flex items-center">
            <div className="flex-grow h-px bg-slate-200"></div>
            <span className="px-3 text-xs text-slate-400 font-medium">OU CONTINUE COM</span>
            <div className="flex-grow h-px bg-slate-200"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              onClick={handleGoogleLogin}
              variant="outline" 
              className="border-slate-300"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Google
            </Button>
            
            <Button 
              onClick={handleFacebookLogin}
              variant="outline" 
              className="border-slate-300"
            >
              <svg className="mr-2 h-4 w-4" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
              </svg>
              Facebook
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button 
            variant="link" 
            onClick={() => setIsLogin(!isLogin)} 
            className="w-full text-pace-blue"
          >
            {isLogin 
              ? 'Não tem uma conta? Cadastre-se' 
              : 'Já tem uma conta? Entre'}
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')} 
            className="w-full text-slate-500 text-sm"
          >
            Entrar como convidado
          </Button>
        </CardFooter>
      </Card>

      {/* Dialog de Esqueci a Senha */}
      <Dialog open={showResetDialog} onOpenChange={setShowResetDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Recuperar senha</DialogTitle>
            <DialogDescription>
              Insira seu e-mail para receber um link de redefinição de senha.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleResetPassword}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="resetEmail" className="text-sm font-medium">
                  E-mail
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                    <Mail size={18} />
                  </div>
                  <Input
                    id="resetEmail"
                    type="email"
                    placeholder="seu@email.com"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" type="button" onClick={() => setShowResetDialog(false)}>
                Cancelar
              </Button>
              <Button type="submit" className="bg-pace-blue hover:bg-pace-blue/90">
                Enviar link
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
