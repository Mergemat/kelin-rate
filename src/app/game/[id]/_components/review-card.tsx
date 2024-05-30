import { Rating } from "~/components/rating";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
export function ReviewCard({
  label,
  rating,
}: {
  label: string;
  rating: number;
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardDescription>{label}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Rating rating={rating} />
      </CardFooter>
    </Card>
  );
}
