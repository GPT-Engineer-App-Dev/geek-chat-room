import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to Tech Forum</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Join the discussion on the latest in technology, programming, and hardware.</p>
        </CardContent>
      </Card>
      <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
    </div>
  );
};

export default Index;