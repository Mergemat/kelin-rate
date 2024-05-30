import { Info } from "./_components/info";
import { ReviewForm } from "./_components/review-form";

export default async function GamePage() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 py-6 sm:px-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <Info />
      <ReviewForm />
    </main>
  );
}
