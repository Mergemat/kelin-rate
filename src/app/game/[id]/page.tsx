import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Info } from "./_components/info";

export default async function GamePage() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 py-6 sm:px-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <Info />
      <Card>
        <CardHeader>
          <CardTitle>Поставить оценку</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
