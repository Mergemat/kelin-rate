import { Minus, Plus, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { ReviewCard } from "./review-card";

export function Info() {
  return (
    <div className="flex flex-col items-start gap-12 lg:col-span-2">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
        Ori and the Will of the Wisps
      </h1>
      <div className="flex w-full flex-col gap-4">
        <img
          src="https://files.vgtimes.ru/download/posts/2020-04/1587708202_wp3971146.jpg"
          className="h-60 w-full rounded-xl border border-foreground/10 object-cover sm:h-96"
        />
        <div className="flex flex-col justify-between gap-5 sm:flex-row">
          <ReviewCard label="Оценка Келина (AI)" rating={2} />
          <ReviewCard label="Оценка пользователей" rating={2} />
        </div>
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-4xl">Саммари</CardTitle>
        </CardHeader>
        <CardContent className="text-xl tracking-wider lg:text-2xl lg:font-light lg:leading-9">
          Несмотря на красивую графику, трогательный сюжет и эпичные босс-файты,
          игра имеет множество недостатков в геймплее и дизайне уровней. Боевая
          система и платформинг упрощены и неинтересны, баланс сломан, а
          большинство способностей используются только в определенных локациях.
          Игра также страдает от плохой оптимизации и огромного количества
          багов.
        </CardContent>
      </Card>
      <Points points={[]} />

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
  );
}

function Points({ points }: { points: string[] }) {
  return (
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
  );
}
