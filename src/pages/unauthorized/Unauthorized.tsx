import { Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-muted/50 to-muted p-4">
      <Card className="w-full max-w-md shadow-xl border border-border/50 backdrop-blur-md bg-background/80 animate-fade-in">
        <CardHeader className="flex flex-col items-center space-y-3">
          <div className="p-3 rounded-full bg-destructive/10">
            <Lock className="h-8 w-8 text-destructive" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">Access Denied</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            You don’t have permission to view this page. Please log in or return to the previous page.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Button
            onClick={() => navigate(-1)}
            variant="secondary"
            size="lg"
            className="flex items-center gap-2 hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
