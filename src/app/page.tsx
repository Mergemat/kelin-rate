import { CreatePost } from "~/app/_components/create-post";
import { Minus, Plus, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { api } from "~/trpc/server";
import { cn } from "~/lib/utils";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start text-white">
      <div className="container flex max-w-6xl flex-col items-start gap-12 px-4 py-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-7xl">
          Ori and the Will of the Wisps
        </h1>
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <img
            src="https://files.vgtimes.ru/download/posts/2020-04/1587708202_wp3971146.jpg"
            className="h-48 w-full max-w-5xl rounded-xl border border-foreground/10 object-cover sm:h-96"
          />
          <div className="flex flex-col justify-between gap-5 sm:flex-row lg:w-[350px] lg:flex-col">
            <Card className="w-full">
              <CardHeader>
                <CardDescription>Оценка Келина (AI)</CardDescription>
                <CardTitle className="text-4xl">3</CardTitle>
              </CardHeader>
              <CardFooter>
                <div className="flex gap-6 lg:w-full lg:justify-between">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "fill-secondary stroke-secondary",
                          i < 3 && "fill-primary stroke-primary",
                        )}
                      />
                    ))}
                </div>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardDescription>Оценка Пользователей</CardDescription>
                <CardTitle className="text-4xl">3</CardTitle>
              </CardHeader>
              <CardFooter>
                <div className="flex gap-6 lg:w-full lg:justify-between">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "fill-secondary stroke-secondary",
                          i < 3 && "fill-primary stroke-primary",
                        )}
                      />
                    ))}
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-4xl">Саммари</CardTitle>
          </CardHeader>
          <CardContent className="text-xl tracking-wider lg:text-2xl lg:font-light lg:leading-9">
            Несмотря на красивую графику, трогательный сюжет и эпичные
            босс-файты, игра имеет множество недостатков в геймплее и дизайне
            уровней. Боевая система и платформинг упрощены и неинтересны, баланс
            сломан, а большинство способностей используются только в
            определенных локациях. Игра также страдает от плохой оптимизации и
            огромного количества багов.
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-4xl">Поинты</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            {[
              "Боевка упрощена, осколки примитивны и ломают баланс, большая часть оружия бесполезна",
              "Платформинг скучный из-за обилия способностей, уровни слишком растянуты",
              "Погони - единственное интересное в платформинге",
              "Баланс здоровья, энергии и денег сломан, игра не наказывает за ошибки",
              "Секреты скучные и однообразные, квесты бессмысленные",
              "Хаб и NPC не несут никакой пользы для геймплея",
              "Плохая оптимизация и огромное количество багов",
            ].map((text, i) => (
              <div
                className="font-base flex w-fit gap-4 rounded-xl text-xl tracking-wider text-secondary-foreground lg:text-2xl lg:font-light lg:leading-9"
                key={i}
              >
                • {text}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-4xl">
                <Plus strokeWidth={5} className="h-6 w-6 stroke-green-200" />
                Плюсы
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 text-xl leading-8">
              {[
                "Красивая графика",
                "Трогательный сюжет",
                "Эпичные босс-файты с несколькими фазами и изменением окружения",
              ].map((text, i) => (
                <div
                  className="flex items-center gap-6 rounded-xl border border-foreground/10 bg-accent p-4"
                  key={i}
                >
                  <p className="text-lg font-medium text-secondary-foreground lg:w-11/12 lg:text-xl lg:tracking-wide">
                    {text}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-4xl">
                <Minus strokeWidth={5} className="h-6 w-6 stroke-destructive" />
                Минусы
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 text-xl leading-8">
              {[
                "Упрощенная и неинтересная боевая система",
                "Скучный платформинг из-за обилия способностей",
                "Сломанный баланс, игра не наказывает за ошибки",
                "Бесполезный хаб и однообразные квесты",
                "Плохая оптимизация и обилие багов",
              ].map((text, i) => (
                <div
                  className="flex items-center gap-6 rounded-xl border border-foreground/10 bg-accent p-4"
                  key={i}
                >
                  <p className="text-lg font-medium text-secondary-foreground lg:w-11/12 lg:text-xl lg:tracking-wide">
                    {text}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
