import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  DocsPage,
} from "../components";

export default function CardPage() {
  return (
    <DocsPage title="Card">
      <div className="grid md:grid-cols-2 gap-6">
        <Card variant="default" hoverable>
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>Standard card with subtle styling</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">This is a default card variant.</p>
          </CardContent>
          <CardFooter>
            <Button variant="primary" size="sm">
              Learn More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DocsPage>
  );
}
