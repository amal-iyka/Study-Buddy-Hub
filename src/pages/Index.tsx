import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">Welcome to Study App</h1>
        <p className="text-muted-foreground">Your personal study management tool</p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to="/auth">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
