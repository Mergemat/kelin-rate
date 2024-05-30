"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  FormField,
  useForm,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "~/components/ui/form";
import { cn } from "~/lib/utils";
import { useSession } from "next-auth/react";

const ratingSchema = z.object({
  rating: z.number().min(1).max(5),
});

export function ReviewForm() {
  const session = useSession();
  const [currentHover, setCurrentHover] = useState(0);
  const form = useForm({
    schema: ratingSchema,
    defaultValues: {
      rating: 1,
    },
  });

  const onSubmit = (data: z.infer<typeof ratingSchema>) => {
    console.log(data);
  };

  return (
    <Card className="lg:sticky lg:top-24">
      <CardHeader>
        <CardTitle>Оцените игру!</CardTitle>
      </CardHeader>
      <CardContent>
        {session.status === "authenticated" ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Оценка</FormLabel>
                    <FormControl>
                      <div className="flex gap-6">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              onMouseDown={() => field.onChange(i + 1)}
                              onMouseEnter={() => setCurrentHover(i)}
                              className={cn(
                                "fill-secondary stroke-secondary transition-colors ease-in-out md:h-8 md:w-8",
                                i <= currentHover &&
                                  "fill-secondary stroke-primary/50",
                                i < form.getValues().rating &&
                                  "fill-primary stroke-primary",
                              )}
                            />
                          ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Оставить оценку</Button>
            </form>
          </Form>
        ) : (
          "Вы должны войти в аккаунт"
        )}
      </CardContent>
    </Card>
  );
}
